# @webilix/ngx-form

Persian form / report library for Angular

**This library uses Angular 15.0.2+**

---

## Installation

```bash
# Create new Angular Application
ng new my-application

# Go to application directory
cd my-application

# Add Material support to your application
# Choose YES when you asked for setting up "browser animations for Angular Material"
ng add @angular/material

# Install @webilix/ngx-form, using NPM
npm install --save @webilix/ngx-form
```

---

## Table of contents

-   [Versions](#versions)
-   NgxFormModule
    -   [NgxFormModule Usage](#ngxformmodule-usage)
    -   [NgxFormModule Configuration](#ngxformmodule-configuration)
    -   [NgxFormModule Style](#ngxformmodule-style)
    -   [NgxFormModule Input Types](#ngxformmodule-input-types)
    -   [NgxFormModule Preview](#ngxformmodule-preview)
-   NgxFormModule (Responsive)
    -   [NgxFormModule Responsive Configuration](#ngxformmodule-responsive-configuration)
    -   [NgxFormModule Responsive Usage](#ngxformmodule-responsive-usage)
    -   [NgxFormModule Responsive Preview](#ngxformmodule-responsive-preview)
-   NgxReportModule
    -   [NgxReportModule Usage](#ngxreportmodule-usage)
    -   [NgxReportModule Configuration](#ngxreportmodule-configuration)
    -   [NgxReportModule Input Types](#ngxreportmodule-input-types)
    -   [NgxReportModule Preview](#ngxreportmodule-preview)

---

## Versions

| NgxForm  | Angular |
| -------- | ------- |
| <=2.7.3  | 15      |
| <=3.5.13 | 16      |
| <=4.1.14 | 17      |
| Current  | 18      |

---

## NgxFormModule Usage

-   **Import NgxFormModule**

```ts
/* TypeScript */
import { NgxFormModule } from '@webilix/ngx-form';

@NgModule({
   ...
   imports: [
       ...
       NgxFormModule.forRoot()

       // set module configuration
       // NgxFormModule.forRoot({ appearance: 'fill', ... }),

       // set module style
       // NgxFormModule.forRoot({ primaryColor: '#123456', ... }),

       // set module configuration and style
       // NgxFormModule.forRoot({ appearance: 'fill', ... }, { primaryColor: '#123456', ... }),
   ],
   ...
})
```

-   **Create ngxForm in component**

```ts
/* TypeScript */
import { INgxForm, NgxFormComponent } from '@webilix/ngx-form';

public ngxForm: INgxForm = {
    submit: 'نمایش مقادیر ثبت شده در فرم',
    inputs: [
        { name: 'username', type: 'USERNAME', ... }
        { name: 'password', type: 'PASSWORD', ... }
        ...
    ]
}
```

-   **Add ngxForm code to component template**

```html
<!-- HTML -->
<ngx-form [ngxForm]="ngxForm" (ngxSubmit)="showValues($event)"></ngx-form>
```

-   **Process form values**

```js
/* TypeScript */
import { INgxFormValues } from '@webilix/ngx-form';

showValues(values: INgxFormValues): void {
    // values['username']
    // values['password']
    ...
}
```

---

## NgxFormModule Configuration

```js
/**
 * NgxForm config
 */
export interface INgxFormConfig {
    /**
     * Form input appearance
     * @type { MatFormFieldAppearance }
     * @enum 'fill', 'outline'
     * @optional 'fill'
     */
    appearance: MatFormFieldAppearance;

    /**
     * Timeout to prevent double-click on form submit (in seconds)
     * @type { number }
     * @optional
     */
    submitTimeout?: number;

    /**
     * Maximum page width for mobile view in responsive forms
     * @type { Number }
     * @optional 600
     */
    mobileWidth: number;

    /**
     * Column gap width in responsive forms
     * @type { String }
     * @optional
     */
    columnGap?: string;
}
```

## NgxFormModule Style

```js
/**
 * NgxForm style
 */
export interface INgxFormStyle {
    /**
     * Farsi (Persian) font name
     * @type { string }
     * @optional 'Yekan'
     */
    faFont: string;

    /**
     * English font name
     * @type { string }
     * @optional 'Roboto, "Helvetica Neue", sans-serif'
     */
    enFont: string;

    /**
     * Material icon font name
     * @type { string }
     * @optional 'Material Icons Outlined'
     */
    iconFont: string;

    /**
     * Material icon font size
     * @type { string }
     * @optional '16px'
     */
    iconSize: string;

    /**
     * Form inputs primary color
     * @type { string }
     * @optional 'rgb(29, 91, 116)'
     */
    primaryColor: string;

    /**
     * Form inputs warn color
     * @type { string }
     * @optional 'rgb(255, 49, 27)'
     */
    warnColor: string;

    /**
     * Form inputs border color
     * @type { string }
     * @optional 'rgb(187, 206, 213)'
     */
    borderColor: string;

    /**
     * Form inputs background color
     * @type { string }
     * @optional 'rgb(232, 239, 241)'
     */
    backgroundColor: string;

    /**
     * Form inputs label color
     * @type { string }
     * @optional 'rgba(0, 0, 0, 0.6)'
     */
    labelColor: string;
}
```

---

## NgxFormModule Input Types

-   AUTO-COMPLETE
-   BANK-CARD
-   CHECKBOX
-   COLOR
-   COMMENT
-   COORDINATES
-   DATE
-   DOMAIN
-   EMAIL
-   FILE
-   GROUP
-   ICON
-   IP
-   LIST
-   MASK
-   MOBILE
-   MULTI-FILE
-   MULTI-SELECT
-   NAME
-   NATIONAL-CODE
-   NUMBER
-   NUMERIC
-   OPTION-LIST
-   PASSWORD
-   PERIOD
-   PLATE
-   PRICE
-   RANGE
-   SELECT
-   TAG
-   TEXT
-   TEXTAREA
-   TIME
-   URL
-   USERNAME

---

## NgxFormModule Preview

<div style="margin-top: 2rem; text-align: center;">

![alt text](https://github.com/webilix/ngx-form/blob/master/testing/src/assets/ngx-form.preview.png?raw=true '@webilix/ngx-form : NgxFormModule')

</div>

---

## NgxFormModule Responsive Configuration

```js
export interface INgxResponsiveFormSection {
    title?: string;
    description?: string;
    columns:
        | NgxFormInputs[]
        | [{ inputs: NgxFormInputs[], flex?: number }, { inputs: NgxFormInputs[], flex?: number }]
        | [
              { inputs: NgxFormInputs[], flex?: number },
              { inputs: NgxFormInputs[], flex?: number },
              { inputs: NgxFormInputs[], flex?: number },
          ];
}

/**
 * Responsive form data interface
 */

export interface INgxResponsiveForm extends Omit<INgxForm, 'inputs'> {
    /**
     * Form Sections
     * @type { Array<INgxResponsiveFormSection> }
     *      */
    sections: INgxResponsiveFormSection[];

    /**
     * Maximum page width for mobile view
     * @type { Number }
     * @optional 600
     */
    mobileWidth?: number;
}
```

## NgxFormModule Responsive Usage

```html
<ngx-form-responsive [ngxForm]="ngxForm" (ngxSubmit)="..." (ngxChange)="..." (viewChange)="..."></ngx-form-responsive>
```

## NgxFormModule Responsive Preview

<div style="margin-top: 2rem; text-align: center;">

![alt text](https://github.com/webilix/ngx-form/blob/master/testing/src/assets/ngx-form.responsive.png?raw=true '@webilix/ngx-form : NgxFormModule')

</div>

---

## NgxReportModule Usage

-   **Import NgxReportModule**

```ts
/* TypeScript */
import { NgxReportModule } from '@webilix/ngx-form';

@NgModule({
   ...
   imports: [
       ...
       NgxReportModule.forRoot()
   ],
   ...
})
```

-   **Create ngxInputs && ngxReport in component**

```ts
/* TypeScript */
import { INgxReport, NgxReportInputs } from '@webilix/ngx-form';

 public ngxInputs: NgxReportInputs[] = [
        { name: 'bank-card', type: 'BANK-CARD', title: 'شماره کارت بانکی' },
        { name: 'checkbox', type: 'CHECKBOX', title: 'یک انتخابی' },
        ...
 ]

 public ngxReport: INgxReport | null = null;
```

-   **Add ngxReport code to component template**

```html
<!-- HTML -->
<ngx-report [ngxInputs]="ngxInputs" [(ngxReport)]="ngxReport" (changed)="showValues($event)"></ngx-report>
```

-   **Process report**

```js
/* TypeScript */
import { INgxReport } from '@webilix/ngx-form';

showValues(report: INgxReport): void {
    // report = {
    //     join: 'AND',
    //     conditions: [
    //         {input: 'bank-card', operator: 'EQ', value: '1234567812349995'},
    //         ...
    //     ],
    // }
}
```

---

## NgxReportModule Configuration

```js
/**
 * NgxReport config
 */
export interface INgxReportStyle {
    /**
     * Farsi (Persian) font name
     * @type { string }
     * @optional 'Yekan'
     */
    faFont: string;

    /**
     * English font name
     * @type { string }
     * @optional 'Roboto, "Helvetica Neue", sans-serif'
     */
    enFont: string;

    /**
     * Font size
     * @type { string }
     * @optional '12px'
     */
    faSize: string;

    /**
     * Material icon font name
     * @type { string }
     * @optional 'Material Icons Outlined'
     */
    iconFont: string;

    /**
     * Material icon font size
     * @type { string }
     * @optional '16px'
     */
    iconSize: string;

    /**
     * Report inputs primary color
     * @type { string }
     * @optional 'rgb(29, 91, 116)'
     */
    primaryColor: string;

    /**
     * Report inputs warn color
     * @type { string }
     * @optional 'rgb(255, 49, 27)'
     */
    warnColor: string;

    /**
     * Report inputs border color
     * @type { string }
     * @optional 'rgb(187, 206, 213)'
     */
    borderColor: string;

    /**
     * Report inputs background color
     * @type { string }
     * @optional 'rgb(232, 239, 241)'
     */
    backgroundColor: string;
}
```

---

## NgxReportModule Input Types

-   BANK-CARD
-   CHECKBOX
-   DATE
-   DOMAIN
-   EMAIL
-   IP
-   MOBILE
-   MULTI-SELECT
-   NATIONAL-CODE
-   NUMBER
-   SELECT
-   TEXT
-   TEXTAREA
-   URL

---

## NgxReportModule Preview

<div style="margin-top: 2rem; text-align: center;">

![alt text](https://github.com/webilix/ngx-form/blob/master/testing/src/assets/ngx-report.preview.png?raw=true '@webilix/ngx-form : NgxReportModule')

</div>
