<template>
    <section class="content-wrapper" style="min-height: 960px;">
        <section class="content-header">
            <h1>Repayment</h1>
        </section>

        <section class="content">
            <div class="row">
                <div class="col-xs-12">
                    <form @submit.prevent="submitForm" novalidate>
                        <div class="box">
                            <div class="box-header with-border">
                                <h3 class="box-title">Edit</h3>
                            </div>

                            <div class="box-body">
                                <back-buttton></back-buttton>
                            </div>

                            <bootstrap-alert />

                            <div class="box-body">
                                <div class="form-group">
                                    <label for="loan">Loan *</label>
                                    <v-select
                                            name="loan"
                                            label="loan_code"
                                            @input="updateLoan"
                                            :value="item.loan"
                                            :options="loansAll"
                                            />
                                </div>
                                <div class="form-group">
                                    <label for="amount">Amount *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="amount"
                                            placeholder="Enter Amount *"
                                            :value="item.amount"
                                            @input="updateAmount"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="status">Status *</label>
                                    <v-select
                                            name="status"
                                            @input="updateStatus"
                                            :value="item.status"
                                            :options="statusEnum"
                                            />
                                </div>
                                <div class="form-group">
                                    <label for="note">Note</label>
                                    <textarea
                                            rows="3"
                                            class="form-control"
                                            name="note"
                                            placeholder="Enter Note"
                                            :value="item.note"
                                            @input="updateNote"
                                            >
                                    </textarea>
                                </div>
                            </div>

                            <div class="box-footer">
                                <vue-button-spinner
                                        class="btn btn-primary btn-sm"
                                        :isLoading="loading"
                                        :disabled="loading"
                                        >
                                    Save
                                </vue-button-spinner>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    data() {
        return {
            // Code...
        }
    },
    computed: {
        ...mapGetters('RepaymentsSingle', ['item', 'loading', 'loansAll', 'statusEnum']),
    },
    created() {
        this.fetchData(this.$route.params.id)
    },
    destroyed() {
        this.resetState()
    },
    watch: {
        "$route.params.id": function() {
            this.resetState()
            this.fetchData(this.$route.params.id)
        }
    },
    methods: {
        ...mapActions('RepaymentsSingle', ['fetchData', 'updateData', 'resetState', 'setLoan', 'setAmount', 'setStatus', 'setNote']),
        updateLoan(value) {
            this.setLoan(value)
        },
        updateAmount(e) {
            this.setAmount(e.target.value)
        },
        updateStatus(value) {
            this.setStatus(value)
        },
        updateNote(e) {
            this.setNote(e.target.value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'repayments.index' })
                    this.$eventHub.$emit('update-success')
                })
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
</script>


<style scoped>

</style>
