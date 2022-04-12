"use strict";
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_app_emailer_emailer_module_ts"],{

/***/ 2572:
/*!******************************************************************!*\
  !*** ./src/app/emailer/email-compose/email-compose.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailComposeComponent": () => (/* binding */ EmailComposeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_emailer_services_emailer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/emailer/services/emailer.service */ 9290);
/* harmony import */ var src_app_shared_sms_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/sms-service.service */ 6622);
/* harmony import */ var ngx_csv_parser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-csv-parser */ 6406);
/* harmony import */ var src_app_shared_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jwt.service */ 668);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-daterangepicker-material */ 6155);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);












function EmailComposeComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.resmsg == null ? null : ctx_r0.resmsg.Status, "\n");
} }
function EmailComposeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.err == null ? null : ctx_r1.err.Message, "\n");
} }
function EmailComposeComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r8, " ");
} }
function EmailComposeComponent_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const verifymail_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", verifymail_r9.verify_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", verifymail_r9.verify_email, " ");
} }
function EmailComposeComponent_li_86_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EmailComposeComponent_li_86_Template_input_change_19_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r12); const d_r10 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r11.selectedPhonebook(d_r10, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "label", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "110000");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const d_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/create_group/", d_r10.phonebook_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](d_r10.phonebook_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", d_r10.phonebook_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", d_r10.phonebook_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("for", d_r10.phonebook_id);
} }
function EmailComposeComponent_option_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const first_row_r13 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", first_row_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", first_row_r13, " ");
} }
const _c0 = function () { return { format: "DD/MM/YYYY hh:mm A", drops: "up", opens: "left" }; };
const _c1 = function () { return { standalone: true }; };
class EmailComposeComponent {
    constructor(fb, emailService, smsService, ngxCsvParser, cdref, jwtService) {
        this.fb = fb;
        this.emailService = emailService;
        this.smsService = smsService;
        this.ngxCsvParser = ngxCsvParser;
        this.cdref = cdref;
        this.jwtService = jwtService;
        this.cSV = [];
        this.final_aray1 = [];
        this.selected = "";
        this.currentDay = moment__WEBPACK_IMPORTED_MODULE_0__().day();
        this.currentTime = moment__WEBPACK_IMPORTED_MODULE_0__().format("hh:mm A");
        this.filePath = "";
        this.htmlContent1 = "";
        this.err = null;
        this.resmsg = null;
        ///select phonebook for msg send and send to sms compoent
        this.phoneb_id = [];
        this.phoneb_name = [];
        //csv upload for direct send msg
        this.arr_mobile = [];
        this.isSubmitBtnDisabled = false;
    }
    selectedPhonebook(details, check) {
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
        console.log("sms", this.phoneb_name);
    }
    ngOnInit() {
        //send Voice form
        this.sendEmail = this.fb.group({
            sender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            sender_name: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            recipient: [""],
            subject: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            body: [, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            csv_email: [],
            phonebook_id: [],
        });
        //get user phonebooklist
        this.smsService.info().subscribe((ress) => {
            this.pb_data = ress.data;
        }, (error) => {
            if (error.status === 401) {
                this.jwtService.error(error);
            }
        });
        //get list of verified mail
        this.emailService.getListVerified().subscribe((res) => {
            console.log(res);
            this.verifyMail = res;
        }, (error) => {
            if (error.status == 401) {
                alert(error.statusText);
            }
        });
    }
    handleFiles(event) {
        console.log(event);
        const file1 = event.target.files[0];
        var files = event.target.files;
        console.log(files);
        this.filePath = file1;
        var a = URL.createObjectURL(files[0]);
        // document.getElementById("voiceCallfile_audio").load();
    }
    onSendEmail() {
        this.isSubmitBtnDisabled = true;
        console.log(this.filePath);
        const formData = new FormData();
        formData.append("file", this.filePath);
        console.log("FD", formData);
        // this.sendEmail.value["attachment"] = formData;
        // var array = [this.sendEmail.value, formData];
        console.log(this.sendEmail.value);
        // console.log("k", this.selected);
        // if (
        //   moment(this.selected.startDate._d).format("DD/MM/YYYY hh:mm A") !== null
        // ) {
        //   this.sendEmail.value["scheduleTime"] = moment(
        //     this.selected.startDate._d
        //   ).format("DD/MM/YYYY hh:mm A");
        // }
        this.emailService.sendEmail(formData).subscribe((res) => {
            console.log(res);
            if (true) {
                this.resmsg = res.Status;
                alert(res.Status);
                this.isSubmitBtnDisabled = false;
            }
        }, (error) => {
            if (true) {
                console.log("403", error);
                this.isSubmitBtnDisabled = false;
                alert(error.Message);
                this.err = error.Message;
            }
            if (true) {
                alert(error.statusText);
                this.jwtService.error(error);
                this.err = error.statusText;
            }
        }, () => {
            this.final_aray1 = [];
            this.phoneb_id = [];
            this.phoneb_name = [];
            this.sendEmail.reset({
                sender: "",
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
            console.log("Result", result);
            if (result) {
                this.first_row = result[0];
            }
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
            var a = this.cSV[i][e.target.value];
            this.final_aray1.push(a);
            // }
        }
        console.log(this.final_aray1);
    }
    setDefaultValue() {
        this.sendEmail.patchValue({
            phonebook_id: this.phoneb_id,
            csv_email: this.final_aray1,
            attachment: this.filePath,
        });
    }
    //set condition for past date disable
    updateTime(e) {
        this.showDateTime = true;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_0__(e);
        // if (e) {
        // var scheduleDateTime = moment(e.startDate._d).format(
        //   "DD/MM/YYYY hh:mm A"
        // );
        //   this.selected = scheduleDateTime;
        //   console.log(scheduleDateTime);
        // }
        //this.maxDate = moment(e).add(15,'days');
    }
    ngAfterContentChecked() {
        this.cdref.detectChanges();
    }
}
EmailComposeComponent.ɵfac = function EmailComposeComponent_Factory(t) { return new (t || EmailComposeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_emailer_services_emailer_service__WEBPACK_IMPORTED_MODULE_1__.EmailerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_sms_service_service__WEBPACK_IMPORTED_MODULE_2__.SmsServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_csv_parser__WEBPACK_IMPORTED_MODULE_7__.NgxCsvParser), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService)); };
EmailComposeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmailComposeComponent, selectors: [["app-email-compose"]], decls: 120, vars: 25, consts: [["class", "alert alert-danger mt-3", 4, "ngIf"], [1, "content-page", "p-0"], [1, "container-fluid"], [1, "row"], [4, "ngFor", "ngForOf"], [1, "col-xxl-8", "col-xl-8", "col-lg-10", "col-md-10", "col-sm-12"], [1, "send_box_new", "shadow-bottom", "send_box_new2", "pt-3", "shadow-showcase"], [3, "formGroup", "ngSubmit"], [1, "col-md-4", "mb-3"], [1, "Campaign_Name", "b_left"], [1, "lab", "la-whmcs", "font-size-22"], [1, "Campaign_Name"], ["formControlName", "sender", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Sender Name", "formControlName", "sender_name", 1, ""], ["placeholder", " Enter Your Subject", "formControlName", "subject", 1, ""], [1, "col-md-8"], [1, "email_no_box_new", "mb-3"], ["id", "textarea", "name", "messagebody", "placeholder", "Recipients Mail i.e. example@gmail.com ", "cols", "50", "rows", "4", "formControlName", "recipient", 1, ""], [1, "col-md-4"], [1, "phone_book_box", "b_left"], [1, "lab", "la-telegram-plane"], [1, "phone_book"], ["type", "button", "data-toggle", "modal", "data-target", "#myModalPhone", 1, "btn", "btn_color", "btn-sm", "mt-2", "float-left", "phone_book_box_btn"], [1, "las", "la-address-book", "iq-arrow-left"], ["href", "#", "type", "button", "data-toggle", "modal", "data-target", ".Import_CSV_pop", 1, "btn", "btn_color", "btn-sm", "mt-2", "phone_book_box_btn", "float-right"], [1, "las", "la-download"], [1, "col-md-12"], [1, "email_meassage_box_new"], ["id", "demo-editor-bootstrap", "placeholder", "you can only send a template message. Choose a template from below", "cols", "50", "rows", "5", "formControlName", "body", 1, ""], [1, "col-md-4", "mt-2", "text-left"], [1, "voiceCallfile"], ["id", "uploadBtn", "type", "file", 1, "mb-2", "btn", "btn-warning", "mt-2", 3, "change"], [1, "input-group", "mb-4"], [1, "input-group-prepend"], ["id", "basic-addon4", 1, "input-group-text"], [1, "fas", "fa-clock", "font-size-20"], ["type", "text", "ngxDaterangepickerMd", "", "placeholder", "select time for schedule", 1, "form-control", "boder_non", "text-center", 3, "timePicker", "timePickerIncrement", "timePicker24Hour", "locale", "ngModel", "ngModelOptions", "singleDatePicker", "minDate", "ngModelChange", "change"], [1, "col-md-4", "text-right"], [1, "send_sms_i"], [1, "btn-group", "btn-group-toggle", "mt-2"], ["type", "submit", 1, "button", "btn", "button-icon", "bg-primary", 3, "disabled", "click"], ["id", "myModalPhone", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", 1, "modal", "fade", "come-from-modal", "right"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], [1, "modal-header", "modal-header_as"], ["id", "myModalLabel", 1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "closebtn"], ["aria-hidden", "true"], [1, "las", "la-times"], [1, "modal-body", "bg-light_as", "border-none"], [1, "mt-1", "mb-4"], ["action", "#", 1, "searchbox"], ["href", "#", 1, "search-link"], [1, "las", "la-search"], ["type", "text", "placeholder", "Search By Phonebook Name", "name", "search", "autocomplete", "off", 1, "text", "search-input", 3, "ngModel", "ngModelOptions", "ngModelChange"], [1, "recent-chat", "mt-3"], [1, "chat-list", "list-unstyled", "m-0", "px-2"], ["class", "chat-list-title row", "data-toggle-extra", "tab", "data-target-extra", "#user-content-2", 4, "ngFor", "ngForOf"], ["tabindex", "-1", "role", "dialog", "aria-hidden", "true", 1, "modal", "fade", "Import_CSV_pop"], [1, "modal-dialog"], [1, "modal-header", "mod_head_bg"], [1, "modal-title"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], [1, "modal-body", "mod_bg"], [1, "up_csv_file"], [1, "csv-file-chooser-section"], ["type", "file", "name", "File Upload", "id", "csvFileUpload", "accept", ".csv", 3, "change"], ["fileImportInput", ""], [1, "custom-file", "mb-3", "form-group"], ["id", "user-list-table", "role", "grid", "aria-describedby", "user-list-page-info", 1, "table", "table-striped", "dataTable", "mt-1"], [1, "text-center", "col-md-4"], ["type", "hidden", "value", "csv"], ["select", ""], [1, "text-center", "col-md-2"], [1, "form-group"], ["ngDefaultControl", "", 1, "form-control", "mb-3", "bg-light", "boder_non", 3, "change"], ["selected", "", "disabled", "", "value", ""], ["ngModel", "", "name", "select", 3, "value", "id", 4, "ngFor", "ngForOf"], [1, "modal-footer", "footer_mod_10"], [1, "alert", "alert-danger", "mt-3"], ["data-v-e08301e8", "", 1, "las", "la-user"], [3, "value"], ["data-toggle-extra", "tab", "data-target-extra", "#user-content-2", 1, "chat-list-title", "row"], [1, "col-md-6"], [1, "media", "justify-content-between", "chat-user-box", "rounded", "align-items-center"], [1, "chat-profile", "mr-2"], ["src", "https://templates.joomla-monster.com/joomla30/jm-news-portal/components/com_djclassifieds/assets/images/default_profile.png", "alt", "chat-user", 1, "avatar-25"], [1, "chat-status", "chat-status-warning"], [1, "ri-checkbox-blank-circle-fill"], [1, "media-body", "chat-text"], [1, "d-flex", "align-items-center", "chat-right", "phone_book_name"], ["data-dismiss", "modal", "aria-label", "Close", 3, "routerLink"], [1, "ul_list"], [1, "custom-control", "custom-checkbox", "custom-checkbox-color"], ["type", "checkbox", 1, "custom-control-input", "bg-primary", 3, "id", "value", "change"], [1, "custom-control-label", 3, "for"], [1, "mt-2", "badge_as", "border_as", "border-primary_as", "primary_new"], ["ngModel", "", "name", "select", 3, "value", "id"]], template: function EmailComposeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, EmailComposeComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, EmailComposeComponent_div_1_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, EmailComposeComponent_li_6_Template, 4, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EmailComposeComponent_Template_form_ngSubmit_9_listener() { return ctx.onSendEmail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, " Select Sender");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "select", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Select Sender");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, EmailComposeComponent_option_20_Template, 2, 2, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, " Sender Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, " Send to");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, " Phonebook ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Import CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "li", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "textarea", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "input", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EmailComposeComponent_Template_input_change_57_listener($event) { return ctx.handleFiles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "input", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EmailComposeComponent_Template_input_ngModelChange_63_listener($event) { return ctx.selected = $event; })("change", function EmailComposeComponent_Template_input_change_63_listener($event) { return ctx.updateTime($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "li", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailComposeComponent_Template_button_click_67_listener() { return ctx.setDefaultValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Send Email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "h6", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Phonebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "form", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](82, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "input", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EmailComposeComponent_Template_input_ngModelChange_83_listener($event) { return ctx.searchedKeyword_p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "ul", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, EmailComposeComponent_li_86_Template, 24, 5, "li", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](87, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "h5", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Import CSV");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "input", 68, 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EmailComposeComponent_Template_input_change_103_listener($event) { return ctx.fileChangeListener($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](105, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "table", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "td", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](110, "input", 73, 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](112, " Send To ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "td", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](115, "select", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function EmailComposeComponent_Template_select_change_115_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](111); return ctx.selectedCol($event, _r6.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "option", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](117, " select csv column for Send SMS ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, EmailComposeComponent_option_118_Template, 2, 3, "option", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](119, "div", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.resmsg == null ? null : ctx.resmsg.Status);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.err == null ? null : ctx.err.Message);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.phoneb_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.sendEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.verifyMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.final_aray1.length, " Contacts");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("timePicker", true)("timePickerIncrement", 1)("timePicker24Hour", false)("locale", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](22, _c0))("ngModel", ctx.selected)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](23, _c1))("singleDatePicker", true)("minDate", ctx.minDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isSubmitBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchedKeyword_p)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](24, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](87, 19, ctx.pb_data, ctx.searchedKeyword_p));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.first_row);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_9__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref], pipes: [ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: [".send_box_new2[_ngcontent-%COMP%] {\r\n  margin-top: 65px !important;\r\n}\r\n\r\n.fileUpload[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin: 10px;\r\n}\r\n\r\n.fileUpload[_ngcontent-%COMP%]   input.upload[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 20px;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  filter: alpha(opacity=0);\r\n}\r\n\r\n.inpu_line_box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n}\r\n\r\n.inpu_line_box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  padding: 8px;\r\n}\r\n\r\n.email_no_box_new[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n}\r\n\r\n.email_no_box_new[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #ebebeb;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n}\r\n\r\n.email_meassage_box_new[_ngcontent-%COMP%] {\r\n  background-color: #fff;\r\n}\r\n\r\n.email_meassage_box_new[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  background-color: #ebebeb;\r\n  border: none;\r\n  text-transform: capitalize;\r\n  font-weight: bold;\r\n  padding: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLWNvbXBvc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLFVBQVU7RUFDVix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLDBCQUEwQjtFQUMxQixpQkFBaUI7RUFDakIsYUFBYTtBQUNmIiwiZmlsZSI6ImVtYWlsLWNvbXBvc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZW5kX2JveF9uZXcyIHtcclxuICBtYXJnaW4tdG9wOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWxlVXBsb2FkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XHJcbn1cclxuXHJcbi5pbnB1X2xpbmVfYm94IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuLmlucHVfbGluZV9ib3ggaW5wdXQge1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLmVtYWlsX25vX2JveF9uZXcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5lbWFpbF9ub19ib3hfbmV3IHRleHRhcmVhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4uZW1haWxfbWVhc3NhZ2VfYm94X25ldyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmVtYWlsX21lYXNzYWdlX2JveF9uZXcgdGV4dGFyZWEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 762:
/*!************************************************************!*\
  !*** ./src/app/emailer/email-logs/email-logs.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Mail_logs": () => (/* binding */ Mail_logs),
/* harmony export */   "EmailLogsComponent": () => (/* binding */ EmailLogsComponent)
/* harmony export */ });
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-csv/ngx-csv */ 4551);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_emailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/emailer.service */ 9290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 5595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 9991);









