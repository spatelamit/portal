"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_voice_voice_module_ts"],{

/***/ 6170:
/*!****************************************************************!*\
  !*** ./src/app/voice/voice-compose/voice-compose.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceComposeComponent": () => (/* binding */ VoiceComposeComponent)
/* harmony export */ });
/* harmony import */ var src_app_global_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/global_constant */ 6107);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ 9453);
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/voice/voice-service.service */ 5571);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






function VoiceComposeComponent_tr_56_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "MP3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "audio", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "source", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VoiceComposeComponent_tr_56_Template_a_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const list_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.deleteSavedAudio(list_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", list_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", list_r1.duration, " Sec");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](list_r1.submited_at);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r0.url_image + list_r1.voice_file, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
class VoiceComposeComponent {
    constructor(voiceService) {
        this.voiceService = voiceService;
        this.url_image = src_app_global_constant__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.url_image;
        this.audiofile = "";
    }
    ngOnInit() {
        this.voiceService.getVoiceList().subscribe((res) => {
            console.log(res);
            this.voicelist = res;
        }, (error) => {
            console.log(error);
            // this.jwtService.error(error);
        });
    }
    handleFiles(event) {
        console.log(event);
        const file1 = event.target.files[0];
        var files = event.target.files;
        console.log(files);
        this.audio_file = file1;
        var a = URL.createObjectURL(files[0]);
        console.log(a);
        this.audiofile = a;
        // this.sanitizer.bypassSecurityTrustResourceUrl
        // var aa = readAsDataUrl(files[0]);
        // this.audiofile = aa;
        console.log(a);
        // document.getElementById("voiceCallfile_audio").load();
    }
    saveAudioFile() {
        console.log(this.title);
        console.log(this.duration);
        console.log(this.audio_file);
        const formData = new FormData();
        formData.append("voice_draft", this.audio_file);
        formData.append("title", this.title);
        formData.append("duration", this.duration);
        this.voiceService.saveAudioFile(formData).subscribe((res) => {
            alert(res.message);
            this.ngOnInit();
            console.log(res);
        }, (error) => {
            console.log(error);
        });
    }
    deleteSavedAudio(data) {
        console.log(data);
        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                this.voiceService.deleteSavedAudio(data.draft_id).subscribe((res) => {
                    this.ngOnInit();
                    console.log(res);
                }, (error) => {
                    console.log(error);
                    // this.jwtService.error(error);
                });
            }
        });
    }
}
VoiceComposeComponent.ɵfac = function VoiceComposeComponent_Factory(t) { return new (t || VoiceComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_2__.VoiceServiceService)); };
VoiceComposeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: VoiceComposeComponent, selectors: [["app-voice-compose"]], decls: 127, vars: 3, consts: [[1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-sm-2"], [1, "menu_list"], ["id", "myTab-1", "role", "tablist", 1, "nav", "nav-tabs"], [1, "nav-item"], ["id", "home-tab", "data-toggle", "tab", "href", "#home", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "profile-tab", "data-toggle", "tab", "href", "#profile", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link"], [1, "col-sm-10"], [1, "card"], [1, "card-body"], ["id", "myTabContent-2", 1, "tab-content"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], [1, "row", "mb-3"], [1, "col-md-4"], [1, "voiceCallfile"], ["type", "file", "id", "voiceCallfile_upload", 1, "mb-2", "btn", "btn-warning", "mt-2", 3, "change"], ["type", "text", "placeholder", "Enter Tittle", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Enter Duration", 3, "ngModel", "ngModelChange"], ["type", "button", 1, "btn", "btn-sm", "mt-2", "mr-2", "mb-2", "btn-info", 3, "click"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade"], [1, "col-md-12"], [1, "pricing-listing", "mt-2"], [1, "table"], [1, "ligth"], [4, "ngFor", "ngForOf"], ["id", "contact", "role", "tabpanel", "aria-labelledby", "contact-tab", 1, "tab-pane", "fade"], [1, "mb-2"], ["id", "recorder", "muted", "", "hidden", ""], ["id", "start", 1, "btn", "btn-primary"], ["id", "stop", 1, "btn", "btn-primary"], ["id", "player", "controls", ""], ["id", "TextSpeech", "role", "tabpanel", "aria-labelledby", "Text-Speech", 1, "tab-pane", "fade"], [1, "col-md-12", "mb-2"], [1, "col-md-6"], [1, "input-group"], [1, "input-group-prepend"], ["for", "inputGroupSelect01", 1, "input-group-text", "bg_input_new_row"], ["id", "inputGroupSelect01", 1, "custom-select", "bg_input_new_row_tow"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "meassage_box_new"], ["id", "textarea", "placeholder", "Message", "cols", "50", "rows", "5", 1, ""], ["id", "textarea", "placeholder", "Preview", "cols", "50", "rows", "5", 1, ""], [1, "voice_icon_pro", "text-right"], [1, "la", "la-bullhorn"], [1, "col-md-12", "text-right"], [1, "mt-2", "btn", "btn-primary", 2, "color", "#fff"], ["id", "VoiceCompared", "role", "tabpanel", "aria-labelledby", "Voice-Compared", 1, "tab-pane", "fade"], [1, "custom-control", "custom-radio", "custom-radio-color-checked", "custom-control-inline"], [1, "custom-control-label"], ["id", "voiceCallfile_audio", "controls", "", 1, "mt-2"], ["id", "src", "type", "audio/mp3", 3, "src"], ["type", "button", 1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "las", "la-trash-alt", "font-size-20", 2, "color", "#fff"]], template: function VoiceComposeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Upload Voice File ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " Audio List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Upload Voice File");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function VoiceComposeComponent_Template_input_change_22_listener($event) { return ctx.handleFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VoiceComposeComponent_Template_input_ngModelChange_27_listener($event) { return ctx.title = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function VoiceComposeComponent_Template_input_ngModelChange_31_listener($event) { return ctx.duration = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function VoiceComposeComponent_Template_button_click_33_listener() { return ctx.saveAudioFile(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, " save list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39, "Audio List");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "table", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](53, "Play");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](56, VoiceComposeComponent_tr_56_Template, 18, 4, "tr", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Voice Recorder");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](63, "audio", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "Record");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "button", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, " Stop Recording ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "audio", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Text To Speech");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "Speech rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "x-Slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](86, "Slow");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "High");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "x-High");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Language");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "Choose...");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, "Hindi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "English (India)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](106, "English (US)");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Spanish");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, "Italian");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "textarea", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](115, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](116, "textarea", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "span", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, " Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, " Go to Audio List ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126, "Voice File Compared");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.duration);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.voicelist);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]], styles: [".menu_list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #f6f8fb !important;\r\n  height: 40px;\r\n  border-bottom: 1px solid #ebebeb;\r\n  list-style: none;\r\n  padding: 5px 0px 5px;\r\n  padding: 6px 0px 6px 6px;\r\n}\r\n.menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-size: 13px;\r\n  font-weight: bold;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaWNlLWNvbXBvc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJ2b2ljZS1jb21wb3NlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudV9saXN0IGxpIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZiICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogNXB4IDBweCA1cHg7XHJcbiAgcGFkZGluZzogNnB4IDBweCA2cHggNnB4O1xyXG59XHJcbi5tZW51X2xpc3QgYSB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 3311:
/*!**********************************************************!*\
  !*** ./src/app/voice/voice-logs/voice-logs.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Voice_logs": () => (/* binding */ Voice_logs),
/* harmony export */   "VoiceLogsComponent": () => (/* binding */ VoiceLogsComponent)
/* harmony export */ });
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-csv/ngx-csv */ 4551);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/voice/voice-service.service */ 5571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 5595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);









