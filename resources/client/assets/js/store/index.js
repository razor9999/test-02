import Vue from 'vue'
import Vuex from 'vuex'
import Alert from './modules/alert'
import ChangePassword from './modules/change_password'
import Rules from './modules/rules'
import PermissionsIndex from './modules/Permissions'
import PermissionsSingle from './modules/Permissions/single'
import RolesIndex from './modules/Roles'
import RolesSingle from './modules/Roles/single'
import UsersIndex from './modules/Users'
import UsersSingle from './modules/Users/single'
import UserActionsIndex from './modules/UserActions'
import LoansIndex from './modules/Loans'
import LoansSingle from './modules/Loans/single'
import RepaymentsIndex from './modules/Repayments'
import RepaymentsSingle from './modules/Repayments/single'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        Alert,
        ChangePassword,
        Rules,
        PermissionsIndex,
        PermissionsSingle,
        RolesIndex,
        RolesSingle,
        UsersIndex,
        UsersSingle,
        UserActionsIndex,
        LoansIndex,
        LoansSingle,
        RepaymentsIndex,
        RepaymentsSingle,
    },
    strict: debug,
})
