/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults } from "@stencil-community/router";
export namespace Components {
    interface AppCoin {
        "match": MatchResults;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
}
declare global {
    interface HTMLAppCoinElement extends Components.AppCoin, HTMLStencilElement {
    }
    var HTMLAppCoinElement: {
        prototype: HTMLAppCoinElement;
        new (): HTMLAppCoinElement;
    };
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLElementTagNameMap {
        "app-coin": HTMLAppCoinElement;
        "app-home": HTMLAppHomeElement;
        "app-root": HTMLAppRootElement;
    }
}
declare namespace LocalJSX {
    interface AppCoin {
        "match"?: MatchResults;
    }
    interface AppHome {
    }
    interface AppRoot {
    }
    interface IntrinsicElements {
        "app-coin": AppCoin;
        "app-home": AppHome;
        "app-root": AppRoot;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-coin": LocalJSX.AppCoin & JSXBase.HTMLAttributes<HTMLAppCoinElement>;
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
        }
    }
}