function VoiceLogsComponent_tr_103_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VoiceLogsComponent_tr_103_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VoiceLogsComponent_tr_103_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VoiceLogsComponent_tr_103_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VoiceLogsComponent_tr_103_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Rejected & Blocked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VoiceLogsComponent_tr_103_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ye Koi status nhi he By mistake ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function VoiceLogsComponent_tr_103_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, VoiceLogsComponent_tr_103_span_9_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, VoiceLogsComponent_tr_103_span_10_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, VoiceLogsComponent_tr_103_span_11_Template, 2, 0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, VoiceLogsComponent_tr_103_span_12_Template, 2, 0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, VoiceLogsComponent_tr_103_span_13_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, VoiceLogsComponent_tr_103_span_14_Template, 2, 0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logs_report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", logs_report_r3.receivers, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](logs_report_r3.submit_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", logs_report_r3.done_date == null ? "Update Soon" : logs_report_r3.done_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", logs_report_r3.dlr_mask == 923);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", logs_report_r3.dlr_mask == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", logs_report_r3.dlr_mask == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", logs_report_r3.dlr_mask == 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", logs_report_r3.dlr_mask == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", logs_report_r3.dlr_mask == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", logs_report_r3.description == null ? "Update Soon" : logs_report_r3.description, " ");
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class Voice_logs {
}
class VoiceLogsComponent {
    constructor(location, voiceService, route, fb) {
        this.location = location;
        this.voiceService = voiceService;
        this.route = route;
        this.fb = fb;
        //pagination
        this.p = 1;
        this.count = 10;
        route.paramMap.subscribe((param) => {
            this.campaign_id = param.get("id");
            console.log("id", param.get("id"));
        });
    }
    ngOnInit() {
        //get voice logs details
        this.voiceService.voiceLogs(this.campaign_id).subscribe((res) => {
            this.voice_logs = res.data;
            console.log(res);
        }, (error) => {
            if (error.status == 401) {
                alert(error.statusText);
                // this.jwtService.error(error);
            }
        });
    }
    resendSms(val) {
        if (val === "") {
            alert("Select status for Resend Message");
        }
        else {
            //resend sms form
            this.resend_form = this.fb.group({
                campaign_id: [this.campaign_id],
                status: [val],
            });
            this.voiceService.resendVoice(this.resend_form.value).subscribe((res) => {
                console.log(res);
            }, (error) => {
                if (error.status == 401) {
                    // this.jwtService.error(error);
                }
            });
        }
    }
    searchLogs(val) {
        val["campaign_id"] = this.campaign_id;
        this.voiceService.searchVoiceLogs(val).subscribe((res) => {
            console.log(res);
            if (res.status == 201) {
                this.voice_logs = res.data;
            }
            else if (res.status == 202) {
                alert(res.message);
            }
        }, (error) => {
            if (error.status == 401) {
                // this.jwtService.error(error);
            }
        });
    }
    clearFormValue(searchForm) {
        console.log(searchForm.form.value);
        this.ngOnInit();
        searchForm.reset({
            dlr_mask: "",
            receivers: "",
        });
    }
    //export logs
    exportLogs(searchvalue) {
        if (this.voice_logs.length < 2000) {
            this.generateCsv(this.voice_logs);
            // this.generateCsv("mahesh");
        }
        else {
            // var mahesh = "hello this is mahesh >2000";
            // this.generateCsv(mahesh);
            //request for data greater than 2000
            searchvalue["campaign_id"] = this.campaign_id;
            console.log(searchvalue);
            this.voiceService.voiceLogsExport(searchvalue).subscribe((res) => {
                // console.log(res);
                if (res.status == 201) {
                    /////if data is less than our limit than download instantly
                    this.generateCsv(res.data);
                }
                else if (res.status == 202) {
                    ///if data greater than limit schedule for csv file by backend
                    // Swal.fire({
                    //   position: "top-end",
                    //   icon: "info",
                    //   title: res.message,
                    //   showConfirmButton: false,
                    //   timer: 2000,
                    // });
                    alert(res.message);
                }
            }, (error) => {
                if (error.status == 401) {
                    // this.jwtService.error(error);
                    alert(error.statusText);
                }
            });
        }
    }
    generateCsv(voice_logs_val) {
        // console.log(voice_logs_val);
        let i = 0;
        // let new_list = this.temp_details;
        let csvFileName = "voicelogs" + moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYYMMDDSSMMHH");
        let finalData = voice_logs_val.map(function (obj) {
            return {
                No: (i = i + 1),
                Receivers: obj.receivers,
                Status: obj.dlr_mask == 923
                    ? "Submitted"
                    : obj.dlr_mask == 2
                        ? "Failed"
                        : obj.dlr_mask == 1
                            ? "Delivered"
                            : obj.dlr_mask == 8
                                ? "Sent"
                                : // : obj.dlr_mask == 5
                                    // ? "Rejected&Block"
                                    "Rejected&Block",
                SubmitDate: obj.submit_date !== null ? obj.submit_date : "Update Soon",
                DoneDate: obj.done_date !== null ? obj.done_date : "Update Soon",
                ErrorCode: obj.error_code !== null ? obj.error_code : "Update Soon",
                Description: obj.description !== null ? obj.description : "Update Soon", //"update soon", //
            };
        });
        console.log("finalData", finalData);
        var options = {
            fieldSeparator: ",",
            quoteStrings: '"',
            decimalseparator: ".",
            showLabels: false,
            showTitle: false,
            // title: 'CSV DATA',
            useBom: true,
            noDownload: false,
            headers: [
                "S.No",
                "Receivers",
                "Status",
                "SubmitDate",
                "DoneDate",
                "ErrorCode",
                "Description",
            ],
        };
        new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_0__.ngxCsv(finalData, csvFileName, options);
    }
}
VoiceLogsComponent.ɵfac = function VoiceLogsComponent_Factory(t) { return new (t || VoiceLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_2__.VoiceServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
VoiceLogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: VoiceLogsComponent, selectors: [["app-voice-logs"]], decls: 108, vars: 11, consts: [[1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-xxl-2", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-2", "col-12"], [1, "pt-3"], [1, "las", "la-file-alt"], [1, "col-md-3"], [1, "btn-group", "btn-group-toggle", "float-right", "pt-3"], [1, "col-md-6"], [1, "col-xxl-4", "col-xl-4", "col-lg-4", "col-md-4", "col-sm-4", "col-12"], [1, "chat-search"], [1, "iq-search-bar", "mt-2"], ["action", "#", 1, "searchbox"], ["href", "#", 1, "search-link"], [1, "ri-search-line"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search...", 1, "text", "search-input", 3, "ngModel", "ngModelChange"], [1, "col-md-4"], [1, "floating-label", "mt-2"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Message Type", 1, "form-control"], ["dlr_mask", ""], ["value", "", "disabled", "", "selected", ""], ["value", "all"], ["value", "923"], ["value", "2"], ["value", "1"], ["value", "8"], ["value", "5"], ["value", "6"], ["type", "button", 1, "button", "btn", "btn-primary", "mt-2", 3, "click"], [1, "col-md-6", "text-right"], [1, "row", "mt-2"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [3, "ngSubmit"], ["searchForm", "ngForm"], [1, "Status_div", "list-inline", "filter-list"], [1, "floating-label"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "dlr_mask", 1, "form-control"], ["ngModel", "", "name", "receivers", "placeholder", "Mobile number", "type", "text", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "button", "btn", "btn-primary", 3, "click"], ["target", "_blank", 1, "button", "btn", "btn-primary", 3, "click"], [1, "campaign-listing"], [1, "col-md-12", "table-layout-grid"], [1, "table-wrapper", "pricing-listing"], [1, "mt-3"], [1, "ligth"], [4, "ngFor", "ngForOf"], [1, "text-right"], [3, "pageChange"], [1, "text-left"], ["class", "status-label table-label Submitted_color", 4, "ngIf"], ["class", "status-label table-label green", 4, "ngIf"], ["class", "status-label table-label red", 4, "ngIf"], ["class", "status-label table-label Sent_color", 4, "ngIf"], ["class", "status-label table-label R_B_color", 4, "ngIf"], [1, "status-label", "table-label", "Submitted_color"], [1, "status-label", "table-label", "green"], [1, "status-label", "table-label", "red"], [1, "status-label", "table-label", "Sent_color"], [1, "status-label", "table-label", "R_B_color"]], template: function VoiceLogsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Voice Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function VoiceLogsComponent_Template_input_ngModelChange_18_listener($event) { return ctx.searchedKeyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "select", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Select a Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoiceLogsComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22); return ctx.resendSms(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Resend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "form", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function VoiceLogsComponent_Template_form_ngSubmit_45_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46); return ctx.searchLogs(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "ul", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "select", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Select a Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](66, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoiceLogsComponent_Template_button_click_71_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46); return ctx.clearFormValue(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, " Clear All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoiceLogsComponent_Template_a_click_74_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](46); return ctx.exportLogs(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VoiceLogsComponent_Template_a_click_77_listener() { return ctx.location.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](79, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "table", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "tr", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](89, " Mobiles No ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, " Submit Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, " Done Date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](98, " Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](101, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](103, VoiceLogsComponent_tr_103_Template, 17, 10, "tr", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](104, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](105, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "pagination-controls", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function VoiceLogsComponent_Template_pagination_controls_pageChange_107_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchedKeyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](104, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](105, 5, ctx.voice_logs, ctx.searchedKeyword), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx.count, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2ljZS1sb2dzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6878:
/*!**************************************************************!*\
  !*** ./src/app/voice/voice-report/voice-report.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceReportComponent": () => (/* binding */ VoiceReportComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-daterangepicker-material */ 6155);
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-csv/ngx-csv */ 4551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/voice/voice-service.service */ 5571);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 5595);










function VoiceReportComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Mobile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Deduction ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Done Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Status ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Error Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "th");
} }
function VoiceReportComponent_tr_83_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Schedule ", report_r9.schedule_date, " ");
} }
function VoiceReportComponent_tr_83_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Normal ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_tr_83_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", report_r9.receivers, " ");
} }
function VoiceReportComponent_tr_83_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Credit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "button", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Deducted ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](report_r9.total_messages);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](report_r9.credit);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](report_r9.total_messages * report_r9.credit);
} }
function VoiceReportComponent_tr_83_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Transactional ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_tr_83_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Marketing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_tr_83_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", report_r9.done_date == null ? "Update Soon" : report_r9.done_date, " ");
} }
function VoiceReportComponent_tr_83_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", report_r9.dlr_mask == 8 ? "SENT" : report_r9.dlr_mask == 2 ? "Failed" : report_r9.dlr_mask == 923 ? "SUMBMITTED" : report_r9.dlr_mask == 1 ? "Delivered" : "Rejected & Blocked", " ");
} }
function VoiceReportComponent_tr_83_td_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", report_r9.description == null ? "Update Soon" : report_r9.description, " ");
} }
function VoiceReportComponent_tr_83_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " NOT Implement Yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function VoiceReportComponent_tr_83_td_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "i", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Statistics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/voice/voice_logs/", report_r9.campaign_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/voice/voice_statistics/", report_r9.campaign_id, "");
} }
function VoiceReportComponent_tr_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " Campaign Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, VoiceReportComponent_tr_83_span_11_Template, 2, 1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, VoiceReportComponent_tr_83_span_12_Template, 2, 0, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, VoiceReportComponent_tr_83_td_25_Template, 5, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, VoiceReportComponent_tr_83_td_26_Template, 13, 3, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, VoiceReportComponent_tr_83_span_28_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](29, VoiceReportComponent_tr_83_span_29_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, VoiceReportComponent_tr_83_td_34_Template, 5, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, VoiceReportComponent_tr_83_td_35_Template, 3, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, VoiceReportComponent_tr_83_td_36_Template, 5, 1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](37, VoiceReportComponent_tr_83_td_37_Template, 5, 0, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, VoiceReportComponent_tr_83_td_38_Template, 13, 2, "td", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r9 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", report_r9.campaign_name.length > 15 ? _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind3"](10, 16, report_r9.campaign_name, 0, 15) + "..." : report_r9.campaign_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", report_r9.schedule_date !== null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", report_r9.schedule_status == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", report_r9.sender, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", report_r9.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportNormal);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", report_r9.route == "TR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", report_r9.route == "PR");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](report_r9.campaign_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", report_r9.submit_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.showReportNormal);
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class VoiceReportComponent {
    constructor(location, voiceService) {
        this.location = location;
        this.voiceService = voiceService;
        this.selected = [
            moment__WEBPACK_IMPORTED_MODULE_0__().format("DD-MM-YYYY"),
            moment__WEBPACK_IMPORTED_MODULE_0__().format("DD-MM-YYYY"),
        ];
        //pagination
        this.p = 1;
        this.count = 10;
    }
    ngOnInit() {
        this.alwaysShowCalendars = true;
        this.showReportOnMobile = false;
        this.showReportNormal = true;
        this.voiceService.getReportVoice().subscribe((res) => {
            this.voice_report = res.data;
            console.log(res);
        }, (error) => {
            if (error.status == 401) {
                alert(error.statusText);
            }
            console.log(error);
            // this.jwtService.error(error);
        });
    }
    change(val) {
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_0__(val);
        var start = moment__WEBPACK_IMPORTED_MODULE_0__(val.startDate._d).format("DD-MM-YYYY");
        var end = moment__WEBPACK_IMPORTED_MODULE_0__(val.endDate._d).format("DD-MM-YYYY");
        console.log(start);
        console.log(end);
        this.selected = [start, end];
    }
    searchReport(val) {
        console.log(val);
        this.voiceService.searchVoiceReport(val).subscribe((res) => {
            console.log(res);
            if (res.status == 201) {
                if (res.data[0].receivers) {
                    console.log("data with receivers");
                    this.voice_report = res.data;
                    this.showReportOnMobile = true;
                    this.showReportNormal = false;
                }
                else if (res.data.receivers == null) {
                    console.log("data without receivers or normal");
                    this.voice_report = res.data;
                    this.showReportOnMobile = false;
                    this.showReportNormal = true;
                }
            }
            else if (res.status == 201 || res.data.length == 0) {
                alert("no data found");
                console.log("no data found");
            }
        }, (error) => {
            if (error.status == 401) {
                // this.jwtService.error(error);
            }
        });
    }
    clearFormValue(searchForm) {
        console.log(searchForm);
        searchForm.reset({
            route: "",
            type: "",
            size: "",
            date: [moment__WEBPACK_IMPORTED_MODULE_0__().format("DD-MM-YYYY"), moment__WEBPACK_IMPORTED_MODULE_0__().format("DD-MM-YYYY")],
            number: "",
            campaign_id: "",
            campaign_name: "",
        });
        this.ngOnInit();
    }
    exportReport(val) {
        console.log(val);
        this.voiceService.voiceReportExport(val).subscribe((res) => {
            console.log(res);
            if (res.status == 201) {
                console.log(res.data);
                let i = 0;
                let csvFileName = "voicereport" + moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYYMMDDSSMMHH");
                let finalData = res.data.map(function (obj) {
                    return {
                        No: (i = i + 1),
                        CampaignName: obj.campaign_name,
                        CampaignUid: obj.campaign_id,
                        CallerID: obj.sender,
                        FileTitle: obj.message,
                        TotalCredit: obj.credit,
                        Receivers: obj.receivers,
                        Status: obj.dlr_mask == 923
                            ? "Submitted"
                            : obj.dlr_mask == 2
                                ? "Failed"
                                : obj.dlr_mask == 1
                                    ? "Delivered"
                                    : obj.dlr_mask == 8
                                        ? "Sent"
                                        : // : obj.dlr_mask == 5
                                            // ? "Rejected&Block"
                                            "Rejected&Block",
                        SubmitDate: obj.submit_date !== null ? obj.submit_date : "Update Soon",
                        DoneDate: obj.done_date !== null ? obj.done_date : "Update Soon",
                    };
                });
                console.log(finalData);
                var options = {
                    fieldSeparator: ",",
                    quoteStrings: '"',
                    decimalseparator: ".",
                    showLabels: false,
                    showTitle: false,
                    // title: 'CSV DATA',
                    useBom: true,
                    noDownload: false,
                    headers: [
                        "S.No",
                        "CampaignName",
                        "CampaignUid",
                        "CallerID",
                        "FileTitle",
                        "TotalCredit",
                        "Receivers",
                        "Status",
                        "SubmitDate",
                        "DoneDate",
                    ],
                };
                new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__.ngxCsv(finalData, csvFileName, options);
            }
            else if (res.status == 202) {
                ///if data greater than limit schedule for csv file by backend
                // Swal.fire({
                //   position: "top",
                //   icon: "info",
                //   title: res.message,
                //   showConfirmButton: false,
                //   timer: 2000,
                // });
                alert(res.message);
            }
        }, (error) => {
            // this.jwtService.error(error);
        });
    }
}
VoiceReportComponent.ɵfac = function VoiceReportComponent_Factory(t) { return new (t || VoiceReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_2__.VoiceServiceService)); };
VoiceReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VoiceReportComponent, selectors: [["app-voice-report"]], viewQuery: function VoiceReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__.DaterangepickerDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.pickerDirective = _t.first);
    } }, decls: 87, vars: 17, consts: [[1, "content-page"], [1, "container-fluid"], [3, "ngSubmit"], ["searchForm", "ngForm"], [1, "row"], [1, "col-xxl-9", "col-xl-9", "col-lg-9", "col-md-9", "col-sm-9", "col-12"], [1, "Status_div", "list-inline", "filter-list", "floating-label", "mt-2"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "route", 1, "form-control", "form-control-sm"], ["value", "", "disabled", "", "selected", ""], ["value", "TR"], ["value", "PR"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "type", 1, "form-control", "form-control-sm"], ["value", "0"], ["value", "1"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "size", 1, "form-control", "form-control-sm"], ["value", "less10"], ["value", "greater10"], ["value", "greater1000"], ["value", "greater10000"], ["value", "greater100000"], ["type", "text", "name", "date", "ngxDaterangepickerMd", "", "placeholder", "Choose date", 1, "form-control", "form-control-sm", 3, "ngModel", "value", "maxDate", "ngModelChange", "change"], ["ngModel", "", "name", "receivers", "placeholder", "Mobile number", "type", "number", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "campaign_id", "placeholder", "Request id", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "campaign_name", "placeholder", "Campaign Name", "type", "text", 1, "form-control", "form-control-sm"], [1, "col-xxl-3", "col-xl-3", "col-lg-3", "col-md-3", "col-sm-3", "col-12"], [1, "Status_div", "list-inline", "filter-list", "text-center", "floating-label", "mt-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "btn", "btn-primary", "btn-sm", 2, "color", "#fff", 3, "click"], [1, "campaign-listing", "p-0"], [1, "col-md-12", "table-layout-grid"], [1, "table-wrapper", "pricing-listing"], [1, ""], [1, "ligth"], [1, "text-centre"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-right"], [3, "pageChange"], [1, "text-left", "tital_span"], [1, "table-label"], ["width", "30", "src", "https://theofficearea.in/user-demo/assets/my/campaign_icon.png"], ["class", "status-label Sent_color", 4, "ngIf"], ["class", "status-label Submitted_color", 4, "ngIf"], [1, "col-md-6"], [1, "user-name"], ["data-v-e08301e8", "", 1, "las", "la-id-badge", "font-size-20"], [1, "col-md-12"], [1, "message_box", "mt-3"], [1, "with-margin"], ["class", "text-center col-md-4", 4, "ngIf"], ["class", "mt-2 badge badge-pill badge-success", 4, "ngIf"], ["class", "mt-2 badge badge-pill badge-danger", 4, "ngIf"], [1, "for-label", "paragraph-sub"], ["class", "dropdown text-center", "width", "120", 4, "ngIf"], [1, "status-label", "Sent_color"], [1, "status-label", "Submitted_color"], [1, "text-center", "col-md-4"], ["type", "button", 1, "btn", "btn-sm", "mb-1", "btn-outline-info"], [1, "badge", "badge-info", "ml-0", 2, "color", "black"], ["type", "button", 1, "btn", "btn-sm", "mb-1", "btn-outline-success"], [1, "badge", "badge-success", "ml-0", 2, "color", "black"], ["type", "button", 1, "btn", "btn-sm", "mb-1", "btn-outline-danger"], [1, "badge", "badge-danger", "ml-0", 2, "color", "black"], [1, "mt-2", "badge", "badge-pill", "badge-success"], [1, "mt-2", "badge", "badge-pill", "badge-danger"], [1, "status-label", "table-label", "red"], ["width", "120", 1, "dropdown", "text-center"], ["href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "action-dropdown"], ["src", "https://in.kaleyra.io/themes/rome/assets/img/more-info.svg"], [1, "dropdown-menu", "edit-menu"], [1, "dropdown-item", "sms-report-download", 3, "routerLink"], [1, "las", "la-file-alt", "font-size-20"], [1, "dropdown-item", 3, "routerLink"], [1, "las", "la-eye", "font-size-20"]], template: function VoiceReportComponent_Template(rf, ctx) { if (rf & 1) {
        const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VoiceReportComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return ctx.searchReport(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Route");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Transactional");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Marketing");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Campaign Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Less than 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Greater than 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Greater than 1K");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Greater than 10K");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Greater than 100K");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VoiceReportComponent_Template_input_ngModelChange_38_listener($event) { return ctx.selected = $event; })("change", function VoiceReportComponent_Template_input_change_38_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](42, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceReportComponent_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return ctx.clearFormValue(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceReportComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r28); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3); return ctx.exportReport(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceReportComponent_Template_button_click_57_listener() { return ctx.location.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "table", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "tr", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, " Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " Content ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](72, VoiceReportComponent_th_72_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](73, VoiceReportComponent_th_73_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, " Request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](77, VoiceReportComponent_th_77_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](78, VoiceReportComponent_th_78_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](79, VoiceReportComponent_th_79_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](80, VoiceReportComponent_th_80_Template, 3, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](81, VoiceReportComponent_th_81_Template, 1, 0, "th", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](83, VoiceReportComponent_tr_83_Template, 39, 20, "tr", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](84, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "pagination-controls", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function VoiceReportComponent_Template_pagination_controls_pageChange_86_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.selected)("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportNormal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showReportNormal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](84, 11, ctx.voice_report, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](14, _c0, ctx.count, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_6__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.SlicePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2ljZS1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 1196:
/*!***********************************************!*\
  !*** ./src/app/voice/voice-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceRoutingModule": () => (/* binding */ VoiceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _voice_send_voice_send_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voice-send/voice-send.component */ 8829);
/* harmony import */ var _voice_report_voice_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voice-report/voice-report.component */ 6878);
/* harmony import */ var _voice_logs_voice_logs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voice-logs/voice-logs.component */ 3311);
/* harmony import */ var _voice_view_voice_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voice-view/voice-view.component */ 7618);
/* harmony import */ var _voice_compose_voice_compose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voice-compose/voice-compose.component */ 6170);
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.guard */ 2993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: "voice_send",
        component: _voice_send_voice_send_component__WEBPACK_IMPORTED_MODULE_0__.VoiceSendComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "voice_compose",
        component: _voice_compose_voice_compose_component__WEBPACK_IMPORTED_MODULE_4__.VoiceComposeComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "voice_report",
        component: _voice_report_voice_report_component__WEBPACK_IMPORTED_MODULE_1__.VoiceReportComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "voice_logs/:id",
        component: _voice_logs_voice_logs_component__WEBPACK_IMPORTED_MODULE_2__.VoiceLogsComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "voice_statistics/:id",
        component: _voice_view_voice_view_component__WEBPACK_IMPORTED_MODULE_3__.VoiceViewComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
];
class VoiceRoutingModule {
}
VoiceRoutingModule.ɵfac = function VoiceRoutingModule_Factory(t) { return new (t || VoiceRoutingModule)(); };
VoiceRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: VoiceRoutingModule });
VoiceRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](VoiceRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 8829:
/*!**********************************************************!*\
  !*** ./src/app/voice/voice-send/voice-send.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceSendComponent": () => (/* binding */ VoiceSendComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/voice/voice-service.service */ 5571);
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-csv-parser */ 6406);
/* harmony import */ var src_app_shared_sms_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/sms-service.service */ 6622);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-daterangepicker-material */ 6155);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 9991);