function EmailLogsComponent_tr_98_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Submitted");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailLogsComponent_tr_98_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Delivered ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailLogsComponent_tr_98_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailLogsComponent_tr_98_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Sent");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailLogsComponent_tr_98_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Rejected & Blocked ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailLogsComponent_tr_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 46);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, EmailLogsComponent_tr_98_span_9_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, EmailLogsComponent_tr_98_span_10_Template, 2, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, EmailLogsComponent_tr_98_span_11_Template, 2, 0, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, EmailLogsComponent_tr_98_span_12_Template, 2, 0, "span", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, EmailLogsComponent_tr_98_span_13_Template, 2, 0, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const logs_report_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", logs_report_r3.email, " ");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", logs_report_r3.description == null ? "Update Soon" : logs_report_r3.description, " ");
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class Mail_logs {
}
class EmailLogsComponent {
    constructor(location, emailService, route, fb) {
        this.location = location;
        this.emailService = emailService;
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
        this.emailService.mailLogs(this.campaign_id).subscribe((res) => {
            this.mail_logs = res.data;
            console.log(res);
        }, (error) => {
            if (error.status == 401) {
                alert(error.statusText);
                // this.jwtService.error(error);
            }
        });
    }
    searchLogs(val) {
        console.log(val);
        val["campaign_id"] = this.campaign_id;
        this.emailService.searchMailLogs(val).subscribe((res) => {
            console.log(res);
            // if (res.status == 201) {
            //   this.mail_logs = res.data;
            // } else if (res.status == 202) {
            //   alert(res.message);
            // }
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
            recipient: "",
        });
    }
    //export logs
    exportLogs(searchvalue) {
        if (this.mail_logs.length < 2000) {
            this.generateCsv(this.mail_logs);
            // this.generateCsv("mahesh");
        }
        else {
            searchvalue["campaign_id"] = this.campaign_id;
            console.log(searchvalue);
            this.emailService.mailLogsExport(searchvalue).subscribe((res) => {
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
    generateCsv(mail_logs_val) {
        console.log(mail_logs_val);
        let i = 0;
        // let new_list = this.temp_details;
        let csvFileName = "Mail_logs" + moment__WEBPACK_IMPORTED_MODULE_1__().format("YYYYMMDDSSMMHH");
        let finalData = mail_logs_val.map(function (obj) {
            return {
                No: (i = i + 1),
                Recipient: obj.email,
                Subject: obj.subject,
                Status: obj.dlr_mask == 923
                    ? "Submitted"
                    : obj.dlr_mask == 2
                        ? "Failed"
                        : obj.dlr_mask == 1
                            ? "Delivered"
                            : obj.dlr_mask == 8
                                ? "Sent"
                                : obj.dlr_mask == 5
                                    ? "Rejected&Block"
                                    : "NOT AVAILABLE",
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
                "Recipient",
                "Subject",
                "Status",
                "SubmitDate",
                "DoneDate",
                "ErrorCode",
                "Description",
            ],
        };
        new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_0__.ngxCsv(finalData, csvFileName, options);
    }
    //resend email by status
    resendMail(dlr_mask) {
        console.log(dlr_mask);
        if (dlr_mask === "") {
            alert("Select status for Resend Message");
        }
        else {
            //resend sms form
            this.resend_mail = this.fb.group({
                campaign_id: [this.campaign_id],
                status: [dlr_mask],
            });
            this.emailService.resendMail(this.resend_mail.value).subscribe((res) => {
                console.log(res);
            }, (error) => {
                if (error.status == 401) {
                    // this.jwtService.error(error);
                }
            });
        }
    }
}
EmailLogsComponent.ɵfac = function EmailLogsComponent_Factory(t) { return new (t || EmailLogsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_emailer_service__WEBPACK_IMPORTED_MODULE_2__.EmailerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder)); };
EmailLogsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmailLogsComponent, selectors: [["app-email-logs"]], decls: 103, vars: 11, consts: [[1, "content-page"], [1, "container-fluid"], [1, "row"], [1, "col-xxl-2", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-2", "col-12"], [1, "pt-3"], [1, "las", "la-file-alt"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12"], [1, "col-xxl-5", "col-xl-5", "col-lg-5", "col-md-5", "col-sm-5", "col-12"], [1, "chat-search"], [1, "iq-search-bar", "mt-2"], ["action", "#", 1, "searchbox"], ["href", "#", 1, "search-link"], [1, "ri-search-line"], ["type", "text", "name", "search", "autocomplete", "off", "placeholder", "Search...", 1, "text", "search-input", 3, "ngModel", "ngModelChange"], [1, "col-md-5"], [1, "floating-label", "mt-2"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Message Type", 1, "form-control"], ["dlr_mask", ""], ["value", "", "disabled", "", "selected", ""], ["value", "all"], ["value", "923"], ["value", "2"], ["value", "1"], ["value", "8"], ["value", "5"], ["value", "6"], [1, "col-md-2", "mt-2"], ["type", "button", 1, "button", "btn", "btn-primary", 3, "click"], [1, "col-xxl-6", "col-xl-6", "col-lg-6", "col-md-6", "col-sm-6", "col-12", "text-right"], [3, "ngSubmit"], ["searchForm", "ngForm"], [1, "Status_div", "list-inline", "filter-list"], [1, "floating-label"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "dlr_mask", 1, "form-control"], ["ngModel", "", "name", "recipient", "placeholder", "Enter mail", "type", "email", 1, "form-control"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["target", "_blank", 1, "button", "btn", "btn-primary", 3, "click"], [1, "campaign-listing"], [1, "col-md-12", "table-layout-grid"], [1, "table-wrapper", "pricing-listing"], [1, "mt-3"], [1, "ligth"], [4, "ngFor", "ngForOf"], [1, "text-right"], [3, "pageChange"], [1, "text-left"], ["class", "status-label table-label Submitted_color", 4, "ngIf"], ["class", "status-label table-label green", 4, "ngIf"], ["class", "status-label table-label red", 4, "ngIf"], ["class", "status-label table-label Sent_color", 4, "ngIf"], ["class", "status-label table-label R_B_color", 4, "ngIf"], [1, "status-label", "table-label", "Submitted_color"], [1, "status-label", "table-label", "green"], [1, "status-label", "table-label", "red"], [1, "status-label", "table-label", "Sent_color"], [1, "status-label", "table-label", "R_B_color"]], template: function EmailLogsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Mail Logs");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EmailLogsComponent_Template_input_ngModelChange_16_listener($event) { return ctx.searchedKeyword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "select", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Select a Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailLogsComponent_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](20); return ctx.resendMail(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " Resend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "form", 29, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EmailLogsComponent_Template_form_ngSubmit_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); return ctx.searchLogs(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "select", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Select a Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Submitted");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Failed");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Delivered");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](58, "Rejected");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Block");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](62, "input", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailLogsComponent_Template_button_click_67_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); return ctx.clearFormValue(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, " Clear All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailLogsComponent_Template_button_click_70_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](42); return ctx.exportLogs(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailLogsComponent_Template_a_click_73_listener() { return ctx.location.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "table", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "tr", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87, "Submit Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](90, "Done Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, EmailLogsComponent_tr_98_Template, 16, 9, "tr", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](99, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](100, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "pagination-controls", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function EmailLogsComponent_Template_pagination_controls_pageChange_102_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.searchedKeyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](99, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](100, 5, ctx.mail_logs, ctx.searchedKeyword), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](8, _c0, ctx.count, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1sb2dzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 4176:
/*!****************************************************************!*\
  !*** ./src/app/emailer/email-report/email-report.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailReportComponent": () => (/* binding */ EmailReportComponent)
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-daterangepicker-material */ 6155);
/* harmony import */ var ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-csv/ngx-csv */ 4551);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _services_emailer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/emailer.service */ 9290);
/* harmony import */ var src_app_shared_jwt_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/jwt.service */ 668);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 5595);












