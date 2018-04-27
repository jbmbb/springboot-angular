webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_page1_page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_page2_page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_page404_page404_component__ = __webpack_require__("../../../../../src/app/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_page3_page3_component__ = __webpack_require__("../../../../../src/app/page3/page3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_page31_page31_component__ = __webpack_require__("../../../../../src/app/page31/page31.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_page32_page32_component__ = __webpack_require__("../../../../../src/app/page32/page32.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'page1', component: __WEBPACK_IMPORTED_MODULE_2__app_page1_page1_component__["a" /* Page1Component */] },
    { path: 'page2/:id1/:id2', component: __WEBPACK_IMPORTED_MODULE_3__app_page2_page2_component__["a" /* Page2Component */] },
    {
        path: 'page3', component: __WEBPACK_IMPORTED_MODULE_5__app_page3_page3_component__["a" /* Page3Component */], children: [
            { path: '', redirectTo: 'page31', pathMatch: 'full' },
            { path: 'page31', component: __WEBPACK_IMPORTED_MODULE_6__app_page31_page31_component__["a" /* Page31Component */] },
            { path: 'page32', component: __WEBPACK_IMPORTED_MODULE_7__app_page32_page32_component__["a" /* Page32Component */] },
        ]
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__app_page404_page404_component__["a" /* Page404Component */] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\n    color: #f00;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<a id=\"forkme_banner\"\n\thref=\"https://github.com/ironsummitmedia/startbootstrap-agency\">View\n\ton GitHub</a>\n<div class=\"shell\">\n\n\t<app-header></app-header>\n\n\n\t<section id=\"main_content\">\n\t\t</br>\n\t\t</br><\n\t\t<h2>C1. Are web browsers the Holy Grail of GUI standards?</h2>\n\t\tSome people think so. Even some people who don't sell browsers think\n\t\tso. But we don't think so, because browser functionality is tailored\n\t\tto display HTML with some HTTP methods thrown in, and HTTP is a very\n\t\tnarrow client/server protocol. Take the batch-mode problem, for\n\t\tinstance. When a client fills out a form using a web browser, it's an\n\t\tinert data entry screen, not much different from 3270. Only when a\n\t\tbatch of data is submitted does the system exhibit intelligence.\n\t\tThat's the paradigm PCs were invented to transcend. The question gets\n\t\tfuzzy, though, if we open the notion of \"browsers\" to include virtual\n\t\tmachines (e.g., HotJava), or embedded code interpreters (e.g.,\n\t\tJavaScript). Here we augment HTTP to restore client intelligence.\n\t\tThese beasties could have a shot at Graildom -- market forces\n\t\tpermitting. An interesting side question is which of the two competing\n\t\tparadigms for GUI unification will win. Netscape and its allies are\n\t\tpushing OS-independent, browser-based solutions; devices like Oracle's\n\t\tnetwork computer follow this model. By contrast Microsoft continues to\n\t\tvie for desktop dominance with its Windows-centric model. \"It's the\n\t\tOS, stupid.\" By furnishing everything from the graphics kernel to the\n\t\tIP stack to the web browser as an OS service, Microsoft chops at\n\t\tefforts to make the Internet the locus of computing technology. If you\n\t\thad to pick today, which would you choose? Let us know.\n\t\t<h2>C2. Come to think of it, is there even an HTML standard\n\t\t\tanymore?</h2>\n\t\tIf 80% market share makes a standard, Yes. If standards are defined by\n\t\tthe consensus of interested parties toward a common goal, Maybe. You\n\t\tshould probably read what the standards-bearers have to say about this\n\t\tstate of affairs. The reality is that market forces have driven the\n\t\tstandards process since Netscape introduced . In fact, the current de\n\t\tjure standard, HTML 3.2 (code name: Wilbur), is pretty much a rubber\n\t\tstamp on the de facto standard of HTML 2.0 plus Netscape and Microsoft\n\t\tenhancements.\n\t\t<h2>C3. If everyone uses the same browser, is there any reason to\n\t\t\tavoid proprietary tags?</h2>\n\t\tThe chief reason to avoid proprietary anything is to give yourself an\n\t\tout. In practice this translates to demanding vendor respect, since\n\t\tcustomers can walk. If you build a document repository using\n\t\tproprietary language features, you've wedded yourself to a vendor, a\n\t\tproduct line, a version, a set of experts, and possibly specific\n\t\tplatforms. The vendor is, of course, under no obligation to perform in\n\t\tany of these areas. This is true irrespective of browser type. As a\n\t\trule of thumb: systems that cost more than 5% of your annual IT budget\n\t\tshould be as standards-based as you can make them without sacrificing\n\t\trequirements. The growth of the internet has given an unprecedented\n\t\tperspective to every domain of human life. Be it interacting with\n\t\tpeople, shopping online, collaborated working, video streaming, or\n\t\tlistening to music. Among all consumer and entertainment industries,\n\t\tthe Music industry in general and Electronic Music Industry in\n\t\tparticular got its biggest break with the installation of Fiber optic\n\t\tcables all over the world. A piece of glass has surely made the whole\n\t\tworld glitter! </br> Electronic Dance Music has become a cult since its\n\t\tinception and is one of the widely recognised form of music in the\n\t\tcontemporary world. Pop, Rock, Metal, Jazz, Hip Hop, or Indie tunes,\n\t\twhen mixed with the bass of electronic music creates magical tracks,\n\t\twhich are so intriguing that one just can’t stop the body from syncing\n\t\twith the electronic beats. With today’s advanced communication\n\t\ttechnology, millions of hopeful musicians around the world are able to\n\t\tfind a place on the internet to broadcast their music. For electronic\n\t\tmusic artists, recognizing this shift in people’s choice is the key to\n\t\ta successful campaign and to boost their career paths. </br> In the present\n\t\tcontext, when teenage parties, fashion shows and even, corporate\n\t\tevents are incomplete without a tinge of electronic music, it’s a\n\t\tgolden chance for any electronic music artist to capture the trend and\n\t\tmake money/fame out of it. But, making money or achieving fame is not\n\t\teasy when you have a whole lot of market to tap and virtually no\n\t\tconcrete plan on how to do it. So strategic planning, along with\n\t\tproper execution is the key to a successful music breakthrough! </br>\n\t\tLogically speaking, when everyone is promoting their music online, how\n\t\tcan one shine out. In such scenarios, taking help from professional\n\t\tservices helps a lot. When SoundCloud is the trending platform for\n\t\tmusic sharing and listening, it becomes necessary for any music\n\t\tcomposer to attract a fan or a music studio via SoundCloud. The more\n\t\tyour outreach among your music’s niche, the more are your chances to\n\t\tbecome the next Prince of music! Professional services like the ones\n\t\toffered by <a href=\"http://www.soundcloudpromotions.com\">soundcloudpromotions.com</a>\n\t\thelp a lot in carving out a plan customised for you. The kind of music\n\t\tone makes, the kind of fan following one desires, and the kind of\n\t\tartist one wants to be – all are taken care of by\n\t\tSoundCloudPromotions.com </br> Assign proper tags to your music, focus on\n\t\tthe audience while making music, always lookout for ways to master\n\t\tyour techniques, work with like-minded artists, refer each other’s\n\t\twork and get yourself known – these are some tips to get a sure shot\n\t\tfan following in the online musical era.\n\n\n\t\t<h2>C4. Where can I find out about Netscape Navigator's HTML\n\t\t\textensions?</h2>\n\t\tAt netscape.com. C5. Where can I find out about Microsoft Internet\n\t\tExplorer's HTML extensions? At microsoft.com.\n\t\t<h2>C6. How useful is Plug-In technology on an intranet (versus,\n\t\t\tsay, Helper Apps)?</h2>\n\t\tFirst of all, Netscape Plug-Ins are proprietary and only available for\n\t\tWindows, so see Question C3. Next, Plug-Ins are likely an interim\n\t\ttechnology on the way from classical web browsers to fully functional\n\t\tweb clients. While they extend the browser in a modular fashion,\n\t\tPlug-Ins perpetuate a procedural programming model, acting as viewers\n\t\tfor inert data. That said, Plug-Ins can be enormously helpful in\n\t\tbringing client/server benefits to an intranet. Best of all, they're\n\t\there today. File viewers like FTP Software Keyview and Adobe Amber\n\t\tmake documents format-neutral a reality; Shockwave and RealAudio do\n\t\tthe same for multimedia; and myriad 3D viewers do as much for VRML\n\t\tworlds. Sure, plug into Plug-Ins ... just be prepared to disconnect\n\t\twhen the Next Big Thing comes along. C7. When should I use embedded\n\t\tscripts, such as Netscape JavaScript or Microsoft JScript? Scripts,\n\t\twhich operate on the client, are required to implement any\n\t\tevent-driven functionality in the browser. Traditional web technology\n\t\tprovides no way to detect and act on mouse clicks or typed-in text.\n\t\tYou need scripts to do that. In addition, scripts can be used to make\n\t\tweb pages more dynamic. Text that drifts across the browser status bar\n\t\tor a real-time clock display are common examples.\n\t\t<h2>C8. Which is better, JavaScript or VBScript?</h2>\n\t\tAsk as frequently as you like, we're not answering vendor preference\n\t\tquestions! But we did find the following reasonable response on\n\t\tUsenet, courtesy of author Mark Stone: It depends on your goals. If\n\t\tyou want cross platform code that will work on any scripting enabled\n\t\tbrowser that hits your site, then you should stick within the confines\n\t\tof JavaScript 1.0, and pay careful attention to discrepancies between\n\t\tJavaScript on Navigator 2.0, JavaScript on Navigator 3.0, and JScript\n\t\ton Explorer 3.0. There are a number of discrepancies, but they can\n\t\talmost always be worked around to achieve the same general result in a\n\t\tway that works on all these browsers. If you don't care about cross\n\t\tplatform code then it really depends on what your programming\n\t\tbackground is, and whether you want to use ActiveX controls.\n\t\tJavaScript is a more naturally object oriented language, which is a\n\t\tplus. If you already know Visual Basic, however, then you will find it\n\t\teasier to use VBScript. If you plan on making extensive use of ActiveX\n\t\tcontrols you should also consider VBScript. While JScript on IE can\n\t\tinteract with ActiveX controls, the interaction is more seamless using\n\t\tVBScript, and the VBScript/ActiveX connection is better documented.\n\t\t<h2>C9. I've heard that there are several incompatible versions\n\t\t\tof JavaScript out there: v1.0, v1.1, JScript, etc. Which \"standard\"\n\t\t\tshould I code to?</h2>\n\t\tAs long as rugged individualism conflicts with community spirit, there\n\t\twon't be a satisfactory answer to this question -- or any other\n\t\tconcerning multiple, competing \"standards.\" That's an interesting bit\n\t\tof philosophy, you say, but it doesn't help much? Here are some facts\n\t\tto help you make a decision. JavaScript is a Netscape trademark and,\n\t\tdespite the open availability of the API, is proprietary to that\n\t\tcompany's browsers. JScript is Microsoft's implementation of\n\t\tJavaScript for the Internet Explorer line. JScript and JavaScript 1.0\n\t\tare roughly equivalent (with exceptions documented in books like Mark\n\t\tStone's How to Program Microsoft JScript; cf. C8). With v3.0 of\n\t\tNavigator, Netscape introduced an enhanced JavaScript (v1.1) with\n\t\tfeatures not available in any other browser. Nice features ... if you\n\t\tdon't mind a little lock-in. The following excerpts from newsgroup\n\t\tcomp.lang.javascript make the same points with more, er, esprit de\n\t\tcorps \"For as long as IE exists, you can't write a piece of code worth\n\t\twriting and make it browser-independent. Unless MS actually gets an IQ\n\t\tor two and gets JavaScript right\".rant() JScript doesn't support the\n\t\timage array. Which means that your script is NS3.0 only. which is a\n\t\tMajor bummer, esp with [dynamic graphics] in your application. So,\n\t\tonly thing you can do is test to make sure navigator.appName =\n\t\t\"Netscape\" and navigator.appVerson.substring(0,1) = 3 before you run\n\t\tyour stuff. G'Luck. Response, posted later that day For as long as\n\t\tNetscape does not implement an \"open\" JavaScript you can't write a\n\t\tpiece of code browser independent. I have to say that writing\n\t\tJavaScript 1.0 in IE 3.0 is a joy compared to writing JavaScript 1.0\n\t\tin Netscape 2.x. If you use Netscape 3.0 and JavaScript 1.1, your code\n\t\twill run nowhere else.\n\t</section>\n\n\t<app-footer></app-footer>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__ = __webpack_require__("../../../../ng2-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__ = __webpack_require__("../../../../../src/app/page1/page1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page2_page2_component__ = __webpack_require__("../../../../../src/app/page2/page2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page3_page3_component__ = __webpack_require__("../../../../../src/app/page3/page3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page31_page31_component__ = __webpack_require__("../../../../../src/app/page31/page31.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__page32_page32_component__ = __webpack_require__("../../../../../src/app/page32/page32.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page404_page404_component__ = __webpack_require__("../../../../../src/app/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__page1_page1_service__ = __webpack_require__("../../../../../src/app/page1/page1.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__page1_page1_component__["a" /* Page1Component */],
                __WEBPACK_IMPORTED_MODULE_8__page2_page2_component__["a" /* Page2Component */],
                __WEBPACK_IMPORTED_MODULE_9__page3_page3_component__["a" /* Page3Component */],
                __WEBPACK_IMPORTED_MODULE_10__page31_page31_component__["a" /* Page31Component */],
                __WEBPACK_IMPORTED_MODULE_11__page32_page32_component__["a" /* Page32Component */],
                __WEBPACK_IMPORTED_MODULE_12__page404_page404_component__["a" /* Page404Component */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_bootstrap__["a" /* Ng2BootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__page1_page1_service__["a" /* Page1Service */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer> </footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n\t<span class=\"ribbon-outer\"> <span class=\"ribbon-inner\">\r\n\t\t\t<h1>Startbootstrap-agency</h1>\r\n\t\t\t<h2></h2>\r\n\t</span> <span class=\"left-tail\"></span> <span class=\"right-tail\"></span>\r\n\t</span>\r\n</header>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page1/mock-users.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return USERS; });
var USERS = [
    { id: 1, name: 'user1', age: 10 },
    { id: 2, name: 'user2', age: 11 },
    { id: 3, name: 'user3', age: 12 },
    { id: 4, name: 'user4', age: 13 },
    { id: 5, name: 'user5', age: 14 }
];


/***/ }),

/***/ "../../../../../src/app/page1/page1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>page1 works!</h2>\n<p *ngIf=\"id\">传递过来的参数id:{{id}}</p>\n<p *ngIf=\"name\">传递过来的参数name:{{name}}</p>\n<p *ngIf=\"age\">传递过来的参数age:{{age}}</p>\n\n<div>\n\t<span>show the users</span>\n\t<table>\n\t\t<thead>\n\t\t\t<tr>\n\t\t\t\t<th>id</th>\n\t\t\t\t<th>name</th>\n\t\t\t\t<th>age</th>\n\t\t\t</tr>\n\t\t</thead>\n\t\t<tbody>\n\t\t\t<tr *ngFor=\"let user of userList\">\n\t\t\t\t<td>{{user.id}}</td>\n\t\t\t\t<td>{{user.name}}</td>\n\t\t\t\t<td>{{user.age}}</td>\n\t\t\t</tr>\n\t\t</tbody>\n\t</table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page1/page1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page1_service__ = __webpack_require__("../../../../../src/app/page1/page1.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Page1Component = /** @class */ (function () {
    function Page1Component(_activatedRoute, page1service) {
        this._activatedRoute = _activatedRoute;
        this.page1service = page1service;
    }
    //  getUsers(): void {
    //    this.userList = this.page1service.getUserList();
    //  }
    //  Observable.subscribe()
    Page1Component.prototype.getUsers = function () {
        var _this = this;
        this.page1service.getUserList().subscribe(function (users) { return _this.userList = users; });
    };
    Page1Component.prototype.getUser = function () {
        var _this = this;
        this.page1service.getUser().subscribe(function (user) { return _this.user = user; });
    };
    Page1Component.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._activatedRoute.queryParams.subscribe(function (queryParams) {
            console.log('queryParams参数:', queryParams);
            _this.id = Number.parseInt(queryParams['id']);
            _this.name = queryParams['name'];
            _this.age = Number.parseInt(queryParams['age']);
        });
        this.getUser();
        this.getUsers();
    };
    Page1Component.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Page1Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-page1',
            template: __webpack_require__("../../../../../src/app/page1/page1.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page1/page1.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_0__page1_service__["a" /* Page1Service */]])
    ], Page1Component);
    return Page1Component;
}());



