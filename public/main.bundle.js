webpackJsonp([0,4],{

/***/ 1026:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(604);


/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Donate; });
var Donate = (function () {
    function Donate() {
        this.id = 0;
        this.name = "";
        this.picture = "";
        this.description = "";
        this.city = "";
        this.country = "";
        this.commitment = "";
        this.donate_count = 0;
        this.exist_count = 0;
        this.del_flg = 0;
        this.isSelected = false;
        this.quantity = 0;
    }
    return Donate;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/donate.type.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__one_page_component__ = __webpack_require__(748);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__one_page_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sell_donate__ = __webpack_require__(767);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__sell_donate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sell_board__ = __webpack_require__(765);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__sell_board__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__score_board__ = __webpack_require__(763);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__score_board__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__report__ = __webpack_require__(761);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_4__report__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile__ = __webpack_require__(751);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_5__profile__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home__ = __webpack_require__(747);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__home__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__donate__ = __webpack_require__(745);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_7__donate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__director_board__ = __webpack_require__(743);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_8__director_board__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__contact_us__ = __webpack_require__(741);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__contact_us__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_admin__ = __webpack_require__(739);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__contact_admin__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__about__ = __webpack_require__(735);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_11__about__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__activate__ = __webpack_require__(737);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_12__activate__["a"]; });













//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__language_index__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LanguageService = (function () {
    function LanguageService(route, router) {
        this.route = route;
        this.router = router;
        this.lang = "en";
        this._language = new __WEBPACK_IMPORTED_MODULE_1__language_index__["a" /* Language */]("en");
    }
    LanguageService.prototype.setLanguage = function (lang) {
        this.lang = lang;
        this._language.setLanguage(lang);
    };
    LanguageService.prototype.tr = function (tran) {
        return this._language.tr(tran);
    };
    LanguageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], LanguageService);
    return LanguageService;
    var _a, _b;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/language.service.js.map

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StateService = (function () {
    function StateService() {
        this._state = {};
        this.state.loadingText = "";
        this.state.isLoading = 0;
        this.state.admin_menu_selected = 1;
        this.state.login_message = "";
        this.state.one_page_menu_selected = 1;
    }
    Object.defineProperty(StateService.prototype, "state", {
        // already return a clone of the current state
        get: function () {
            return this._state = this._clone(this._state);
        },
        // never allow mutation
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    StateService.prototype.setLoading = function (loadingText) {
        this.state.isLoading++;
        this.state.loadingText = loadingText;
    };
    StateService.prototype.closeLoading = function () {
        if (this.state.isLoading > 0)
            this.state.isLoading--;
    };
    StateService.prototype.get = function (prop) {
        // use our state getter for the clone
        var state = this.state;
        return state.hasOwnProperty(prop) ? state[prop] : state;
    };
    StateService.prototype.set = function (prop, value) {
        // internally mutate our state
        return this._state[prop] = value;
    };
    StateService.prototype._clone = function (object) {
        // simple object clone
        return JSON.parse(JSON.stringify(object));
    };
    StateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], StateService);
    return StateService;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/state.service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__ = __webpack_require__(1002);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_share__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_SIGNED_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return USER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var USER_SIGNED_INFO = {
    SIGNED_IN: 1,
    VALIDATING: 2,
    NOT_SIGNED_IN: 0
};
var USER_TYPE = {
    INDIVIDUAL: "INDIVIDUAL",
    INSTITUTION: "INSTITUTION",
    SCHOOL: "SCHOOL",
    MEMBER: "MEMBER",
    ADMIN: "ADMIN"
};
var AuthenticateService = (function () {
    function AuthenticateService(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.token = "";
        this.type = -1;
        this.isAdmin = 0;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__environments__["a" /* environment */].serverUrl;
        this.isValidating = false;
        this.email = "";
        this.currentUser = null;
        this.validateToken();
    }
    AuthenticateService.prototype._constructUserPath = function () {
        // return '/assets/api/v1';
        return this.serverUrl;
    };
    AuthenticateService.prototype.canActivate = function () {
        if (this.isLoggedIn() != USER_SIGNED_INFO.NOT_SIGNED_IN)
            return true;
        else {
            // Redirect user to sign in if signInRedirect is set
            this.router.navigate(['/home']);
            return false;
        }
    };
    AuthenticateService.prototype.validateToken = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token);
        // if(!this.isLoggedIn())
        //   return;
        this.isValidating = true;
        this.get('/api/v1/profile').subscribe(function (response) {
            var res = response.json();
            if (res.success) {
                _this.currentUser = res.data;
            }
            _this.isValidating = false;
        }, function (error) {
            _this.isValidating = false;
            var curUrl = _this.router.url;
            if (curUrl.slice(0, 8) == '/profile') {
                _this.router.navigate(['/home']);
            }
        });
    };
    AuthenticateService.prototype.reset = function (email) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverUrl + '/api/v1/sendPasswordToken', JSON.stringify({ email: email }), { headers: headers })
            .map(function (response) {
            if (response.result > 0) {
                return true;
            }
            else {
                return false;
            }
        }, function (error) { return false; });
    };
    AuthenticateService.prototype.resetPassword = function (data) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.serverUrl + '/api/v1/resetPassword', JSON.stringify(data), { headers: headers })
            .map(function (response) {
            if (response.result > 0) {
                return true;
            }
            else {
                return false;
            }
        }, function (error) { return false; });
    };
    AuthenticateService.prototype.isLoggedIn = function () {
        if (this.isValidating)
            return USER_SIGNED_INFO.VALIDATING;
        if (this.currentUser != null)
            return USER_SIGNED_INFO.SIGNED_IN;
        else
            return USER_SIGNED_INFO.NOT_SIGNED_IN;
    };
    AuthenticateService.prototype.get = function (path) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get,
            url: this._constructUserPath() + path
        }));
    };
    AuthenticateService.prototype.post = function (path, data) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: this._constructUserPath() + path,
            body: data
        }));
    };
    AuthenticateService.prototype.postFormData = function (path, data) {
        var baseHeaders = {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](baseHeaders),
            withCredentials: true,
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post,
            url: this._constructUserPath() + path,
            body: encodeURI(data)
        });
        return this.sendHttpRequest(requestOptions);
    };
    AuthenticateService.prototype.put = function (path, data) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put,
            url: this._constructUserPath() + path,
            body: data
        }));
    };
    AuthenticateService.prototype.delete = function (path) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete,
            url: this._constructUserPath() + path
        }));
    };
    AuthenticateService.prototype.patch = function (path, data) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Patch,
            url: this._constructUserPath() + path,
            body: data
        }));
    };
    AuthenticateService.prototype.head = function (path) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Head,
            url: this._constructUserPath() + path
        }));
    };
    AuthenticateService.prototype.options = function (path) {
        return this.sendHttpRequest(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Options,
            url: this._constructUserPath() + path
        }));
    };
    // Construct and send Http request
    AuthenticateService.prototype.sendHttpRequest = function (requestOptions) {
        var baseRequestOptions;
        var baseHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        };
        // Merge auth headers to request if set
        baseRequestOptions = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */](baseHeaders),
            withCredentials: true,
        });
        // Merge standard and custom RequestOptions
        baseRequestOptions = baseRequestOptions.merge(requestOptions);
        var response = this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Request */](baseRequestOptions)).share();
        return response;
    };
    AuthenticateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _c) || Object])
    ], AuthenticateService);
    return AuthenticateService;
    var _a, _b, _c;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/authenticate.service.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellBox; });
var SellBox = (function () {
    function SellBox() {
        this.id = 0;
        this.title = "";
        this.price = 0;
        this.detail = "";
        this.type = "";
        this.amount = 0;
        this.sell_count = 0;
        this.main_image = "";
        this.images = [];
        this.created_at = "";
        this.updated_at = "";
    }
    return SellBox;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/sell_box.type.js.map

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneralService = (function () {
    function GeneralService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__environments__["a" /* environment */].serverUrl;
        this.totalCount = 0;
        this.cbox_total = 0;
        this.life_total = 0;
        this.daily_total = 0;
        this.organizations = [];
        this.isGeneralInfoFirstLoad = true;
        this.unread_messages = 0;
        this.dailyLeaders = [];
        this.lifeLeaders = [];
        this.topInstitution = [];
        this.topSchool = [];
        this.getUnreadMessageCount();
    }
    GeneralService.prototype.getScores = function (start, length, sort_item, sort_rule, search, filter) {
        var _this = this;
        var sort_rule_string = "asc";
        if (sort_rule)
            sort_rule_string = "desc";
        return this.authService.get('/api/v1/getScore?start=' + start + '&length=' + length + '&sort_item=' + sort_item + '&sort_rule=' + sort_rule_string + '&search=' + search + '&filter=' + filter)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                for (var i = 0; i < res.data.data.length; i++)
                    if (res.data.data[i].image_url == "")
                        res.data.data[i].image_url = "assets/global/img/default_avatar.jpg";
                    else {
                        var image_v = Math.random();
                        res.data.data[i].image_url += "?v=" + image_v;
                    }
                _this.scores = res.data.data;
                _this.totalCount = res.data.total;
                return true;
            }
            else {
                return false;
            }
        });
    };
    GeneralService.prototype.getUnreadMessageCount = function () {
        var me = this;
        this.authService.get('/api/v1/profile/unreadMessages?cur_conversation_id=0').subscribe(function (res) {
            var result = res.json();
            if (result.success)
                me.unread_messages = result.data;
            setTimeout(function () {
                me.getUnreadMessageCount();
            }, 5000);
        }, function (error) {
            setTimeout(function () {
                me.getUnreadMessageCount();
            }, 5000);
        });
    };
    GeneralService.prototype.getGeneralInfo = function () {
        var _this = this;
        return this.authService.get('/api/v1/getGeneralInfo')
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                //Check if avatar exists
                for (var i = 0; i < res.dailyLeader.length; i++)
                    for (var j = 0; j < res.dailyLeader[i].length; j++)
                        if (res.dailyLeader[i][j].image_url == "")
                            res.dailyLeader[i][j].image_url = "assets/global/img/default_avatar.jpg";
                        else {
                            var image_v = Math.random();
                            res.dailyLeader[i][j].image_url += "?v=" + image_v;
                        }
                for (var i = 0; i < res.lifeLeader.length; i++)
                    for (var j = 0; j < res.lifeLeader[i].length; j++)
                        if (res.lifeLeader[i][j].image_url == "")
                            res.lifeLeader[i][j].image_url = "assets/global/img/default_avatar.jpg";
                        else {
                            var image_v = Math.random();
                            res.lifeLeader[i][j].image_url += "?v=" + image_v;
                        }
                for (var i = 0; i < res.organizations.length; i++)
                    for (var j = 0; j < res.organizations[i].length; j++)
                        if (res.organizations[i][j].image_url == "")
                            res.organizations[i][j].image_url = "assets/global/img/default_avatar.jpg";
                        else {
                            var image_v = Math.random();
                            res.organizations[i][j].image_url += "?v=" + image_v;
                        }
                _this.dailyLeaders = res.dailyLeader;
                _this.lifeLeaders = res.lifeLeader;
                _this.organizations = res.organizations;
                if (_this.isGeneralInfoFirstLoad)
                    _this.commonUsers = res.users;
                _this.isGeneralInfoFirstLoad = false;
                _this.cbox_total = res.cbox_total;
                _this.daily_total = res.daily_total;
                _this.life_total = res.life_total;
                return true;
            }
            else {
                return false;
            }
        });
    };
    GeneralService.prototype.getAdminUsers = function () {
        return this.authService.get('/api/v1/getAdminUsers')
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return res.admins;
            }
            else {
                return [];
            }
        });
    };
    GeneralService.prototype.followUser = function (follow_user_id, is_follow) {
        if (is_follow)
            return this.authService.postFormData('/api/v1/profile/follow', "follow_user_id=" + follow_user_id)
                .map(function (response) {
                var res = response.json();
                if (res.success == true)
                    return true;
                else
                    return false;
            });
        else
            return this.authService.postFormData('/api/v1/profile/unFollow', "follow_user_id=" + follow_user_id)
                .map(function (response) {
                var res = response.json();
                if (res.success == true)
                    return true;
                else
                    return false;
            });
    };
    GeneralService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _b) || Object])
    ], GeneralService);
    return GeneralService;
    var _a, _b;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/general.service.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_donate_type__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProfileService = (function () {
    function ProfileService(http, router, authService, stateService, languageService) {
        this.http = http;
        this.router = router;
        this.authService = authService;
        this.stateService = stateService;
        this.languageService = languageService;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__environments__["a" /* environment */].serverUrl;
        this.donate_count = 0;
        this.initToken();
    }
    ProfileService.prototype.initToken = function () {
    };
    ProfileService.prototype.getServerTime = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverUrl + '/api/v1/getTime', { headers: headers });
    };
    ProfileService.prototype.updateProfile = function (account) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = new FormData();
        for (var key in account) {
            if (key != "image_url")
                data.append(key, account[key]);
        }
        return this.http.post(this.serverUrl + '/api/v1/profile', data, { headers: headers, withCredentials: true });
    };
    ProfileService.prototype.updatePassword = function (passwords) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        return this.authService.postFormData('/api/v1/profile/updatePassword', "cur_password=" + passwords.curPassword + "&new_password=" + passwords.newPassword)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.getBoxes = function () {
        var _this = this;
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token);
        return this.authService.get('/api/v1/boxes')
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                _this.boxes = res.data;
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.addBox = function (box) {
        var _this = this;
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = new FormData();
        for (var key in box)
            data.append(key, box[key]);
        return this.authService.post('/api/v1/boxes', box)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                _this.boxes.push(box);
                return res;
            }
            else
                return res;
        }, function (error) { return error; });
    };
    ProfileService.prototype.updateBox = function (box) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = { device_id: box.device_id, country_code: box.country_code };
        return this.authService.put('/api/v1/boxes', box)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.removeBox = function (box) {
        this.initToken();
        var data = new FormData();
        data.append('device_id', box.device_id);
        return this.authService.delete('/api/v1/boxes?' + 'device_id=' + box.device_id)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.resetBox = function (box) {
        this.initToken();
        var data = { uid: box.device_id };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        return this.authService.post('/api/v1/resetBox', data)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.getMembers = function () {
        var _this = this;
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token);
        return this.authService.get('/api/v1/members')
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                _this.members = res.data;
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.addMember = function (member) {
        var _this = this;
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = new FormData();
        console.log("MB: ", member.boxes);
        for (var key in member)
            data.append(key, member[key]);
        return this.authService.post('/api/v1/members', member)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                member.id = res.member_id;
                member.daily_count = res.daily_count;
                member.goal_daily = res.goal_daily;
                member.goal_weekly = res.goal_weekly;
                member.goal_monthly = res.goal_monthly;
                member.lifetime_count = res.lifetime_count;
                _this.members.push(member);
                return res;
            }
            else
                return res;
        }, function (error) { return error; });
    };
    ProfileService.prototype.updateMember = function (member) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        // let data:any = {id: member.id, name: member.name, email: member.email, boxes: member.boxes, goal_daily:member.goal_daily, goal_weekly:member.goal_weekly, goal_monthly:member.goal_monthly};
        return this.authService.put('/api/v1/members', member)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return res;
            }
            else
                return res;
        }, function (error) { return error; });
    };
    ProfileService.prototype.removeMember = function (member) {
        this.initToken();
        return this.authService.delete('/api/v1/members' + '?id=' + member.id)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.saveDonate = function (donate) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = new FormData();
        for (var key in donate)
            data.append(key, donate[key]);
        return this.http.post(this.serverUrl + '/api/v1/donate', data, { withCredentials: true })
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.approveDonate = function (donate_id) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = { donate_id: donate_id };
        return this.authService.post('/api/v1/donate/approve', data)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.getDonate = function () {
        var _this = this;
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.authService.get('/api/v1/donate')
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                if (res.data != null) {
                    _this.myDonate = res.data;
                }
                else {
                    _this.myDonate = new __WEBPACK_IMPORTED_MODULE_3__model_donate_type__["a" /* Donate */]();
                }
                return true;
            }
            else
                return false;
        }, function (error) { return false; });
    };
    ProfileService.prototype.getAllDonates = function (start, length, search, filter) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.authService.get('/api/v1/all_donates?start=' + start + '&length=' + length + '&search=' + search + '&filter=' + filter)
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                if (res.data != null) {
                    for (var i = 0; i < res.data.length; i++) {
                        res.data[i].isSelected = false;
                        res.data[i].quantity = 0;
                    }
                    _this.donates = res.data;
                    _this.donate_count = res.count;
                }
                else {
                    _this.donates = [];
                }
                return true;
            }
            else {
                return false;
            }
        }, function (error) { return false; });
    };
    ProfileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__language_service__["a" /* LanguageService */]) === 'function' && _e) || Object])
    ], ProfileService);
    return ProfileService;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/profile.service.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_service__ = __webpack_require__(13);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(router, appState, generalService, lang, viewContainerRef) {
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.lang = lang;
        this.errorMessage = "";
        this.viewContainerRef = viewContainerRef;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.tr = function (tran) {
        return this.lang.tr("app." + tran);
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(974),
            styles: [__webpack_require__(923)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__state_service__["a" /* StateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__general_service__["a" /* GeneralService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__language_service__["a" /* LanguageService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === 'function' && _e) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/app.component.js.map

/***/ }),

/***/ 381:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactMessage; });
var ContactMessage = (function () {
    function ContactMessage() {
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
    }
    return ContactMessage;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/contact_message.type.js.map

/***/ }),

/***/ 382:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    serverUrl: ""
};
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/environment.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnePageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var OnePageService = (function () {
    function OnePageService(http, router, authenticateService, stateService, languageService) {
        this.http = http;
        this.router = router;
        this.authenticateService = authenticateService;
        this.stateService = stateService;
        this.languageService = languageService;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_2__environments__["a" /* environment */].serverUrl;
        this.initToken();
    }
    OnePageService.prototype.initToken = function () {
    };
    OnePageService.prototype.getSellBoxes = function () {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        // headers.append('token', this.token);
        return this.http.get(this.serverUrl + '/api/v1/sell/getSellBoxes', { headers: headers })
            .map(function (response) {
            var res = response.json();
            return res;
            // if (res.success == true) {
            //     this.sellBoxes = res.data;
            //     console.log(this.sellBoxes);
            //     return true;
            // } else {
            //   this.check_token(res);
            //   return false;
            // }
        });
    };
    OnePageService.prototype.sendContactMessage = function (msg) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var data = new FormData();
        return this.http.post(this.serverUrl + '/api/v1/sendContactMessage', msg, { headers: headers })
            .map(function (response) {
            var res = response.json();
            if (res.success == true) {
                // this.sellBoxes = res.data;
                // console.log(this.sellBoxes);
                return true;
            }
            else {
                // this.check_token(res);
                return false;
            }
        });
    };
    OnePageService.prototype.getMemberBoxAmount = function () {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverUrl + '/api/v1/members/getBoxAmount', { headers: headers })
            .map(function (response) {
            var res = response.json();
            return res.data;
        });
    };
    OnePageService.prototype.getUserBoxAmount = function () {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverUrl + '/api/v1/profile/getUserAmount', { headers: headers })
            .map(function (response) {
            var res = response.json();
            return res.data;
        });
    };
    OnePageService.prototype.getTransactionHistory = function () {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.serverUrl + '/api/v1/getTransactionHistory', { headers: headers })
            .map(function (response) {
            var res = response.json();
            return res;
        });
    };
    OnePageService.prototype.getPaid = function (amount, password) {
        this.initToken();
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        var data = new FormData();
        data.append("amount", amount);
        data.append("password", password);
        return this.http.post(this.serverUrl + '/api/v1/getPaid', data, { headers: headers })
            .map(function (response) {
            var res = response.json();
            return res.success;
        }, function (error) { return false; });
    };
    OnePageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__language_service__["a" /* LanguageService */]) === 'function' && _e) || Object])
    ], OnePageService);
    return OnePageService;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/one-page.service.js.map

/***/ }),

/***/ 603:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 603;


/***/ }),

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(769);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(695);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(728);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/main.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__one_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__authenticate_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { OnePageRoutes } from './one-page/one-page.routing';
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__one_page__["a" /* OnePageComponent */],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["b" /* HomeComponent */] },
            // { path: 'activateAccount',      component: HomeComponent },
            { path: 'about_us', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["c" /* AboutComponent */] },
            { path: 'director_board', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["d" /* DirectorBoardComponent */] },
            { path: 'score', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["e" /* ScoreBoardComponent */] },
            { path: 'sell', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["f" /* SellBoardComponent */] },
            { path: 'selldonate', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["g" /* SellDonateComponent */] },
            { path: 'donate', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["h" /* DonateComponent */] },
            { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["i" /* ContactUsComponent */] },
            { path: 'activateAccount', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["r" /* ActivateComponent */] },
            { path: 'contact-admin', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["j" /* ContactAdminComponent */] },
            { path: 'report', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["k" /* ReportComponent */] },
            {
                path: 'profile',
                component: __WEBPACK_IMPORTED_MODULE_2__one_page__["l" /* ProfileComponent */],
                children: [
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["m" /* MainInfoComponent */], },
                    { path: 'boxes', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["n" /* MyBoxComponent */] },
                    { path: 'members', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["o" /* MyMemberComponent */] },
                    { path: 'changePassword', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["p" /* ChangePasswordComponent */] },
                    { path: 'donate', component: __WEBPACK_IMPORTED_MODULE_2__one_page__["q" /* MyDonateComponent */] }
                ],
                canActivate: [__WEBPACK_IMPORTED_MODULE_3__authenticate_service__["a" /* AuthenticateService */]]
            },
            { path: '**', redirectTo: 'home' }
        ]
    },
    { path: '**', redirectTo: '' },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/app-routing.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__one_page__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__one_page_one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__one_page_profile_profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guard__ = __webpack_require__(727);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["a" /* DatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["b" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["c" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["d" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7_ng2_bootstrap__["e" /* DropdownModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["a" /* OnePageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["b" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["c" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["d" /* DirectorBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["e" /* ScoreBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["f" /* SellBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["g" /* SellDonateComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["h" /* DonateComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["i" /* ContactUsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["j" /* ContactAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["k" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["l" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["m" /* MainInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["n" /* MyBoxComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["o" /* MyMemberComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["p" /* ChangePasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["q" /* MyDonateComponent */],
                __WEBPACK_IMPORTED_MODULE_6__one_page__["r" /* ActivateComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__authenticate_service__["a" /* AuthenticateService */],
                __WEBPACK_IMPORTED_MODULE_9__language_service__["a" /* LanguageService */],
                __WEBPACK_IMPORTED_MODULE_10__general_service__["a" /* GeneralService */],
                __WEBPACK_IMPORTED_MODULE_11__state_service__["a" /* StateService */],
                __WEBPACK_IMPORTED_MODULE_12__one_page_one_page_service__["a" /* OnePageService */],
                __WEBPACK_IMPORTED_MODULE_13__one_page_profile_profile_service__["a" /* ProfileService */],
                __WEBPACK_IMPORTED_MODULE_14__guard__["a" /* Guard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/app.module.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Guard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Guard = (function () {
    function Guard(router) {
        this.router = router;
    }
    Guard.prototype.canActivate = function () {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(['/login']);
        return false;
    };
    Guard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object])
    ], Guard);
    return Guard;
    var _a;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/guard.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(380);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(726);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return de; });
var de = {
    login: {
        TITLE: "Log in(de)",
        ENTER_YOUR_EMAIL_AND_PASSWORD: "Enter your email address and password.",
        EMAIL: "Email",
        PASSWORD: "Password",
        REMEMBER: "Remember",
        FORGOT_PASSWORD: "Forgot Password",
        LOGIN: "Login",
        REGISTER: "Register",
        LOADING_TEXT: "Signing in..."
    },
    register: {
        TITLE: "REGISTER(de)",
        ENTER_YOUR_PERSONAL_DETAILS_BELOW: "Enter your personal details below",
        NAME: "Name",
        WELCOME_MESSAGE: "Welcome message",
        EMAIL: "Email",
        PASSWORD: "Password",
        RETYPE_YOUR_PASSWORD: "Retype Your Password",
        STREET_ADDRESS: "Street Address",
        LINE2: "Line2",
        CITY: "City",
        STATE: "State",
        ZIP: "Zip",
        BACK: "Back",
        REGISTER: "Register",
        REGISTER_FAILED: "Registering failed...",
        LOADING_TEXT: "Signing up..."
    },
    reset: {
        TITLE: "Forget Password de",
        ENTER_YOUR_EMAIL_ADDRESS_BELOW_TO_RESET: "Enter your e-mail address below to reset your password.",
        EMAIL: "Email",
        BACK: "Back",
        SUBMIT: "Submit",
        LOADING_TEXT: "Resetting password..."
    }
};
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/de.js.map

/***/ }),

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return en; });
var en = {
    login: {
        TITLE: "SIGN INTO YOUR ACCOUNT",
        ENTER_YOUR_EMAIL_AND_PASSWORD: "Enter your email address and password.",
        EMAIL: "Email",
        PASSWORD: "Password",
        REMEMBER: "Remember",
        FORGOT_PASSWORD: "Forgot Password",
        LOGIN: "Sign In",
        REGISTER: "Register",
        LOADING_TEXT: "Signing in...",
        TOKEN_ERROR: "There's some problem with your previous sign in. Please sign in again.",
        PLEASE_TRY_AGAIN: "Please check your email and password again.",
    },
    register: {
        TITLE: "SIGN UP",
        ENTER_YOUR_PERSONAL_DETAILS_BELOW: "Enter your personal details below",
        NAME: "Name",
        TYPE: "Account Type",
        EMAIL: "Email",
        PASSWORD: "Password",
        RETYPE_YOUR_PASSWORD: "Retype Your Password",
        STREET_ADDRESS: "Street Address",
        LINE2: "Line2",
        CITY: "City",
        COUNTRY: "Country",
        ZIP: "Zip",
        BACK: "Back",
        REGISTER: "Register",
        REGISTER_FAILED: "Please check your internet connection. Otherwise user that has the email address already exists.",
        LOADING_TEXT: "Signing up...",
        INDIVIDUAL: "Individual",
        INSTITUTION: "Institution",
        FILL_ALL_ICON_FIELDS: "You have to fill all icon-fields.",
        AGE: "Age",
        COMPANY: "Company",
        SCHOOL: "School",
        SUCCESS_MESSAGE: "Your account has been successfully created. Please check your email to activate.",
        ADDRESS: "Address"
    },
    reset: {
        TITLE: "Forget Password",
        ENTER_YOUR_EMAIL_ADDRESS_BELOW_TO_RESET: "Enter your e-mail address below to reset your password.",
        EMAIL: "Email",
        BACK: "Back",
        SUBMIT: "Submit",
        LOADING_TEXT: "Resetting password...",
        INPUT_EMAIL: "Please input your email.",
        SUCCESS_MESSAGE: "Your password has been successfully reseted. Please check you mail box.",
        FAIL_MESSAGE: "Failed to reset. Please check your email again.",
        CODE: "Code",
        INSERT_CODE_BELOW: "Please insert the code below."
    },
    admin: {
        ACCOUNT_MENU_ITEM1: "Account Info",
        ACCOUNT_MENU_ITEM2: "Change Password",
        ACCOUNT_MENU_ITEM3: "Log out",
        LARGE_MENU_ITEM1: "Applications",
        LARGE_MENU_ITEM2: "Locations",
        LARGE_MENU_ITEM3: "Beacons",
        LARGE_MENU_ITEM4: "Categories",
        LARGE_MENU_ITEM5: "Scheduler",
        EMAIL: "Email",
        PASSWORD: "Password",
        RETYPE_YOUR_PASSWORD: "Retype Your Password",
        NEW_PASSWORD: "New Password",
        CANCEL: "Cancel",
        UPDATE: "Update"
    },
    onepage: {
        HOME: "Home",
        SCOREBOARD: "ScoreBoard",
        SELLBOARD: "Purchase",
        SELLDONATE: "Donate",
        CONTACTUS: "Contact Us",
        REPORT: "Report",
        PROFILE: "Profile",
        EDIT_PROFILE: "Edit Profile",
        DONATE: "Ask Donation",
        BOXES: "My Boxes",
        MEMBERS: "My Members",
        SIGN_OUT: "Sign Out",
        SIGN_IN: "Sign In/Up",
        ABOUT: "About Us",
        BOARD_OF_DIRECTORS: "Board of Directors",
        CHANGE_PASSWORD: "Change Password"
    },
    director_board: {
        TITLE: "Directors"
    },
    profile: {
        TITLE: "My Profile",
        EDIT_PROFILE: "Edit profile",
        MY_BOXES: "My Boxes",
        MY_MEMBERS: "My Members",
        DETAILS: "Your personal details",
        GOALS_DETAILS: "Your Goals",
        DAILY_GOAL: "Daily Goal",
        WEEKLY_GOAL: "Weekly Goal",
        MONTHLY_GOAL: "Monthly Goal",
        NAME: "Name",
        TYPE: "Account Type",
        EMAIL: "Email",
        PASSWORD: "Password",
        RETYPE_YOUR_PASSWORD: "Retype Your Password",
        STREET_ADDRESS: "Street Address",
        LINE2: "Line2",
        CITY: "City",
        COUNTRY: "Country",
        ZIP: "Zip",
        BACK: "Back",
        REGISTER: "Register",
        REGISTER_FAILED: "Registering failed...",
        LOADING_TEXT: "Signing up...",
        INDIVIDUAL: "Individual",
        INSTITUTION: "Institution",
        FILL_ALL_ICON_FIELDS: "You have to fill all fields with correct values.",
        AGE: "Age",
        COMPANY: "Company",
        SCHOOL: "School",
        SELECT_IMAGE: "Select Image",
        UPDATE_PROFILE: "Update Profile",
        BIRTHDAY: "Birthday",
        UPDATE_FAILED: "Update failed...",
        SUCCESS_MESSAGE: "Your profile has been successfully updated.",
        FILL_ALL_REQUIRE_FIELDS: "Please fill all required fields.",
        GET_FAILED: "Can't get your personal data from server. Please check the internet connection.",
        CREATE_BOX_FAILED: "Failed. Please check your device id and internet connection.",
        EDIT_BOX_FAILED: "Failed. Please check your device id and internet connection.",
        REMOVE_BOX_FAILED: "Failed. Please check your device id and internet connection.",
        CREATE_MEMBER_FAILED: "Please check your internet connection. Otherwise already member exists with that email address",
        EDIT_MEMBER_FAILED: "Failed. Please check your internet connection.",
        REMOVE_MEMBER_FAILED: "Failed. Please check your internet connection.",
        SECRET_CODE: "Secret Code",
        ADD_NEW: "Add New",
        SHOW: "Show",
        DEVICE_ID: "ID",
        LOCATION: "Location",
        ACTION: "Action",
        EDIT: "Edit",
        REMOVE: "Delete",
        CANCEL: "Cancel",
        CREATE: "Create",
        DELETE: "Delete",
        DELETE_MESSAGE: "Do you really want to remove this device? It will cause something bad.",
        DAILY_COUNT: "Daily",
        WEEKLY_COUNT: "Weekly",
        MONTHLY_COUNT: "Monthly",
        LIFETIME_COUNT: "Total",
        AMOUNT: "Amount($)",
        RESET: "Reset",
        RESET_SUCCESS: "Your balance on the website only has been reset.",
        RESET_BOX_FAILED: "An error occurs when we try to reset your box. Please check your internet connectiion.",
        RESET_MESSAGE: "Do you really want to reset your box?",
        TOTAL_AMOUNT_DEPOSITED: "Total Amount",
        AMOUNT_IN_BOX: "Amount in Box",
        BOXES: "Boxes",
        BOX_ID: "Box Id",
        BOX_IDS: "Box ids",
        IMAGE_EDIT_PAN: "Edit Profile photo",
        SAVE: "Save",
        EDIT_PROFILE_IMAGE: "Edit Image",
        SELECT_DIFFERENT_IMAGE: "Select different image",
        PROFILE_IMAGE_PREVIEW_TITLE: "Profile ImagePreview",
        PROFILE_IMAGE_SELECT_SENTENCE: "We really appreciate if you choose your real image. It is the chance to publish your profile.",
        MEMBER: "Member",
        TIME_LEFT: "Time Left",
        PHONE: "Phone",
        ADDRESS: "Address",
        ADD_BOX: "Add Box",
        REMOVE_BOX: "Remove Box",
        CHANGE_PASSWORD: "Change Password",
        CURRENT_PASSWORD: "Current Password",
        NEW_PASSWORD: "New Password",
        CONFIRM_PASSWORD: "Confirm New Password",
        SAVE_PASSWORD: "Save Password"
    },
    scoreboard: {
        NAME: "Name",
        EMAIL: "Email",
        IMAGE: "Image",
        TYPE: "Type",
        SCHOOL: "School",
        COMPANY: "Company",
        OVERVIEW: "Overview",
        SCORE: "Score",
        BOX_COUNT: "Box count",
        SHOW: "Show",
        SEARCH: "Search",
        AGE: "Age",
        ALL_USERS_LISTED: "All users listed",
        GET_FAILED: "Connection Lost. Please check your internet connection.",
        INDIVIDUAL: "Individual",
        INSTITUTION: "Institution",
        COUNTRY: "Country",
        CITY: "City",
        DEPOSIT_COUNT: "Lifetime mitzvots",
        DAILY_COUNT: "Daily mitzvots"
    },
    app: {
        GET_GENERALINFO_FAILED: "Please check your internet connection!!!"
    },
    home: {
        COMMON_USERS: "Common Users",
        DAILY_LEADERS: "Daily Leaders",
        LIFETIME_LEADERS: "Life Time Leaders",
        AGE: "Age",
        SCHOOL: "School",
        INSTITUTION: "Institution",
        SCHOOL_INSTITUTION: "School & Institution",
        BOXES: "Box(es)",
        CHANGE_CATEGORY: ["Click here for box leaders.",
            "Click here for Mitzvot leaders."
        ],
        CHANGE: "Change",
        MITZVOT: "mitzvot(s)",
        LIFETIME_MITZVOTS: "Life Time Mitzvots",
        DAILY_MITZVOTS: "Daily Mitzvots",
        TOTAL_BOXES: "Total Boxes",
        VIEW_MORE: "View more"
    },
    about: {
        TITLE: "Directors",
        MAIN_TITLE: "We love to hear from you!",
        DETAIL_TITLE: "We are here to help you! Please don't hesitate to fill out the form below.",
        NAME: "Name",
        EMAIL: "Email",
        SUBJECT: "Subject",
        MESSAGE: "Your Message",
        SEND_MESSAGE: "Send Message",
        FILL_ALL_REQUIRE_FIELDS: "Please fill all required fields.",
        SUCCESS_MESSAGE: "Your Message has been successfully sent.",
        SENT_FAILED: "Failed to send Message. Please resent message after a while."
    },
    sell: {
        TYPE: "Type",
        PRICE: "Price",
        TOTAL_PRICE: "Total Price",
        AMOUNT: "Amount",
        BUY_NOW: "BUY NOW",
        PAY_NOW: "Pay Now",
        EXPIRY_DATE: "Expiry Date",
        CARD_NUMBER: "Card Number",
        CVV_CODE: "CVV Code",
        LOADING_TEXT: "Getting C-Box Data...",
        GET_FAILED: "Can't get C-Box data from server. Please check the internet connection.",
        CANCEL: "Cancel"
    },
    contact: {
        MAIN_TITLE: "We love to hear from you!",
        DETAIL_TITLE: "We are here to help you! Please don't hesitate to fill out the form below.",
        NAME: "Name",
        EMAIL: "Email",
        SUBJECT: "Subject",
        MESSAGE: "Your Message",
        SEND_MESSAGE: "Send Message",
        FILL_ALL_REQUIRE_FIELDS: "Please fill all required fields.",
        SUCCESS_MESSAGE: "Your Message has been successfully sent.",
        SENT_FAILED: "Failed to send Message. Please resent message after a while."
    }
};
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/en.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__en__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__de__ = __webpack_require__(729);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Language; });


