/*!
 * ctc.js v1.0.0
 * https://clipboard.agency/
 *
 * Licensed MIT © Clipboard Agency
 */
class CTC {

    /**
     * @param {string} selectors
     */
    selectors = null

    /**
     * Constructor
     *
     * @param {string} className
     * @param {string} innerHtml
     */
    constructor(selectors = '', options = {}) {
        this.selectors = selectors ? document.querySelectorAll(selectors) : [];
        if (!navigator.clipboard || !this.selectors.length) {
            return;
        }

        const defaults = {
            default: {
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
            error: (err) => { }
        }

        // Recursively merge options
        this.options = Object.assign({}, defaults, options)
        const defaultOptions = ['icon', 'class', 'text', 'textClass']
        const copiedOptions = ['icon', 'class', 'text']
        defaultOptions.forEach(option => {
            this.options.default[option] = this.options.default[option] || defaults.default[option]
        })
        copiedOptions.forEach(option => {
            this.options.copied[option] = this.options.copied[option] || defaults.copied[option]
        })
        this.options.timeOut = this.options.timeOut || defaults.timeOut
        this.options.success = this.options.success || defaults.success
        this.options.error = this.options.error || defaults.error

        this.init()
    }

    /**
     * Get copy text element
     * 
     * @param {string} text
     */
    getCopyTextElement(text) {
        return `<span class="${this.options.default.textClass}">${text || this.options.default.text}</span>`
    }

    /**
     * Get inner HTML
     *
     * @param {string} text
     */
    getInnerHtml(text = '') {
        const defaultIcon = document.createElement('span')
        defaultIcon.classList.add('ctc-js-icon--default')
        defaultIcon.innerHTML = this.options.default.icon

        const copiedIcon = document.createElement('span')
        copiedIcon.classList.add('ctc-js-icon--copied')
        copiedIcon.innerHTML = this.options.copied.icon

        this.icons = `${defaultIcon.outerHTML}${copiedIcon.outerHTML}`

        if (false === text) {
            return `${this.icons}`
        }

        return `${this.icons}${this.getCopyTextElement(text)}`
    }

    /**
     * Get elements
     *
     * @param {string} selector
     */
    getElements(selector) {
        return document.querySelectorAll(selector)
    }

    /**
     * Get HTML ID
     */
    getHtmlId() {
        const slugs = ['ctc-js']

        slugs.push( ( Math.random() + 1 ).toString( 36 ).substring( 2, 11 ) )

        return slugs.join( '-' )
    }

    /**
     * Initialize
     */
    init() {
        this.selectors.forEach(pre => {
            let content = pre.textContent.trim()

            // Create a copy button
            const btn = this.setBtn({
                content: content,
            })

            if (btn) {
                pre.parentNode.insertBefore(btn, pre.nextSibling)
            }
        })
    }

    /**
     * Set button
     *
     * @param {string} content
     */
    setBtn({ content }) {
        const btn = document.createElement('button')
        btn.classList.add('ctc-js-btn', this.options.default.class)
        btn.innerHTML = this.getInnerHtml(this.options.default.text)
        btn.id = this.getHtmlId()

        // Trim the content
        content = content.trim()

        if (!content) {
            return false
        }

        // Add click event listener to copy text
        btn.addEventListener('click', async (event) => {
            event.preventDefault()
            navigator.clipboard.writeText(content)
                .then(() => {
                    if (this.options.success) {
                        this.options.success(event)
                    }

                    btn.classList.add(this.options.copied.class)
                    if (this.options.copied.text) {
                        btn.querySelector(`.${this.options.default.textClass}`).innerText = this.options.copied.text
                    }
                    setTimeout(() => {
                        btn.classList.remove(this.options.copied.class)
                        if (this.options.copied.text) {
                            btn.querySelector(`.${this.options.default.textClass}`).innerText = this.options.default.text
                        }
                    }, this.options.timeOut)
                }, (err) => {
                    if (this.options.error) {
                        this.options.error(err)
                    }
                })
        })

        return btn
    }
}

// Set CTC as a global variable
window.CTC = CTC;

export default CTC;