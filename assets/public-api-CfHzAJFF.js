import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,G as n,Kn as r,L as i,St as a,Ti as o,W as s,et as c,k as l}from"./angular-platform-CkHGXGBq.js";import{i as u,t as d}from"./public-api-CB813VaT.js";import{n as f,t as p}from"./public-api-ClneZIDV.js";import{a as m,c as h,d as g,i as _,l as v,n as y,o as b,r as x,t as S,u as C}from"./datepicker-CSVnXJnq.js";import{n as w,o as T,s as E,t as D}from"./public-api-CpgCs3-l.js";var O,k=e((()=>{O=`<div class="lib-input-field" [class.lib-input-field--error]="isInvalid()" [class.lib-input-field--success]="isValid()">

    <div class="lib-input-field__wrapper">
        <input #control libFlexibleDateInput type="text" class="lib-input-field__control" [id]="id"
            [placeholder]="placeholder()" [disabled]="disabled()" [readOnly]="readonly()" [matDatepicker]="picker"
            [value]="value()" (focus)="onFocus()" (blur)="onBlur()" (dateParsed)="onDateChange($event)"
            (parseError)="onParseError($event)" (input)="onNativeInput($event)" (dateInput)="onDateChange($event.value)"
            (dateChange)="onDateChange($event.value)" />

        @if (label()) {
        <label [for]="id" class="lib-input-field__label">{{ label() }}</label>
        }

        <div class="lib-input-field__suffix">
            <button type="button" class="lib-button-unstyled" [disabled]="disabled()" (click)="openPicker()">
                <lib-icon name="libicon-calendrier" aria-hidden="true"></lib-icon>
            </button>
        </div>
    </div>

    @if (!noErrorMessages() && isInvalid()) {
    <div class="lib-input-field__message lib-input-field__message--error">
        {{ firstErrorMessage() }}
    </div>
    } @else if (hint()) {
    <div class="lib-input-field__message">
        {{ hint() }}
    </div>
    }
</div>

<mat-datepicker #picker (closed)="onBlur()"></mat-datepicker>`})),A,j=e((()=>{A=`lib-form-date-picker { display: block; }`})),M,N=e((()=>{t(),k(),j(),T(),i(),b(),h(),x(),p(),d(),D(),M=class Datepicker extends f{controlRef=s(`control`);picker=s.required(S);parseError=r(null);isInvalid=n(()=>this.touched()&&(this.invalid()||this.errors().length>0||this.parseError()!==null));firstErrorMessage=n(()=>{let e=this.parseError();if(e)return this.messageFor(e);let[t]=this.errors();return t?this.messageFor(t):``});onNativeInput(e){e.target.value.trim()||this.value.set(null)}onParseError(e){e===`INVALID_FORMAT`?this.parseError.set({kind:`invalidDateFormat`,message:`Format de date invalide`}):this.parseError.set(null)}messageFor(e){return e.kind===`invalidDateFormat`?`Date invalide (ex: 17/11/2026, demain, +3d)`:super.messageFor(e)}onDateChange(e){e&&this.value.set(e)}openPicker(){this.readonly()||this.disabled()||this.picker().open()}focus(){this.controlRef()?.nativeElement.focus()}static propDecorators={controlRef:[{type:l,args:[`control`,{isSignal:!0}]}],picker:[{type:l,args:[S,{isSignal:!0}]}]}},M=o([c({selector:`lib-form-datepicker`,template:O,host:{class:`lib-form-container`},encapsulation:a.None,imports:[y,u,w],providers:[{provide:g,useValue:E},{provide:v,useClass:_,deps:[g]},{provide:C,useValue:m}],styles:[A]})],M)})),P=e((()=>{N()}));export{M as n,N as r,P as t};