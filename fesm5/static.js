/**
 * @license Angular v7.0.0-rc.1-1c561a833c
 * (c) 2010-2018 Google, Inc. https://angular.io/
 * License: MIT
 */
import { ApplicationRef, ChangeDetectorRef, ComponentFactoryResolver, EventEmitter, Injector, NgModule, NgZone, SimpleChange, Testability, TestabilityRegistry, Version, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵlooseIdentical } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

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
/** @typedef {?} */
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @return {?}
 */
function noNg() {
    throw new Error('AngularJS v1.x is not loaded!');
}
var ɵ0 = function () { return noNg(); };
/** @type {?} */
var noNgElement = /** @type {?} */ ((ɵ0));
noNgElement.cleanData = noNg;
/** @type {?} */
var angular = {
    bootstrap: noNg,
    module: noNg,
    element: noNgElement,
    version: /** @type {?} */ (undefined),
    resumeBootstrap: noNg,
    getTestability: noNg
};
try {
    if (window.hasOwnProperty('angular')) {
        angular = (/** @type {?} */ (window)).angular;
    }
}
catch (e) {
    // ignore in CJS mode.
}
/**
 * @deprecated Use `setAngularJSGlobal` instead.
 * @param {?} ng
 * @return {?}
 */
function setAngularLib(ng) {
    setAngularJSGlobal(ng);
}
/**
 * @deprecated Use `getAngularJSGlobal` instead.
 * @return {?}
 */
function getAngularLib() {
    return getAngularJSGlobal();
}
/**
 * Resets the AngularJS global.
 *
 * Used when AngularJS is loaded lazily, and not available on `window`.
 * @param {?} ng
 * @return {?}
 */
function setAngularJSGlobal(ng) {
    angular = ng;
    version = ng && ng.version;
}
/**
 * Returns the current AngularJS global.
 * @return {?}
 */
function getAngularJSGlobal() {
    return angular;
}
/** @type {?} */
var bootstrap = function (e, modules, config) {
    return angular.bootstrap(e, modules, config);
};
/** @type {?} */
var module$1 = function (prefix, dependencies) {
    return angular.module(prefix, dependencies);
};
/** @type {?} */
var element = /** @type {?} */ ((function (e) { return angular.element(e); }));
element.cleanData = function (nodes) { return angular.element.cleanData(nodes); };
/** @type {?} */

/** @type {?} */

/** @type {?} */
var version = angular.version;

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
/** @type {?} */
var $COMPILE = '$compile';
/** @type {?} */
var $CONTROLLER = '$controller';
/** @type {?} */
var $DELEGATE = '$delegate';
/** @type {?} */
var $HTTP_BACKEND = '$httpBackend';
/** @type {?} */
var $INJECTOR = '$injector';
/** @type {?} */
var $INTERVAL = '$interval';
/** @type {?} */
var $PARSE = '$parse';
/** @type {?} */
var $PROVIDE = '$provide';
/** @type {?} */

/** @type {?} */
var $SCOPE = '$scope';
/** @type {?} */
var $TEMPLATE_CACHE = '$templateCache';
/** @type {?} */

/** @type {?} */
var $$TESTABILITY = '$$testability';
/** @type {?} */

/** @type {?} */

/** @type {?} */
var INJECTOR_KEY = '$$angularInjector';
/** @type {?} */
var LAZY_MODULE_REF = '$$angularLazyModuleRef';
/** @type {?} */

/** @type {?} */
var REQUIRE_INJECTOR = '?^^' + INJECTOR_KEY;
/** @type {?} */
var REQUIRE_NG_MODEL = '?ngModel';
/** @type {?} */
var UPGRADE_MODULE_NAME = '$$UpgradeModule';

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
var PropertyBinding = /** @class */ (function () {
    function PropertyBinding(prop, attr) {
        this.prop = prop;
        this.attr = attr;
        this.parseBinding();
    }
    /**
     * @return {?}
     */
    PropertyBinding.prototype.parseBinding = /**
     * @return {?}
     */
    function () {
        this.bracketAttr = "[" + this.attr + "]";
        this.parenAttr = "(" + this.attr + ")";
        this.bracketParenAttr = "[(" + this.attr + ")]";
        /** @type {?} */
        var capitalAttr = this.attr.charAt(0).toUpperCase() + this.attr.substr(1);
        this.onAttr = "on" + capitalAttr;
        this.bindAttr = "bind" + capitalAttr;
        this.bindonAttr = "bindon" + capitalAttr;
    };
    return PropertyBinding;
}());

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
/** @type {?} */
var DIRECTIVE_PREFIX_REGEXP = /^(?:x|data)[:\-_]/i;
/** @type {?} */
var DIRECTIVE_SPECIAL_CHARS_REGEXP = /[:\-_]+(.)/g;
/**
 * @param {?} e
 * @return {?}
 */

/**
 * @param {?} name
 * @return {?}
 */
function controllerKey(name) {
    return '$' + name + 'Controller';
}
/**
 * @param {?} name
 * @return {?}
 */
function directiveNormalize(name) {
    return name.replace(DIRECTIVE_PREFIX_REGEXP, '')
        .replace(DIRECTIVE_SPECIAL_CHARS_REGEXP, function (_, letter) { return letter.toUpperCase(); });
}
/**
 * @param {?} component
 * @return {?}
 */
function getComponentName(component) {
    // Return the name of the component or the first line of its stringified version.
    return (/** @type {?} */ (component)).overriddenName || component.name || component.toString().split('\n')[0];
}
/**
 * @param {?} value
 * @return {?}
 */
function isFunction(value) {
    return typeof value === 'function';
}
/**
 * @record
 */

/**
 * @param {?} component
 * @return {?} Whether the passed-in component implements the subset of the
 *     `ControlValueAccessor` interface needed for AngularJS `ng-model`
 *     compatibility.
 */
function supportsNgModel(component) {
    return typeof component.writeValue === 'function' &&
        typeof component.registerOnChange === 'function';
}
/**
 * Glue the AngularJS `NgModelController` (if it exists) to the component
 * (if it implements the needed subset of the `ControlValueAccessor` interface).
 * @param {?} ngModel
 * @param {?} component
 * @return {?}
 */
function hookupNgModel(ngModel, component) {
    if (ngModel && supportsNgModel(component)) {
        ngModel.$render = function () { component.writeValue(ngModel.$viewValue); };
        component.registerOnChange(ngModel.$setViewValue.bind(ngModel));
        if (typeof component.registerOnTouched === 'function') {
            component.registerOnTouched(ngModel.$setTouched.bind(ngModel));
        }
    }
}
/**
 * Test two values for strict equality, accounting for the fact that `NaN !== NaN`.
 * @param {?} val1
 * @param {?} val2
 * @return {?}
 */