function VoiceSendComponent_li_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8, " ");
} }
function VoiceSendComponent_tr_95_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoiceSendComponent_tr_95_Template_input_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const voicelist_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.selectedVoiceFile($event, voicelist_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "MP3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const voicelist_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", voicelist_r9.draft_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", voicelist_r9.draft_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", voicelist_r9.draft_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", voicelist_r9.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", voicelist_r9.duration, ". Sec");
} }
const _c0 = function () { return { format: "DD/MM/YYYY hh:mm A", drops: "up", opens: "left" }; };
function VoiceSendComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " SMS Schedule Message ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceSendComponent_ng_template_133_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const modal_r12 = restoredCtx.$implicit; return modal_r12.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Select Date And Time for Schedule Message");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VoiceSendComponent_ng_template_133_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r15.selected = $event; })("change", function VoiceSendComponent_ng_template_133_Template_input_change_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r16.updateTime($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("timePicker", true)("timePickerIncrement", 1)("timePicker24Hour", false)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c0))("ngModel", ctx_r3.selected)("singleDatePicker", true)("minDate", ctx_r3.minDate);
} }
function VoiceSendComponent_option_165_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const first_row_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", i_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", first_row_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", first_row_r17, " ");
} }
function VoiceSendComponent_li_186_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "i", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "input", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoiceSendComponent_li_186_Template_input_change_19_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const d_r19 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r20.selectedPhonebook(d_r19, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "label", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "110000");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceSendComponent_li_186_Template_a_click_25_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const d_r19 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.groupDelete(d_r19.phonebook_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("routerLink", "/create_group/", d_r19.phonebook_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](d_r19.phonebook_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("id", d_r19.phonebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", d_r19.phonebook_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("for", d_r19.phonebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("routerLink", d_r19.phonebook_id);
} }
class VoiceSendComponent {
    constructor(fb, voiceService, ngxCsvParser, smsService, modalService) {
        this.fb = fb;
        this.voiceService = voiceService;
        this.ngxCsvParser = ngxCsvParser;
        this.smsService = smsService;
        this.modalService = modalService;
        this.selectedLang = "";
        this.cSV = [];
        this.final_aray1 = [];
        this.duration = 0;
        this.credit = 0;
        this.selected = "";
        this.currentDay = moment__WEBPACK_IMPORTED_MODULE_0__().day();
        this.currentTime = moment__WEBPACK_IMPORTED_MODULE_0__().format("hh:mm A");
        ///select phonebook for msg send and send to sms compoent
        this.phoneb_id = [];
        this.phoneb_name = [];
        //csv upload for direct send msg
        this.arr_mobile = [];
    }
    //event handler for the select element's change event
    selectedRoute(event) {
        this.selectedLang = event.target.value;
        console.log(event.target.value);
        this.isChecked = !this.isChecked;
    }
    ///select file
    selectedVoiceFile(event, voicelist) {
        console.log(event);
        console.log(voicelist);
        this.duration = voicelist.duration;
        this.credit = Math.floor(voicelist.duration / 30 + 1);
        // this.sendVoice.patchValue({
        //   draft_id: event.target.value,
        // });
    }
    selectedPhonebook(details, check) {
        console.log(check.target.name);
        var name = details.phonebook_name;
        var id = details.phonebook_id;
        if (check.target.checked == true) {
            this.phoneb_id.push(id);
            this.phoneb_name.push(name);
        }
        else {
            this.phoneb_id = this.phoneb_id.filter((phoneb_id) => phoneb_id !== id);
            this.phoneb_name = this.phoneb_name.filter((phoneb_name) => phoneb_name !== name);
        }
        // var data = [this.phoneb_id, this.phoneb_name];
        // console.log("sms", data);
        // console.log("sms", this.phoneb_name);
    }
    ngOnInit() {
        //send Voice form
        this.sendVoice = this.fb.group({
            campaign_name: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            sender: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            receivers: [],
            route: ["PR", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            draft_id: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            csv_numbers: [],
            phonebook_id: [],
        });
        //get user phonebooklist
        this.smsService.info().subscribe((ress) => {
            this.pb_data = ress.data;
        }, (error) => {
            if (error.status === 401) {
                // this.jwtService.logout();
            }
        });
        //get voice list
        this.voiceService.getVoiceList().subscribe((res) => {
            console.log(res);
            this.voicelist = res;
        }, (error) => {
            console.log(error);
            // }
        });
    }
    onSubmit() {
        console.log(this.sendVoice.value);
        this.sendVoice.value["scheduleTime"] = this.selected;
        console.log(this.sendVoice.value);
        this.voiceService.sendVoice(this.sendVoice.value).subscribe((res) => {
            if (res) {
                // alert(res.message);
                console.log(res);
            }
        }, (error) => {
            console.log(error);
            // }
        }, () => {
            this.sendVoice.reset({
                route: "PR",
            });
        });
    }
    fileChangeListener($event) {
        const files = $event.srcElement.files;
        console.log(files);
        if (files) {
            this.final_aray1 = [];
        }
        this.ngxCsvParser
            .parse(files[0], { header: false, delimiter: "," })
            .pipe()
            .subscribe((result) => {
            this.cSV = result;
            // let result2 = result;
            // if (result[0].length > 15) {
            //   alert("You can upload CSV file have less than 15 Column");
            // } else {
            console.log("Result", result);
            if (result) {
                //  this.showImport = true;
                this.first_row = result[0];
                // var removefirstRow = result2.shift();
            }
            // }
            /////get mobile number from csv///////
            // for (var i = 0; i < result.length; i++) {
            //   for (var j = 0; j < result[i].length; j++) {
            //     var mobile_no = result[i][j];
            //     // var phoneno = /^\d{10}$/;
            //     var phoneno =
            //       /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
            //     // var phoneno = " (?<!\\d)\\d{10}(?!\\d)";
            //     //  /^\d{10}$/;
            //     if (mobile_no.match(phoneno)) {
            //       this.arr_mobile.push(mobile_no);
            //       console.log("contact_from_csv", this.arr_mobile);
            //       // this.total_no_con = this.arr_mobile.length;
            //     }
            //   }
            // }
        }, (error) => {
            console.log("Error", error);
        });
    }
    selectedCol(e, val) {
        console.log(e.target.value);
        // this.sendToThisColumn=e.target.value;
        console.log(val);
        this.final_aray1 = [];
        for (var i = 1; i < this.cSV.length; i++) {
            // if (field_id == "template_id") {
            var array1 = {};
            // (array1["no"] = i),
            // this.selectedColumnForNumberSend = e.target.value;
            var a = this.cSV[i][e.target.value];
            this.final_aray1.push(a);
            // }
        }
        console.log(this.final_aray1);
    }
    sendSelectedNumber() {
        console.log("ff", this.final_aray1);
        // var mm = this.arr_mobile.length;
        if (this.final_aray1.length > 0) {
            this.total_no_con = this.final_aray1.length;
            // var select = this.arr_mobile;
            // console.log("con", select);
        }
        else {
            alert("select any column of csv for send SMS");
        }
    }
    setDefaultValue() {
        this.sendVoice.patchValue({
            phonebook_id: this.phoneb_id,
            csv_numbers: this.final_aray1,
        });
    }
    //set condition for past date disable
    updateTime(e) {
        this.showDateTime = true;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(e);
        if (e) {
            var scheduleDateTime = moment__WEBPACK_IMPORTED_MODULE_0__(e.startDate._d).format("DD/MM/YYYY hh:mm A");
            this.selected = scheduleDateTime;
            console.log(scheduleDateTime);
        }
        //this.maxDate = moment(e).add(15,'days');
    }
    // open(content) {
    //   this.modalService.open(content, { size: "lg" });
    // }
    openMd(content) {
        this.modalService.open(content, { size: "md" });
    }
}
VoiceSendComponent.ɵfac = function VoiceSendComponent_Factory(t) { return new (t || VoiceSendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_1__.VoiceServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_6__.NgxCsvParser), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_sms_service_service__WEBPACK_IMPORTED_MODULE_2__.SmsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
VoiceSendComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VoiceSendComponent, selectors: [["app-voice-send"]], decls: 188, vars: 12, consts: [[1, "content-page", "p-0"], [1, "container-fluid", "p-0"], [1, "row"], [1, "col-xxl-2", "col-xl-2", "col-lg-1", "col-md-1", "col-sm-2"], [1, "col-xxl-8", "col-xl-8", "col-lg-10", "col-md-10", "col-sm-12"], [1, "send_box_new", "shadow-bottom", "p-3", "shadow-showcase"], [3, "formGroup", "ngSubmit"], [1, "col-xxl-12", "col-xl-12", "col-lg-12", "col-md-12", "col-sm-12"], [1, "head_voice", "mb-3"], [1, "la", "la-bullhorn"], [1, "col-sm-6"], [1, "Campaign_Name", "b_left"], [1, "lab", "la-whmcs", "font-size-22"], [1, "Campaign_Name"], ["placeholder", "Campaign Name", "formControlName", "campaign_name", 1, ""], [1, "Campaign_Name", "b_left", "mt-2"], ["placeholder", "caller id", "formControlName", "sender", 1, ""], [1, "rout"], [1, "col-md-6", "text-left"], [1, "custom-control", "custom-checkbox", "custom-checkbox-color", "custom-control-inline"], ["value", "PR", "type", "radio", "id", "Marketing", "formControlName", "route", 1, "custom-control-input", "bg-primary"], ["for", "Marketing", 1, "custom-control-label"], [1, "col-md-6"], ["value", "TR", "type", "radio", "id", "Transaction", "formControlName", "route", 1, "custom-control-input", "bg-primary"], ["for", "Transaction", 1, "custom-control-label"], [4, "ngFor", "ngForOf"], [1, "las", "la-comment-alt"], ["id", "textarea", "name", "messagebody", "placeholder", "Mobile Numbers Comma Separated", "formControlName", "receivers", "cols", "50", "rows", "3", 1, ""], [1, "meg_top_box"], [1, "row", "p-0"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "b_r"], [1, "Templates_a"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6"], [1, "las", "la-bullhorn"], [1, "phone_book_box", "b_left"], [1, "lab", "la-telegram-plane"], [1, "phone_book"], [1, "text-left"], ["type", "button", "data-toggle", "modal", "data-target", "#myModalPhone", 1, "btn", "btn_color", "btn-sm", "mr-2", "phone_book_box_btn"], [1, "las", "la-address-book", "iq-arrow-left"], ["type", "button", "data-toggle", "modal", "data-target", ".Import_CSV_pop", 1, "btn", "btn_color", "btn-sm", "mr-2", "phone_book_box_btn"], [1, "las", "la-download"], [1, "phone_book_box", "b_left", "mt-2"], [1, "col-md-8"], [1, "col-md-4"], ["href", "#", "type", "button", "data-toggle", "modal", "data-target", ".Templates_list", 1, "btn", "btn_color", "btn-sm", "mb-2", "phone_book_box_btn", "float-right"], [1, "las", "la-file-audio"], [1, "col-md-12"], [1, "pricing-listing", "max-hight_ashish"], [1, "table"], [1, "ligth"], [1, "btn", "btn-info", "btn-sm", "mt-3", "float-left", "phone_book_box_btn", 3, "click"], ["_ngcontent-qib-c115", "", "data-v-e08301e8", "", 1, "las", "la-history"], [1, "send_v_cal", "float-right", "mt-3"], ["type", "submit", 1, "btn", "button-icon", "btn-primary", 3, "click"], ["data-v-e08301e8", "", 1, "las", "la-paper-plane"], [1, "cl"], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "Templates_list"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header", "mod_head_bg"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["aria-hidden", "true"], [1, "modal-body", "mod_bg"], ["routerLink", "/voice/voice_compose", "data-dismiss", "modal", "aria-label", "Close"], ["routerLink", "/voice/voice_report", "data-dismiss", "modal", "aria-label", "Close"], ["role", "alert", 1, "alert", "alert-danger"], [1, "iq-alert-text"], ["content2", ""], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "Import_CSV_pop"], [1, "modal-dialog"], [1, "up_csv_file"], [1, "csv-file-chooser-section"], ["type", "file", "name", "File Upload", "id", "csvFileUpload", "accept", ".csv", 3, "change"], ["fileImportInput", ""], [1, "custom-file", "mb-3", "form-group"], ["id", "user-list-table", "role", "grid", "aria-describedby", "user-list-page-info", 1, "table", "table-striped", "dataTable", "mt-1"], [1, "text-center", "col-md-4"], ["type", "hidden", "value", "csv"], ["select", ""], [1, "text-center", "col-md-2"], [1, "form-group"], ["ngDefaultControl", "", 1, "form-control", "mb-3", "bg-light", "boder_non", 3, "change"], ["selected", "", "disabled", "", "value", ""], ["ngModel", "", "name", "select", 3, "value", "id", 4, "ngFor", "ngForOf"], [1, "modal-footer", "footer_mod_10"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], ["id", "myModalPhone", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", 1, "modal", "fade", "come-from-modal", "right"], ["role", "document", 1, "modal-dialog"], [1, "modal-header", "modal-header_as"], ["id", "myModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "closebtn"], [1, "las", "la-times"], [1, "modal-body", "bg-light_as", "border-none"], [1, "mt-1", "mb-4"], ["action", "#", 1, "searchbox"], ["href", "#", 1, "search-link"], [1, "las", "la-search"], ["type", "text", "placeholder", "Search By Phonebook Name", "name", "search", "autocomplete", "off", 1, "text", "search-input", 3, "ngModel", "ngModelChange"], [1, "recent-chat", "mt-3"], [1, "chat-list", "list-unstyled", "m-0", "px-2"], ["class", "chat-list-title row", "data-toggle-extra", "tab", "data-target-extra", "#user-content-2", 4, "ngFor", "ngForOf"], ["data-v-e08301e8", "", 1, "las", "la-user"], [1, "custom-control", "custom-radio", "custom-radio-color-checked", "custom-control-inline"], ["type", "radio", "name", "customRadio-10", 1, "custom-control-input", "bg-primary", 3, "id", "value", "change"], [1, "custom-control-label", 3, "for"], [1, "las", "la-history"], ["type", "button", "aria-label", "Close", 1, "btn-close", "Template_but", 3, "click"], [1, "modal-body", "mod_bg", "text-center"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "01/01/0000", 1, "form-control", "boder_non", "text-center", 3, "timePicker", "timePickerIncrement", "timePicker24Hour", "locale", "ngModel", "singleDatePicker", "minDate", "ngModelChange", "change"], ["ngModel", "", "name", "select", 3, "value", "id"], ["data-toggle-extra", "tab", "data-target-extra", "#user-content-2", 1, "chat-list-title", "row"], [1, "media", "justify-content-between", "chat-user-box", "rounded", "align-items-center"], [1, "chat-profile", "mr-2"], ["src", "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png", "alt", "chat-user", 1, "avatar-25"], [1, "chat-status", "chat-status-warning"], [1, "ri-checkbox-blank-circle-fill"], [1, "media-body", "chat-text"], [1, "d-flex", "align-items-center", "chat-right", "phone_book_name"], ["data-dismiss", "modal", "aria-label", "Close", 3, "routerLink"], [1, "ul_list"], [1, "custom-control", "custom-checkbox", "custom-checkbox-color"], ["type", "checkbox", 1, "custom-control-input", "bg-primary", 3, "id", "value", "change"], [1, "mt-2", "badge_as", "border_as", "border-primary_as", "primary_new"], ["data-target", "#audio-call-modal", "data-toggle", "modal", 1, "btn", "btn-danger", "ml-2", "d-flex", "align-items-center", 3, "routerLink", "click"], [1, "las", "la-trash-alt", "font-size-20"]], template: function VoiceSendComponent_Template(rf, ctx) { if (rf & 1) {
        const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function VoiceSendComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Voice Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Campaign Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Caller Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](30, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Marketing ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Transactional ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, VoiceSendComponent_li_40_Template, 4, 1, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](45, "textarea", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "ul", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "li", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](56, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Send to");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Phonebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](71, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, " Import CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](77, "i", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " Voice List");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "a", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](81, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, " Voice Compose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "table", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "tr", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Title");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, "Format");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93, "Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](95, VoiceSendComponent_tr_95_Template, 10, 5, "tr", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceSendComponent_Template_a_click_98_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](134); return ctx.openMd(_r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](99, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](100, " Schedule ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceSendComponent_Template_button_click_103_listener() { return ctx.setDefaultValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](104, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105, " SEND SMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](106, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](113, "Voice Compose");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](116, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, " Go to Compose Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "a", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122, "Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, " Go to Report Page ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "a", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "Click Here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131, "Note :-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, " If you move to other page form data will be erase ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](133, VoiceSendComponent_ng_template_133_Template, 9, 8, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "h5", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Import CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](143, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](144, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "input", 74, 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoiceSendComponent_Template_input_change_150_listener($event) { return ctx.fileChangeListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "table", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](154, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "td", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](157, "input", 79, 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, " Send To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "td", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](161, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "select", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function VoiceSendComponent_Template_select_change_162_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](158); return ctx.selectedCol($event, _r5.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](163, "option", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](164, " select csv column for Send SMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](165, VoiceSendComponent_option_165_Template, 2, 3, "option", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](167, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VoiceSendComponent_Template_button_click_167_listener() { return ctx.sendSelectedNumber(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, " select ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "h6", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Phonebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "button", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "span", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](177, "i", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "form", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "a", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](182, "i", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "input", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VoiceSendComponent_Template_input_ngModelChange_183_listener($event) { return ctx.searchedKeyword_p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "ul", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](186, VoiceSendComponent_li_186_Template, 27, 6, "li", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](187, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.sendVoice);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.phoneb_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.credit, " credit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.duration, " sec Duration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx.final_aray1.length, " Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.voicelist);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.first_row);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchedKeyword_p);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](187, 9, ctx.pb_data, ctx.searchedKeyword_p));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RadioControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_10__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe], styles: [".imp_center[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  margin: 0px auto;\r\n  text-align: center;\r\n  display: inline-flex;\r\n}\r\n\r\n.Campaign_Name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-weight: 600;\r\n}\r\n\r\n.cl[_ngcontent-%COMP%] {\r\n  clear: both;\r\n}\r\n\r\n.mt-50[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n}\r\n\r\n.voice_icon_pro[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  right: 30px;\r\n  bottom: 25px;\r\n  cursor: pointer;\r\n  color: #999999;\r\n}\r\n\r\n.campaign_voice_As[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.CreateCampaign_stickyHeader[_ngcontent-%COMP%] {\r\n  height: 300px;\r\n  overflow-y: scroll;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 400px;\r\n  min-height: 445px;\r\n  box-sizing: border-box;\r\n  border-radius: 5px;\r\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\r\n  padding-bottom: 20px;\r\n  background: #fff;\r\n  animation: fadeup 0.5s 0.5s ease both;\r\n  transform: translateY(20px);\r\n  opacity: 0;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\r\n  background: #4db6ac;\r\n  border-top-left-radius: 5px;\r\n  border-top-right-radius: 5px;\r\n  text-align: center;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 40px;\r\n  margin: 0;\r\n  padding: 50px 0;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  transform: translateY(20px);\r\n  opacity: 0;\r\n  font-size: 30px;\r\n  animation: fadeup 0.5s 1s ease both;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  transform: translateX(-20px);\r\n  display: inline-block;\r\n  opacity: 0;\r\n  animation: faderight 0.5s 1.5s ease both;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   .load[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  font-weight: 100;\r\n  margin-left: -8px;\r\n  transform: translateX(-20px);\r\n  opacity: 0;\r\n  animation: faderight 1s 1.5s ease both;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 50px 0;\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  visibility: hidden;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 65px;\r\n  color: lightgray;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  padding-top: 15px;\r\n  line-height: 1.4;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], .upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  color: #4db6ac;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body.active[_ngcontent-%COMP%] {\r\n  border: dashed 2px #4db6ac;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  box-shadow: 0 0 0 -3px #fff, 0 0 0 lightgray, 0 0 0 -3px #fff, 0 0 0 lightgray;\r\n  animation: file 0.5s ease both;\r\n}\r\n\r\n@keyframes file {\r\n  50% {\r\n    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray, -8px 8px 0 -3px #fff,\r\n      -8px 8px 0 lightgray;\r\n  }\r\n  75%,\r\n  100% {\r\n    box-shadow: -8px 8px 0 -3px #fff, -8px 8px 0 lightgray,\r\n      -16px 16px 0 -3px #fff, -16px 16px 0 lightgray;\r\n  }\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   .body.active[_ngcontent-%COMP%]   .pointer-none[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  height: 0;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n  margin: 0 auto;\r\n  width: 0;\r\n  border-top: solid 4px #46aba1;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  transition: width 0.5s ease;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  transform: translateY(-25px);\r\n  font-size: 12px;\r\n  padding-top: 8px;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer.hasFiles[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer.hasFiles[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer.hasFiles[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  transform: translateY(0);\r\n  transition: transform 0.5s 0.5s ease;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%] {\r\n  width: 320px;\r\n  margin: 0 auto;\r\n  margin-top: 15px;\r\n  padding-left: 5px;\r\n  text-align: center;\r\n  overflow-x: hidden;\r\n  overflow-y: auto;\r\n  max-height: 210px;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]::-webkit-scrollbar-track {\r\n  background-color: rgba(211, 211, 211, 0.25);\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 4px;\r\n  background-color: rgba(211, 211, 211, 0.25);\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  background-color: rgba(77, 182, 172, 0.5);\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%] {\r\n  width: 300px;\r\n  min-height: 50px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  opacity: 0;\r\n  animation: fade 0.35s ease both;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n  overflow: hidden;\r\n  width: 80px;\r\n  text-align: left;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\r\n  width: 175px;\r\n  height: 5px;\r\n  border: solid 1px lightgray;\r\n  border-radius: 2px;\r\n  background: linear-gradient(\r\n      to left,\r\n      rgba(77, 182, 172, 0.2),\r\n      rgba(77, 182, 172, 0.8)\r\n    )\r\n    no-repeat;\r\n  background-size: 100% 100%;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .progress.active[_ngcontent-%COMP%] {\r\n  animation: progress 30s linear;\r\n}\r\n\r\n@keyframes progress {\r\n  from {\r\n    background-size: 0 100%;\r\n  }\r\n  to {\r\n    background-size: 100% 100%;\r\n  }\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n  width: 40px;\r\n  height: 40px;\r\n  background: #4db6ac;\r\n  border-radius: 50%;\r\n  margin-left: -10px;\r\n  transform: scale(0);\r\n  position: relative;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]:before {\r\n  content: \"View\";\r\n  position: absolute;\r\n  top: 0;\r\n  left: -5px;\r\n  font-size: 24px;\r\n  opacity: 0;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]:hover:before {\r\n  transition: all 0.25s ease;\r\n  top: -30px;\r\n  opacity: 1;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .done.anim[_ngcontent-%COMP%] {\r\n  animation: done1 0.5s ease forwards;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .done.anim[_ngcontent-%COMP%]   #path[_ngcontent-%COMP%] {\r\n  animation: done2 2.5s 0.5s ease forwards;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .list-files[_ngcontent-%COMP%]   .file[_ngcontent-%COMP%]   .done[_ngcontent-%COMP%]   #path[_ngcontent-%COMP%] {\r\n  stroke-dashoffset: 7387.5942382813;\r\n  stroke-dasharray: 7387.5942382813 7387.5942382813;\r\n  stroke: #fff;\r\n  fill: transparent;\r\n  stroke-width: 50px;\r\n}\r\n\r\n@keyframes done2 {\r\n  to {\r\n    stroke-dashoffset: 0;\r\n  }\r\n}\r\n\r\n@keyframes done1 {\r\n  50% {\r\n    transform: scale(0.5);\r\n    opacity: 1;\r\n  }\r\n  80% {\r\n    transform: scale(0.25);\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    transform: scale(0.5);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .importar[_ngcontent-%COMP%] {\r\n  outline: none;\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 20px;\r\n  margin: auto;\r\n  border: solid 1px #4db6ac;\r\n  color: #4db6ac;\r\n  background: transparent;\r\n  padding: 8px 15px;\r\n  font-size: 12px;\r\n  border-radius: 4px;\r\n  font-family: Roboto;\r\n  line-height: 1;\r\n  cursor: pointer;\r\n  transform: translateY(15px);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n  margin-left: calc(50% - 40px);\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .importar.active[_ngcontent-%COMP%] {\r\n  transition: transform 0.5s 1.5s ease, opacity 0.5s 1.5s ease, background;\r\n  transform: translateY(0);\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.upload[_ngcontent-%COMP%]   .upload-files[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%]   .importar[_ngcontent-%COMP%]:hover {\r\n  background: #4db6ac;\r\n  color: #fff;\r\n}\r\n\r\n@keyframes fadeup {\r\n  to {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes faderight {\r\n  to {\r\n    transform: translateX(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes fade {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media (max-width: 400px) {\r\n  .upload[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n  }\r\n}\r\n\r\n.max-hight_ashish[_ngcontent-%COMP%] {\r\n  height: 220px;\r\n  overflow: auto;\r\n  display: block;\r\n}\r\n\r\n.Campaign_Name[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  border: none;\r\n  width: 100%;\r\n  height: 95px;\r\n  font-family: \"Heebo\", sans-serif;\r\n  font-size: 14px;\r\n  color: #6d8aae;\r\n  font-weight: 600;\r\n  line-height: 41px;\r\n  position: relative;\r\n  text-align: left;\r\n  background-color: #ebebeb;\r\n  padding: 0px 10px;\r\n}\r\n\r\n.no_img_voice_call[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 200px;\r\n  background-color: #fbfdfe;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  padding: 30px 0px;\r\n  font-size: 18px;\r\n  text-align: center;\r\n}\r\n\r\n.box_voice_div[_ngcontent-%COMP%] {\r\n  width: 160px;\r\n  height: 196px;\r\n  float: left;\r\n  position: relative;\r\n  margin: 10px 10px 10px 10px;\r\n  border: 1px solid #e6eaed;\r\n  box-sizing: border-box;\r\n  border-radius: 4px;\r\n  text-align: center;\r\n  background: none;\r\n  cursor: pointer;\r\n  padding: 60px 0px;\r\n}\r\n\r\n.box_voice_div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  padding: 23px 20px;\r\n  border-radius: 50%;\r\n  background-color: #abb9c9;\r\n}\r\n\r\n.box_voice_div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  clear: both;\r\n  display: inline-block;\r\n  margin-top: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.box_voice_div[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.bg_input_new_row[_ngcontent-%COMP%] {\r\n  background-color: #f6f8fb !important;\r\n}\r\n\r\n.bg_input_new_row_tow[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n  border: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZvaWNlLXNlbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFFaEIscUNBQXFDO0VBQ3JDLDJCQUEyQjtFQUMzQixVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFNBQVM7RUFDVCxlQUFlO0FBQ2pCOztBQUNBO0VBQ0UsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixlQUFlO0VBRWYsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsVUFBVTtFQUVWLHdDQUF3QztBQUMxQzs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixVQUFVO0VBRVYsc0NBQXNDO0FBQ3hDOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEI7O0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBQ0E7O0VBRUUsY0FBYztBQUNoQjs7QUFDQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLDhFQUE4RTtFQUU5RSw4QkFBOEI7QUFDaEM7O0FBWUE7RUFDRTtJQUNFOzBCQUNzQjtFQUN4QjtFQUNBOztJQUVFO29EQUNnRDtFQUNsRDtBQUNGOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsUUFBUTtFQUNSLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtBQUM3Qjs7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixvQ0FBb0M7QUFDdEM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDOztBQUNBO0VBQ0UsVUFBVTtFQUNWLDJDQUEyQztBQUM3Qzs7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFDQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsVUFBVTtFQUVWLCtCQUErQjtBQUNqQzs7QUFDQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCOzs7OzthQUtXO0VBQ1gsMEJBQTBCO0FBQzVCOztBQUNBO0VBRUUsOEJBQThCO0FBQ2hDOztBQVNBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixlQUFlO0VBQ2YsVUFBVTtBQUNaOztBQUNBO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBQ0E7RUFFRSxtQ0FBbUM7QUFDckM7O0FBQ0E7RUFFRSx3Q0FBd0M7QUFDMUM7O0FBQ0E7RUFDRSxrQ0FBa0M7RUFDbEMsaURBQWlEO0VBQ2pELFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQU1BO0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7QUFDRjs7QUFlQTtFQUNFO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsNkJBQTZCO0FBQy9COztBQUNBO0VBQ0Usd0VBQXdFO0VBQ3hFLHdCQUF3QjtFQUN4QixVQUFVO0VBQ1YsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFPQTtFQUNFO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtBQUNGOztBQU9BO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7O0FBTUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZCIsImZpbGUiOiJ2b2ljZS1zZW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1wX2NlbnRlciB1bCB7XHJcbiAgbWFyZ2luOiAwcHggYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5DYW1wYWlnbl9OYW1lIGkge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jbCB7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi5tdC01MCB7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbn1cclxuXHJcbi52b2ljZV9pY29uX3BybyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzMHB4O1xyXG4gIGJvdHRvbTogMjVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICM5OTk5OTk7XHJcbn1cclxuLmNhbXBhaWduX3ZvaWNlX0FzIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5DcmVhdGVDYW1wYWlnbl9zdGlja3lIZWFkZXIge1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIHBhZGRpbmc6IDBweCAxMHB4O1xyXG59XHJcblxyXG4udXBsb2FkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ0NXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZXVwIDAuNXMgMC41cyBlYXNlIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBmYWRldXAgMC41cyAwLjVzIGVhc2UgYm90aDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNGRiNmFjO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgaGVhZGVyIHAge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBoZWFkZXIgcCBpIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGV1cCAwLjVzIDFzIGVhc2UgYm90aDtcclxuICBhbmltYXRpb246IGZhZGV1cCAwLjVzIDFzIGVhc2UgYm90aDtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgaGVhZGVyIHAgLnVwIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTIwcHgpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlcmlnaHQgMC41cyAxLjVzIGVhc2UgYm90aDtcclxuICBhbmltYXRpb246IGZhZGVyaWdodCAwLjVzIDEuNXMgZWFzZSBib3RoO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBoZWFkZXIgcCAubG9hZCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0yMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlcmlnaHQgMXMgMS41cyBlYXNlIGJvdGg7XHJcbiAgYW5pbWF0aW9uOiBmYWRlcmlnaHQgMXMgMS41cyBlYXNlIGJvdGg7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIC5ib2R5IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNTBweCAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyAuYm9keS5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIC5ib2R5IGlucHV0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIC5ib2R5IGkge1xyXG4gIGZvbnQtc2l6ZTogNjVweDtcclxuICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyAuYm9keSBwIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgLmJvZHkgcCBiLFxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgLmJvZHkgcCBhIHtcclxuICBjb2xvcjogIzRkYjZhYztcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgLmJvZHkuYWN0aXZlIHtcclxuICBib3JkZXI6IGRhc2hlZCAycHggIzRkYjZhYztcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgLmJvZHkuYWN0aXZlIGkge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIC0zcHggI2ZmZiwgMCAwIDAgbGlnaHRncmF5LCAwIDAgMCAtM3B4ICNmZmYsIDAgMCAwIGxpZ2h0Z3JheTtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmlsZSAwLjVzIGVhc2UgYm90aDtcclxuICBhbmltYXRpb246IGZpbGUgMC41cyBlYXNlIGJvdGg7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZpbGUge1xyXG4gIDUwJSB7XHJcbiAgICBib3gtc2hhZG93OiAtOHB4IDhweCAwIC0zcHggI2ZmZiwgLThweCA4cHggMCBsaWdodGdyYXksIC04cHggOHB4IDAgLTNweCAjZmZmLFxyXG4gICAgICAtOHB4IDhweCAwIGxpZ2h0Z3JheTtcclxuICB9XHJcbiAgNzUlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogLThweCA4cHggMCAtM3B4ICNmZmYsIC04cHggOHB4IDAgbGlnaHRncmF5LFxyXG4gICAgICAtMTZweCAxNnB4IDAgLTNweCAjZmZmLCAtMTZweCAxNnB4IDAgbGlnaHRncmF5O1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZpbGUge1xyXG4gIDUwJSB7XHJcbiAgICBib3gtc2hhZG93OiAtOHB4IDhweCAwIC0zcHggI2ZmZiwgLThweCA4cHggMCBsaWdodGdyYXksIC04cHggOHB4IDAgLTNweCAjZmZmLFxyXG4gICAgICAtOHB4IDhweCAwIGxpZ2h0Z3JheTtcclxuICB9XHJcbiAgNzUlLFxyXG4gIDEwMCUge1xyXG4gICAgYm94LXNoYWRvdzogLThweCA4cHggMCAtM3B4ICNmZmYsIC04cHggOHB4IDAgbGlnaHRncmF5LFxyXG4gICAgICAtMTZweCAxNnB4IDAgLTNweCAjZmZmLCAtMTZweCAxNnB4IDAgbGlnaHRncmF5O1xyXG4gIH1cclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgLmJvZHkuYWN0aXZlIC5wb2ludGVyLW5vbmUge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5kaXZpZGVyIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB3aWR0aDogMDtcclxuICBib3JkZXItdG9wOiBzb2xpZCA0cHggIzQ2YWJhMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjVzIGVhc2U7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIGZvb3RlciAuZGl2aWRlciBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyLmhhc0ZpbGVzIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIGZvb3Rlci5oYXNGaWxlcyAuZGl2aWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIGZvb3Rlci5oYXNGaWxlcyAuZGl2aWRlciBzcGFuIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgMC41cyBlYXNlO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmxpc3QtZmlsZXMge1xyXG4gIHdpZHRoOiAzMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXgtaGVpZ2h0OiAyMTBweDtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5saXN0LWZpbGVzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDIxMSwgMjExLCAwLjI1KTtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5saXN0LWZpbGVzOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgMjExLCAyMTEsIDAuMjUpO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmxpc3QtZmlsZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc3LCAxODIsIDE3MiwgMC41KTtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5saXN0LWZpbGVzIC5maWxlIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGUgMC4zNXMgZWFzZSBib3RoO1xyXG4gIGFuaW1hdGlvbjogZmFkZSAwLjM1cyBlYXNlIGJvdGg7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIGZvb3RlciAubGlzdC1maWxlcyAuZmlsZSAubmFtZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aWR0aDogODBweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmxpc3QtZmlsZXMgLmZpbGUgLnByb2dyZXNzIHtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggbGlnaHRncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgIHRvIGxlZnQsXHJcbiAgICAgIHJnYmEoNzcsIDE4MiwgMTcyLCAwLjIpLFxyXG4gICAgICByZ2JhKDc3LCAxODIsIDE3MiwgMC44KVxyXG4gICAgKVxyXG4gICAgbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmxpc3QtZmlsZXMgLmZpbGUgLnByb2dyZXNzLmFjdGl2ZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IHByb2dyZXNzIDMwcyBsaW5lYXI7XHJcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcyAzMHMgbGluZWFyO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBwcm9ncmVzcyB7XHJcbiAgZnJvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDAgMTAwJTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgcHJvZ3Jlc3Mge1xyXG4gIGZyb20ge1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAwIDEwMCU7XHJcbiAgfVxyXG4gIHRvIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIH1cclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5saXN0LWZpbGVzIC5maWxlIC5kb25lIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICM0ZGI2YWM7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5saXN0LWZpbGVzIC5maWxlIC5kb25lOmJlZm9yZSB7XHJcbiAgY29udGVudDogXCJWaWV3XCI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAtNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmxpc3QtZmlsZXMgLmZpbGUgLmRvbmU6aG92ZXI6YmVmb3JlIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcclxuICB0b3A6IC0zMHB4O1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIGZvb3RlciAubGlzdC1maWxlcyAuZmlsZSAuZG9uZS5hbmltIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZG9uZTEgMC41cyBlYXNlIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogZG9uZTEgMC41cyBlYXNlIGZvcndhcmRzO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmxpc3QtZmlsZXMgLmZpbGUgLmRvbmUuYW5pbSAjcGF0aCB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGRvbmUyIDIuNXMgMC41cyBlYXNlIGZvcndhcmRzO1xyXG4gIGFuaW1hdGlvbjogZG9uZTIgMi41cyAwLjVzIGVhc2UgZm9yd2FyZHM7XHJcbn1cclxuLnVwbG9hZCAudXBsb2FkLWZpbGVzIGZvb3RlciAubGlzdC1maWxlcyAuZmlsZSAuZG9uZSAjcGF0aCB7XHJcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDczODcuNTk0MjM4MjgxMztcclxuICBzdHJva2UtZGFzaGFycmF5OiA3Mzg3LjU5NDIzODI4MTMgNzM4Ny41OTQyMzgyODEzO1xyXG4gIHN0cm9rZTogI2ZmZjtcclxuICBmaWxsOiB0cmFuc3BhcmVudDtcclxuICBzdHJva2Utd2lkdGg6IDUwcHg7XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGRvbmUyIHtcclxuICB0byB7XHJcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICB9XHJcbn1cclxuQGtleWZyYW1lcyBkb25lMiB7XHJcbiAgdG8ge1xyXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgfVxyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBkb25lMSB7XHJcbiAgNTAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDgwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMjUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgMTAwJSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGRvbmUxIHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbiAgODAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4yNSk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmltcG9ydGFyIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggIzRkYjZhYztcclxuICBjb2xvcjogIzRkYjZhYztcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiA4cHggMTVweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNXB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBtYXJnaW4tbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcclxufVxyXG4udXBsb2FkIC51cGxvYWQtZmlsZXMgZm9vdGVyIC5pbXBvcnRhci5hY3RpdmUge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIDEuNXMgZWFzZSwgb3BhY2l0eSAwLjVzIDEuNXMgZWFzZSwgYmFja2dyb3VuZDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgb3BhY2l0eTogMTtcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbi51cGxvYWQgLnVwbG9hZC1maWxlcyBmb290ZXIgLmltcG9ydGFyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNGRiNmFjO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRldXAge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZXVwIHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZXJpZ2h0IHtcclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGVyaWdodCB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUge1xyXG4gIHRvIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgZmFkZSB7XHJcbiAgdG8ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLnVwbG9hZCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXgtaGlnaHRfYXNoaXNoIHtcclxuICBoZWlnaHQ6IDIyMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uQ2FtcGFpZ25fTmFtZSB0ZXh0YXJlYSB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTVweDtcclxuICBmb250LWZhbWlseTogXCJIZWVib1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzZkOGFhZTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgcGFkZGluZzogMHB4IDEwcHg7XHJcbn1cclxuXHJcbi5ub19pbWdfdm9pY2VfY2FsbCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmJmZGZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3hfdm9pY2VfZGl2IHtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxOTZweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmVhZWQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDYwcHggMHB4O1xyXG59XHJcblxyXG4uYm94X3ZvaWNlX2RpdiBzcGFuIHtcclxuICBwYWRkaW5nOiAyM3B4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmI5Yzk7XHJcbn1cclxuXHJcbi5ib3hfdm9pY2VfZGl2IHAge1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJveF92b2ljZV9kaXYgaSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5iZ19pbnB1dF9uZXdfcm93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmOGZiICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJnX2lucHV0X25ld19yb3dfdG93IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5571:
/*!************************************************!*\
  !*** ./src/app/voice/voice-service.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceServiceService": () => (/* binding */ VoiceServiceService)
/* harmony export */ });
/* harmony import */ var src_app_global_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/global_constant */ 6107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class VoiceServiceService {
    constructor(http) {
        this.http = http;
        this.url = src_app_global_constant__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.url;
    }
    ////////////////----------------------send voice start---------------------///////////
    getVoiceList() {
        return this.http.get(this.url + "get_draft");
    }
    sendVoice(data) {
        return this.http.post(this.url + "sendVoice", data);
    }
    ////////////////----------------------send voice end---------------------///////////
    ////////////////----------------------report start---------------------///////////
    //get voice report
    getReportVoice() {
        return this.http.get(this.url + "voiceReport");
    }
    //filtter or search report
    searchVoiceReport(data) {
        return this.http.post(this.url + "voiceFilterReport", data);
    }
    voiceReportExport(data) {
        return this.http.post(this.url + "voiceReportExport", data);
    }
    ////////////////----------------------report end---------------------///////////
    ////////////////----------------------logs start---------------------///////////
    voiceLogs(id) {
        return this.http.get(this.url + "voiceLogs/" + id);
    }
    resendVoice(data) {
        return this.http.post(this.url + "resendVoice", data);
    }
    searchVoiceLogs(data) {
        return this.http.post(this.url + "voiceLogsFilter", data);
    }
    voiceLogsExport(data) {
        return this.http.post(this.url + "voiceLogsExport", data);
    }
    ////////////////----------------------logs end---------------------///////////
    ////////////////----------------------view start---------------------///////////
    voiceStatistics(id) {
        return this.http.get(this.url + "voiceStatistics/" + id);
    }
    ////////////////----------------------view end---------------------///////////
    ////////////////----------------------compose start---------------------///////////
    saveAudioFile(data) {
        return this.http.post(this.url + "save_draft", data);
    }
    deleteSavedAudio(id) {
        return this.http.get(this.url + "delete_draft/" + id);
    }
}
VoiceServiceService.ɵfac = function VoiceServiceService_Factory(t) { return new (t || VoiceServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
VoiceServiceService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: VoiceServiceService, factory: VoiceServiceService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 7618:
/*!**********************************************************!*\
  !*** ./src/app/voice/voice-view/voice-view.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceViewComponent": () => (/* binding */ VoiceViewComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/voice/voice-service.service */ 5571);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ 54);





