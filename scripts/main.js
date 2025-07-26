customElements.define(
    'my-footer',
    class extends HTMLElement {
        constructor() {
            super();
            let footer_template = document.getElementById('footer-template');
            let footer_template_content = footer_template.content;

            const shadow_root = this.attachShadow({mode: 'open'});
            shadow_root.appendChild(footer_template_content.cloneNode(true));
        }
    },
);

