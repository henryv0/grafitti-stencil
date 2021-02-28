/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GButton {
        /**
          * The theme of the button.
         */
        "theme": 'primary' | 'secondary' | 'outlined' | 'naked';
    }
    interface GIcon {
    }
}
declare global {
    interface HTMLGButtonElement extends Components.GButton, HTMLStencilElement {
    }
    var HTMLGButtonElement: {
        prototype: HTMLGButtonElement;
        new (): HTMLGButtonElement;
    };
    interface HTMLGIconElement extends Components.GIcon, HTMLStencilElement {
    }
    var HTMLGIconElement: {
        prototype: HTMLGIconElement;
        new (): HTMLGIconElement;
    };
    interface HTMLElementTagNameMap {
        "g-button": HTMLGButtonElement;
        "g-icon": HTMLGIconElement;
    }
}
declare namespace LocalJSX {
    interface GButton {
        /**
          * The theme of the button.
         */
        "theme"?: 'primary' | 'secondary' | 'outlined' | 'naked';
    }
    interface GIcon {
    }
    interface IntrinsicElements {
        "g-button": GButton;
        "g-icon": GIcon;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "g-button": LocalJSX.GButton & JSXBase.HTMLAttributes<HTMLGButtonElement>;
            "g-icon": LocalJSX.GIcon & JSXBase.HTMLAttributes<HTMLGIconElement>;
        }
    }
}
