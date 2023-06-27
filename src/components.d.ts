/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface InputBase {
    }
    interface InputGroup {
    }
    interface TextInput {
    }
}
declare global {
    interface HTMLInputBaseElement extends Components.InputBase, HTMLStencilElement {
    }
    var HTMLInputBaseElement: {
        prototype: HTMLInputBaseElement;
        new (): HTMLInputBaseElement;
    };
    interface HTMLInputGroupElement extends Components.InputGroup, HTMLStencilElement {
    }
    var HTMLInputGroupElement: {
        prototype: HTMLInputGroupElement;
        new (): HTMLInputGroupElement;
    };
    interface HTMLTextInputElement extends Components.TextInput, HTMLStencilElement {
    }
    var HTMLTextInputElement: {
        prototype: HTMLTextInputElement;
        new (): HTMLTextInputElement;
    };
    interface HTMLElementTagNameMap {
        "input-base": HTMLInputBaseElement;
        "input-group": HTMLInputGroupElement;
        "text-input": HTMLTextInputElement;
    }
}
declare namespace LocalJSX {
    interface InputBase {
    }
    interface InputGroup {
    }
    interface TextInput {
    }
    interface IntrinsicElements {
        "input-base": InputBase;
        "input-group": InputGroup;
        "text-input": TextInput;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "input-base": LocalJSX.InputBase & JSXBase.HTMLAttributes<HTMLInputBaseElement>;
            "input-group": LocalJSX.InputGroup & JSXBase.HTMLAttributes<HTMLInputGroupElement>;
            "text-input": LocalJSX.TextInput & JSXBase.HTMLAttributes<HTMLTextInputElement>;
        }
    }
}