/***/ }),

/***/ "../../../../../src/app/page1/page1.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page1Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_users__ = __webpack_require__("../../../../../src/app/page1/mock-users.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// 需要配置到app.module.ts中
var Page1Service = /** @class */ (function () {
    function Page1Service(http) {
        this.http = http;
    }
    // 此方法只适用与获取mock数据
    //  getUserList(): User[] {
    //    return USERS;
    //  }
    // 当访问服务端时，需要等待服务响应。而当服务等待时，浏览器不会阻塞。
    Page1Service.prototype.getUserList = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(__WEBPACK_IMPORTED_MODULE_1__mock_users__["a" /* USERS */]);
    };
    Page1Service.prototype.getUser = function () {
        var _this = this;
        this.http
            .post('/page1/query', null)
            .subscribe(function (data) {
            _this.user = data['data'];
        });
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["a" /* of */])(this.user);
    };
    Page1Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], Page1Service);
    return Page1Service;
}());



/***/ }),

/***/ "../../../../../src/app/page2/page2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>我是第二个页面的内容</h2>\n<p>传递过来的参数id1:{{id1}}</p>\n<p>传递过来的参数id2:{{id2}}</p>"

/***/ }),

/***/ "../../../../../src/app/page2/page2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page2Component = /** @class */ (function () {
    function Page2Component(_activatedRoute) {
        this._activatedRoute = _activatedRoute;
    }
    Page2Component.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this._activatedRoute.params.subscribe(function (params) {
            console.log("parames\u53C2\u6570:", params);
            _this.id1 = params['id1'];
            _this.id2 = params['id2'];
            console.log("\u83B7\u53D6\u7684\u53C2\u6570id1:" + _this.id1 + ",id2:" + _this.id2);
        });
    };
    // 组件卸载的时候取消订阅
    Page2Component.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Page2Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page2',
            template: __webpack_require__("../../../../../src/app/page2/page2.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page2/page2.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], Page2Component);
    return Page2Component;
}());