var Language = (function () {
    function Language(lang) {
        this.lang = lang;
        this.setLanguage(lang);
        this._current = __WEBPACK_IMPORTED_MODULE_0__en__["a" /* en */];
    }
    Language.prototype.setLanguage = function (lang) {
        var me = this;
        switch (lang) {
            case 'de':
                me._current = __WEBPACK_IMPORTED_MODULE_1__de__["a" /* de */];
                break;
            default:
                me._current = __WEBPACK_IMPORTED_MODULE_0__en__["a" /* en */];
        }
    };
    Language.prototype.tr = function (tran) {
        var result = '';
        eval("result=this._current." + tran);
        return result;
    };
    return Language;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 732:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
var Box = (function () {
    function Box() {
        this.id = 0;
        this.device_id = 0;
        this.user_id = 0;
        this.created_at = "";
        this.updated_at = "";
        this.country_code = "";
        this.lifetime_count = 0;
        this.d_count = 0;
        this.amount = 0;
        this.deposit_amount = 0;
        this.secretCode = "";
    }
    return Box;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/box.type.js.map

/***/ }),

/***/ 733:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Member; });
var Member = (function () {
    function Member() {
        this.id = 0;
        this.user_id = 0;
        this.name = "";
        this.email = "";
        this.created_at = "";
        this.updated_at = "";
        this.boxes = [0];
        this.goal_daily = 0;
        this.goal_weekly = 0;
        this.goal_monthly = 0;
        this.daily_count = 0;
        this.weekly_count = 0;
        this.monthly_count = 0;
        this.lifetime_count = 0;
        this.password = "";
        this.amount_in_box = 0;
        this.phone = "";
        this.country = "";
        this.city = "";
        this.address = "";
        this.phone = "";
        this.secretCodes = [""];
    }
    return Member;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/member.type.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_contact_message_type__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutComponent = (function () {
    function AboutComponent(lang, router, appState, generalService, onePageService) {
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.errorMessage = "";
        this.successMessage = "";
        this.appState.set("one_page_menu_selected", 4);
        this.directors = [
            {
                name: "Mr. Bruce J. Schanzer",
                description: "Mr. Bruce J. Schanzer has been president, chief executive officer and a director of Cedar Realty Trust Inc (CDR) since June 2011. Prior thereto and since 2007, Mr. Schanzer was employed by Goldman Sachs & Co., with his last position being a managing director in their real estate investment banking group. From 2001 to 2007, Mr. Schanzer was employed by Merrill Lynch, with his last position being vice president in their real estate investment banking group. Earlier in his career, Mr. Schanzer practiced real estate law for six years in New York. Mr. Schanzer received a B.A. from Yeshiva College, where he is now a member of its board of trustees, an M.B.A. from the University of Chicago, and a J.D. from Benjamin N. Cardozo School of Law, where he was a member of the Law Review.",
                image_url: "assets/img/director.png"
            },
            {
                name: "Yaron Pinchas",
                description: "Yaron Pinchas. Born and raised in Israel and received a  Bachelor Of Arts in Economics from the University of Haifa, Israel. Yaron served in the IDF for three years. He is the founder and director of a Construction Company in Nigeria, a founder and managing director of a communication company in Nigeria, director and partner in agriculture companies in Central America and the U.S.A.",
                image_url: "assets/img/director_2.jpg"
            }
        ];
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_contact_message_type__["a" /* ContactMessage */]();
    }
    AboutComponent.prototype.sendContactMessage = function (contactForm) {
        var _this = this;
        if (!contactForm.form.valid) {
            this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
            return;
        }
        console.log(this.model);
        // this.model.image = this.image_data.image;
        // this.model.birthday = jQuery('#input-birthday').val();
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.onePageService.sendContactMessage(this.model).toPromise()
            .then(function (result) {
            if (result) {
                _this.successMessage = _this.tr("SUCCESS_MESSAGE");
                _this.errorMessage = "";
            }
            else {
                _this.errorMessage = _this.tr("SENT_FAILED"); //"Please check your email and password again.";
            }
            _this.appState.closeLoading();
        });
    };
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.ngOnDestroy = function () {
    };
    AboutComponent.prototype.tr = function (tran) {
        return this.lang.tr("about." + tran);
    };
    AboutComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(975),
            styles: [__webpack_require__(924)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _e) || Object])
    ], AboutComponent);
    return AboutComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/about.component.js.map

/***/ }),

/***/ 735:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component__ = __webpack_require__(734);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__about_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ActivateComponent = (function () {
    function ActivateComponent(lang, router, appState, generalService, onePageService, route) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.route = route;
        this.message = "";
        this.title1 = "";
        this.title2 = "";
        this.title1 = "Welcome!";
        this.title2 = " Please Activate Your Account.";
        this.message = "Hello.  Thanks for choosing millionmitzvot! We just sent you email to provide you activate your account. Please activate your account by checking your email. We may need to communicate important service level issues with you from time to time, so it's important we have an up-to-date email address for you on file.";
        this.route.params.forEach(function (params) {
            if (params && params['success'] != null) {
                if (params['success']) {
                    _this.title1 = "Welcome!";
                    _this.title2 = " Your account has been approved.";
                    _this.message = "We are redirecting to home page within 5 seconds";
                    var me_1 = _this;
                    setTimeout(function () {
                        me_1.router.navigate(['/home']);
                    }, 5000);
                }
            }
        });
    }
    ActivateComponent.prototype.ngOnInit = function () {
    };
    ActivateComponent.prototype.ngOnDestroy = function () {
    };
    ActivateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-activate',
            template: __webpack_require__(976),
            styles: [__webpack_require__(925)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _f) || Object])
    ], ActivateComponent);
    return ActivateComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/activate.component.js.map

/***/ }),

/***/ 737:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__activate_component__ = __webpack_require__(736);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__activate_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 738:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactAdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactAdminComponent = (function () {
    function ContactAdminComponent(lang, router, appState, generalService, onePageService) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.errorMessage = "";
        this.successMessage = "";
        this.SERVER_URL = __WEBPACK_IMPORTED_MODULE_6__environments__["a" /* environment */].serverUrl;
        this.model = { message: "", id: -1 };
        this.appState.set("one_page_menu_selected", 7);
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.appState.set("one_page_menu_selected", 1);
        this.generalService.isGeneralInfoFirstLoad = true;
        this.generalService.getAdminUsers().subscribe(function (result) {
            _this.admins = result;
            _this.appState.closeLoading();
        });
    }
    ContactAdminComponent.prototype.ngOnInit = function () {
    };
    ContactAdminComponent.prototype.ngOnDestroy = function () {
    };
    ContactAdminComponent.prototype.contact = function (id) {
        this.model.id = id;
        this.model.message = "";
        this.contactDialog.show();
    };
    ContactAdminComponent.prototype.tr = function (tran) {
        return this.lang.tr("contact." + tran);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('contact_dialog'), 
        __metadata('design:type', Object)
    ], ContactAdminComponent.prototype, "contactDialog", void 0);
    ContactAdminComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-admin',
            template: __webpack_require__(977),
            styles: [__webpack_require__(926)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _e) || Object])
    ], ContactAdminComponent);
    return ContactAdminComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/contact-admin.component.js.map

/***/ }),

/***/ 739:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_admin_component__ = __webpack_require__(738);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_admin_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 740:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_contact_message_type__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactUsComponent = (function () {
    function ContactUsComponent(lang, router, appState, generalService, onePageService) {
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.errorMessage = "";
        this.successMessage = "";
        this.appState.set("one_page_menu_selected", 7);
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_contact_message_type__["a" /* ContactMessage */]();
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.ngOnDestroy = function () {
    };
    ContactUsComponent.prototype.sendContactMessage = function (contactForm) {
        var _this = this;
        if (!contactForm.form.valid) {
            this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
            return;
        }
        console.log(this.model);
        // this.model.image = this.image_data.image;
        // this.model.birthday = jQuery('#input-birthday').val();
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.onePageService.sendContactMessage(this.model).toPromise()
            .then(function (result) {
            if (result) {
                _this.successMessage = _this.tr("SUCCESS_MESSAGE");
                _this.errorMessage = "";
            }
            else {
                _this.errorMessage = _this.tr("SENT_FAILED"); //"Please check your email and password again.";
            }
            _this.appState.closeLoading();
        });
    };
    ContactUsComponent.prototype.tr = function (tran) {
        return this.lang.tr("contact." + tran);
    };
    ContactUsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(978),
            styles: [__webpack_require__(927)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _e) || Object])
    ], ContactUsComponent);
    return ContactUsComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/contact-us.component.js.map

/***/ }),

/***/ 741:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_us_component__ = __webpack_require__(740);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_us_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 742:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectorBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DirectorBoardComponent = (function () {
    function DirectorBoardComponent(lang, router, appState, generalService) {
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.appState.set("one_page_menu_selected", 5);
        this.directors = [
            {
                name: "Mr. Bruce J. Schanzer",
                description: "Mr. Bruce J. Schanzer has been president, chief executive officer and a director of Cedar Realty Trust Inc (CDR) since June 2011. Prior thereto and since 2007, Mr. Schanzer was employed by Goldman Sachs & Co., with his last position being a managing director in their real estate investment banking group. From 2001 to 2007, Mr. Schanzer was employed by Merrill Lynch, with his last position being vice president in their real estate investment banking group. Earlier in his career, Mr. Schanzer practiced real estate law for six years in New York. Mr. Schanzer received a B.A. from Yeshiva College, where he is now a member of its board of trustees, an M.B.A. from the University of Chicago, and a J.D. from Benjamin N. Cardozo School of Law, where he was a member of the Law Review.",
                image_url: "assets/img/director.png"
            },
            {
                name: "Yaron Pinchas",
                description: "Yaron Pinchas. Born and raised in Israel and received a  Bachelor Of Arts in Economics from the University of Haifa, Israel. Yaron served in the IDF for three years. He is the founder and director of a Construction Company in Nigeria, a founder and managing director of a communication company in Nigeria, director and partner in agriculture companies in Central America and the U.S.A.",
                image_url: "assets/img/director_2.jpg"
            }
        ];
    }
    DirectorBoardComponent.prototype.ngOnInit = function () {
    };
    DirectorBoardComponent.prototype.ngOnDestroy = function () {
    };
    DirectorBoardComponent.prototype.tr = function (tran) {
        return this.lang.tr("director_board." + tran);
    };
    DirectorBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-director-board',
            template: __webpack_require__(979),
            styles: [__webpack_require__(928)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object])
    ], DirectorBoardComponent);
    return DirectorBoardComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/director-board.component.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__director_board_component__ = __webpack_require__(742);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__director_board_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 744:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_sell_box_type__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_donate_type__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DonateComponent = (function () {
    function DonateComponent(lang, router, authenticateService, appState, generalService, onePageService, route, profileService) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.authenticateService = authenticateService;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.route = route;
        this.profileService = profileService;
        this.errorMessage = "";
        this.sellBoxes = [];
        this.buy_count = 1;
        this.donateId = 0;
        this.userBoxAmount = 0;
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["b" /* USER_SIGNED_INFO */];
        this.searchString = "";
        this.searchFilter = "name";
        this.curPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = 5;
        this.isSelectedAll = false;
        this.appState.set("one_page_menu_selected", 9);
        this.curSellBox = new __WEBPACK_IMPORTED_MODULE_8__model_sell_box_type__["a" /* SellBox */]();
        this.selDonate = new __WEBPACK_IMPORTED_MODULE_9__model_donate_type__["a" /* Donate */]();
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.onePageService.getSellBoxes().toPromise()
            .then(function (result) {
            if (result.success) {
                _this.sellBoxes = result.data;
                _this.curSellBox = _this.sellBoxes[0];
                _this.errorMessage = "";
            }
            else {
                _this.errorMessage = _this.tr("GET_FAILED");
            }
            _this.appState.closeLoading();
        });
        this.refreshDonate({ page: this.curPage });
    }
    DonateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!jQuery.fancybox) {
            return;
        }
        jQuery(".fancybox-fast-view").fancybox();
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
            jQuery('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
        this.route.params.forEach(function (params) {
            _this.paySuccess = params && params['pay_success'];
            console.log(params);
        });
        // this.initFancybox();
    };
    DonateComponent.prototype.initFancybox = function () {
        if (!jQuery.fancybox) {
            return;
        }
        jQuery(".fancybox-fast-view").fancybox();
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
            jQuery('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
    };
    DonateComponent.prototype.ngOnDestroy = function () {
    };
    DonateComponent.prototype.tr = function (tran) {
        return this.lang.tr("sell." + tran);
    };
    // changeAmount(num:number){
    //   this.buy_count += num;
    //   if (this.buy_count == 0) {
    //     this.buy_count = 1;
    //   }
    // }
    DonateComponent.prototype.selectBox = function (id) {
        this.curSellBox = this.sellBoxes[id];
        for (var _i = 0, _a = this.sellBoxes; _i < _a.length; _i++) {
            var sb = _a[_i];
            if (sb.id == id) {
                this.curSellBox = sb;
                break;
            }
        }
    };
    // donateOverview(){
    //   this.selDonate = new Donate();
    //   for (let i = 0; i < this.profileService.donates.length; i++) {
    //       if (this.profileService.donates[i].id == this.donate_id) {
    //         this.selDonate = this.profileService.donates[i];
    //       }
    //   }
    // }
    DonateComponent.prototype.showPayDlg = function (donate_id) {
        this.selDonate = this.profileService.donates[donate_id];
        this.donateId = this.profileService.donates[donate_id].id;
        this.pay_box_dialog.show();
    };
    DonateComponent.prototype.approve = function (index) {
        var _this = this;
        var donate_id = this.profileService.donates[index].id;
        this.appState.setLoading('Loading ...');
        this.profileService.approveDonate(donate_id).toPromise()
            .then(function (result) {
            if (result != true)
                _this.errorMessage = "Can't approve. Please check the site now.";
            else
                _this.profileService.donates[index].del_flg = 0;
            _this.appState.closeLoading();
        });
    };
    DonateComponent.prototype.handleKeyDown = function (event) {
        if (event.keyCode == 13) {
            this.search();
        }
    };
    DonateComponent.prototype.search = function () {
        this.refreshDonate({ page: this.curPage });
    };
    DonateComponent.prototype.refreshDonate = function (event) {
        var _this = this;
        this.appState.setLoading('Loading ...');
        this.profileService.getAllDonates((event.page - 1) * this.itemsPerPage, this.itemsPerPage, this.searchString, this.searchFilter).toPromise()
            .then(function (result) {
            if (result != true)
                _this.errorMessage = 'Donates Load Error';
            _this.totalCount = _this.profileService.donate_count;
            _this.appState.closeLoading();
        });
        //    this.loadingCount ++;
        //    this.generalService.getScores((event.page - 1)*this.itemsPerPage, this.itemsPerPage, this.sortField, this.sortDirection, this.searchString).toPromise()
        //     .then(result => {
        //       if(result)
        //       {
        //         this.errorMessage = "";
        //         this.totalCount = this.generalService.totalCount;
        //         this.scores = this.generalService.scores;
        //         this.loadingCount --;
        //         if(this.loadingCount == 0 && !this.isDestroyed){
        //           let me = this;
        //          //  setTimeout(function(){me.refreshTable({page: me.curPage});}, 5000);
        //         }
        //       }
        //       else
        //       {
        //         this.errorMessage = this.tr("GET_FAILED");//"Please check your email and password again.";
        //       }
        //       this.appState.closeLoading();
        //     });
    };
    Object.defineProperty(DonateComponent.prototype, "donatesSelected", {
        get: function () {
            var flag = true;
            if (this.profileService.donates == null)
                return false;
            for (var i = 0; i < this.profileService.donates.length; i++) {
                flag = flag && this.profileService.donates[i].isSelected;
            }
            return flag;
        },
        enumerable: true,
        configurable: true
    });
    DonateComponent.prototype.toggleCheckboxes = function () {
        if (this.profileService.donates == null)
            return;
        if (this.donatesSelected) {
            for (var i = 0; i < this.profileService.donates.length; i++) {
                this.profileService.donates[i].isSelected = false;
            }
        }
        else {
            for (var i = 0; i < this.profileService.donates.length; i++) {
                this.profileService.donates[i].isSelected = true;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pay_box_dialog'), 
        __metadata('design:type', Object)
    ], DonateComponent.prototype, "pay_box_dialog", void 0);
    DonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-donate',
            template: __webpack_require__(980),
            styles: [__webpack_require__(929)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], DonateComponent);
    return DonateComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/donate.component.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__donate_component__ = __webpack_require__(744);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__donate_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 746:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__(1008);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomeComponent = (function () {
    function HomeComponent(lang, router, appState, generalService, authenticate, onePageService, route, profile) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.authenticate = authenticate;
        this.onePageService = onePageService;
        this.route = route;
        this.profile = profile;
        this.errorMessage = "";
        this.memberBoxAmount = 0;
        this.userBoxAmount = 0;
        this.category = 0;
        this.slider_flag = false;
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_8__authenticate_service__["b" /* USER_SIGNED_INFO */];
        this.USER_TYPE = __WEBPACK_IMPORTED_MODULE_8__authenticate_service__["c" /* USER_TYPE */];
        this.isDestroyed = false;
        this.serverDate = Date.now();
        this.curTime = 3600 * 24;
        this.curDate = "";
        this.ageGroup = {
            4: "3~5",
            6: "5~8",
            9: "8~11",
            12: "11~13",
            15: "13~18",
            20: "18~"
        };
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.appState.set("one_page_menu_selected", 1);
        this.generalService.isGeneralInfoFirstLoad = true;
        this.profile.getServerTime().subscribe(function (res) {
            var data = res.json().data;
            _this.curTime = 3600 * 24 - data.time;
            _this.curDate = data.date;
        }, function (error) {
            _this.errorMessage = "There's some trouble with network.";
        });
        this.generalService.getGeneralInfo().subscribe(function (result) {
            if (result)
                _this.errorMessage = "";
            else
                _this.errorMessage = _this.tr("GET_GENERALINFO_FAILED"); //"Please check your email and password again.";
            _this.appState.closeLoading();
            _this.slider_flag = true;
        });
        var me = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["TimerObservable"].create(1000, 1000);
        this.timerSubscription = timer.subscribe(function (t) {
            if (_this.curTime <= 0) {
                _this.timerSubscription.unsubscribe();
                setTimeout(3000, function () {
                    location.reload();
                });
                return;
            }
            _this.curTime--;
        });
    }
    HomeComponent.prototype.toggleCategory = function () {
        if (this.category === 0)
            this.category = 1;
        else
            this.category = 0;
    };
    //Init RevolutionSlider
    HomeComponent.prototype.initRevoSlider = function () {
        jQuery('.fullwidthabnner').show();
        jQuery('.fullwidthabnner').revolution({
            sliderType: "hero",
            startheight: 417,
            startwidth: 1150,
            hideCaptionAtLimit: 0,
            hideAllCaptionAtLilmit: 0,
            hideSliderAtLimit: 0,
            shadow: 1,
            fullWidth: "on" // Turns On or Off the Fullwidth Image Centering in FullWidth Modus
        });
    };
    HomeComponent.prototype.refreshPage = function () {
        var me = this;
        this.generalService.getGeneralInfo().toPromise()
            .then(function (result) {
            //  if(!this.isDestroyed)
            // setTimeout(function(){me.refreshPage();}, 5000);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isDestroyed = false;
        this.route.params.forEach(function (params) {
            _this.paySuccess = params && params['member_pay_success'];
            console.log(params);
        });
        this.initRevoSlider();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
        this.timerSubscription.unsubscribe();
    };
    HomeComponent.prototype.tr = function (tran) {
        return this.lang.tr("home." + tran);
    };
    Object.defineProperty(HomeComponent.prototype, "serverHour", {
        get: function () {
            return Math.floor(this.curTime / 3600);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "serverMinute", {
        get: function () {
            return Math.floor(this.curTime / 60) % 60;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(HomeComponent.prototype, "serverSecond", {
        get: function () {
            return this.curTime % 60;
        },
        enumerable: true,
        configurable: true
    });
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(981),
            styles: [__webpack_require__(930)],
            animations: [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('CategoryState', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('* => *', [
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])(800, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["keyframes"])([
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 0 }),
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ opacity: 1 })
                        ]))
                    ])
                ])
            ]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_8__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__one_page_service__["a" /* OnePageService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_7__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__profile_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/home.component.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(746);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 748:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var OnePageComponent = (function () {
    function OnePageComponent(lang, general, router, appState, authenticate) {
        this.lang = lang;
        this.general = general;
        this.router = router;
        this.appState = appState;
        this.authenticate = authenticate;
        this.is_logged = false;
        this.scrollPos = 0;
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["b" /* USER_SIGNED_INFO */];
        this.USER_TYPE = __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["c" /* USER_TYPE */];
        this.SERVER_URL = __WEBPACK_IMPORTED_MODULE_6__environments__["a" /* environment */].serverUrl;
        this.authenticate.validateToken();
    }
    OnePageComponent.prototype.scrollMoved = function (event) {
        // console.debug("Scroll Event", document.body.scrollTop);
        this.scrollPos = document.body.scrollTop;
    };
    OnePageComponent.prototype.log_out = function () {
        // this.router.navigate(['/login']);
    };
    OnePageComponent.prototype.ngOnInit = function () {
        // jQuery('body').addClass(' white-background ');
    };
    OnePageComponent.prototype.ngOnDestroy = function () {
        // jQuery('body').removeClass('white-background');
    };
    OnePageComponent.prototype.tr = function (tran) {
        return this.lang.tr("onepage." + tran);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], OnePageComponent.prototype, "scrollMoved", null);
    OnePageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-one-page',
            template: __webpack_require__(982),
            styles: [__webpack_require__(931)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _e) || Object])
    ], OnePageComponent);
    return OnePageComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/one-page.component.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(authenticate, lang, router, appState, profileService) {
        this.authenticate = authenticate;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.profileService = profileService;
        this.errorMessage = "";
        this.successMessage = "";
        this.model = {
            curPassword: "",
            newPassword: "",
            confirmPassword: ""
        };
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent.prototype.updatePassword = function (profileForm) {
        var _this = this;
        if (!profileForm.form.valid) {
            this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
            return;
        }
        if (this.model.newPassword.length < 6) {
            this.errorMessage = "The password must be at least 6 characters.";
            return;
        }
        if (this.model.newPassword != this.model.confirmPassword) {
            this.errorMessage = "Confirm Password doesn't match with new password.";
            return;
        }
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.updatePassword(this.model).subscribe(function (result) {
            if (result) {
                _this.successMessage = "Your password has been successfully updated.";
                _this.errorMessage = "";
            }
            else {
                _this.errorMessage = "Please check your current password.";
            }
            _this.appState.closeLoading();
        });
    };
    ChangePasswordComponent.prototype.tr = function (tran) {
        return this.lang.tr("profile." + tran);
    };
    ChangePasswordComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(983),
            styles: [__webpack_require__(932)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */]) === 'function' && _e) || Object])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/change-password.component.js.map

/***/ }),

/***/ 750:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__change_password_component__ = __webpack_require__(749);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__change_password_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 751:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile_component__ = __webpack_require__(760);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__profile_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__profile_service__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_info__ = __webpack_require__(752);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__main_info__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_box__ = __webpack_require__(754);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__my_box__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__my_member__ = __webpack_require__(758);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__my_member__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__my_donate__ = __webpack_require__(756);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__my_donate__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__change_password__ = __webpack_require__(750);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__change_password__["a"]; });







