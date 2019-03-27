<template>
    <section class="content-wrapper" style="min-height: 960px;">
        <section class="content-header">
            <h1>Loans</h1>
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
                                    <label for="duration">Duration *</label>
                                    <input
                                            type="number"
                                            class="form-control"
                                            name="duration"
                                            placeholder="Enter Duration *"
                                            :value="item.duration"
                                            @input="updateDuration"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="repayment_frequency">Repayment frequency *</label>
                                    <input
                                            type="number"
                                            class="form-control"
                                            name="repayment_frequency"
                                            placeholder="Enter Repayment frequency *"
                                            :value="item.repayment_frequency"
                                            @input="updateRepayment_frequency"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="interest_rate">Interest rate *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="interest_rate"
                                            placeholder="Enter Interest rate *"
                                            :value="item.interest_rate"
                                            @input="updateInterest_rate"
                                            >
                                </div>
                                <div class="form-group">
                                    <label for="arrangement_fee">Arrangement fee *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="arrangement_fee"
                                            placeholder="Enter Arrangement fee *"
                                            :value="item.arrangement_fee"
                                            @input="updateArrangement_fee"
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
                                    <label for="loan_code">Loan code *</label>
                                    <input
                                            type="text"
                                            class="form-control"
                                            name="loan_code"
                                            placeholder="Enter Loan code *"
                                            :value="item.loan_code"
                                            @input="updateLoan_code"
                                            >
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
        ...mapGetters('LoansSingle', ['item', 'loading', 'statusEnum']),
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
        ...mapActions('LoansSingle', ['fetchData', 'updateData', 'resetState', 'setDuration', 'setRepayment_frequency', 'setInterest_rate', 'setArrangement_fee', 'setStatus', 'setLoan_code']),
        updateDuration(e) {
            this.setDuration(e.target.value)
        },
        updateRepayment_frequency(e) {
            this.setRepayment_frequency(e.target.value)
        },
        updateInterest_rate(e) {
            this.setInterest_rate(e.target.value)
        },
        updateArrangement_fee(e) {
            this.setArrangement_fee(e.target.value)
        },
        updateStatus(value) {
            this.setStatus(value)
        },
        updateLoan_code(e) {
            this.setLoan_code(e.target.value)
        },
        submitForm() {
            this.updateData()
                .then(() => {
                    this.$router.push({ name: 'loans.index' })
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
