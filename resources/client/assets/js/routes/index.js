import Vue from 'vue'
import VueRouter from 'vue-router'

import ChangePassword from '../components/ChangePassword.vue'
import PermissionsIndex from '../components/cruds/Permissions/Index.vue'
import PermissionsCreate from '../components/cruds/Permissions/Create.vue'
import PermissionsShow from '../components/cruds/Permissions/Show.vue'
import PermissionsEdit from '../components/cruds/Permissions/Edit.vue'
import RolesIndex from '../components/cruds/Roles/Index.vue'
import RolesCreate from '../components/cruds/Roles/Create.vue'
import RolesShow from '../components/cruds/Roles/Show.vue'
import RolesEdit from '../components/cruds/Roles/Edit.vue'
import UsersIndex from '../components/cruds/Users/Index.vue'
import UsersCreate from '../components/cruds/Users/Create.vue'
import UsersShow from '../components/cruds/Users/Show.vue'
import UsersEdit from '../components/cruds/Users/Edit.vue'
import UserActionsIndex from '../components/cruds/UserActions/Index.vue'
import LoansIndex from '../components/cruds/Loans/Index.vue'
import LoansCreate from '../components/cruds/Loans/Create.vue'
import LoansShow from '../components/cruds/Loans/Show.vue'
import LoansEdit from '../components/cruds/Loans/Edit.vue'
import RepaymentsIndex from '../components/cruds/Repayments/Index.vue'
import RepaymentsCreate from '../components/cruds/Repayments/Create.vue'
import RepaymentsShow from '../components/cruds/Repayments/Show.vue'
import RepaymentsEdit from '../components/cruds/Repayments/Edit.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/change-password', component: ChangePassword, name: 'auth.change_password' },
    { path: '/permissions', component: PermissionsIndex, name: 'permissions.index' },
    { path: '/permissions/create', component: PermissionsCreate, name: 'permissions.create' },
    { path: '/permissions/:id', component: PermissionsShow, name: 'permissions.show' },
    { path: '/permissions/:id/edit', component: PermissionsEdit, name: 'permissions.edit' },
    { path: '/roles', component: RolesIndex, name: 'roles.index' },
    { path: '/roles/create', component: RolesCreate, name: 'roles.create' },
    { path: '/roles/:id', component: RolesShow, name: 'roles.show' },
    { path: '/roles/:id/edit', component: RolesEdit, name: 'roles.edit' },
    { path: '/users', component: UsersIndex, name: 'users.index' },
    { path: '/users/create', component: UsersCreate, name: 'users.create' },
    { path: '/users/:id', component: UsersShow, name: 'users.show' },
    { path: '/users/:id/edit', component: UsersEdit, name: 'users.edit' },
    { path: '/user-actions', component: UserActionsIndex, name: 'user_actions.index' },
    { path: '/loans', component: LoansIndex, name: 'loans.index' },
    { path: '/loans/create', component: LoansCreate, name: 'loans.create' },
    { path: '/loans/:id', component: LoansShow, name: 'loans.show' },
    { path: '/loans/:id/edit', component: LoansEdit, name: 'loans.edit' },
    { path: '/repayments', component: RepaymentsIndex, name: 'repayments.index' },
    { path: '/repayments/create', component: RepaymentsCreate, name: 'repayments.create' },
    { path: '/repayments/:id', component: RepaymentsShow, name: 'repayments.show' },
    { path: '/repayments/:id/edit', component: RepaymentsEdit, name: 'repayments.edit' },
]

export default new VueRouter({
    mode: 'history',
    base: '/admin',
    routes
})