//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_info_component__ = __webpack_require__(753);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__main_info_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MainInfoComponent = (function () {
    function MainInfoComponent(authService, lang, router, appState, profileService) {
        var _this = this;
        this.authService = authService;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.profileService = profileService;
        // cropper:ImageCropperComponent;
        this.image_data = null;
        this.errorMessage = "";
        this.successMessage = "";
        // public cropperSettings: CropperSettings;
        this.temp_image_origin = null;
        this.model = {};
        this.USER_TYPE = __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["c" /* USER_TYPE */];
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["b" /* USER_SIGNED_INFO */];
        if (this.authService.isLoggedIn() == __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["b" /* USER_SIGNED_INFO */].SIGNED_IN) {
            this.model = JSON.parse(JSON.stringify(this.authService.currentUser));
            jQuery('#profile-image-viewer').attr('src', this.model.image_url);
        }
        else {
            this.authService.get('/api/v1/profile').subscribe(function (response) {
                var res = response.json();
                if (res.success) {
                    _this.model = res.data;
                    jQuery('#input-birthday').val(_this.model.birthday);
                    console.log(_this.model);
                    jQuery('#profile-image-viewer').attr('src', _this.model.image_url);
                }
            }, function (error) {
                _this.router.navigate(['/home']);
            });
        }
        this.temp_image_data = {};
    }
    MainInfoComponent.prototype.fileChange = function (input) {
        if (input.files.length < 1)
            return;
        if (input.files[0].size > 4 * 1024 * 1024) {
            this.errorMessage = "You can't upload image which is larger than 4MB.";
            this.image_box_dialog.hide();
            return;
        }
        var file = input.files[0];
        this.temp_image_origin = file;
        var img = new Image;
        img.onload = function () {
            jQuery('#cropper').cropper('replace', img.src);
            jQuery('#cropper').cropper('crop');
            // .cropper('clear');
            // window.URL.revokeObjectURL(img.src);
        };
        img.src = window.URL.createObjectURL(file);
    };
    MainInfoComponent.prototype.saveImage = function () {
        var canvasData = jQuery('#cropper').cropper('getCroppedCanvas');
        // this.image_data = canvasData.toDataURL();
        this.model.image_url = canvasData.toDataURL();
        var me = this;
        canvasData.toBlob(function (blob) {
            me.model.image = me.blobToFile(blob, "image");
        }, "image/jpeg", 0.75);
        jQuery('#profile-image-viewer').attr('src', this.model.image_url);
    };
    MainInfoComponent.prototype.blobToFile = function (blob, name) {
        blob.lastModifiedDate = new Date();
        blob.name = name;
        var file = new File([blob], name, { type: blob.type, lastModified: blob.lastModifiedDate });
        return file;
    };
    ;
    MainInfoComponent.prototype.updateProfile = function (profileForm) {
        var _this = this;
        this.model.birthday = jQuery('#input-birthday').val();
        if (!profileForm.form.valid || this.model.birthday == "") {
            this.errorMessage = this.tr("FILL_ALL_REQUIRE_FIELDS");
            return;
        }
        // this.model.image = this.image_data;
        // if(this.image_data != null && this.image_data.src != this.model.image_origin){
        //   this.model.image_origin = this.temp_image_origin;
        // }
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.updateProfile(this.model).subscribe(function (response) {
            var result = response.json();
            if (result.success) {
                _this.successMessage = _this.tr("SUCCESS_MESSAGE");
                _this.errorMessage = "";
                _this.model.image_url = result.data.image_url;
                _this.authService.validateToken();
            }
            else {
                _this.errorMessage = _this.tr("UPDATE_FAILED"); //"Please check your email and password again.";
            }
            _this.appState.closeLoading();
        });
    };
    MainInfoComponent.prototype.ngOnInit = function () {
        if (jQuery().datepicker) {
            jQuery('.date-picker').datepicker({
                rtl: false,
                orientation: "left",
                autoclose: true
            });
        }
        if (this.authService.isLoggedIn() == __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["b" /* USER_SIGNED_INFO */].SIGNED_IN) {
            jQuery('#profile-image-viewer').attr('src', this.model.image_url);
            jQuery('#input-birthday').val(this.model.birthday);
        }
        var me = this;
        jQuery('#cropper').cropper({
            aspectRatio: 1,
            // preview: '#crop-preview-pan',
            cropend: function (e) {
                // let canvasData = jQuery('#cropper').cropper('getCroppedCanvas');
                // delete me.temp_image_data.image;
                // me.temp_image_data.image = canvasData.toDataURL();
                // jQuery('#crop-preview-pan').attr('src', me.temp_image_data.image);
            },
            ready: function (e) {
                jQuery('#cropper').cropper('crop');
                console.log("ASDFASDf");
            }
        });
    };
    MainInfoComponent.prototype.tr = function (tran) {
        return this.lang.tr("profile." + tran);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('image_box_dialog'), 
        __metadata('design:type', Object)
    ], MainInfoComponent.prototype, "image_box_dialog", void 0);
    MainInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-info',
            template: __webpack_require__(984),
            styles: [__webpack_require__(933)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */]) === 'function' && _e) || Object])
    ], MainInfoComponent);
    return MainInfoComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/main-info.component.js.map

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_box_component__ = __webpack_require__(755);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__my_box_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_box_type__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyBoxComponent = (function () {
    function MyBoxComponent(authService, lang, router, appState, profileService) {
        var _this = this;
        this.authService = authService;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.profileService = profileService;
        this.errorMessage = "";
        this.successMessage = "";
        this.dialog_errorMessage = "";
        this.device_id = -1;
        this.dev_index = -1;
        this.USER_TYPE = __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["c" /* USER_TYPE */];
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["b" /* USER_SIGNED_INFO */];
        this.country_names = {
            CNY: "China",
            USD: "USA",
            EUR: "Europe"
        };
        this.country_codes = ["CNY", "USD", "EUR"];
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_box_type__["a" /* Box */]();
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.getBoxes().subscribe(function (result) {
            if (result)
                _this.errorMessage = "";
            else
                _this.errorMessage = _this.tr("GET_FAILED");
            _this.appState.closeLoading();
        });
    }
    MyBoxComponent.prototype.createBox = function (addboxForm) {
        var _this = this;
        console.log(addboxForm);
        var dev = this.model.device_id;
        if (!addboxForm.form.valid || parseInt(dev) <= 0) {
            this.errorMessage = this.tr("FILL_ALL_ICON_FIELDS");
            return;
        }
        var box = new __WEBPACK_IMPORTED_MODULE_6__model_box_type__["a" /* Box */]();
        box.device_id = this.model.device_id;
        box.country_code = this.model.country_code;
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.addBox(this.model).subscribe(function (result) {
            if (result.success) {
                _this.errorMessage = "";
                _this.add_box_dialog.hide();
            }
            else
                _this.errorMessage = result.message;
            _this.appState.closeLoading();
        });
    };
    MyBoxComponent.prototype.editBox = function (editboxForm) {
        var _this = this;
        if (!editboxForm.form.valid) {
            this.errorMessage = this.tr("FILL_ALL_ICON_FIELDS");
            return;
        }
        var box = new __WEBPACK_IMPORTED_MODULE_6__model_box_type__["a" /* Box */](); //this.profileService.boxes[this.dev_index];
        box.device_id = this.profileService.boxes[this.dev_index].device_id;
        box.country_code = this.model.country_code;
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.updateBox(this.model).subscribe(function (result) {
            if (result) {
                _this.profileService.boxes[_this.dev_index].country_code = _this.model.country_code;
                _this.errorMessage = "";
                _this.edit_box_dialog.hide();
            }
            else
                _this.errorMessage = _this.tr("EDIT_BOX_FAILED");
            _this.appState.closeLoading();
        });
    };
    MyBoxComponent.prototype.removeBox = function () {
        var _this = this;
        var box = this.profileService.boxes[this.dev_index];
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.removeBox(box).subscribe(function (result) {
            if (result) {
                _this.errorMessage = "";
                _this.profileService.boxes.splice(_this.dev_index, 1);
            }
            else
                _this.errorMessage = _this.tr("REMOVE_BOX_FAILED");
            _this.appState.closeLoading();
        });
    };
    MyBoxComponent.prototype.resetBox = function () {
        var _this = this;
        var box = this.profileService.boxes[this.dev_index];
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.resetBox(box).subscribe(function (result) {
            if (result) {
                _this.errorMessage = "";
                _this.profileService.boxes[_this.dev_index].deposit_amount = 0;
                _this.successMessage = _this.tr("RESET_SUCCESS");
            }
            else
                _this.errorMessage = _this.tr("RESET_BOX_FAILED");
            _this.appState.closeLoading();
        });
    };
    MyBoxComponent.prototype.ngOnInit = function () {
    };
    MyBoxComponent.prototype.tr = function (tran) {
        return this.lang.tr("profile." + tran);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('add_box_dialog'), 
        __metadata('design:type', Object)
    ], MyBoxComponent.prototype, "add_box_dialog", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('edit_box_dialog'), 
        __metadata('design:type', Object)
    ], MyBoxComponent.prototype, "edit_box_dialog", void 0);
    MyBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-box',
            template: __webpack_require__(985),
            styles: [__webpack_require__(934)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */]) === 'function' && _e) || Object])
    ], MyBoxComponent);
    return MyBoxComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/my-box.component.js.map

/***/ }),

/***/ 756:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_donate_component__ = __webpack_require__(757);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__my_donate_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 757:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_donate_type__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyDonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyDonateComponent = (function () {
    function MyDonateComponent(lang, router, appState, generalService, onePageService, profileService, elementRef) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.profileService = profileService;
        this.elementRef = elementRef;
        this.errorMessage = "";
        this.successMessage = "";
        this.model = new __WEBPACK_IMPORTED_MODULE_7__model_donate_type__["a" /* Donate */]();
        this.appState.setLoading('Loading ...');
        this.profileService.getDonate().toPromise()
            .then(function (result) {
            if (result) {
                _this.model = profileService.myDonate;
            }
            else
                _this.errorMessage = 'Donate Load Error';
            _this.appState.closeLoading();
        });
    }
    MyDonateComponent.prototype.ngOnInit = function () {
    };
    MyDonateComponent.prototype.saveDonate = function (contactForm) {
        var _this = this;
        var imageFile = jQuery(this.elementRef.nativeElement).find('.imageFile')[0];
        if (!contactForm.form.valid) {
            this.errorMessage = 'Please fill all required fields.';
            return;
        }
        if (imageFile.files.length != 0) {
            this.model.picture = imageFile.files[0];
        }
        this.appState.setLoading('Saving...');
        this.profileService.saveDonate(this.model).subscribe(function (result) {
            if (result) {
                _this.errorMessage = "";
                _this.successMessage = "Donate Successfully saved";
            }
            else
                _this.errorMessage = 'Donate Save Error';
            _this.appState.closeLoading();
        }, function (error) {
        });
    };
    MyDonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-donate',
            template: __webpack_require__(986),
            styles: [__webpack_require__(935)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__profile_service__["a" /* ProfileService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _g) || Object])
    ], MyDonateComponent);
    return MyDonateComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/my-donate.component.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__my_member_component__ = __webpack_require__(759);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__my_member_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_member_type__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select__ = __webpack_require__(967);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyMemberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyMemberComponent = (function () {
    function MyMemberComponent(authService, lang, router, appState, profileService) {
        var _this = this;
        this.authService = authService;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.profileService = profileService;
        this.errorMessage = "";
        this.successMessage = "";
        this.dialog_errorMessage = "";
        this.dev_index = -1;
        this.user_boxes = [];
        this.country_names = { CNY: "China", USD: "USA", EUR: "Europe" };
        this.country_codes = ["CNY", "USD", "EUR"];
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_member_type__["a" /* Member */]();
        this.profileService.getMembers().subscribe(function (result) {
            if (result)
                _this.errorMessage = "";
            else
                _this.errorMessage = _this.tr("GET_FAILED");
            _this.appState.closeLoading();
        });
    }
    MyMemberComponent.prototype.reloadMemberData = function () {
        var _this = this;
        this.profileService.getMembers().subscribe(function (result) {
            if (result)
                _this.errorMessage = "";
            else
                _this.errorMessage = _this.tr("GET_FAILED");
            _this.appState.closeLoading();
        });
    };
    MyMemberComponent.prototype.refreshBox = function (data) {
        console.log("box data: ", data);
        var boxes = [];
        for (var i = 0; i < data.length; i++) {
            boxes.push(data[i].id);
        }
        this.model.boxes = boxes;
    };
    MyMemberComponent.prototype.createMember = function (addmemberForm) {
        var _this = this;
        if (!addmemberForm.form.valid) {
            this.errorMessage = this.tr("FILL_ALL_ICON_FIELDS");
            return;
        }
        var member = new __WEBPACK_IMPORTED_MODULE_6__model_member_type__["a" /* Member */]();
        member.name = this.model.name;
        member.email = this.model.email;
        member.boxes = this.model.boxes;
        member.password = this.model.password;
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.addMember(this.model).toPromise()
            .then(function (result) {
            if (result.success) {
                _this.errorMessage = "";
                _this.reloadMemberData();
                _this.add_member_dialog.hide();
            }
            else
                _this.errorMessage = result.message;
            _this.appState.closeLoading();
        });
    };
    MyMemberComponent.prototype.editMember = function (editmemberForm) {
        var _this = this;
        if (!editmemberForm.form.valid) {
            this.errorMessage = this.tr("FILL_ALL_ICON_FIELDS");
            return;
        }
        var member = new __WEBPACK_IMPORTED_MODULE_6__model_member_type__["a" /* Member */]();
        member.id = this.profileService.members[this.dev_index].id;
        member.name = this.model.name;
        member.email = this.model.email;
        member.boxes = this.model.boxes;
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.updateMember(this.model).toPromise()
            .then(function (result) {
            if (result.success) {
                _this.profileService.members[_this.dev_index].name = _this.model.name;
                _this.profileService.members[_this.dev_index].email = _this.model.email;
                _this.errorMessage = "";
                _this.edit_member_dialog.hide();
                _this.reloadMemberData();
            }
            else
                _this.errorMessage = result.message;
            _this.appState.closeLoading();
        });
    };
    MyMemberComponent.prototype.removeMember = function () {
        var _this = this;
        var member = this.profileService.members[this.dev_index];
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.profileService.removeMember(member).toPromise()
            .then(function (result) {
            if (result) {
                _this.errorMessage = "";
                _this.profileService.members.splice(_this.dev_index, 1);
            }
            else
                _this.errorMessage = _this.tr("REMOVE_MEMBER_FAILED");
            _this.appState.closeLoading();
        });
    };
    MyMemberComponent.prototype.array_to_string = function (array) {
        var text = "";
        for (var i = 0; i < array.length; i++) {
            text += array[i];
            if (i != array.length - 1)
                text += ", ";
        }
        return text;
    };
    MyMemberComponent.prototype.ngOnInit = function () {
    };
    MyMemberComponent.prototype.tr = function (tran) {
        return this.lang.tr("profile." + tran);
    };
    MyMemberComponent.prototype.showEditDialog = function (member) {
        member.secretCodes = new Array(member.boxes.length);
        member.secretCodes.fill("");
        this.model = JSON.parse(JSON.stringify(member));
        console.log(this.model);
        this.edit_member_dialog.show();
    };
    MyMemberComponent.prototype.showAddDialog = function () {
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_member_type__["a" /* Member */]();
        this.add_member_dialog.show();
    };
    MyMemberComponent.prototype.customTrackBy = function (index, obj) {
        return index;
    };
    MyMemberComponent.prototype.addBoxToCreate = function () {
        this.model.boxes.push(0);
        this.model.secretCodes.push("");
    };
    MyMemberComponent.prototype.removeBoxToCreate = function () {
        this.model.boxes.splice(this.model.boxes.length - 1, 1);
        this.model.secretCodes.splice(this.model.secretCodes.length - 1, 1);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('add_form_box_select'), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select__["SelectComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select__["SelectComponent"]) === 'function' && _a) || Object)
    ], MyMemberComponent.prototype, "add_form_box_select", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('edit_form_box_select'), 
        __metadata('design:type', (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select__["SelectComponent"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7_ng2_select_ng2_select__["SelectComponent"]) === 'function' && _b) || Object)
    ], MyMemberComponent.prototype, "edit_form_box_select", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('edit_member_dialog'), 
        __metadata('design:type', Object)
    ], MyMemberComponent.prototype, "edit_member_dialog", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('add_member_dialog'), 
        __metadata('design:type', Object)
    ], MyMemberComponent.prototype, "add_member_dialog", void 0);
    MyMemberComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-my-member',
            template: __webpack_require__(987),
            styles: [__webpack_require__(936)]
        }), 
        __metadata('design:paramtypes', [(typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ProfileService */]) === 'function' && _g) || Object])
    ], MyMemberComponent);
    return MyMemberComponent;
    var _a, _b, _c, _d, _e, _f, _g;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/my-member.component.js.map

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProfileComponent = (function () {
    function ProfileComponent(authService, lang, router, appState, profile) {
        this.authService = authService;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.profile = profile;
        this.USER_TYPE = __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["c" /* USER_TYPE */];
        this.serverDate = Date.now();
        this.curTime = 3600 * 24;
        this.appState.set("one_page_menu_selected", 3);
        // this.refreshTimer();
    }
    ProfileComponent.prototype.refreshTimer = function () {
        // this.profile.getServerTime().subscribe(response => {
        //   let res:any = response;
        //   res = res._body;
        //   // res = res.slice(0, 10) + 'T' + res.slice(11, 8);
        //   console.log("Time: ", res);
        //   let timer = TimerObservable.create(2000, 1000);
        //   let _time = new Date(res);
        //   this.serverDate = _time;
        //   console.log(_time);
        //   console.log(_time.getHours());
        //   this.curTime = this.curTime - (_time.getHours() * 3600 + _time.getMinutes() * 60 + _time.getSeconds());
        //   this.timer = timer.subscribe(tim => {
        //     if(this.curTime == 0){
        //       this.curTime = 3600 * 24;
        //       let me = this;
        //       setTimeout(function(){me.refreshTimer();}, 1000);
        //     }
        //     else
        //       this.curTime --;
        //   });
        // }, error => null);
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        // this.timer.unsubscribe();
    };
    ProfileComponent.prototype.tr = function (tran) {
        return this.lang.tr("profile." + tran);
    };
    ProfileComponent.prototype.hour = function () {
        var hour = Math.floor(this.curTime / 3600);
        if (hour < 10)
            return '0' + hour;
        else
            return '' + hour;
    };
    ProfileComponent.prototype.minutes = function () {
        var mins = Math.floor((this.curTime / 60) % 60);
        if (mins < 10)
            return '0' + mins;
        else
            return '' + mins;
    };
    ProfileComponent.prototype.seconds = function () {
        var secs = Math.floor(this.curTime % 60);
        if (secs < 10)
            return '0' + secs;
        else
            return '' + secs;
    };
    ProfileComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(988),
            styles: [__webpack_require__(937)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__profile_service__["a" /* ProfileService */]) === 'function' && _e) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/profile.component.js.map

/***/ }),

/***/ 761:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report_component__ = __webpack_require__(762);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__report_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ReportComponent = (function () {
    // public model:ContactMessage;
    function ReportComponent(lang, router, appState, authenticate, generalService, onePageService) {
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.authenticate = authenticate;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.errorMessage = "";
        this.successMessage = "";
        this.avaliable_money = 0;
        this.curPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = 10;
        this.transaction_type = ['', '', 'Member Paid', 'Withdraw', 'Fee'];
        this.password = "";
        this.paid_amount = 0;
        this.errorPaidMessage = "";
        this.appState.set("one_page_menu_selected", 8);
        this.refreshTable({ page: this.curPage });
    }
    ReportComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.appState.setLoading('Loading Transaction Histroy...');
        this.onePageService.getTransactionHistory().toPromise()
            .then(function (result) {
            if (result.success) {
                console.log(result);
                _this.avaliable_money = result.avaliable_money;
                var lastPageID = (_this.curPage * _this.itemsPerPage > result.invoiceData.length) ? result.invoiceData.length : _this.curPage * _this.itemsPerPage;
                _this.totalCount = result.invoiceData.length;
                _this.transactions = [];
                for (var i = (_this.curPage - 1) * _this.itemsPerPage; i < lastPageID; i++) {
                    _this.transactions[_this.transactions.length] = result.invoiceData[i];
                }
                console.log(_this.transactions);
            }
            else {
                _this.errorMessage = "Transaction History Load Error";
            }
            _this.appState.closeLoading();
        });
    };
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent.prototype.initPaidData = function () {
        this.paid_amount = this.avaliable_money;
        this.password = "";
    };
    ReportComponent.prototype.getpaid = function () {
        var _this = this;
        if (this.paid_amount > this.avaliable_money) {
            this.errorPaidMessage = 'Inputed Amount is lager than avaliable Amount.';
            return;
        }
        this.appState.setLoading('Get Paid...');
        this.onePageService.getPaid(this.paid_amount, this.password).toPromise()
            .then(function (result) {
            if (result) {
                _this.successMessage = 'Get Paid Success';
                _this.refreshTable({ page: _this.curPage });
                _this.appState.closeLoading();
                _this.get_paid_dialog.hide();
            }
            else {
                _this.errorPaidMessage = "Get Paid Error. Please check your password";
                _this.appState.closeLoading();
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('get_paid_dialog'), 
        __metadata('design:type', Object)
    ], ReportComponent.prototype, "get_paid_dialog", void 0);
    ReportComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(989),
            styles: [__webpack_require__(938)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _f) || Object])
    ], ReportComponent);
    return ReportComponent;
    var _a, _b, _c, _d, _e, _f;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/report.component.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__score_board_component__ = __webpack_require__(764);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__score_board_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 764:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScoreBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ScoreBoardComponent = (function () {
    function ScoreBoardComponent(generalService, authService, lang, router, appState) {
        this.generalService = generalService;
        this.authService = authService;
        this.lang = lang;
        this.router = router;
        this.appState = appState;
        this.errorMessage = "";
        this.successMessage = "";
        this.curPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = 10;
        this.current_item = 0;
        this.searchString = "";
        this.typeStrings = [this.tr("INDIVIDUAL"), this.tr("INSTITUTION"), this.tr("SCHOOL")];
        this.sortField = "id";
        this.sortDirection = false;
        this.loadingCount = 0;
        this.isDestroyed = false;
        this.searchFilter = "name";
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["b" /* USER_SIGNED_INFO */];
        this.USER_TYPE = __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["c" /* USER_TYPE */];
        this.ageGroup = {
            4: "3~5",
            6: "5~8",
            9: "8~11",
            12: "11~13",
            15: "13~18",
            20: "18~"
        };
        this.scores = [];
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.refreshTable({ page: this.curPage });
        this.appState.set("one_page_menu_selected", 2);
    }
    ScoreBoardComponent.prototype.refreshTable = function (event) {
        var _this = this;
        this.loadingCount++;
        this.generalService.getScores((event.page - 1) * this.itemsPerPage, this.itemsPerPage, this.sortField, this.sortDirection, this.searchString, this.searchFilter).toPromise()
            .then(function (result) {
            if (result) {
                _this.errorMessage = "";
                _this.totalCount = _this.generalService.totalCount;
                _this.scores = _this.generalService.scores;
                _this.loadingCount--;
                _this.current_item = 0;
                if (_this.loadingCount == 0 && !_this.isDestroyed) {
                    var me = _this;
                }
            }
            else {
                _this.errorMessage = _this.tr("GET_FAILED"); //"Please check your email and password again.";
            }
            _this.appState.closeLoading();
        });
    };
    ScoreBoardComponent.prototype.sort = function (sortField) {
        if (this.sortField == sortField) {
            if (!this.sortDirection)
                this.sortDirection = true;
            else {
                this.sortField = "id";
                this.sortDirection = false;
            }
        }
        else {
            this.sortField = sortField;
            this.sortDirection = false;
        }
        this.refreshTable({ page: this.curPage });
    };
    ScoreBoardComponent.prototype.search = function () {
        this.refreshTable({ page: this.curPage });
    };
    ScoreBoardComponent.prototype.ngOnInit = function () {
        this.isDestroyed = false;
    };
    ScoreBoardComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    ScoreBoardComponent.prototype.followUser = function () {
        var _this = this;
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.generalService.followUser(this.scores[this.current_item].id, !this.scores[this.current_item].is_current_user_following).subscribe(function (res) {
            if (res) {
                _this.scores[_this.current_item].is_current_user_following = !_this.scores[_this.current_item].is_current_user_following;
            }
            _this.appState.closeLoading();
            if (_this.scores[_this.current_item].is_current_user_following)
                _this.scores[_this.current_item].followingUsers.push(_this.authService.currentUser);
            else {
                for (var i = 0; i < _this.scores[_this.current_item].followingUsers.length; i++) {
                    if (_this.scores[_this.current_item].followingUsers[i].id == _this.authService.currentUser.id) {
                        _this.scores[_this.current_item].followingUsers.splice(i, 1);
                    }
                }
            }
        }, function (error) {
            _this.errorMessage = "Network Error.";
            _this.appState.closeLoading();
        });
    };
    ScoreBoardComponent.prototype.tr = function (tran) {
        return this.lang.tr("scoreboard." + tran);
    };
    ScoreBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-score-board',
            template: __webpack_require__(990),
            styles: [__webpack_require__(939)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__general_service__["a" /* GeneralService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _e) || Object])
    ], ScoreBoardComponent);
    return ScoreBoardComponent;
    var _a, _b, _c, _d, _e;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/score-board.component.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sell_board_component__ = __webpack_require__(766);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sell_board_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_sell_box_type__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_donate_type__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var SellBoardComponent = (function () {
    // public card_number:string="";
    // public cvv_code:string="";
    // public exp_year:string="2016";
    // public exp_month:number=3;
    // public title:string = "Cool CBox";
    // public amount:number = 1;
    // public price:number = 47.01;
    // public type:number = 1;
    // public detail:string = "Lorem ipsum dolor ut sit ame dolore adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.";
    function SellBoardComponent(lang, router, authenticateService, appState, generalService, onePageService, route, profileService) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.authenticateService = authenticateService;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.route = route;
        this.profileService = profileService;
        this.errorMessage = "";
        this.sellBoxes = [];
        this.buy_count = 1;
        this.donate_id = 0;
        this.serverUrl = __WEBPACK_IMPORTED_MODULE_8__environments__["a" /* environment */].serverUrl;
        this.appState.set("one_page_menu_selected", 6);
        this.curSellBox = new __WEBPACK_IMPORTED_MODULE_9__model_sell_box_type__["a" /* SellBox */]();
        this.selDonate = new __WEBPACK_IMPORTED_MODULE_10__model_donate_type__["a" /* Donate */]();
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.token = authenticateService.token;
        this.onePageService.getSellBoxes().toPromise()
            .then(function (result) {
            if (result.success) {
                _this.sellBoxes = result.data;
                _this.curSellBox = _this.sellBoxes[0];
                _this.errorMessage = "";
            }
            else {
                _this.errorMessage = _this.tr("GET_FAILED");
            }
            _this.appState.closeLoading();
        });
        this.appState.setLoading('Loading ...');
        this.profileService.getAllDonates(0, 5, '', 'name').toPromise()
            .then(function (result) {
            if (result != true)
                _this.errorMessage = 'Donates Load Error';
            _this.appState.closeLoading();
        });
    }
    SellBoardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!jQuery.fancybox) {
            return;
        }
        jQuery(".fancybox-fast-view").fancybox();
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
            jQuery('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
        this.route.params.forEach(function (params) {
            _this.paySuccess = params && params['pay_success'];
            console.log(params);
        });
        // this.initFancybox();
    };
    SellBoardComponent.prototype.initFancybox = function () {
        if (!jQuery.fancybox) {
            return;
        }
        jQuery(".fancybox-fast-view").fancybox();
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
            jQuery('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
    };
    SellBoardComponent.prototype.ngOnDestroy = function () {
    };
    SellBoardComponent.prototype.tr = function (tran) {
        return this.lang.tr("sell." + tran);
    };
    SellBoardComponent.prototype.changeAmount = function (num) {
        this.buy_count += num;
        if (this.buy_count == 0) {
            this.buy_count = 1;
        }
    };
    SellBoardComponent.prototype.selectBox = function (id) {
        this.curSellBox = this.sellBoxes[id];
        for (var _i = 0, _a = this.sellBoxes; _i < _a.length; _i++) {
            var sb = _a[_i];
            if (sb.id == id) {
                this.curSellBox = sb;
                break;
            }
        }
    };
    SellBoardComponent.prototype.donateOverview = function () {
        this.selDonate = new __WEBPACK_IMPORTED_MODULE_10__model_donate_type__["a" /* Donate */]();
        for (var i = 0; i < this.profileService.donates.length; i++) {
            if (this.profileService.donates[i].id == this.donate_id) {
                this.selDonate = this.profileService.donates[i];
            }
        }
    };
    SellBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sell-board',
            template: __webpack_require__(991),
            styles: [__webpack_require__(940)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], SellBoardComponent);
    return SellBoardComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/sell-board.component.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sell_donate_component__ = __webpack_require__(768);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sell_donate_component__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__language_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__state_service__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__general_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__one_page_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__authenticate_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__model_sell_box_type__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__model_donate_type__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellDonateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var SellDonateComponent = (function () {
    function SellDonateComponent(lang, router, authenticateService, appState, generalService, onePageService, route, profileService) {
        var _this = this;
        this.lang = lang;
        this.router = router;
        this.authenticateService = authenticateService;
        this.appState = appState;
        this.generalService = generalService;
        this.onePageService = onePageService;
        this.route = route;
        this.profileService = profileService;
        this.errorMessage = "";
        this.sellBoxes = [];
        this.buy_count = 1;
        this.donateIds = [];
        this.quantities = [];
        this.USER_SIGNED_INFO = __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["b" /* USER_SIGNED_INFO */];
        this.searchString = "";
        this.searchFilter = "name";
        this.curPage = 1;
        this.totalCount = 0;
        this.itemsPerPage = 5;
        this.isSelectedAll = false;
        this.appState.set("one_page_menu_selected", 9);
        this.curSellBox = new __WEBPACK_IMPORTED_MODULE_8__model_sell_box_type__["a" /* SellBox */]();
        this.selDonate = new __WEBPACK_IMPORTED_MODULE_9__model_donate_type__["a" /* Donate */]();
        this.appState.setLoading(this.tr("LOADING_TEXT"));
        this.token = authenticateService.token;
        this.onePageService.getSellBoxes().toPromise()
            .then(function (result) {
            if (result.success) {
                _this.sellBoxes = result.data;
                _this.curSellBox = _this.sellBoxes[0];
                _this.errorMessage = "";
            }
            else {
                _this.errorMessage = _this.tr("GET_FAILED");
            }
            _this.appState.closeLoading();
        });
        this.refreshDonate({ page: this.curPage });
        //  this.appState.setLoading('Loading ...');
        //  this.profileService.getAllDonates().toPromise()
        //   .then(result => {
        //     if(result != true)
        //       this.errorMessage = 'Donates Load Error';
        //     this.appState.closeLoading();
        //   });
    }
    SellDonateComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!jQuery.fancybox) {
            return;
        }
        jQuery(".fancybox-fast-view").fancybox();
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
            jQuery('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
        this.route.params.forEach(function (params) {
            _this.paySuccess = params && params['pay_success'];
            console.log(params);
        });
        // this.initFancybox();
    };
    SellDonateComponent.prototype.initFancybox = function () {
        if (!jQuery.fancybox) {
            return;
        }
        jQuery(".fancybox-fast-view").fancybox();
        if (jQuery(".fancybox-button").size() > 0) {
            jQuery(".fancybox-button").fancybox({
                groupAttr: 'data-rel',
                prevEffect: 'none',
                nextEffect: 'none',
                closeBtn: true,
                helpers: {
                    title: {
                        type: 'inside'
                    }
                }
            });
            jQuery('.fancybox-video').fancybox({
                type: 'iframe'
            });
        }
    };
    SellDonateComponent.prototype.ngOnDestroy = function () {
    };
    SellDonateComponent.prototype.tr = function (tran) {
        return this.lang.tr("sell." + tran);
    };
    // changeAmount(num:number){
    //   this.buy_count += num;
    //   if (this.buy_count == 0) {
    //     this.buy_count = 1;
    //   }
    // }
    SellDonateComponent.prototype.selectBox = function (id) {
        this.curSellBox = this.sellBoxes[id];
        for (var _i = 0, _a = this.sellBoxes; _i < _a.length; _i++) {
            var sb = _a[_i];
            if (sb.id == id) {
                this.curSellBox = sb;
                break;
            }
        }
    };
    // donateOverview(){
    //   this.selDonate = new Donate();
    //   for (let i = 0; i < this.profileService.donates.length; i++) {
    //       if (this.profileService.donates[i].id == this.donate_id) {
    //         this.selDonate = this.profileService.donates[i];
    //       }
    //   }
    // }
    SellDonateComponent.prototype.showPayDlg = function (donate_id) {
        this.quantities = [];
        this.donateIds = [];
        this.buy_count = 0;
        for (var i = 0; i < this.profileService.donates.length; i++) {
            if (this.profileService.donates[i].isSelected) {
                this.buy_count += this.profileService.donates[i].quantity;
                this.quantities.push(this.profileService.donates[i].quantity);
                this.donateIds.push(this.profileService.donates[i].id);
            }
        }
        if (this.buy_count < 1)
            return;
        this.pay_box_dialog.show();
    };
    SellDonateComponent.prototype.approve = function (index) {
        var _this = this;
        var donate_id = this.profileService.donates[index].id;
        this.appState.setLoading('Loading ...');
        this.profileService.approveDonate(donate_id).toPromise()
            .then(function (result) {
            if (result != true)
                _this.errorMessage = "Can't approve. Please check the site now.";
            else
                _this.profileService.donates[index].del_flg = 0;
            _this.appState.closeLoading();
        });
    };
    SellDonateComponent.prototype.handleKeyDown = function (event) {
        if (event.keyCode == 13) {
            this.search();
        }
    };
    SellDonateComponent.prototype.search = function () {
        this.refreshDonate({ page: this.curPage });
    };
    SellDonateComponent.prototype.refreshDonate = function (event) {
        var _this = this;
        this.appState.setLoading('Loading ...');
        this.profileService.getAllDonates((event.page - 1) * this.itemsPerPage, this.itemsPerPage, this.searchString, this.searchFilter).toPromise()
            .then(function (result) {
            if (result != true)
                _this.errorMessage = 'Donates Load Error';
            _this.totalCount = _this.profileService.donate_count;
            _this.appState.closeLoading();
        });
        //    this.loadingCount ++;
        //    this.generalService.getScores((event.page - 1)*this.itemsPerPage, this.itemsPerPage, this.sortField, this.sortDirection, this.searchString).toPromise()
        //     .then(result => {
        //       if(result)
        //       {
        //         this.errorMessage = "";
        //         this.totalCount = this.generalService.totalCount;
        //         this.scores = this.generalService.scores;
        //         this.loadingCount --;
        //         if(this.loadingCount == 0 && !this.isDestroyed){
        //           let me = this;
        //          //  setTimeout(function(){me.refreshTable({page: me.curPage});}, 5000);
        //         }
        //       }
        //       else
        //       {
        //         this.errorMessage = this.tr("GET_FAILED");//"Please check your email and password again.";
        //       }
        //       this.appState.closeLoading();
        //     });
    };
    Object.defineProperty(SellDonateComponent.prototype, "donatesSelected", {
        get: function () {
            var flag = true;
            if (this.profileService.donates == null)
                return false;
            for (var i = 0; i < this.profileService.donates.length; i++) {
                flag = flag && this.profileService.donates[i].isSelected;
            }
            return flag;
        },
        enumerable: true,
        configurable: true
    });
    SellDonateComponent.prototype.toggleCheckboxes = function () {
        if (this.profileService.donates == null)
            return;
        if (this.donatesSelected) {
            for (var i = 0; i < this.profileService.donates.length; i++) {
                this.profileService.donates[i].isSelected = false;
            }
        }
        else {
            for (var i = 0; i < this.profileService.donates.length; i++) {
                this.profileService.donates[i].isSelected = true;
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('pay_box_dialog'), 
        __metadata('design:type', Object)
    ], SellDonateComponent.prototype, "pay_box_dialog", void 0);
    SellDonateComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sell-donate',
            template: __webpack_require__(992),
            styles: [__webpack_require__(941)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__language_service__["a" /* LanguageService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["a" /* AuthenticateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_7__authenticate_service__["a" /* AuthenticateService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__state_service__["a" /* StateService */]) === 'function' && _d) || Object, (typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__general_service__["a" /* GeneralService */]) === 'function' && _e) || Object, (typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__one_page_service__["a" /* OnePageService */]) === 'function' && _f) || Object, (typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _g) || Object, (typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_6__profile_profile_service__["a" /* ProfileService */]) === 'function' && _h) || Object])
    ], SellDonateComponent);
    return SellDonateComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());
