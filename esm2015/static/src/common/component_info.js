/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * A `PropertyBinding` represents a mapping between a property name
 * and an attribute name. It is parsed from a string of the form
 * `"prop: attr"`; or simply `"propAndAttr" where the property
 * and attribute have the same identifier.
 */
export class PropertyBinding {
    /**
     * @param {?} prop
     * @param {?} attr
     */
    constructor(prop, attr) {
        this.prop = prop;
        this.attr = attr;
        this.parseBinding();
    }
    /**
     * @return {?}
     */
    parseBinding() {
        this.bracketAttr = `[${this.attr}]`;
        this.parenAttr = `(${this.attr})`;
        this.bracketParenAttr = `[(${this.attr})]`;
        /** @type {?} */
        const capitalAttr = this.attr.charAt(0).toUpperCase() + this.attr.substr(1);
        this.onAttr = `on${capitalAttr}`;
        this.bindAttr = `bind${capitalAttr}`;
        this.bindonAttr = `bindon${capitalAttr}`;
    }
}
if (false) {
    /** @type {?} */
    PropertyBinding.prototype.bracketAttr;
    /** @type {?} */
    PropertyBinding.prototype.bracketParenAttr;
    /** @type {?} */
    PropertyBinding.prototype.parenAttr;
    /** @type {?} */
    PropertyBinding.prototype.onAttr;
    /** @type {?} */
    PropertyBinding.prototype.bindAttr;
    /** @type {?} */
    PropertyBinding.prototype.bindonAttr;
    /** @type {?} */
    PropertyBinding.prototype.prop;
    /** @type {?} */
    PropertyBinding.prototype.attr;
}
//# sourceMappingURL=component_info.js.map