import{i as e}from"./preload-helper-G0Y2f6MP.js";import{Ei as t,L as n,R as r,Ti as i,W as a,ct as o,et as s,k as c}from"./angular-platform-CkHGXGBq.js";import{n as l,t as u}from"./public-api-ClneZIDV.js";var d,f=e((()=>{d=`<div class="lib-input-field" [class.lib-input-field--error]="isInvalid()" [class.lib-input-field--success]="isValid()">

    <div class="lib-input-field__wrapper">
        <ng-content select="[prefix]"></ng-content>

        @if (type() === 'textarea') {
        <textarea #control [id]="id" class="lib-input-field__control" [disabled]="disabled()" [readOnly]="readonly()"
            [value]="value() ?? ''" [attr.aria-label]="ariaLabel()" [attr.aria-invalid]="isInvalid()"
            (focus)="onFocus()" placeholder=" " (blur)="onBlur()" (keydown)="onKeydown($event)"
            (input)="value.set(control.value)">
      </textarea>
        } @else {
        <input #control [id]="id" [type]="type()" class="lib-input-field__control" [disabled]="disabled()"
            [readOnly]="readonly()" [value]="value() ?? ''" [attr.aria-label]="ariaLabel()" placeholder=" "
            [attr.aria-invalid]="isInvalid()" (focus)="onFocus()" (blur)="onBlur()" (keydown)="onKeydown($event)"
            (input)="value.set(control.value)" />
        }

        @if (label()) {
        <label [for]="id" class="lib-input-field__label">{{ label() }}</label>
        }

        <ng-content select="[suffix]"></ng-content>
    </div>

    @if (!noErrorMessages() && isInvalid() && firstErrorMessage()) {
    <div class="lib-input-field__message lib-input-field__message--error">
        {{ firstErrorMessage() }}
    </div>
    } @else if (hint()) {
    <div class="lib-input-field__message">
        {{ hint() }}
    </div>
    }
</div>`})),p,m,h=e((()=>{t(),f(),n(),u(),p=[`Backspace`,`Tab`,`Enter`,`Delete`,`ArrowLeft`,`ArrowRight`],m=class FormInput extends l{type=r(`text`);allowedChars=r(void 0);controlRef=a(`control`);onKeydown(e){let t=this.allowedChars();t&&(p.includes(e.key)||(typeof t==`string`?new RegExp(t):t).test(e.key)||e.preventDefault())}focus(){this.controlRef()?.nativeElement.focus()}static propDecorators={type:[{type:o,args:[{isSignal:!0,alias:`type`,required:!1,transform:void 0}]}],allowedChars:[{type:o,args:[{isSignal:!0,alias:`allowedChars`,required:!1,transform:void 0}]}],controlRef:[{type:c,args:[`control`,{isSignal:!0}]}]}},m=i([s({selector:`lib-form-input`,template:d})],m)})),g=e((()=>{h()}));export{m as n,h as r,g as t};