/***/ }),

/***/ "../../../../../src/app/page3/page3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page3/page3.component.html":
/***/ (function(module, exports) {

module.exports = "<button class=\"btn btn-danger\" [routerLink]=\"['./page31']\">page31</button>\n<button class=\"btn btn-danger\" [routerLink]=\"['./page32']\">page32</button>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/page3/page3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page3Component = /** @class */ (function () {
    function Page3Component() {
    }
    Page3Component.prototype.ngOnInit = function () {
    };
    Page3Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page3',
            template: __webpack_require__("../../../../../src/app/page3/page3.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page3/page3.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page3Component);
    return Page3Component;
}());



/***/ }),

/***/ "../../../../../src/app/page31/page31.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page31/page31.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>我是第三个页面的item1</h4>"

/***/ }),

/***/ "../../../../../src/app/page31/page31.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page31Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page31Component = /** @class */ (function () {
    function Page31Component() {
    }
    Page31Component.prototype.ngOnInit = function () {
    };
    Page31Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page31',
            template: __webpack_require__("../../../../../src/app/page31/page31.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page31/page31.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page31Component);
    return Page31Component;
}());



/***/ }),

/***/ "../../../../../src/app/page32/page32.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page32/page32.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>我是第三个页面的item2</h4>"

/***/ }),