function strictEquals(val1, val2) {
    return val1 === val2 || (val1 !== val1 && val2 !== val2);
}

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
/** @type {?} */
var INITIAL_VALUE = {
    __UNINITIALIZED__: true
};
var DowngradeComponentAdapter = /** @class */ (function () {
    function DowngradeComponentAdapter(element, attrs, scope, ngModel, parentInjector, $injector, $compile, $parse, componentFactory, wrapCallback) {
        this.element = element;
        this.attrs = attrs;
        this.scope = scope;
        this.ngModel = ngModel;
        this.parentInjector = parentInjector;
        this.$injector = $injector;
        this.$compile = $compile;
        this.$parse = $parse;
        this.componentFactory = componentFactory;
        this.wrapCallback = wrapCallback;
        this.implementsOnChanges = false;
        this.inputChangeCount = 0;
        this.inputChanges = {};
        this.componentScope = scope.$new();
    }
    /**
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.compileContents = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var compiledProjectableNodes = [];
        /** @type {?} */
        var projectableNodes = this.groupProjectableNodes();
        /** @type {?} */
        var linkFns = projectableNodes.map(function (nodes) { return _this.$compile(nodes); }); /** @type {?} */
        ((this.element.empty))();
        linkFns.forEach(function (linkFn) {
            linkFn(_this.scope, function (clone) {
                compiledProjectableNodes.push(clone); /** @type {?} */
                ((_this.element.append))(clone);
            });
        });
        return compiledProjectableNodes;
    };
    /**
     * @param {?} projectableNodes
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.createComponent = /**
     * @param {?} projectableNodes
     * @return {?}
     */
    function (projectableNodes) {
        /** @type {?} */
        var providers = [{ provide: $SCOPE, useValue: this.componentScope }];
        /** @type {?} */
        var childInjector = Injector.create({ providers: providers, parent: this.parentInjector, name: 'DowngradeComponentAdapter' });
        this.componentRef =
            this.componentFactory.create(childInjector, projectableNodes, this.element[0]);
        this.viewChangeDetector = this.componentRef.injector.get(ChangeDetectorRef);
        this.changeDetector = this.componentRef.changeDetectorRef;
        this.component = this.componentRef.instance;
        /** @type {?} */
        var testability = this.componentRef.injector.get(Testability, null);
        if (testability) {
            this.componentRef.injector.get(TestabilityRegistry)
                .registerApplication(this.componentRef.location.nativeElement, testability);
        }
        hookupNgModel(this.ngModel, this.component);
    };
    /**
     * @param {?} needsNgZone
     * @param {?=} propagateDigest
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.setupInputs = /**
     * @param {?} needsNgZone
     * @param {?=} propagateDigest
     * @return {?}
     */
    function (needsNgZone, propagateDigest) {
        var _this = this;
        if (propagateDigest === void 0) { propagateDigest = true; }
        /** @type {?} */
        var attrs = this.attrs;
        /** @type {?} */
        var inputs = this.componentFactory.inputs || [];
        var _loop_1 = function (i) {
            /** @type {?} */
            var input = new PropertyBinding(inputs[i].propName, inputs[i].templateName);
            /** @type {?} */
            var expr = null;
            if (attrs.hasOwnProperty(input.attr)) {
                /** @type {?} */
                var observeFn_1 = (function (prop) {
                    /** @type {?} */
                    var prevValue = INITIAL_VALUE;
                    return function (currValue) {
                        // Initially, both `$observe()` and `$watch()` will call this function.
                        if (!strictEquals(prevValue, currValue)) {
                            if (prevValue === INITIAL_VALUE) {
                                prevValue = currValue;
                            }
                            _this.updateInput(prop, prevValue, currValue);
                            prevValue = currValue;
                        }
                    };
                })(input.prop);
                attrs.$observe(input.attr, observeFn_1);
                /** @type {?} */
                var unwatch_1 = this_1.componentScope.$watch(function () {
                    /** @type {?} */ ((unwatch_1))();
                    unwatch_1 = null;
                    observeFn_1(attrs[input.attr]);
                });
            }
            else if (attrs.hasOwnProperty(input.bindAttr)) {
                expr = attrs[input.bindAttr];
            }
            else if (attrs.hasOwnProperty(input.bracketAttr)) {
                expr = attrs[input.bracketAttr];
            }
            else if (attrs.hasOwnProperty(input.bindonAttr)) {
                expr = attrs[input.bindonAttr];
            }
            else if (attrs.hasOwnProperty(input.bracketParenAttr)) {
                expr = attrs[input.bracketParenAttr];
            }
            if (expr != null) {
                /** @type {?} */
                var watchFn = (function (prop) { return function (currValue, prevValue) {
                    return _this.updateInput(prop, prevValue, currValue);
                }; })(input.prop);
                this_1.componentScope.$watch(expr, watchFn);
            }
        };
        var this_1 = this;
        for (var i = 0; i < inputs.length; i++) {
            _loop_1(i);
        }
        /** @type {?} */
        var detectChanges = function () { return _this.changeDetector.detectChanges(); };
        /** @type {?} */
        var prototype = this.componentFactory.componentType.prototype;
        this.implementsOnChanges = !!(prototype && (/** @type {?} */ (prototype)).ngOnChanges);
        this.componentScope.$watch(function () { return _this.inputChangeCount; }, this.wrapCallback(function () {
            // Invoke `ngOnChanges()`
            if (_this.implementsOnChanges) {
                /** @type {?} */
                var inputChanges = _this.inputChanges;
                _this.inputChanges = {};
                (/** @type {?} */ (_this.component)).ngOnChanges(/** @type {?} */ ((inputChanges)));
            }
            _this.viewChangeDetector.markForCheck();
            // If opted out of propagating digests, invoke change detection when inputs change.
            if (!propagateDigest) {
                detectChanges();
            }
        }));
        // If not opted out of propagating digests, invoke change detection on every digest
        if (propagateDigest) {
            this.componentScope.$watch(this.wrapCallback(detectChanges));
        }
        // If necessary, attach the view so that it will be dirty-checked.
        // (Allow time for the initial input values to be set and `ngOnChanges()` to be called.)
        if (needsNgZone || !propagateDigest) {
            /** @type {?} */
            var unwatch_2 = this.componentScope.$watch(function () {
                /** @type {?} */ ((unwatch_2))();
                unwatch_2 = null;
                /** @type {?} */
                var appRef = _this.parentInjector.get(ApplicationRef);
                appRef.attachView(_this.componentRef.hostView);
            });
        }
    };
    /**
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.setupOutputs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var attrs = this.attrs;
        /** @type {?} */
        var outputs = this.componentFactory.outputs || [];
        for (var j = 0; j < outputs.length; j++) {
            /** @type {?} */
            var output = new PropertyBinding(outputs[j].propName, outputs[j].templateName);
            /** @type {?} */
            var bindonAttr = output.bindonAttr.substring(0, output.bindonAttr.length - 6);
            /** @type {?} */
            var bracketParenAttr = "[(" + output.bracketParenAttr.substring(2, output.bracketParenAttr.length - 8) + ")]";
            // order below is important - first update bindings then evaluate expressions
            if (attrs.hasOwnProperty(bindonAttr)) {
                this.subscribeToOutput(output, attrs[bindonAttr], true);
            }
            if (attrs.hasOwnProperty(bracketParenAttr)) {
                this.subscribeToOutput(output, attrs[bracketParenAttr], true);
            }
            if (attrs.hasOwnProperty(output.onAttr)) {
                this.subscribeToOutput(output, attrs[output.onAttr]);
            }
            if (attrs.hasOwnProperty(output.parenAttr)) {
                this.subscribeToOutput(output, attrs[output.parenAttr]);
            }
        }
    };
    /**
     * @param {?} output
     * @param {?} expr
     * @param {?=} isAssignment
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.subscribeToOutput = /**
     * @param {?} output
     * @param {?} expr
     * @param {?=} isAssignment
     * @return {?}
     */
    function (output, expr, isAssignment) {
        var _this = this;
        if (isAssignment === void 0) { isAssignment = false; }
        /** @type {?} */
        var getter = this.$parse(expr);
        /** @type {?} */
        var setter = getter.assign;
        if (isAssignment && !setter) {
            throw new Error("Expression '" + expr + "' is not assignable!");
        }
        /** @type {?} */
        var emitter = /** @type {?} */ (this.component[output.prop]);
        if (emitter) {
            emitter.subscribe({
                next: isAssignment ? function (v) { return ((setter))(_this.scope, v); } :
                    function (v) { return getter(_this.scope, { '$event': v }); }
            });
        }
        else {
            throw new Error("Missing emitter '" + output.prop + "' on component '" + getComponentName(this.componentFactory.componentType) + "'!");
        }
    };
    /**
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.registerCleanup = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var destroyComponentRef = this.wrapCallback(function () { return _this.componentRef.destroy(); });
        /** @type {?} */
        var destroyed = false; /** @type {?} */
        ((this.element.on))('$destroy', function () { return _this.componentScope.$destroy(); });
        this.componentScope.$on('$destroy', function () {
            if (!destroyed) {
                destroyed = true;
                _this.componentRef.injector.get(TestabilityRegistry)
                    .unregisterApplication(_this.componentRef.location.nativeElement);
                destroyComponentRef();
            }
        });
    };
    /**
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.getInjector = /**
     * @return {?}
     */
    function () { return this.componentRef.injector; };
    /**
     * @param {?} prop
     * @param {?} prevValue
     * @param {?} currValue
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.updateInput = /**
     * @param {?} prop
     * @param {?} prevValue
     * @param {?} currValue
     * @return {?}
     */
    function (prop, prevValue, currValue) {
        if (this.implementsOnChanges) {
            this.inputChanges[prop] = new SimpleChange(prevValue, currValue, prevValue === currValue);
        }
        this.inputChangeCount++;
        this.component[prop] = currValue;
    };
    /**
     * @return {?}
     */
    DowngradeComponentAdapter.prototype.groupProjectableNodes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var ngContentSelectors = this.componentFactory.ngContentSelectors;
        return groupNodesBySelector(ngContentSelectors, /** @type {?} */ ((this.element.contents))());
    };
    return DowngradeComponentAdapter;
}());
/**
 * Group a set of DOM nodes into `ngContent` groups, based on the given content selectors.
 * @param {?} ngContentSelectors
 * @param {?} nodes
 * @return {?}
 */
