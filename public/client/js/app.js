webpackJsonp([0],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/Alert.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('Alert', ['message', 'errors', 'color'])),
    created: function created() {
        // Code...
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('Alert', ['resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/BackButton.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        // Code...
    },

    methods: {
        routerBack: function routerBack() {
            this.$router.go(-1);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/ChangePassword.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('ChangePassword', ['current_password', 'new_password', 'new_password_confirmation', 'loading'])),
    created: function created() {
        // Code...
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('ChangePassword', ['storeData', 'resetState', 'setCurrentPassword', 'setNewPassword', 'setNewPasswordConfirmation']), {
        updateCurrentPassword: function updateCurrentPassword(e) {
            this.setCurrentPassword(e.target.value);
        },
        updateNewPassword: function updateNewPassword(e) {
            this.setNewPassword(e.target.value);
        },
        updateNewPasswordConfirmation: function updateNewPasswordConfirmation(e) {
            this.setNewPasswordConfirmation(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.storeData().then(function () {
                _this.$eventHub.$emit('update-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/EventHub.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('Rules', ['rules'])),
    created: function created() {
        this.$eventHub.$on('create-success', this.itemCreated);
        this.$eventHub.$on('update-success', this.itemUpdated);
        this.$eventHub.$on('delete-success', this.itemDeleted);
        this.$eventHub.$on('rules-update', this.rulesUpdate);
    },

    methods: {
        itemCreated: function itemCreated() {
            this.$awn.success('Your item has been successfully saved.');
        },
        itemUpdated: function itemUpdated() {
            this.$awn.success('Your item has been successfully updated.');
        },
        itemDeleted: function itemDeleted() {
            this.$awn.success('Your item has been successfully deleted.');
        },
        rulesUpdate: function rulesUpdate() {
            this.$ability.update([{ subject: 'all', actions: this.rules }]);
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    status: {
      type: String | Boolean,
      default: ''
    },
    type: {
      type: String,
      default: 'submit'
    }
  },
  computed: {
    getSpinnerClass: function getSpinnerClass() {
      return {
        'spinner fa fa-circle-o-notch fa-spin': this.loading,
        'check': !this.emptyStatus && this.isSuccess && !this.loading,
        'cross': !this.emptyStatus && !this.isSuccess && !this.loading
      };
    },
    getBackgroundClass: function getBackgroundClass() {
      return {
        'vue-btn-loader-error': !this.emptyStatus && !this.isSuccess,
        'vue-btn-loader-success': this.isSuccess,
        'is-loading': this.loading
      };
    },
    loading: function loading() {
      return this.isLoading;
    },
    getType: function getType() {
      return this.type;
    },
    isSuccess: function isSuccess() {
      return this.status === 'success' || this.status === true;
    },
    emptyStatus: function emptyStatus() {
      return this.status === '';
    },
    showSlot: function showSlot() {
      return this.loading || !this.loading && this.emptyStatus;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('LoansSingle', ['item', 'loading', 'statusEnum'])),
    created: function created() {
        // Code ...
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('LoansSingle', ['storeData', 'resetState', 'setDuration', 'setRepayment_frequency', 'setInterest_rate', 'setArrangement_fee', 'setStatus', 'setLoan_code']), {
        updateDuration: function updateDuration(e) {
            this.setDuration(e.target.value);
        },
        updateRepayment_frequency: function updateRepayment_frequency(e) {
            this.setRepayment_frequency(e.target.value);
        },
        updateInterest_rate: function updateInterest_rate(e) {
            this.setInterest_rate(e.target.value);
        },
        updateArrangement_fee: function updateArrangement_fee(e) {
            this.setArrangement_fee(e.target.value);
        },
        updateStatus: function updateStatus(value) {
            this.setStatus(value);
        },
        updateLoan_code: function updateLoan_code(e) {
            this.setLoan_code(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.storeData().then(function () {
                _this.$router.push({ name: 'loans.index' });
                _this.$eventHub.$emit('create-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('LoansSingle', ['item', 'loading', 'statusEnum'])),
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('LoansSingle', ['fetchData', 'updateData', 'resetState', 'setDuration', 'setRepayment_frequency', 'setInterest_rate', 'setArrangement_fee', 'setStatus', 'setLoan_code']), {
        updateDuration: function updateDuration(e) {
            this.setDuration(e.target.value);
        },
        updateRepayment_frequency: function updateRepayment_frequency(e) {
            this.setRepayment_frequency(e.target.value);
        },
        updateInterest_rate: function updateInterest_rate(e) {
            this.setInterest_rate(e.target.value);
        },
        updateArrangement_fee: function updateArrangement_fee(e) {
            this.setArrangement_fee(e.target.value);
        },
        updateStatus: function updateStatus(value) {
            this.setStatus(value);
        },
        updateLoan_code: function updateLoan_code(e) {
            this.setLoan_code(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.updateData().then(function () {
                _this.$router.push({ name: 'loans.index' });
                _this.$eventHub.$emit('update-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{ title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' }, { title: 'Duration', field: 'duration', sortable: true }, { title: 'Repayment frequency', field: 'repayment_frequency', sortable: true }, { title: 'Interest rate', field: 'interest_rate', sortable: true }, { title: 'Arrangement fee', field: 'arrangement_fee', sortable: true }, { title: 'Status', field: 'status', sortable: true }, { title: 'Created by', field: 'created_by', tdComp: __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default.a }, { title: 'Loan code', field: 'loan_code', sortable: true }, { title: 'Actions', tdComp: __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default.a, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'LoansIndex',
                route: 'loans',
                permission_prefix: 'loan_'
            }
        };
    },
    created: function created() {
        this.$root.relationships = this.relationships;
        this.fetchData();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('LoansIndex', ['data', 'total', 'loading', 'relationships'])),
    watch: {
        query: {
            handler: function handler(query) {
                this.setQuery(query);
            },

            deep: true
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('LoansIndex', ['fetchData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('LoansSingle', ['item'])),
    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('LoansSingle', ['fetchData', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('PermissionsSingle', ['item', 'loading'])),
    created: function created() {
        // Code ...
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('PermissionsSingle', ['storeData', 'resetState', 'setTitle']), {
        updateTitle: function updateTitle(e) {
            this.setTitle(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.storeData().then(function () {
                _this.$router.push({ name: 'permissions.index' });
                _this.$eventHub.$emit('create-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('PermissionsSingle', ['item', 'loading'])),
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('PermissionsSingle', ['fetchData', 'updateData', 'resetState', 'setTitle']), {
        updateTitle: function updateTitle(e) {
            this.setTitle(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.updateData().then(function () {
                _this.$router.push({ name: 'permissions.index' });
                _this.$eventHub.$emit('update-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{ title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' }, { title: 'Title', field: 'title', sortable: true }, { title: 'Actions', tdComp: __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default.a, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'PermissionsIndex',
                route: 'permissions',
                permission_prefix: 'permission_'
            }
        };
    },
    created: function created() {
        this.$root.relationships = this.relationships;
        this.fetchData();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('PermissionsIndex', ['data', 'total', 'loading', 'relationships'])),
    watch: {
        query: {
            handler: function handler(query) {
                this.setQuery(query);
            },

            deep: true
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('PermissionsIndex', ['fetchData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('PermissionsSingle', ['item'])),
    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('PermissionsSingle', ['fetchData', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RepaymentsSingle', ['item', 'loading', 'loansAll', 'statusEnum'])),
    created: function created() {
        this.fetchLoansAll();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RepaymentsSingle', ['storeData', 'resetState', 'setLoan', 'setAmount', 'setStatus', 'setNote', 'fetchLoansAll']), {
        updateLoan: function updateLoan(value) {
            this.setLoan(value);
        },
        updateAmount: function updateAmount(e) {
            this.setAmount(e.target.value);
        },
        updateStatus: function updateStatus(value) {
            this.setStatus(value);
        },
        updateNote: function updateNote(e) {
            this.setNote(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.storeData().then(function () {
                _this.$router.push({ name: 'repayments.index' });
                _this.$eventHub.$emit('create-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RepaymentsSingle', ['item', 'loading', 'loansAll', 'statusEnum'])),
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RepaymentsSingle', ['fetchData', 'updateData', 'resetState', 'setLoan', 'setAmount', 'setStatus', 'setNote']), {
        updateLoan: function updateLoan(value) {
            this.setLoan(value);
        },
        updateAmount: function updateAmount(e) {
            this.setAmount(e.target.value);
        },
        updateStatus: function updateStatus(value) {
            this.setStatus(value);
        },
        updateNote: function updateNote(e) {
            this.setNote(e.target.value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.updateData().then(function () {
                _this.$router.push({ name: 'repayments.index' });
                _this.$eventHub.$emit('update-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{ title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' }, { title: 'Loan', field: 'loan', tdComp: __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default.a }, { title: 'Amount', field: 'amount', sortable: true }, { title: 'Status', field: 'status', sortable: true }, { title: 'Note', field: 'note', sortable: true }, { title: 'Created by', field: 'created_by', tdComp: __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default.a }, { title: 'Actions', tdComp: __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default.a, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'RepaymentsIndex',
                route: 'repayments',
                permission_prefix: 'repayment_'
            }
        };
    },
    created: function created() {
        this.$root.relationships = this.relationships;
        this.fetchData();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RepaymentsIndex', ['data', 'total', 'loading', 'relationships'])),
    watch: {
        query: {
            handler: function handler(query) {
                this.setQuery(query);
            },

            deep: true
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RepaymentsIndex', ['fetchData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RepaymentsSingle', ['item'])),
    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RepaymentsSingle', ['fetchData', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RolesSingle', ['item', 'loading', 'permissionsAll'])),
    created: function created() {
        this.fetchPermissionsAll();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RolesSingle', ['storeData', 'resetState', 'setTitle', 'setPermission', 'fetchPermissionsAll']), {
        updateTitle: function updateTitle(e) {
            this.setTitle(e.target.value);
        },
        updatePermission: function updatePermission(value) {
            this.setPermission(value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.storeData().then(function () {
                _this.$router.push({ name: 'roles.index' });
                _this.$eventHub.$emit('create-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RolesSingle', ['item', 'loading', 'permissionsAll'])),
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RolesSingle', ['fetchData', 'updateData', 'resetState', 'setTitle', 'setPermission']), {
        updateTitle: function updateTitle(e) {
            this.setTitle(e.target.value);
        },
        updatePermission: function updatePermission(value) {
            this.setPermission(value);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.updateData().then(function () {
                _this.$router.push({ name: 'roles.index' });
                _this.$eventHub.$emit('update-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{ title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' }, { title: 'Title', field: 'title', sortable: true }, { title: 'Permissions', field: 'permission', tdComp: __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default.a }, { title: 'Actions', tdComp: __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default.a, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'RolesIndex',
                route: 'roles',
                permission_prefix: 'role_'
            }
        };
    },
    created: function created() {
        this.$root.relationships = this.relationships;
        this.fetchData();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RolesIndex', ['data', 'total', 'loading', 'relationships'])),
    watch: {
        query: {
            handler: function handler(query) {
                this.setQuery(query);
            },

            deep: true
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RolesIndex', ['fetchData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('RolesSingle', ['item'])),
    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('RolesSingle', ['fetchData', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{ title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' }, { title: 'User', field: 'user', tdComp: __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default.a }, { title: 'Action', field: 'action', sortable: true }, { title: 'Action model', field: 'action_model', sortable: true }, { title: 'Action id', field: 'action_id', sortable: true }, { title: 'Actions', tdComp: __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default.a, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'UserActionsIndex',
                route: 'user_actions',
                permission_prefix: 'user_action_'
            }
        };
    },
    created: function created() {
        this.$root.relationships = this.relationships;
        this.fetchData();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('UserActionsIndex', ['data', 'total', 'loading', 'relationships'])),
    watch: {
        query: {
            handler: function handler(query) {
                this.setQuery(query);
            },

            deep: true
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('UserActionsIndex', ['fetchData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('UsersSingle', ['item', 'loading', 'rolesAll'])),
    created: function created() {
        this.fetchRolesAll();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('UsersSingle', ['storeData', 'resetState', 'setName', 'setEmail', 'setPassword', 'setRole', 'setApproved', 'fetchRolesAll']), {
        updateName: function updateName(e) {
            this.setName(e.target.value);
        },
        updateEmail: function updateEmail(e) {
            this.setEmail(e.target.value);
        },
        updatePassword: function updatePassword(e) {
            this.setPassword(e.target.value);
        },
        updateRole: function updateRole(value) {
            this.setRole(value);
        },
        updateApproved: function updateApproved(e) {
            this.setApproved(e.target.checked);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.storeData().then(function () {
                _this.$router.push({ name: 'users.index' });
                _this.$eventHub.$emit('create-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('UsersSingle', ['item', 'loading', 'rolesAll'])),
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('UsersSingle', ['fetchData', 'updateData', 'resetState', 'setName', 'setEmail', 'setPassword', 'setRole', 'setApproved']), {
        updateName: function updateName(e) {
            this.setName(e.target.value);
        },
        updateEmail: function updateEmail(e) {
            this.setEmail(e.target.value);
        },
        updatePassword: function updatePassword(e) {
            this.setPassword(e.target.value);
        },
        updateRole: function updateRole(value) {
            this.setRole(value);
        },
        updateApproved: function updateApproved(e) {
            this.setApproved(e.target.checked);
        },
        submitForm: function submitForm() {
            var _this = this;

            this.updateData().then(function () {
                _this.$router.push({ name: 'users.index' });
                _this.$eventHub.$emit('update-success');
            }).catch(function (error) {
                console.error(error);
            });
        }
    })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__dtmodules_DatatableSingle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableList.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__ = __webpack_require__("./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            columns: [{ title: '#', field: 'id', sortable: true, colStyle: 'width: 50px;' }, { title: 'Name', field: 'name', sortable: true }, { title: 'Email', field: 'email', sortable: true }, { title: 'Role', field: 'role', tdComp: __WEBPACK_IMPORTED_MODULE_3__dtmodules_DatatableList___default.a }, { title: 'Approved', field: 'approved', tdComp: __WEBPACK_IMPORTED_MODULE_4__dtmodules_DatatableCheckbox___default.a, colStyle: 'width: 50px;' }, { title: 'Actions', tdComp: __WEBPACK_IMPORTED_MODULE_1__dtmodules_DatatableActions___default.a, visible: true, thClass: 'text-right', tdClass: 'text-right', colStyle: 'width: 130px;' }],
            query: { sort: 'id', order: 'desc' },
            xprops: {
                module: 'UsersIndex',
                route: 'users',
                permission_prefix: 'user_'
            }
        };
    },
    created: function created() {
        this.$root.relationships = this.relationships;
        this.fetchData();
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('UsersIndex', ['data', 'total', 'loading', 'relationships'])),
    watch: {
        query: {
            handler: function handler(query) {
                this.setQuery(query);
            },

            deep: true
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('UsersIndex', ['fetchData', 'setQuery', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        this.fetchData(this.$route.params.id);
    },
    destroyed: function destroyed() {
        this.resetState();
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapGetters"])('UsersSingle', ['item'])),
    watch: {
        "$route.params.id": function $routeParamsId() {
            this.resetState();
            this.fetchData(this.$route.params.id);
        }
    },
    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["mapActions"])('UsersSingle', ['fetchData', 'resetState']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['row', 'xprops'],
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        // Code...
    },

    methods: {
        destroyData: function destroyData(id) {
            var _this = this;

            this.$swal({
                title: 'Are you sure?',
                text: 'You won\'t be able to revert this!',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Delete',
                confirmButtonColor: '#dd4b39',
                focusCancel: true,
                reverseButtons: true
            }).then(function (result) {
                if (result.value) {
                    _this.$store.dispatch(_this.xprops.module + '/destroyData', id).then(function (result) {
                        _this.$eventHub.$emit('delete-success');
                    });
                }
            });
        }
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value'],
    data: function data() {
        return {
            // Code...
        };
    },

    computed: {
        // Code...
    },
    created: function created() {
        // Code...
    },
    destroyed: function destroyed() {
        // Code...
    },

    methods: {
        // Code...
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value', 'field'],
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        // Code...
    },

    methods: {
        // Code...
    }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['value', 'field'],
    data: function data() {
        return {
            // Code...
        };
    },
    created: function created() {
        // Code...
    },

    methods: {
        // Code...
    }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*!\n * Datetimepicker for Bootstrap 3\n * version : 4.17.47\n * https://github.com/Eonasdan/bootstrap-datetimepicker/\n */\n.bootstrap-datetimepicker-widget {\n  list-style: none;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu {\n  display: block;\n  margin: 2px 0;\n  padding: 4px;\n  width: 19em;\n}\n@media (min-width: 768px) {\n  .bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs {\n    width: 38em;\n  }\n}\n@media (min-width: 992px) {\n  .bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs {\n    width: 38em;\n  }\n}\n@media (min-width: 1200px) {\n  .bootstrap-datetimepicker-widget.dropdown-menu.timepicker-sbs {\n    width: 38em;\n  }\n}\n.bootstrap-datetimepicker-widget.dropdown-menu:before,\n.bootstrap-datetimepicker-widget.dropdown-menu:after {\n  content: '';\n  display: inline-block;\n  position: absolute;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.bottom:before {\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-bottom: 7px solid #ccc;\n  border-bottom-color: rgba(0, 0, 0, 0.2);\n  top: -7px;\n  left: 7px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.bottom:after {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-bottom: 6px solid white;\n  top: -6px;\n  left: 8px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.top:before {\n  border-left: 7px solid transparent;\n  border-right: 7px solid transparent;\n  border-top: 7px solid #ccc;\n  border-top-color: rgba(0, 0, 0, 0.2);\n  bottom: -7px;\n  left: 6px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.top:after {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid white;\n  bottom: -6px;\n  left: 7px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:before {\n  left: auto;\n  right: 6px;\n}\n.bootstrap-datetimepicker-widget.dropdown-menu.pull-right:after {\n  left: auto;\n  right: 7px;\n}\n.bootstrap-datetimepicker-widget .list-unstyled {\n  margin: 0;\n}\n.bootstrap-datetimepicker-widget a[data-action] {\n  padding: 6px 0;\n}\n.bootstrap-datetimepicker-widget a[data-action]:active {\n  box-shadow: none;\n}\n.bootstrap-datetimepicker-widget .timepicker-hour,\n.bootstrap-datetimepicker-widget .timepicker-minute,\n.bootstrap-datetimepicker-widget .timepicker-second {\n  width: 54px;\n  font-weight: bold;\n  font-size: 1.2em;\n  margin: 0;\n}\n.bootstrap-datetimepicker-widget button[data-action] {\n  padding: 6px;\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"incrementHours\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Increment Hours\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"incrementMinutes\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Increment Minutes\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"decrementHours\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Decrement Hours\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"decrementMinutes\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Decrement Minutes\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"showHours\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Show Hours\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"showMinutes\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Show Minutes\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"togglePeriod\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Toggle AM/PM\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"clear\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Clear the picker\";\n}\n.bootstrap-datetimepicker-widget .btn[data-action=\"today\"]::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Set the date to today\";\n}\n.bootstrap-datetimepicker-widget .picker-switch {\n  text-align: center;\n}\n.bootstrap-datetimepicker-widget .picker-switch::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Toggle Date and Time Screens\";\n}\n.bootstrap-datetimepicker-widget .picker-switch td {\n  padding: 0;\n  margin: 0;\n  height: auto;\n  width: auto;\n  line-height: inherit;\n}\n.bootstrap-datetimepicker-widget .picker-switch td span {\n  line-height: 2.5;\n  height: 2.5em;\n  width: 100%;\n}\n.bootstrap-datetimepicker-widget table {\n  width: 100%;\n  margin: 0;\n}\n.bootstrap-datetimepicker-widget table td,\n.bootstrap-datetimepicker-widget table th {\n  text-align: center;\n  border-radius: 4px;\n}\n.bootstrap-datetimepicker-widget table th {\n  height: 20px;\n  line-height: 20px;\n  width: 20px;\n}\n.bootstrap-datetimepicker-widget table th.picker-switch {\n  width: 145px;\n}\n.bootstrap-datetimepicker-widget table th.disabled,\n.bootstrap-datetimepicker-widget table th.disabled:hover {\n  background: none;\n  color: #777777;\n  cursor: not-allowed;\n}\n.bootstrap-datetimepicker-widget table th.prev::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Previous Month\";\n}\n.bootstrap-datetimepicker-widget table th.next::after {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n  content: \"Next Month\";\n}\n.bootstrap-datetimepicker-widget table thead tr:first-child th {\n  cursor: pointer;\n}\n.bootstrap-datetimepicker-widget table thead tr:first-child th:hover {\n  background: #eeeeee;\n}\n.bootstrap-datetimepicker-widget table td {\n  height: 54px;\n  line-height: 54px;\n  width: 54px;\n}\n.bootstrap-datetimepicker-widget table td.cw {\n  font-size: .8em;\n  height: 20px;\n  line-height: 20px;\n  color: #777777;\n}\n.bootstrap-datetimepicker-widget table td.day {\n  height: 20px;\n  line-height: 20px;\n  width: 20px;\n}\n.bootstrap-datetimepicker-widget table td.day:hover,\n.bootstrap-datetimepicker-widget table td.hour:hover,\n.bootstrap-datetimepicker-widget table td.minute:hover,\n.bootstrap-datetimepicker-widget table td.second:hover {\n  background: #eeeeee;\n  cursor: pointer;\n}\n.bootstrap-datetimepicker-widget table td.old,\n.bootstrap-datetimepicker-widget table td.new {\n  color: #777777;\n}\n.bootstrap-datetimepicker-widget table td.today {\n  position: relative;\n}\n.bootstrap-datetimepicker-widget table td.today:before {\n  content: '';\n  display: inline-block;\n  border: solid transparent;\n  border-width: 0 0 7px 7px;\n  border-bottom-color: #337ab7;\n  border-top-color: rgba(0, 0, 0, 0.2);\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n}\n.bootstrap-datetimepicker-widget table td.active,\n.bootstrap-datetimepicker-widget table td.active:hover {\n  background-color: #337ab7;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.bootstrap-datetimepicker-widget table td.active.today:before {\n  border-bottom-color: #fff;\n}\n.bootstrap-datetimepicker-widget table td.disabled,\n.bootstrap-datetimepicker-widget table td.disabled:hover {\n  background: none;\n  color: #777777;\n  cursor: not-allowed;\n}\n.bootstrap-datetimepicker-widget table td span {\n  display: inline-block;\n  width: 54px;\n  height: 54px;\n  line-height: 54px;\n  margin: 2px 1.5px;\n  cursor: pointer;\n  border-radius: 4px;\n}\n.bootstrap-datetimepicker-widget table td span:hover {\n  background: #eeeeee;\n}\n.bootstrap-datetimepicker-widget table td span.active {\n  background-color: #337ab7;\n  color: #fff;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);\n}\n.bootstrap-datetimepicker-widget table td span.old {\n  color: #777777;\n}\n.bootstrap-datetimepicker-widget table td span.disabled,\n.bootstrap-datetimepicker-widget table td span.disabled:hover {\n  background: none;\n  color: #777777;\n  cursor: not-allowed;\n}\n.bootstrap-datetimepicker-widget.usetwentyfour td.hour {\n  height: 27px;\n  line-height: 27px;\n}\n.bootstrap-datetimepicker-widget.wider {\n  width: 21em;\n}\n.bootstrap-datetimepicker-widget .datepicker-decades .decade {\n  line-height: 1.8em !important;\n}\n.input-group.date .input-group-addon {\n  cursor: pointer;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00e6a7c3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0422ebea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04997954\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fade-enter-active[data-v-04997954],\n.fade-leave-active[data-v-04997954] {\n    -webkit-transition: opacity 1s;\n    transition: opacity 1s;\n}\n.fade-enter[data-v-04997954],\n.fade-leave-active[data-v-04997954] {\n    opacity: 0;\n    will-change: opacity;\n}\n.vue-btn[data-v-04997954] {\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-shadow: none;\n    box-shadow: none;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    -webkit-box-pack: start;\n    -ms-flex-pack: start;\n    justify-content: flex-start;\n    position: relative;\n    vertical-align: top;\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    text-align: center;\n    white-space: nowrap;\n    -webkit-transition: .3s all ease;\n    transition: .3s all ease;\n}\nbutton.vue-btn-loader-error[data-v-04997954]:not(.is-loading) {\n    width: 48px;\n    background-color: #F44336;\n    color: #fff;\n}\nbutton.vue-btn-loader-success[data-v-04997954]:not(.is-loading) {\n    width: 48px;\n    background-color: #8BC34A;\n    color: #fff;\n}\nbutton.vue-btn[data-v-04997954]:disabled {\n    cursor: not-allowed;\n}\n\n/**\n      Spinner Icon\n  **/\n.spinner[data-v-04997954] {\n    margin-right: 8px;\n    opacity: 1;\n    filter: alpha(opacity=100);\n    -webkit-transition: .3s all ease;\n    transition: .3s all ease;\n}\n\n/**\n      Check Icon\n  **/\n.check[data-v-04997954] {\n    display: inline-block;\n    width: 23px;\n    height: 24px;\n    border-radius: 50%;\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    color: white;\n    will-change: transform;\n}\n.check[data-v-04997954]:before {\n    content: \"\";\n    position: absolute;\n    width: 3px;\n    height: 9px;\n    background-color: #fff;\n    left: 11px;\n    top: 6px;\n}\n.check[data-v-04997954]:after {\n    content: \"\";\n    position: absolute;\n    width: 3px;\n    height: 3px;\n    background-color: #fff;\n    left: 8px;\n    top: 12px;\n}\n\n/**\n      Cross Icon\n  **/\n.cross[data-v-04997954] {\n    display: inline-block;\n    width: 17px;\n    height: 16px;\n    position: relative;\n}\n.cross[data-v-04997954]:before,\n.cross[data-v-04997954]:after {\n    position: absolute;\n    left: 8px;\n    content: ' ';\n    height: 16px;\n    width: 2px;\n    background-color: #fff;\n}\n.cross[data-v-04997954]:before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg);\n    will-change: transform;\n}\n.cross[data-v-04997954]:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    will-change: transform;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c0911\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d427ed0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a01839\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/Alert.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.row-alert[data-v-15a01839] {\n    padding: 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e143d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a272ffb\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dfc2188\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e1838de\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2eb33288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32b2c6a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41b41ab2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53b64a44\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/ChangePassword.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58c7cd95\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da60a69\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5faec504\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64b133c9\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6711dbbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dde2a90\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-732cff23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74f7222f\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-759b722e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ecf8d75\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-808a5428\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/BackButton.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2e175e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b02247d8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b228ba68\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5913994\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6de46a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/EventHub.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("./node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../css-loader/index.js!./bootstrap-datetimepicker.css", function() {
			var newContent = require("!!../../../css-loader/index.js!./bootstrap-datetimepicker.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! version : 4.17.47
 =========================================================
 bootstrap-datetimejs
 https://github.com/Eonasdan/bootstrap-datetimepicker
 Copyright (c) 2015 Jonathan Peterson
 =========================================================
 */
/*
 The MIT License (MIT)

 Copyright (c) 2015 Jonathan Peterson

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */
/*global define:false */
/*global exports:false */
/*global require:false */
/*global jQuery:false */
/*global moment:false */
(function (factory) {
    'use strict';
    if (true) {
        // AMD is used - Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/moment/moment.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'), require('moment'));
    } else {
        // Neither AMD nor CommonJS used. Use global variables.
        if (typeof jQuery === 'undefined') {
            throw 'bootstrap-datetimepicker requires jQuery to be loaded first';
        }
        if (typeof moment === 'undefined') {
            throw 'bootstrap-datetimepicker requires Moment.js to be loaded first';
        }
        factory(jQuery, moment);
    }
}(function ($, moment) {
    'use strict';
    if (!moment) {
        throw new Error('bootstrap-datetimepicker requires Moment.js to be loaded first');
    }

    var dateTimePicker = function (element, options) {
        var picker = {},
            date,
            viewDate,
            unset = true,
            input,
            component = false,
            widget = false,
            use24Hours,
            minViewModeNumber = 0,
            actualFormat,
            parseFormats,
            currentViewMode,
            datePickerModes = [
                {
                    clsName: 'days',
                    navFnc: 'M',
                    navStep: 1
                },
                {
                    clsName: 'months',
                    navFnc: 'y',
                    navStep: 1
                },
                {
                    clsName: 'years',
                    navFnc: 'y',
                    navStep: 10
                },
                {
                    clsName: 'decades',
                    navFnc: 'y',
                    navStep: 100
                }
            ],
            viewModes = ['days', 'months', 'years', 'decades'],
            verticalModes = ['top', 'bottom', 'auto'],
            horizontalModes = ['left', 'right', 'auto'],
            toolbarPlacements = ['default', 'top', 'bottom'],
            keyMap = {
                'up': 38,
                38: 'up',
                'down': 40,
                40: 'down',
                'left': 37,
                37: 'left',
                'right': 39,
                39: 'right',
                'tab': 9,
                9: 'tab',
                'escape': 27,
                27: 'escape',
                'enter': 13,
                13: 'enter',
                'pageUp': 33,
                33: 'pageUp',
                'pageDown': 34,
                34: 'pageDown',
                'shift': 16,
                16: 'shift',
                'control': 17,
                17: 'control',
                'space': 32,
                32: 'space',
                't': 84,
                84: 't',
                'delete': 46,
                46: 'delete'
            },
            keyState = {},

            /********************************************************************************
             *
             * Private functions
             *
             ********************************************************************************/

            hasTimeZone = function () {
                return moment.tz !== undefined && options.timeZone !== undefined && options.timeZone !== null && options.timeZone !== '';
            },

            getMoment = function (d) {
                var returnMoment;

                if (d === undefined || d === null) {
                    returnMoment = moment(); //TODO should this use format? and locale?
                } else if (moment.isDate(d) || moment.isMoment(d)) {
                    // If the date that is passed in is already a Date() or moment() object,
                    // pass it directly to moment.
                    returnMoment = moment(d);
                } else if (hasTimeZone()) { // There is a string to parse and a default time zone
                    // parse with the tz function which takes a default time zone if it is not in the format string
                    returnMoment = moment.tz(d, parseFormats, options.useStrict, options.timeZone);
                } else {
                    returnMoment = moment(d, parseFormats, options.useStrict);
                }

                if (hasTimeZone()) {
                    returnMoment.tz(options.timeZone);
                }

                return returnMoment;
            },

            isEnabled = function (granularity) {
                if (typeof granularity !== 'string' || granularity.length > 1) {
                    throw new TypeError('isEnabled expects a single character string parameter');
                }
                switch (granularity) {
                    case 'y':
                        return actualFormat.indexOf('Y') !== -1;
                    case 'M':
                        return actualFormat.indexOf('M') !== -1;
                    case 'd':
                        return actualFormat.toLowerCase().indexOf('d') !== -1;
                    case 'h':
                    case 'H':
                        return actualFormat.toLowerCase().indexOf('h') !== -1;
                    case 'm':
                        return actualFormat.indexOf('m') !== -1;
                    case 's':
                        return actualFormat.indexOf('s') !== -1;
                    default:
                        return false;
                }
            },

            hasTime = function () {
                return (isEnabled('h') || isEnabled('m') || isEnabled('s'));
            },

            hasDate = function () {
                return (isEnabled('y') || isEnabled('M') || isEnabled('d'));
            },

            getDatePickerTemplate = function () {
                var headTemplate = $('<thead>')
                        .append($('<tr>')
                            .append($('<th>').addClass('prev').attr('data-action', 'previous')
                                .append($('<span>').addClass(options.icons.previous))
                                )
                            .append($('<th>').addClass('picker-switch').attr('data-action', 'pickerSwitch').attr('colspan', (options.calendarWeeks ? '6' : '5')))
                            .append($('<th>').addClass('next').attr('data-action', 'next')
                                .append($('<span>').addClass(options.icons.next))
                                )
                            ),
                    contTemplate = $('<tbody>')
                        .append($('<tr>')
                            .append($('<td>').attr('colspan', (options.calendarWeeks ? '8' : '7')))
                            );

                return [
                    $('<div>').addClass('datepicker-days')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate)
                            .append($('<tbody>'))
                            ),
                    $('<div>').addClass('datepicker-months')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-years')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            ),
                    $('<div>').addClass('datepicker-decades')
                        .append($('<table>').addClass('table-condensed')
                            .append(headTemplate.clone())
                            .append(contTemplate.clone())
                            )
                ];
            },

            getTimePickerMainTemplate = function () {
                var topRow = $('<tr>'),
                    middleRow = $('<tr>'),
                    bottomRow = $('<tr>');

                if (isEnabled('h')) {
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementHour }).addClass('btn').attr('data-action', 'incrementHours').append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-hour').attr({ 'data-time-component': 'hours', 'title': options.tooltips.pickHour }).attr('data-action', 'showHours')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementHour }).addClass('btn').attr('data-action', 'decrementHours').append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('m')) {
                    if (isEnabled('h')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementMinute }).addClass('btn').attr('data-action', 'incrementMinutes')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-minute').attr({ 'data-time-component': 'minutes', 'title': options.tooltips.pickMinute }).attr('data-action', 'showMinutes')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementMinute }).addClass('btn').attr('data-action', 'decrementMinutes')
                            .append($('<span>').addClass(options.icons.down))));
                }
                if (isEnabled('s')) {
                    if (isEnabled('m')) {
                        topRow.append($('<td>').addClass('separator'));
                        middleRow.append($('<td>').addClass('separator').html(':'));
                        bottomRow.append($('<td>').addClass('separator'));
                    }
                    topRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.incrementSecond }).addClass('btn').attr('data-action', 'incrementSeconds')
                            .append($('<span>').addClass(options.icons.up))));
                    middleRow.append($('<td>')
                        .append($('<span>').addClass('timepicker-second').attr({ 'data-time-component': 'seconds', 'title': options.tooltips.pickSecond }).attr('data-action', 'showSeconds')));
                    bottomRow.append($('<td>')
                        .append($('<a>').attr({ href: '#', tabindex: '-1', 'title': options.tooltips.decrementSecond }).addClass('btn').attr('data-action', 'decrementSeconds')
                            .append($('<span>').addClass(options.icons.down))));
                }

                if (!use24Hours) {
                    topRow.append($('<td>').addClass('separator'));
                    middleRow.append($('<td>')
                        .append($('<button>').addClass('btn btn-primary').attr({ 'data-action': 'togglePeriod', tabindex: '-1', 'title': options.tooltips.togglePeriod })));
                    bottomRow.append($('<td>').addClass('separator'));
                }

                return $('<div>').addClass('timepicker-picker')
                    .append($('<table>').addClass('table-condensed')
                        .append([topRow, middleRow, bottomRow]));
            },

            getTimePickerTemplate = function () {
                var hoursView = $('<div>').addClass('timepicker-hours')
                        .append($('<table>').addClass('table-condensed')),
                    minutesView = $('<div>').addClass('timepicker-minutes')
                        .append($('<table>').addClass('table-condensed')),
                    secondsView = $('<div>').addClass('timepicker-seconds')
                        .append($('<table>').addClass('table-condensed')),
                    ret = [getTimePickerMainTemplate()];

                if (isEnabled('h')) {
                    ret.push(hoursView);
                }
                if (isEnabled('m')) {
                    ret.push(minutesView);
                }
                if (isEnabled('s')) {
                    ret.push(secondsView);
                }

                return ret;
            },

            getToolbar = function () {
                var row = [];
                if (options.showTodayButton) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'today', 'title': options.tooltips.today }).append($('<span>').addClass(options.icons.today))));
                }
                if (!options.sideBySide && hasDate() && hasTime()) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'togglePicker', 'title': options.tooltips.selectTime }).append($('<span>').addClass(options.icons.time))));
                }
                if (options.showClear) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'clear', 'title': options.tooltips.clear }).append($('<span>').addClass(options.icons.clear))));
                }
                if (options.showClose) {
                    row.push($('<td>').append($('<a>').attr({ 'data-action': 'close', 'title': options.tooltips.close }).append($('<span>').addClass(options.icons.close))));
                }
                return $('<table>').addClass('table-condensed').append($('<tbody>').append($('<tr>').append(row)));
            },

            getTemplate = function () {
                var template = $('<div>').addClass('bootstrap-datetimepicker-widget dropdown-menu'),
                    dateView = $('<div>').addClass('datepicker').append(getDatePickerTemplate()),
                    timeView = $('<div>').addClass('timepicker').append(getTimePickerTemplate()),
                    content = $('<ul>').addClass('list-unstyled'),
                    toolbar = $('<li>').addClass('picker-switch' + (options.collapse ? ' accordion-toggle' : '')).append(getToolbar());

                if (options.inline) {
                    template.removeClass('dropdown-menu');
                }

                if (use24Hours) {
                    template.addClass('usetwentyfour');
                }

                if (isEnabled('s') && !use24Hours) {
                    template.addClass('wider');
                }

                if (options.sideBySide && hasDate() && hasTime()) {
                    template.addClass('timepicker-sbs');
                    if (options.toolbarPlacement === 'top') {
                        template.append(toolbar);
                    }
                    template.append(
                        $('<div>').addClass('row')
                            .append(dateView.addClass('col-md-6'))
                            .append(timeView.addClass('col-md-6'))
                    );
                    if (options.toolbarPlacement === 'bottom') {
                        template.append(toolbar);
                    }
                    return template;
                }

                if (options.toolbarPlacement === 'top') {
                    content.append(toolbar);
                }
                if (hasDate()) {
                    content.append($('<li>').addClass((options.collapse && hasTime() ? 'collapse in' : '')).append(dateView));
                }
                if (options.toolbarPlacement === 'default') {
                    content.append(toolbar);
                }
                if (hasTime()) {
                    content.append($('<li>').addClass((options.collapse && hasDate() ? 'collapse' : '')).append(timeView));
                }
                if (options.toolbarPlacement === 'bottom') {
                    content.append(toolbar);
                }
                return template.append(content);
            },

            dataToOptions = function () {
                var eData,
                    dataOptions = {};

                if (element.is('input') || options.inline) {
                    eData = element.data();
                } else {
                    eData = element.find('input').data();
                }

                if (eData.dateOptions && eData.dateOptions instanceof Object) {
                    dataOptions = $.extend(true, dataOptions, eData.dateOptions);
                }

                $.each(options, function (key) {
                    var attributeName = 'date' + key.charAt(0).toUpperCase() + key.slice(1);
                    if (eData[attributeName] !== undefined) {
                        dataOptions[key] = eData[attributeName];
                    }
                });
                return dataOptions;
            },

            place = function () {
                var position = (component || element).position(),
                    offset = (component || element).offset(),
                    vertical = options.widgetPositioning.vertical,
                    horizontal = options.widgetPositioning.horizontal,
                    parent;

                if (options.widgetParent) {
                    parent = options.widgetParent.append(widget);
                } else if (element.is('input')) {
                    parent = element.after(widget).parent();
                } else if (options.inline) {
                    parent = element.append(widget);
                    return;
                } else {
                    parent = element;
                    element.children().first().after(widget);
                }

                // Top and bottom logic
                if (vertical === 'auto') {
                    if (offset.top + widget.height() * 1.5 >= $(window).height() + $(window).scrollTop() &&
                        widget.height() + element.outerHeight() < offset.top) {
                        vertical = 'top';
                    } else {
                        vertical = 'bottom';
                    }
                }

                // Left and right logic
                if (horizontal === 'auto') {
                    if (parent.width() < offset.left + widget.outerWidth() / 2 &&
                        offset.left + widget.outerWidth() > $(window).width()) {
                        horizontal = 'right';
                    } else {
                        horizontal = 'left';
                    }
                }

                if (vertical === 'top') {
                    widget.addClass('top').removeClass('bottom');
                } else {
                    widget.addClass('bottom').removeClass('top');
                }

                if (horizontal === 'right') {
                    widget.addClass('pull-right');
                } else {
                    widget.removeClass('pull-right');
                }

                // find the first parent element that has a non-static css positioning
                if (parent.css('position') === 'static') {
                    parent = parent.parents().filter(function () {
                        return $(this).css('position') !== 'static';
                    }).first();
                }

                if (parent.length === 0) {
                    throw new Error('datetimepicker component should be placed within a non-static positioned container');
                }

                widget.css({
                    top: vertical === 'top' ? 'auto' : position.top + element.outerHeight(),
                    bottom: vertical === 'top' ? parent.outerHeight() - (parent === element ? 0 : position.top) : 'auto',
                    left: horizontal === 'left' ? (parent === element ? 0 : position.left) : 'auto',
                    right: horizontal === 'left' ? 'auto' : parent.outerWidth() - element.outerWidth() - (parent === element ? 0 : position.left)
                });
            },

            notifyEvent = function (e) {
                if (e.type === 'dp.change' && ((e.date && e.date.isSame(e.oldDate)) || (!e.date && !e.oldDate))) {
                    return;
                }
                element.trigger(e);
            },

            viewUpdate = function (e) {
                if (e === 'y') {
                    e = 'YYYY';
                }
                notifyEvent({
                    type: 'dp.update',
                    change: e,
                    viewDate: viewDate.clone()
                });
            },

            showMode = function (dir) {
                if (!widget) {
                    return;
                }
                if (dir) {
                    currentViewMode = Math.max(minViewModeNumber, Math.min(3, currentViewMode + dir));
                }
                widget.find('.datepicker > div').hide().filter('.datepicker-' + datePickerModes[currentViewMode].clsName).show();
            },

            fillDow = function () {
                var row = $('<tr>'),
                    currentDate = viewDate.clone().startOf('w').startOf('d');

                if (options.calendarWeeks === true) {
                    row.append($('<th>').addClass('cw').text('#'));
                }

                while (currentDate.isBefore(viewDate.clone().endOf('w'))) {
                    row.append($('<th>').addClass('dow').text(currentDate.format('dd')));
                    currentDate.add(1, 'd');
                }
                widget.find('.datepicker-days thead').append(row);
            },

            isInDisabledDates = function (testDate) {
                return options.disabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInEnabledDates = function (testDate) {
                return options.enabledDates[testDate.format('YYYY-MM-DD')] === true;
            },

            isInDisabledHours = function (testDate) {
                return options.disabledHours[testDate.format('H')] === true;
            },

            isInEnabledHours = function (testDate) {
                return options.enabledHours[testDate.format('H')] === true;
            },

            isValid = function (targetMoment, granularity) {
                if (!targetMoment.isValid()) {
                    return false;
                }
                if (options.disabledDates && granularity === 'd' && isInDisabledDates(targetMoment)) {
                    return false;
                }
                if (options.enabledDates && granularity === 'd' && !isInEnabledDates(targetMoment)) {
                    return false;
                }
                if (options.minDate && targetMoment.isBefore(options.minDate, granularity)) {
                    return false;
                }
                if (options.maxDate && targetMoment.isAfter(options.maxDate, granularity)) {
                    return false;
                }
                if (options.daysOfWeekDisabled && granularity === 'd' && options.daysOfWeekDisabled.indexOf(targetMoment.day()) !== -1) {
                    return false;
                }
                if (options.disabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && isInDisabledHours(targetMoment)) {
                    return false;
                }
                if (options.enabledHours && (granularity === 'h' || granularity === 'm' || granularity === 's') && !isInEnabledHours(targetMoment)) {
                    return false;
                }
                if (options.disabledTimeIntervals && (granularity === 'h' || granularity === 'm' || granularity === 's')) {
                    var found = false;
                    $.each(options.disabledTimeIntervals, function () {
                        if (targetMoment.isBetween(this[0], this[1])) {
                            found = true;
                            return false;
                        }
                    });
                    if (found) {
                        return false;
                    }
                }
                return true;
            },

            fillMonths = function () {
                var spans = [],
                    monthsShort = viewDate.clone().startOf('y').startOf('d');
                while (monthsShort.isSame(viewDate, 'y')) {
                    spans.push($('<span>').attr('data-action', 'selectMonth').addClass('month').text(monthsShort.format('MMM')));
                    monthsShort.add(1, 'M');
                }
                widget.find('.datepicker-months td').empty().append(spans);
            },

            updateMonths = function () {
                var monthsView = widget.find('.datepicker-months'),
                    monthsViewHeader = monthsView.find('th'),
                    months = monthsView.find('tbody').find('span');

                monthsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevYear);
                monthsViewHeader.eq(1).attr('title', options.tooltips.selectYear);
                monthsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextYear);

                monthsView.find('.disabled').removeClass('disabled');

                if (!isValid(viewDate.clone().subtract(1, 'y'), 'y')) {
                    monthsViewHeader.eq(0).addClass('disabled');
                }

                monthsViewHeader.eq(1).text(viewDate.year());

                if (!isValid(viewDate.clone().add(1, 'y'), 'y')) {
                    monthsViewHeader.eq(2).addClass('disabled');
                }

                months.removeClass('active');
                if (date.isSame(viewDate, 'y') && !unset) {
                    months.eq(date.month()).addClass('active');
                }

                months.each(function (index) {
                    if (!isValid(viewDate.clone().month(index), 'M')) {
                        $(this).addClass('disabled');
                    }
                });
            },

            updateYears = function () {
                var yearsView = widget.find('.datepicker-years'),
                    yearsViewHeader = yearsView.find('th'),
                    startYear = viewDate.clone().subtract(5, 'y'),
                    endYear = viewDate.clone().add(6, 'y'),
                    html = '';

                yearsViewHeader.eq(0).find('span').attr('title', options.tooltips.prevDecade);
                yearsViewHeader.eq(1).attr('title', options.tooltips.selectDecade);
                yearsViewHeader.eq(2).find('span').attr('title', options.tooltips.nextDecade);

                yearsView.find('.disabled').removeClass('disabled');

                if (options.minDate && options.minDate.isAfter(startYear, 'y')) {
                    yearsViewHeader.eq(0).addClass('disabled');
                }

                yearsViewHeader.eq(1).text(startYear.year() + '-' + endYear.year());

                if (options.maxDate && options.maxDate.isBefore(endYear, 'y')) {
                    yearsViewHeader.eq(2).addClass('disabled');
                }

                while (!startYear.isAfter(endYear, 'y')) {
                    html += '<span data-action="selectYear" class="year' + (startYear.isSame(date, 'y') && !unset ? ' active' : '') + (!isValid(startYear, 'y') ? ' disabled' : '') + '">' + startYear.year() + '</span>';
                    startYear.add(1, 'y');
                }

                yearsView.find('td').html(html);
            },

            updateDecades = function () {
                var decadesView = widget.find('.datepicker-decades'),
                    decadesViewHeader = decadesView.find('th'),
                    startDecade = moment({ y: viewDate.year() - (viewDate.year() % 100) - 1 }),
                    endDecade = startDecade.clone().add(100, 'y'),
                    startedAt = startDecade.clone(),
                    minDateDecade = false,
                    maxDateDecade = false,
                    endDecadeYear,
                    html = '';

                decadesViewHeader.eq(0).find('span').attr('title', options.tooltips.prevCentury);
                decadesViewHeader.eq(2).find('span').attr('title', options.tooltips.nextCentury);

                decadesView.find('.disabled').removeClass('disabled');

                if (startDecade.isSame(moment({ y: 1900 })) || (options.minDate && options.minDate.isAfter(startDecade, 'y'))) {
                    decadesViewHeader.eq(0).addClass('disabled');
                }

                decadesViewHeader.eq(1).text(startDecade.year() + '-' + endDecade.year());

                if (startDecade.isSame(moment({ y: 2000 })) || (options.maxDate && options.maxDate.isBefore(endDecade, 'y'))) {
                    decadesViewHeader.eq(2).addClass('disabled');
                }

                while (!startDecade.isAfter(endDecade, 'y')) {
                    endDecadeYear = startDecade.year() + 12;
                    minDateDecade = options.minDate && options.minDate.isAfter(startDecade, 'y') && options.minDate.year() <= endDecadeYear;
                    maxDateDecade = options.maxDate && options.maxDate.isAfter(startDecade, 'y') && options.maxDate.year() <= endDecadeYear;
                    html += '<span data-action="selectDecade" class="decade' + (date.isAfter(startDecade) && date.year() <= endDecadeYear ? ' active' : '') +
                        (!isValid(startDecade, 'y') && !minDateDecade && !maxDateDecade ? ' disabled' : '') + '" data-selection="' + (startDecade.year() + 6) + '">' + (startDecade.year() + 1) + ' - ' + (startDecade.year() + 12) + '</span>';
                    startDecade.add(12, 'y');
                }
                html += '<span></span><span></span><span></span>'; //push the dangling block over, at least this way it's even

                decadesView.find('td').html(html);
                decadesViewHeader.eq(1).text((startedAt.year() + 1) + '-' + (startDecade.year()));
            },

            fillDate = function () {
                var daysView = widget.find('.datepicker-days'),
                    daysViewHeader = daysView.find('th'),
                    currentDate,
                    html = [],
                    row,
                    clsNames = [],
                    i;

                if (!hasDate()) {
                    return;
                }

                daysViewHeader.eq(0).find('span').attr('title', options.tooltips.prevMonth);
                daysViewHeader.eq(1).attr('title', options.tooltips.selectMonth);
                daysViewHeader.eq(2).find('span').attr('title', options.tooltips.nextMonth);

                daysView.find('.disabled').removeClass('disabled');
                daysViewHeader.eq(1).text(viewDate.format(options.dayViewHeaderFormat));

                if (!isValid(viewDate.clone().subtract(1, 'M'), 'M')) {
                    daysViewHeader.eq(0).addClass('disabled');
                }
                if (!isValid(viewDate.clone().add(1, 'M'), 'M')) {
                    daysViewHeader.eq(2).addClass('disabled');
                }

                currentDate = viewDate.clone().startOf('M').startOf('w').startOf('d');

                for (i = 0; i < 42; i++) { //always display 42 days (should show 6 weeks)
                    if (currentDate.weekday() === 0) {
                        row = $('<tr>');
                        if (options.calendarWeeks) {
                            row.append('<td class="cw">' + currentDate.week() + '</td>');
                        }
                        html.push(row);
                    }
                    clsNames = ['day'];
                    if (currentDate.isBefore(viewDate, 'M')) {
                        clsNames.push('old');
                    }
                    if (currentDate.isAfter(viewDate, 'M')) {
                        clsNames.push('new');
                    }
                    if (currentDate.isSame(date, 'd') && !unset) {
                        clsNames.push('active');
                    }
                    if (!isValid(currentDate, 'd')) {
                        clsNames.push('disabled');
                    }
                    if (currentDate.isSame(getMoment(), 'd')) {
                        clsNames.push('today');
                    }
                    if (currentDate.day() === 0 || currentDate.day() === 6) {
                        clsNames.push('weekend');
                    }
                    notifyEvent({
                        type: 'dp.classify',
                        date: currentDate,
                        classNames: clsNames
                    });
                    row.append('<td data-action="selectDay" data-day="' + currentDate.format('L') + '" class="' + clsNames.join(' ') + '">' + currentDate.date() + '</td>');
                    currentDate.add(1, 'd');
                }

                daysView.find('tbody').empty().append(html);

                updateMonths();

                updateYears();

                updateDecades();
            },

            fillHours = function () {
                var table = widget.find('.timepicker-hours table'),
                    currentHour = viewDate.clone().startOf('d'),
                    html = [],
                    row = $('<tr>');

                if (viewDate.hour() > 11 && !use24Hours) {
                    currentHour.hour(12);
                }
                while (currentHour.isSame(viewDate, 'd') && (use24Hours || (viewDate.hour() < 12 && currentHour.hour() < 12) || viewDate.hour() > 11)) {
                    if (currentHour.hour() % 4 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectHour" class="hour' + (!isValid(currentHour, 'h') ? ' disabled' : '') + '">' + currentHour.format(use24Hours ? 'HH' : 'hh') + '</td>');
                    currentHour.add(1, 'h');
                }
                table.empty().append(html);
            },

            fillMinutes = function () {
                var table = widget.find('.timepicker-minutes table'),
                    currentMinute = viewDate.clone().startOf('h'),
                    html = [],
                    row = $('<tr>'),
                    step = options.stepping === 1 ? 5 : options.stepping;

                while (viewDate.isSame(currentMinute, 'h')) {
                    if (currentMinute.minute() % (step * 4) === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectMinute" class="minute' + (!isValid(currentMinute, 'm') ? ' disabled' : '') + '">' + currentMinute.format('mm') + '</td>');
                    currentMinute.add(step, 'm');
                }
                table.empty().append(html);
            },

            fillSeconds = function () {
                var table = widget.find('.timepicker-seconds table'),
                    currentSecond = viewDate.clone().startOf('m'),
                    html = [],
                    row = $('<tr>');

                while (viewDate.isSame(currentSecond, 'm')) {
                    if (currentSecond.second() % 20 === 0) {
                        row = $('<tr>');
                        html.push(row);
                    }
                    row.append('<td data-action="selectSecond" class="second' + (!isValid(currentSecond, 's') ? ' disabled' : '') + '">' + currentSecond.format('ss') + '</td>');
                    currentSecond.add(5, 's');
                }

                table.empty().append(html);
            },

            fillTime = function () {
                var toggle, newDate, timeComponents = widget.find('.timepicker span[data-time-component]');

                if (!use24Hours) {
                    toggle = widget.find('.timepicker [data-action=togglePeriod]');
                    newDate = date.clone().add((date.hours() >= 12) ? -12 : 12, 'h');

                    toggle.text(date.format('A'));

                    if (isValid(newDate, 'h')) {
                        toggle.removeClass('disabled');
                    } else {
                        toggle.addClass('disabled');
                    }
                }
                timeComponents.filter('[data-time-component=hours]').text(date.format(use24Hours ? 'HH' : 'hh'));
                timeComponents.filter('[data-time-component=minutes]').text(date.format('mm'));
                timeComponents.filter('[data-time-component=seconds]').text(date.format('ss'));

                fillHours();
                fillMinutes();
                fillSeconds();
            },

            update = function () {
                if (!widget) {
                    return;
                }
                fillDate();
                fillTime();
            },

            setValue = function (targetMoment) {
                var oldDate = unset ? null : date;

                // case of calling setValue(null or false)
                if (!targetMoment) {
                    unset = true;
                    input.val('');
                    element.data('date', '');
                    notifyEvent({
                        type: 'dp.change',
                        date: false,
                        oldDate: oldDate
                    });
                    update();
                    return;
                }

                targetMoment = targetMoment.clone().locale(options.locale);

                if (hasTimeZone()) {
                    targetMoment.tz(options.timeZone);
                }

                if (options.stepping !== 1) {
                    targetMoment.minutes((Math.round(targetMoment.minutes() / options.stepping) * options.stepping)).seconds(0);

                    while (options.minDate && targetMoment.isBefore(options.minDate)) {
                        targetMoment.add(options.stepping, 'minutes');
                    }
                }

                if (isValid(targetMoment)) {
                    date = targetMoment;
                    viewDate = date.clone();
                    input.val(date.format(actualFormat));
                    element.data('date', date.format(actualFormat));
                    unset = false;
                    update();
                    notifyEvent({
                        type: 'dp.change',
                        date: date.clone(),
                        oldDate: oldDate
                    });
                } else {
                    if (!options.keepInvalid) {
                        input.val(unset ? '' : date.format(actualFormat));
                    } else {
                        notifyEvent({
                            type: 'dp.change',
                            date: targetMoment,
                            oldDate: oldDate
                        });
                    }
                    notifyEvent({
                        type: 'dp.error',
                        date: targetMoment,
                        oldDate: oldDate
                    });
                }
            },

            /**
             * Hides the widget. Possibly will emit dp.hide
             */
            hide = function () {
                var transitioning = false;
                if (!widget) {
                    return picker;
                }
                // Ignore event if in the middle of a picker transition
                widget.find('.collapse').each(function () {
                    var collapseData = $(this).data('collapse');
                    if (collapseData && collapseData.transitioning) {
                        transitioning = true;
                        return false;
                    }
                    return true;
                });
                if (transitioning) {
                    return picker;
                }
                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                widget.hide();

                $(window).off('resize', place);
                widget.off('click', '[data-action]');
                widget.off('mousedown', false);

                widget.remove();
                widget = false;

                notifyEvent({
                    type: 'dp.hide',
                    date: date.clone()
                });

                input.blur();

                viewDate = date.clone();

                return picker;
            },

            clear = function () {
                setValue(null);
            },

            parseInputDate = function (inputDate) {
                if (options.parseInputDate === undefined) {
                    if (!moment.isMoment(inputDate) || inputDate instanceof Date) {
                        inputDate = getMoment(inputDate);
                    }
                } else {
                    inputDate = options.parseInputDate(inputDate);
                }
                //inputDate.locale(options.locale);
                return inputDate;
            },

            /********************************************************************************
             *
             * Widget UI interaction functions
             *
             ********************************************************************************/
            actions = {
                next: function () {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.add(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                previous: function () {
                    var navFnc = datePickerModes[currentViewMode].navFnc;
                    viewDate.subtract(datePickerModes[currentViewMode].navStep, navFnc);
                    fillDate();
                    viewUpdate(navFnc);
                },

                pickerSwitch: function () {
                    showMode(1);
                },

                selectMonth: function (e) {
                    var month = $(e.target).closest('tbody').find('span').index($(e.target));
                    viewDate.month(month);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()).month(viewDate.month()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('M');
                },

                selectYear: function (e) {
                    var year = parseInt($(e.target).text(), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDecade: function (e) {
                    var year = parseInt($(e.target).data('selection'), 10) || 0;
                    viewDate.year(year);
                    if (currentViewMode === minViewModeNumber) {
                        setValue(date.clone().year(viewDate.year()));
                        if (!options.inline) {
                            hide();
                        }
                    } else {
                        showMode(-1);
                        fillDate();
                    }
                    viewUpdate('YYYY');
                },

                selectDay: function (e) {
                    var day = viewDate.clone();
                    if ($(e.target).is('.old')) {
                        day.subtract(1, 'M');
                    }
                    if ($(e.target).is('.new')) {
                        day.add(1, 'M');
                    }
                    setValue(day.date(parseInt($(e.target).text(), 10)));
                    if (!hasTime() && !options.keepOpen && !options.inline) {
                        hide();
                    }
                },

                incrementHours: function () {
                    var newDate = date.clone().add(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                incrementMinutes: function () {
                    var newDate = date.clone().add(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                incrementSeconds: function () {
                    var newDate = date.clone().add(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                decrementHours: function () {
                    var newDate = date.clone().subtract(1, 'h');
                    if (isValid(newDate, 'h')) {
                        setValue(newDate);
                    }
                },

                decrementMinutes: function () {
                    var newDate = date.clone().subtract(options.stepping, 'm');
                    if (isValid(newDate, 'm')) {
                        setValue(newDate);
                    }
                },

                decrementSeconds: function () {
                    var newDate = date.clone().subtract(1, 's');
                    if (isValid(newDate, 's')) {
                        setValue(newDate);
                    }
                },

                togglePeriod: function () {
                    setValue(date.clone().add((date.hours() >= 12) ? -12 : 12, 'h'));
                },

                togglePicker: function (e) {
                    var $this = $(e.target),
                        $parent = $this.closest('ul'),
                        expanded = $parent.find('.in'),
                        closed = $parent.find('.collapse:not(.in)'),
                        collapseData;

                    if (expanded && expanded.length) {
                        collapseData = expanded.data('collapse');
                        if (collapseData && collapseData.transitioning) {
                            return;
                        }
                        if (expanded.collapse) { // if collapse plugin is available through bootstrap.js then use it
                            expanded.collapse('hide');
                            closed.collapse('show');
                        } else { // otherwise just toggle in class on the two views
                            expanded.removeClass('in');
                            closed.addClass('in');
                        }
                        if ($this.is('span')) {
                            $this.toggleClass(options.icons.time + ' ' + options.icons.date);
                        } else {
                            $this.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        }

                        // NOTE: uncomment if toggled state will be restored in show()
                        //if (component) {
                        //    component.find('span').toggleClass(options.icons.time + ' ' + options.icons.date);
                        //}
                    }
                },

                showPicker: function () {
                    widget.find('.timepicker > div:not(.timepicker-picker)').hide();
                    widget.find('.timepicker .timepicker-picker').show();
                },

                showHours: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-hours').show();
                },

                showMinutes: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-minutes').show();
                },

                showSeconds: function () {
                    widget.find('.timepicker .timepicker-picker').hide();
                    widget.find('.timepicker .timepicker-seconds').show();
                },

                selectHour: function (e) {
                    var hour = parseInt($(e.target).text(), 10);

                    if (!use24Hours) {
                        if (date.hours() >= 12) {
                            if (hour !== 12) {
                                hour += 12;
                            }
                        } else {
                            if (hour === 12) {
                                hour = 0;
                            }
                        }
                    }
                    setValue(date.clone().hours(hour));
                    actions.showPicker.call(picker);
                },

                selectMinute: function (e) {
                    setValue(date.clone().minutes(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                selectSecond: function (e) {
                    setValue(date.clone().seconds(parseInt($(e.target).text(), 10)));
                    actions.showPicker.call(picker);
                },

                clear: clear,

                today: function () {
                    var todaysDate = getMoment();
                    if (isValid(todaysDate, 'd')) {
                        setValue(todaysDate);
                    }
                },

                close: hide
            },

            doAction = function (e) {
                if ($(e.currentTarget).is('.disabled')) {
                    return false;
                }
                actions[$(e.currentTarget).data('action')].apply(picker, arguments);
                return false;
            },

            /**
             * Shows the widget. Possibly will emit dp.show and dp.change
             */
            show = function () {
                var currentMoment,
                    useCurrentGranularity = {
                        'year': function (m) {
                            return m.month(0).date(1).hours(0).seconds(0).minutes(0);
                        },
                        'month': function (m) {
                            return m.date(1).hours(0).seconds(0).minutes(0);
                        },
                        'day': function (m) {
                            return m.hours(0).seconds(0).minutes(0);
                        },
                        'hour': function (m) {
                            return m.seconds(0).minutes(0);
                        },
                        'minute': function (m) {
                            return m.seconds(0);
                        }
                    };

                if (input.prop('disabled') || (!options.ignoreReadonly && input.prop('readonly')) || widget) {
                    return picker;
                }
                if (input.val() !== undefined && input.val().trim().length !== 0) {
                    setValue(parseInputDate(input.val().trim()));
                } else if (unset && options.useCurrent && (options.inline || (input.is('input') && input.val().trim().length === 0))) {
                    currentMoment = getMoment();
                    if (typeof options.useCurrent === 'string') {
                        currentMoment = useCurrentGranularity[options.useCurrent](currentMoment);
                    }
                    setValue(currentMoment);
                }
                widget = getTemplate();

                fillDow();
                fillMonths();

                widget.find('.timepicker-hours').hide();
                widget.find('.timepicker-minutes').hide();
                widget.find('.timepicker-seconds').hide();

                update();
                showMode();

                $(window).on('resize', place);
                widget.on('click', '[data-action]', doAction); // this handles clicks on the widget
                widget.on('mousedown', false);

                if (component && component.hasClass('btn')) {
                    component.toggleClass('active');
                }
                place();
                widget.show();
                if (options.focusOnShow && !input.is(':focus')) {
                    input.focus();
                }

                notifyEvent({
                    type: 'dp.show'
                });
                return picker;
            },

            /**
             * Shows or hides the widget
             */
            toggle = function () {
                return (widget ? hide() : show());
            },

            keydown = function (e) {
                var handler = null,
                    index,
                    index2,
                    pressedKeys = [],
                    pressedModifiers = {},
                    currentKey = e.which,
                    keyBindKeys,
                    allModifiersPressed,
                    pressed = 'p';

                keyState[currentKey] = pressed;

                for (index in keyState) {
                    if (keyState.hasOwnProperty(index) && keyState[index] === pressed) {
                        pressedKeys.push(index);
                        if (parseInt(index, 10) !== currentKey) {
                            pressedModifiers[index] = true;
                        }
                    }
                }

                for (index in options.keyBinds) {
                    if (options.keyBinds.hasOwnProperty(index) && typeof (options.keyBinds[index]) === 'function') {
                        keyBindKeys = index.split(' ');
                        if (keyBindKeys.length === pressedKeys.length && keyMap[currentKey] === keyBindKeys[keyBindKeys.length - 1]) {
                            allModifiersPressed = true;
                            for (index2 = keyBindKeys.length - 2; index2 >= 0; index2--) {
                                if (!(keyMap[keyBindKeys[index2]] in pressedModifiers)) {
                                    allModifiersPressed = false;
                                    break;
                                }
                            }
                            if (allModifiersPressed) {
                                handler = options.keyBinds[index];
                                break;
                            }
                        }
                    }
                }

                if (handler) {
                    handler.call(picker, widget);
                    e.stopPropagation();
                    e.preventDefault();
                }
            },

            keyup = function (e) {
                keyState[e.which] = 'r';
                e.stopPropagation();
                e.preventDefault();
            },

            change = function (e) {
                var val = $(e.target).val().trim(),
                    parsedDate = val ? parseInputDate(val) : null;
                setValue(parsedDate);
                e.stopImmediatePropagation();
                return false;
            },

            attachDatePickerElementEvents = function () {
                input.on({
                    'change': change,
                    'blur': options.debug ? '' : hide,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? show : ''
                });

                if (element.is('input')) {
                    input.on({
                        'focus': show
                    });
                } else if (component) {
                    component.on('click', toggle);
                    component.on('mousedown', false);
                }
            },

            detachDatePickerElementEvents = function () {
                input.off({
                    'change': change,
                    'blur': blur,
                    'keydown': keydown,
                    'keyup': keyup,
                    'focus': options.allowInputToggle ? hide : ''
                });

                if (element.is('input')) {
                    input.off({
                        'focus': show
                    });
                } else if (component) {
                    component.off('click', toggle);
                    component.off('mousedown', false);
                }
            },

            indexGivenDates = function (givenDatesArray) {
                // Store given enabledDates and disabledDates as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledDates['2014-02-27'] === true)
                var givenDatesIndexed = {};
                $.each(givenDatesArray, function () {
                    var dDate = parseInputDate(this);
                    if (dDate.isValid()) {
                        givenDatesIndexed[dDate.format('YYYY-MM-DD')] = true;
                    }
                });
                return (Object.keys(givenDatesIndexed).length) ? givenDatesIndexed : false;
            },

            indexGivenHours = function (givenHoursArray) {
                // Store given enabledHours and disabledHours as keys.
                // This way we can check their existence in O(1) time instead of looping through whole array.
                // (for example: options.enabledHours['2014-02-27'] === true)
                var givenHoursIndexed = {};
                $.each(givenHoursArray, function () {
                    givenHoursIndexed[this] = true;
                });
                return (Object.keys(givenHoursIndexed).length) ? givenHoursIndexed : false;
            },

            initFormatting = function () {
                var format = options.format || 'L LT';

                actualFormat = format.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput) {
                    var newinput = date.localeData().longDateFormat(formatInput) || formatInput;
                    return newinput.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function (formatInput2) { //temp fix for #740
                        return date.localeData().longDateFormat(formatInput2) || formatInput2;
                    });
                });


                parseFormats = options.extraFormats ? options.extraFormats.slice() : [];
                if (parseFormats.indexOf(format) < 0 && parseFormats.indexOf(actualFormat) < 0) {
                    parseFormats.push(actualFormat);
                }

                use24Hours = (actualFormat.toLowerCase().indexOf('a') < 1 && actualFormat.replace(/\[.*?\]/g, '').indexOf('h') < 1);

                if (isEnabled('y')) {
                    minViewModeNumber = 2;
                }
                if (isEnabled('M')) {
                    minViewModeNumber = 1;
                }
                if (isEnabled('d')) {
                    minViewModeNumber = 0;
                }

                currentViewMode = Math.max(minViewModeNumber, currentViewMode);

                if (!unset) {
                    setValue(date);
                }
            };

        /********************************************************************************
         *
         * Public API functions
         * =====================
         *
         * Important: Do not expose direct references to private objects or the options
         * object to the outer world. Always return a clone when returning values or make
         * a clone when setting a private variable.
         *
         ********************************************************************************/
        picker.destroy = function () {
            ///<summary>Destroys the widget and removes all attached event listeners</summary>
            hide();
            detachDatePickerElementEvents();
            element.removeData('DateTimePicker');
            element.removeData('date');
        };

        picker.toggle = toggle;

        picker.show = show;

        picker.hide = hide;

        picker.disable = function () {
            ///<summary>Disables the input element, the component is attached to, by adding a disabled="true" attribute to it.
            ///If the widget was visible before that call it is hidden. Possibly emits dp.hide</summary>
            hide();
            if (component && component.hasClass('btn')) {
                component.addClass('disabled');
            }
            input.prop('disabled', true);
            return picker;
        };

        picker.enable = function () {
            ///<summary>Enables the input element, the component is attached to, by removing disabled attribute from it.</summary>
            if (component && component.hasClass('btn')) {
                component.removeClass('disabled');
            }
            input.prop('disabled', false);
            return picker;
        };

        picker.ignoreReadonly = function (ignoreReadonly) {
            if (arguments.length === 0) {
                return options.ignoreReadonly;
            }
            if (typeof ignoreReadonly !== 'boolean') {
                throw new TypeError('ignoreReadonly () expects a boolean parameter');
            }
            options.ignoreReadonly = ignoreReadonly;
            return picker;
        };

        picker.options = function (newOptions) {
            if (arguments.length === 0) {
                return $.extend(true, {}, options);
            }

            if (!(newOptions instanceof Object)) {
                throw new TypeError('options() options parameter should be an object');
            }
            $.extend(true, options, newOptions);
            $.each(options, function (key, value) {
                if (picker[key] !== undefined) {
                    picker[key](value);
                } else {
                    throw new TypeError('option ' + key + ' is not recognized!');
                }
            });
            return picker;
        };

        picker.date = function (newDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.date">
            ///<summary>Returns the component's model current date, a moment object or null if not set.</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Sets the components model current moment to it. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.</summary>
            ///<param name="newDate" locid="$.fn.datetimepicker.date_p:newDate">Takes string, Date, moment, null parameter.</param>
            ///</signature>
            if (arguments.length === 0) {
                if (unset) {
                    return null;
                }
                return date.clone();
            }

            if (newDate !== null && typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('date() parameter must be one of [null, string, moment or Date]');
            }

            setValue(newDate === null ? null : parseInputDate(newDate));
            return picker;
        };

        picker.format = function (newFormat) {
            ///<summary>test su</summary>
            ///<param name="newFormat">info about para</param>
            ///<returns type="string|boolean">returns foo</returns>
            if (arguments.length === 0) {
                return options.format;
            }

            if ((typeof newFormat !== 'string') && ((typeof newFormat !== 'boolean') || (newFormat !== false))) {
                throw new TypeError('format() expects a string or boolean:false parameter ' + newFormat);
            }

            options.format = newFormat;
            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.timeZone = function (newZone) {
            if (arguments.length === 0) {
                return options.timeZone;
            }

            if (typeof newZone !== 'string') {
                throw new TypeError('newZone() expects a string parameter');
            }

            options.timeZone = newZone;

            return picker;
        };

        picker.dayViewHeaderFormat = function (newFormat) {
            if (arguments.length === 0) {
                return options.dayViewHeaderFormat;
            }

            if (typeof newFormat !== 'string') {
                throw new TypeError('dayViewHeaderFormat() expects a string parameter');
            }

            options.dayViewHeaderFormat = newFormat;
            return picker;
        };

        picker.extraFormats = function (formats) {
            if (arguments.length === 0) {
                return options.extraFormats;
            }

            if (formats !== false && !(formats instanceof Array)) {
                throw new TypeError('extraFormats() expects an array or false parameter');
            }

            options.extraFormats = formats;
            if (parseFormats) {
                initFormatting(); // reinit formatting
            }
            return picker;
        };

        picker.disabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledDates">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledDates ? $.extend({}, options.disabledDates) : options.disabledDates);
            }

            if (!dates) {
                options.disabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('disabledDates() expects an array parameter');
            }
            options.disabledDates = indexGivenDates(dates);
            options.enabledDates = false;
            update();
            return picker;
        };

        picker.enabledDates = function (dates) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledDates">
            ///<summary>Returns an array with the currently set enabled dates on the component.</summary>
            ///<returns type="array">options.enabledDates</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.enabledDates_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledDates ? $.extend({}, options.enabledDates) : options.enabledDates);
            }

            if (!dates) {
                options.enabledDates = false;
                update();
                return picker;
            }
            if (!(dates instanceof Array)) {
                throw new TypeError('enabledDates() expects an array parameter');
            }
            options.enabledDates = indexGivenDates(dates);
            options.disabledDates = false;
            update();
            return picker;
        };

        picker.daysOfWeekDisabled = function (daysOfWeekDisabled) {
            if (arguments.length === 0) {
                return options.daysOfWeekDisabled.splice(0);
            }

            if ((typeof daysOfWeekDisabled === 'boolean') && !daysOfWeekDisabled) {
                options.daysOfWeekDisabled = false;
                update();
                return picker;
            }

            if (!(daysOfWeekDisabled instanceof Array)) {
                throw new TypeError('daysOfWeekDisabled() expects an array parameter');
            }
            options.daysOfWeekDisabled = daysOfWeekDisabled.reduce(function (previousValue, currentValue) {
                currentValue = parseInt(currentValue, 10);
                if (currentValue > 6 || currentValue < 0 || isNaN(currentValue)) {
                    return previousValue;
                }
                if (previousValue.indexOf(currentValue) === -1) {
                    previousValue.push(currentValue);
                }
                return previousValue;
            }, []).sort();
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'd')) {
                    date.add(1, 'd');
                    if (tries === 31) {
                        throw 'Tried 31 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.maxDate = function (maxDate) {
            if (arguments.length === 0) {
                return options.maxDate ? options.maxDate.clone() : options.maxDate;
            }

            if ((typeof maxDate === 'boolean') && maxDate === false) {
                options.maxDate = false;
                update();
                return picker;
            }

            if (typeof maxDate === 'string') {
                if (maxDate === 'now' || maxDate === 'moment') {
                    maxDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(maxDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('maxDate() Could not parse date parameter: ' + maxDate);
            }
            if (options.minDate && parsedDate.isBefore(options.minDate)) {
                throw new TypeError('maxDate() date parameter is before options.minDate: ' + parsedDate.format(actualFormat));
            }
            options.maxDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isAfter(maxDate)) {
                setValue(options.maxDate);
            }
            if (viewDate.isAfter(parsedDate)) {
                viewDate = parsedDate.clone().subtract(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.minDate = function (minDate) {
            if (arguments.length === 0) {
                return options.minDate ? options.minDate.clone() : options.minDate;
            }

            if ((typeof minDate === 'boolean') && minDate === false) {
                options.minDate = false;
                update();
                return picker;
            }

            if (typeof minDate === 'string') {
                if (minDate === 'now' || minDate === 'moment') {
                    minDate = getMoment();
                }
            }

            var parsedDate = parseInputDate(minDate);

            if (!parsedDate.isValid()) {
                throw new TypeError('minDate() Could not parse date parameter: ' + minDate);
            }
            if (options.maxDate && parsedDate.isAfter(options.maxDate)) {
                throw new TypeError('minDate() date parameter is after options.maxDate: ' + parsedDate.format(actualFormat));
            }
            options.minDate = parsedDate;
            if (options.useCurrent && !options.keepInvalid && date.isBefore(minDate)) {
                setValue(options.minDate);
            }
            if (viewDate.isBefore(parsedDate)) {
                viewDate = parsedDate.clone().add(options.stepping, 'm');
            }
            update();
            return picker;
        };

        picker.defaultDate = function (defaultDate) {
            ///<signature helpKeyword="$.fn.datetimepicker.defaultDate">
            ///<summary>Returns a moment with the options.defaultDate option configuration or false if not set</summary>
            ///<returns type="Moment">date.clone()</returns>
            ///</signature>
            ///<signature>
            ///<summary>Will set the picker's inital date. If a boolean:false value is passed the options.defaultDate parameter is cleared.</summary>
            ///<param name="defaultDate" locid="$.fn.datetimepicker.defaultDate_p:defaultDate">Takes a string, Date, moment, boolean:false</param>
            ///</signature>
            if (arguments.length === 0) {
                return options.defaultDate ? options.defaultDate.clone() : options.defaultDate;
            }
            if (!defaultDate) {
                options.defaultDate = false;
                return picker;
            }

            if (typeof defaultDate === 'string') {
                if (defaultDate === 'now' || defaultDate === 'moment') {
                    defaultDate = getMoment();
                } else {
                    defaultDate = getMoment(defaultDate);
                }
            }

            var parsedDate = parseInputDate(defaultDate);
            if (!parsedDate.isValid()) {
                throw new TypeError('defaultDate() Could not parse date parameter: ' + defaultDate);
            }
            if (!isValid(parsedDate)) {
                throw new TypeError('defaultDate() date passed is invalid according to component setup validations');
            }

            options.defaultDate = parsedDate;

            if ((options.defaultDate && options.inline) || input.val().trim() === '') {
                setValue(options.defaultDate);
            }
            return picker;
        };

        picker.locale = function (locale) {
            if (arguments.length === 0) {
                return options.locale;
            }

            if (!moment.localeData(locale)) {
                throw new TypeError('locale() locale ' + locale + ' is not loaded from moment locales!');
            }

            options.locale = locale;
            date.locale(options.locale);
            viewDate.locale(options.locale);

            if (actualFormat) {
                initFormatting(); // reinit formatting
            }
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.stepping = function (stepping) {
            if (arguments.length === 0) {
                return options.stepping;
            }

            stepping = parseInt(stepping, 10);
            if (isNaN(stepping) || stepping < 1) {
                stepping = 1;
            }
            options.stepping = stepping;
            return picker;
        };

        picker.useCurrent = function (useCurrent) {
            var useCurrentOptions = ['year', 'month', 'day', 'hour', 'minute'];
            if (arguments.length === 0) {
                return options.useCurrent;
            }

            if ((typeof useCurrent !== 'boolean') && (typeof useCurrent !== 'string')) {
                throw new TypeError('useCurrent() expects a boolean or string parameter');
            }
            if (typeof useCurrent === 'string' && useCurrentOptions.indexOf(useCurrent.toLowerCase()) === -1) {
                throw new TypeError('useCurrent() expects a string parameter of ' + useCurrentOptions.join(', '));
            }
            options.useCurrent = useCurrent;
            return picker;
        };

        picker.collapse = function (collapse) {
            if (arguments.length === 0) {
                return options.collapse;
            }

            if (typeof collapse !== 'boolean') {
                throw new TypeError('collapse() expects a boolean parameter');
            }
            if (options.collapse === collapse) {
                return picker;
            }
            options.collapse = collapse;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.icons = function (icons) {
            if (arguments.length === 0) {
                return $.extend({}, options.icons);
            }

            if (!(icons instanceof Object)) {
                throw new TypeError('icons() expects parameter to be an Object');
            }
            $.extend(options.icons, icons);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.tooltips = function (tooltips) {
            if (arguments.length === 0) {
                return $.extend({}, options.tooltips);
            }

            if (!(tooltips instanceof Object)) {
                throw new TypeError('tooltips() expects parameter to be an Object');
            }
            $.extend(options.tooltips, tooltips);
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.useStrict = function (useStrict) {
            if (arguments.length === 0) {
                return options.useStrict;
            }

            if (typeof useStrict !== 'boolean') {
                throw new TypeError('useStrict() expects a boolean parameter');
            }
            options.useStrict = useStrict;
            return picker;
        };

        picker.sideBySide = function (sideBySide) {
            if (arguments.length === 0) {
                return options.sideBySide;
            }

            if (typeof sideBySide !== 'boolean') {
                throw new TypeError('sideBySide() expects a boolean parameter');
            }
            options.sideBySide = sideBySide;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.viewMode = function (viewMode) {
            if (arguments.length === 0) {
                return options.viewMode;
            }

            if (typeof viewMode !== 'string') {
                throw new TypeError('viewMode() expects a string parameter');
            }

            if (viewModes.indexOf(viewMode) === -1) {
                throw new TypeError('viewMode() parameter must be one of (' + viewModes.join(', ') + ') value');
            }

            options.viewMode = viewMode;
            currentViewMode = Math.max(viewModes.indexOf(viewMode), minViewModeNumber);

            showMode();
            return picker;
        };

        picker.toolbarPlacement = function (toolbarPlacement) {
            if (arguments.length === 0) {
                return options.toolbarPlacement;
            }

            if (typeof toolbarPlacement !== 'string') {
                throw new TypeError('toolbarPlacement() expects a string parameter');
            }
            if (toolbarPlacements.indexOf(toolbarPlacement) === -1) {
                throw new TypeError('toolbarPlacement() parameter must be one of (' + toolbarPlacements.join(', ') + ') value');
            }
            options.toolbarPlacement = toolbarPlacement;

            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetPositioning = function (widgetPositioning) {
            if (arguments.length === 0) {
                return $.extend({}, options.widgetPositioning);
            }

            if (({}).toString.call(widgetPositioning) !== '[object Object]') {
                throw new TypeError('widgetPositioning() expects an object variable');
            }
            if (widgetPositioning.horizontal) {
                if (typeof widgetPositioning.horizontal !== 'string') {
                    throw new TypeError('widgetPositioning() horizontal variable must be a string');
                }
                widgetPositioning.horizontal = widgetPositioning.horizontal.toLowerCase();
                if (horizontalModes.indexOf(widgetPositioning.horizontal) === -1) {
                    throw new TypeError('widgetPositioning() expects horizontal parameter to be one of (' + horizontalModes.join(', ') + ')');
                }
                options.widgetPositioning.horizontal = widgetPositioning.horizontal;
            }
            if (widgetPositioning.vertical) {
                if (typeof widgetPositioning.vertical !== 'string') {
                    throw new TypeError('widgetPositioning() vertical variable must be a string');
                }
                widgetPositioning.vertical = widgetPositioning.vertical.toLowerCase();
                if (verticalModes.indexOf(widgetPositioning.vertical) === -1) {
                    throw new TypeError('widgetPositioning() expects vertical parameter to be one of (' + verticalModes.join(', ') + ')');
                }
                options.widgetPositioning.vertical = widgetPositioning.vertical;
            }
            update();
            return picker;
        };

        picker.calendarWeeks = function (calendarWeeks) {
            if (arguments.length === 0) {
                return options.calendarWeeks;
            }

            if (typeof calendarWeeks !== 'boolean') {
                throw new TypeError('calendarWeeks() expects parameter to be a boolean value');
            }

            options.calendarWeeks = calendarWeeks;
            update();
            return picker;
        };

        picker.showTodayButton = function (showTodayButton) {
            if (arguments.length === 0) {
                return options.showTodayButton;
            }

            if (typeof showTodayButton !== 'boolean') {
                throw new TypeError('showTodayButton() expects a boolean parameter');
            }

            options.showTodayButton = showTodayButton;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.showClear = function (showClear) {
            if (arguments.length === 0) {
                return options.showClear;
            }

            if (typeof showClear !== 'boolean') {
                throw new TypeError('showClear() expects a boolean parameter');
            }

            options.showClear = showClear;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.widgetParent = function (widgetParent) {
            if (arguments.length === 0) {
                return options.widgetParent;
            }

            if (typeof widgetParent === 'string') {
                widgetParent = $(widgetParent);
            }

            if (widgetParent !== null && (typeof widgetParent !== 'string' && !(widgetParent instanceof $))) {
                throw new TypeError('widgetParent() expects a string or a jQuery object parameter');
            }

            options.widgetParent = widgetParent;
            if (widget) {
                hide();
                show();
            }
            return picker;
        };

        picker.keepOpen = function (keepOpen) {
            if (arguments.length === 0) {
                return options.keepOpen;
            }

            if (typeof keepOpen !== 'boolean') {
                throw new TypeError('keepOpen() expects a boolean parameter');
            }

            options.keepOpen = keepOpen;
            return picker;
        };

        picker.focusOnShow = function (focusOnShow) {
            if (arguments.length === 0) {
                return options.focusOnShow;
            }

            if (typeof focusOnShow !== 'boolean') {
                throw new TypeError('focusOnShow() expects a boolean parameter');
            }

            options.focusOnShow = focusOnShow;
            return picker;
        };

        picker.inline = function (inline) {
            if (arguments.length === 0) {
                return options.inline;
            }

            if (typeof inline !== 'boolean') {
                throw new TypeError('inline() expects a boolean parameter');
            }

            options.inline = inline;
            return picker;
        };

        picker.clear = function () {
            clear();
            return picker;
        };

        picker.keyBinds = function (keyBinds) {
            if (arguments.length === 0) {
                return options.keyBinds;
            }

            options.keyBinds = keyBinds;
            return picker;
        };

        picker.getMoment = function (d) {
            return getMoment(d);
        };

        picker.debug = function (debug) {
            if (typeof debug !== 'boolean') {
                throw new TypeError('debug() expects a boolean parameter');
            }

            options.debug = debug;
            return picker;
        };

        picker.allowInputToggle = function (allowInputToggle) {
            if (arguments.length === 0) {
                return options.allowInputToggle;
            }

            if (typeof allowInputToggle !== 'boolean') {
                throw new TypeError('allowInputToggle() expects a boolean parameter');
            }

            options.allowInputToggle = allowInputToggle;
            return picker;
        };

        picker.showClose = function (showClose) {
            if (arguments.length === 0) {
                return options.showClose;
            }

            if (typeof showClose !== 'boolean') {
                throw new TypeError('showClose() expects a boolean parameter');
            }

            options.showClose = showClose;
            return picker;
        };

        picker.keepInvalid = function (keepInvalid) {
            if (arguments.length === 0) {
                return options.keepInvalid;
            }

            if (typeof keepInvalid !== 'boolean') {
                throw new TypeError('keepInvalid() expects a boolean parameter');
            }
            options.keepInvalid = keepInvalid;
            return picker;
        };

        picker.datepickerInput = function (datepickerInput) {
            if (arguments.length === 0) {
                return options.datepickerInput;
            }

            if (typeof datepickerInput !== 'string') {
                throw new TypeError('datepickerInput() expects a string parameter');
            }

            options.datepickerInput = datepickerInput;
            return picker;
        };

        picker.parseInputDate = function (parseInputDate) {
            if (arguments.length === 0) {
                return options.parseInputDate;
            }

            if (typeof parseInputDate !== 'function') {
                throw new TypeError('parseInputDate() sholud be as function');
            }

            options.parseInputDate = parseInputDate;

            return picker;
        };

        picker.disabledTimeIntervals = function (disabledTimeIntervals) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledTimeIntervals">
            ///<summary>Returns an array with the currently set disabled dates on the component.</summary>
            ///<returns type="array">options.disabledTimeIntervals</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledDates if such exist.</summary>
            ///<param name="dates" locid="$.fn.datetimepicker.disabledTimeIntervals_p:dates">Takes an [ string or Date or moment ] of values and allows the user to select only from those days.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledTimeIntervals ? $.extend({}, options.disabledTimeIntervals) : options.disabledTimeIntervals);
            }

            if (!disabledTimeIntervals) {
                options.disabledTimeIntervals = false;
                update();
                return picker;
            }
            if (!(disabledTimeIntervals instanceof Array)) {
                throw new TypeError('disabledTimeIntervals() expects an array parameter');
            }
            options.disabledTimeIntervals = disabledTimeIntervals;
            update();
            return picker;
        };

        picker.disabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.disabledHours">
            ///<summary>Returns an array with the currently set disabled hours on the component.</summary>
            ///<returns type="array">options.disabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of
            ///options.enabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.disabledHours_p:hours">Takes an [ int ] of values and disallows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.disabledHours ? $.extend({}, options.disabledHours) : options.disabledHours);
            }

            if (!hours) {
                options.disabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('disabledHours() expects an array parameter');
            }
            options.disabledHours = indexGivenHours(hours);
            options.enabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };

        picker.enabledHours = function (hours) {
            ///<signature helpKeyword="$.fn.datetimepicker.enabledHours">
            ///<summary>Returns an array with the currently set enabled hours on the component.</summary>
            ///<returns type="array">options.enabledHours</returns>
            ///</signature>
            ///<signature>
            ///<summary>Setting this takes precedence over options.minDate, options.maxDate configuration. Also calling this function removes the configuration of options.disabledHours if such exist.</summary>
            ///<param name="hours" locid="$.fn.datetimepicker.enabledHours_p:hours">Takes an [ int ] of values and allows the user to select only from those hours.</param>
            ///</signature>
            if (arguments.length === 0) {
                return (options.enabledHours ? $.extend({}, options.enabledHours) : options.enabledHours);
            }

            if (!hours) {
                options.enabledHours = false;
                update();
                return picker;
            }
            if (!(hours instanceof Array)) {
                throw new TypeError('enabledHours() expects an array parameter');
            }
            options.enabledHours = indexGivenHours(hours);
            options.disabledHours = false;
            if (options.useCurrent && !options.keepInvalid) {
                var tries = 0;
                while (!isValid(date, 'h')) {
                    date.add(1, 'h');
                    if (tries === 24) {
                        throw 'Tried 24 times to find a valid date';
                    }
                    tries++;
                }
                setValue(date);
            }
            update();
            return picker;
        };
        /**
         * Returns the component's model current viewDate, a moment object or null if not set. Passing a null value unsets the components model current moment. Parsing of the newDate parameter is made using moment library with the options.format and options.useStrict components configuration.
         * @param {Takes string, viewDate, moment, null parameter.} newDate
         * @returns {viewDate.clone()}
         */
        picker.viewDate = function (newDate) {
            if (arguments.length === 0) {
                return viewDate.clone();
            }

            if (!newDate) {
                viewDate = date.clone();
                return picker;
            }

            if (typeof newDate !== 'string' && !moment.isMoment(newDate) && !(newDate instanceof Date)) {
                throw new TypeError('viewDate() parameter must be one of [string, moment or Date]');
            }

            viewDate = parseInputDate(newDate);
            viewUpdate();
            return picker;
        };

        // initializing element and component attributes
        if (element.is('input')) {
            input = element;
        } else {
            input = element.find(options.datepickerInput);
            if (input.length === 0) {
                input = element.find('input');
            } else if (!input.is('input')) {
                throw new Error('CSS class "' + options.datepickerInput + '" cannot be applied to non input element');
            }
        }

        if (element.hasClass('input-group')) {
            // in case there is more then one 'input-group-addon' Issue #48
            if (element.find('.datepickerbutton').length === 0) {
                component = element.find('.input-group-addon');
            } else {
                component = element.find('.datepickerbutton');
            }
        }

        if (!options.inline && !input.is('input')) {
            throw new Error('Could not initialize DateTimePicker without an input element');
        }

        // Set defaults for date here now instead of in var declaration
        date = getMoment();
        viewDate = date.clone();

        $.extend(true, options, dataToOptions());

        picker.options(options);

        initFormatting();

        attachDatePickerElementEvents();

        if (input.prop('disabled')) {
            picker.disable();
        }
        if (input.is('input') && input.val().trim().length !== 0) {
            setValue(parseInputDate(input.val().trim()));
        }
        else if (options.defaultDate && input.attr('placeholder') === undefined) {
            setValue(options.defaultDate);
        }
        if (options.inline) {
            show();
        }
        return picker;
    };

    /********************************************************************************
     *
     * jQuery plugin constructor and defaults object
     *
     ********************************************************************************/

    /**
    * See (http://jquery.com/).
    * @name jQuery
    * @class
    * See the jQuery Library  (http://jquery.com/) for full details.  This just
    * documents the function and classes that are added to jQuery by this plug-in.
    */
    /**
     * See (http://jquery.com/)
     * @name fn
     * @class
     * See the jQuery Library  (http://jquery.com/) for full details.  This just
     * documents the function and classes that are added to jQuery by this plug-in.
     * @memberOf jQuery
     */
    /**
     * Show comments
     * @class datetimepicker
     * @memberOf jQuery.fn
     */
    $.fn.datetimepicker = function (options) {
        options = options || {};

        var args = Array.prototype.slice.call(arguments, 1),
            isInstance = true,
            thisMethods = ['destroy', 'hide', 'show', 'toggle'],
            returnValue;

        if (typeof options === 'object') {
            return this.each(function () {
                var $this = $(this),
                    _options;
                if (!$this.data('DateTimePicker')) {
                    // create a private copy of the defaults object
                    _options = $.extend(true, {}, $.fn.datetimepicker.defaults, options);
                    $this.data('DateTimePicker', dateTimePicker($this, _options));
                }
            });
        } else if (typeof options === 'string') {
            this.each(function () {
                var $this = $(this),
                    instance = $this.data('DateTimePicker');
                if (!instance) {
                    throw new Error('bootstrap-datetimepicker("' + options + '") method was called on an element that is not using DateTimePicker');
                }

                returnValue = instance[options].apply(instance, args);
                isInstance = returnValue === instance;
            });

            if (isInstance || $.inArray(options, thisMethods) > -1) {
                return this;
            }

            return returnValue;
        }

        throw new TypeError('Invalid arguments for DateTimePicker: ' + options);
    };

    $.fn.datetimepicker.defaults = {
        timeZone: '',
        format: false,
        dayViewHeaderFormat: 'MMMM YYYY',
        extraFormats: false,
        stepping: 1,
        minDate: false,
        maxDate: false,
        useCurrent: true,
        collapse: true,
        locale: moment.locale(),
        defaultDate: false,
        disabledDates: false,
        enabledDates: false,
        icons: {
            time: 'glyphicon glyphicon-time',
            date: 'glyphicon glyphicon-calendar',
            up: 'glyphicon glyphicon-chevron-up',
            down: 'glyphicon glyphicon-chevron-down',
            previous: 'glyphicon glyphicon-chevron-left',
            next: 'glyphicon glyphicon-chevron-right',
            today: 'glyphicon glyphicon-screenshot',
            clear: 'glyphicon glyphicon-trash',
            close: 'glyphicon glyphicon-remove'
        },
        tooltips: {
            today: 'Go to today',
            clear: 'Clear selection',
            close: 'Close the picker',
            selectMonth: 'Select Month',
            prevMonth: 'Previous Month',
            nextMonth: 'Next Month',
            selectYear: 'Select Year',
            prevYear: 'Previous Year',
            nextYear: 'Next Year',
            selectDecade: 'Select Decade',
            prevDecade: 'Previous Decade',
            nextDecade: 'Next Decade',
            prevCentury: 'Previous Century',
            nextCentury: 'Next Century',
            pickHour: 'Pick Hour',
            incrementHour: 'Increment Hour',
            decrementHour: 'Decrement Hour',
            pickMinute: 'Pick Minute',
            incrementMinute: 'Increment Minute',
            decrementMinute: 'Decrement Minute',
            pickSecond: 'Pick Second',
            incrementSecond: 'Increment Second',
            decrementSecond: 'Decrement Second',
            togglePeriod: 'Toggle Period',
            selectTime: 'Select Time'
        },
        useStrict: false,
        sideBySide: false,
        daysOfWeekDisabled: false,
        calendarWeeks: false,
        viewMode: 'days',
        toolbarPlacement: 'default',
        showTodayButton: false,
        showClear: false,
        showClose: false,
        widgetPositioning: {
            horizontal: 'auto',
            vertical: 'auto'
        },
        widgetParent: null,
        ignoreReadonly: false,
        keepOpen: false,
        focusOnShow: true,
        inline: false,
        keepInvalid: false,
        datepickerInput: '.datepickerinput',
        keyBinds: {
            up: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(7, 'd'));
                } else {
                    this.date(d.clone().add(this.stepping(), 'm'));
                }
            },
            down: function (widget) {
                if (!widget) {
                    this.show();
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(7, 'd'));
                } else {
                    this.date(d.clone().subtract(this.stepping(), 'm'));
                }
            },
            'control up': function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'y'));
                } else {
                    this.date(d.clone().add(1, 'h'));
                }
            },
            'control down': function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'y'));
                } else {
                    this.date(d.clone().subtract(1, 'h'));
                }
            },
            left: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'd'));
                }
            },
            right: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'd'));
                }
            },
            pageUp: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().subtract(1, 'M'));
                }
            },
            pageDown: function (widget) {
                if (!widget) {
                    return;
                }
                var d = this.date() || this.getMoment();
                if (widget.find('.datepicker').is(':visible')) {
                    this.date(d.clone().add(1, 'M'));
                }
            },
            enter: function () {
                this.hide();
            },
            escape: function () {
                this.hide();
            },
            //tab: function (widget) { //this break the flow of the form. disabling for now
            //    var toggle = widget.find('.picker-switch a[data-action="togglePicker"]');
            //    if(toggle.length > 0) toggle.click();
            //},
            'control space': function (widget) {
                if (!widget) {
                    return;
                }
                if (widget.find('.timepicker').is(':visible')) {
                    widget.find('.btn[data-action="togglePeriod"]').click();
                }
            },
            t: function () {
                this.date(this.getMoment());
            },
            'delete': function () {
                this.clear();
            }
        },
        debug: false,
        allowInputToggle: false,
        disabledTimeIntervals: false,
        disabledHours: false,
        enabledHours: false,
        viewDate: false
    };

    return $.fn.datetimepicker;
}));


/***/ }),

/***/ "./node_modules/moment/moment.js":
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/vunguyen/PhpstormProjects/test-02/node_modules/moment/moment.js'");

/***/ }),

/***/ "./node_modules/vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.js":
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__("./node_modules/moment/moment.js"), __webpack_require__("./node_modules/jquery/dist/jquery.js"), __webpack_require__("./node_modules/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js"));
	else if(typeof define === 'function' && define.amd)
		define("VueBootstrapDatetimePicker", ["moment", "jquery", "eonasdan-bootstrap-datetimepicker"], factory);
	else if(typeof exports === 'object')
		exports["VueBootstrapDatetimePicker"] = factory(require("moment"), require("jquery"), require("eonasdan-bootstrap-datetimepicker"));
	else
		root["VueBootstrapDatetimePicker"] = factory(root["moment"], root["jQuery"], root["eonasdan-bootstrap-datetimepicker"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/component.vue?vue&type=template&id=55cbc077
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.config.inline)?_c('div',{staticClass:"datetimepicker-inline"}):_c('input',{staticClass:"form-control",attrs:{"type":"text"}})}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/component.vue?vue&type=template&id=55cbc077

// EXTERNAL MODULE: external {"commonjs":"jquery","commonjs2":"jquery","amd":"jquery","root":"jQuery"}
var external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_ = __webpack_require__(1);
var external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(0);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "eonasdan-bootstrap-datetimepicker"
var external_eonasdan_bootstrap_datetimepicker_ = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/component.vue?vue&type=script&lang=js
//
//
//
//
//
//
//





// You have to import css yourself

// Events list without prefix
// http://eonasdan.github.io/bootstrap-datetimepicker/Events/
var events = ['hide', 'show', 'change', 'error', 'update'];

/* harmony default export */ var componentvue_type_script_lang_js = ({
  name: 'date-picker',
  props: {
    value: {
      default: null,
      required: true,
      validator: function validator(value) {
        return value === null || value instanceof Date || typeof value === 'string' || value instanceof String || value instanceof external_moment_default.a;
      }
    },
    // http://eonasdan.github.io/bootstrap-datetimepicker/Options/
    config: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    /**
     * You can set this to true when component is wrapped in input-group
     * Note: inline and wrap mode wont work together
     */
    wrap: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      dp: null,
      // jQuery DOM
      elem: null
    };
  },
  mounted: function mounted() {
    // Return early if date-picker is already loaded
    /* istanbul ignore if */
    if (this.dp) return;
    // Handle wrapped input
    this.elem = external_commonjs_jquery_commonjs2_jquery_amd_jquery_root_jQuery_default()(this.wrap ? this.$el.parentNode : this.$el);
    // Init date-picker
    this.elem.datetimepicker(this.config);
    // Store data control
    this.dp = this.elem.data('DateTimePicker');
    // Set initial value
    this.dp.date(this.value);
    // Watch for changes
    this.elem.on('dp.change', this.onChange);
    // Register remaining events
    this.registerEvents();
  },

  watch: {
    /**
     * Listen to change from outside of component and update DOM
     *
     * @param newValue
     */
    value: function value(newValue) {
      this.dp && this.dp.date(newValue || null);
    },


    /**
     * Watch for any change in options and set them
     *
     * @param newConfig Object
     */
    config: {
      deep: true,
      handler: function handler(newConfig) {
        this.dp && this.dp.options(newConfig);
      }
    }
  },
  methods: {
    /**
     * Update v-model upon change triggered by date-picker itself
     *
     * @param event
     */
    onChange: function onChange(event) {
      var formattedDate = event.date ? event.date.format(this.dp.format()) : null;
      this.$emit('input', formattedDate);
    },


    /**
     * Emit all available events
     */
    registerEvents: function registerEvents() {
      var _this = this;

      events.forEach(function (name) {
        _this.elem.on('dp.' + name, function () {
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this.$emit.apply(_this, ['dp-' + name].concat(args));
        });
      });
    }
  },
  /**
   * Free up memory
   */
  beforeDestroy: function beforeDestroy() {
    /* istanbul ignore else */
    if (this.dp) {
      this.dp.destroy();
      this.dp = null;
      this.elem = null;
    }
  }
});
// CONCATENATED MODULE: ./src/component.vue?vue&type=script&lang=js
 /* harmony default export */ var src_componentvue_type_script_lang_js = (componentvue_type_script_lang_js); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/component.vue





/* normalize component */

var component = normalizeComponent(
  src_componentvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var src_component = (component.exports);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatetimePickerPlugin", function() { return src_DatetimePickerPlugin; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "component", function() { return src_component; });


var src_DatetimePickerPlugin = function DatetimePickerPlugin(Vue, params) {
  var name = 'date-picker';
  /* istanbul ignore else */
  if (typeof params === 'string') name = params;

  Vue.component(name, src_component);
};

src_component.install = src_DatetimePickerPlugin;

/* harmony default export */ var src = __webpack_exports__["default"] = (src_component);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ })
/******/ ]);
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00e6a7c3\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "duration" } }, [
                          _vm._v("Duration *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "duration",
                            placeholder: "Enter Duration *"
                          },
                          domProps: { value: _vm.item.duration },
                          on: { input: _vm.updateDuration }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "repayment_frequency" } }, [
                          _vm._v("Repayment frequency *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "repayment_frequency",
                            placeholder: "Enter Repayment frequency *"
                          },
                          domProps: { value: _vm.item.repayment_frequency },
                          on: { input: _vm.updateRepayment_frequency }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "interest_rate" } }, [
                          _vm._v("Interest rate *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "interest_rate",
                            placeholder: "Enter Interest rate *"
                          },
                          domProps: { value: _vm.item.interest_rate },
                          on: { input: _vm.updateInterest_rate }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "arrangement_fee" } }, [
                          _vm._v("Arrangement fee *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "arrangement_fee",
                            placeholder: "Enter Arrangement fee *"
                          },
                          domProps: { value: _vm.item.arrangement_fee },
                          on: { input: _vm.updateArrangement_fee }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Status *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "status",
                              value: _vm.item.status,
                              options: _vm.statusEnum
                            },
                            on: { input: _vm.updateStatus }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "loan_code" } }, [
                          _vm._v("Loan code *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "loan_code",
                            placeholder: "Enter Loan code *"
                          },
                          domProps: { value: _vm.item.loan_code },
                          on: { input: _vm.updateLoan_code }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Loans")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Edit")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-00e6a7c3", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0422ebea\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _vm.$can(_vm.xprops.permission_prefix + "create")
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: { name: _vm.xprops.route + ".create" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" Add new\n                            ")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.fetchData }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-refresh",
                          class: { "fa-spin": _vm.loading }
                        }),
                        _vm._v(" Refresh\n                            ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _vm.loading
                    ? _c("div", { staticClass: "row" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("datatable", {
                        attrs: {
                          columns: _vm.columns,
                          data: _vm.data,
                          total: _vm.total,
                          query: _vm.query,
                          xprops: _vm.xprops
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Permissions")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-4 col-xs-offset-4" }, [
      _c("div", { staticClass: "alert text-center" }, [
        _c("i", { staticClass: "fa fa-spin fa-refresh" }),
        _vm._v(" Loading\n                                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0422ebea", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04997954\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "vue-btn",
      class: _vm.getBackgroundClass,
      attrs: { type: _vm.getType }
    },
    [
      _c("transition", { attrs: { name: "fade", mode: "out-in" } }, [
        _c("div", { class: _vm.getSpinnerClass })
      ]),
      _vm._v(" "),
      _vm.showSlot ? _vm._t("default") : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-04997954", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d1c0911\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.value !== null
      ? _c("span", { staticClass: "label label-info" }, [
          _vm._v(
            "\n        " +
              _vm._s(_vm.value[_vm.$root.relationships[_vm.field]]) +
              "\n    "
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d1c0911", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d427ed0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _vm.$can(_vm.xprops.permission_prefix + "create")
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: { name: _vm.xprops.route + ".create" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" Add new\n                            ")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.fetchData }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-refresh",
                          class: { "fa-spin": _vm.loading }
                        }),
                        _vm._v(" Refresh\n                            ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _vm.loading
                    ? _c("div", { staticClass: "row" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("datatable", {
                        attrs: {
                          columns: _vm.columns,
                          data: _vm.data,
                          total: _vm.total,
                          query: _vm.query,
                          xprops: _vm.xprops
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("User actions")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-4 col-xs-offset-4" }, [
      _c("div", { staticClass: "alert text-center" }, [
        _c("i", { staticClass: "fa fa-spin fa-refresh" }),
        _vm._v(" Loading\n                                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0d427ed0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15a01839\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/Alert.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.message
    ? _c("div", { staticClass: "row row-alert" }, [
        _c("div", { staticClass: "col-xs-6" }, [
          _c("div", { staticClass: "alert", class: "alert-" + _vm.color }, [
            _c("h4", [
              _vm.color == "success"
                ? _c("i", { staticClass: "icon fa fa-check" })
                : _vm._e(),
              _vm._v(" "),
              _vm.color == "danger"
                ? _c("i", { staticClass: "icon fa fa-ban" })
                : _vm._e(),
              _vm._v(
                "\n                " + _vm._s(_vm.message) + "\n            "
              )
            ]),
            _vm._v(" "),
            _vm.errors
              ? _c(
                  "ul",
                  _vm._l(_vm.errors, function(value, key) {
                    return _c("li", [
                      _vm._v(
                        "\n                    " +
                          _vm._s(value[0]) +
                          "\n                "
                      )
                    ])
                  }),
                  0
                )
              : _vm._e()
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15a01839", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15e143d0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Enter Name *"
                          },
                          domProps: { value: _vm.item.name },
                          on: { input: _vm.updateName }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            name: "email",
                            placeholder: "Enter Email *"
                          },
                          domProps: { value: _vm.item.email },
                          on: { input: _vm.updateEmail }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Password *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            name: "password",
                            placeholder: "Enter Password *"
                          },
                          on: { input: _vm.updatePassword }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "role" } }, [
                            _vm._v("Role *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "role",
                              label: "title",
                              value: _vm.item.role,
                              options: _vm.rolesAll,
                              multiple: ""
                            },
                            on: { input: _vm.updateRole }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "checkbox" }, [
                          _c("label", [
                            _c("input", {
                              attrs: { type: "checkbox", name: "approved" },
                              domProps: {
                                value: _vm.item.approved,
                                checked: _vm.item.approved == true
                              },
                              on: { change: _vm.updateApproved }
                            }),
                            _vm._v(
                              "\n                                        Approved\n                                    "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Users")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Create")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-15e143d0", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1a272ffb\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "title" } }, [
                          _vm._v("Title *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "title",
                            placeholder: "Enter Title *"
                          },
                          domProps: { value: _vm.item.title },
                          on: { input: _vm.updateTitle }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "permission" } }, [
                            _vm._v("Permissions *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "permission",
                              label: "title",
                              value: _vm.item.permission,
                              options: _vm.permissionsAll,
                              multiple: ""
                            },
                            on: { input: _vm.updatePermission }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Roles")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Create")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1a272ffb", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1dfc2188\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [_c("back-buttton")], 1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.id))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Title")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.title))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Permissions")]),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(_vm.item.permission, function(permission) {
                                return _c(
                                  "span",
                                  { staticClass: "label label-info" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(permission.title) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Roles")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("View")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1dfc2188", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e1838de\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "name" } }, [
                          _vm._v("Name *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "name",
                            placeholder: "Enter Name *"
                          },
                          domProps: { value: _vm.item.name },
                          on: { input: _vm.updateName }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "email" } }, [
                          _vm._v("Email *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "email",
                            name: "email",
                            placeholder: "Enter Email *"
                          },
                          domProps: { value: _vm.item.email },
                          on: { input: _vm.updateEmail }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "password" } }, [
                          _vm._v("Password *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            name: "password",
                            placeholder: "Enter Password *"
                          },
                          on: { input: _vm.updatePassword }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "role" } }, [
                            _vm._v("Role *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "role",
                              label: "title",
                              value: _vm.item.role,
                              options: _vm.rolesAll,
                              multiple: ""
                            },
                            on: { input: _vm.updateRole }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("div", { staticClass: "checkbox" }, [
                          _c("label", [
                            _c("input", {
                              attrs: { type: "checkbox", name: "approved" },
                              domProps: {
                                value: _vm.item.approved,
                                checked: _vm.item.approved == true
                              },
                              on: { change: _vm.updateApproved }
                            }),
                            _vm._v(
                              "\n                                        Approved\n                                    "
                            )
                          ])
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Users")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Edit")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e1838de", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2eb33288\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "loan" } }, [
                            _vm._v("Loan *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "loan",
                              label: "loan_code",
                              value: _vm.item.loan,
                              options: _vm.loansAll
                            },
                            on: { input: _vm.updateLoan }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "amount" } }, [
                          _vm._v("Amount *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "amount",
                            placeholder: "Enter Amount *"
                          },
                          domProps: { value: _vm.item.amount },
                          on: { input: _vm.updateAmount }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Status *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "status",
                              value: _vm.item.status,
                              options: _vm.statusEnum
                            },
                            on: { input: _vm.updateStatus }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "note" } }, [
                          _vm._v("Note")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: {
                            rows: "3",
                            name: "note",
                            placeholder: "Enter Note"
                          },
                          domProps: { value: _vm.item.note },
                          on: { input: _vm.updateNote }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Repayment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Edit")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2eb33288", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-32b2c6a4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _vm.$can(_vm.xprops.permission_prefix + "create")
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: { name: _vm.xprops.route + ".create" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" Add new\n                            ")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.fetchData }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-refresh",
                          class: { "fa-spin": _vm.loading }
                        }),
                        _vm._v(" Refresh\n                            ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _vm.loading
                    ? _c("div", { staticClass: "row" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("datatable", {
                        attrs: {
                          columns: _vm.columns,
                          data: _vm.data,
                          total: _vm.total,
                          query: _vm.query,
                          xprops: _vm.xprops
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Users")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-4 col-xs-offset-4" }, [
      _c("div", { staticClass: "alert text-center" }, [
        _c("i", { staticClass: "fa fa-spin fa-refresh" }),
        _vm._v(" Loading\n                                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-32b2c6a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41b41ab2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.value, function(item) {
      return _c("span", { staticClass: "label label-info" }, [
        _vm._v(
          "\n        " +
            _vm._s(item[_vm.$root.relationships[_vm.field]]) +
            "\n    "
        )
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-41b41ab2", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53b64a44\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/ChangePassword.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitForm($event)
                }
              }
            },
            [
              _c("div", { staticClass: "col-xs-12" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "current_password" } }, [
                          _vm._v("Current password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "password", name: "current_password" },
                          domProps: { value: _vm.current_password },
                          on: { input: _vm.updateCurrentPassword }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "new_password" } }, [
                          _vm._v("New password")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: { type: "password", name: "new_password" },
                          domProps: { value: _vm.new_password },
                          on: { input: _vm.updateNewPassword }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c(
                          "label",
                          { attrs: { for: "new_password_confirmation" } },
                          [_vm._v("Confirm new password")]
                        ),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "password",
                            name: "new_password_confirmation"
                          },
                          domProps: { value: _vm.new_password_confirmation },
                          on: { input: _vm.updateNewPasswordConfirmation }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ])
            ]
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Change Password")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border box-success" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Change Password")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-53b64a44", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-58c7cd95\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [_c("back-buttton")], 1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.id))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Title")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.title))])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Permissions")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("View")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-58c7cd95", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5da60a69\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _vm.$can(_vm.xprops.permission_prefix + "create")
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: { name: _vm.xprops.route + ".create" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" Add new\n                            ")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.fetchData }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-refresh",
                          class: { "fa-spin": _vm.loading }
                        }),
                        _vm._v(" Refresh\n                            ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _vm.loading
                    ? _c("div", { staticClass: "row" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("datatable", {
                        attrs: {
                          columns: _vm.columns,
                          data: _vm.data,
                          total: _vm.total,
                          query: _vm.query,
                          xprops: _vm.xprops
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Loans")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-4 col-xs-offset-4" }, [
      _c("div", { staticClass: "alert text-center" }, [
        _c("i", { staticClass: "fa fa-spin fa-refresh" }),
        _vm._v(" Loading\n                                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5da60a69", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5faec504\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "btn-group btn-group-xs" },
    [
      _vm.$can(_vm.xprops.permission_prefix + "view")
        ? _c(
            "router-link",
            {
              staticClass: "btn btn-primary",
              attrs: {
                to: {
                  name: _vm.xprops.route + ".show",
                  params: { id: _vm.row.id }
                }
              }
            },
            [_vm._v("\n         View\n     ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$can(_vm.xprops.permission_prefix + "edit")
        ? _c(
            "router-link",
            {
              staticClass: "btn btn-warning",
              attrs: {
                to: {
                  name: _vm.xprops.route + ".edit",
                  params: { id: _vm.row.id }
                }
              }
            },
            [_vm._v("\n         Edit\n     ")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.$can(_vm.xprops.permission_prefix + "delete")
        ? _c(
            "button",
            {
              staticClass: "btn btn-danger",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.destroyData(_vm.row.id)
                }
              }
            },
            [_vm._v("\n         Delete\n     ")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5faec504", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-64b133c9\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "title" } }, [
                          _vm._v("Title *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "title",
                            placeholder: "Enter Title *"
                          },
                          domProps: { value: _vm.item.title },
                          on: { input: _vm.updateTitle }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "permission" } }, [
                            _vm._v("Permissions *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "permission",
                              label: "title",
                              value: _vm.item.permission,
                              options: _vm.permissionsAll,
                              multiple: ""
                            },
                            on: { input: _vm.updatePermission }
                          })
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Roles")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Edit")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-64b133c9", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6711dbbc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "title" } }, [
                          _vm._v("Title *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "title",
                            placeholder: "Enter Title *"
                          },
                          domProps: { value: _vm.item.title },
                          on: { input: _vm.updateTitle }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Permissions")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Edit")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6711dbbc", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dde2a90\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _vm.$can(_vm.xprops.permission_prefix + "create")
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: { name: _vm.xprops.route + ".create" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" Add new\n                            ")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.fetchData }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-refresh",
                          class: { "fa-spin": _vm.loading }
                        }),
                        _vm._v(" Refresh\n                            ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _vm.loading
                    ? _c("div", { staticClass: "row" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("datatable", {
                        attrs: {
                          columns: _vm.columns,
                          data: _vm.data,
                          total: _vm.total,
                          query: _vm.query,
                          xprops: _vm.xprops
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Repayment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-4 col-xs-offset-4" }, [
      _c("div", { staticClass: "alert text-center" }, [
        _c("i", { staticClass: "fa fa-spin fa-refresh" }),
        _vm._v(" Loading\n                                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6dde2a90", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-732cff23\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c(
                  "div",
                  { staticClass: "btn-group" },
                  [
                    _vm.$can(_vm.xprops.permission_prefix + "create")
                      ? _c(
                          "router-link",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              to: { name: _vm.xprops.route + ".create" }
                            }
                          },
                          [
                            _c("i", { staticClass: "fa fa-plus" }),
                            _vm._v(" Add new\n                            ")
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-default btn-sm",
                        attrs: { type: "button" },
                        on: { click: _vm.fetchData }
                      },
                      [
                        _c("i", {
                          staticClass: "fa fa-refresh",
                          class: { "fa-spin": _vm.loading }
                        }),
                        _vm._v(" Refresh\n                            ")
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "box-body" },
                [
                  _vm.loading
                    ? _c("div", { staticClass: "row" }, [_vm._m(2)])
                    : _vm._e(),
                  _vm._v(" "),
                  !_vm.loading
                    ? _c("datatable", {
                        attrs: {
                          columns: _vm.columns,
                          data: _vm.data,
                          total: _vm.total,
                          query: _vm.query,
                          xprops: _vm.xprops
                        }
                      })
                    : _vm._e()
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Roles")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("List")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-xs-4 col-xs-offset-4" }, [
      _c("div", { staticClass: "alert text-center" }, [
        _c("i", { staticClass: "fa fa-spin fa-refresh" }),
        _vm._v(" Loading\n                                ")
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-732cff23", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74f7222f\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [_c("back-buttton")], 1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.id))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Loan")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm.item.loan !== null
                                ? _c(
                                    "span",
                                    { staticClass: "label label-info" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.item.loan.loan_code) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Amount")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.amount))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.status))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Note")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.note))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Created by")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm.item.created_by !== null
                                ? _c(
                                    "span",
                                    { staticClass: "label label-info" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.item.created_by.name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Repayment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("View")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74f7222f", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-759b722e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "loan" } }, [
                            _vm._v("Loan *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "loan",
                              label: "loan_code",
                              value: _vm.item.loan,
                              options: _vm.loansAll
                            },
                            on: { input: _vm.updateLoan }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "amount" } }, [
                          _vm._v("Amount *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "amount",
                            placeholder: "Enter Amount *"
                          },
                          domProps: { value: _vm.item.amount },
                          on: { input: _vm.updateAmount }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Status *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "status",
                              value: _vm.item.status,
                              options: _vm.statusEnum
                            },
                            on: { input: _vm.updateStatus }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "note" } }, [
                          _vm._v("Note")
                        ]),
                        _vm._v(" "),
                        _c("textarea", {
                          staticClass: "form-control",
                          attrs: {
                            rows: "3",
                            name: "note",
                            placeholder: "Enter Note"
                          },
                          domProps: { value: _vm.item.note },
                          on: { input: _vm.updateNote }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Repayment")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Create")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-759b722e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ecf8d75\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "duration" } }, [
                          _vm._v("Duration *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "duration",
                            placeholder: "Enter Duration *"
                          },
                          domProps: { value: _vm.item.duration },
                          on: { input: _vm.updateDuration }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "repayment_frequency" } }, [
                          _vm._v("Repayment frequency *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "number",
                            name: "repayment_frequency",
                            placeholder: "Enter Repayment frequency *"
                          },
                          domProps: { value: _vm.item.repayment_frequency },
                          on: { input: _vm.updateRepayment_frequency }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "interest_rate" } }, [
                          _vm._v("Interest rate *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "interest_rate",
                            placeholder: "Enter Interest rate *"
                          },
                          domProps: { value: _vm.item.interest_rate },
                          on: { input: _vm.updateInterest_rate }
                        })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "arrangement_fee" } }, [
                          _vm._v("Arrangement fee *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "arrangement_fee",
                            placeholder: "Enter Arrangement fee *"
                          },
                          domProps: { value: _vm.item.arrangement_fee },
                          on: { input: _vm.updateArrangement_fee }
                        })
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "form-group" },
                        [
                          _c("label", { attrs: { for: "status" } }, [
                            _vm._v("Status *")
                          ]),
                          _vm._v(" "),
                          _c("v-select", {
                            attrs: {
                              name: "status",
                              value: _vm.item.status,
                              options: _vm.statusEnum
                            },
                            on: { input: _vm.updateStatus }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "loan_code" } }, [
                          _vm._v("Loan code *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "loan_code",
                            placeholder: "Enter Loan code *"
                          },
                          domProps: { value: _vm.item.loan_code },
                          on: { input: _vm.updateLoan_code }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Loans")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Create")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7ecf8d75", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-808a5428\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/BackButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "btn btn-default btn-sm",
      attrs: { type: "button" },
      on: { click: _vm.routerBack }
    },
    [
      _c("span", { staticClass: "glyphicon glyphicon-chevron-left" }),
      _vm._v(" Back\n")
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-808a5428", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ab2e175e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [_c("back-buttton")], 1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.id))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Name")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.name))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Email")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.email))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Role")]),
                            _vm._v(" "),
                            _c(
                              "td",
                              _vm._l(_vm.item.role, function(role) {
                                return _c(
                                  "span",
                                  { staticClass: "label label-info" },
                                  [
                                    _vm._v(
                                      "\n                                                " +
                                        _vm._s(role.title) +
                                        "\n                                            "
                                    )
                                  ]
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Approved")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.approved))])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Users")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("View")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ab2e175e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b02247d8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c(
              "form",
              {
                attrs: { novalidate: "" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitForm($event)
                  }
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-body" },
                      [_c("back-buttton")],
                      1
                    ),
                    _vm._v(" "),
                    _c("bootstrap-alert"),
                    _vm._v(" "),
                    _c("div", { staticClass: "box-body" }, [
                      _c("div", { staticClass: "form-group" }, [
                        _c("label", { attrs: { for: "title" } }, [
                          _vm._v("Title *")
                        ]),
                        _vm._v(" "),
                        _c("input", {
                          staticClass: "form-control",
                          attrs: {
                            type: "text",
                            name: "title",
                            placeholder: "Enter Title *"
                          },
                          domProps: { value: _vm.item.title },
                          on: { input: _vm.updateTitle }
                        })
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "box-footer" },
                      [
                        _c(
                          "vue-button-spinner",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: {
                              isLoading: _vm.loading,
                              disabled: _vm.loading
                            }
                          },
                          [
                            _vm._v(
                              "\n                                Save\n                            "
                            )
                          ]
                        )
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            )
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Permissions")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("Create")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b02247d8", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b228ba68\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("input", {
      attrs: { type: "checkbox", disabled: "" },
      domProps: { checked: _vm.value }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b228ba68", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5913994\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "section",
    { staticClass: "content-wrapper", staticStyle: { "min-height": "960px" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "content" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xs-12" }, [
            _c("div", { staticClass: "box" }, [
              _vm._m(1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [_c("back-buttton")], 1),
              _vm._v(" "),
              _c("div", { staticClass: "box-body" }, [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-xs-6" }, [
                    _c(
                      "table",
                      { staticClass: "table table-bordered table-striped" },
                      [
                        _c("tbody", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.id))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Duration")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.duration))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Repayment frequency")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(_vm.item.repayment_frequency))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Interest rate")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.interest_rate))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Arrangement fee")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.arrangement_fee))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Status")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.status))])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Created by")]),
                            _vm._v(" "),
                            _c("td", [
                              _vm.item.created_by !== null
                                ? _c(
                                    "span",
                                    { staticClass: "label label-info" },
                                    [
                                      _vm._v(
                                        "\n                                                " +
                                          _vm._s(_vm.item.created_by.name) +
                                          "\n                                            "
                                      )
                                    ]
                                  )
                                : _vm._e()
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("th", [_vm._v("Loan code")]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(_vm.item.loan_code))])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("section", { staticClass: "content-header" }, [
      _c("h1", [_vm._v("Loans")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-header with-border" }, [
      _c("h3", { staticClass: "box-title" }, [_vm._v("View")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e5913994", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e6de46a4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/EventHub.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e6de46a4", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00e6a7c3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00e6a7c3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6aeb2adc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00e6a7c3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00e6a7c3\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0422ebea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0422ebea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("108d20f2", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0422ebea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0422ebea\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04997954\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04997954\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("34065d7e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04997954\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueButtonSpinner.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04997954\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueButtonSpinner.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c0911\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c0911\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("b312e562", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c0911\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableSingle.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c0911\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableSingle.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d427ed0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d427ed0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("f9623674", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d427ed0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d427ed0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a01839\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/Alert.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a01839\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/Alert.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("66b37a3d", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a01839\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a01839\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alert.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e143d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e143d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("22b1262e", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e143d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e143d0\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a272ffb\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a272ffb\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("53cca1aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a272ffb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a272ffb\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dfc2188\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dfc2188\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("54b0b680", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dfc2188\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dfc2188\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e1838de\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e1838de\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("6f60083a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e1838de\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e1838de\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2eb33288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2eb33288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("772735ce", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2eb33288\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2eb33288\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32b2c6a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32b2c6a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("a2de189a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32b2c6a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32b2c6a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41b41ab2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41b41ab2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("60da700a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41b41ab2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableList.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41b41ab2\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53b64a44\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/ChangePassword.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53b64a44\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/ChangePassword.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("0fbe3bf8", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53b64a44\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChangePassword.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53b64a44\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ChangePassword.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58c7cd95\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58c7cd95\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("59c23118", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58c7cd95\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58c7cd95\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da60a69\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da60a69\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("ee62f32a", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da60a69\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da60a69\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5faec504\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5faec504\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7f53df41", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5faec504\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableActions.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5faec504\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableActions.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64b133c9\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64b133c9\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("7bc8794c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64b133c9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64b133c9\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6711dbbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6711dbbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("c2e5d470", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6711dbbc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6711dbbc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Edit.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dde2a90\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dde2a90\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("2eddfe4b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dde2a90\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dde2a90\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-732cff23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-732cff23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("327ea44f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-732cff23\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-732cff23\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74f7222f\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74f7222f\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("617d7804", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74f7222f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74f7222f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-759b722e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-759b722e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("663ef34f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-759b722e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-759b722e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ecf8d75\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ecf8d75\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("5dd5e8ae", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ecf8d75\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ecf8d75\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-808a5428\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/BackButton.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-808a5428\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/BackButton.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("df19ab86", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-808a5428\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BackButton.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-808a5428\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./BackButton.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2e175e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2e175e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("06c18f8c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2e175e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2e175e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b02247d8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b02247d8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("554f68e3", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b02247d8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b02247d8\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Create.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b228ba68\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b228ba68\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("4bb3e8ad", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b228ba68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableCheckbox.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b228ba68\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DatatableCheckbox.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5913994\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5913994\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("56f4f640", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5913994\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5913994\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6de46a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/EventHub.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6de46a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/EventHub.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("709087fc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6de46a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EventHub.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6de46a4\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EventHub.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./resources/client/assets/js/app.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(moment) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__routes__ = __webpack_require__("./resources/client/assets/js/routes/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__store__ = __webpack_require__("./resources/client/assets/js/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue2_datatable_component__ = __webpack_require__("./node_modules/vue2-datatable-component/src/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_notifications__ = __webpack_require__("./node_modules/vue-awesome-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_awesome_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_select__ = __webpack_require__("./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_bootstrap_datetimepicker__ = __webpack_require__("./node_modules/vue-bootstrap-datetimepicker/dist/vue-bootstrap-datetimepicker.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vue_bootstrap_datetimepicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_vue_bootstrap_datetimepicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_sweetalert2__ = __webpack_require__("./node_modules/vue-sweetalert2/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css__ = __webpack_require__("./node_modules/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.css");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_eonasdan_bootstrap_datetimepicker_build_css_bootstrap_datetimepicker_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_ability__ = __webpack_require__("./resources/client/assets/js/config/ability.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__casl_vue__ = __webpack_require__("./node_modules/@casl/vue/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_vue_ckeditor2__ = __webpack_require__("./node_modules/vue-ckeditor2/dist/vue-ckeditor2.esm.js");

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window._ = __webpack_require__("./node_modules/lodash/lodash.js");
window.axios = __webpack_require__("./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response.status === 401) {
        window.location.assign('/login');
    }

    return Promise.reject(error);
});

window.purify = function (o) {
    return JSON.parse(JSON.stringify(o));
};

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

var date_format = document.head.querySelector('meta[name="dp-date"]');
var time_format = document.head.querySelector('meta[name="dp-time"]');
var datetime_format = document.head.querySelector('meta[name="dp-datetime"]');
var app_locale = document.head.querySelector('meta[name="app-locale"]');

if (date_format && time_format && datetime_format) {
    window.date_format_moment = date_format.content;
    window.time_format_moment = time_format.content;
    window.datetime_format_moment = datetime_format.content;
    window.app_locale = app_locale.content;
} else {
    console.error('Moment.js date and time formats not found');
}

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo'

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'your-pusher-key'
// });

window.Vue = __webpack_require__("./node_modules/vue/dist/vue.common.js");
Vue.prototype.$eventHub = new Vue();













Vue.use(__WEBPACK_IMPORTED_MODULE_2_vue2_datatable_component__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_3_vue_awesome_notifications___default.a, { position: 'top-right' });
Vue.use(__WEBPACK_IMPORTED_MODULE_5_vue_bootstrap_datetimepicker___default.a);
Vue.use(__WEBPACK_IMPORTED_MODULE_6_vue_sweetalert2__["default"]);
Vue.use(__WEBPACK_IMPORTED_MODULE_9__casl_vue__["abilitiesPlugin"], __WEBPACK_IMPORTED_MODULE_8__config_ability__["a" /* default */]);
Vue.use(__WEBPACK_IMPORTED_MODULE_10_vue_ckeditor2__["default"]);

Vue.component('back-buttton', __webpack_require__("./resources/client/assets/js/components/BackButton.vue"));
Vue.component('bootstrap-alert', __webpack_require__("./resources/client/assets/js/components/Alert.vue"));
Vue.component('event-hub', __webpack_require__("./resources/client/assets/js/components/EventHub.vue"));
Vue.component('vue-button-spinner', __webpack_require__("./resources/client/assets/js/components/VueButtonSpinner.vue"));
Vue.component('v-select', __WEBPACK_IMPORTED_MODULE_4_vue_select___default.a);
Vue.component('vue-ckeditor', __WEBPACK_IMPORTED_MODULE_10_vue_ckeditor2__["default"]);

moment.updateLocale(window.app_locale, {
    week: {
        dow: 1
    }
});

// TODO: the next line is added for debugging purposes and should be removed for production build
window.ability = __WEBPACK_IMPORTED_MODULE_8__config_ability__["a" /* default */];

var app = new Vue({
    data: {
        relationships: {},
        dpconfigDate: {
            format: window.date_format_moment
        },
        dpconfigTime: {
            format: window.time_format_moment
        },
        dpconfigDatetime: {
            format: window.datetime_format_moment,
            sideBySide: true
        }
    },
    mounted: function mounted() {
        this.updateRules();
    },

    watch: {
        '$route': function $route() {
            this.updateRules();
        }
    },
    methods: {
        updateRules: function updateRules() {
            var _this = this;

            __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */].dispatch('Rules/fetchData').then(function () {
                _this.$eventHub.$emit('rules-update');
            });
        }
    },
    router: __WEBPACK_IMPORTED_MODULE_0__routes__["a" /* default */],
    store: __WEBPACK_IMPORTED_MODULE_1__store__["a" /* default */]
}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/moment/moment.js")))

/***/ }),

/***/ "./resources/client/assets/js/components/Alert.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15a01839\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/Alert.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/Alert.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15a01839\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/Alert.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15a01839"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/Alert.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15a01839", Component.options)
  } else {
    hotAPI.reload("data-v-15a01839", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/BackButton.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-808a5428\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/BackButton.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/BackButton.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-808a5428\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/BackButton.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-808a5428"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/BackButton.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-808a5428", Component.options)
  } else {
    hotAPI.reload("data-v-808a5428", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/ChangePassword.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-53b64a44\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/ChangePassword.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/ChangePassword.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-53b64a44\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/ChangePassword.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-53b64a44"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/ChangePassword.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53b64a44", Component.options)
  } else {
    hotAPI.reload("data-v-53b64a44", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/EventHub.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e6de46a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/EventHub.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/EventHub.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e6de46a4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/EventHub.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e6de46a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/EventHub.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e6de46a4", Component.options)
  } else {
    hotAPI.reload("data-v-e6de46a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/VueButtonSpinner.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-04997954\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-04997954\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/VueButtonSpinner.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-04997954"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/VueButtonSpinner.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04997954", Component.options)
  } else {
    hotAPI.reload("data-v-04997954", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Loans/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ecf8d75\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-7ecf8d75\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Create.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7ecf8d75"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Loans/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ecf8d75", Component.options)
  } else {
    hotAPI.reload("data-v-7ecf8d75", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Loans/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-00e6a7c3\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-00e6a7c3\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-00e6a7c3"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Loans/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-00e6a7c3", Component.options)
  } else {
    hotAPI.reload("data-v-00e6a7c3", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Loans/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5da60a69\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5da60a69\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5da60a69"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Loans/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5da60a69", Component.options)
  } else {
    hotAPI.reload("data-v-5da60a69", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Loans/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e5913994\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-e5913994\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Loans/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e5913994"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Loans/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e5913994", Component.options)
  } else {
    hotAPI.reload("data-v-e5913994", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Permissions/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b02247d8\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b02247d8\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Create.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b02247d8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Permissions/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b02247d8", Component.options)
  } else {
    hotAPI.reload("data-v-b02247d8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Permissions/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6711dbbc\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6711dbbc\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6711dbbc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Permissions/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6711dbbc", Component.options)
  } else {
    hotAPI.reload("data-v-6711dbbc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Permissions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0422ebea\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0422ebea\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0422ebea"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Permissions/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0422ebea", Component.options)
  } else {
    hotAPI.reload("data-v-0422ebea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Permissions/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-58c7cd95\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-58c7cd95\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Permissions/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-58c7cd95"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Permissions/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58c7cd95", Component.options)
  } else {
    hotAPI.reload("data-v-58c7cd95", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Repayments/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-759b722e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-759b722e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Create.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-759b722e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Repayments/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-759b722e", Component.options)
  } else {
    hotAPI.reload("data-v-759b722e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Repayments/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2eb33288\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2eb33288\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-2eb33288"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Repayments/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2eb33288", Component.options)
  } else {
    hotAPI.reload("data-v-2eb33288", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Repayments/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6dde2a90\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6dde2a90\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6dde2a90"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Repayments/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dde2a90", Component.options)
  } else {
    hotAPI.reload("data-v-6dde2a90", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Repayments/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74f7222f\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-74f7222f\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Repayments/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74f7222f"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Repayments/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74f7222f", Component.options)
  } else {
    hotAPI.reload("data-v-74f7222f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Roles/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1a272ffb\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1a272ffb\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Create.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1a272ffb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Roles/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a272ffb", Component.options)
  } else {
    hotAPI.reload("data-v-1a272ffb", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Roles/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-64b133c9\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-64b133c9\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-64b133c9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Roles/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-64b133c9", Component.options)
  } else {
    hotAPI.reload("data-v-64b133c9", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Roles/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-732cff23\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-732cff23\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-732cff23"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Roles/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-732cff23", Component.options)
  } else {
    hotAPI.reload("data-v-732cff23", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Roles/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1dfc2188\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1dfc2188\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Roles/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1dfc2188"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Roles/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1dfc2188", Component.options)
  } else {
    hotAPI.reload("data-v-1dfc2188", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/UserActions/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d427ed0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d427ed0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/UserActions/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d427ed0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/UserActions/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d427ed0", Component.options)
  } else {
    hotAPI.reload("data-v-0d427ed0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Users/Create.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-15e143d0\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-15e143d0\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Create.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-15e143d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Users/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-15e143d0", Component.options)
  } else {
    hotAPI.reload("data-v-15e143d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Users/Edit.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e1838de\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e1838de\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Edit.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e1838de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Users/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e1838de", Component.options)
  } else {
    hotAPI.reload("data-v-1e1838de", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Users/Index.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-32b2c6a4\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-32b2c6a4\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Index.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-32b2c6a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Users/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-32b2c6a4", Component.options)
  } else {
    hotAPI.reload("data-v-32b2c6a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/cruds/Users/Show.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-ab2e175e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ab2e175e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/cruds/Users/Show.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ab2e175e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/cruds/Users/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ab2e175e", Component.options)
  } else {
    hotAPI.reload("data-v-ab2e175e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/dtmodules/DatatableActions.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5faec504\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-5faec504\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableActions.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5faec504"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/dtmodules/DatatableActions.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5faec504", Component.options)
  } else {
    hotAPI.reload("data-v-5faec504", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b228ba68\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-b228ba68\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b228ba68"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/dtmodules/DatatableCheckbox.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b228ba68", Component.options)
  } else {
    hotAPI.reload("data-v-b228ba68", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/dtmodules/DatatableList.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-41b41ab2\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-41b41ab2\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableList.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-41b41ab2"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/dtmodules/DatatableList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-41b41ab2", Component.options)
  } else {
    hotAPI.reload("data-v-41b41ab2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/components/dtmodules/DatatableSingle.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0d1c0911\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}]]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0d1c0911\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/client/assets/js/components/dtmodules/DatatableSingle.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0d1c0911"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/client/assets/js/components/dtmodules/DatatableSingle.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0d1c0911", Component.options)
  } else {
    hotAPI.reload("data-v-0d1c0911", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/client/assets/js/config/ability.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__casl_ability__ = __webpack_require__("./node_modules/@casl/ability/dist/es5m/index.js");


/**
 * Defines how to detect object's type: https://stalniy.github.io/casl/abilities/2017/07/20/define-abilities.html
 */

function subjectName(item) {
    if (typeof item === 'string') {
        return item;
    }

    return 'all';
}

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__casl_ability__["AbilityBuilder"].define({ subjectName: subjectName }, function (can) {
    // code...
}));

/***/ }),

/***/ "./resources/client/assets/js/routes/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ChangePassword_vue__ = __webpack_require__("./resources/client/assets/js/components/ChangePassword.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_ChangePassword_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_ChangePassword_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cruds_Permissions_Index_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Permissions/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_cruds_Permissions_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_cruds_Permissions_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cruds_Permissions_Create_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Permissions/Create.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_cruds_Permissions_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_cruds_Permissions_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cruds_Permissions_Show_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Permissions/Show.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_cruds_Permissions_Show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_cruds_Permissions_Show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cruds_Permissions_Edit_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Permissions/Edit.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_cruds_Permissions_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_cruds_Permissions_Edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cruds_Roles_Index_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Roles/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_cruds_Roles_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_cruds_Roles_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cruds_Roles_Create_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Roles/Create.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_cruds_Roles_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_cruds_Roles_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cruds_Roles_Show_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Roles/Show.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_cruds_Roles_Show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_cruds_Roles_Show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cruds_Roles_Edit_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Roles/Edit.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_cruds_Roles_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_cruds_Roles_Edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cruds_Users_Index_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Users/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_cruds_Users_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__components_cruds_Users_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cruds_Users_Create_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Users/Create.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_cruds_Users_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__components_cruds_Users_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cruds_Users_Show_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Users/Show.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_cruds_Users_Show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__components_cruds_Users_Show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cruds_Users_Edit_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Users/Edit.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_cruds_Users_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__components_cruds_Users_Edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cruds_UserActions_Index_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/UserActions/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_cruds_UserActions_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__components_cruds_UserActions_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cruds_Loans_Index_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Loans/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_cruds_Loans_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__components_cruds_Loans_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cruds_Loans_Create_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Loans/Create.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_cruds_Loans_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__components_cruds_Loans_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cruds_Loans_Show_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Loans/Show.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_cruds_Loans_Show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18__components_cruds_Loans_Show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cruds_Loans_Edit_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Loans/Edit.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_cruds_Loans_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19__components_cruds_Loans_Edit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_cruds_Repayments_Index_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Repayments/Index.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_cruds_Repayments_Index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20__components_cruds_Repayments_Index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cruds_Repayments_Create_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Repayments/Create.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_cruds_Repayments_Create_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__components_cruds_Repayments_Create_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_cruds_Repayments_Show_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Repayments/Show.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_cruds_Repayments_Show_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__components_cruds_Repayments_Show_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_cruds_Repayments_Edit_vue__ = __webpack_require__("./resources/client/assets/js/components/cruds/Repayments/Edit.vue");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_cruds_Repayments_Edit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23__components_cruds_Repayments_Edit_vue__);


























__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]);

var routes = [{ path: '/change-password', component: __WEBPACK_IMPORTED_MODULE_2__components_ChangePassword_vue___default.a, name: 'auth.change_password' }, { path: '/permissions', component: __WEBPACK_IMPORTED_MODULE_3__components_cruds_Permissions_Index_vue___default.a, name: 'permissions.index' }, { path: '/permissions/create', component: __WEBPACK_IMPORTED_MODULE_4__components_cruds_Permissions_Create_vue___default.a, name: 'permissions.create' }, { path: '/permissions/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_cruds_Permissions_Show_vue___default.a, name: 'permissions.show' }, { path: '/permissions/:id/edit', component: __WEBPACK_IMPORTED_MODULE_6__components_cruds_Permissions_Edit_vue___default.a, name: 'permissions.edit' }, { path: '/roles', component: __WEBPACK_IMPORTED_MODULE_7__components_cruds_Roles_Index_vue___default.a, name: 'roles.index' }, { path: '/roles/create', component: __WEBPACK_IMPORTED_MODULE_8__components_cruds_Roles_Create_vue___default.a, name: 'roles.create' }, { path: '/roles/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_cruds_Roles_Show_vue___default.a, name: 'roles.show' }, { path: '/roles/:id/edit', component: __WEBPACK_IMPORTED_MODULE_10__components_cruds_Roles_Edit_vue___default.a, name: 'roles.edit' }, { path: '/users', component: __WEBPACK_IMPORTED_MODULE_11__components_cruds_Users_Index_vue___default.a, name: 'users.index' }, { path: '/users/create', component: __WEBPACK_IMPORTED_MODULE_12__components_cruds_Users_Create_vue___default.a, name: 'users.create' }, { path: '/users/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_cruds_Users_Show_vue___default.a, name: 'users.show' }, { path: '/users/:id/edit', component: __WEBPACK_IMPORTED_MODULE_14__components_cruds_Users_Edit_vue___default.a, name: 'users.edit' }, { path: '/user-actions', component: __WEBPACK_IMPORTED_MODULE_15__components_cruds_UserActions_Index_vue___default.a, name: 'user_actions.index' }, { path: '/loans', component: __WEBPACK_IMPORTED_MODULE_16__components_cruds_Loans_Index_vue___default.a, name: 'loans.index' }, { path: '/loans/create', component: __WEBPACK_IMPORTED_MODULE_17__components_cruds_Loans_Create_vue___default.a, name: 'loans.create' }, { path: '/loans/:id', component: __WEBPACK_IMPORTED_MODULE_18__components_cruds_Loans_Show_vue___default.a, name: 'loans.show' }, { path: '/loans/:id/edit', component: __WEBPACK_IMPORTED_MODULE_19__components_cruds_Loans_Edit_vue___default.a, name: 'loans.edit' }, { path: '/repayments', component: __WEBPACK_IMPORTED_MODULE_20__components_cruds_Repayments_Index_vue___default.a, name: 'repayments.index' }, { path: '/repayments/create', component: __WEBPACK_IMPORTED_MODULE_21__components_cruds_Repayments_Create_vue___default.a, name: 'repayments.create' }, { path: '/repayments/:id', component: __WEBPACK_IMPORTED_MODULE_22__components_cruds_Repayments_Show_vue___default.a, name: 'repayments.show' }, { path: '/repayments/:id/edit', component: __WEBPACK_IMPORTED_MODULE_23__components_cruds_Repayments_Edit_vue___default.a, name: 'repayments.edit' }];

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["default"]({
    mode: 'history',
    base: '/admin',
    routes: routes
}));

/***/ }),

/***/ "./resources/client/assets/js/store/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("./node_modules/vue/dist/vue.common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__("./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_alert__ = __webpack_require__("./resources/client/assets/js/store/modules/alert.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_change_password__ = __webpack_require__("./resources/client/assets/js/store/modules/change_password.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_rules__ = __webpack_require__("./resources/client/assets/js/store/modules/rules.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_Permissions__ = __webpack_require__("./resources/client/assets/js/store/modules/Permissions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_Permissions_single__ = __webpack_require__("./resources/client/assets/js/store/modules/Permissions/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_Roles__ = __webpack_require__("./resources/client/assets/js/store/modules/Roles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_Roles_single__ = __webpack_require__("./resources/client/assets/js/store/modules/Roles/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_Users__ = __webpack_require__("./resources/client/assets/js/store/modules/Users/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_Users_single__ = __webpack_require__("./resources/client/assets/js/store/modules/Users/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_UserActions__ = __webpack_require__("./resources/client/assets/js/store/modules/UserActions/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_Loans__ = __webpack_require__("./resources/client/assets/js/store/modules/Loans/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modules_Loans_single__ = __webpack_require__("./resources/client/assets/js/store/modules/Loans/single.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modules_Repayments__ = __webpack_require__("./resources/client/assets/js/store/modules/Repayments/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_Repayments_single__ = __webpack_require__("./resources/client/assets/js/store/modules/Repayments/single.js");

















__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex__["default"]);

var debug = "development" !== 'production';

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["default"].Store({
    modules: {
        Alert: __WEBPACK_IMPORTED_MODULE_2__modules_alert__["a" /* default */],
        ChangePassword: __WEBPACK_IMPORTED_MODULE_3__modules_change_password__["a" /* default */],
        Rules: __WEBPACK_IMPORTED_MODULE_4__modules_rules__["a" /* default */],
        PermissionsIndex: __WEBPACK_IMPORTED_MODULE_5__modules_Permissions__["a" /* default */],
        PermissionsSingle: __WEBPACK_IMPORTED_MODULE_6__modules_Permissions_single__["a" /* default */],
        RolesIndex: __WEBPACK_IMPORTED_MODULE_7__modules_Roles__["a" /* default */],
        RolesSingle: __WEBPACK_IMPORTED_MODULE_8__modules_Roles_single__["a" /* default */],
        UsersIndex: __WEBPACK_IMPORTED_MODULE_9__modules_Users__["a" /* default */],
        UsersSingle: __WEBPACK_IMPORTED_MODULE_10__modules_Users_single__["a" /* default */],
        UserActionsIndex: __WEBPACK_IMPORTED_MODULE_11__modules_UserActions__["a" /* default */],
        LoansIndex: __WEBPACK_IMPORTED_MODULE_12__modules_Loans__["a" /* default */],
        LoansSingle: __WEBPACK_IMPORTED_MODULE_13__modules_Loans_single__["a" /* default */],
        RepaymentsIndex: __WEBPACK_IMPORTED_MODULE_14__modules_Repayments__["a" /* default */],
        RepaymentsSingle: __WEBPACK_IMPORTED_MODULE_15__modules_Repayments_single__["a" /* default */]
    },
    strict: debug
}));

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Loans/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        all: [],
        relationships: {
            'created_by': 'name'
        },
        query: {},
        loading: false
    };
}

var getters = {
    data: function data(state) {
        var rows = state.all;

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order);
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit);
    },
    total: function total(state) {
        return state.all.length;
    },
    loading: function loading(state) {
        return state.loading;
    },
    relationships: function relationships(state) {
        return state.relationships;
    }
};

var actions = {
    fetchData: function fetchData(_ref) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('setLoading', true);

        axios.get('/api/v1/loans').then(function (response) {
            commit('setAll', response.data.data);
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        }).finally(function () {
            commit('setLoading', false);
        });
    },
    destroyData: function destroyData(_ref2, id) {
        var commit = _ref2.commit,
            state = _ref2.state;

        axios.delete('/api/v1/loans/' + id).then(function (response) {
            commit('setAll', state.all.filter(function (item) {
                return item.id != id;
            }));
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        });
    },
    setQuery: function setQuery(_ref3, value) {
        var commit = _ref3.commit;

        commit('setQuery', purify(value));
    },
    resetState: function resetState(_ref4) {
        var commit = _ref4.commit;

        commit('resetState');
    }
};

var mutations = {
    setAll: function setAll(state, items) {
        state.all = items;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    setQuery: function setQuery(state, query) {
        state.query = query;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Loans/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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
            loan_code: null
        },
        usersAll: [],
        statusEnum: [{ value: 'unpaid', label: 'Unpaid' }, { value: 'partial_paid', label: 'Partial_paid' }, { value: 'repaid', label: 'Repaid' }],
        loading: false
    };
}

var getters = {
    item: function item(state) {
        return state.item;
    },
    loading: function loading(state) {
        return state.loading;
    },
    usersAll: function usersAll(state) {
        return state.usersAll;
    },
    statusEnum: function statusEnum(state) {
        return state.statusEnum;
    }
};

var actions = {
    storeData: function storeData(_ref) {
        var commit = _ref.commit,
            state = _ref.state,
            dispatch = _ref.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (!_.isEmpty(state.item.status) && _typeof(state.item.status) === 'object') {
                params.set('status', state.item.status.value);
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '');
            } else {
                params.set('created_by_id', state.item.created_by.id);
            }

            axios.post('/api/v1/loans', params).then(function (response) {
                commit('resetState');
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    updateData: function updateData(_ref2) {
        var commit = _ref2.commit,
            state = _ref2.state,
            dispatch = _ref2.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();
            params.set('_method', 'PUT');

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (!_.isEmpty(state.item.status) && _typeof(state.item.status) === 'object') {
                params.set('status', state.item.status.value);
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '');
            } else {
                params.set('created_by_id', state.item.created_by.id);
            }

            axios.post('/api/v1/loans/' + state.item.id, params).then(function (response) {
                commit('setItem', response.data.data);
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    fetchData: function fetchData(_ref3, id) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch;

        axios.get('/api/v1/loans/' + id).then(function (response) {
            commit('setItem', response.data.data);
        });

        dispatch('fetchUsersAll');
    },
    fetchUsersAll: function fetchUsersAll(_ref4) {
        var commit = _ref4.commit;

        axios.get('/api/v1/users').then(function (response) {
            commit('setUsersAll', response.data.data);
        });
    },
    setDuration: function setDuration(_ref5, value) {
        var commit = _ref5.commit;

        commit('setDuration', value);
    },
    setRepayment_frequency: function setRepayment_frequency(_ref6, value) {
        var commit = _ref6.commit;

        commit('setRepayment_frequency', value);
    },
    setInterest_rate: function setInterest_rate(_ref7, value) {
        var commit = _ref7.commit;

        commit('setInterest_rate', value);
    },
    setArrangement_fee: function setArrangement_fee(_ref8, value) {
        var commit = _ref8.commit;

        commit('setArrangement_fee', value);
    },
    setStatus: function setStatus(_ref9, value) {
        var commit = _ref9.commit;

        commit('setStatus', value);
    },
    setCreated_by: function setCreated_by(_ref10, value) {
        var commit = _ref10.commit;

        commit('setCreated_by', value);
    },
    setLoan_code: function setLoan_code(_ref11, value) {
        var commit = _ref11.commit;

        commit('setLoan_code', value);
    },
    resetState: function resetState(_ref12) {
        var commit = _ref12.commit;

        commit('resetState');
    }
};

var mutations = {
    setItem: function setItem(state, item) {
        state.item = item;
    },
    setDuration: function setDuration(state, value) {
        state.item.duration = value;
    },
    setRepayment_frequency: function setRepayment_frequency(state, value) {
        state.item.repayment_frequency = value;
    },
    setInterest_rate: function setInterest_rate(state, value) {
        state.item.interest_rate = value;
    },
    setArrangement_fee: function setArrangement_fee(state, value) {
        state.item.arrangement_fee = value;
    },
    setStatus: function setStatus(state, value) {
        state.item.status = value;
    },
    setCreated_by: function setCreated_by(state, value) {
        state.item.created_by = value;
    },
    setLoan_code: function setLoan_code(state, value) {
        state.item.loan_code = value;
    },
    setUsersAll: function setUsersAll(state, value) {
        state.usersAll = value;
    },
    setStatusEnum: function setStatusEnum(state, value) {
        state.statusEnum = value;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Permissions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        all: [],
        relationships: {},
        query: {},
        loading: false
    };
}

var getters = {
    data: function data(state) {
        var rows = state.all;

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order);
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit);
    },
    total: function total(state) {
        return state.all.length;
    },
    loading: function loading(state) {
        return state.loading;
    },
    relationships: function relationships(state) {
        return state.relationships;
    }
};

var actions = {
    fetchData: function fetchData(_ref) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('setLoading', true);

        axios.get('/api/v1/permissions').then(function (response) {
            commit('setAll', response.data.data);
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        }).finally(function () {
            commit('setLoading', false);
        });
    },
    destroyData: function destroyData(_ref2, id) {
        var commit = _ref2.commit,
            state = _ref2.state;

        axios.delete('/api/v1/permissions/' + id).then(function (response) {
            commit('setAll', state.all.filter(function (item) {
                return item.id != id;
            }));
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        });
    },
    setQuery: function setQuery(_ref3, value) {
        var commit = _ref3.commit;

        commit('setQuery', purify(value));
    },
    resetState: function resetState(_ref4) {
        var commit = _ref4.commit;

        commit('resetState');
    }
};

var mutations = {
    setAll: function setAll(state, items) {
        state.all = items;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    setQuery: function setQuery(state, query) {
        state.query = query;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Permissions/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function initialState() {
    return {
        item: {
            id: null,
            title: null
        },

        loading: false
    };
}

var getters = {
    item: function item(state) {
        return state.item;
    },
    loading: function loading(state) {
        return state.loading;
    }

};

var actions = {
    storeData: function storeData(_ref) {
        var commit = _ref.commit,
            state = _ref.state,
            dispatch = _ref.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            axios.post('/api/v1/permissions', params).then(function (response) {
                commit('resetState');
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    updateData: function updateData(_ref2) {
        var commit = _ref2.commit,
            state = _ref2.state,
            dispatch = _ref2.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();
            params.set('_method', 'PUT');

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            axios.post('/api/v1/permissions/' + state.item.id, params).then(function (response) {
                commit('setItem', response.data.data);
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    fetchData: function fetchData(_ref3, id) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch;

        axios.get('/api/v1/permissions/' + id).then(function (response) {
            commit('setItem', response.data.data);
        });
    },
    setTitle: function setTitle(_ref4, value) {
        var commit = _ref4.commit;

        commit('setTitle', value);
    },
    resetState: function resetState(_ref5) {
        var commit = _ref5.commit;

        commit('resetState');
    }
};

var mutations = {
    setItem: function setItem(state, item) {
        state.item = item;
    },
    setTitle: function setTitle(state, value) {
        state.item.title = value;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Repayments/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        all: [],
        relationships: {
            'loan': 'loan_code',
            'created_by': 'name'
        },
        query: {},
        loading: false
    };
}

var getters = {
    data: function data(state) {
        var rows = state.all;

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order);
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit);
    },
    total: function total(state) {
        return state.all.length;
    },
    loading: function loading(state) {
        return state.loading;
    },
    relationships: function relationships(state) {
        return state.relationships;
    }
};

var actions = {
    fetchData: function fetchData(_ref) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('setLoading', true);

        axios.get('/api/v1/repayments').then(function (response) {
            commit('setAll', response.data.data);
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        }).finally(function () {
            commit('setLoading', false);
        });
    },
    destroyData: function destroyData(_ref2, id) {
        var commit = _ref2.commit,
            state = _ref2.state;

        axios.delete('/api/v1/repayments/' + id).then(function (response) {
            commit('setAll', state.all.filter(function (item) {
                return item.id != id;
            }));
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        });
    },
    setQuery: function setQuery(_ref3, value) {
        var commit = _ref3.commit;

        commit('setQuery', purify(value));
    },
    resetState: function resetState(_ref4) {
        var commit = _ref4.commit;

        commit('resetState');
    }
};

var mutations = {
    setAll: function setAll(state, items) {
        state.all = items;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    setQuery: function setQuery(state, query) {
        state.query = query;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Repayments/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function initialState() {
    return {
        item: {
            id: null,
            loan: null,
            amount: null,
            status: null,
            note: null,
            created_by: null
        },
        loansAll: [],
        usersAll: [],
        statusEnum: [{ value: 'pending', label: 'Pending' }, { value: 'failed', label: 'Failed' }, { value: 'paid', label: 'Paid' }],
        loading: false
    };
}

var getters = {
    item: function item(state) {
        return state.item;
    },
    loading: function loading(state) {
        return state.loading;
    },
    loansAll: function loansAll(state) {
        return state.loansAll;
    },
    usersAll: function usersAll(state) {
        return state.usersAll;
    },
    statusEnum: function statusEnum(state) {
        return state.statusEnum;
    }
};

var actions = {
    storeData: function storeData(_ref) {
        var commit = _ref.commit,
            state = _ref.state,
            dispatch = _ref.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.loan)) {
                params.set('loan_id', '');
            } else {
                params.set('loan_id', state.item.loan.id);
            }
            if (!_.isEmpty(state.item.status) && _typeof(state.item.status) === 'object') {
                params.set('status', state.item.status.value);
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '');
            } else {
                params.set('created_by_id', state.item.created_by.id);
            }

            axios.post('/api/v1/repayments', params).then(function (response) {
                commit('resetState');
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    updateData: function updateData(_ref2) {
        var commit = _ref2.commit,
            state = _ref2.state,
            dispatch = _ref2.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();
            params.set('_method', 'PUT');

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.loan)) {
                params.set('loan_id', '');
            } else {
                params.set('loan_id', state.item.loan.id);
            }
            if (!_.isEmpty(state.item.status) && _typeof(state.item.status) === 'object') {
                params.set('status', state.item.status.value);
            }
            if (_.isEmpty(state.item.created_by)) {
                params.set('created_by_id', '');
            } else {
                params.set('created_by_id', state.item.created_by.id);
            }

            axios.post('/api/v1/repayments/' + state.item.id, params).then(function (response) {
                commit('setItem', response.data.data);
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    fetchData: function fetchData(_ref3, id) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch;

        axios.get('/api/v1/repayments/' + id).then(function (response) {
            commit('setItem', response.data.data);
        });

        dispatch('fetchLoansAll');
        dispatch('fetchUsersAll');
    },
    fetchLoansAll: function fetchLoansAll(_ref4) {
        var commit = _ref4.commit;

        axios.get('/api/v1/loans').then(function (response) {
            commit('setLoansAll', response.data.data);
        });
    },
    fetchUsersAll: function fetchUsersAll(_ref5) {
        var commit = _ref5.commit;

        axios.get('/api/v1/users').then(function (response) {
            commit('setUsersAll', response.data.data);
        });
    },
    setLoan: function setLoan(_ref6, value) {
        var commit = _ref6.commit;

        commit('setLoan', value);
    },
    setAmount: function setAmount(_ref7, value) {
        var commit = _ref7.commit;

        commit('setAmount', value);
    },
    setStatus: function setStatus(_ref8, value) {
        var commit = _ref8.commit;

        commit('setStatus', value);
    },
    setNote: function setNote(_ref9, value) {
        var commit = _ref9.commit;

        commit('setNote', value);
    },
    setCreated_by: function setCreated_by(_ref10, value) {
        var commit = _ref10.commit;

        commit('setCreated_by', value);
    },
    resetState: function resetState(_ref11) {
        var commit = _ref11.commit;

        commit('resetState');
    }
};

var mutations = {
    setItem: function setItem(state, item) {
        state.item = item;
    },
    setLoan: function setLoan(state, value) {
        state.item.loan = value;
    },
    setAmount: function setAmount(state, value) {
        state.item.amount = value;
    },
    setStatus: function setStatus(state, value) {
        state.item.status = value;
    },
    setNote: function setNote(state, value) {
        state.item.note = value;
    },
    setCreated_by: function setCreated_by(state, value) {
        state.item.created_by = value;
    },
    setLoansAll: function setLoansAll(state, value) {
        state.loansAll = value;
    },
    setUsersAll: function setUsersAll(state, value) {
        state.usersAll = value;
    },
    setStatusEnum: function setStatusEnum(state, value) {
        state.statusEnum = value;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Roles/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        all: [],
        relationships: {
            'permission': 'title'
        },
        query: {},
        loading: false
    };
}

var getters = {
    data: function data(state) {
        var rows = state.all;

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order);
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit);
    },
    total: function total(state) {
        return state.all.length;
    },
    loading: function loading(state) {
        return state.loading;
    },
    relationships: function relationships(state) {
        return state.relationships;
    }
};

var actions = {
    fetchData: function fetchData(_ref) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('setLoading', true);

        axios.get('/api/v1/roles').then(function (response) {
            commit('setAll', response.data.data);
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        }).finally(function () {
            commit('setLoading', false);
        });
    },
    destroyData: function destroyData(_ref2, id) {
        var commit = _ref2.commit,
            state = _ref2.state;

        axios.delete('/api/v1/roles/' + id).then(function (response) {
            commit('setAll', state.all.filter(function (item) {
                return item.id != id;
            }));
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        });
    },
    setQuery: function setQuery(_ref3, value) {
        var commit = _ref3.commit;

        commit('setQuery', purify(value));
    },
    resetState: function resetState(_ref4) {
        var commit = _ref4.commit;

        commit('resetState');
    }
};

var mutations = {
    setAll: function setAll(state, items) {
        state.all = items;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    setQuery: function setQuery(state, query) {
        state.query = query;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Roles/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function initialState() {
    return {
        item: {
            id: null,
            title: null,
            permission: []
        },
        permissionsAll: [],

        loading: false
    };
}

var getters = {
    item: function item(state) {
        return state.item;
    },
    loading: function loading(state) {
        return state.loading;
    },
    permissionsAll: function permissionsAll(state) {
        return state.permissionsAll;
    }

};

var actions = {
    storeData: function storeData(_ref) {
        var commit = _ref.commit,
            state = _ref.state,
            dispatch = _ref.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.permission)) {
                params.delete('permission');
            } else {
                for (var _index in state.item.permission) {
                    params.set('permission[' + _index + ']', state.item.permission[_index].id);
                }
            }

            axios.post('/api/v1/roles', params).then(function (response) {
                commit('resetState');
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    updateData: function updateData(_ref2) {
        var commit = _ref2.commit,
            state = _ref2.state,
            dispatch = _ref2.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();
            params.set('_method', 'PUT');

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.permission)) {
                params.delete('permission');
            } else {
                for (var _index2 in state.item.permission) {
                    params.set('permission[' + _index2 + ']', state.item.permission[_index2].id);
                }
            }

            axios.post('/api/v1/roles/' + state.item.id, params).then(function (response) {
                commit('setItem', response.data.data);
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    fetchData: function fetchData(_ref3, id) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch;

        axios.get('/api/v1/roles/' + id).then(function (response) {
            commit('setItem', response.data.data);
        });

        dispatch('fetchPermissionsAll');
    },
    fetchPermissionsAll: function fetchPermissionsAll(_ref4) {
        var commit = _ref4.commit;

        axios.get('/api/v1/permissions').then(function (response) {
            commit('setPermissionsAll', response.data.data);
        });
    },
    setTitle: function setTitle(_ref5, value) {
        var commit = _ref5.commit;

        commit('setTitle', value);
    },
    setPermission: function setPermission(_ref6, value) {
        var commit = _ref6.commit;

        commit('setPermission', value);
    },
    resetState: function resetState(_ref7) {
        var commit = _ref7.commit;

        commit('resetState');
    }
};

var mutations = {
    setItem: function setItem(state, item) {
        state.item = item;
    },
    setTitle: function setTitle(state, value) {
        state.item.title = value;
    },
    setPermission: function setPermission(state, value) {
        state.item.permission = value;
    },
    setPermissionsAll: function setPermissionsAll(state, value) {
        state.permissionsAll = value;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/UserActions/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        all: [],
        relationships: {
            'user': 'name'
        },
        query: {},
        loading: false
    };
}

var getters = {
    data: function data(state) {
        var rows = state.all;

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order);
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit);
    },
    total: function total(state) {
        return state.all.length;
    },
    loading: function loading(state) {
        return state.loading;
    },
    relationships: function relationships(state) {
        return state.relationships;
    }
};

var actions = {
    fetchData: function fetchData(_ref) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('setLoading', true);

        axios.get('/api/v1/user-actions').then(function (response) {
            commit('setAll', response.data.data);
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        }).finally(function () {
            commit('setLoading', false);
        });
    },
    destroyData: function destroyData(_ref2, id) {
        var commit = _ref2.commit,
            state = _ref2.state;

        axios.delete('/api/v1/user-actions/' + id).then(function (response) {
            commit('setAll', state.all.filter(function (item) {
                return item.id != id;
            }));
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        });
    },
    setQuery: function setQuery(_ref3, value) {
        var commit = _ref3.commit;

        commit('setQuery', purify(value));
    },
    resetState: function resetState(_ref4) {
        var commit = _ref4.commit;

        commit('resetState');
    }
};

var mutations = {
    setAll: function setAll(state, items) {
        state.all = items;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    setQuery: function setQuery(state, query) {
        state.query = query;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Users/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        all: [],
        relationships: {
            'role': 'title'
        },
        query: {},
        loading: false
    };
}

var getters = {
    data: function data(state) {
        var rows = state.all;

        if (state.query.sort) {
            rows = _.orderBy(state.all, state.query.sort, state.query.order);
        }

        return rows.slice(state.query.offset, state.query.offset + state.query.limit);
    },
    total: function total(state) {
        return state.all.length;
    },
    loading: function loading(state) {
        return state.loading;
    },
    relationships: function relationships(state) {
        return state.relationships;
    }
};

var actions = {
    fetchData: function fetchData(_ref) {
        var commit = _ref.commit,
            state = _ref.state;

        commit('setLoading', true);

        axios.get('/api/v1/users').then(function (response) {
            commit('setAll', response.data.data);
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        }).finally(function () {
            commit('setLoading', false);
        });
    },
    destroyData: function destroyData(_ref2, id) {
        var commit = _ref2.commit,
            state = _ref2.state;

        axios.delete('/api/v1/users/' + id).then(function (response) {
            commit('setAll', state.all.filter(function (item) {
                return item.id != id;
            }));
        }).catch(function (error) {
            message = error.response.data.message || error.message;
            commit('setError', message);
            console.log(message);
        });
    },
    setQuery: function setQuery(_ref3, value) {
        var commit = _ref3.commit;

        commit('setQuery', purify(value));
    },
    resetState: function resetState(_ref4) {
        var commit = _ref4.commit;

        commit('resetState');
    }
};

var mutations = {
    setAll: function setAll(state, items) {
        state.all = items;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    setQuery: function setQuery(state, query) {
        state.query = query;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/Users/single.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function initialState() {
    return {
        item: {
            id: null,
            name: null,
            email: null,
            password: null,
            role: [],
            approved: false
        },
        rolesAll: [],

        loading: false
    };
}

var getters = {
    item: function item(state) {
        return state.item;
    },
    loading: function loading(state) {
        return state.loading;
    },
    rolesAll: function rolesAll(state) {
        return state.rolesAll;
    }

};

var actions = {
    storeData: function storeData(_ref) {
        var commit = _ref.commit,
            state = _ref.state,
            dispatch = _ref.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.role)) {
                params.delete('role');
            } else {
                for (var _index in state.item.role) {
                    params.set('role[' + _index + ']', state.item.role[_index].id);
                }
            }
            params.set('approved', state.item.approved ? 1 : 0);

            axios.post('/api/v1/users', params).then(function (response) {
                commit('resetState');
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    updateData: function updateData(_ref2) {
        var commit = _ref2.commit,
            state = _ref2.state,
            dispatch = _ref2.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = new FormData();
            params.set('_method', 'PUT');

            for (var fieldName in state.item) {
                var fieldValue = state.item[fieldName];
                if ((typeof fieldValue === 'undefined' ? 'undefined' : _typeof(fieldValue)) !== 'object') {
                    params.set(fieldName, fieldValue);
                } else {
                    if (fieldValue && _typeof(fieldValue[0]) !== 'object') {
                        params.set(fieldName, fieldValue);
                    } else {
                        for (var index in fieldValue) {
                            params.set(fieldName + '[' + index + ']', fieldValue[index]);
                        }
                    }
                }
            }

            if (_.isEmpty(state.item.role)) {
                params.delete('role');
            } else {
                for (var _index2 in state.item.role) {
                    params.set('role[' + _index2 + ']', state.item.role[_index2].id);
                }
            }
            params.set('approved', state.item.approved ? 1 : 0);

            axios.post('/api/v1/users/' + state.item.id, params).then(function (response) {
                commit('setItem', response.data.data);
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    fetchData: function fetchData(_ref3, id) {
        var commit = _ref3.commit,
            dispatch = _ref3.dispatch;

        axios.get('/api/v1/users/' + id).then(function (response) {
            commit('setItem', response.data.data);
        });

        dispatch('fetchRolesAll');
    },
    fetchRolesAll: function fetchRolesAll(_ref4) {
        var commit = _ref4.commit;

        axios.get('/api/v1/roles').then(function (response) {
            commit('setRolesAll', response.data.data);
        });
    },
    setName: function setName(_ref5, value) {
        var commit = _ref5.commit;

        commit('setName', value);
    },
    setEmail: function setEmail(_ref6, value) {
        var commit = _ref6.commit;

        commit('setEmail', value);
    },
    setPassword: function setPassword(_ref7, value) {
        var commit = _ref7.commit;

        commit('setPassword', value);
    },
    setRole: function setRole(_ref8, value) {
        var commit = _ref8.commit;

        commit('setRole', value);
    },
    setApproved: function setApproved(_ref9, value) {
        var commit = _ref9.commit;

        commit('setApproved', value);
    },
    resetState: function resetState(_ref10) {
        var commit = _ref10.commit;

        commit('resetState');
    }
};

var mutations = {
    setItem: function setItem(state, item) {
        state.item = item;
    },
    setName: function setName(state, value) {
        state.item.name = value;
    },
    setEmail: function setEmail(state, value) {
        state.item.email = value;
    },
    setPassword: function setPassword(state, value) {
        state.item.password = value;
    },
    setRole: function setRole(state, value) {
        state.item.role = value;
    },
    setApproved: function setApproved(state, value) {
        state.item.approved = value;
    },
    setRolesAll: function setRolesAll(state, value) {
        state.rolesAll = value;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/alert.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        message: null,
        errors: null,
        color: 'success'
    };
}

var getters = {
    message: function message(state) {
        return state.message;
    },
    errors: function errors(state) {
        return state.errors;
    },
    color: function color(state) {
        return state.color;
    }
};

var actions = {
    setMessage: function setMessage(_ref, message) {
        var commit = _ref.commit;

        commit('setMessage', message);
    },
    setErrors: function setErrors(_ref2, errors) {
        var commit = _ref2.commit;

        commit('setErrors', errors);
    },
    setColor: function setColor(_ref3, color) {
        var commit = _ref3.commit;

        commit('setColor', color);
    },
    setAlert: function setAlert(_ref4, data) {
        var commit = _ref4.commit;

        commit('setMessage', data.message || null);
        commit('setErrors', data.errors || null);
        commit('setColor', data.color || null);
    },
    resetState: function resetState(_ref5) {
        var commit = _ref5.commit;

        commit('resetState');
    }
};

var mutations = {
    setMessage: function setMessage(state, message) {
        state.message = message;
    },
    setErrors: function setErrors(state, errors) {
        state.errors = errors;
    },
    setColor: function setColor(state, color) {
        state.color = color || 'success';
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/change_password.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        current_password: null,
        new_password: null,
        new_password_confirmation: null,
        loading: false
    };
}

var getters = {
    current_password: function current_password(state) {
        return state.current_password;
    },
    new_password: function new_password(state) {
        return state.new_password;
    },
    new_password_confirmation: function new_password_confirmation(state) {
        return state.new_password_confirmation;
    },
    loading: function loading(state) {
        return state.loading;
    }
};

var actions = {
    storeData: function storeData(_ref) {
        var commit = _ref.commit,
            state = _ref.state,
            dispatch = _ref.dispatch;

        commit('setLoading', true);
        dispatch('Alert/resetState', null, { root: true });

        return new Promise(function (resolve, reject) {
            var params = {
                current_password: state.current_password,
                new_password: state.new_password,
                new_password_confirmation: state.new_password_confirmation
            };

            axios.post('/api/v1/change-password', params).then(function (response) {
                commit('resetState');
                resolve();
            }).catch(function (error) {
                var message = error.response.data.message || error.message;
                var errors = error.response.data.errors;

                dispatch('Alert/setAlert', { message: message, errors: errors, color: 'danger' }, { root: true });

                reject(error);
            }).finally(function () {
                commit('setLoading', false);
            });
        });
    },
    setCurrentPassword: function setCurrentPassword(_ref2, value) {
        var commit = _ref2.commit;

        commit('setCurrentPassword', value);
    },
    setNewPassword: function setNewPassword(_ref3, value) {
        var commit = _ref3.commit;

        commit('setNewPassword', value);
    },
    setNewPasswordConfirmation: function setNewPasswordConfirmation(_ref4, value) {
        var commit = _ref4.commit;

        commit('setNewPasswordConfirmation', value);
    },
    resetState: function resetState(_ref5) {
        var commit = _ref5.commit;

        commit('resetState');
    }
};

var mutations = {
    setCurrentPassword: function setCurrentPassword(state, value) {
        state.current_password = value;
    },
    setNewPassword: function setNewPassword(state, value) {
        state.new_password = value;
    },
    setNewPasswordConfirmation: function setNewPasswordConfirmation(state, value) {
        state.new_password_confirmation = value;
    },
    setLoading: function setLoading(state, loading) {
        state.loading = loading;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ "./resources/client/assets/js/store/modules/rules.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function initialState() {
    return {
        rules: null
    };
}

var getters = {
    rules: function rules(state) {
        return state.rules;
    }
};

var actions = {
    fetchData: function fetchData(_ref, rules) {
        var commit = _ref.commit;

        return new Promise(function (resolve, reject) {
            axios.get('/api/v1/rules').then(function (response) {
                commit('setRules', response.data.data);
                resolve();
            }).catch(function (error) {
                message = error.response.data.message || error.message;
                console.log(message);
                reject();
            });
        });
    },
    resetState: function resetState(_ref2) {
        var commit = _ref2.commit;

        commit('resetState');
    }
};

var mutations = {
    setRules: function setRules(state, rules) {
        state.rules = rules;
    },
    resetState: function resetState(state) {
        state = Object.assign(state, initialState());
    }
};

/* harmony default export */ __webpack_exports__["a"] = ({
    namespaced: true,
    state: initialState,
    getters: getters,
    actions: actions,
    mutations: mutations
});

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/client/assets/js/app.js");


/***/ })

},[1]);