//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/sell-donate.component.js.map

/***/ }),

/***/ 769:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(783);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(776);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(772);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(778);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(777);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(775);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(774);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(782);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(771);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(770);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(780);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(773);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(781);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(779);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(784);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1025);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/polyfills.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environment__ = __webpack_require__(382);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__environment__["a"]; });

//# sourceMappingURL=E:/Php_projects/cbox/frontend/src/index.js.map

/***/ }),

/***/ 923:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "div.form-group div.input-icon i{\n  padding-top: 4px;\n}\n.form-control{\n\theight: 34px;\n}\n.login .content .form-actions{\n\t\tbackground: #fff;\n    border-bottom: 0px;\n}\n.login .content .form-control:active, .login .content .form-control{\n\t\tbackground: #fff;\n}\nselect.form-control option{\n\theight: 24px;\n}\n.show{\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "p{\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 925:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".content-form-page{\r\n    background: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 926:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".content-form-page{\r\n    background: transparent;\r\n}\r\n\r\n.leader-tile{\r\n    width: 100%;\r\n    display: -webkit-inline-box;\r\n    display: -ms-inline-flexbox;\r\n    display: inline-flex;\r\n    margin-bottom: 10px;\r\n    border: 1px solid #eee;\r\n    padding: 20px;\r\n}\r\n.avatar{\r\n    width: 100px;\r\n    height: 100px;\r\n}\r\n.page-content{\r\n    background: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 927:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".content-form-page{\r\n    background: transparent;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 928:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".portlet.light.bordered{\n  border: 0px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 929:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".sell-item-img{\r\n  width: 58px;\r\n  height: auto;\r\n  margin: 0 12px 12px 0;\r\n  border: 1px solid rgb(187, 186, 186);\r\n}\r\n\r\n.price-availability-block .price strong span {\r\n    font-size: 20px;\r\n}\r\n\r\n.price-availability-block .price strong {\r\n    color: #e84d1c;\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n}\r\n\r\n.price{\r\n  margin-top: 20px;\r\n}\r\n\r\n#amount{\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.btn.spinner{\r\n  background: #9a9a9a;\r\n  border-radius: 0px;\r\n  padding: 1px 6px;\r\n}\r\n\r\n.buy-btn{\r\n  margin-top: 20px;\r\n  width: 150px;\r\n  height: 40px;\r\n}\r\n\r\n.radio-item input:checked+label:after {\r\n    background: -webkit-linear-gradient(left top,transparent 49%,#e84d1c 49%,#e84d1c 100%);\r\n    background: -o-linear-gradient(left top,transparent 49%,#e84d1c 49%,#e84d1c 100%);\r\n    content: '7';\r\n    position: absolute;\r\n    right: -0.5rem;\r\n    bottom: -0.5rem;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    color: #fff;\r\n    font-family: tahoma;\r\n    font-size: 12px;\r\n    font-style: italic;\r\n    font-weight: bolder;\r\n    line-height: 2.8rem;\r\n    text-indent: 0.5rem;\r\n    overflow: hidden;\r\n    -webkit-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    -moz-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    -o-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    border-radius: 5px;\r\n}\r\n\r\n.radio-item input:checked+label {\r\n    border-color: #e84d1c;\r\n    position: relative;\r\n    color: #e84d1c;\r\n}\r\n\r\n.radio-item label {\r\n    color:#717171;\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    border: 1px solid #ceced0;\r\n    background-color: #fafafa;\r\n    min-width: 2rem;\r\n    padding: 0.5rem 1.2rem;\r\n    /*margin: 0 0.5rem 0.5rem 0;*/\r\n    max-width: 100%;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    border-radius: 0.3rem;\r\n\r\n}\r\n\r\n.radio-item{\r\n  margin-right: 5px;\r\n  padding: 0px;\r\n}\r\n\r\n.spinner-input{\r\n  text-align: center;\r\n  font-size: 13px;\r\n  height: 24px;\r\n}\r\n\r\n.main-box-img{\r\n  border: 2px solid #d2d2d2;\r\n  width: 100%;\r\n}\r\n\r\n.aKm {\r\n    background: rgba(255,255,255,.9);\r\n    border-width: 0 0 1px 0;\r\n    border-style: solid;\r\n    border-color: #d7d7d7;\r\n    height: 7px;\r\n    position: relative;\r\n    margin: 15px 0px 20px 0px;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n    background:#fe5555;\r\n}\r\n\r\n.product-other-images{\r\n    margin-top: 10px;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.donate-content{\r\n  padding: 5px;\r\n  border: 1px solid #545454;\r\n  margin:5px;\r\n}\r\n\r\n.donate-image{\r\n  width: 150px;\r\n  height: 150px;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.form-group-info{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.control-label{\r\n  padding: 5px 10px;\r\n}\r\n\r\ndiv.caption>button.search{\r\n  height: 34px;\r\n}\r\n\r\n.paging_bootstrap_number{\r\n  margin-top: 15px;\r\n}\r\n.transparent{\r\n  opacity: 0;\r\n}\r\n\r\nbutton.btn.search-filter{\r\n  background: #E54176;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px !important;\r\n  padding: 10px 22px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 930:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".tp-bullets.simplebullets.round .bullet{\r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 50% !important;\r\n    background: #d8d8d8;\r\n}\r\n.tp-bannershadow.tp-shadow1 {\tbackground-size:100% 100%; width:890px; height:60px; bottom:-60px}\r\n.tp-bannershadow.tp-shadow2 {\tbackground-size:100% 100%; width:890px; height:60px;bottom:-60px}\r\n.tp-bannershadow.tp-shadow3 {\tbackground-size:100% 100%; width:890px; height:60px;bottom:-60px}\r\nbody.page-header-fixed.page-sidebar-closed-hide-logo{\r\n\tbackground-color: #fff !important;\r\n}\r\n.portlet.light>.portlet-title>.caption>.caption-subject{\r\n  font-size: 22px !important;\r\n}\r\n.portlet-body{\r\n  padding-bottom: 0px;\r\n  padding-top: 5px;\r\n}\r\n.portlet.light.portlet-fit{\r\n  margin-bottom: 0px;\r\n}\r\n@media (min-width: 592px){\r\n  .col-custom-md{\r\n    width: 16.6%;\r\n  }\r\n  .col-custom-sd{\r\n    width: 12.5%;\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n  }\r\n  .col-custom-md-offset{\r\n    margin-left: 25%;\r\n  }\r\n}\r\n.mt-element-overlay .mt-overlay-1 .mt-overlay{\r\n  background-color: rgba(100,0,0, 0.2);\r\n}\r\n.mt-element-card .mt-card-item .mt-card-content .mt-card-name.small{\r\n  font-size: 13px;\r\n}\r\n.page-footer{\r\n  background-color: #000;\r\n  text-align: center;\r\n  padding: 20px;\r\n  height: 50px;\r\n}\r\n.page-footer-inner{\r\n  float: none;\r\n}\r\n\r\n.userback-button-container .userback-button {\r\n    position: fixed;\r\n    z-index: 10000200;\r\n    margin: 0;\r\n    border-radius: 3px 3px 0 0;\r\n    background-color: #3E3F3A;\r\n    background-image: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-family: Helvetica,Arial,sans-serif;\r\n    font-weight: bold;\r\n    letter-spacing: normal;\r\n    word-spacing: normal;\r\n    cursor: pointer;\r\n    -webkit-transition: all 0.2s;\r\n    transition: all 0.2s;\r\n    -webkit-font-smoothing: antialiased;\r\n    text-align: center;\r\n    padding: 0px;\r\n    left: auto;\r\n    right: -35px;\r\n    top: 30%;\r\n    width: 100px;\r\n    height: 25px;\r\n    border: 0px;\r\n    box-sizing: border-box;\r\n    -webkit-animation: feedbackZoomInUp 0.2s linear;\r\n            animation: feedbackZoomInUp 0.2s linear;\r\n    -webkit-transform: scale(1.0) rotate(270deg);\r\n            transform: scale(1.0) rotate(270deg);\r\n}\r\n.userback-button-container .userback-button:hover {\r\n    -webkit-transform: scale(1.1) rotate(270deg);\r\n            transform: scale(1.1) rotate(270deg);\r\n}\r\n\r\n.userback-button-container .userback-button button.btn{\r\n  padding: 3px 6px;\r\n}\r\n.owl-slider .item{\r\n  margin: 5px;\r\n}\r\n\r\n.ui-pnotify{\r\n  width: 320px;\r\n  cursor: auto;\r\n  right: 30px;\r\n  top: 65px;\r\n  position: fixed;\r\n  height: auto;\r\n  z-index: 9999;\r\n}\r\n.ui-pnotify-container{\r\n  box-shadow: 0px 2px 10px rgba(50, 50, 50, 0.5);\r\n  padding: 18px;\r\n  border: none;\r\n  height: 100%;\r\n  margin: 0;\r\n  border-radius: 4px!important;\r\n}\r\n\r\n.ui-pnotify .content-image .menu-icon {\r\n  font-size: 36px;\r\n  width: 40px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin-right: 12px;\r\n  display: block;\r\n  float: left;\r\n  text-align: center;\r\n  color: #f85d2c !important;\r\n}\r\n\r\n.ui-pnotify-button{\r\n  margin-top: 10px;\r\n  text-align: right;\r\n}\r\n\r\n.icon-cross:before {\r\n    content: \"\\E678\";\r\n}\r\n\r\n.ui-pnotify-closer{\r\n  cursor: pointer;\r\n  visibility: visible;\r\n  right: 8px;\r\n  position: absolute;\r\n  top: 4px;\r\n  font-size: 18px;\r\n  float: right;\r\n  margin-left: .2em;\r\n}\r\n\r\n\r\n#clockdiv{\r\n\tfont-family: sans-serif;\r\n\tcolor: #fff;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tfont-size: 30px;\r\n}\r\n\r\n#clockdiv > div{\r\n\t/*padding: 10px;*/\r\n\tborder-radius: 3px;\r\n\tbackground: rgba(0,0,0,0.3);\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#clockdiv div > span{\r\n\tpadding: 15px;\r\n\tborder-radius: 3px;\r\n\t/*background: #00816A;*/\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.leader-card-name{\r\n  font-family: sans-serif;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n.leader-card-address{\r\n  font-size: 15px;\r\n}\r\n\r\n.mt-element-card .mt-card-item .mt-card-avatar{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.mt-card-avatar-footer{\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n  width: 100%;\r\n}\r\n\r\n.mt-card-avatar-footer-section{\r\n  float: none;\r\n  padding: 15px 15px 0px 15px;\r\n}\r\n.page-content{\r\n  background: #f8f8f8;\r\n  padding-top: 50px;\r\n}\r\n.server-time-panel{\r\n  background: white;\r\n  border-bottom: 1px solid #eee;\r\n  height: 140px;\r\n  margin-bottom: 40px;\r\n  padding-top: 45px;\r\n  text-align: center;\r\n}\r\n.date-label{\r\n  background: #FAFAFA;\r\n  border: 1px solid #EAEAEA;\r\n  font-size: 4rem;\r\n  color: black;\r\n  padding: 16px 25px;\r\n  height: 80px;\r\n}\r\n.time-label{\r\n  width: 80px;\r\n  height: 80px;\r\n  line-height: 30px;\r\n  padding: 8px;\r\n  margin-left: 10px;\r\n  font-weight: bold;\r\n}\r\n.time-label p{\r\n  margin: 0px;\r\n}\r\n.time-label span{\r\n  font-size: 1.5rem;\r\n  color: #909090;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 931:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".header {\r\n  z-index: 999;\r\n}\r\n.page-footer{\r\n  background-color: #364150;\r\n  text-align: center;\r\n}\r\n.page-footer-inner{\r\n  float: none;\r\n}\r\n.header.scrolled{\r\n  position: fixed;\r\n  top: 0;\r\n  margin: auto;\r\n  z-index: 10000;\r\n  width: 100%;\r\n  background-color: #fff;\r\n  box-shadow: 0 3px 10px 0 rgba(0, 111, 186,.3);\r\n  opacity: 0.9;\r\n  -webkit-transition: all 1s;\r\n  transition: all 1s;\r\n  height: 60px;\r\n}\r\n.header-navigation>ul>li>a{\r\n  padding: 28px 12px 8px;\r\n}\r\n.header-navigation ul > li.active > a{\r\n  border-bottom: 2px solid #D51D59;\r\n  color: #D51D59;\r\n}\r\n.logo-mid{\r\n  float: left;\r\n  padding-top: 13px;\r\n}\r\n.header .logo-mid{\r\n  padding-top: 11px;\r\n}\r\n.phone-number{\r\n  display: inline-block;\r\n  font-size: 12px;\r\n  -webkit-transition: all 150ms ease-out;\r\n  transition: all 150ms ease-out;\r\n  padding: 0 20px;\r\n  border-radius: 5px;\r\n  height: 40px;\r\n  line-height: 40px;\r\n  margin-bottom: 10px;\r\n  text-align: center;\r\n  color: #fff;\r\n  background-color: #fd7062;\r\n  border-color: #fd7062;\r\n  font-weight: bold;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n}\r\n.phone-number:hover{\r\n  text-decoration: none;\r\n  opacity: 0.7;\r\n}\r\n.phone-number i{\r\n  font-size: 20px;\r\n  vertical-align: middle;\r\n  margin-right: 5px;\r\n}\r\n.menu-toggler{\r\n  display: none;\r\n  font-size: 30px;\r\n}\r\n\r\n.mobile-navigation{\r\n  background: #f1f1f1;\r\n}\r\n.mobile-menu-item {\r\n      padding: 10px!important;\r\n}\r\n\r\n@media (max-width: 800px){\r\n  img.logo-mid{\r\n    display: none;\r\n  }\r\n  img.logo-big{\r\n    width: 100%;\r\n    padding:0px 20px;\r\n  }\r\n  .main-menu-li{\r\n    display: none;\r\n  }\r\n\r\n  .menu-toggler{\r\n    display: inline;\r\n    padding: 0px!important;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 932:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "td, th{\r\n  text-align: center;\r\n}\r\n.modal-content{\r\n  border-radius: 5px !important;\r\n}\r\n.modal-header{\r\n  height: 55px;\r\n}\r\n.form-horizontal .form-group {\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\ndiv.alert{\r\n  max-width: 500px;\r\n  margin-left: auto;\r\n  margin-right: 45px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 933:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".fileinput-exists .fileinput-new, .fileinput-new .fileinput-exists{\r\n    display: block;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 934:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "td, th{\r\n  text-align: center;\r\n}\r\n.modal-content{\r\n  border-radius: 5px !important;\r\n}\r\n.modal-header{\r\n  height: 55px;\r\n}\r\n.form-horizontal .form-group {\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\ndiv.content-form-page{\r\n  background: #fff;\r\n  border: 1px solid #eee;\r\n  padding: 20px;\r\n}\r\nbutton.btn.add-box-btn{\r\n  background: #E54176;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 2px !important;\r\n  padding: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 935:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 936:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, "td, th{\r\n  text-align: center;\r\n}\r\n.modal-content{\r\n  border-radius: 5px !important;\r\n}\r\n.modal-header{\r\n  height: 55px;\r\n}\r\n.form-horizontal .form-group {\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.table .btn {\r\n  margin-right: 0px!important;\r\n}\r\n/*.table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td, .table>thead>tr>th {\r\n  padding: 5px 2px;\r\n}*/\r\n\r\nbutton.btn.add-member-btn{\r\n  background: #E54176;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 2px !important;\r\n  padding: 10px;\r\n}\r\n\r\ndiv.content-form-page{\r\n  background: #fff;\r\n  border: 1px solid #eee;\r\n  padding: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 937:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".main{\r\n  /*margin-top: 23px;*/\r\n}\r\n\r\nh1{\r\n  color: #396;\r\n  font-weight: 100;\r\n  font-size: 40px;\r\n  margin: 40px 0px 20px;\r\n}\r\n\r\n#clockdiv{\r\n\tfont-family: sans-serif;\r\n\tcolor: #fff;\r\n\tdisplay: inline-block;\r\n\tfont-weight: 100;\r\n\ttext-align: center;\r\n\tfont-size: 30px;\r\n}\r\n\r\n#clockdiv > div{\r\n\t/*padding: 10px;*/\r\n\tborder-radius: 3px;\r\n\tbackground: rgba(0,0,0,0.3);\r\n\tdisplay: inline-block;\r\n}\r\n\r\n#clockdiv div > span{\r\n\tpadding: 15px;\r\n\tborder-radius: 3px;\r\n\t/*background: #00816A;*/\r\n\tdisplay: inline-block;\r\n}\r\n\r\n.smalltext{\r\n\tpadding-top: 5px;\r\n\tfont-size: 16px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 938:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".avaliable-amount{\r\n    font-size: 25px;\r\n    font-weight: bold;\r\n    color: red;\r\n    margin-right: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 939:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".person-info{\r\n  height:130px;\r\n}\r\n@media (min-width: 592px){\r\n  .col-custom-md{\r\n    width: 20%;\r\n  }\r\n  .person-info{\r\n    height:150px;\r\n  }\r\n}\r\n@media (min-width: 1600px){\r\n  .container{\r\n    width: 1510px;\r\n  }\r\n}\r\n.container{\r\n  max-width: calc(100% - 640px);\r\n  background: white;\r\n  border: 1px solid #eee;\r\n}\r\n.profile-space{\r\n  /*border: solid 1px #ccc;*/\r\n  /*border-radius: 10px;*/\r\n  /*padding-left: 30px;*/\r\n  text-align: center;\r\n  margin-top: 40px;\r\n}\r\n.profile-content-title{\r\n  width: 40%;\r\n  float: left;\r\n  text-align: right;\r\n  margin: 0;\r\n  padding: 10px 5px;\r\n  font-size: 14px;\r\n}\r\n.profile-content{\r\n  width: 60%;\r\n  text-align: left;\r\n  float: left;\r\n  margin: 0;\r\n  padding: 10px 5px;\r\n  font-size: 14px;\r\n  word-wrap: break-word;\r\n  overflow: visible;\r\n}\r\n.avatar{\r\n  width: 150px;\r\n  height: auto;\r\n}\r\n.avatar.small{\r\n  width: 60px;\r\n  height: 60px;\r\n  margin-right: 15px;\r\n}\r\n.office-detail-name{\r\n  overflow: hidden;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  width: 100%;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n}\r\n.office-detail-address{\r\n  overflow: hidden;\r\n  margin-top: 0px;\r\n  margin-bottom: 0px;\r\n  width: 100%;\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  color: #888;\r\n}\r\ni.fa{\r\n  margin-right: 5px;\r\n}\r\n\r\ndiv.caption>.form-control{\r\n  width: auto;\r\n}\r\ndiv.caption>button.search{\r\n  height: 34px;\r\n}\r\n.transparent{\r\n  opacity: 0;\r\n}\r\n\r\n.left-panel{\r\n  width: 300px;\r\n  position: fixed;\r\n  left: 0px;\r\n  top: 60px;\r\n  height: 100%;\r\n  background: white;\r\n  box-shadow: 3px 2px 6px #aaa;\r\n}\r\n.right-panel{\r\n  width: 300px;\r\n  position: fixed;\r\n  left: auto;\r\n  right: 0px;\r\n  top: 60px;\r\n  height: 100%;\r\n  background: #ebebeb;\r\n  box-shadow: -1px 2px 6px #aaa;\r\n}\r\n\r\n.page-footer{\r\n  background-color: #000;\r\n  text-align: center;\r\n  padding: 20px;\r\n  height: 50px;\r\n  position: fixed;\r\n  top: auto;\r\n  bottom: 0px;\r\n  width: 100%;\r\n}\r\n.page-footer-inner{\r\n  float: none;\r\n}\r\nbutton.btn.follow-btn{\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px !important;\r\n  width: calc(100% - 40px);\r\n  margin: 30px 0px 50px 0px;\r\n  font-weight: bold;\r\n}\r\n.user-info{\r\n  text-align: left;\r\n  width: calc(100% - 40px);\r\n  margin-left: 20px;\r\n}\r\n.user-info .scoreboard-sidebar-header{\r\n  font-weight: bold;\r\n  border-bottom: 3px solid #e2e2e2;\r\n  padding-bottom: 6px;\r\n  color: black;\r\n}\r\n\r\n.scoreboard-sidebar-content{\r\n  border-bottom: 1px solid #ddd;\r\n  padding-bottom: 5px;\r\n  font-size: 14px;\r\n  color: #333;\r\n}\r\n.scoreboard-sidebar-content span{\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n}\r\n.btn.send-money-btn{\r\n  background: #E54176;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 2px !important;\r\n  width: calc(100% - 40px);\r\n  padding: 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.title{\r\n  text-align: center;\r\n  font-size: 40px;\r\n  padding: 20px;\r\n  font-weight: bold;\r\n}\r\n.page-content{\r\n  background-color: #f8f8f8;\r\n}\r\nbutton.btn.search-filter{\r\n  background: #E54176;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px !important;\r\n  padding: 10px 22px;\r\n}\r\n.leader-tile{\r\n  width: 100%;\r\n  display: -webkit-inline-box;\r\n  display: -ms-inline-flexbox;\r\n  display: inline-flex;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 940:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".sell-item-img{\r\n  width: 58px;\r\n  height: auto;\r\n  margin: 0 12px 12px 0;\r\n  border: 1px solid rgb(187, 186, 186);\r\n}\r\n\r\n.price-availability-block .price strong span {\r\n    font-size: 20px;\r\n}\r\n\r\n.price-availability-block .price strong {\r\n    color: #E54176;\r\n    font-size: 4rem;\r\n    font-weight: normal;\r\n}\r\n\r\n.price{\r\n  margin-top: 20px;\r\n}\r\n\r\n#amount{\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.btn.spinner{\r\n  background: #9a9a9a;\r\n  border-radius: 0px;\r\n  padding: 5px 10px;\r\n}\r\n.btn.minus-btn{\r\n  background: #E54176;\r\n  color: white;\r\n}\r\n.btn.plus-btn{\r\n  background: black;\r\n  color: white;\r\n}\r\n.spinner-buttons.input-group-btn{\r\n  width: 33px;\r\n}\r\n.buy-btn{\r\n  width: 150px;\r\n  height: 40px;\r\n  font-size: 2rem;\r\n}\r\n\r\n.radio-item input:checked+label:after {\r\n    background: -webkit-linear-gradient(left top,transparent 49%,#e84d1c 49%,#e84d1c 100%);\r\n    background: -o-linear-gradient(left top,transparent 49%,#e84d1c 49%,#e84d1c 100%);\r\n    content: '7';\r\n    position: absolute;\r\n    right: -0.5rem;\r\n    bottom: -0.5rem;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    color: #fff;\r\n    font-family: tahoma;\r\n    font-size: 12px;\r\n    font-style: italic;\r\n    font-weight: bolder;\r\n    line-height: 2.8rem;\r\n    text-indent: 0.5rem;\r\n    overflow: hidden;\r\n    -webkit-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n            transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    border-radius: 5px;\r\n}\r\n\r\n.radio-item input:checked+label {\r\n    border-color: #e84d1c;\r\n    position: relative;\r\n    color: #e84d1c;\r\n}\r\n\r\n.radio-item label {\r\n    color:#717171;\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    border: 1px solid #ceced0;\r\n    background-color: #fafafa;\r\n    min-width: 2rem;\r\n    padding: 0.5rem 1.2rem;\r\n    /*margin: 0 0.5rem 0.5rem 0;*/\r\n    max-width: 100%;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    border-radius: 0.3rem;\r\n\r\n}\r\n\r\n.radio-item{\r\n  margin-right: 5px;\r\n  padding: 0px;\r\n}\r\n\r\n.spinner-input{\r\n  text-align: center;\r\n  padding: 0px;\r\n  font-size: 1.9rem;\r\n  height: 32px;\r\n  width: 32px;\r\n}\r\n\r\n.main-box-img{\r\n  border: 2px solid #d2d2d2;\r\n  width: 100%;\r\n}\r\n\r\n.aKm {\r\n    background: rgba(255,255,255,.9);\r\n    border-width: 0 0 1px 0;\r\n    border-style: solid;\r\n    border-color: #d7d7d7;\r\n    height: 7px;\r\n    position: relative;\r\n    margin: 15px 0px 20px 0px;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n    background:#fe5555;\r\n}\r\n\r\n.product-other-images{\r\n    margin-top: 10px;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.btn-primary{\r\n  background: #E54176;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)();
// imports


// module
exports.push([module.i, ".sell-item-img{\r\n  width: 58px;\r\n  height: auto;\r\n  margin: 0 12px 12px 0;\r\n  border: 1px solid rgb(187, 186, 186);\r\n}\r\n\r\n.price-availability-block .price strong span {\r\n    font-size: 20px;\r\n}\r\n\r\n.price-availability-block .price strong {\r\n    color: #e84d1c;\r\n    font-size: 25px;\r\n    font-weight: normal;\r\n}\r\n\r\n.price{\r\n  margin-top: 20px;\r\n}\r\n\r\n#amount{\r\n  text-align: center;\r\n  font-size: 20px;\r\n}\r\n\r\n.btn.spinner{\r\n  background: #9a9a9a;\r\n  border-radius: 0px;\r\n  padding: 1px 6px;\r\n}\r\n\r\n.buy-btn{\r\n  margin-top: 20px;\r\n  width: 150px;\r\n  height: 40px;\r\n}\r\n\r\n.radio-item input:checked+label:after {\r\n    background: -webkit-linear-gradient(left top,transparent 49%,#e84d1c 49%,#e84d1c 100%);\r\n    background: -o-linear-gradient(left top,transparent 49%,#e84d1c 49%,#e84d1c 100%);\r\n    content: '7';\r\n    position: absolute;\r\n    right: -0.5rem;\r\n    bottom: -0.5rem;\r\n    width: 2rem;\r\n    height: 2rem;\r\n    color: #fff;\r\n    font-family: tahoma;\r\n    font-size: 12px;\r\n    font-style: italic;\r\n    font-weight: bolder;\r\n    line-height: 2.8rem;\r\n    text-indent: 0.5rem;\r\n    overflow: hidden;\r\n    -webkit-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    -moz-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    -o-transform: rotate(-90deg) scaleX(-1) scale(0.55);\r\n    border-radius: 5px;\r\n}\r\n\r\n.radio-item input:checked+label {\r\n    border-color: #e84d1c;\r\n    position: relative;\r\n    color: #e84d1c;\r\n}\r\n\r\n.radio-item label {\r\n    color:#717171;\r\n    display: inline-block;\r\n    font-size: 15px;\r\n    border: 1px solid #ceced0;\r\n    background-color: #fafafa;\r\n    min-width: 2rem;\r\n    padding: 0.5rem 1.2rem;\r\n    /*margin: 0 0.5rem 0.5rem 0;*/\r\n    max-width: 100%;\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    border-radius: 0.3rem;\r\n\r\n}\r\n\r\n.radio-item{\r\n  margin-right: 5px;\r\n  padding: 0px;\r\n}\r\n\r\n.spinner-input{\r\n  text-align: center;\r\n  font-size: 13px;\r\n  height: 24px;\r\n}\r\n\r\n.main-box-img{\r\n  border: 2px solid #d2d2d2;\r\n  width: 100%;\r\n}\r\n\r\n.aKm {\r\n    background: rgba(255,255,255,.9);\r\n    border-width: 0 0 1px 0;\r\n    border-style: solid;\r\n    border-color: #d7d7d7;\r\n    height: 7px;\r\n    position: relative;\r\n    margin: 15px 0px 20px 0px;\r\n}\r\n\r\n.btn-primary:hover, .btn-primary:focus, .btn-primary:active {\r\n    background:#fe5555;\r\n}\r\n\r\n.product-other-images{\r\n    margin-top: 10px;\r\n}\r\n\r\ninput[type=number]::-webkit-inner-spin-button,\r\ninput[type=number]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n\r\n.donate-content{\r\n  padding: 5px;\r\n  border: 1px solid #545454;\r\n  margin:5px;\r\n}\r\n\r\n.donate-image{\r\n  width: 150px;\r\n  height: 150px;\r\n  float: left;\r\n  margin-right: 10px;\r\n}\r\n\r\n.form-group-info{\r\n  margin-bottom: 0px;\r\n}\r\n\r\n.control-label{\r\n  padding: 5px 10px;\r\n}\r\n\r\ndiv.caption>button.search{\r\n  height: 34px;\r\n}\r\n\r\n.paging_bootstrap_number{\r\n  margin-top: 15px;\r\n}\r\n.transparent{\r\n  opacity: 0;\r\n}\r\n\r\nbutton.btn.search-filter{\r\n  background: #E54176;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px !important;\r\n  padding: 10px 22px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 943:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 420,
	"./af.js": 420,
	"./ar": 426,
	"./ar-dz": 421,
	"./ar-dz.js": 421,
	"./ar-ly": 422,
	"./ar-ly.js": 422,
	"./ar-ma": 423,
	"./ar-ma.js": 423,
	"./ar-sa": 424,
	"./ar-sa.js": 424,
	"./ar-tn": 425,
	"./ar-tn.js": 425,
	"./ar.js": 426,
	"./az": 427,
	"./az.js": 427,
	"./be": 428,
	"./be.js": 428,
	"./bg": 429,
	"./bg.js": 429,
	"./bn": 430,
	"./bn.js": 430,
	"./bo": 431,
	"./bo.js": 431,
	"./br": 432,
	"./br.js": 432,
	"./bs": 433,
	"./bs.js": 433,
	"./ca": 434,
	"./ca.js": 434,
	"./cs": 435,
	"./cs.js": 435,
	"./cv": 436,
	"./cv.js": 436,
	"./cy": 437,
	"./cy.js": 437,
	"./da": 438,
	"./da.js": 438,
	"./de": 440,
	"./de-at": 439,
	"./de-at.js": 439,
	"./de.js": 440,
	"./dv": 441,
	"./dv.js": 441,
	"./el": 442,
	"./el.js": 442,
	"./en-au": 443,
	"./en-au.js": 443,
	"./en-ca": 444,
	"./en-ca.js": 444,
	"./en-gb": 445,
	"./en-gb.js": 445,
	"./en-ie": 446,
	"./en-ie.js": 446,
	"./en-nz": 447,
	"./en-nz.js": 447,
	"./eo": 448,
	"./eo.js": 448,
	"./es": 450,
	"./es-do": 449,
	"./es-do.js": 449,
	"./es.js": 450,
	"./et": 451,
	"./et.js": 451,
	"./eu": 452,
	"./eu.js": 452,
	"./fa": 453,
	"./fa.js": 453,
	"./fi": 454,
	"./fi.js": 454,
	"./fo": 455,
	"./fo.js": 455,
	"./fr": 458,
	"./fr-ca": 456,
	"./fr-ca.js": 456,
	"./fr-ch": 457,
	"./fr-ch.js": 457,
	"./fr.js": 458,
	"./fy": 459,
	"./fy.js": 459,
	"./gd": 460,
	"./gd.js": 460,
	"./gl": 461,
	"./gl.js": 461,
	"./he": 462,
	"./he.js": 462,
	"./hi": 463,
	"./hi.js": 463,
	"./hr": 464,
	"./hr.js": 464,
	"./hu": 465,
	"./hu.js": 465,
	"./hy-am": 466,
	"./hy-am.js": 466,
	"./id": 467,
	"./id.js": 467,
	"./is": 468,
	"./is.js": 468,
	"./it": 469,
	"./it.js": 469,
	"./ja": 470,
	"./ja.js": 470,
	"./jv": 471,
	"./jv.js": 471,
	"./ka": 472,
	"./ka.js": 472,
	"./kk": 473,
	"./kk.js": 473,
	"./km": 474,
	"./km.js": 474,
	"./ko": 475,
	"./ko.js": 475,
	"./ky": 476,
	"./ky.js": 476,
	"./lb": 477,
	"./lb.js": 477,
	"./lo": 478,
	"./lo.js": 478,
	"./lt": 479,
	"./lt.js": 479,
	"./lv": 480,
	"./lv.js": 480,
	"./me": 481,
	"./me.js": 481,
	"./mi": 482,
	"./mi.js": 482,
	"./mk": 483,
	"./mk.js": 483,
	"./ml": 484,
	"./ml.js": 484,
	"./mr": 485,
	"./mr.js": 485,
	"./ms": 487,
	"./ms-my": 486,
	"./ms-my.js": 486,
	"./ms.js": 487,
	"./my": 488,
	"./my.js": 488,
	"./nb": 489,
	"./nb.js": 489,
	"./ne": 490,
	"./ne.js": 490,
	"./nl": 492,
	"./nl-be": 491,
	"./nl-be.js": 491,
	"./nl.js": 492,
	"./nn": 493,
	"./nn.js": 493,
	"./pa-in": 494,
	"./pa-in.js": 494,
	"./pl": 495,
	"./pl.js": 495,
	"./pt": 497,
	"./pt-br": 496,
	"./pt-br.js": 496,
	"./pt.js": 497,
	"./ro": 498,
	"./ro.js": 498,
	"./ru": 499,
	"./ru.js": 499,
	"./se": 500,
	"./se.js": 500,
	"./si": 501,
	"./si.js": 501,
	"./sk": 502,
	"./sk.js": 502,
	"./sl": 503,
	"./sl.js": 503,
	"./sq": 504,
	"./sq.js": 504,
	"./sr": 506,
	"./sr-cyrl": 505,
	"./sr-cyrl.js": 505,
	"./sr.js": 506,
	"./ss": 507,
	"./ss.js": 507,
	"./sv": 508,
	"./sv.js": 508,
	"./sw": 509,
	"./sw.js": 509,
	"./ta": 510,
	"./ta.js": 510,
	"./te": 511,
	"./te.js": 511,
	"./tet": 512,
	"./tet.js": 512,
	"./th": 513,
	"./th.js": 513,
	"./tl-ph": 514,
	"./tl-ph.js": 514,
	"./tlh": 515,
	"./tlh.js": 515,
	"./tr": 516,
	"./tr.js": 516,
	"./tzl": 517,
	"./tzl.js": 517,
	"./tzm": 519,
	"./tzm-latn": 518,
	"./tzm-latn.js": 518,
	"./tzm.js": 519,
	"./uk": 520,
	"./uk.js": 520,
	"./uz": 521,
	"./uz.js": 521,
	"./vi": 522,
	"./vi.js": 522,
	"./x-pseudo": 523,
	"./x-pseudo.js": 523,
	"./yo": 524,
	"./yo.js": 524,
	"./zh-cn": 525,
	"./zh-cn.js": 525,
	"./zh-hk": 526,
	"./zh-hk.js": 526,
	"./zh-tw": 527,
	"./zh-tw.js": 527
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 943;


/***/ }),

/***/ 974:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<div class=\"modal fade in\" role=\"basic\" style=\"padding-right: 17px;z-index:9999999999999;\" [class.show] = \"appState.get('isLoading') > 0\">\n  <div class=\"modal-backdrop fade in\" style=\"height: 100%;opacity:0.28;background-color:rgb(253, 129, 163) !important;\"></div>\r\n\t<div class=\"modal-dialog\" style=\"width:80px;height:100%;\">\r\n    <i class=\"fa fa-circle-o-notch fa-spin fa-fw\" aria-hidden=\"true\" style=\"font-size: 44px;top: 50%;position: absolute;color: rgb(253, 129, 163);\"></i>\r\n\t\t<!-- <div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body\">\r\n\r\n\t\t\t</div>\r\n\t\t</div> -->\r\n\t</div>\r\n</div>\r\n<div class=\"modal fade in\" role=\"basic\" style=\"padding-right: 17px;z-index:9999999999999;\" [class.show] = \"errorMessage != ''\">\r\n  <div class=\"modal-backdrop fade in\" style=\"height: 100%;\"></div>\r\n\t<div class=\"modal-dialog\" style=\"width:80px;height:100%;\">\r\n    <!-- <i class=\"fa fa-circle-o-notch fa-spin fa-fw\" aria-hidden=\"true\" style=\"font-size: 64px;top: 50%;position: absolute;\"></i> -->\r\n\t\t<div class=\"modal-content\">\r\n\t\t\t<div class=\"modal-body\">\r\n        <p>{{errorMessage}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ 975:
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\" style=\"\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"portlet light bordered\" *ngFor = \"let director of directors\">\r\n          <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                  <!-- <i class=\"icon-microphone font-blue-hoki\"></i> -->\r\n                  <span class=\"caption-subject bold font-blue-hoki uppercase\">{{director.name}}</span>\r\n                  <!-- <span class=\"caption-helper\">more samples...</span> -->\r\n              </div>\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\">\r\n                <div class=\"scroller\" style=\"height: 200px; overflow: hidden; width: auto;\" data-initialized=\"1\">\r\n                  <!-- <h4>Heading text goes here...</h4> -->\r\n                  <p class=\"col-sm-12 col-md-10\">{{director.description}}</p>\r\n                  <div class=\"col-sm-4 col-md-2\">\r\n                    <img class=\"img-responsive\" src=\"{{director.image_url}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"slimScrollBar\" style=\"background: rgb(187, 187, 187); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 200px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(234, 234, 234); opacity: 0.2; z-index: 90; right: 1px;\"></div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"margin-top-30\" style=\"text-align:center\">\r\n\r\n<h1>{{tr(\"MAIN_TITLE\")}}</h1>\r\n<div class=\"content-form-page\">\r\n  <form class=\"form-horizontal\" role=\"form\" novalidate (ngSubmit) = \"sendContactMessage(contactForm);\" #contactForm=\"ngForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n        <fieldset>\r\n          <legend>{{tr(\"DETAIL_TITLE\")}}</legend>\r\n          <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\r\n            <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\r\n            <p>{{successMessage}}</p>\r\n          </div>\r\n          <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\r\n            <button class=\"close\" (click) = \"errorMessage = ''\"></button>\r\n            <p>{{errorMessage}}</p>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\r\n            <div class=\"col-md-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"  required=\"true\" placeholder='{{tr(\"NAME\")}}'  [(ngModel)]=\"model.name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\r\n            <div class=\"col-md-4\">\r\n              <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"  required=\"true\" placeholder='{{tr(\"EMAIL\")}}'  [(ngModel)]=\"model.email\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\r\n            <div class=\"col-md-4\">\r\n              <input type=\"email\" class=\"form-control\" id=\"subject\" name=\"subject\"  required=\"true\" placeholder='{{tr(\"SUBJECT\")}}' [(ngModel)]=\"model.subject\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\r\n            <div class=\"col-md-4\">\r\n              <textarea class=\"form-control\" name=\"message\" rows=\"8\" cols=\"40\" placeholder='{{tr(\"MESSAGE\")}}' [(ngModel)]=\"model.message\"></textarea>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div  style=\"text-align:center;\">\r\n              <button type=\"submit\" class=\"btn btn-primary green\">{{tr(\"SEND_MESSAGE\")}}</button>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </fieldset>\r\n\r\n    </div>\r\n\r\n  </div>\r\n  </form>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ 976:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\"><span style=\"color: #EC307C;\">{{title1}} </span> {{title2}}</h4>\n<p class=\"message container\" style=\"text-align: center; font-size: 16px;\">{{message}}</p>"

/***/ }),

