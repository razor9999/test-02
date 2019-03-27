function initialState() {
    return {
        item: {
            id: null,
            loan: null,
            amount: null,
            status: null,
            note: null,
            created_by: null,
        },
        loansAll: [],
        usersAll: [],
        statusEnum: [ { value: 'pending', label: 'Pending' }, { value: 'failed', label: 'Failed' }, { value: 'paid', label: 'Paid' }, ],
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
    loansAll: state => state.loansAll,
    usersAll: state => state.usersAll,
    statusEnum: state => state.statusEnum,
}

const actions = {
    storeData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.loan)) {
                params.set('loan_id', '')
            } else {
                params.set('loan_id', state.item.loan.id)
            }
            if (! _.isEmpty(state.item.status) && typeof state.item.status === 'object') {
                params.set('status', state.item.status.value)
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '')
            } else {
                params.set('created_by_id', state.item.created_by.id)
            }

            axios.post('/api/v1/repayments', params)
                .then(response => {
                    commit('resetState')
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    updateData({ commit, state, dispatch }) {
        commit('setLoading', true)
        dispatch('Alert/resetState', null, { root: true })

        return new Promise((resolve, reject) => {
            let params = new FormData();
            params.set('_method', 'PUT')

            for (let fieldName in state.item) {
                let fieldValue = state.item[fieldName];
                if (typeof fieldValue !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && typeof fieldValue[0] !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (let index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.loan)) {
                params.set('loan_id', '')
            } else {
                params.set('loan_id', state.item.loan.id)
            }
            if (! _.isEmpty(state.item.status) && typeof state.item.status === 'object') {
                params.set('status', state.item.status.value)
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '')
            } else {
                params.set('created_by_id', state.item.created_by.id)
            }

            axios.post('/api/v1/repayments/' + state.item.id, params)
                .then(response => {
                    commit('setItem', response.data.data)
                    resolve()
                })
                .catch(error => {
                    let message = error.response.data.message || error.message
                    let errors  = error.response.data.errors

                    dispatch(
                        'Alert/setAlert',
                        { message: message, errors: errors, color: 'danger' },
                        { root: true })

                    reject(error)
                })
                .finally(() => {
                    commit('setLoading', false)
                })
        })
    },
    fetchData({ commit, dispatch }, id) {
        axios.get('/api/v1/repayments/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchLoansAll')
    dispatch('fetchUsersAll')
    },
    fetchLoansAll({ commit }) {
        axios.get('/api/v1/loans')
            .then(response => {
                commit('setLoansAll', response.data.data)
            })
    },
    fetchUsersAll({ commit }) {
        axios.get('/api/v1/users')
            .then(response => {
                commit('setUsersAll', response.data.data)
            })
    },
    setLoan({ commit }, value) {
        commit('setLoan', value)
    },
    setAmount({ commit }, value) {
        commit('setAmount', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    setNote({ commit }, value) {
        commit('setNote', value)
    },
    setCreated_by({ commit }, value) {
        commit('setCreated_by', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setLoan(state, value) {
        state.item.loan = value
    },
    setAmount(state, value) {
        state.item.amount = value
    },
    setStatus(state, value) {
        state.item.status = value
    },
    setNote(state, value) {
        state.item.note = value
    },
    setCreated_by(state, value) {
        state.item.created_by = value
    },
    setLoansAll(state, value) {
        state.loansAll = value
    },
    setUsersAll(state, value) {
        state.usersAll = value
    },
    setStatusEnum(state, value) {
        state.statusEnum = value
    },
    setLoading(state, loading) {
        state.loading = loading
    },
    resetState(state) {
        state = Object.assign(state, initialState())
    }
}

export default {
    namespaced: true,
    state: initialState,
    getters,
    actions,
    mutations
}