/***/ "../../../../../src/app/page32/page32.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page32Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page32Component = /** @class */ (function () {
    function Page32Component() {
    }
    Page32Component.prototype.ngOnInit = function () {
    };
    Page32Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page32',
            template: __webpack_require__("../../../../../src/app/page32/page32.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page32/page32.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], Page32Component);
    return Page32Component;
}());



/***/ }),

/***/ "../../../../../src/app/page404/page404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<h4>你访问的路径不存在</h4>\n<input class=\"btn btn-sm btn-success\" type=\"button\" value=\"跳转到page1\" (click)=\"topage1()\" />\n<input class=\"btn btn-sm btn-success\" type=\"button\" value=\"跳转到page2\" (click)=\"topage2()\" />"

/***/ }),

/***/ "../../../../../src/app/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Page404Component = /** @class */ (function () {
    function Page404Component(router) {
        this.router = router;
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    Page404Component.prototype.topage1 = function () {
        this.router.navigate(['/page1'], { queryParams: { 'id': '10', 'name': 'word', 'age': '30' } });
        //    this.router.navigateByUrl('/page1?name=hello&id=2&age=20');
    };
    Page404Component.prototype.topage2 = function () {
        this.router.navigateByUrl('/page2/2/3');
    };
    Page404Component = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page404',
            template: __webpack_require__("../../../../../src/app/page404/page404.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page404/page404.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], Page404Component);
    return Page404Component;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map