/***/ 977:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\"><span style=\"color: #EC307C;\">Talk </span> to Customer</h4>\n<div class=\"page-content\" style=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"leader-tile\" *ngFor = \"let admin of admins\">\n        <img onerror=\"this.src='assets/global/img/default_avatar.jpg'\" src = \"{{admin.image_url}}\" class=\"avatar small\" style=\"border-radius: 50% !important;\"/>\n        <div style=\"width: 100%; padding-bottom: 10px;\">\n          <div class=\"col-xs-8\" style=\" margin-top: 25px; margin-left: 25px;\">\n            <h4>{{admin.name}}</h4>\n            <span>{{admin.address}}, {{admin.country}}</span>\n          </div>\n          <div class=\"col-xs-3\" style=\" margin-top: 25px;\">\n            <a class=\"btn btn-primary pull-right green\" (click) = \"contact(admin.id);\">Contact</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div bsModal #contact_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"contact_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i class=\"fa fa-edit\"></i>Talk to Customer</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;\" method=\"POST\" action=\"{{SERVER_URL}}/contactAdmin\" ngNoForm >\n          <div class=\"row\">\n            <fieldset style=\"margin: 10px; margin-top: 0px;\">\n              <textarea class=\"form-control\" placeholder=\"Please describe your problem.\" [(ngModel)] = \"model.message\" name=\"message\" required rows=\"8\"></textarea>\n            </fieldset>\n            <input type=\"hidden\" name=\"id\" [(ngModel)] = \"model.id\">\n            <fieldset style=\"text-align: right;padding-right: 30px;\">\n              <div class=\"\">\n                <button class=\"btn btn-primary green\" type=\"submit\">Contact</button>\n                <button class=\"btn red\" (click)=\"contact_dialog.hide();\" type=\"button\">Cancel</button>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 978:
/***/ (function(module, exports) {

module.exports = "\n<div class=\"margin-top-30\" style=\"text-align:center\">\n\n<h1>{{tr(\"MAIN_TITLE\")}}</h1>\n<div class=\"content-form-page\">\n  <form class=\"form-horizontal\" role=\"form\" novalidate (ngSubmit) = \"sendContactMessage(contactForm);\" #contactForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n        <fieldset>\n          <legend>{{tr(\"DETAIL_TITLE\")}}</legend>\n          <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\n            <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\n            <p>{{successMessage}}</p>\n          </div>\n          <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n            <button class=\"close\" (click) = \"errorMessage = ''\"></button>\n            <p>{{errorMessage}}</p>\n          </div>\n          <div class=\"form-group margin-top:20px\">\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\n            <div class=\"col-md-4\">\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\"  required=\"true\" placeholder='{{tr(\"NAME\")}}'  [(ngModel)]=\"model.name\">\n            </div>\n          </div>\n          <div class=\"form-group margin-top:20px\">\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\n            <div class=\"col-md-4\">\n              <input type=\"text\" class=\"form-control\" id=\"email\" name=\"email\"  required=\"true\" placeholder='{{tr(\"EMAIL\")}}'  [(ngModel)]=\"model.email\">\n            </div>\n          </div>\n          <div class=\"form-group margin-top:20px\">\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\n            <div class=\"col-md-4\">\n              <input type=\"email\" class=\"form-control\" id=\"subject\" name=\"subject\"  required=\"true\" placeholder='{{tr(\"SUBJECT\")}}' [(ngModel)]=\"model.subject\">\n            </div>\n          </div>\n          <div class=\"form-group margin-top:20px\">\n            <label for=\"name\" class=\"col-md-4 control-label\"><span class=\"require\"></span></label>\n            <div class=\"col-md-4\">\n              <textarea class=\"form-control\" name=\"message\" rows=\"8\" cols=\"40\" placeholder='{{tr(\"MESSAGE\")}}' [(ngModel)]=\"model.message\"></textarea>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div  style=\"text-align:center;\">\n              <button type=\"submit\" class=\"btn btn-primary green\">{{tr(\"SEND_MESSAGE\")}}</button>\n            </div>\n          </div>\n\n\n        </fieldset>\n\n    </div>\n\n  </div>\n  </form>\n</div>\n</div>\n"

/***/ }),