function groupNodesBySelector(ngContentSelectors, nodes) {
    /** @type {?} */
    var projectableNodes = [];
    /** @type {?} */
    var wildcardNgContentIndex;
    for (var i = 0, ii = ngContentSelectors.length; i < ii; ++i) {
        projectableNodes[i] = [];
    }
    for (var j = 0, jj = nodes.length; j < jj; ++j) {
        /** @type {?} */
        var node = nodes[j];
        /** @type {?} */
        var ngContentIndex = findMatchingNgContentIndex(node, ngContentSelectors);
        if (ngContentIndex != null) {
            projectableNodes[ngContentIndex].push(node);
        }
    }
    return projectableNodes;
}
/**
 * @param {?} element
 * @param {?} ngContentSelectors
 * @return {?}
 */
function findMatchingNgContentIndex(element, ngContentSelectors) {
    /** @type {?} */
    var ngContentIndices = [];
    /** @type {?} */
    var wildcardNgContentIndex = -1;
    for (var i = 0; i < ngContentSelectors.length; i++) {
        /** @type {?} */
        var selector = ngContentSelectors[i];
        if (selector === '*') {
            wildcardNgContentIndex = i;
        }
        else {
            if (matchesSelector(element, selector)) {
                ngContentIndices.push(i);
            }
        }
    }
    ngContentIndices.sort();
    if (wildcardNgContentIndex !== -1) {
        ngContentIndices.push(wildcardNgContentIndex);
    }
    return ngContentIndices.length ? ngContentIndices[0] : null;
}
/** @type {?} */
var _matches;
/**
 * @param {?} el
 * @param {?} selector
 * @return {?}
 */