function EmailReportComponent_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", list_r12.verify_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", list_r12.verify_email, " ");
} }
function EmailReportComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Recipients");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_th_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Deduction");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_th_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "DoneDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_th_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_th_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Error-Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "th");
} }
function EmailReportComponent_tr_83_td_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", report_r13.email, " ");
} }
function EmailReportComponent_tr_83_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](report_r13.total_messages);
} }
function EmailReportComponent_tr_83_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", report_r13.done_date == null ? "Update Soon" : report_r13.done_date, " ");
} }
function EmailReportComponent_tr_83_td_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", report_r13.dlr_mask == 8 ? "SENT" : report_r13.dlr_mask == 2 ? "Failed" : report_r13.dlr_mask == 923 ? "SUMBMITTED" : report_r13.dlr_mask == 1 ? "Delivered" : "Rejected & Blocked", " ");
} }
function EmailReportComponent_tr_83_td_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", report_r13.description == null ? "Update Soon" : report_r13.description, " ");
} }
function EmailReportComponent_tr_83_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " NOT Implement Yet ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function EmailReportComponent_tr_83_td_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " \u00A0\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Statistics ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/emailer/e_logs/", report_r13.campaign_id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("routerLink", "/emailer/e_statistics/", report_r13.campaign_id, "");
} }
function EmailReportComponent_tr_83_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailReportComponent_tr_83_Template_a_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const report_r13 = restoredCtx.$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](88); return ctx_r27.open(_r10, report_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "View Content");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, EmailReportComponent_tr_83_td_24_Template, 5, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, EmailReportComponent_tr_83_td_25_Template, 5, 1, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, EmailReportComponent_tr_83_td_31_Template, 5, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, EmailReportComponent_tr_83_td_32_Template, 3, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, EmailReportComponent_tr_83_td_33_Template, 5, 1, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, EmailReportComponent_tr_83_td_34_Template, 5, 0, "td", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, EmailReportComponent_tr_83_td_35_Template, 13, 2, "td", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const report_r13 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", report_r13.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", report_r13.sender_source == null ? "NA" : report_r13.sender_source, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", report_r13.sender_email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportNormal);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](report_r13.campaign_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", report_r13.submit_date, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportOnMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.showReportNormal);
} }
function EmailReportComponent_ng_template_87_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h5", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Content Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailReportComponent_ng_template_87_Template_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const modal_r29 = restoredCtx.$implicit; return modal_r29.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h5", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r11.emailContent, " ");
} }
const _c0 = function (a0, a1) { return { itemsPerPage: a0, currentPage: a1 }; };
class EmailReportComponent {
    constructor(location, emailService, jwtService, modalService) {
        this.location = location;
        this.emailService = emailService;
        this.jwtService = jwtService;
        this.modalService = modalService;
        this.selected = [
            moment__WEBPACK_IMPORTED_MODULE_0__().format("DD-MM-YYYY"),
            moment__WEBPACK_IMPORTED_MODULE_0__().format("DD-MM-YYYY"),
        ];
        //pagination
        this.p = 1;
        this.count = 10;
        this.isSubmitBtnDisabled = false;
    }
    ngOnInit() {
        this.alwaysShowCalendars = true;
        this.showReportOnMobile = false;
        this.showReportNormal = true;
        this.emailService.getMailReport().subscribe((res) => {
            this.email_report = res;
            console.log("Res", res);
        }, (error) => {
            // if (error.status == 401) {
            //   alert(error.statusText);
            // }
            // console.log(error);
            this.jwtService.error(error);
        });
        //get list of verified mail
        this.emailService.getListVerified().subscribe((res) => {
            console.log(res);
            this.verifyMail = res;
        }, (error) => {
            if (true) {
                alert(error.statusText);
            }
            if (error.status == 401) {
                alert(error.statusText);
                this.jwtService.error(error);
            }
        });
    }
    change(val) {
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_0__(val);
        // var start = ;
        // var end = ;
        // console.log(start);
        // console.log(end);
        this.selected = [
            moment__WEBPACK_IMPORTED_MODULE_0__(val.startDate._d).format("DD-MM-YYYY"),
            moment__WEBPACK_IMPORTED_MODULE_0__(val.endDate._d).format("DD-MM-YYYY"),
        ];
    }
    searchReport(val) {
        console.log(val);
        this.emailService.searchMailFilter(val).subscribe((res) => {
            console.log(res);
            if (res.status == 201) {
                if (res.data[0].email) {
                    console.log("data with email/receipents");
                    this.email_report = res.data;
                    this.showReportOnMobile = true;
                    this.showReportNormal = false;
                }
                else if (res.data.email == null) {
                    console.log("data without email normal");
                    this.email_report = res.data;
                    this.showReportOnMobile = false;
                    this.showReportNormal = true;
                }
            }
            else if (res.status == 202) {
                alert(res.status);
                console.log("no data found");
            }
        }, (error) => {
            if (error.status == 401) {
                this.jwtService.error(error);
            }
            if (true) {
                alert(error.statusText);
            }
        });
    }
    clearFormValue(searchForm) {
        console.log(searchForm);
        searchForm.reset({
            sender: "",
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
        this.emailService.mailReportExport(val).subscribe((res) => {
            this.isSubmitBtnDisabled = true;
            console.log(res);
            if (res.status == 201) {
                if (res.data.length > 0) {
                    let i = 0;
                    let csvFileName = "Email_Report" + moment__WEBPACK_IMPORTED_MODULE_0__().format("YYYYMMDDSSMMHH");
                    let finalData = res.data.map(function (obj) {
                        return {
                            No: (i = i + 1),
                            Subject: obj.subject,
                            CampaignUid: obj.campaign_id,
                            SenderName: obj.sender_source,
                            SenderEmail: obj.sender_email,
                            Recipents: obj.email,
                            TotalCredit: obj.total_messages,
                            Status: obj.dlr_mask == 923
                                ? "Submitted"
                                : obj.dlr_mask == 2
                                    ? "Failed"
                                    : obj.dlr_mask == 1
                                        ? "Delivered"
                                        : obj.dlr_mask == 8
                                            ? "Sent"
                                            : obj.dlr_mask == 5
                                                ? "Rejected&Block"
                                                : "None",
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
                            "Subject",
                            "CampaignUid",
                            "SenderName",
                            "SenderEmail",
                            "Recipents",
                            "TotalCredit",
                            "Status",
                            "SubmitDate",
                            "DoneDate",
                        ],
                    };
                    new ngx_csv_ngx_csv__WEBPACK_IMPORTED_MODULE_1__.ngxCsv(finalData, csvFileName, options);
                    this.isSubmitBtnDisabled = false;
                }
                else {
                    alert(res.message);
                }
            }
            else if (res.status == 202) {
                alert(res.message);
            }
        }, (error) => {
            this.jwtService.error(error);
        });
    }
    ////---------model part dynamic column---------
    open(content, report) {
        console.log(report);
        this.emailContent = report.email_content;
        this.modalService.open(content, { size: "lg" });
    }
}
EmailReportComponent.ɵfac = function EmailReportComponent_Factory(t) { return new (t || EmailReportComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_emailer_service__WEBPACK_IMPORTED_MODULE_2__.EmailerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_jwt_service__WEBPACK_IMPORTED_MODULE_3__.JwtService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
EmailReportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: EmailReportComponent, selectors: [["app-email-report"]], viewQuery: function EmailReportComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__.DaterangepickerDirective, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.pickerDirective = _t.first);
    } }, decls: 89, vars: 19, consts: [[1, "content-page"], [1, "container-fluid"], [3, "ngSubmit"], ["searchForm", "ngForm"], [1, "row"], [1, "col-xxl-10", "col-xl-10", "col-lg-10", "col-md-10", "col-sm-10", "col-12"], [1, "Status_div", "list-inline", "filter-list", "floating-label", "mt-2"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "sender", 1, "form-control", "form-control-sm"], ["value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "type", 1, "form-control", "form-control-sm"], ["value", "0"], ["value", "1"], ["data-toggle", "tooltip", "data-placement", "top", "data-original-title", "Select Route", "ngModel", "", "name", "size", 1, "form-control", "form-control-sm"], ["value", "less10"], ["value", "greater10"], ["value", "greater1000"], ["value", "greater10000"], ["value", "greater100000"], ["type", "text", "name", "date", "ngxDaterangepickerMd", "", "placeholder", "Choose date", 1, "form-control", "form-control-sm", 3, "ngModel", "value", "maxDate", "ngModelChange", "change"], ["ngModel", "", "name", "recipient", "placeholder", "Recipient", "type", "email", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "campaign_id", "placeholder", "Request id", "type", "text", 1, "form-control", "form-control-sm"], ["ngModel", "", "name", "sender_name", "placeholder", "Sender Name", "type", "text", 1, "form-control", "form-control-sm"], [1, "col-xxl-2", "col-xl-2", "col-lg-2", "col-md-2", "col-sm-2", "col-12"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], [1, "btn", "btn-primary", "btn-sm", 2, "color", "#fff", 3, "click"], [1, "campaign-listing", "p-0"], [1, "col-md-12", "table-layout-grid"], [1, "table-wrapper", "pricing-listing"], [1, ""], [1, "ligth"], [1, "text-centre"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "text-right"], [3, "pageChange"], ["content", ""], [3, "value"], [1, "user-name"], [1, "table-label"], [1, "text-left", "tital_span"], ["width", "30", "src", "https://theofficearea.in/user-demo/assets/my/campaign_icon.png"], [1, "col-md-12"], [1, "message_box", "mt-3"], [1, "mr-2", 3, "click"], [1, "las", "la-file-alt", "font-size-20"], ["class", "text-center col-md-4", 4, "ngIf"], [1, "for-label", "paragraph-sub"], ["class", "dropdown text-center", "width", "120", 4, "ngIf"], [1, "text-center", "col-md-4"], ["type", "button", 1, "btn", "btn-sm", "mb-1", "btn-outline-info"], [1, "badge", "badge-info", "ml-0", 2, "color", "black"], [1, "status-label", "table-label", "red"], ["width", "120", 1, "dropdown", "text-center"], ["href", "javascript:void(0)", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "action-dropdown"], ["src", "https://in.kaleyra.io/themes/rome/assets/img/more-info.svg"], [1, "dropdown-menu", "edit-menu"], [1, "dropdown-item", "sms-report-download", 3, "routerLink"], [1, "dropdown-item", 3, "routerLink"], [1, "las", "la-eye", "font-size-20"], [1, "model-content", "modal-lg"], [1, "modal-header", "mod_head_bg"], [1, "modal-title"], [1, "las", "la-stream"], ["type", "button", "aria-label", "Close", 1, "btn-close", "Template_but", 3, "click"], [1, "modal-body", "mod_bg"], [1, "col-md-6"], [2, "color", "#7d96b3"]], template: function EmailReportComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function EmailReportComponent_Template_form_ngSubmit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return ctx.searchReport(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Select Sender");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, EmailReportComponent_option_11_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Normal");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Schedule");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Campaign Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Less than 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Greater than 10");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Greater than 1K");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Greater than 10K");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Greater than 100K");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function EmailReportComponent_Template_input_ngModelChange_35_listener($event) { return ctx.selected = $event; })("change", function EmailReportComponent_Template_input_change_35_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](39, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailReportComponent_Template_button_click_48_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return ctx.clearFormValue(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " Clear ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailReportComponent_Template_button_click_51_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r32); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return ctx.exportReport(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, " Export ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function EmailReportComponent_Template_button_click_54_listener() { return ctx.location.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "table", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "tr", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "th", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Sender");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, EmailReportComponent_th_72_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](73, EmailReportComponent_th_73_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "Request");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, EmailReportComponent_th_77_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, EmailReportComponent_th_78_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, EmailReportComponent_th_79_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, EmailReportComponent_th_80_Template, 3, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, EmailReportComponent_th_81_Template, 1, 0, "th", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, EmailReportComponent_tr_83_Template, 36, 12, "tr", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](84, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "pagination-controls", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function EmailReportComponent_Template_pagination_controls_pageChange_86_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, EmailReportComponent_ng_template_87_Template, 11, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.verifyMail);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", ctx.selected);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.selected)("maxDate", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.isSubmitBtnDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportNormal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportOnMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.showReportNormal);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](84, 13, ctx.email_report, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](16, _c0, ctx.count, ctx.p)));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_8__.DaterangepickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLinkWithHref, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1yZXBvcnQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6323:
/*!************************************************************************!*\
  !*** ./src/app/emailer/email-statistics/email-statistics.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailStatisticsComponent": () => (/* binding */ EmailStatisticsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_emailer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/emailer.service */ 9290);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_jwt_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/jwt.service */ 668);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ 54);





const _c0 = ["chart"];
class EmailStatisticsComponent {
    constructor(emailService, route, jwtService) {
        this.emailService = emailService;
        this.route = route;
        this.jwtService = jwtService;
        this.campaign_id = "";
        this.graph_data = [];
        route.paramMap.subscribe((param) => {
            this.campaign_id = param.get("id");
        });
    }
    ngOnInit() {
        //get full campaign details
        this.emailService.getStatistics(this.campaign_id).subscribe((res) => {
            console.log(res);
            this.email_report = res.data[0];
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
            this.jwtService.error(error);
        });
    }
}
EmailStatisticsComponent.ɵfac = function EmailStatisticsComponent_Factory(t) { return new (t || EmailStatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_emailer_service__WEBPACK_IMPORTED_MODULE_0__.EmailerService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_jwt_service__WEBPACK_IMPORTED_MODULE_1__.JwtService)); };
EmailStatisticsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EmailStatisticsComponent, selectors: [["app-email-statistics"]], viewQuery: function EmailStatisticsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 7);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 88, vars: 20, consts: [[1, "content-page"], [1, "container-fluid"], [1, "row", "bg_whit"], [1, "col-xxl-10", "col-xl-10", "col-lg-10", "col-md-10", "col-sm-10", "col-6"], [1, "header-title", "mt-3"], [1, "card-title"], [1, "las", "la-user-check"], [1, "row", "mt-4"], [1, "col-md-5"], [1, "box_st_ashish"], [1, "blur-shadow", "p-4", "shadow-showcase", "text-center"], [1, "card"], [1, "mb-2"], ["id", "chart"], [3, "series", "chart", "labels", "responsive", "colors"], [1, "col-md-7"], [1, "blur-shadow", "shadow-showcase", "text-center"], [1, "mb-2", "pt-3"], [3, "series", "chart", "dataLabels", "plotOptions", "yaxis", "xaxis", "legend", "grid", "colors"], [1, "col-sm-3", "mt-4"], [1, "ashish_box_dr", "blur-shadow", "p-2", "m-2", "shadow-showcase", "text-center"], [1, "i_icon"], ["data-v-e08301e8", "", 1, "fas", "fa-comment-dots"], ["data-v-e08301e8", "", 1, "fas", "fa-rupee-sign"], ["data-v-e08301e8", "", 1, "fas", "fa-icons"], ["data-v-e08301e8", "", 1, "fas", "fa-address-card"], [1, "col-sm-3", "mt-2"], ["data-v-e08301e8", "", 1, "fas", "fa-sitemap"], ["data-v-e08301e8", "", 1, "fas", "fa-user-tie"], ["data-v-e08301e8", "", 1, "fas", "fa-calendar-check"], ["data-v-e08301e8", "", 1, "fas", "fa-globe"]], template: function EmailStatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Campaign Statistics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "apx-chart", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h4", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Total Campaign Report");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "apx-chart", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Sender Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](35, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Total Charge");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Not Available");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Total Credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Sender Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Extra");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, " NA");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](67, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Subject");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](75, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "Created Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](81, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](82, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](83, "i", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, "Done Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.chartOptions1.series)("chart", ctx.chartOptions1.chart)("labels", ctx.chartOptions1.labels)("responsive", ctx.chartOptions1.responsive)("colors", ctx.chartOptions1.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("yaxis", ctx.chartOptions.yaxis)("xaxis", ctx.chartOptions.xaxis)("legend", ctx.chartOptions.legend)("grid", ctx.chartOptions.grid)("colors", ctx.chartOptions.colors);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email_report == null ? null : ctx.email_report.sender_email);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.email_report == null ? null : ctx.email_report.total_messages, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email_report == null ? null : ctx.email_report.sender_source);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email_report == null ? null : ctx.email_report.subject);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.email_report == null ? null : ctx.email_report.submit_date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.email_report == null ? null : ctx.email_report.done_date) !== null ? ctx.email_report == null ? null : ctx.email_report.done_date : ctx.email_report == null ? null : ctx.email_report.submit_date, " ");
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6836:
/*!***************************************************!*\
  !*** ./src/app/emailer/emailer-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailerRoutingModule": () => (/* binding */ EmailerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./email-compose/email-compose.component */ 2572);
