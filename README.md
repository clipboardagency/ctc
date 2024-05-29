# CTC - Copy Anything to Clipboard

Allows you to copy anything to the clipboard.

## What is CTC?

CTC is a JavaScript library that allows you to copy anything to the clipboard.

It is a lightweight library that is easy to use and has no dependencies.

## Demo

[View Live Demo](https://clipboard.agency/ctc)

## Install

### Download

- [ctc.js](https://unpkg.com/@clipboardagency/ctc@1.0.0/dist/ctc.js) - Version 1.0.0

### CDN

Link directly to CTC files on unpkg.

```html
<script src="https://unpkg.com/@clipboardagency/ctc@1.0.0/dist/ctc.js"></script>
```

### NPM

You can also use this package with npm.

```bash
npm install @clipboardagency/ctc
or
npm i @clipboardagency/ctc
```


### Yarn

You can also use this package with yarn.

```bash
yarn add @clipboardagency/ctc
```

## Getting Started

### HTML

Include the CTC .js file in your site.

```html
<script src="/path/to/ctc.js"></script>
```

Initialize CTC by passing the element you want to copy.

```js
new CTC( 'pre' );
```


### Usage with NPM

You can also use this package with npm.

```bash
npm install @clipboardagency/ctc
```

```js
import CTC from '@clipboardagency/ctc';

new CTC( 'pre' );
```

## Options

### `new CTC( element, options )`

#### element

Type: `String`

The tag name of the element whose content you want to copy to the clipboard.

#### options

Type: `Object`

##### default

Type: `Object`

<!-- default: {
    icon: '<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>',
    class: 'ctc-js-btn',
    text: 'Copy to Clipboard',
    textClass: 'ctc-js-btn__text',
},
copied: {
    icon: '<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>',
    class: 'ctc-js-btn--copied',
    text: 'Copied',
},
timeOut: 1000,
success: (content) => { },
error: (err) => { } -->

Default options.

##### default.icon

Type: `String`

Default: `<svg aria-hidden="true" focusable="false" role="img" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg>`

The icon that will be displayed on the button.

##### default.class

Type: `String`

Default: `ctc-js-btn`

The class that will be added to the button.

##### default.text

Type: `String`

Default: `Copy to Clipboard`

The text that will be displayed on the button.

##### default.textClass

Type: `String`

Default: `ctc-js-btn__text`

The class that will be added to the text.

##### copied

Type: `Object`

Default: `<svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill="currentColor"><path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"></path></svg>`

The icon that will be displayed on the button after the content is copied.

##### copied.class

Type: `String`

Default: `ctc-js-btn--copied`

The class that will be added to the button after the content is copied.

##### copied.text

Type: `String`

Default: `Copied`

The text that will be displayed on the button after the content is copied.

#### timeOut

Type: `Number`

Default: `1000`

The time in milliseconds that the copied text will be displayed.

#### success

Type: `Function`

Default: `(content) => { }`

A function that will be called after the content is copied.

#### error

Type: `Function`

Default: `(err) => { }`

A function that will be called if there is an error copying the content.

## License

MIT © [Clipboard Agency](https://clipboard.agency)
```