function matchesSelector(el, selector) {
    if (!_matches) {
        /** @type {?} */
        var elProto = /** @type {?} */ (Element.prototype);
        _matches = elProto.matches || elProto.matchesSelector || elProto.mozMatchesSelector ||
            elProto.msMatchesSelector || elProto.oMatchesSelector || elProto.webkitMatchesSelector;
    }
    return el.nodeType === Node.ELEMENT_NODE ? _matches.call(el, selector) : false;
}

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
 * \@description
 *
 * A helper function that allows an Angular component to be used from AngularJS.
 *
 * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
 * library for hybrid upgrade apps that support AoT compilation*
 *
 * This helper function returns a factory function to be used for registering
 * an AngularJS wrapper directive for "downgrading" an Angular component.
 *
 * \@usageNotes
 * ### Examples
 *
 * Let's assume that you have an Angular component called `ng2Heroes` that needs
 * to be made available in AngularJS templates.
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng2-heroes"}
 *
 * We must create an AngularJS [directive](https://docs.angularjs.org/guide/directive)
 * that will make this Angular component available inside AngularJS templates.
 * The `downgradeComponent()` function returns a factory function that we
 * can use to define the AngularJS directive that wraps the "downgraded" component.
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng2-heroes-wrapper"}
 *
 * \@experimental
 * @param {?} info contains information about the Component that is being downgraded:
 *
 * * `component: Type<any>`: The type of the Component that will be downgraded
 * * `propagateDigest?: boolean`: Whether to perform {\@link ChangeDetectorRef#detectChanges
 *   change detection} on the component on every
 *   [$digest](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest). If set to `false`,
 *   change detection will still be performed when any of the component's inputs changes.
 *   (Default: true)
 *
 * @return {?} a factory function that can be used to register the component in an
 * AngularJS module.
 *
 */
function downgradeComponent(info) {
    /** @type {?} */
    var directiveFactory = function ($compile, $injector, $parse) {
        /** @type {?} */
        var needsNgZone = false;
        /** @type {?} */
        var wrapCallback = function (cb) { return cb; };
        /** @type {?} */
        var ngZone;
        return {
            restrict: 'E',
            terminal: true,
            require: [REQUIRE_INJECTOR, REQUIRE_NG_MODEL],
            link: function (scope, element, attrs, required) {
                /** @type {?} */
                var ngModel = required[1];
                /** @type {?} */
                var parentInjector = required[0];
                /** @type {?} */
                var ranAsync = false;
                if (!parentInjector) {
                    /** @type {?} */
                    var lazyModuleRef = /** @type {?} */ ($injector.get(LAZY_MODULE_REF));
                    needsNgZone = lazyModuleRef.needsNgZone;
                    parentInjector = lazyModuleRef.injector || /** @type {?} */ (lazyModuleRef.promise);
                }
                /** @type {?} */
                var doDowngrade = function (injector) {
                    /** @type {?} */
                    var componentFactoryResolver = injector.get(ComponentFactoryResolver);
                    /** @type {?} */
                    var componentFactory = /** @type {?} */ ((componentFactoryResolver.resolveComponentFactory(info.component)));
                    if (!componentFactory) {
                        throw new Error('Expecting ComponentFactory for: ' + getComponentName(info.component));
                    }
                    /** @type {?} */
                    var injectorPromise = new ParentInjectorPromise(element);
                    /** @type {?} */
                    var facade = new DowngradeComponentAdapter(element, attrs, scope, ngModel, injector, $injector, $compile, $parse, componentFactory, wrapCallback);
                    /** @type {?} */
                    var projectableNodes = facade.compileContents();
                    facade.createComponent(projectableNodes);
                    facade.setupInputs(needsNgZone, info.propagateDigest);
                    facade.setupOutputs();
                    facade.registerCleanup();
                    injectorPromise.resolve(facade.getInjector());
                    if (ranAsync) {
                        // If this is run async, it is possible that it is not run inside a
                        // digest and initial input values will not be detected.
                        scope.$evalAsync(function () { });
                    }
                };
                /** @type {?} */
                var downgradeFn = !needsNgZone ? doDowngrade : function (injector) {
                    if (!ngZone) {
                        ngZone = injector.get(NgZone);
                        wrapCallback = function (cb) { return function () {
                            return NgZone.isInAngularZone() ? cb() : ngZone.run(cb);
                        }; };
                    }
                    wrapCallback(function () { return doDowngrade(injector); })();
                };
                if (isThenable(parentInjector)) {
                    parentInjector.then(downgradeFn);
                }
                else {
                    downgradeFn(parentInjector);
                }
                ranAsync = true;
            }
        };
    };
    // bracket-notation because of closure - see #14441
    directiveFactory['$inject'] = [$COMPILE, $INJECTOR, $PARSE];
    return directiveFactory;
}
/**
 * Synchronous promise-like object to wrap parent injectors,
 * to preserve the synchronous nature of Angular 1's $compile.
 */
var ParentInjectorPromise = /** @class */ (function () {
    function ParentInjectorPromise(element) {
        this.element = element;
        this.injectorKey = controllerKey(INJECTOR_KEY);
        this.callbacks = [];
        /** @type {?} */ ((
        // Store the promise on the element.
        element.data))(this.injectorKey, this);
    }
    /**
     * @param {?} callback
     * @return {?}
     */
    ParentInjectorPromise.prototype.then = /**
     * @param {?} callback
     * @return {?}
     */
    function (callback) {
        if (this.injector) {
            callback(this.injector);
        }
        else {
            this.callbacks.push(callback);
        }
    };
    /**
     * @param {?} injector
     * @return {?}
     */
    ParentInjectorPromise.prototype.resolve = /**
     * @param {?} injector
     * @return {?}
     */
    function (injector) {
        this.injector = injector; /** @type {?} */
        ((
        // Store the real injector on the element.
        this.element.data))(this.injectorKey, injector);
        // Release the element to prevent memory leaks.
        this.element = /** @type {?} */ ((null));
        // Run the queued callbacks.
        this.callbacks.forEach(function (callback) { return callback(injector); });
        this.callbacks.length = 0;
    };
    return ParentInjectorPromise;
}());
/**
 * @template T
 * @param {?} obj
 * @return {?}
 */
function isThenable(obj) {
    return isFunction((/** @type {?} */ (obj)).then);
}

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
 * \@description
 *
 * A helper function to allow an Angular service to be accessible from AngularJS.
 *
 * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
 * library for hybrid upgrade apps that support AoT compilation*
 *
 * This helper function returns a factory function that provides access to the Angular
 * service identified by the `token` parameter.
 *
 * \@usageNotes
 * ### Examples
 *
 * First ensure that the service to be downgraded is provided in an `NgModule`
 * that will be part of the upgrade application. For example, let's assume we have
 * defined `HeroesService`
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng2-heroes-service"}
 *
 * and that we have included this in our upgrade app `NgModule`
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng2-module"}
 *
 * Now we can register the `downgradeInjectable` factory function for the service
 * on an AngularJS module.
 *
 * {\@example upgrade/static/ts/full/module.ts region="downgrade-ng2-heroes-service"}
 *
 * Inside an AngularJS component's controller we can get hold of the
 * downgraded service via the name we gave when downgrading.
 *
 * {\@example upgrade/static/ts/full/module.ts region="example-app"}
 *
 * \@experimental
 * @param {?} token an `InjectionToken` that identifies a service provided from Angular.
 *
 * @return {?} a [factory function](https://docs.angularjs.org/guide/di) that can be
 * used to register the service on an AngularJS module.
 *
 */
function downgradeInjectable(token) {
    /** @type {?} */
    var factory = function (i) { return i.get(token); };
    (/** @type {?} */ (factory))['$inject'] = [INJECTOR_KEY];
    return factory;
}

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
/** @type {?} */
var VERSION = new Version('7.0.0-rc.1-1c561a833c');

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
/** @type {?} */
var tempInjectorRef;
/**
 * @param {?} injector
 * @return {?}
 */
function setTempInjectorRef(injector) {
    tempInjectorRef = injector;
}
/**
 * @return {?}
 */
function injectorFactory() {
    if (!tempInjectorRef) {
        throw new Error('Trying to get the AngularJS injector before it being set.');
    }
    /** @type {?} */
    var injector = tempInjectorRef;
    tempInjectorRef = null; // clear the value to prevent memory leaks
    return injector;
}
/**
 * @param {?} i
 * @return {?}
 */
function rootScopeFactory(i) {
    return i.get('$rootScope');
}
/**
 * @param {?} i
 * @return {?}
 */
function compileFactory(i) {
    return i.get('$compile');
}
/**
 * @param {?} i
 * @return {?}
 */
function parseFactory(i) {
    return i.get('$parse');
}
/** @type {?} */
var angular1Providers = [
    // We must use exported named functions for the ng2 factories to keep the compiler happy:
    // > Metadata collected contains an error that will be reported at runtime:
    // >   Function calls are not supported.
    // >   Consider replacing the function or lambda with a reference to an exported function
    { provide: '$injector', useFactory: injectorFactory, deps: [] },
    { provide: '$rootScope', useFactory: rootScopeFactory, deps: ['$injector'] },
    { provide: '$compile', useFactory: compileFactory, deps: ['$injector'] },
    { provide: '$parse', useFactory: parseFactory, deps: ['$injector'] }
];

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
var NgAdapterInjector = /** @class */ (function () {
    function NgAdapterInjector(modInjector) {
        this.modInjector = modInjector;
    }
    // When Angular locate a service in the component injector tree, the not found value is set to
    // `NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR`. In such a case we should not walk up to the module
    // injector.
    // AngularJS only supports a single tree and should always check the module injector.
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    NgAdapterInjector.prototype.get = /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    function (token, notFoundValue) {
        if (notFoundValue === ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
            return notFoundValue;
        }
        return this.modInjector.get(token, notFoundValue);
    };
    return NgAdapterInjector;
}());

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
 * \@description
 *
 * A helper function for creating an AngularJS module that can bootstrap an Angular module
 * "on-demand" (possibly lazily) when a {\@link downgradeComponent downgraded component} needs to be
 * instantiated.
 *
 * *Part of the [upgrade/static](api?query=upgrade/static) library for hybrid upgrade apps that
 * support AoT compilation.*
 *
 * It allows loading/bootstrapping the Angular part of a hybrid application lazily and not having to
 * pay the cost up-front. For example, you can have an AngularJS application that uses Angular for
 * specific routes and only instantiate the Angular modules if/when the user visits one of these
 * routes.
 *
 * The Angular module will be bootstrapped once (when requested for the first time) and the same
 * reference will be used from that point onwards.
 *
 * `downgradeModule()` requires either an `NgModuleFactory` or a function:
 * - `NgModuleFactory`: If you pass an `NgModuleFactory`, it will be used to instantiate a module
 *   using `platformBrowser`'s {\@link PlatformRef#bootstrapModuleFactory bootstrapModuleFactory()}.
 * - `Function`: If you pass a function, it is expected to return a promise resolving to an
 *   `NgModuleRef`. The function is called with an array of extra {\@link StaticProvider Providers}
 *   that are expected to be available from the returned `NgModuleRef`'s `Injector`.
 *
 * `downgradeModule()` returns the name of the created AngularJS wrapper module. You can use it to
 * declare a dependency in your main AngularJS module.
 *
 * {\@example upgrade/static/ts/lite/module.ts region="basic-how-to"}
 *
 * For more details on how to use `downgradeModule()` see
 * [Upgrading for Performance](guide/upgrade-performance).
 *
 * \@usageNotes
 *
 * Apart from `UpgradeModule`, you can use the rest of the `upgrade/static` helpers as usual to
 * build a hybrid application. Note that the Angular pieces (e.g. downgraded services) will not be
 * available until the downgraded module has been bootstrapped, i.e. by instantiating a downgraded
 * component.
 *
 * <div class="alert is-important">
 *
 *   You cannot use `downgradeModule()` and `UpgradeModule` in the same hybrid application.<br />
 *   Use one or the other.
 *
 * </div>
 *
 * ### Differences with `UpgradeModule`
 *
 * Besides their different API, there are two important internal differences between
 * `downgradeModule()` and `UpgradeModule` that affect the behavior of hybrid applications:
 *
 * 1. Unlike `UpgradeModule`, `downgradeModule()` does not bootstrap the main AngularJS module
 *    inside the {\@link NgZone Angular zone}.
 * 2. Unlike `UpgradeModule`, `downgradeModule()` does not automatically run a
 *    [$digest()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest) when changes are
 *    detected in the Angular part of the application.
 *
 * What this means is that applications using `UpgradeModule` will run change detection more
 * frequently in order to ensure that both frameworks are properly notified about possible changes.
 * This will inevitably result in more change detection runs than necessary.
 *
 * `downgradeModule()`, on the other side, does not try to tie the two change detection systems as
 * tightly, restricting the explicit change detection runs only to cases where it knows it is
 * necessary (e.g. when the inputs of a downgraded component change). This improves performance,
 * especially in change-detection-heavy applications, but leaves it up to the developer to manually
 * notify each framework as needed.
 *
 * For a more detailed discussion of the differences and their implications, see
 * [Upgrading for Performance](guide/upgrade-performance).
 *
 * <div class="alert is-helpful">
 *
 *   You can manually trigger a change detection run in AngularJS using
 *   [scope.$apply(...)](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$apply) or
 *   [$rootScope.$digest()](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$digest).
 *
 *   You can manually trigger a change detection run in Angular using {\@link NgZone#run
 *   ngZone.run(...)}.
 *
 * </div>
 *
 * \@experimental
 * @template T
 * @param {?} moduleFactoryOrBootstrapFn
 * @return {?}
 */
function downgradeModule(moduleFactoryOrBootstrapFn) {
    /** @type {?} */
    var LAZY_MODULE_NAME = UPGRADE_MODULE_NAME + '.lazy';
    /** @type {?} */
    var bootstrapFn = isFunction(moduleFactoryOrBootstrapFn) ?
        moduleFactoryOrBootstrapFn :
        function (extraProviders) {
            return platformBrowser(extraProviders).bootstrapModuleFactory(moduleFactoryOrBootstrapFn);
        };
    /** @type {?} */
    var injector;
    // Create an ng1 module to bootstrap.
    module$1(LAZY_MODULE_NAME, [])
        .factory(INJECTOR_KEY, function () {
        if (!injector) {
            throw new Error('Trying to get the Angular injector before bootstrapping an Angular module.');
        }
        return injector;
    })
        .factory(LAZY_MODULE_REF, [
        $INJECTOR,
        function ($injector) {
            setTempInjectorRef($injector);
            /** @type {?} */
            var result = {
                needsNgZone: true,
                promise: bootstrapFn(angular1Providers).then(function (ref) {
                    injector = result.injector = new NgAdapterInjector(ref.injector);
                    injector.get($INJECTOR);
                    return injector;
                })
            };
            return result;
        }
    ]);
    return LAZY_MODULE_NAME;
}

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
/** @type {?} */
var REQUIRE_PREFIX_RE = /^(\^\^?)?(\?)?(\^\^?)?/;
/**
 * @record
 */

/**
 * @record
 */

var UpgradeHelper = /** @class */ (function () {
    function UpgradeHelper(injector, name, elementRef, directive) {
        this.injector = injector;
        this.name = name;
        this.$injector = injector.get($INJECTOR);
        this.$compile = this.$injector.get($COMPILE);
        this.$controller = this.$injector.get($CONTROLLER);
        this.element = elementRef.nativeElement;
        this.$element = element(this.element);
        this.directive = directive || UpgradeHelper.getDirective(this.$injector, name);
    }
    /**
     * @param {?} $injector
     * @param {?} name
     * @return {?}
     */
    UpgradeHelper.getDirective = /**
     * @param {?} $injector
     * @param {?} name
     * @return {?}
     */
    function ($injector, name) {
        /** @type {?} */
        var directives = $injector.get(name + 'Directive');
        if (directives.length > 1) {
            throw new Error("Only support single directive definition for: " + name);
        }
        /** @type {?} */
        var directive = directives[0];
        // AngularJS will transform `link: xyz` to `compile: () => xyz`. So we can only tell there was a
        // user-defined `compile` if there is no `link`. In other cases, we will just ignore `compile`.
        if (directive.compile && !directive.link)
            notSupported(name, 'compile');
        if (directive.replace)
            notSupported(name, 'replace');
        if (directive.terminal)
            notSupported(name, 'terminal');
        return directive;
    };
    /**
     * @param {?} $injector
     * @param {?} directive
     * @param {?=} fetchRemoteTemplate
     * @return {?}
     */
    UpgradeHelper.getTemplate = /**
     * @param {?} $injector
     * @param {?} directive
     * @param {?=} fetchRemoteTemplate
     * @return {?}
     */
    function ($injector, directive, fetchRemoteTemplate) {
        if (fetchRemoteTemplate === void 0) { fetchRemoteTemplate = false; }
        if (directive.template !== undefined) {
            return getOrCall(directive.template);
        }
        else if (directive.templateUrl) {
            /** @type {?} */
            var $templateCache_1 = /** @type {?} */ ($injector.get($TEMPLATE_CACHE));
            /** @type {?} */
            var url_1 = getOrCall(directive.templateUrl);
            /** @type {?} */
            var template = $templateCache_1.get(url_1);
            if (template !== undefined) {
                return template;
            }
            else if (!fetchRemoteTemplate) {
                throw new Error('loading directive templates asynchronously is not supported');
            }
            return new Promise(function (resolve, reject) {
                /** @type {?} */
                var $httpBackend = /** @type {?} */ ($injector.get($HTTP_BACKEND));
                $httpBackend('GET', url_1, null, function (status, response) {
                    if (status === 200) {
                        resolve($templateCache_1.put(url_1, response));
                    }
                    else {
                        reject("GET component template from '" + url_1 + "' returned '" + status + ": " + response + "'");
                    }
                });
            });
        }
        else {
            throw new Error("Directive '" + directive.name + "' is not a component, it is missing template.");
        }
    };
    /**
     * @param {?} controllerType
     * @param {?} $scope
     * @return {?}
     */
    UpgradeHelper.prototype.buildController = /**
     * @param {?} controllerType
     * @param {?} $scope
     * @return {?}
     */
    function (controllerType, $scope) {
        /** @type {?} */
        var locals = { '$scope': $scope, '$element': this.$element };
        /** @type {?} */
        var controller = this.$controller(controllerType, locals, null, this.directive.controllerAs); /** @type {?} */
        ((this.$element.data))(controllerKey(/** @type {?} */ ((this.directive.name))), controller);
        return controller;
    };
    /**
     * @param {?=} template
     * @return {?}
     */
    UpgradeHelper.prototype.compileTemplate = /**
     * @param {?=} template
     * @return {?}
     */
    function (template) {
        if (template === undefined) {
            template = /** @type {?} */ (UpgradeHelper.getTemplate(this.$injector, this.directive));
        }
        return this.compileHtml(template);
    };
    /**
     * @param {?} $scope
     * @param {?=} controllerInstance
     * @return {?}
     */
    UpgradeHelper.prototype.onDestroy = /**
     * @param {?} $scope
     * @param {?=} controllerInstance
     * @return {?}
     */
    function ($scope, controllerInstance) {
        if (controllerInstance && isFunction(controllerInstance.$onDestroy)) {
            controllerInstance.$onDestroy();
        }
        $scope.$destroy();
        // Clean the jQuery/jqLite data on the component+child elements.
        // Equivelent to how jQuery/jqLite invoke `cleanData` on an Element (this.element)
        //  https://github.com/jquery/jquery/blob/e743cbd28553267f955f71ea7248377915613fd9/src/manipulation.js#L223
        //  https://github.com/angular/angular.js/blob/26ddc5f830f902a3d22f4b2aab70d86d4d688c82/src/jqLite.js#L306-L312
        // `cleanData` will invoke the AngularJS `$destroy` DOM event
        //  https://github.com/angular/angular.js/blob/26ddc5f830f902a3d22f4b2aab70d86d4d688c82/src/Angular.js#L1911-L1924
        element.cleanData([this.element]);
        element.cleanData(this.element.querySelectorAll('*'));
    };
    /**
     * @return {?}
     */
    UpgradeHelper.prototype.prepareTransclusion = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var transclude = this.directive.transclude;
        /** @type {?} */
        var contentChildNodes = this.extractChildNodes();
        /** @type {?} */
        var attachChildrenFn = function (scope, cloneAttachFn) {
            // Since AngularJS v1.5.8, `cloneAttachFn` will try to destroy the transclusion scope if
            // `$template` is empty. Since the transcluded content comes from Angular, not AngularJS,
            // there will be no transclusion scope here.
            // Provide a dummy `scope.$destroy()` method to prevent `cloneAttachFn` from throwing.
            scope = scope || { $destroy: function () { return undefined; } };
            return /** @type {?} */ ((cloneAttachFn))($template, scope);
        };
        /** @type {?} */
        var $template = contentChildNodes;
        if (transclude) {
            /** @type {?} */
            var slots_1 = Object.create(null);
            if (typeof transclude === 'object') {
                $template = [];
                /** @type {?} */
                var slotMap_1 = Object.create(null);
                /** @type {?} */
                var filledSlots_1 = Object.create(null);
                // Parse the element selectors.
                Object.keys(transclude).forEach(function (slotName) {
                    /** @type {?} */
                    var selector = transclude[slotName];
                    /** @type {?} */
                    var optional = selector.charAt(0) === '?';
                    selector = optional ? selector.substring(1) : selector;
                    slotMap_1[selector] = slotName;
                    slots_1[slotName] = null; // `null`: Defined but not yet filled.
                    filledSlots_1[slotName] = optional; // Consider optional slots as filled.
                });
                // Add the matching elements into their slot.
                contentChildNodes.forEach(function (node) {
                    /** @type {?} */
                    var slotName = slotMap_1[directiveNormalize(node.nodeName.toLowerCase())];
                    if (slotName) {
                        filledSlots_1[slotName] = true;
                        slots_1[slotName] = slots_1[slotName] || [];
                        slots_1[slotName].push(node);
                    }
                    else {
                        $template.push(node);
                    }
                });
                // Check for required slots that were not filled.
                Object.keys(filledSlots_1).forEach(function (slotName) {
                    if (!filledSlots_1[slotName]) {
                        throw new Error("Required transclusion slot '" + slotName + "' on directive: " + _this.name);
                    }
                });
                Object.keys(slots_1).filter(function (slotName) { return slots_1[slotName]; }).forEach(function (slotName) {
                    /** @type {?} */
                    var nodes = slots_1[slotName];
                    slots_1[slotName] = function (scope, cloneAttach) { return ((cloneAttach))(nodes, scope); };
                });
            }
            // Attach `$$slots` to default slot transclude fn.
            attachChildrenFn.$$slots = slots_1;
            // AngularJS v1.6+ ignores empty or whitespace-only transcluded text nodes. But Angular
            // removes all text content after the first interpolation and updates it later, after
            // evaluating the expressions. This would result in AngularJS failing to recognize text
            // nodes that start with an interpolation as transcluded content and use the fallback
            // content instead.
            // To avoid this issue, we add a
            // [zero-width non-joiner character](https://en.wikipedia.org/wiki/Zero-width_non-joiner)
            // to empty text nodes (which can only be a result of Angular removing their initial content).
            // NOTE: Transcluded text content that starts with whitespace followed by an interpolation
            //       will still fail to be detected by AngularJS v1.6+
            $template.forEach(function (node) {
                if (node.nodeType === Node.TEXT_NODE && !node.nodeValue) {
                    node.nodeValue = '\u200C';
                }
            });
        }
        return attachChildrenFn;
    };
    /**
     * @param {?} controllerInstance
     * @return {?}
     */
    UpgradeHelper.prototype.resolveAndBindRequiredControllers = /**
     * @param {?} controllerInstance
     * @return {?}
     */
    function (controllerInstance) {
        /** @type {?} */
        var directiveRequire = this.getDirectiveRequire();
        /** @type {?} */
        var requiredControllers = this.resolveRequire(directiveRequire);
        if (controllerInstance && this.directive.bindToController && isMap(directiveRequire)) {
            /** @type {?} */
            var requiredControllersMap_1 = /** @type {?} */ (requiredControllers);
            Object.keys(requiredControllersMap_1).forEach(function (key) {
                controllerInstance[key] = requiredControllersMap_1[key];
            });
        }
        return requiredControllers;
    };
    /**
     * @param {?} html
     * @return {?}
     */
    UpgradeHelper.prototype.compileHtml = /**
     * @param {?} html
     * @return {?}
     */
    function (html) {
        this.element.innerHTML = html;
        return this.$compile(this.element.childNodes);
    };
    /**
     * @return {?}
     */
    UpgradeHelper.prototype.extractChildNodes = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var childNodes = [];
        /** @type {?} */
        var childNode;
        while (childNode = this.element.firstChild) {
            this.element.removeChild(childNode);
            childNodes.push(childNode);
        }
        return childNodes;
    };
    /**
     * @return {?}
     */
    UpgradeHelper.prototype.getDirectiveRequire = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var require = this.directive.require || /** @type {?} */ (((this.directive.controller && this.directive.name)));
        if (isMap(require)) {
            Object.keys(require).forEach(function (key) {
                /** @type {?} */
                var value = require[key];
                /** @type {?} */
                var match = /** @type {?} */ ((value.match(REQUIRE_PREFIX_RE)));
                /** @type {?} */
                var name = value.substring(match[0].length);
                if (!name) {
                    require[key] = match[0] + key;
                }
            });
        }
        return require;
    };
    /**
     * @param {?} require
     * @param {?=} controllerInstance
     * @return {?}
     */
    UpgradeHelper.prototype.resolveRequire = /**
     * @param {?} require
     * @param {?=} controllerInstance
     * @return {?}
     */
    function (require, controllerInstance) {
        var _this = this;
        if (!require) {
            return null;
        }
        else if (Array.isArray(require)) {
            return require.map(function (req) { return _this.resolveRequire(req); });
        }
        else if (typeof require === 'object') {
            /** @type {?} */
            var value_1 = {};
            Object.keys(require).forEach(function (key) { return value_1[key] = /** @type {?} */ ((_this.resolveRequire(require[key]))); });
            return value_1;
        }
        else if (typeof require === 'string') {
            /** @type {?} */
            var match = /** @type {?} */ ((require.match(REQUIRE_PREFIX_RE)));
            /** @type {?} */
            var inheritType = match[1] || match[3];
            /** @type {?} */
            var name_1 = require.substring(match[0].length);
            /** @type {?} */
            var isOptional = !!match[2];
            /** @type {?} */
            var searchParents = !!inheritType;
            /** @type {?} */
            var startOnParent = inheritType === '^^';
            /** @type {?} */
            var ctrlKey = controllerKey(name_1);
            /** @type {?} */
            var elem = startOnParent ? /** @type {?} */ ((this.$element.parent))() : this.$element;
            /** @type {?} */
            var value = searchParents ? /** @type {?} */ ((elem.inheritedData))(ctrlKey) : /** @type {?} */ ((elem.data))(ctrlKey);
            if (!value && !isOptional) {
                throw new Error("Unable to find required '" + require + "' in upgraded directive '" + this.name + "'.");
            }
            return value;
        }
        else {
            throw new Error("Unrecognized 'require' syntax on upgraded directive '" + this.name + "': " + require);
        }
    };
    return UpgradeHelper;
}());
/**
 * @template T
 * @param {?} property
 * @return {?}
 */