const _c0 = ["chart"];
class VoiceViewComponent {
    constructor(location, voiceService, route) {
        this.location = location;
        this.voiceService = voiceService;
        this.route = route;
        this.campaign_id = "";
        this.graph_data = [];
        route.paramMap.subscribe((param) => {
            this.campaign_id = param.get("id");
        });
    }
    ngOnInit() {
        //get full campaign details
        this.voiceService.voiceStatistics(this.campaign_id).subscribe((res) => {
            console.log(res);
            this.voice_state = res.data[0];
            var data = res.data[1];
            console.log(Object.values(data));
            // let sum = data.reduce((a, b) => a + b, 0);
            // console.log("Sum", sum);
            this.graph_data = Object.values(data);
            this.graph_data.push(0);
            console.log(this.graph_data);
            console.log(res.data[0]);
            this.chartOptions1 = {
                series: this.graph_data,
                chart: {
                    type: "donut",
                },
                colors: [
                    "#66C28A",
                    "#FFABAC",
                    "#BEC7FA",
                    "#A4EAF3",
                    "#3E4153",
                    // "#546E7A",
                    // "#26a69a",
                    // "#D10CE8",
                ],
                labels: ["Delivered", "Failed", "Submitted", "Sent", "Reject&Block"],
                responsive: [
                    {
                        breakpoint: 5000,
                        options: {
                            chart: {
                                width: 410,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            };
            this.chartOptions = {
                series: [
                    {
                        name: "distributed",
                        data: this.graph_data,
                    },
                ],
                chart: {
                    height: 400,
                    type: "bar",
                    // events: {
                    //   click: function (chart, w, e) {
                    //     // console.log(chart, w, e)
                    //   },
                    // },
                },
                colors: ["#66C28A", "#FFABAC", "#BEC7FA", "#A4EAF3", "#3E4153"],
                plotOptions: {
                    bar: {
                        columnWidth: "55%",
                        distributed: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                grid: {
                    show: true,
                },
                xaxis: {
                    categories: [
                        ["Delivered"],
                        ["Failed"],
                        ["Submitted"],
                        ["Sent"],
                        ["Reject&Block"],
                    ],
                    labels: {
                        style: {
                            colors: ["#00E396", "#FFABAC", "#BEC7FA", "#A4EAF3", "#3E4153"],
                            fontSize: "20px",
                        },
                    },
                },
            };
        }, (error) => {
            if (error.status == 401) {
                alert(error.statusText);
                // this.jwtService.error(error);
            }
        });
    }
}
VoiceViewComponent.ɵfac = function VoiceViewComponent_Factory(t) { return new (t || VoiceViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_voice_voice_service_service__WEBPACK_IMPORTED_MODULE_0__.VoiceServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
VoiceViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VoiceViewComponent, selectors: [["app-voice-view"]], viewQuery: function VoiceViewComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 87, vars: 21, consts: [[1, "content-page"], [1, "container-fluid"], [1, "row", "bg_whit"], [1, "col-xxl-10", "col-xl-10", "col-lg-10", "col-md-10", "col-sm-10", "col-6"], [1, "header-title", "mt-3"], [1, "card-title"], [1, "las", "la-user-check"], [1, "col-xxl-2", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-2", "col-6"], [1, "header-title", "mt-3", "text-right"], [3, "click"], [1, "badge", "badge-primary"], ["data-v-e08301e8", "", 1, "fas", "fa-arrow-left"], [1, "row", "mt-4"], [1, "col-md-5"], [1, "box_st_ashish"], [1, "blur-shadow", "p-4", "shadow-showcase", "text-center"], [1, "card"], [1, "mb-2"], ["id", "chart"], [3, "series", "chart", "labels", "responsive", "colors"], [1, "col-md-7"], [1, "blur-shadow", "shadow-showcase", "text-center"], [1, "mb-2", "pt-3"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "grid", "colors"], [1, "col-sm-3", "mt-4"], [1, "ashish_box_dr", "blur-shadow", "p-2", "m-2", "shadow-showcase", "text-center"], [1, "i_icon"], ["data-v-e08301e8", "", 1, "fas", "fa-comment-dots"], ["data-v-e08301e8", "", 1, "fas", "fa-rupee-sign"], ["data-v-e08301e8", "", 1, "fas", "fa-icons"], ["data-v-e08301e8", "", 1, "fas", "fa-address-card"], [1, "col-sm-3", "mt-2"], ["data-v-e08301e8", "", 1, "fas", "fa-user-tie"], ["data-v-e08301e8", "", 1, "fas", "fa-calendar-check"], ["data-v-e08301e8", "", 1, "fas", "fa-globe"]], template: function VoiceViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Voice Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VoiceViewComponent_Template_a_click_11_listener() { return ctx.location.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Back Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Voice Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "apx-chart", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h4", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Total Voice Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "apx-chart", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Total SMS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Total Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Route");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](58, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "CallerID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](66, "i", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Done Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("labels", ctx.chartOptions1.labels)("responsive", ctx.chartOptions1.responsive)("colors", ctx.chartOptions1.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("xaxis", ctx.chartOptions.xaxis)("legend", ctx.chartOptions.legend)("grid", ctx.chartOptions.grid)("colors", ctx.chartOptions.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.voice_state == null ? null : ctx.voice_state.total_messages);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.voice_state == null ? null : ctx.voice_state.campaign_cost) !== null ? ctx.voice_state == null ? null : ctx.voice_state.campaign_cost : "Not Available", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.voice_state == null ? null : ctx.voice_state.route) == "TR" ? "Transactional" : (ctx.voice_state == null ? null : ctx.voice_state.route) == "PR" ? "Promotional" : "Unkown Route", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.voice_state == null ? null : ctx.voice_state.sender);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.voice_state == null ? null : ctx.voice_state.campaign_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.voice_state == null ? null : ctx.voice_state.submit_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (ctx.voice_state == null ? null : ctx.voice_state.done_date) !== null ? ctx.voice_state == null ? null : ctx.voice_state.done_date : ctx.voice_state == null ? null : ctx.voice_state.submit_date, " ");
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2b2ljZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8599:
/*!***************************************!*\
  !*** ./src/app/voice/voice.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VoiceModule": () => (/* binding */ VoiceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _voice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./voice-routing.module */ 1196);
/* harmony import */ var _voice_send_voice_send_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./voice-send/voice-send.component */ 8829);
/* harmony import */ var _voice_report_voice_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voice-report/voice-report.component */ 6878);
/* harmony import */ var _voice_logs_voice_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./voice-logs/voice-logs.component */ 3311);
/* harmony import */ var _voice_view_voice_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./voice-view/voice-view.component */ 7618);
/* harmony import */ var _voice_compose_voice_compose_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./voice-compose/voice-compose.component */ 6170);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-daterangepicker-material */ 6155);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 5595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
















class VoiceModule {
}
VoiceModule.ɵfac = function VoiceModule_Factory(t) { return new (t || VoiceModule)(); };
VoiceModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: VoiceModule });
VoiceModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _voice_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoiceRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule,
            ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__.NgxDaterangepickerMd.forRoot(),
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule,
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](VoiceModule, { declarations: [_voice_send_voice_send_component__WEBPACK_IMPORTED_MODULE_1__.VoiceSendComponent,
        _voice_report_voice_report_component__WEBPACK_IMPORTED_MODULE_2__.VoiceReportComponent,
        _voice_logs_voice_logs_component__WEBPACK_IMPORTED_MODULE_3__.VoiceLogsComponent,
        _voice_view_voice_view_component__WEBPACK_IMPORTED_MODULE_4__.VoiceViewComponent,
        _voice_compose_voice_compose_component__WEBPACK_IMPORTED_MODULE_5__.VoiceComposeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _voice_routing_module__WEBPACK_IMPORTED_MODULE_0__.VoiceRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipeModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__.NgxDaterangepickerMd, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_voice_voice_module_ts.js.map