/* harmony import */ var _email_report_email_report_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-report/email-report.component */ 4176);
/* harmony import */ var _verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./verify-mail/verify-mail.component */ 4441);
/* harmony import */ var _email_logs_email_logs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-logs/email-logs.component */ 762);
/* harmony import */ var _email_statistics_email_statistics_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-statistics/email-statistics.component */ 6323);
/* harmony import */ var src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth.guard */ 2993);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









const routes = [
    {
        path: "e_compose",
        component: _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_0__.EmailComposeComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "e_report",
        component: _email_report_email_report_component__WEBPACK_IMPORTED_MODULE_1__.EmailReportComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "e_verify",
        component: _verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_2__.VerifyMailComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "e_logs/:id",
        component: _email_logs_email_logs_component__WEBPACK_IMPORTED_MODULE_3__.EmailLogsComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
    {
        path: "e_statistics/:id",
        component: _email_statistics_email_statistics_component__WEBPACK_IMPORTED_MODULE_4__.EmailStatisticsComponent,
        canActivate: [src_app_auth_guard__WEBPACK_IMPORTED_MODULE_5__.AuthGuard],
    },
];
class EmailerRoutingModule {
}
EmailerRoutingModule.ɵfac = function EmailerRoutingModule_Factory(t) { return new (t || EmailerRoutingModule)(); };
EmailerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: EmailerRoutingModule });
EmailerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](EmailerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 5153:
/*!*******************************************!*\
  !*** ./src/app/emailer/emailer.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailerModule": () => (/* binding */ EmailerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _emailer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./emailer-routing.module */ 6836);