function getOrCall(property) {
    return isFunction(property) ? property() : property;
}
/**
 * @template T
 * @param {?} value
 * @return {?}
 */
function isMap(value) {
    return value && !Array.isArray(value) && typeof value === 'object';
}
/**
 * @param {?} name
 * @param {?} feature
 * @return {?}
 */
function notSupported(name, feature) {
    throw new Error("Upgraded directive '" + name + "' contains unsupported feature: '" + feature + "'.");
}

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
/** @type {?} */
var NOT_SUPPORTED = 'NOT_SUPPORTED';
/** @type {?} */
var INITIAL_VALUE$1 = {
    __UNINITIALIZED__: true
};
var Bindings = /** @class */ (function () {
    function Bindings() {
        this.twoWayBoundProperties = [];
        this.twoWayBoundLastValues = [];
        this.expressionBoundProperties = [];
        this.propertyToOutputMap = {};
    }
    return Bindings;
}());
/**
 * \@description
 *
 * A helper class that allows an AngularJS component to be used from Angular.
 *
 * *Part of the [upgrade/static](api?query=upgrade%2Fstatic)
 * library for hybrid upgrade apps that support AoT compilation.*
 *
 * This helper class should be used as a base class for creating Angular directives
 * that wrap AngularJS components that need to be "upgraded".
 *
 * \@usageNotes
 * ### Examples
 *
 * Let's assume that you have an AngularJS component called `ng1Hero` that needs
 * to be made available in Angular templates.
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng1-hero"}
 *
 * We must create a `Directive` that will make this AngularJS component
 * available inside Angular templates.
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng1-hero-wrapper"}
 *
 * In this example you can see that we must derive from the `UpgradeComponent`
 * base class but also provide an {\@link Directive `\@Directive`} decorator. This is
 * because the AoT compiler requires that this information is statically available at
 * compile time.
 *
 * Note that we must do the following:
 * * specify the directive's selector (`ng1-hero`)
 * * specify all inputs and outputs that the AngularJS component expects
 * * derive from `UpgradeComponent`
 * * call the base class from the constructor, passing
 *   * the AngularJS name of the component (`ng1Hero`)
 *   * the `ElementRef` and `Injector` for the component wrapper
 *
 * \@experimental
 */
