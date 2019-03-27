function initialState() {
    return {
        item: {
            id: null,
            duration: null,
            repayment_frequency: null,
            interest_rate: null,
            arrangement_fee: null,
            status: null,
            created_by: null,
            loan_code: null,
        },
        usersAll: [],
        statusEnum: [ { value: 'unpaid', label: 'Unpaid' }, { value: 'partial_paid', label: 'Partial_paid' }, { value: 'repaid', label: 'Repaid' }, ],
        loading: false,
    }
}

const getters = {
    item: state => state.item,
    loading: state => state.loading,
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

            if (! _.isEmpty(state.item.status) && typeof state.item.status === 'object') {
                params.set('status', state.item.status.value)
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '')
            } else {
                params.set('created_by_id', state.item.created_by.id)
            }

            axios.post('/api/v1/loans', params)
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

            if (! _.isEmpty(state.item.status) && typeof state.item.status === 'object') {
                params.set('status', state.item.status.value)
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '')
            } else {
                params.set('created_by_id', state.item.created_by.id)
            }

            axios.post('/api/v1/loans/' + state.item.id, params)
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
        axios.get('/api/v1/loans/' + id)
            .then(response => {
                commit('setItem', response.data.data)
            })

        dispatch('fetchUsersAll')
    },
    fetchUsersAll({ commit }) {
        axios.get('/api/v1/users')
            .then(response => {
                commit('setUsersAll', response.data.data)
            })
    },
    setDuration({ commit }, value) {
        commit('setDuration', value)
    },
    setRepayment_frequency({ commit }, value) {
        commit('setRepayment_frequency', value)
    },
    setInterest_rate({ commit }, value) {
        commit('setInterest_rate', value)
    },
    setArrangement_fee({ commit }, value) {
        commit('setArrangement_fee', value)
    },
    setStatus({ commit }, value) {
        commit('setStatus', value)
    },
    setCreated_by({ commit }, value) {
        commit('setCreated_by', value)
    },
    setLoan_code({ commit }, value) {
        commit('setLoan_code', value)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

const mutations = {
    setItem(state, item) {
        state.item = item
    },
    setDuration(state, value) {
        state.item.duration = value
    },
    setRepayment_frequency(state, value) {
        state.item.repayment_frequency = value
    },
    setInterest_rate(state, value) {
        state.item.interest_rate = value
    },
    setArrangement_fee(state, value) {
        state.item.arrangement_fee = value
    },
    setStatus(state, value) {
        state.item.status = value
    },
    setCreated_by(state, value) {
        state.item.created_by = value
    },
    setLoan_code(state, value) {
        state.item.loan_code = value
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