/* harmony import */ var _email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-compose/email-compose.component */ 2572);
/* harmony import */ var _email_report_email_report_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-report/email-report.component */ 4176);
/* harmony import */ var _verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./verify-mail/verify-mail.component */ 4441);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-daterangepicker-material */ 6155);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 5595);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 9991);
/* harmony import */ var _email_logs_email_logs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./email-logs/email-logs.component */ 762);
/* harmony import */ var _email_statistics_email_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./email-statistics/email-statistics.component */ 6323);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng-apexcharts */ 54);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
















class EmailerModule {
}
EmailerModule.ɵfac = function EmailerModule_Factory(t) { return new (t || EmailerModule)(); };
EmailerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: EmailerModule });
EmailerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _emailer_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailerRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
            ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__.NgxDaterangepickerMd.forRoot(),
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule,
        ], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EmailerModule, { declarations: [_email_compose_email_compose_component__WEBPACK_IMPORTED_MODULE_1__.EmailComposeComponent,
        _email_report_email_report_component__WEBPACK_IMPORTED_MODULE_2__.EmailReportComponent,
        _verify_mail_verify_mail_component__WEBPACK_IMPORTED_MODULE_3__.VerifyMailComponent,
        _email_logs_email_logs_component__WEBPACK_IMPORTED_MODULE_6__.EmailLogsComponent,
        _email_statistics_email_statistics_component__WEBPACK_IMPORTED_MODULE_7__.EmailStatisticsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _emailer_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailerRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule, ngx_daterangepicker_material__WEBPACK_IMPORTED_MODULE_12__.NgxDaterangepickerMd, ng_apexcharts__WEBPACK_IMPORTED_MODULE_13__.NgApexchartsModule], exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule] }); })();