var UpgradeComponent = /** @class */ (function () {
    /**
     * Create a new `UpgradeComponent` instance. You should not normally need to do this.
     * Instead you should derive a new class from this one and call the super constructor
     * from the base class.
     *
     * {@example upgrade/static/ts/full/module.ts region="ng1-hero-wrapper" }
     *
     * * The `name` parameter should be the name of the AngularJS directive.
     * * The `elementRef` and `injector` parameters should be acquired from Angular by dependency
     *   injection into the base class constructor.
     */
    function UpgradeComponent(name, elementRef, injector) {
        this.name = name;
        this.elementRef = elementRef;
        this.injector = injector;
        this.helper = new UpgradeHelper(injector, name, elementRef);
        this.$injector = this.helper.$injector;
        this.element = this.helper.element;
        this.$element = this.helper.$element;
        this.directive = this.helper.directive;
        this.bindings = this.initializeBindings(this.directive);
        /** @type {?} */
        var $parentScope = injector.get($SCOPE);
        // QUESTION 1: Should we create an isolated scope if the scope is only true?
        // QUESTION 2: Should we make the scope accessible through `$element.scope()/isolateScope()`?
        this.$componentScope = $parentScope.$new(!!this.directive.scope);
        this.initializeOutputs();
    }
    /**
     * @return {?}
     */
    UpgradeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var attachChildNodes = this.helper.prepareTransclusion();
        /** @type {?} */
        var linkFn = this.helper.compileTemplate();
        /** @type {?} */
        var controllerType = this.directive.controller;
        /** @type {?} */
        var bindToController = this.directive.bindToController;
        if (controllerType) {
            this.controllerInstance = this.helper.buildController(controllerType, this.$componentScope);
        }
        else if (bindToController) {
            throw new Error("Upgraded directive '" + this.directive.name + "' specifies 'bindToController' but no controller.");
        }
        // Set up outputs
        this.bindingDestination = bindToController ? this.controllerInstance : this.$componentScope;
        this.bindOutputs();
        /** @type {?} */
        var requiredControllers = this.helper.resolveAndBindRequiredControllers(this.controllerInstance);
        // Hook: $onChanges
        if (this.pendingChanges) {
            this.forwardChanges(this.pendingChanges);
            this.pendingChanges = null;
        }
        // Hook: $onInit
        if (this.controllerInstance && isFunction(this.controllerInstance.$onInit)) {
            this.controllerInstance.$onInit();
        }
        // Hook: $doCheck
        if (this.controllerInstance && isFunction(this.controllerInstance.$doCheck)) {
            /** @type {?} */
            var callDoCheck = function () { return ((_this.controllerInstance.$doCheck))(); };
            this.unregisterDoCheckWatcher = this.$componentScope.$parent.$watch(callDoCheck);
            callDoCheck();
        }
        /** @type {?} */
        var link = this.directive.link;
        /** @type {?} */
        var preLink = (typeof link == 'object') && (/** @type {?} */ (link)).pre;
        /** @type {?} */
        var postLink = (typeof link == 'object') ? (/** @type {?} */ (link)).post : link;
        /** @type {?} */
        var attrs = NOT_SUPPORTED;
        /** @type {?} */
        var transcludeFn = NOT_SUPPORTED;
        if (preLink) {
            preLink(this.$componentScope, this.$element, attrs, requiredControllers, transcludeFn);
        }
        linkFn(this.$componentScope, /** @type {?} */ ((null)), { parentBoundTranscludeFn: attachChildNodes });
        if (postLink) {
            postLink(this.$componentScope, this.$element, attrs, requiredControllers, transcludeFn);
        }
        // Hook: $postLink
        if (this.controllerInstance && isFunction(this.controllerInstance.$postLink)) {
            this.controllerInstance.$postLink();
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UpgradeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (!this.bindingDestination) {
            this.pendingChanges = changes;
        }
        else {
            this.forwardChanges(changes);
        }
    };
    /**
     * @return {?}
     */
    UpgradeComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var twoWayBoundProperties = this.bindings.twoWayBoundProperties;
        /** @type {?} */
        var twoWayBoundLastValues = this.bindings.twoWayBoundLastValues;
        /** @type {?} */
        var propertyToOutputMap = this.bindings.propertyToOutputMap;
        twoWayBoundProperties.forEach(function (propName, idx) {
            /** @type {?} */
            var newValue = _this.bindingDestination[propName];
            /** @type {?} */
            var oldValue = twoWayBoundLastValues[idx];
            if (!ɵlooseIdentical(newValue, oldValue)) {
                /** @type {?} */
                var outputName = propertyToOutputMap[propName];
                /** @type {?} */
                var eventEmitter = (/** @type {?} */ (_this))[outputName];
                eventEmitter.emit(newValue);
                twoWayBoundLastValues[idx] = newValue;
            }
        });
    };
    /**
     * @return {?}
     */
    UpgradeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (isFunction(this.unregisterDoCheckWatcher)) {
            this.unregisterDoCheckWatcher();
        }
        this.helper.onDestroy(this.$componentScope, this.controllerInstance);
    };
    /**
     * @param {?} directive
     * @return {?}
     */
    UpgradeComponent.prototype.initializeBindings = /**
     * @param {?} directive
     * @return {?}
     */
    function (directive) {
        var _this = this;
        /** @type {?} */
        var btcIsObject = typeof directive.bindToController === 'object';
        if (btcIsObject && Object.keys(/** @type {?} */ ((directive.scope))).length) {
            throw new Error("Binding definitions on scope and controller at the same time is not supported.");
        }
        /** @type {?} */
        var context = (btcIsObject) ? directive.bindToController : directive.scope;
        /** @type {?} */
        var bindings = new Bindings();
        if (typeof context == 'object') {
            Object.keys(context).forEach(function (propName) {
                /** @type {?} */
                var definition = context[propName];
                /** @type {?} */
                var bindingType = definition.charAt(0);
                // QUESTION: What about `=*`? Ignore? Throw? Support?
                switch (bindingType) {
                    case '@':
                    case '<':
                        // We don't need to do anything special. They will be defined as inputs on the
                        // upgraded component facade and the change propagation will be handled by
                        // `ngOnChanges()`.
                        break;
                    case '=':
                        bindings.twoWayBoundProperties.push(propName);
                        bindings.twoWayBoundLastValues.push(INITIAL_VALUE$1);
                        bindings.propertyToOutputMap[propName] = propName + 'Change';
                        break;
                    case '&':
                        bindings.expressionBoundProperties.push(propName);
                        bindings.propertyToOutputMap[propName] = propName;
                        break;
                    default:
                        /** @type {?} */
                        var json = JSON.stringify(context);
                        throw new Error("Unexpected mapping '" + bindingType + "' in '" + json + "' in '" + _this.name + "' directive.");
                }
            });
        }
        return bindings;
    };
    /**
     * @return {?}
     */
    UpgradeComponent.prototype.initializeOutputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Initialize the outputs for `=` and `&` bindings
        this.bindings.twoWayBoundProperties.concat(this.bindings.expressionBoundProperties)
            .forEach(function (propName) {
            /** @type {?} */
            var outputName = _this.bindings.propertyToOutputMap[propName];
            (/** @type {?} */ (_this))[outputName] = new EventEmitter();
        });
    };
    /**
     * @return {?}
     */
    UpgradeComponent.prototype.bindOutputs = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Bind `&` bindings to the corresponding outputs
        this.bindings.expressionBoundProperties.forEach(function (propName) {
            /** @type {?} */
            var outputName = _this.bindings.propertyToOutputMap[propName];
            /** @type {?} */
            var emitter = (/** @type {?} */ (_this))[outputName];
            _this.bindingDestination[propName] = function (value) { return emitter.emit(value); };
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UpgradeComponent.prototype.forwardChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // Forward input changes to `bindingDestination`
        Object.keys(changes).forEach(function (propName) { return _this.bindingDestination[propName] = changes[propName].currentValue; });
        if (isFunction(this.bindingDestination.$onChanges)) {
            this.bindingDestination.$onChanges(changes);
        }
    };
    return UpgradeComponent;
}());

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
 * \@description
 *
 * An `NgModule`, which you import to provide AngularJS core services,
 * and has an instance method used to bootstrap the hybrid upgrade application.
 *
 * *Part of the [upgrade/static](api?query=upgrade/static)
 * library for hybrid upgrade apps that support AoT compilation*
 *
 * The `upgrade/static` package contains helpers that allow AngularJS and Angular components
 * to be used together inside a hybrid upgrade application, which supports AoT compilation.
 *
 * Specifically, the classes and functions in the `upgrade/static` module allow the following:
 *
 * 1. Creation of an Angular directive that wraps and exposes an AngularJS component so
 *    that it can be used in an Angular template. See `UpgradeComponent`.
 * 2. Creation of an AngularJS directive that wraps and exposes an Angular component so
 *    that it can be used in an AngularJS template. See `downgradeComponent`.
 * 3. Creation of an Angular root injector provider that wraps and exposes an AngularJS
 *    service so that it can be injected into an Angular context. See
 *    {\@link UpgradeModule#upgrading-an-angular-1-service Upgrading an AngularJS service} below.
 * 4. Creation of an AngularJS service that wraps and exposes an Angular injectable
 *    so that it can be injected into an AngularJS context. See `downgradeInjectable`.
 * 3. Bootstrapping of a hybrid Angular application which contains both of the frameworks
 *    coexisting in a single application.
 *
 * \@usageNotes
 *
 * ```ts
 * import {UpgradeModule} from '\@angular/upgrade/static';
 * ```
 *
 * See also the {\@link UpgradeModule#examples examples} below.
 *
 * ### Mental Model
 *
 * When reasoning about how a hybrid application works it is useful to have a mental model which
 * describes what is happening and explains what is happening at the lowest level.
 *
 * 1. There are two independent frameworks running in a single application, each framework treats
 *    the other as a black box.
 * 2. Each DOM element on the page is owned exactly by one framework. Whichever framework
 *    instantiated the element is the owner. Each framework only updates/interacts with its own
 *    DOM elements and ignores others.
 * 3. AngularJS directives always execute inside the AngularJS framework codebase regardless of
 *    where they are instantiated.
 * 4. Angular components always execute inside the Angular framework codebase regardless of
 *    where they are instantiated.
 * 5. An AngularJS component can be "upgraded"" to an Angular component. This is achieved by
 *    defining an Angular directive, which bootstraps the AngularJS component at its location
 *    in the DOM. See `UpgradeComponent`.
 * 6. An Angular component can be "downgraded" to an AngularJS component. This is achieved by
 *    defining an AngularJS directive, which bootstraps the Angular component at its location
 *    in the DOM. See `downgradeComponent`.
 * 7. Whenever an "upgraded"/"downgraded" component is instantiated the host element is owned by
 *    the framework doing the instantiation. The other framework then instantiates and owns the
 *    view for that component.
 *    1. This implies that the component bindings will always follow the semantics of the
 *       instantiation framework.
 *    2. The DOM attributes are parsed by the framework that owns the current template. So
 *       attributes in AngularJS templates must use kebab-case, while AngularJS templates must use
 *       camelCase.
 *    3. However the template binding syntax will always use the Angular style, e.g. square
 *       brackets (`[...]`) for property binding.
 * 8. Angular is bootstrapped first; AngularJS is bootstrapped second. AngularJS always owns the
 *    root component of the application.
 * 9. The new application is running in an Angular zone, and therefore it no longer needs calls to
 *    `$apply()`.
 *
 * ### The `UpgradeModule` class
 *
 * This class is an `NgModule`, which you import to provide AngularJS core services,
 * and has an instance method used to bootstrap the hybrid upgrade application.
 *
 * * Core AngularJS services
 *   Importing this `NgModule` will add providers for the core
 *   [AngularJS services](https://docs.angularjs.org/api/ng/service) to the root injector.
 *
 * * Bootstrap
 *   The runtime instance of this class contains a {\@link UpgradeModule#bootstrap `bootstrap()`}
 *   method, which you use to bootstrap the top level AngularJS module onto an element in the
 *   DOM for the hybrid upgrade app.
 *
 *   It also contains properties to access the {\@link UpgradeModule#injector root injector}, the
 *   bootstrap `NgZone` and the
 *   [AngularJS $injector](https://docs.angularjs.org/api/auto/service/$injector).
 *
 * ### Examples
 *
 * Import the `UpgradeModule` into your top level {\@link NgModule Angular `NgModule`}.
 *
 * {\@example upgrade/static/ts/full/module.ts region='ng2-module'}
 *
 * Then inject `UpgradeModule` into your Angular `NgModule` and use it to bootstrap the top level
 * [AngularJS module](https://docs.angularjs.org/api/ng/type/angular.Module) in the
 * `ngDoBootstrap()` method.
 *
 * {\@example upgrade/static/ts/full/module.ts region='bootstrap-ng1'}
 *
 * Finally, kick off the whole process, by bootstraping your top level Angular `NgModule`.
 *
 * {\@example upgrade/static/ts/full/module.ts region='bootstrap-ng2'}
 *
 * {\@a upgrading-an-angular-1-service}
 * ### Upgrading an AngularJS service
 *
 * There is no specific API for upgrading an AngularJS service. Instead you should just follow the
 * following recipe:
 *
 * Let's say you have an AngularJS service:
 *
 * {\@example upgrade/static/ts/full/module.ts region="ng1-text-formatter-service"}
 *
 * Then you should define an Angular provider to be included in your `NgModule` `providers`
 * property.
 *
 * {\@example upgrade/static/ts/full/module.ts region="upgrade-ng1-service"}
 *
 * Then you can use the "upgraded" AngularJS service by injecting it into an Angular component
 * or service.
 *
 * {\@example upgrade/static/ts/full/module.ts region="use-ng1-upgraded-service"}
 *
 * \@experimental
 */
var UpgradeModule = /** @class */ (function () {
    function UpgradeModule(/** The root `Injector` for the upgrade application. */
    injector, ngZone) {
        this.ngZone = ngZone;
        this.injector = new NgAdapterInjector(injector);
    }
    /**
     * Bootstrap an AngularJS application from this NgModule
     * @param element the element on which to bootstrap the AngularJS application
     * @param [modules] the AngularJS modules to bootstrap for this application
     * @param [config] optional extra AngularJS bootstrap configuration
     */
    /**
     * Bootstrap an AngularJS application from this NgModule
     * @param {?} element the element on which to bootstrap the AngularJS application
     * @param {?=} modules
     * @param {?=} config
     * @return {?}
     */
    UpgradeModule.prototype.bootstrap = /**
     * Bootstrap an AngularJS application from this NgModule
     * @param {?} element the element on which to bootstrap the AngularJS application
     * @param {?=} modules
     * @param {?=} config
     * @return {?}
     */
    function (element$$1, modules, config /*angular.IAngularBootstrapConfig*/) {
        var _this = this;
        if (modules === void 0) { modules = []; }
        /** @type {?} */
        var INIT_MODULE_NAME = UPGRADE_MODULE_NAME + '.init';
        /** @type {?} */
        var initModule = module$1(INIT_MODULE_NAME, [])
            .value(INJECTOR_KEY, this.injector)
            .factory(LAZY_MODULE_REF, [
            INJECTOR_KEY,
            function (injector) { return (/** @type {?} */ ({ injector: injector, needsNgZone: false })); }
        ])
            .config([
            $PROVIDE, $INJECTOR,
            function ($provide, $injector) {
                if ($injector.has($$TESTABILITY)) {
                    $provide.decorator($$TESTABILITY, [
                        $DELEGATE,
                        function (testabilityDelegate) {
                            /** @type {?} */
                            var originalWhenStable = testabilityDelegate.whenStable;
                            /** @type {?} */
                            var injector = _this.injector;
                            /** @type {?} */
                            var newWhenStable = function (callback) {
                                originalWhenStable.call(testabilityDelegate, function () {
                                    /** @type {?} */
                                    var ng2Testability = injector.get(Testability);
                                    if (ng2Testability.isStable()) {
                                        callback();
                                    }
                                    else {
                                        ng2Testability.whenStable(newWhenStable.bind(testabilityDelegate, callback));
                                    }
                                });
                            };
                            testabilityDelegate.whenStable = newWhenStable;
                            return testabilityDelegate;
                        }
                    ]);
                }
                if ($injector.has($INTERVAL)) {
                    $provide.decorator($INTERVAL, [
                        $DELEGATE,
                        function (intervalDelegate) {
                            /** @type {?} */
                            var wrappedInterval = function (fn, delay, count, invokeApply) {
                                var pass = [];
                                for (var _i = 4; _i < arguments.length; _i++) {
                                    pass[_i - 4] = arguments[_i];
                                }
                                return _this.ngZone.runOutsideAngular(function () {
                                    return intervalDelegate.apply(void 0, [function () {
                                            var args = [];
                                            for (var _i = 0; _i < arguments.length; _i++) {
                                                args[_i] = arguments[_i];
                                            }
                                            // Run callback in the next VM turn - $interval calls
                                            // $rootScope.$apply, and running the callback in NgZone will
                                            // cause a '$digest already in progress' error if it's in the
                                            // same vm turn.
                                            setTimeout(function () { _this.ngZone.run(function () { return fn.apply(void 0, args); }); });
                                        }, delay, count, invokeApply].concat(pass));
                                });
                            };
                            (/** @type {?} */ (wrappedInterval))['cancel'] = intervalDelegate.cancel;
                            return wrappedInterval;
                        }
                    ]);
                }
            }
        ])
            .run([
            $INJECTOR,
            function ($injector) {
                _this.$injector = $injector;
                // Initialize the ng1 $injector provider
                setTempInjectorRef($injector);
                _this.injector.get($INJECTOR); /** @type {?} */
                ((
                // Put the injector on the DOM, so that it can be "required"
                element(element$$1).data))(controllerKey(INJECTOR_KEY), _this.injector);
                // Wire up the ng1 rootScope to run a digest cycle whenever the zone settles
                // We need to do this in the next tick so that we don't prevent the bootup
                // stabilizing
                setTimeout(function () {
                    /** @type {?} */
                    var $rootScope = $injector.get('$rootScope');
                    /** @type {?} */
                    var subscription = _this.ngZone.onMicrotaskEmpty.subscribe(function () { return $rootScope.$digest(); });
                    $rootScope.$on('$destroy', function () { subscription.unsubscribe(); });
                }, 0);
            }
        ]);
        /** @type {?} */
        var upgradeModule = module$1(UPGRADE_MODULE_NAME, [INIT_MODULE_NAME].concat(modules));
        /** @type {?} */
        var windowAngular = (/** @type {?} */ (window))['angular'];
        windowAngular.resumeBootstrap = undefined;
        // Bootstrap the AngularJS application inside our zone
        this.ngZone.run(function () { bootstrap(element$$1, [upgradeModule.name], config); });
        // Patch resumeBootstrap() to run inside the ngZone
        if (windowAngular.resumeBootstrap) {
            /** @type {?} */
            var originalResumeBootstrap_1 = windowAngular.resumeBootstrap;
            /** @type {?} */
            var ngZone_1 = this.ngZone;
            windowAngular.resumeBootstrap = function () {
                var _this = this;
                /** @type {?} */
                var args = arguments;
                windowAngular.resumeBootstrap = originalResumeBootstrap_1;
                return ngZone_1.run(function () { return windowAngular.resumeBootstrap.apply(_this, args); });
            };
        }
    };
    UpgradeModule.decorators = [
        { type: NgModule, args: [{ providers: [angular1Providers] },] },
    ];
    /** @nocollapse */
    UpgradeModule.ctorParameters = function () { return [
        { type: Injector },
        { type: NgZone }
    ]; };
    return UpgradeModule;
}());

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

// This file only re-exports content of the `src` folder. Keep it that way.

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { getAngularJSGlobal, getAngularLib, setAngularJSGlobal, setAngularLib, downgradeComponent, downgradeInjectable, VERSION, downgradeModule, UpgradeComponent, UpgradeModule, angular1Providers as ɵe, compileFactory as ɵc, injectorFactory as ɵa, parseFactory as ɵd, rootScopeFactory as ɵb };
//# sourceMappingURL=static.js.map