/***/ 979:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\"><span style=\"color: #EC307C;\">Directors</span> Board</h4>\r\n<div class=\"page-content\" style=\"\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"portlet light bordered\" *ngFor = \"let director of directors\">\r\n          <div class=\"portlet-title\">\r\n              <div class=\"caption\">\r\n                  <!-- <i class=\"icon-microphone font-blue-hoki\"></i> -->\r\n                  <span class=\"caption-subject bold font-blue-hoki uppercase\">{{director.name}}</span>\r\n                  <!-- <span class=\"caption-helper\">more samples...</span> -->\r\n              </div>\r\n          </div>\r\n          <div class=\"portlet-body\">\r\n              <div class=\"slimScrollDiv\" style=\"position: relative; overflow: hidden; width: auto; height: 200px;\">\r\n                <div class=\"scroller\" style=\"height: 200px; overflow: hidden; width: auto;\" data-initialized=\"1\">\r\n                  <!-- <h4>Heading text goes here...</h4> -->\r\n                  <p class=\"col-sm-12 col-md-10\">{{director.description}}</p>\r\n                  <div class=\"col-sm-4 col-md-2\">\r\n                    <img class=\"img-responsive\" src=\"{{director.image_url}}\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"slimScrollBar\" style=\"background: rgb(187, 187, 187); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 200px;\"></div><div class=\"slimScrollRail\" style=\"width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(234, 234, 234); opacity: 0.2; z-index: 90; right: 1px;\"></div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 980:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\n    Donate\n</h4>\n<div class=\"page-content\" style=\"\">\n  <div class=\"container\">\n      <!-- BEGIN SIDEBAR & CONTENT -->\n      <div class=\"row margin-bottom-40\">\n        <div class=\"alert alert-success \" [class.hidden] = \"paySuccess != 0\">\n          <button type=\"button\" class=\"close\" (click) = \"paySuccess = 2\"></button>\n          <p style=\"text-align:center\">Paid Success</p>\n        </div>\n        <div class=\"alert alert-danger \" [class.hidden] = \"paySuccess != 1\">\n          <button class=\"close\" (click) = \"paySuccess = 2\"></button>\n          <p style=\"text-align:center\">Paid Fail</p>\n        </div>\n\n        <!-- BEGIN CONTENT -->\n        <div class=\"col-md-12 col-sm-12\">\n          <div class=\"product-page\">\n            <div class=\"row\" style=\"margin-top: 30px;\">\n              <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n                <button class=\"close\" (click) = \"errorMessage = ''\"></button>\n                <p>{{errorMessage}}</p>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-12 portlet light portlet-fit\">\n                  <div class=\"portlet-title\">\n                      <div class=\"caption pull-left\" style=\" display: inline-flex; border: 1px solid #ddd; border-radius: 5px !important; margin-right: 10px;    padding: 3px 12px !important;\">\n                        <i class=\"fa fa-search\" style=\"margin-top: 10px;\"></i>\n                        <input class=\"form-control\" [(ngModel)]=\"searchString\" placeholder=\"Search\" (keyup.enter)=\"search();\" style=\"border: none;\">\n                      </div>\n                      <div class=\"btn-group pull-left\" dropdown>\n                        <button type=\"button\" class=\"btn btn-primary search-filter\" dropdownToggle>\n                          Search Filter <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu search-filters\" dropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\n                          <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" (click) = \"searchFilter = 'name'\">\n                              <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'name'\" ></i>\n                              Name\n                            </a>\n                          </li>\n                          <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" (click) = \"searchFilter = 'country'\">\n                              <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'country'\" ></i>\n                              Country\n                            </a>\n                          </li>\n                          <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" (click) = \"searchFilter = 'city'\">\n                              <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'city'\" ></i>\n                              City\n                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12\" *ngFor = \"let donate of profileService.donates; let i = index;\">\n                  <div class=\"col-sm-12\">\n                    <div class=\"col-md-12 col-ms-12 donate-content\">\n                      <div class=\"col-xs-12 col-md-10\" style=\"padding:5px;\">\n                        <img class=\"donate-image\" src=\"{{donate.picture}}\" alt=\"\" >\n                        <span style=\"font-size: 20px;padding: 5px;\"><strong>{{donate.name}}</strong></span><br>\n                        <div class=\"\" style=\"word-wrap: break-word;height: 80px;overflow: hidden;margin: 10px 0px;\">\n                          {{donate.description}}\n                        </div>\n                        <span style=\"padding: 10px;\">{{donate.city}}, {{donate.country}}</span>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <button type = \"button\" class=\"buy-btn btn btn-success\"  style=\"border:none;width:80px;float:right;margin-top:55px\" (click) = \"showPayDlg(i);\">Donate</button>\n                      </div> \n                    </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"paging_bootstrap_number pull-right\" style=\"text-align:right;\">\n                  <pagination class=\"\"\n                              [(ngModel)]=\"curPage\"\n                              [totalItems]=\"totalCount\"\n                              [itemsPerPage]=\"itemsPerPage\"\n                              [maxSize]=\"100\"\n                              previousText=\"&lsaquo;\"\n                              nextText=\"&rsaquo;\"\n                              (pageChanged)=\"refreshDonate($event)\">\n                  </pagination>\n                </div>\n              </div>\n\n\n          </div>\n        </div>\n        <!-- END CONTENT -->\n      </div>\n      <!-- END SIDEBAR & CONTENT -->\n\n  </div>\n</div>\n\n\n\n<div bsModal #pay_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" style=\"width:600px\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"pay_box_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i class=\"fa fa-paypal\"></i> Donate</h3>\n      </div>\n      <div class=\"modal-body\" *ngIf = \"authenticateService.currentUser != null\">\n        <span style=\"font-size: 18px;color: black;\">Thanks for your Donation.</span>\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;margin-top:10px\" #editboxForm = \"ngForm\" (ngSubmit)=\"onSubmit()\"  ng-submit=\"expression\" action=\"/api/v1/sell/donateNow\" method=\"post\">\n           <!--<input type=\"hidden\" name=\"buy_count\" value=\"{{buy_count}}\"> -->\n          <input type=\"hidden\" name=\"amount\" value=\"{{authenticateService.currentUser.deposit_money}}\">\n          <input type=\"hidden\" name=\"donateId\" value=\"{{donateId}}\">\n          <div class=\"col-md-12\">\n            <div class=\"col-md-4\">\n              <img src=\"{{selDonate.picture}}\" alt=\"\" class=\"img-responsive\">\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"form-group form-group-info\">\n                <label class=\"col-md-3 control-label\">{{tr(\"AMOUNT\")}} : </label>\n                <label class=\"col-md-9 control-label\" style=\"text-align: left;\"><strong>${{authenticateService.currentUser.deposit_money}}</strong></label>\n              </div>\n            </div>\n          </div>\n          <fieldset style=\"text-align: right;padding-right: 30px;\">\n            <div class=\"\">\n              <button type=\"submit\" class=\"btn btn-primary green\">{{tr(\"PAY_NOW\")}}</button>\n              <button type=\"button\" class=\"btn red\" (click)=\"pay_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 981:
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success \" [class.hidden] = \"paySuccess != 0\">\n  <button type=\"button\" class=\"close\" (click) = \"paySuccess = 2\"></button>\n  <p style=\"text-align:center\">Paid Success</p>\n</div>\n<div class=\"alert alert-danger \" [class.hidden] = \"paySuccess != 1\">\n  <button class=\"close\" (click) = \"paySuccess = 2\"></button>\n  <p style=\"text-align:center\">Paid Fail</p>\n</div>\n\n<div class=\"page-content\">\n  <div class=\"page-slider\" style=\"    margin-top: -70px;\">\n    <div class=\"fullwidthbanner-container revolution-slider\">\n        <div class=\"fullwidthabnner\">\n            <ul id=\"revolutionul\">\n                <li data-transition=\"fade\">\n                    <img src=\"assets/img/background.png\" \n                        alt=\"Ocean\" \n                        class=\"rev-slidebg\" \n                        data-bgposition=\"center center\" \n                        data-bgfit=\"cover\" \n                        data-bgrepeat=\"no-repeat\">\n                    <!--<div class=\"rs-background-video-layer\" \n                        data-videomp4=\"assets/video/background.mp4\" \n                        data-videopreload=\"auto\" \n                        data-volume=\"100\" \n                        data-forcerewind=\"on\" \n                        data-nextslideatend=\"true\" \n                        data-videoloop=\"loopandnoslidestop\" \n                    ></div>-->\n                    <div class=\"rs-background-video-layer\" \n                        data-videomp4=\"assets/video/background.mp4\"\n                        data-forcerewind=\"on\" \n                        data-volume=\"100\" \n                        data-videoattributes=\"version=3&enablejsapi=1&html5=1& hd=1&wmode=opaque&showinfo=0& ref=0;;origin=http://server.local;\" \n                        data-videorate=\"1.5\" \n                        data-videowidth=\"100%\" \n                        data-videoheight=\"100%\" \n                        data-videocontrols=\"none\" \n                        data-videoloop=\"loopandnoslidestop\" \n                        data-forceCover=\"1\" \n                        data-aspectratio=\"16:9\" \n                        data-autoplay=\"true\" \n                        data-autoplayonlyfirsttime=\"false\" \n                        data-nextslideatend=\"true\" \n                    ></div>\n                </li>\n            </ul>\n        </div>\n    </div>\n  </div>\n  <div class=\"row server-time-panel\">\n      <div style=\"text-align: center;display: inline-flex;\">\n        <label class=\"date-label\">\n            {{curDate}}\n        </label>\n        <label class=\"date-label time-label\">\n            <p>{{serverHour}}</p>\n            <span>Hour</span>\n        </label>\n        <label class=\"date-label time-label\">\n            <p>{{serverMinute}}</p>\n            <span>Minute</span>\n        </label>\n        <label class=\"date-label time-label\">\n            <p>{{serverSecond}}</p>\n            <span>Second</span>\n        </label>\n      </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12 margin-bottom-10\">\n\t\t\t\t<div class=\"dashboard-stat blue-madison\">\n                    <canvas width=\"300\" height=\"170\" style=\"width: 100%; height: auto;\"></canvas>\n\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t<div class=\"number\">\n                            +{{generalService.daily_total}}\n                            <br>\n                            <span>{{tr(\"DAILY_MITZVOTS\")}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"more\" [routerLink]=\"['/score']\">\n                        {{tr(\"VIEW_MORE\")}} <i class=\"fa fa-long-arrow-right\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t<div class=\"dashboard-stat red-intense\">\n                    <canvas width=\"300\" height=\"170\" style=\"width: 100%; height: auto;\"></canvas>\n\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t<div class=\"number\">\n                            +{{generalService.life_total}}\n                            <br>\n                            <span>{{tr(\"LIFETIME_MITZVOTS\")}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"more\" [routerLink]=\"['/score']\">\n                        {{tr(\"VIEW_MORE\")}} <i class=\"fa fa-long-arrow-right\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-4 col-md-4 col-sm-6 col-xs-12\">\n\t\t\t\t<div class=\"dashboard-stat green-haze\">\n                    <canvas width=\"300\" height=\"170\" style=\"width: 100%; height: auto;\"></canvas>\n\t\t\t\t\t<div class=\"details\">\n\t\t\t\t\t\t<div class=\"number\">\n                            +{{generalService.cbox_total}}\n                            <br>\n                            <span>{{tr(\"TOTAL_BOXES\")}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<a class=\"more\" [routerLink]=\"['/score']\">\n                        {{tr(\"VIEW_MORE\")}} <i class=\"fa fa-long-arrow-right\"></i>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n          <div class=\"portlet light portlet-fit\" style=\"background: transparent;\">\n              <div class=\"portlet-title\">\n                  <div class=\"\" style=\"color:#EC307C;position: absolute;padding-top: 13px;overflow: hidden; width: 100%;z-index: -1;\">\n                      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////\n                  </div>\n                  <div class=\"caption\">\n                      <span style=\"color: #EC307C;\">Daily</span> Leaders\n                  </div>\n              </div>\n              <div class=\"portlet-body\" [@CategoryState] = \"category\">\n                  <div class=\"mt-element-card mt-element-overlay\">\n                      <div class=\"row\">\n                          <div class=\"col-md-3 col-sm-3 col-xs-6\" *ngFor=\"let child of generalService.dailyLeaders[category]\">\n                              <div class=\"mt-card-item\">\n                                  <div class=\"mt-card-avatar mt-overlay-1 mt-element-ribbon\">\n                                      <img class=\"avatar\" src=\"{{child.image_url}}\">\n                                  </div>\n                                  <div class=\"mt-card-avatar-footer\">\n                                      <div class=\"col-sm-8 col-xs-0 mt-card-avatar-footer-section\">\n                                        <h3 class=\"leader-card-name\">{{child.name}}</h3>\n                                        <h3 class=\"leader-card-address\">{{child.address}}, {{child.country}}</h3>\n                                      </div>\n                                      <div class=\"col-sm-4 col-xs-12 mt-card-avatar-footer-section\" style=\"background: #F1F1F1;text-align: center;\">\n                                        <h3 class=\"leader-card-name\">+{{child.deposit_count}}</h3>\n                                        <span style=\"color: #777;\">Mitzvots</span>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"\" style=\"background: #fff;border:1px solid #eaeaea;\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"portlet light portlet-fit\" style=\"background: transparent;\">\n                    <div class=\"portlet-title\">\n                        <div class=\"caption\">\n                            <span style=\"color: #EC307C;\">Life Time</span> Leaders\n                        </div>\n                    </div>\n                    <div class=\"portlet-body\" [@CategoryState] = \"category\">\n                        <div class=\"mt-element-card mt-element-overlay\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3 col-sm-3 col-xs-6\" *ngFor=\"let child of generalService.lifeLeaders[category]\">\n                                    <div class=\"mt-card-item\">\n                                        <div class=\"mt-card-avatar mt-overlay-1 mt-element-ribbon\">\n                                            <img class=\"avatar\" src=\"{{child.image_url}}\">\n                                        </div>\n                                        <div class=\"mt-card-avatar-footer\">\n                                            <div class=\"col-sm-8 col-xs-0 mt-card-avatar-footer-section\">\n                                                <h3 class=\"leader-card-name\">{{child.name}}</h3>\n                                                <h3 class=\"leader-card-address\">{{child.address}}, {{child.country}}</h3>\n                                            </div>\n                                            <div class=\"col-sm-4 col-xs-12 mt-card-avatar-footer-section\" style=\"background: #F1F1F1;text-align: center;\">\n                                                <h3 class=\"leader-card-name\">+{{child.deposit_count}}</h3>\n                                                <span style=\"color: #777;\">Mitzvots</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"portlet light portlet-fit\" style=\"background: transparent;\">\n                    <div class=\"portlet-title\">\n                        <div class=\"caption\">\n                            <span style=\"color: #EC307C;\">School</span> & Institutions\n                        </div>\n                    </div>\n                    <div class=\"portlet-body\" [@CategoryState] = \"category\">\n                        <div class=\"mt-element-card mt-element-overlay\">\n                            <div class=\"row\">\n                                <div class=\"col-md-3 col-sm-3 col-xs-6\" *ngFor=\"let child of generalService.organizations[category]\">\n                                    <div class=\"mt-card-item\">\n                                        <div class=\"mt-card-avatar mt-overlay-1 mt-element-ribbon\">\n                                            <img class=\"avatar\" src=\"{{child.image_url}}\">\n                                        </div>\n                                        <div class=\"mt-card-avatar-footer\">\n                                            <div class=\"col-sm-8 col-xs-0 mt-card-avatar-footer-section\">\n                                                <h3 class=\"leader-card-name\">{{child.name}}</h3>\n                                                <h3 class=\"leader-card-address\">{{child.address}}, {{child.country}}</h3>\n                                            </div>\n                                            <div class=\"col-sm-4 col-xs-12 mt-card-avatar-footer-section\" style=\"background: #F1F1F1;text-align: center;\">\n                                                <h3 class=\"leader-card-name\">+{{child.deposit_count}}</h3>\n                                                <span style=\"color: #777;\">Mitzvots</span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n  </div>\n</div>\n<div class=\"page-footer\">\n    <div class=\"page-footer-inner\" style=\"color: white;\"> Copyrights@2016, Millionmitzvot.com</div>\n</div>\n\n<!--<div class=\"userback-button-container\" data-html2canvas-ignore=\"true\">\n  <div class=\"userback-button userback-button-se\" title=\"\" style=\"background-color: transparent;\">\n    <button (click)=\"toggleCategory();\" class=\"btn btn-success\">{{tr(\"CHANGE_CATEGORY\")[category]}}</button>\n  </div>\n</div>-->\n\n<div class=\"ui-pnotify stack-topright\"   *ngIf=\"memberBoxAmount != 0\">\n<div class=\"alert ui-pnotify-container alert-danger ui-pnotify-shadow\" style=\"min-height: 16px;\">\n<!-- <div class=\"ui-pnotify-icon\">\n<span class=\"false\">\n</span>\n</div> -->\n<div class=\"ui-pnotify-closer\" style=\"cursor: pointer; visibility: visible;\">\n<button type=\"button\" class=\"close\" name=\"button\" style=\"margin:10px\" onclick=\"$('.ui-pnotify').hide();\"></button>\n</div>\n<div class=\"ui-pnotify-sticker\" style=\"cursor: pointer; visibility: hidden;\">\n  <span class=\"icon-play\" title=\"Stick\">\n  </span>\n</div>\n<h4 class=\"ui-pnotify-title\" style=\"display: none;\">\n</h4>\n<div class=\"ui-pnotify-text\">\n  <div class=\"content-list content-image\">\n    <div class=\"list-wrapper mgtp-10 mgbt-xs-10\">\n      <div>\n        <div class=\"menu-icon\">\n        <i class=\"fa fa-usd vd_red\">\n        </i>\n        </div>\n        <div class=\"menu-text\">\n          <h5>\n          <strong>Note</strong>\n          </h5>\n          <p class=\"lh-sm\" style=\"margin:0px;    margin-left: 60px;\">You have to send moneny to organization.</p>\n          <p style=\"margin: 5px 50px;\">Total Amout: <strong>${{memberBoxAmount}}</strong></p>\n\n        </div>\n        <div class=\"ui-pnotify-button\">\n          <!-- <form  action=\"/api/v1/sell/postPayNow\" method=\"post\" role=\"form\" ng-submit=\"expression\"> -->\n          <form class=\"form-horizontal\" role=\"form\" #submitForm = \"ngForm\" (ngSubmit)=\"onSubmit()\"  ng-submit=\"expression\" action=\"/api/v1/members/payForBoxAmount?token={{token}}\" method=\"post\">\n            <input type=\"hidden\" name=\"amount\" value=\"{{memberBoxAmount}}\">\n            <!-- <input type=\"hidden\" name=\"token\" value=\"{{token}}\"> -->\n            <button type=\"submit\" class=\"btn btn-danger\">Send Now</button>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n\n\n\n<div class=\"ui-pnotify stack-topright\"   *ngIf=\"userBoxAmount != 0\">\n<div class=\"alert ui-pnotify-container alert-danger ui-pnotify-shadow\" style=\"min-height: 16px;\">\n<!-- <div class=\"ui-pnotify-icon\">\n<span class=\"false\">\n</span>\n</div> -->\n<div class=\"ui-pnotify-closer\" style=\"cursor: pointer; visibility: visible;\">\n<button type=\"button\" class=\"close\" name=\"button\" style=\"margin:10px\" onclick=\"$('.ui-pnotify').hide();\"></button>\n</div>\n<div class=\"ui-pnotify-sticker\" style=\"cursor: pointer; visibility: hidden;\">\n  <span class=\"icon-play\" title=\"Stick\">\n  </span>\n</div>\n<h4 class=\"ui-pnotify-title\" style=\"display: none;\">\n</h4>\n<div class=\"ui-pnotify-text\">\n  <div class=\"content-list content-image\">\n    <div class=\"list-wrapper mgtp-10 mgbt-xs-10\">\n      <div>\n        <div class=\"menu-icon\">\n        <i class=\"fa fa-usd vd_red\">\n        </i>\n        </div>\n        <div class=\"menu-text\">\n          <h5>\n          <strong>Note</strong>\n          </h5>\n          <p class=\"lh-sm\" style=\"margin:0px;    margin-left: 60px;\">You can donate money to organizations.</p>\n          <p style=\"margin: 5px 50px;\">Total Amout: <strong>${{userBoxAmount}}</strong></p>\n\n        </div>\n        <div class=\"ui-pnotify-button\">\n            <a class=\"btn btn-danger\" [routerLink]=\"['/donate']\">Send Now</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ 982:
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" [class.scrolled] = \"scrollPos > 0\">\r\n  <div class=\"container\">\r\n    <a class=\"mobi-toggler\"><i class=\"fa fa-bars\"></i></a>\r\n    <div class=\"logo-mid\">\r\n      <a class=\"\" [routerLink]=\"['/home']\"><img src=\"assets/img/logo-mid.png\" alt=\"MillionMitzvot.com\" class=\"logo-mid\"></a>\r\n    </div>\r\n    <div class=\"header-navigation pull-right font-transform-inherit\" style=\"    height: 75px;\">\r\n      <ul>\r\n        <li  class=\"main-menu-li\" [class.active]= \"appState.get('one_page_menu_selected') == 1\">\r\n          <a [routerLink]=\"['/home']\">\r\n            {{tr('HOME')}}\r\n          </a>\r\n        </li>\r\n        <li class=\"main-menu-li dropdown\">\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            {{tr('ABOUT')}}\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a [routerLink]=\"['/director_board/']\">{{tr('BOARD_OF_DIRECTORS')}}</a></li>\r\n            <li><a [routerLink]=\"['/contact/']\">{{tr('CONTACTUS')}}</a></li>\r\n            <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.ADMIN\"><a [routerLink]=\"['/contact-admin/']\">Talk to Customers</a></li>\r\n          </ul>\r\n        </li>\r\n        <li  class=\"main-menu-li\" [class.active]= \"appState.get('one_page_menu_selected') == 2\" >\r\n          <a class=\"\" [routerLink]=\"['/score']\">\r\n            {{tr('SCOREBOARD')}}\r\n          </a>\r\n        </li>\r\n        <!-- <li  class=\"main-menu-li\"  [class.active]= \"appState.get('one_page_menu_selected') == 5\">\r\n          <a class=\"\" [routerLink]=\"['/home/director_board']\">\r\n            {{tr('BOARD_OF_DIRECTORS')}}\r\n          </a>\r\n        </li> -->\r\n        <li class=\"main-menu-li\" [class.active]= \"appState.get('one_page_menu_selected') == 6\" >\r\n          <a class=\"\" [routerLink]=\"['/sell']\">\r\n            {{tr('SELLBOARD')}}\r\n          </a>\r\n        </li>\r\n        <li class=\"main-menu-li\" [class.active]= \"appState.get('one_page_menu_selected') == 9\" [class.dropdown] = \"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.INDIVIDUAL && authenticate.currentUser.role != USER_TYPE.MEMBER\">\r\n          <a class=\"dropdown-toggle\" data-toggle = \"dropdown\" [routerLink]=\"['/selldonate']\">\r\n            {{tr('SELLDONATE')}}\r\n          </a>\r\n          <ul class = \"dropdown-menu\" *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.INDIVIDUAL && authenticate.currentUser.role != USER_TYPE.MEMBER\">\r\n            <li><a [routerLink]=\"['/selldonate']\">{{tr('SELLDONATE')}}</a></li>\r\n            <li><a [routerLink]=\"['/profile/donate']\">{{tr('DONATE')}}</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"main-menu-li\" *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role == USER_TYPE.ADMIN\">\r\n          <a class=\"\" href=\"{{SERVER_URL}}/admin\">\r\n            Admin\r\n          </a>\r\n        </li>\r\n        <li class=\"main-menu-li dropdown\" *ngIf = \"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN\" [class.active]= \"appState.get('one_page_menu_selected') == 3\">\r\n          <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            {{tr('PROFILE')}}\r\n            <span class=\"badge badge-danger\" style=\"position: absolute; left: auto; bottom: 20px; top: auto; right: 20px;\" [class.hidden] = \"general.unread_messages == 0\">{{general.unread_messages}}</span>\r\n          </a>\r\n          <ul class=\"dropdown-menu\">\r\n            <li><a [routerLink]=\"['/profile/']\">{{tr('EDIT_PROFILE')}}</a></li>\r\n            <li>\r\n              <a href=\"{{SERVER_URL}}/messages\">Messages</a>\r\n              <span class=\"badge badge-danger\" style=\"position: absolute; left: auto; bottom: 10px; top: auto; right: 5px;\" [class.hidden] = \"general.unread_messages == 0\">{{general.unread_messages}}</span>\r\n            </li>\r\n            <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.INDIVIDUAL && authenticate.currentUser.role != USER_TYPE.MEMBER\" class=\"main-menu-li\" [class.active]= \"appState.get('one_page_menu_selected') == 8\" >\r\n              <a class=\"\" [routerLink]=\"['/report']\">\r\n                {{tr('REPORT')}}\r\n              </a>\r\n            </li>\r\n            <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.MEMBER\"><a [routerLink]=\"['/profile/boxes']\">{{tr('BOXES')}}</a></li>\r\n            <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.INDIVIDUAL && authenticate.currentUser.role != USER_TYPE.MEMBER\"><a [routerLink]=\"['/profile/members']\">{{tr('MEMBERS')}}</a></li>\r\n            <li><a [routerLink]=\"['/profile/changePassword']\">{{tr('CHANGE_PASSWORD')}}</a></li>\r\n            <li><a href=\"{{SERVER_URL}}/logout\">{{tr('SIGN_OUT')}}</a></li>\r\n          </ul>\r\n        </li>\r\n        <li class=\"main-menu-li\" [class.hidden] = \"authenticate.isLoggedIn() != USER_SIGNED_INFO.VALIDATING\">\r\n          <a class=\"\">\r\n            <i class=\"fa fa-spinner fa-spin fa-fw\" aria-hidden=\"true\" style=\"font-size: 24px;color: rgb(253, 129, 163); margin-top: 2px;\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"main-menu-li\" [class.hidden] = \"authenticate.isLoggedIn() != USER_SIGNED_INFO.NOT_SIGNED_IN\">\r\n          <a class=\"\" href=\"{{SERVER_URL}}/login\">\r\n            {{tr('SIGN_IN')}}\r\n          </a>\r\n        </li>\r\n        <li style=\"padding-top:20px\">\r\n          <a href=\"javascript:;\" class=\"menu-toggler responsive-toggler\" data-toggle=\"collapse\" data-target=\".mobile-navigation\">\r\n            <span class=\"fa fa-list\"></span>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"mobile-navigation collapse\">\r\n    <ul class=\"nav nav-pills nav-stacked\">\r\n      <li  [class.active]= \"appState.get('one_page_menu_selected') == 1\">\r\n        <a class=\"mobile-menu-item\" [routerLink]=\"['/home']\" onclick=\"$('.mobile-navigation').removeClass('in');\">\r\n          {{tr('HOME')}}\r\n        </a>\r\n      </li>\r\n      <li   [class.active]= \"appState.get('one_page_menu_selected') == 2\" >\r\n        <a class=\"mobile-menu-item\" [routerLink]=\"['/score']\" onclick=\"$('.mobile-navigation').removeClass('in');\">\r\n          {{tr('SCOREBOARD')}}\r\n        </a>\r\n      </li>\r\n      <li    [class.active]= \"appState.get('one_page_menu_selected') == 5\">\r\n        <a class=\"mobile-menu-item\" [routerLink]=\"['/director_board']\" onclick=\"$('.mobile-navigation').removeClass('in');\">\r\n          {{tr('BOARD_OF_DIRECTORS')}}\r\n        </a>\r\n      </li>\r\n      <li  [class.active]= \"appState.get('one_page_menu_selected') == 6\" >\r\n        <a class=\"mobile-menu-item\" [routerLink]=\"['/sell']\" onclick=\"$('.mobile-navigation').removeClass('in');\">\r\n          {{tr('SELLBOARD')}}\r\n        </a>\r\n      </li>\r\n      <li  [class.active]= \"appState.get('one_page_menu_selected') == 9\" >\r\n        <a class=\"mobile-menu-item\" [routerLink]=\"['/selldonate']\" onclick=\"$('.mobile-navigation').removeClass('in');\">\r\n          {{tr('SELLDONATE')}}\r\n        </a>\r\n      </li>\r\n      <li [class.active]= \"appState.get('one_page_menu_selected') == 7\" >\r\n        <a class=\"mobile-menu-item\" [routerLink]=\"['/contact']\" onclick=\"$('.mobile-navigation').removeClass('in');\">\r\n          {{tr('CONTACTUS')}}\r\n        </a>\r\n      </li>\r\n\r\n\r\n      <li class=\"dropdown\" [class.hidden] = \"!authenticate.isLoggedIn()\" [class.active]= \"appState.get('one_page_menu_selected') == 3\">\r\n        <a class=\"mobile-menu-item dropdown-toggle\" data-toggle=\"dropdown\">\r\n          {{tr('PROFILE')}}\r\n        </a>\r\n        <ul class=\"\">\r\n          <li class=\"mobile-menu-item\"><a [routerLink]=\"['/profile/']\" onclick=\"$('.mobile-navigation').removeClass('in');\">{{tr('EDIT_PROFILE')}}</a></li>\r\n          <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role == USER_TYPE.MEMBER\" class=\"mobile-menu-item\"><a [routerLink]=\"['/profile/donate']\" onclick=\"$('.mobile-navigation').removeClass('in');\">{{tr('DONATE')}}</a></li>\r\n          <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.INDIVIDUAL && authenticate.currentUser.role != USER_TYPE.MEMBER\" class=\"main-menu-li\" [class.active]= \"appState.get('one_page_menu_selected') == 8\" >\r\n            <a class=\"\" [routerLink]=\"['/report']\">\r\n              {{tr('REPORT')}}\r\n            </a>\r\n          </li>\r\n          <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.MEMBER\" class=\"mobile-menu-item\"><a [routerLink]=\"['/profile/boxes']\" onclick=\"$('.mobile-navigation').removeClass('in');\">{{tr('BOXES')}}</a></li>\r\n          <li *ngIf=\"authenticate.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticate.currentUser.role != USER_TYPE.INDIVIDUAL && authenticate.currentUser.role != USER_TYPE.MEMBER\" class=\"mobile-menu-item\"><a [routerLink]=\"['/profile/members']\" onclick=\"$('.mobile-navigation').removeClass('in');\">{{tr('MEMBERS')}}</a></li>\r\n          <li class=\"mobile-menu-item\"><a href=\"{{SERVER_URL}}/logout\">{{tr('SIGN_OUT')}}</a></li>\r\n        </ul>\r\n      </li>\r\n      <li  [class.hidden] = \"authenticate.isLoggedIn()\">\r\n        <a class=\"mobile-menu-item \" class=\"\" href=\"{{SERVER_URL}}/login\">\r\n          {{tr('SIGN_IN')}}\r\n        </a>\r\n      </li>\r\n      <li class=\"main-menu-li dropdown\">\r\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n            Sign In/Up\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n                <li><a href=\"{{SERVER_URL}}/login\">Sign In</a></li>\r\n                <li><a href=\"{{SERVER_URL}}/register\">Sign Up</a></li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"\" style=\"    text-align: center;\">\r\n  <a class=\"\" [routerLink]=\"['/home']\"><img src=\"assets/img/logo-big.png\" alt=\"MillionMitzvot.com\" class=\"logo-big\"></a>\r\n</div> -->\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 983:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\r\n    <span style=\"color: #EC307C;\">Change</span> Password\r\n</h4>\r\n<div class=\"content-form-page\">\r\n  <form class=\"form-horizontal\" role=\"form\" #profileForm=\"ngForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n        <fieldset>\r\n          <div class=\"form-group\">\r\n            <label for=\"curPassword\" class=\"col-md-4 control-label\">{{tr(\"CURRENT_PASSWORD\")}}<span class=\"require\">*</span></label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" class=\"form-control\" id=\"curPassword\" name=\"curPassword\" [(ngModel)]=\"model.curPassword\" required=\"true\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"newPassword\" class=\"col-md-4 control-label\">{{tr(\"NEW_PASSWORD\")}}<span class=\"require\">*</span></label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" class=\"form-control\" id=\"newPassword\" name=\"newPassword\" [(ngModel)]=\"model.newPassword\" required=\"true\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label for=\"confirmPassword\" class=\"col-md-4 control-label\">{{tr(\"CONFIRM_PASSWORD\")}}<span class=\"require\">*</span></label>\r\n            <div class=\"col-md-8\">\r\n              <input type=\"password\" class=\"form-control\" id=\"confirmPassword\" name=\"confirmPassword\" [(ngModel)]=\"model.confirmPassword\" required=\"true\">\r\n            </div>\r\n          </div>\r\n          <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\r\n            <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\r\n            <p>{{successMessage}}</p>\r\n          </div>\r\n          <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\r\n            <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\r\n            <p>{{errorMessage}}</p>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <button type=\"button\" class=\"btn btn-primary green pull-right\" (click) = \"updatePassword(profileForm);\" style=\"margin-right: 30px;\">{{tr(\"SAVE_PASSWORD\")}}</button>\r\n          </div>\r\n        </fieldset>\r\n    </div>\r\n  </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ 984:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\n    <span style=\"color: #EC307C;\">Edit</span> Profile\n</h4>\n<div class=\"content-form-page\">\n  <form class=\"form-horizontal\" role=\"form\" #profileForm=\"ngForm\">\n  <div class=\"row\">\n    <div class=\"col-md-7 col-sm-7\">\n        <fieldset>\n          <legend>{{tr(\"DETAILS\")}}</legend>\n          <div class=\"form-group\">\n              <label class=\"control-label col-md-4\">{{tr('TYPE')}}<span class=\"require\">*</span></label>\n              <div class=\"col-md-8\" *ngIf = \"authService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN\">\n                <select class=\"form-control placeholder-no-fix padding-left-5\" [(ngModel)]=\"model.role\" name=\"role\" required=\"true\" style=\"padding-left: 6px; color: #aaa;\">\n                  <option value={{USER_TYPE.INDIVIDUAL}} *ngIf = \"authService.currentUser.role != USER_TYPE.MEMBER\">{{tr(\"INDIVIDUAL\")}}</option>\n                  <option value={{USER_TYPE.INSTITUTION}} *ngIf = \"authService.currentUser.role != USER_TYPE.MEMBER\">{{tr(\"INSTITUTION\")}}</option>\n                  <option value={{USER_TYPE.SCHOOL}} *ngIf = \"authService.currentUser.role != USER_TYPE.MEMBER\">{{tr(\"SCHOOL\")}}</option>\n                  <option value={{USER_TYPE.MEMBER}} *ngIf = \"authService.currentUser.role == USER_TYPE.MEMBER\">{{tr(\"MEMBER\")}}</option>\n                </select>\n              </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\" class=\"col-md-4 control-label\">{{tr(\"NAME\")}}<span class=\"require\">*</span></label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"model.name\" required=\"true\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"EMAIL\")}}<span class=\"require\">*</span></label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" required=\"true\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group\" [class.hidden] = \"model.type == 2\">\n            <label class=\"col-md-4 control-label\">{{tr(\"AGE\")}}</label>\n            <div class=\"col-md-8\">\n              <select class=\"form-control placeholder-no-fix padding-left-5\" name=\"age\" [(ngModel)]=\"model.age\" style=\"padding-left: 6px;color: #aaa;\">\n                <option value=4>3~5</option>\n                <option value=6>5~8</option>\n                <option value=9>8~11</option>\n                <option value=12>11~13</option>\n                <option value=15>13~18</option>\n                <option value=20>18~</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"SCHOOL\")}}</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"school\" [(ngModel)]=\"model.school\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"COMPANY\")}}</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"company\" [(ngModel)]=\"model.company\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"PHONE\")}}</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"phone\"  [(ngModel)]=\"model.phone\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"ADDRESS\")}}</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"address\" required = \"true\" [(ngModel)]=\"model.address\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"CITY\")}}</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"city\" required = \"true\" [(ngModel)]=\"model.city\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"COUNTRY\")}}</label>\n            <div class=\"col-md-8\">\n              <input type=\"text\" class=\"form-control\" name=\"country\" required = \"true\" [(ngModel)]=\"model.country\" >\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"BIRTHDAY\")}}</label>\n            <div class=\"col-md-8\">\n               <!-- <input type=\"text\" value=\"{{ getBirthDay() | date:'yyyy-MM-dd' }}\" class=\"datepicker form-control\"> -->\n               <div class=\"input-group input-medium date date-picker\" data-date=\"2016-09-09\" data-date-format=\"yyyy-mm-dd\" data-date-viewmode=\"years\" style=\"width: 100% !important;\">\n                    <input type=\"text\" class=\"form-control\" readonly=\"\" name=\"birthday\" id=\"input-birthday\">\n                    <span class=\"input-group-btn\">\n                        <button class=\"btn default\" type=\"button\" style=\"margin-right: 0px;\">\n                            <i class=\"fa fa-calendar\"></i>\n                        </button>\n                    </span>\n                </div>\n            </div>\n          </div>\n          <legend>{{tr(\"GOALS_DETAILS\")}}</legend>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"DAILY_GOAL\")}}</label>\n            <div class=\"col-md-6\">\n              <input type=\"number\" class=\"form-control\" name=\"goal_daily\" [(ngModel)]=\"model.goal_daily\" >\n            </div>\n            <label class=\"col-md-2 control-label\">{{(model.daily_count - model.goal_daily > 0)?\"+\":\"\"}}{{model.daily_count - model.goal_daily}}</label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"WEEKLY_GOAL\")}}</label>\n            <div class=\"col-md-6\">\n              <input type=\"number\" class=\"form-control\" name=\"goal_weekly\" [(ngModel)]=\"model.goal_weekly\" >\n            </div>\n            <label class=\"col-md-2 control-label\">{{(model.weekly_count - model.goal_weekly > 0)?\"+\":\"\"}}{{model.weekly_count - model.goal_weekly}}</label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-4 control-label\">{{tr(\"MONTHLY_GOAL\")}}</label>\n            <div class=\"col-md-6\">\n              <input type=\"number\" class=\"form-control\" name=\"goal_monthly\" [(ngModel)]=\"model.goal_monthly\" >\n            </div>\n            <label class=\"col-md-2 control-label\">{{(model.monthly_count - model.goal_monthly > 0)?\"+\":\"\"}}{{model.monthly_count - model.goal_monthly}}</label>\n          </div>\n        </fieldset>\n        <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\n          <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\n          <p>{{successMessage}}</p>\n        </div>\n        <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n          <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\n          <p>{{errorMessage}}</p>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-md-offset-4 padding-left-0 padding-top-20\" style=\"text-align:center;\">\n            <button type=\"submit\" class=\"btn btn-primary green\" (click) = \"updateProfile(profileForm);\">{{tr(\"UPDATE_PROFILE\")}}</button>\n          </div>\n        </div>\n    </div>\n    <div class=\"col-md-4 col-sm-4 pull-right\" style=\"text-align: center;    margin-top: 25px;\">\n        <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\">\n            <div class=\"fileinput-new thumbnail\" style=\"min-width: 200px; min-height: 200px;\">\n              <img id=\"profile-image-viewer\" alt=\"\" style=\"width: 100%; height: 100%;\">\n            </div>\n            <div>\n                <a class=\"btn green\" (click) = \"image_box_dialog.show();\">{{tr(\"EDIT_PROFILE_IMAGE\")}} </a>\n            </div>\n        </div>\n    </div>\n  </div>\n  </form>\n</div>\n<div bsModal #image_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\" style=\"max-width: 450px;\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"image_box_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i class=\"fa fa-edit\"></i>{{tr(\"IMAGE_EDIT_PAN\")}}</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;\" #editboxForm = \"ngForm\">\n          <div class=\"row\">\n            <fieldset style=\"\">\n              <div class=\"fileinput fileinput-new col-sm-12\" data-provides=\"fileinput\">\n                  <div class=\"fileinput-new thumbnail\">\n                    <!-- <img src=\"{{image_src}}\" alt=\"\"> -->\n                    <!-- <img-cropper #cropper [settings]=\"cropperSettings\"></img-cropper> -->\n                    <div class=\"cropper\" id = \"cropper\" style=\"width: 400px; height: 400px;\">\n                    </div>\n                  </div>\n                  <!-- <div class=\"fileinput-preview fileinput-exists thumbnail\" style=\"max-width: 200px; max-height: 150px;\"> </div> -->\n                  <div style=\"    text-align: center;\">\n                      <span class=\"btn default btn-file blue\">\n                        <span class=\"fileinput-new\">{{tr(\"SELECT_DIFFERENT_IMAGE\")}}</span>\n                        <input type=\"file\" name=\"...\" (change)=\"fileChange(input)\" #input>\n                      </span>\n                  </div>\n              </div>\n            </fieldset>\n            <fieldset style=\"text-align: right;padding-right: 30px;margin-top: 30px;\">\n              <div class=\"\">\n                <button class=\"btn btn-primary green\" (click)=\"saveImage(); image_box_dialog.hide();\">{{tr(\"SAVE\")}}</button>\n                <button class=\"btn red\" (click)=\"image_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 985:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\r\n    <span style=\"color: #EC307C;\">My</span> Boxes\r\n</h4>\r\n<div class=\"content-form-page\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n        <div class=\"btn-group\" *ngIf = \"authService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN\">\r\n            <button class=\"btn sbold green add-box-btn\" *ngIf=\"authService.currentUser.role == USER_TYPE.INDIVIDUAL\" (click) = \"model.device_id = 0; model.location = ''; add_box_dialog.show();\">{{tr(\"ADD_NEW\")}}\r\n                <i class=\"fa fa-plus\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"dataTables_wrapper\" style=\"padding-top: 15px;\">\r\n      <div class=\"row\">\r\n        <!-- <div class=\"col-md-6 col-sm-6\">\r\n          <div class=\"dataTables_length\" id=\"sample_5_length\">\r\n            <label>{{tr(\"SHOW\")}}\r\n              <select name=\"sample_5_length\" aria-controls=\"sample_5\" class=\"form-control input-sm input-xsmall input-inline\">\r\n                <option value=\"6\">10</option>\r\n                <option value=\"15\">15</option>\r\n                <option value=\"20\">20</option>\r\n                <option value=\"-1\">All</option>\r\n              </select>\r\n            </label>\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"col-md-6 col-sm-6\">\r\n          <div id=\"sample_5_filter\" class=\"dataTables_filter\">\r\n            <label>Search:\r\n              <input type=\"search\" class=\"form-control input-sm input-small input-inline\" placeholder=\"\" aria-controls=\"sample_5\">\r\n            </label>\r\n          </div>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"table-scrollable\">\r\n        <table class=\"table table-striped table-bordered table-advance table-hover table-checkable order-column dataTable\" role=\"grid\">\r\n          <thead>\r\n            <tr role=\"row\">\r\n              <th class=\"sorting\" tabindex=\"0\"  rowspan=\"1\" colspan=\"1\"  style=\"width: 7%;\">\r\n                {{tr(\"DEVICE_ID\")}}\r\n              </th>\r\n              <th class=\"sorting\" tabindex=\"0\" rowspan=\"1\" colspan=\"1\" style=\"width: 12%;\">\r\n                {{tr(\"LOCATION\")}}\r\n              </th>\r\n              <th class=\"sorting\" tabindex=\"0\" rowspan=\"1\" colspan=\"1\" style=\"width: 12%;\">\r\n                {{tr(\"DAILY_COUNT\")}}\r\n              </th>\r\n              <th class=\"sorting\" tabindex=\"0\" rowspan=\"1\" colspan=\"1\" style=\"width: 12%;\">\r\n                {{tr(\"LIFETIME_COUNT\")}}\r\n              </th>\r\n              <th class=\"sorting\" tabindex=\"0\" rowspan=\"1\" colspan=\"1\" style=\"width: 12%;\">\r\n                {{tr(\"AMOUNT_IN_BOX\")}}\r\n              </th>\r\n              <th class=\"sorting\" tabindex=\"0\" rowspan=\"1\" colspan=\"1\" style=\"width: 12%;\">\r\n                {{tr(\"TOTAL_AMOUNT_DEPOSITED\")}}\r\n              </th>\r\n              <th class=\"sorting\" tabindex=\"0\"  rowspan=\"1\" colspan=\"1\" style=\"width: 30%;\">\r\n                {{tr(\"ACTION\")}}\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <!-- <tfoot>\r\n            <tr>\r\n              <th colspan=\"3\" style=\"text-align:right\" rowspan=\"1\">Total:&nbsp;&nbsp;</th>\r\n              <th rowspan=\"1\" colspan=\"1\">$9589 ( $30253 total)</th>\r\n            </tr>\r\n          </tfoot> -->\r\n          <tbody>\r\n            <tr class=\"gradeX\" role=\"row\" *ngFor=\"let box of profileService.boxes; let i = index\">\r\n              <td class=\"\"> {{box.device_id}} </td>\r\n              <td class=\"sorting_1\">\r\n                  {{country_names[box.country_code]}}\r\n              </td>\r\n              <td class=\"\"> {{box.d_count}} </td>\r\n              <td class=\"\"> {{box.lifetime_count}} </td>\r\n              <td class=\"\"> {{box.deposit_amount}}</td>\r\n              <td class=\"\"> {{box.amount}}</td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn btn-primary green\" (click)=\"model.device_id=box.device_id; model.country_code = box.country_code; dev_index = i; edit_box_dialog.show();\">{{tr(\"EDIT\")}}</button>\r\n                <button type=\"button\" class=\"btn btn-warning blue\" (click)=\"device_id = box.device_id; dev_index = i; reset_box_dialog.show();\">{{tr(\"RESET\")}}</button>\r\n                <button type=\"button\" class=\"btn red\" (click)=\"device_id = box.device_id; dev_index = i; remove_box_dialog.show();\">{{tr(\"REMOVE\")}}</button>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\r\n    <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\r\n    <p>{{successMessage}}</p>\r\n  </div>\r\n</div>\r\n<div bsModal #add_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" (click)=\"add_box_dialog.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h3><i class=\"fa fa-plus\"></i>{{tr(\"ADD_NEW\")}}</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;\" #addboxForm = \"ngForm\">\r\n          <div class=\"row\">\r\n            <fieldset>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-lg-4 control-label\">{{tr(\"DEVICE_ID\")}}<span class=\"require\">*</span></label>\r\n                <div class=\"col-lg-8\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"device_id\" required=\"true\" [(ngModel)]=\"model.device_id\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-lg-4 control-label\">{{tr(\"SECRET_CODE\")}}<span class=\"require\">*</span></label>\r\n                <div class=\"col-lg-8\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"secretCode\" required=\"true\" [(ngModel)]=\"model.secretCode\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-lg-4 control-label\">{{tr(\"LOCATION\")}}<span class=\"require\">*</span></label>\r\n                <div class=\"col-lg-8\">\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.country_code\" name=\"country_code\" required>\r\n                    <option value=\"{{country_code}}\" *ngFor=\"let country_code of country_codes;\">{{country_names[country_code]}}</option>\r\n                  </select>\r\n                  <!-- <input type=\"text\" class=\"form-control\" name=\"location\" required=\"true\" [(ngModel)]=\"model.location\"> -->\r\n                </div>\r\n              </div>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n              <div class=\"col-lg-8 col-lg-offset-4\">\r\n                <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\r\n                  <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\r\n                  <p>{{errorMessage}}</p>\r\n                </div>\r\n              </div>\r\n            </fieldset>\r\n            <fieldset style=\"text-align: right;padding-right: 30px;\">\r\n              <div class=\"\">\r\n                <button class=\"btn btn-primary green\" (click)=\"createBox(addboxForm);\">{{tr(\"CREATE\")}}</button>\r\n                <button class=\"btn red\" (click)=\"add_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\r\n              </div>\r\n            </fieldset>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div bsModal #edit_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" (click)=\"edit_box_dialog.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h3><i class=\"fa fa-edit\"></i>{{tr(\"MODIFY\")}}</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form class=\"form-horizontal\" role=\"form\" novalidate style=\"display: block;\" #editboxForm = \"ngForm\">\r\n          <div class=\"row\">\r\n            <fieldset>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-lg-4 control-label\">{{tr(\"DEVICE_ID\")}}<span class=\"require\">*</span></label>\r\n                <div class=\"col-lg-8\">\r\n                  <input type=\"text\" class=\"form-control\" name=\"device_id\" required=\"true\" disabled [(ngModel)]=\"model.device_id\">\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label class=\"col-lg-4 control-label\">{{tr(\"LOCATION\")}}<span class=\"require\">*</span></label>\r\n                <div class=\"col-lg-8\">\r\n                  <!-- <input type=\"text\" class=\"form-control\" name=\"location\" required=\"true\" [(ngModel)]=\"model.location\"> -->\r\n                  <select class=\"form-control\" [(ngModel)]=\"model.country_code\" name=\"country_code\" required>\r\n                    <option value=\"{{country_code}}\" *ngFor=\"let country_code of country_codes;\">{{country_names[country_code]}}</option>\r\n                  </select>\r\n                </div>\r\n              </div>\r\n            </fieldset>\r\n            <fieldset class=\"form-group\">\r\n              <div class=\"col-lg-8 col-lg-offset-4\">\r\n                <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\r\n                  <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\r\n                  <p>{{errorMessage}}</p>\r\n                </div>\r\n              </div>\r\n            </fieldset>\r\n            <fieldset style=\"text-align: right;padding-right: 30px;\">\r\n              <div class=\"\">\r\n                <button class=\"btn btn-primary green\" (click)=\"editBox(editboxForm);\">{{tr(\"EDIT\")}}</button>\r\n                <button class=\"btn red\" (click)=\"edit_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\r\n              </div>\r\n            </fieldset>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #remove_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" (click)=\"edit_box_dialog.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h3><i class=\"fa fa-warning\"></i>{{tr(\"DELETE\")}}</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{tr(\"DELETE_MESSAGE\")}}</p>\r\n        <button class=\"btn btn-primary red\" (click)=\"removeBox();remove_box_dialog.hide();\">{{tr(\"DELETE\")}}</button>\r\n        <button class=\"btn green\" (click)=\"remove_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div bsModal #reset_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Reset Box\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" (click)=\"reset_box_dialog.hide()\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n        <h3><i class=\"fa fa-warning\"></i>{{tr(\"RESET\")}}</h3>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <p>{{tr(\"RESET_MESSAGE\")}}</p>\r\n        <button class=\"btn btn-primary red\" (click)=\"resetBox();reset_box_dialog.hide();\">{{tr(\"RESET\")}}</button>\r\n        <button class=\"btn green\" (click)=\"reset_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 986:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\r\n    Ask Donate\r\n</h4>\r\n<div class=\"content-form-page\">\r\n  <form class=\"form-horizontal \" role=\"form\" (ngSubmit) = \"saveDonate(donateForm);\" #donateForm=\"ngForm\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12 col-sm-12\">\r\n        <fieldset   >\r\n          <legend   ></legend>\r\n          <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\r\n            <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\r\n            <p>{{errorMessage}}</p>\r\n          </div>\r\n          <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\r\n            <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\r\n            <p>{{successMessage}}</p>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Name</label>\r\n            <div class=\"col-md-6\">\r\n              <input class=\"form-control \" id=\"name\" name=\"name\" placeholder=\"\" required=\"\" type=\"text\" [(ngModel)]=\"model.name\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Brief Description</label>\r\n            <div class=\"col-md-6\">\r\n                <textarea class=\"form-control ng-untouched ng-pristine ng-valid\" cols=\"40\" id=\"description\" name=\"description\"\r\n                placeholder=\"\" rows=\"8\"  [(ngModel)]=\"model.description\"></textarea>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Picture</label>\r\n\r\n            <div class=\"col-md-6\">\r\n                <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" style=\"float: left;\">\r\n                    <span class=\"btn green btn-file\">\r\n                        <span class=\"fileinput-new\"> Select Picture </span>\r\n                        <span class=\"fileinput-exists\"> Change </span>\r\n                        <input    accept=\"image/*\" class=\"imageFile\" name=\"file\" type=\"file\"> </span>\r\n                    <span class=\"fileinput-filename\"> </span> &nbsp;\r\n                    <a class=\"close fileinput-exists\" data-dismiss=\"fileinput\" href=\"javascript:;\"> </a>\r\n                </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>City</label>\r\n            <div class=\"col-md-6\">\r\n              <input class=\"form-control ng-untouched ng-pristine ng-invalid\" id=\"city\" name=\"city\" placeholder=\"\" required=\"\" type=\"text\" [(ngModel)]=\"model.city\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Country</label>\r\n            <div class=\"col-md-6\">\r\n              <input class=\"form-control ng-untouched ng-pristine ng-invalid\" id=\"country\" name=\"country\" placeholder=\"\" required=\"\" type=\"text\" [(ngModel)]=\"model.country\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Commitment</label>\r\n            <div class=\"col-md-6\">\r\n              <input class=\"form-control ng-untouched ng-pristine ng-invalid\" id=\"commitment\" name=\"commitment\"\r\n              placeholder=\"\" required=\"\" type=\"text\" [(ngModel)]=\"model.commitment\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Donate Count</label>\r\n            <div class=\"col-md-6\">\r\n              <input class=\"form-control ng-untouched ng-pristine ng-valid\" id=\"donate_count\"\r\n              name=\"donate_count\" placeholder=\"\" required=\"\" type=\"number\" [(ngModel)]=\"model.donate_count\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-group margin-top:20px\">\r\n            <label class=\"col-md-3 control-label\" for=\"name\"><span class=\"require\"></span>Exist Count</label>\r\n            <div class=\"col-md-6\">\r\n              <input class=\"form-control ng-untouched ng-pristine ng-valid\" id=\"exist_count\"\r\n              name=\"exist_count\" placeholder=\"\" required=\"\" type=\"number\" [(ngModel)]=\"model.exist_count\" readonly=\"\">\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div    style=\"text-align:center;\">\r\n              <button class=\"btn btn-primary green\" type=\"submit\">Save Donate</button>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n    </div>\r\n\r\n  </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ 987:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\n    <span style=\"color: #EC307C;\">My</span> Members\n</h4>\n<div class=\"content-form-page\">\n  <div class=\"row\">\n    <div class=\"col-xs-12\">\n        <div class=\"btn-group\">\n            <button class=\"btn sbold green add-member-btn\" (click) = \"showAddDialog();\">{{tr(\"ADD_NEW\")}}\n                <i class=\"fa fa-plus\"></i>\n            </button>\n        </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"dataTables_wrapper col-xs-12\" style=\"padding-top: 15px;\">\n      <!-- <div class=\"row\">\n        <div class=\"col-md-6 col-sm-6\">\n          <div class=\"dataTables_length\" id=\"sample_5_length\">\n            <label>{{tr(\"SHOW\")}}\n              <select name=\"sample_5_length\" aria-controls=\"sample_5\" class=\"form-control input-sm input-xsmall input-inline\">\n                <option value=\"6\">6</option>\n                <option value=\"15\">15</option>\n                <option value=\"20\">20</option>\n                <option value=\"-1\">All</option>\n              </select>\n            </label>\n          </div>\n        </div>\n        <div class=\"col-md-6 col-sm-6\">\n          <div id=\"sample_5_filter\" class=\"dataTables_filter\">\n            <label>Search:\n              <input type=\"search\" class=\"form-control input-sm input-small input-inline\" placeholder=\"\" aria-controls=\"sample_5\">\n            </label>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"table-scrollable\">\n        <table class=\"table table-striped table-advance table-bordered table-hover table-checkable order-column dataTable\" role=\"grid\">\n          <thead>\n            <tr role=\"row\">\n              <th class=\"sorting\" tabindex=\"0\"  rowspan=\"1\" colspan=\"1\" style=\"width: 15%;\">\n                {{tr(\"NAME\")}}\n              </th>\n              <!-- <th class=\"sorting\" tabindex=\"0\" rowspan=\"1\" colspan=\"1\">\n                {{tr(\"EMAIL\")}}\n              </th> -->\n              <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"BOX_IDS\")}}\n              </th>\n              <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"DAILY_COUNT\")}}\n              </th>\n              <!-- <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"WEEKLY_COUNT\")}}\n              </th> -->\n              <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"MONTHLY_COUNT\")}}\n              </th>\n              <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"AMOUNT_IN_BOX\")}}\n              </th>\n              <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"PHONE\")}}\n              </th>\n              <!-- <th class=\"sorting\" style=\"width: 10%;\">\n                {{tr(\"LIFETIME_COUNT\")}}\n              </th> -->\n              <th class=\"sorting\" tabindex=\"0\"  rowspan=\"1\" colspan=\"1\">\n                {{tr(\"ACTION\")}}\n              </th>\n            </tr>\n          </thead>\n          <!-- <tfoot>\n            <tr>\n              <th colspan=\"3\" style=\"text-align:right\" rowspan=\"1\">Total:&nbsp;&nbsp;</th>\n              <th rowspan=\"1\" colspan=\"1\">$9589 ( $30253 total)</th>\n            </tr>\n          </tfoot> -->\n          <tbody>\n            <tr class=\"gradeX\" role=\"row\" *ngFor=\"let member of profileService.members; let i =index;\">\n              <td class=\"\"> {{member.name}} </td>\n              <!-- <td class=\"sorting_1\">\n                  {{member.email}}\n              </td> -->\n              <td>\n                {{array_to_string(member.boxes)}}\n              </td>\n              <td>\n                {{member.goal_daily}}/{{member.daily_count}}\n              </td>\n              <!-- <td>\n                {{member.goal_weekly}}/{{member.weekly_count}}\n              </td> -->\n              <td>\n                {{member.goal_monthly}}/{{member.monthly_count}}\n              </td>\n              <td>\n                {{member.amount}}\n              </td>\n              <td>\n                {{member.phone}}\n              </td>\n              <td>\n                <button type=\"button\" class=\"btn btn-primary blue\" (click)=\"dev_index=i;showEditDialog(member)\" ><i class=\"fa fa-edit blue\"></i></button>\n                <button type=\"button\" class=\"btn red\" (click)=\"dev_index = i; remove_member_dialog.show();\" ><i class=\"fa fa-trash-o red\"></i></button>\n                <a class=\"btn green\" href=\"mailto: {{member.email}}\" ><i class=\"fa fa-envelope green\"></i></a>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</div>\n<div bsModal #add_member_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Member\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"add_member_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3>{{tr(\"ADD_NEW\")}}</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;\" #addmemberForm = \"ngForm\">\n          <div class=\"row\">\n            <fieldset>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"NAME\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"name\" required=\"true\" [(ngModel)]=\"model.name\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"EMAIL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"email\" required=\"true\" type=\"email\" [(ngModel)]=\"model.email\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"PHONE\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"ADDRESS\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"address\" required = \"true\" [(ngModel)]=\"model.address\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"CITY\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"city\" required = \"true\" [(ngModel)]=\"model.city\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"COUNTRY\")}}</label>\n                <div class=\"col-lg-8\">\n                  <!-- <input type=\"text\" class=\"form-control\" name=\"country\" required = \"true\" [(ngModel)]=\"model.country\"> -->\n                  <select class=\"form-control\" [(ngModel)]=\"model.country\" name=\"country\" required>\n                    <option value=\"{{country_code}}\" *ngFor=\"let country_code of country_codes;\">{{country_names[country_code]}}</option>\n                  </select>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"PASSWORD\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"password\" required=\"true\" type=\"password\" [(ngModel)]=\"model.password\">\n                </div>\n              </div>\n              <div class=\"form-group\" *ngFor=\"let box of model.boxes; let i = index;trackBy:customTrackBy\">\n                <div class=\"row\" style=\"margin: 0px; margin-bottom: 15px;\">\n                  <label class=\"col-lg-4 control-label\">{{tr(\"BOX_ID\")}}</label>\n                  <div class=\"col-lg-8\">\n                    <input class=\"form-control\" name=\"boxes[{{i}}]\" required=\"true\" type=\"number\" [(ngModel)]=\"model.boxes[i]\">\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin: 0px;\">\n                  <label class=\"col-lg-4 control-label\">{{tr(\"SECRET_CODE\")}}</label>\n                  <div class=\"col-lg-8\">\n                    <input class=\"form-control\" name=\"secretCodes[{{i}}]\" required=\"true\" type=\"text\" [(ngModel)]=\"model.secretCodes[i]\">\n                  </div>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\" *ngFor = \"let secretCode of model.secretCodes; let i = index;trackBy:customTrackBy\">\n\n              </div> -->\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"DAILY_GOAL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"goal_daily\" required=\"true\" type=\"number\" [(ngModel)]=\"model.goal_daily\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"WEEKLY_GOAL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"goal_weekly\" required=\"true\" type=\"number\" [(ngModel)]=\"model.goal_weekly\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"MONTHLY_GOAL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"goal_monthly\" required=\"true\" type=\"number\" [(ngModel)]=\"model.goal_monthly\">\n                </div>\n              </div>\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <div class=\"col-lg-8 col-lg-offset-4\">\n                <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n                  <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\n                  <p>{{errorMessage}}</p>\n                </div>\n              </div>\n            </fieldset>\n            <fieldset style=\"text-align: right;padding-right: 30px;\">\n              <div class=\"\">\n                <button class=\"btn btn-primary blue\" (click)=\"addBoxToCreate();\">{{tr(\"ADD_BOX\")}}</button>\n                <button class=\"btn btn-primary blue\" (click)=\"removeBoxToCreate();\" [disabled] = \"model.boxes.length < 2\">{{tr(\"REMOVE_BOX\")}}</button>\n                <button class=\"btn btn-primary green\" (click)=\"createMember(addmemberForm);\">{{tr(\"CREATE\")}}</button>\n                <button class=\"btn red\" (click)=\"add_member_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div bsModal #edit_member_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Edit Member\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"edit_box_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3>{{tr(\"MODIFY\")}}</h3>\n      </div>\n      <div class=\"modal-body\">\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;\" #edit_memberForm = \"ngForm\">\n          <div class=\"row\">\n            <fieldset>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"NAME\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"name\" required=\"true\" [(ngModel)]=\"model.name\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"EMAIL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"email\" type=\"email\" required=\"true\" [(ngModel)]=\"model.email\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"PHONE\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"ADDRESS\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"address\" required = \"true\" [(ngModel)]=\"model.address\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"CITY\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"city\" required = \"true\" [(ngModel)]=\"model.city\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"COUNTRY\")}}</label>\n                <div class=\"col-lg-8\">\n                  <input type=\"text\" class=\"form-control\" name=\"country\" required = \"true\" [(ngModel)]=\"model.country\">\n                </div>\n              </div>\n              <div class=\"form-group\" *ngFor=\"let box of model.boxes; let i = index;trackBy:customTrackBy\">\n                <div class=\"row\" style=\"margin: 0px; margin-bottom: 15px;\">\n                  <label class=\"col-lg-4 control-label\">{{tr(\"BOX_ID\")}}</label>\n                  <div class=\"col-lg-8\">\n                    <input class=\"form-control\" name=\"boxes[{{i}}]\" required=\"true\" type=\"number\" [(ngModel)]=\"model.boxes[i]\">\n                  </div>\n                </div>\n                <div class=\"row\" style=\"margin: 0px;\">\n                  <label class=\"col-lg-4 control-label\">{{tr(\"SECRET_CODE\")}}</label>\n                  <div class=\"col-lg-8\">\n                    <input class=\"form-control\" name=\"secretCodes[{{i}}]\" required=\"true\" type=\"text\" [(ngModel)]=\"model.secretCodes[i]\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"DAILY_GOAL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"goal_daily\" required=\"true\" type=\"number\" [(ngModel)]=\"model.goal_daily\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"WEEKLY_GOAL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"goal_weekly\" required=\"true\" type=\"number\" [(ngModel)]=\"model.goal_weekly\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-lg-4 control-label\">{{tr(\"MONTHLY_GOAL\")}}<span class=\"require\">*</span></label>\n                <div class=\"col-lg-8\">\n                  <input class=\"form-control\" name=\"goal_monthly\" required=\"true\" type=\"number\" [(ngModel)]=\"model.goal_monthly\">\n                </div>\n              </div>\n            </fieldset>\n            <fieldset class=\"form-group\">\n              <div class=\"col-lg-8 col-lg-offset-4\">\n                <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n                  <button type=\"button\" class=\"close\" (click) = \"errorMessage = ''\"></button>\n                  <p>{{errorMessage}}</p>\n                </div>\n              </div>\n            </fieldset>\n            <fieldset style=\"text-align: right;padding-right: 30px;\">\n              <div class=\"\">\n                <button class=\"btn btn-primary blue\" (click)=\"addBoxToCreate();\">{{tr(\"ADD_BOX\")}}</button>\n                <button class=\"btn btn-primary blue\" (click)=\"removeBoxToCreate();\" [disabled] = \"model.boxes.length < 2\">{{tr(\"REMOVE_BOX\")}}</button>\n                <button class=\"btn btn-primary green\" (click)=\"editMember(edit_memberForm);\">{{tr(\"EDIT\")}}</button>\n                <button class=\"btn red\" (click)=\"edit_member_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n              </div>\n            </fieldset>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n<div bsModal #remove_member_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Remove Member\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"edit_box_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i class=\"fa fa-warning\"></i>{{tr(\"DELETE\")}}</h3>\n      </div>\n      <div class=\"modal-body\">\n        <p>{{tr(\"DELETE_MESSAGE\")}}</p>\n        <button class=\"btn btn-primary red\" (click)=\"removeMember();remove_member_dialog.hide();\">{{tr(\"DELETE\")}}</button>\n        <button class=\"btn green\" (click)=\"remove_member_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 988:
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"container\">\n    <div class=\"row margin-bottom-40\">\n      <!-- BEGIN CONTENT -->\n        <router-outlet></router-outlet>\n      <!-- END CONTENT -->\n    </div>\n    <!-- END SIDEBAR & CONTENT -->\n  </div>\n</div>\n"

/***/ }),

/***/ 989:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\n    <span style=\"color: #EC307C;\"></span> Report\n</h4>\n<div class=\"margin-top-30\" style=\"text-align:center\">\n<div class=\"container\" style=\"background: white;\">\n<div class=\"content-form-page\">\n  <div class=\"row\">\n    <div class=\"col-md-12 col-sm-12\">\n        <fieldset>\n          <div class=\"row\" style=\"padding: 20px;\">\n            <span style=\"font-size: 20px;\">Avaliable Amount : </span>\n            <span class=\"avaliable-amount\">${{avaliable_money}}</span>\n            <button type=\"button\" class=\"btn btn-primary green\" style=\"margin-top:-10px;\" [disabled]=\"avaliable_money == 0\" (click)=\"initPaidData();get_paid_dialog.show();\">Get Paid Now</button>\n          </div>\n          <div class=\"alert alert-success \" [class.hidden] = \"successMessage == ''\">\n            <button type=\"button\" class=\"close\" (click) = \"successMessage = ''\"></button>\n            <p>{{successMessage}}</p>\n          </div>\n          <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n            <button class=\"close\" (click) = \"errorMessage = ''\"></button>\n            <p>{{errorMessage}}</p>\n          </div>\n          <table class=\"table table-striped table-bordered table-advance table-hover\">\n              <thead>\n                  <tr>\n                      <th>Date</th>\n                      <th>Type</th>\n                      <th>User</th>\n                      <th>Amount($)</th>\n                  </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of transactions; let i = index;\">\n                    <td style=\"text-align:left;width:25%;\">{{item.date}}</td>\n                    <td style=\"text-align:left;width:25%;\">{{transaction_type[item.type]}}</td>\n                    <td style=\"text-align:left;width:25%;\">{{item.name}} ({{item.email}})</td>\n                    <td style=\"text-align:left;width:25%;\">{{item.amount}}</td>\n                </tr>\n              </tbody>\n              <tfoot>\n              <tr>\n                  <td colspan=\"4\">\n                    <div class=\"paging_bootstrap_number\" style=\"text-align:right;\">\n                      <pagination class=\"\"\n                                  [(ngModel)]=\"curPage\"\n                                  [totalItems]=\"totalCount\"\n                                  [itemsPerPage]=\"itemsPerPage\"\n                                  [maxSize]=\"100\"\n                                  previousText=\"&lsaquo;\"\n                                  nextText=\"&rsaquo;\"\n                                  (pageChanged)=\"refreshTable($event)\">\n                      </pagination>\n                    </div>\n                  </td>\n              </tr>\n              </tfoot>\n          </table>\n\n\n        </fieldset>\n\n    </div>\n\n  </div>\n</div>\n</div>\n</div>\n\n<div bsModal #get_paid_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Get Paid\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" style=\"width:600px\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"get_paid_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i></i>Get Paid</h3>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"form-horizontal\" role=\"form\" novalidate style=\"display: block;\">\n            <div class=\"alert alert-danger \" [class.hidden] = \"errorPaidMessage == ''\">\n              <button class=\"close\" (click) = \"errorPaidMessage = ''\"></button>\n              <p>{{errorPaidMessage}}</p>\n            </div>\n\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Email : </label>\n              <div class=\"col-md-7\">\n                <input class=\"form-control\" style=\"text-align: left;\" readonly value=\"{{authenticate.email}}\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Password : </label>\n              <div class=\"col-md-7\">\n                <input type=\"password\" class=\"form-control\" style=\"text-align: left;\" [(ngModel)]=\"password\">\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-4 control-label\">Amount : </label>\n              <div class=\"col-md-7\">\n                <input type=\"number\" class=\"form-control\" style=\"text-align: left;\" [(ngModel)]=\"paid_amount\">\n              </div>\n            </div>\n\n          <fieldset style=\"text-align: right;padding-right: 30px;\">\n            <div class=\"\">\n              <button type=\"button\" class=\"btn btn-primary green\" (click)=\"getpaid();\">OK</button>\n              <button type=\"button\" class=\"btn btn-primary red\" (click)=\"get_paid_dialog.hide();\">Cancel</button>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 990:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"title\">\r\n    <span style=\"color: #EC307C;\">Score</span> Board\r\n</h4>\r\n<div class=\"page-content\">\r\n  <div class=\"left-panel\">\r\n    <div class=\"profile-space\" *ngIf = \" scores.length > 0\">\r\n      <div class=\"row\">\r\n        <img src=\"{{scores[current_item].image_url}}\" class=\"avatar\" style=\"border-radius: 50% !important;\"/>\r\n      </div>\r\n      <div class=\"row\" style=\"margin-top: 20px;\">\r\n        <p class=\"office-detail-name\">{{scores[current_item].name}}</p>\r\n        <p class=\"office-detail-address\">{{scores[current_item].address}}, {{scores[current_item].country}}</p>\r\n      </div>\r\n      <button type=\"button\" class=\"btn white follow-btn\" (click) = \"followUser();\" *ngIf = \"authService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN\">{{scores[current_item].is_current_user_following > 0?\"Unfollow\": \"Follow\"}}</button>\r\n      <div class=\"user-info\" *ngIf = \"authService.currentUser != null\">\r\n        <h4 class=\"scoreboard-sidebar-header\">Your Mitzvot</h4>\r\n        <p class=\"scoreboard-sidebar-content\">Today <span class=\"pull-right\">{{authService.currentUser.daily_count}}/{{authService.currentUser.goal_daily}}</span></p>\r\n        <p class=\"scoreboard-sidebar-content\">This Week <span class=\"pull-right\">{{authService.currentUser.weekly_count}}/{{authService.currentUser.goal_weekly}}</span></p>\r\n        <p class=\"scoreboard-sidebar-content\">This Month <span class=\"pull-right\">{{authService.currentUser.monthly_count}}/{{authService.currentUser.goal_monthly}}</span></p>\r\n      </div>\r\n      <div class=\"user-info\" *ngIf = \"authService.currentUser != null\">\r\n        <h4 class=\"scoreboard-sidebar-header\">Your C-Box</h4>\r\n        <p class=\"scoreboard-sidebar-content\" style=\"border-bottom: none;\">Total <span class=\"pull-right\">${{authService.currentUser.deposit_money}}</span></p>\r\n      </div>\r\n      <a class=\"btn btn-primary send-money-btn\" *ngIf = \"authService.currentUser != null && authService.currentUser.deposit_money > 0 && authService.currentUser.role == USER_TYPE.INDIVIDUAL\" [routerLink]=\"['/donate/']\">Send Now!</a>\r\n      <a class=\"btn btn-primary send-money-btn\" *ngIf = \"authService.currentUser != null && authService.currentUser.deposit_money > 0 && authService.currentUser.role == USER_TYPE.MEMBER\" href =\"/profile/donateMoney?amount={{authService.currentUser.deposit_money}}\">>Send Now!</a>\r\n    </div>\r\n  </div>\r\n  <div class=\"right-panel\" *ngIf = \"scores.length > 0\">\r\n    <div class=\"user-info\" style=\" margin-top: 50px;\">\r\n      <h4 class=\"scoreboard-sidebar-header\">\r\n        <i class=\"fa fa-bars\"></i>\r\n        <span style=\"font-weight: normal;\">Following</span> Leaders\r\n      </h4>\r\n      <div class=\"leader-tile\" *ngFor = \"let leader of scores[current_item].followingUsers\">\r\n        <img onerror=\"this.src='assets/global/img/default_avatar.jpg'\" src = \"{{leader.image_url}}\" class=\"avatar small\" style=\"border-radius: 50% !important;\"/>\r\n        <div style=\"width: calc(100% - 75px); padding-bottom: 10px; border-bottom: 1px solid #ccc;\">\r\n          <div class=\"col-xs-8\" style=\"padding-left: 0px;\">\r\n            <h4>{{leader.name}}</h4>\r\n            <span>{{leader.address}}, {{leader.country}}</span>\r\n          </div>\r\n          <div class=\"col-xs-4\" style=\"text-align: center;padding: 0px;\">\r\n            <h4>+{{leader.deposit_count}}</h4>\r\n            <span>Mitzvots</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"portlet light portlet-fit\">\r\n          <div class=\"portlet-title\" style=\"padding-bottom: 0px !important; padding-top: 10px !important;\">\r\n              <div class=\"btn-group pull-right\" dropdown>\r\n                <button type=\"button\" class=\"btn btn-primary search-filter\" dropdownToggle>\r\n                  Search Filter <span class=\"caret\"></span>\r\n                </button>\r\n                <ul class=\"dropdown-menu search-filters\" dropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\r\n                  <li role=\"menuitem\">\r\n                    <a class=\"dropdown-item\" (click) = \"searchFilter = 'name'\">\r\n                      <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'name'\" ></i>\r\n                      Name\r\n                    </a>\r\n                  </li>\r\n                  <li role=\"menuitem\">\r\n                    <a class=\"dropdown-item\" (click) = \"searchFilter = 'country'\">\r\n                      <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'country'\" ></i>\r\n                      Country\r\n                    </a>\r\n                  </li>\r\n                  <li role=\"menuitem\">\r\n                    <a class=\"dropdown-item\" (click) = \"searchFilter = 'school'\">\r\n                      <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'school'\" ></i>\r\n                      School\r\n                    </a>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"caption pull-right\" style=\" display: inline-flex; border: 1px solid #ddd; border-radius: 5px !important; margin-right: 10px;    padding: 3px 12px !important;\">\r\n                <i class=\"fa fa-search\" style=\"margin-top: 10px;\"></i>\r\n                <input class=\"form-control\" [(ngModel)]=\"searchString\" placeholder=\"Search\" (keyup.enter)=\"search();\" style=\"border: none;\">\r\n              </div>\r\n          </div>\r\n        </div>\r\n        <table class=\"table table-striped table-bordered table-advance table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th style=\"text-align: center;\">#</th>\r\n                    <th (click) = \"sort('name')\" style=\"min-width: 200px;\">\r\n                        {{tr(\"NAME\")}}\r\n                        <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'name'\" [class.fa-sort-asc]=\"sortField == 'name' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'name' && sortDirection\"></i>\r\n                    </th>\r\n                    <th class=\"hidden-xs\" (click) = \"sort('country')\">\r\n                        {{tr(\"COUNTRY\")}}\r\n                        <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'country'\" [class.fa-sort-asc]=\"sortField == 'country' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'country' && sortDirection\"></i>\r\n                    </th>\r\n                    <th class=\"hidden-xs\" (click) = \"sort('type')\">\r\n                        City\r\n                        <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'type'\" [class.fa-sort-asc]=\"sortField == 'type' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'type' && sortDirection\"></i>\r\n                    </th>\r\n                    <th class=\"hidden-xs\" (click) = \"sort('school')\">\r\n                        {{tr(\"SCHOOL\")}}\r\n                        <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'school'\" [class.fa-sort-asc]=\"sortField == 'school' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'school' && sortDirection\"></i>\r\n                    </th>\r\n                    <th (click) = \"sort('box_count')\">\r\n                      {{tr(\"BOX_COUNT\")}}\r\n                      <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'box_count'\" [class.fa-sort-asc]=\"sortField == 'box_count' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'box_count' && sortDirection\"></i>\r\n                    </th>\r\n                    <th (click) = \"sort('daily_count')\">\r\n                      {{tr(\"DAILY_COUNT\")}}\r\n                      <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'daily_count'\" [class.fa-sort-asc]=\"sortField == 'daily_count' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'daily_count' && sortDirection\"></i>\r\n                    </th>\r\n                    <th (click) = \"sort('deposit_count')\">\r\n                      {{tr(\"DEPOSIT_COUNT\")}}\r\n                      <i class=\"fa font-gray pull-right\" [class.fa-sort]=\"sortField != 'deposit_count'\" [class.fa-sort-asc]=\"sortField == 'deposit_count' && !sortDirection\" [class.fa-sort-desc]=\"sortField == 'deposit_count' && sortDirection\"></i>\r\n                    </th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of scores; let i = index;\">\r\n                    <td class=\"text-right\" style=\"text-align: center;\">{{i + 1}}</td>\r\n                    <td class=\"highlight\">\r\n                        <!-- <div class=\"success\" *ngIf = \" i < 5\"></div> -->\r\n                        <a style=\"    margin-left: 15px;\" (click) = \"current_item = i;\">{{item.name}}</a>\r\n                    </td>\r\n                    <td class=\"hidden-xs\">{{item.country}}</td>\r\n                    <td class=\"hidden-xs\">{{item.city}}</td>\r\n                    <td class=\"hidden-xs\">{{item.school}}</td>\r\n                    <!-- <td class=\"text-right\">{{item.score}}$</td> -->\r\n                    <td class=\"text-right\">{{item.box_count}}</td>\r\n                    <td class=\"text-right\">{{item.daily_count}}</td>\r\n                    <td class=\"text-right\">{{item.deposit_count}}</td>\r\n                </tr>\r\n            </tbody>\r\n            <tfoot>\r\n            <tr>\r\n                <td colspan=\"8\">\r\n                  <div class=\"paging_bootstrap_number\" style=\"text-align:right;\">\r\n                    <pagination class=\"\"\r\n                                [(ngModel)]=\"curPage\"\r\n                                [totalItems]=\"totalCount\"\r\n                                [itemsPerPage]=\"itemsPerPage\"\r\n                                [maxSize]=\"100\"\r\n                                previousText=\"&lsaquo;\"\r\n                                nextText=\"&rsaquo;\"\r\n                                (pageChanged)=\"refreshTable($event)\">\r\n                    </pagination>\r\n                  </div>\r\n                </td>\r\n            </tr>\r\n            </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"page-footer\">\r\n    <div class=\"page-footer-inner\" style=\"color: white;\"> Copyrights@2016, Millionmitzvot.com</div>\r\n</div>"

/***/ }),

/***/ 991:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\n    Purchase\n</h4>\n<div class=\"page-content\" style=\"\">\n  <div class=\"container\">\n      <!-- BEGIN SIDEBAR & CONTENT -->\n      <div class=\"row margin-bottom-40\">\n        <div class=\"alert alert-success \" [class.hidden] = \"paySuccess != 0\">\n          <button type=\"button\" class=\"close\" (click) = \"paySuccess = 2\"></button>\n          <p style=\"text-align:center\">Paid Success</p>\n        </div>\n        <div class=\"alert alert-danger \" [class.hidden] = \"paySuccess != 1\">\n          <button class=\"close\" (click) = \"paySuccess = 2\"></button>\n          <p style=\"text-align:center\">Paid Fail</p>\n        </div>\n\n        <!-- BEGIN CONTENT -->\n        <div class=\"col-md-12 col-sm-12\">\n          <div class=\"product-page\">\n            <div class=\"row\" style=\"margin-top: 30px;\">\n              <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n                <button class=\"close\" (click) = \"errorMessage = ''\"></button>\n                <p>{{errorMessage}}</p>\n              </div>\n              <div class=\"col-md-5 col-sm-5\">\n                <div class=\"product-main-image\">\n                  <img [src]=\"curSellBox.main_image\" alt=\"Cool green dress with red bell\" class=\"img-responsive main-box-img\" data-BigImgsrc=\"assets/img/Boxpicture.png\">\n                </div>\n                <div  class=\"product-other-images\">\n                  <a class=\"mix-preview fancybox-button\" ></a>\n                  <a *ngFor=\"let img of curSellBox.images\" [href]=\"img\" class=\"fancybox-button\" rel=\"photos-lib\"><img class=\"sell-item-img\" alt=\"Berry Lace Dress\" [src]=\"img\"></a>\n                </div>\n              </div>\n              <div class=\"col-md-7 col-sm-7\">\n                <h1>{{curSellBox.title}}</h1>\n                <div class=\"description\">\n                  <p>{{curSellBox.detail}}</p>\n                </div>\n                <div class=\"price-availability-block clearfix\" style=\"display:inline-flex\">\n                  <span style=\"margin-top: auto;margin-right: 5px;margin-bottom: 6px;font-size: 16px;font-weight: bold;\">Price: </span>\n                  <div class=\"price\">\n                    <strong>${{curSellBox.price}}</strong>\n                  </div>\n                </div>\n                <div class=\"aKm\"></div>\n\n                <div style=\"display:none\" >\n                <!-- <div style=\"display:inline-flex\" > -->\n                    <div *ngFor=\"let sb of sellBoxes\" class=\"radio-item \">\n                      <input type=\"radio\" name=\"type_radio\" [attr.id]=\"'type-' + sb.id\"   hidden=\"\" [checked]=\"sb == curSellBox?true:false\">\n                      <label class=\"\" [attr.for]=\"'type-' + sb.id\" id=\"labCar_23\" (click)=\"selectBox(sb.id)\">{{sb.type}}</label>\n                    </div>\n                </div>\n\n                <div class=\"\" style=\"display:none\">\n                    <!-- <div class=\"aKm\"></div> -->\n                    <div style=\"font-size: 17px;padding-bottom: 13px;color: black;\">\n                      You can donate boxes to organizations\n                    </div>\n                    <div class=\"amount\" style=\"display:inline-flex\">\n                          <span style=\"margin-top: 5px; margin-right:5px;\">Donate :</span>\n                          <div class=\"input-group\" style=\"width: 90px;\">\n                            <select class=\"form-control placeholder-no-fix padding-left-5\" name=\"donate_id\" [(ngModel)]=\"donate_id\" style=\"padding-left: 6px;color: #aaa;\">\n                              <option value=\"0\"></option>\n                              <option value=\"{{donate.id}}\" *ngFor=\"let donate of profileService.donates; let i = index\">\n                                {{donate.name}}\n                              </option>\n                            </select>\n                          </div>\n                \t\t</div>\n                    <button class=\"btn btn-primary green\" type=\"button\" style=\"margin-top: 7px;\" (click)=\"donateOverview();donate_detail_dialog.show();\" [disabled]=\"donate_id==0\">Overview</button>\n\n                    <div class=\"aKm\"></div>\n                </div>\n\n                <div class=\"amount\">\n                    <h5 style=\"margin-top: 5px; margin-right:5px; color: #999;\">Quantity :</h5>\n                    <div class=\"\">\n                      <div class=\"product-page-cart pull-right\">\n                        <button class=\"buy-btn btn btn-primary\"  style=\"border: none;\" (click) = \"pay_box_dialog.show();\">Buy Now!</button>\n                      </div>\n                      <div class=\"input-group\" style=\"width: 90px;margin-top: 15px;\">\n                        <div class=\"spinner-buttons input-group-btn\">\n                          <button type=\"button\" class=\"btn spinner minus-btn\" style=\"\" (click)=\"changeAmount(-1);\">\n                            <i class=\"fa fa-minus\" style=\"color: white;\"></i>\n                          </button>\n                        </div>\n                        <input type=\"text\" [(ngModel)]=\"buy_count\" class=\"spinner-input form-control\" max=\"1000\" value=\"1\" style=\"padding:0px;\">\n                        <div class=\"spinner-buttons input-group-btn\">\n                          <button type=\"button\" class=\"btn spinner plus-btn\" style=\"margin-right: 0px;\" (click)=\"changeAmount(1);\">\n                            <i class=\"fa fa-plus\" style=\"color: white;\"></i>\n                          </button>\n                        </div>\n                      </div>\n                    </div>\n            \t\t</div>\n              </div>\n              <div class=\"sticker sticker-sale\"></div>\n            </div>\n          </div>\n        </div>\n        <!-- END CONTENT -->\n      </div>\n      <!-- END SIDEBAR & CONTENT -->\n\n  </div>\n</div>\n\n\n\n<div bsModal #pay_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" style=\"width:600px\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"pay_box_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i class=\"fa fa-paypal\"></i>  BUY C-BOX</h3>\n\n      </div>\n      <div class=\"modal-body\">\n        <span style=\"font-size: 18px;color: black;\">Payment Information</span>\n        <div class=\"pull-right\" style=\"position: absolute; left: auto; right: 10px;\">\n          <i class=\"fa fa-cc-paypal\" style=\"font-size: 80px;\"></i>\n        </div>\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;\" #editboxForm = \"ngForm\" (ngSubmit)=\"onSubmit()\"  ng-submit=\"expression\" action=\"{{serverUrl}}/api/v1/sell/postPayNow\" method=\"post\">\n          <input type=\"hidden\" name=\"sellbox_id\" value=\"{{curSellBox.id}}\">\n          <input type=\"hidden\" name=\"buy_count\" value=\"{{buy_count}}\">\n          <input type=\"hidden\" name=\"total_price\" value=\"{{buy_count * curSellBox.price}}\">\n          <input type=\"hidden\" name=\"donate_id\" value=\"{{donate_id}}\">\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">{{tr(\"TYPE\")}} : </label>\n            <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{curSellBox.type}}</strong></label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">{{tr(\"PRICE\")}} : </label>\n            <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>${{curSellBox.price}}</strong></label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">{{tr(\"AMOUNT\")}} : </label>\n            <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{buy_count}}</strong></label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">{{tr(\"TOTAL_PRICE\")}} : </label>\n            <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>${{buy_count * curSellBox.price}}</strong></label>\n          </div>\n          <div class=\"aKm\"></div>\n          <span style=\"font-size: 18px;color: black;\">Your Information</span>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Name : </label>\n            <div class='col-md-5'>\n              <input class='form-control' type=\"text\" name=\"payer_name\" value=\"\" required=\"true\" style=\"text-align: left;\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Email : </label>\n            <div class='col-md-5'>\n              <input class='form-control' type=\"email\" name=\"payer_email\" value=\"\" style=\"text-align: left;\" required=\"true\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Address : </label>\n            <div class='col-md-5'>\n              <input class='col-md-7 form-control' type=\"text\" name=\"payer_address\" value=\"\" style=\"text-align: left;\" required=\"true\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Comment : </label>\n            <div class='col-md-5'>\n              <textarea class='col-md-7 form-control' name=\"payer_comment\" value=\"\" style=\"text-align: left;\" ></textarea>\n            </div>\n          </div>\n          <div class=\"aKm\"></div>\n          <fieldset style=\"text-align: right;padding-right: 30px;\">\n            <div class=\"\">\n              <button class=\"btn btn-primary green\">{{tr(\"PAY_NOW\")}}</button>\n              <button type=\"button\" class=\"btn red\" (click)=\"pay_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #donate_detail_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Donate Deatail\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" style=\"width:600px\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"donate_detail_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i></i>Donate Overview</h3>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <form class=\"form-horizontal\" role=\"form\" novalidate style=\"display: block;\">\n          <div class=\"col-md-4\">\n            <img class=\"img-responsive\" src=\"{{selDonate.picture}}\" alt=\"\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Name : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.name}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Brief Description : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.description}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">City : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.city}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Country : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.country}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Commitment : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.commitment}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Donate Count : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.donate_count}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Exist Count : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.exist_count}}</strong></label>\n            </div>\n          </div>\n          <fieldset style=\"text-align: right;padding-right: 30px;\">\n            <div class=\"\">\n              <button class=\"btn btn-primary green\" (click)=\"donate_detail_dialog.hide()\">OK</button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 992:
/***/ (function(module, exports) {

module.exports = "<h4 class=\"page-title\">\n    Donate\n</h4>\n<div class=\"page-content\" style=\"\">\n  <div class=\"container\">\n      <!-- BEGIN SIDEBAR & CONTENT -->\n      <div class=\"row margin-bottom-40\">\n        <div class=\"alert alert-success \" [class.hidden] = \"paySuccess != 0\">\n          <button type=\"button\" class=\"close\" (click) = \"paySuccess = 2\"></button>\n          <p style=\"text-align:center\">Paid Success</p>\n        </div>\n        <div class=\"alert alert-danger \" [class.hidden] = \"paySuccess != 1\">\n          <button class=\"close\" (click) = \"paySuccess = 2\"></button>\n          <p style=\"text-align:center\">Paid Fail</p>\n        </div>\n\n        <!-- BEGIN CONTENT -->\n        <div class=\"col-md-12 col-sm-12\">\n          <div class=\"product-page\">\n            <div class=\"row\" style=\"margin-top: 30px;\">\n              <div class=\"alert alert-danger \" [class.hidden] = \"errorMessage == ''\">\n                <button class=\"close\" (click) = \"errorMessage = ''\"></button>\n                <p>{{errorMessage}}</p>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"col-sm-12 portlet light portlet-fit\">\n                  <div class=\"portlet-title\">\n                      <div class=\"caption pull-left\" style=\" display: inline-flex; border: 1px solid #ddd; border-radius: 5px !important; margin-right: 10px;    padding: 3px 12px !important;\">\n                        <i class=\"fa fa-search\" style=\"margin-top: 10px;\"></i>\n                        <input class=\"form-control\" [(ngModel)]=\"searchString\" placeholder=\"Search\" (keyup.enter)=\"search();\" style=\"border: none;\">\n                      </div>\n                      <div class=\"btn-group pull-left\" dropdown>\n                        <button type=\"button\" class=\"btn btn-primary search-filter\" dropdownToggle>\n                          Search Filter <span class=\"caret\"></span>\n                        </button>\n                        <ul class=\"dropdown-menu search-filters\" dropdownMenu role=\"menu\" aria-labelledby=\"split-button\">\n                          <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" (click) = \"searchFilter = 'name'\">\n                              <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'name'\" ></i>\n                              Name\n                            </a>\n                          </li>\n                          <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" (click) = \"searchFilter = 'country'\">\n                              <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'country'\" ></i>\n                              Country\n                            </a>\n                          </li>\n                          <li role=\"menuitem\">\n                            <a class=\"dropdown-item\" (click) = \"searchFilter = 'city'\">\n                              <i class = \"fa fa-check green\" [class.transparent] = \"searchFilter != 'city'\" ></i>\n                              City\n                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                      <div class=\"pull-right\" style=\"display: inline; \">\n                        <div class=\"checkbox\" style=\"display: inline; float: none; margin-top: 15px;margin-right: 15px;\">\n                          <label style=\"font-size: 10pt;\">\n                            <input type=\"checkbox\" [(ngModel)] = \"donatesSelected\" (click) = \"toggleCheckboxes();\">Select All\n                            <span></span>\n                          </label>\n                        </div>\n                        <button type = \"button\" class=\"buy-btn btn btn-success\"  style=\"border:none;width:80px;float:none;margin-top:5px\" (click) = \"showPayDlg(i);\">Donate</button>\n                      </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-sm-12\" *ngFor = \"let donate of profileService.donates; let i = index;\">\n                  <div class=\"col-sm-12\" *ngIf = \"donate.del_flg == 0 || (authenticateService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN )\">\n                    <div class=\"col-md-12 col-ms-12 donate-content\">\n                      <div class=\"checkbox\" style=\"display: inline; float: left; margin-top: 68px;\">\n                        <label style=\"font-size: 10pt;\">\n                          <input type=\"checkbox\" [(ngModel)] = \"donate.isSelected\">\n                          <span></span>\n                        </label>\n                      </div>\n                      <div class=\"col-xs-12 col-md-9\" style=\"padding:5px;\">\n                        <img class=\"donate-image\" src=\"{{donate.picture}}\" alt=\"\" >\n                        <span style=\"font-size: 20px;padding: 5px;\"><strong>{{donate.name}}</strong></span><br>\n                        <div class=\"\" style=\"word-wrap: break-word;height: 80px;overflow: hidden;margin: 10px 0px;\">\n                          {{donate.description}}\n                        </div>\n                        <span style=\"padding: 10px;\">{{donate.city}}, {{donate.country}}</span>\n                      </div>\n                      <div class=\"col-xs-12 col-md-2 pull-right\" style=\"padding:5px;\">\n                        <h4 style=\"margin: 10px 0px 40px 0px;\">Boxes Requested: {{donate.donate_count}}</h4>\n                        <div style=\"display: inline-flex;\" >\n                          <span style=\"    font-size: 15px;\">Quantity: </span>\n                          <input type=\"number\" [(ngModel)] = \"donate.quantity\" style = \" width: calc(100% - 60px);margin-left: 3px;\">\n                        </div>\n                      </div>\n                      <!-- <div class=\"col-md-2\" *ngIf=\"authenticateService.isLoggedIn() != USER_SIGNED_INFO.SIGNED_IN || (authenticateService.isLoggedIn() == USER_SIGNED_INFO.SIGNED_IN && authenticateService.isAdmin != 1)\">\n                        <button type = \"button\" class=\"buy-btn btn btn-success\"  style=\"border:none;width:80px;float:right;margin-top:55px\" (click) = \"showPayDlg(i);\">Donate</button>\n                      </div> -->\n                    </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-12\">\n                <div class=\"paging_bootstrap_number pull-right\" style=\"text-align:right;\">\n                  <pagination class=\"\"\n                              [(ngModel)]=\"curPage\"\n                              [totalItems]=\"totalCount\"\n                              [itemsPerPage]=\"itemsPerPage\"\n                              [maxSize]=\"100\"\n                              previousText=\"&lsaquo;\"\n                              nextText=\"&rsaquo;\"\n                              (pageChanged)=\"refreshDonate($event)\">\n                  </pagination>\n                </div>\n              </div>\n\n\n          </div>\n        </div>\n        <!-- END CONTENT -->\n      </div>\n      <!-- END SIDEBAR & CONTENT -->\n\n  </div>\n</div>\n\n\n\n<div bsModal #pay_box_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Add Box\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" style=\"width:600px\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"pay_box_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i class=\"fa fa-paypal\"></i>  BUY C-BOX</h3>\n      </div>\n      <div class=\"modal-body\">\n        <span style=\"font-size: 18px;color: black;\">Thanks for your Donation.</span>\n        <form class=\"form-horizontal\" role=\"form\" style=\"display: block;margin-top:10px\" #editboxForm = \"ngForm\" (ngSubmit)=\"onSubmit()\"  ng-submit=\"expression\" action=\"/api/v1/sell/postPayNow\" method=\"post\">\n          <input type=\"hidden\" name=\"sellbox_id\" value=\"{{curSellBox.id}}\">\n           <!--<input type=\"hidden\" name=\"buy_count\" value=\"{{buy_count}}\"> -->\n          <input type=\"hidden\" name=\"total_price\" value=\"{{buy_count * curSellBox.price}}\">\n          <input type=\"hidden\" name=\"donateIds\" value=\"{{donateIds.join(',')}}\">\n          <input type=\"hidden\" name=\"donateQuantities\" value=\"{{quantities.join(',')}}\">\n          <div class=\"col-md-12\">\n            <div class=\"col-md-4\">\n              <img src=\"{{selDonate.picture}}\" alt=\"\" class=\"img-responsive\">\n            </div>\n            <div class=\"col-md-8\">\n              <div class=\"form-group form-group-info\">\n                <label class=\"col-md-3 control-label\">Price : </label>\n                <label class=\"col-md-9 control-label\" style=\"text-align: left;\"><strong>{{curSellBox.price}}</strong></label>\n              </div>\n              <div class=\"form-group form-group-info\">\n                <label class=\"col-md-3 control-label\">{{tr(\"AMOUNT\")}} : </label>\n                <label class=\"col-md-9 control-label\" style=\"text-align: left;\"><strong>{{buy_count}}</strong></label>\n                <!--<div class=\"col-md-9 control-label\">\n                  <div class=\"input-group\" style=\"width: 90px;\">\n                    <input type=\"number\" [(ngModel)]=\"buy_count\" name=\"buy_count\" class=\"form-control\" disabled style=\"padding:0px\">\n                  </div>\n                </div>-->\n                <!-- <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{buy_count}}</strong></label> -->\n              </div>\n              <div class=\"form-group form-group-info\">\n                <label class=\"col-md-3 control-label\">{{tr(\"TOTAL_PRICE\")}} : </label>\n                <label class=\"col-md-9 control-label\" style=\"text-align: left;\"><strong>${{buy_count * curSellBox.price}}</strong></label>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-12 aKm\"></div>\n          <span style=\"font-size: 18px;color: black;\">Your Information</span>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Name : </label>\n            <div class='col-md-5'>\n              <input class='form-control' type=\"text\" name=\"payer_name\" value=\"\" required=\"true\" style=\"text-align: left;\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Email : </label>\n            <div class='col-md-5'>\n              <input class='form-control' type=\"email\" name=\"payer_email\" value=\"\" style=\"text-align: left;\" required=\"true\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Address : </label>\n            <div class='col-md-5'>\n              <input class='col-md-7 form-control' type=\"text\" name=\"payer_address\" value=\"\" style=\"text-align: left;\" required=\"true\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Comment : </label>\n            <div class='col-md-5'>\n              <textarea class='col-md-7 form-control' name=\"payer_comment\" value=\"\" style=\"text-align: left;\" ></textarea>\n            </div>\n          </div>\n          <div class=\"aKm\"></div>\n          <fieldset style=\"text-align: right;padding-right: 30px;\">\n            <div class=\"\">\n              <button class=\"btn btn-primary green\">{{tr(\"PAY_NOW\")}}</button>\n              <button type=\"button\" class=\"btn red\" (click)=\"pay_box_dialog.hide();\">{{tr(\"CANCEL\")}}</button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div bsModal #donate_detail_dialog=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"Donate Deatail\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\" style=\"width:600px\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" (click)=\"donate_detail_dialog.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n        <h3><i></i>Donate Overview</h3>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <form class=\"form-horizontal\" role=\"form\" novalidate style=\"display: block;\">\n          <div class=\"col-md-4\">\n            <img class=\"img-responsive\" src=\"{{selDonate.picture}}\" alt=\"\">\n          </div>\n          <div class=\"col-md-8\">\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Name : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.name}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Brief Description : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.description}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">City : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.city}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Country : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.country}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Commitment : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.commitment}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Donate Count : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.donate_count}}</strong></label>\n            </div>\n            <div class=\"form-group\">\n              <label class=\"col-md-5 control-label\">Exist Count : </label>\n              <label class=\"col-md-7 control-label\" style=\"text-align: left;\"><strong>{{selDonate.exist_count}}</strong></label>\n            </div>\n          </div>\n          <fieldset style=\"text-align: right;padding-right: 30px;\">\n            <div class=\"\">\n              <button class=\"btn btn-primary green\" (click)=\"donate_detail_dialog.hide()\">OK</button>\n            </div>\n          </fieldset>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ })

},[1026]);
//# sourceMappingURL=main.bundle.js.map