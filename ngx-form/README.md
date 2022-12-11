# @webilix/ngx-form

Persian form library for Angular

**This library uses Angular 15.0.2+**

---

## Table of contents

-   [Installation](#installation)
-   [Usage](#usage)
-   [Configuration](#configuration)
-   [Input Types](#input-types)
-   [Preview](#preview)

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

## Usage

-   **Import NgxFormModule**

```ts
/* TypeScript */
import { NgxFormModule } from '@webilix/ngx-form';

@NgModule({
   ...
   imports: [
       ...
       NgxFormModule.forRoot()
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

## Configuration

```js
/**
 * NgxForm config
 */
interface INgxConfig {
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
}
```

---

## Input Types

-   AUTO-COMPLETE
-   BANK-CARD
-   CHECKBOX
-   COLOR
-   COMMENT
-   DATE
-   DOMAIN
-   EMAIL
-   FILE
-   IP
-   LIST
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
-   RANGE
-   SELECT
-   TAG
-   TEXT
-   TEXTAREA
-   URL
-   USERNAME

---

## Preview

<div style="margin-top: 2rem; text-align: center;">

![alt text](https://github.com/webilix/ngx-form/blob/master/testing/src/assets/preview.png?raw=true '@webilix/ngx-form')

</div>