/***/ }),

/***/ 9290:
/*!*****************************************************!*\
  !*** ./src/app/emailer/services/emailer.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailerService": () => (/* binding */ EmailerService)
/* harmony export */ });
/* harmony import */ var src_app_global_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/global_constant */ 6107);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);



class EmailerService {
    constructor(http) {
        this.http = http;
        this.url = src_app_global_constant__WEBPACK_IMPORTED_MODULE_0__.GlobalConstants.url;
    }
    ////////////////----------------------send email/compose start---------------------///////////
    getListVerified() {
        return this.http.get(this.url + "getVerifiedMail");
    }
    sendEmail(data) {
        return this.http.post(this.url + "send_mail", data);
    }
    ////////////////----------------------send email/compose  end---------------------///////////
    ////////////////----------------------report start---------------------///////////
    //get voice report
    getMailReport() {
        return this.http.get(this.url + "mail_report");
    }
    //filtter or search report
    searchMailFilter(data) {
        return this.http.post(this.url + "mailfilterReport", data);
    }
    mailReportExport(data) {
        return this.http.post(this.url + "mailreportExport", data);
    }
    ////////////////----------------------report end---------------------///////////
    ////////////////----------------------logs start---------------------///////////
    mailLogs(id) {
        return this.http.get(this.url + "mail_logs/" + id);
    }
    resendMail(data) {
        return this.http.post(this.url + "resendMail", data);
    }
    searchMailLogs(data) {
        return this.http.post(this.url + "maillogsFilter", data);
    }
    mailLogsExport(data) {
        return this.http.post(this.url + "voiceLogsExport", data);
    }
    ////////////////----------------------logs end---------------------///////////
    ////////////////----------------------view start---------------------///////////
    getStatistics(id) {
        return this.http.get(this.url + "mailStatistics/" + id);
    }
    ////////////////----------------------view end---------------------///////////
    ////////////////----------------------verify email start---------------------///////////
    getReqMail() {
        return this.http.get(this.url + "verifyMailStatus");
    }
    reqVerifiedMail(data) {
        return this.http.post(this.url + "verifyMail", data);
    }
    deleteMail(id) {
        return this.http.get(this.url + "deleteMail/" + id);
    }
}
EmailerService.ɵfac = function EmailerService_Factory(t) { return new (t || EmailerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
EmailerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: EmailerService, factory: EmailerService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 4441:
/*!**************************************************************!*\
  !*** ./src/app/emailer/verify-mail/verify-mail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyMailComponent": () => (/* binding */ VerifyMailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_emailer_services_emailer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/emailer/services/emailer.service */ 9290);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function VerifyMailComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Enter Valid Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VerifyMailComponent_tr_31_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VerifyMailComponent_tr_31_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Un Verified");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function VerifyMailComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, VerifyMailComponent_tr_31_span_6_Template, 2, 0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, VerifyMailComponent_tr_31_span_7_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function VerifyMailComponent_tr_31_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const list_r2 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.deleteVerMail(list_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const list_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r3 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](list_r2.verify_email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r2.status == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", list_r2.status == 0);
} }
class VerifyMailComponent {
    constructor(fb, emailService) {
        this.fb = fb;
        this.emailService = emailService;
        this.err = null;
        this.verifyEmail = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]),
        });
    }
    //form
    get email() {
        return this.verifyEmail.get("email");
    }
    ngOnInit() {
        //get list
        this.emailService.getReqMail().subscribe((res) => {
            this.verify_email = res;
            console.log(res);
        }, (error) => {
            alert(error);
        });
    }
    verifyMail() {
        if (!this.verifyEmail.valid) {
            alert("Enter Valid Email");
        }
        else {
            this.emailService.reqVerifiedMail(this.verifyEmail.value).subscribe((res) => {
                if (true) {
                    console.log(res);
                    alert(res.message);
                    this.ngOnInit();
                }
            }, (error) => {
                if (true) {
                    alert("not valid");
                }
                if (true) {
                    alert(error.statusText);
                }
                console.log(error);
            });
        }
    }
    deleteVerMail(details) {
        this.emailService.deleteMail(details.verify_id).subscribe((res) => {
            console.log(res);
        }, (error) => {
            console.log(error);
        });
    }
}
VerifyMailComponent.ɵfac = function VerifyMailComponent_Factory(t) { return new (t || VerifyMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_emailer_services_emailer_service__WEBPACK_IMPORTED_MODULE_0__.EmailerService)); };
VerifyMailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: VerifyMailComponent, selectors: [["app-verify-mail"]], decls: 32, vars: 3, consts: [[1, "content-page", "p-0"], [1, "container-fluid"], [1, "row"], [1, "col-md-4"], [1, "mb-1", "mt-2"], [3, "formGroup", "ngSubmit"], [1, "d-flex", "align-items-center", "mb-2", "justify-content-between"], [1, "floating-label", "col-md-10", "pl-0"], ["type", "text", "placeholder", "Before Sending Email Please Verify Your Domain", "formControlName", "email", 1, "floating-input", "form-control", "boder_non"], ["style", "color: red", 4, "ngIf"], ["id", "contact-list", "data-toggle", "modal", "data-target", "#contact-list-modal", 1, "col-md-2"], ["type", "submit", 1, "btn", "mb-1", "btn-primary"], [1, "col-md-8"], [1, "table-responsive"], ["id", "user-list-table", "role", "grid", "aria-describedby", "user-list-page-info", 1, "table", "table-striped", "dataTable", "mt-1"], [1, "ligth"], [2, "min-width", "100px"], [4, "ngFor", "ngForOf"], [2, "color", "red"], [1, "text-center"], ["class", "mt-2 badge border border-primary text-primary mt-2", 4, "ngIf"], ["class", "mt-2 badge border border-danger text-danger mt-2", 4, "ngIf"], [1, "flex", "align-items-center", "list-user-action"], [1, "mt-1", "btn", "btn-sm", "btn-danger", 3, "click"], [1, "las", "la-trash-alt", "font-size-20"], [1, "mt-2", "badge", "border", "border-primary", "text-primary", "mt-2"], [1, "mt-2", "badge", "border", "border-danger", "text-danger", "mt-2"]], template: function VerifyMailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Verify Your Email / Domain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function VerifyMailComponent_Template_form_ngSubmit_6_listener() { return ctx.verifyMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, VerifyMailComponent_span_10_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Verified Emails");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "table", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tr", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Sr.No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Mail Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, VerifyMailComponent_tr_31_Template, 12, 4, "tr", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.verifyEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email && ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.verify_email);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZnktbWFpbC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_emailer_emailer_module_ts.js.map