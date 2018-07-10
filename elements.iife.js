(function () {
  'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectDestructuringEmpty(obj) {
    if (obj == null) throw new TypeError("Cannot destructure undefined");
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }

    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  window.JSCompiler_renameProperty = function (prop) {
    return prop;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var dedupeId = 0;
  /* eslint-disable valid-jsdoc */

  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */

  var dedupingMixin = function dedupingMixin(mixin) {
    var mixinApplications =
    /** @type {!MixinFunction} */
    mixin.__mixinApplications;

    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */

      mixin.__mixinApplications = mixinApplications;
    } // maintain a unique id for each mixin


    var mixinDedupeId = dedupeId++;

    function dedupingMixin(base) {
      var baseSet =
      /** @type {!MixinFunction} */
      base.__mixinSet;

      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }

      var map = mixinApplications;
      var extended = map.get(base);

      if (!extended) {
        extended =
        /** @type {!Function} */
        mixin(base);
        map.set(base, extended);
      } // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.


      var mixinSet = Object.create(
      /** @type {!MixinFunction} */
      extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */

      extended.__mixinSet = mixinSet;
      return extended;
    }

    return (
      /** @type {T} */
      dedupingMixin
    );
  };
  /* eslint-enable valid-jsdoc */

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, {
    characterData: true
  });

  function microtaskFlush() {
    var len = microtaskCallbacks.length;

    for (var i = 0; i < len; i++) {
      var cb = microtaskCallbacks[i];

      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
    }

    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }
  /**
   * Async interface for enqueuing callbacks that run at microtask timing.
   *
   * Note that microtask timing is achieved via a single `MutationObserver`,
   * and thus callbacks enqueued with this API will all run in a single
   * batch, and not interleaved with other microtasks such as promises.
   * Promises are avoided as an implementation choice for the time being
   * due to Safari bugs that cause Promises to lack microtask guarantees.
   *
   * @namespace
   * @summary Async interface for enqueuing callbacks that run at microtask
   *   timing.
   */

  var microTask = {
    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(callback) {
      microtaskNode.textContent = microtaskNodeContent++;
      microtaskCallbacks.push(callback);
      return microtaskCurrHandle++;
    },

    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      var idx = handle - microtaskLastHandle;

      if (idx >= 0) {
        if (!microtaskCallbacks[idx]) {
          throw new Error('invalid async handle: ' + handle);
        }

        microtaskCallbacks[idx] = null;
      }
    }
  };

  /** @const {!AsyncInterface} */

  var microtask = microTask;
  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */

  var PropertiesChanged = dedupingMixin(function (superClass) {
    /**
     * @polymer
     * @mixinClass
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    var PropertiesChanged =
    /*#__PURE__*/
    function (_superClass) {
      _inherits(PropertiesChanged, _superClass);

      _createClass(PropertiesChanged, [{
        key: "_createPropertyAccessor",
        //eslint-disable-line no-unused-vars

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @return {void}
         * @protected
         */
        value: function _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);

          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = Object.assign({}, this.__dataHasAccessor);
          }

          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;

            this._definePropertyAccessor(property, readOnly);
          }
        }
        /**
         * Adds the given `property` to a map matching attribute names
         * to property names, using `attributeNameForProperty`. This map is
         * used when deserializing attribute values to properties.
         *
         * @param {string} property Name of the property
         */

      }, {
        key: "_addPropertyToAttributeMap",
        value: function _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty('__dataAttributes')) {
            this.__dataAttributes = Object.assign({}, this.__dataAttributes);
          }

          if (!this.__dataAttributes[property]) {
            var attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
        }
        /**
         * Defines a property accessor for the given property.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         * @return {void}
         */

      }, {
        key: "_definePropertyAccessor",
        value: function _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */

            /** @this {PropertiesChanged} */
            get: function get$$1() {
              return this._getProperty(property);
            },

            /** @this {PropertiesChanged} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */

          });
        }
      }], [{
        key: "createProperties",

        /**
         * Creates property accessors for the given property names.
         * @param {!Object} props Object whose keys are names of accessors.
         * @return {void}
         * @protected
         */
        value: function createProperties(props) {
          var proto = this.prototype;

          for (var prop in props) {
            // don't stomp an existing accessor
            if (!(prop in proto)) {
              proto._createPropertyAccessor(prop);
            }
          }
        }
        /**
         * Returns an attribute name that corresponds to the given property.
         * The attribute name is the lowercased property name. Override to
         * customize this mapping.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: "attributeNameForProperty",
        value: function attributeNameForProperty(property) {
          return property.toLowerCase();
        }
        /**
         * Override point to provide a type to which to deserialize a value to
         * a given property.
         * @param {string} name Name of property
         *
         * @protected
         */

      }, {
        key: "typeForProperty",
        value: function typeForProperty(name) {}
      }]);

      function PropertiesChanged() {
        var _this;

        _classCallCheck(this, PropertiesChanged);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertiesChanged).call(this));
        _this.__dataEnabled = false;
        _this.__dataReady = false;
        _this.__dataInvalid = false;
        _this.__data = {};
        _this.__dataPending = null;
        _this.__dataOld = null;
        _this.__dataInstanceProps = null;
        _this.__serializing = false;

        _this._initializeProperties();

        return _this;
      }
      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       */


      _createClass(PropertiesChanged, [{
        key: "ready",
        value: function ready() {
          this.__dataReady = true;

          this._flushProperties();
        }
        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_initializeProperties",
        value: function _initializeProperties() {
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (var p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }
        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         */

      }, {
        key: "_initializeInstanceProperties",
        value: function _initializeInstanceProperties(props) {
          Object.assign(this, props);
        }
        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         * @protected
         */

      }, {
        key: "_setProperty",
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }
        /**
         * Returns the value for the given property.
         * @param {string} property Name of property
         * @return {*} Value for the given property
         * @protected
         */

      }, {
        key: "_getProperty",
        value: function _getProperty(property) {
          return this.__data[property];
        }
        /* eslint-disable no-unused-vars */

        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} ext Not used here; affordance for closure
         * @return {boolean} Returns true if the property changed
         * @protected
         */

      }, {
        key: "_setPendingProperty",
        value: function _setPendingProperty(property, value, ext) {
          var old = this.__data[property];

          var changed = this._shouldPropertyChange(property, value, old);

          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            } // Ensure old is captured from the last turn


            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }

            this.__data[property] = value;
            this.__dataPending[property] = value;
          }

          return changed;
        }
        /* eslint-enable */

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_invalidateProperties",
        value: function _invalidateProperties() {
          var _this2 = this;

          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(function () {
              if (_this2.__dataInvalid) {
                _this2.__dataInvalid = false;

                _this2._flushProperties();
              }
            });
          }
        }
        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_enableProperties",
        value: function _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;

            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);

              this.__dataInstanceProps = null;
            }

            this.ready();
          }
        }
        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         * @return {void}
         * @protected
         */

      }, {
        key: "_flushProperties",
        value: function _flushProperties() {
          var props = this.__data;
          var changedProps = this.__dataPending;
          var old = this.__dataOld;

          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;

            this._propertiesChanged(props, changedProps, old);
          }
        }
        /**
         * Called in `_flushProperties` to determine if `_propertiesChanged`
         * should be called. The default implementation returns true if
         * properties are pending. Override to customize when
         * `_propertiesChanged` is called.
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {!Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {!Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {boolean} true if changedProps is truthy
         */

      }, {
        key: "_shouldPropertiesChange",
        value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
          // eslint-disable-line no-unused-vars
          return Boolean(changedProps);
        }
        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {!Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {!Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         * @protected
         */

      }, {
        key: "_propertiesChanged",
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars

        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` if a strict equality
         * check fails. The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         */

      }, {
        key: "_shouldPropertyChange",
        value: function _shouldPropertyChange(property, value, old) {
          return (// Strict equality check
            old !== value && ( // This ensures (old==NaN, value==NaN) always returns false
            old === old || value === value)
          );
        }
        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @suppress {missingProperties} Super may or may not implement the callback
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }

          if (_get(_getPrototypeOf(PropertiesChanged.prototype), "attributeChangedCallback", this)) {
            _get(_getPrototypeOf(PropertiesChanged.prototype), "attributeChangedCallback", this).call(this, name, old, value, namespace);
          }
        }
        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to, defaults to the value
         * returned from `typeForProperty`
         * @return {void}
         */

      }, {
        key: "_attributeToProperty",
        value: function _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            var map = this.__dataAttributes;
            var property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
          }
        }
        /**
         * Serializes a property to its associated attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is an element.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect to.
         * @param {*=} value Property value to refect.
         * @return {void}
         */

      }, {
        key: "_propertyToAttribute",
        value: function _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;

          this._valueToNodeAttribute(
          /** @type {!HTMLElement} */
          this, value, attribute || this.constructor.attributeNameForProperty(property));

          this.__serializing = false;
        }
        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @return {void}
         */

      }, {
        key: "_valueToNodeAttribute",
        value: function _valueToNodeAttribute(node, value, attribute) {
          var str = this._serializeValue(value);

          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }
        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called when setting JS property values to
         * HTML attributes.  Users may override this method to provide
         * serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided
         * property  value.
         */

      }, {
        key: "_serializeValue",
        value: function _serializeValue(value) {
          switch (_typeof(value)) {
            case 'boolean':
              return value ? '' : undefined;

            default:
              return value != null ? value.toString() : undefined;
          }
        }
        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called when reading HTML attribute values to
         * JS properties.  Users may override this method to provide
         * deserialization for custom `type`s. Types for `Boolean`, `String`,
         * and `Number` convert attributes to the expected types.
         *
         * @param {?string} value Value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         */

      }, {
        key: "_deserializeValue",
        value: function _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;

            case Number:
              return Number(value);

            default:
              return value;
          }
        }
      }]);

      return PropertiesChanged;
    }(superClass);

    return PropertiesChanged;
  });

  /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {Object} props Properties to normalize
   * @return {Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */

  function normalizeProperties(props) {
    var output = {};

    for (var p in props) {
      var o = props[p];
      output[p] = typeof o === 'function' ? {
        type: o
      } : o;
    }

    return output;
  }
  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */


  var PropertiesMixin = dedupingMixin(function (superClass) {
    /**
     * @constructor
     * @extends {superClass}
     * @implements {Polymer_PropertiesChanged}
     */
    var base = PropertiesChanged(superClass);
    /**
     * Returns the super class constructor for the given class, if it is an
     * instance of the PropertiesMixin.
     *
     * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {PropertiesMixinConstructor} Super class constructor
     */

    function superPropertiesClass(constructor) {
      var superCtor = Object.getPrototypeOf(constructor); // Note, the `PropertiesMixin` class below only refers to the class
      // generated by this call to the mixin; the instanceof test only works
      // because the mixin is deduped and guaranteed only to apply once, hence
      // all constructors in a proto chain will see the same `PropertiesMixin`

      return superCtor.prototype instanceof PropertiesMixin ?
      /** @type {PropertiesMixinConstructor} */
      superCtor : null;
    }
    /**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */


    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
        var props = null;

        if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
          props = normalizeProperties(constructor.properties);
        }

        constructor.__ownProperties = props;
      }

      return constructor.__ownProperties;
    }
    /**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */


    var PropertiesMixin =
    /*#__PURE__*/
    function (_base) {
      _inherits(PropertiesMixin, _base);

      function PropertiesMixin() {
        _classCallCheck(this, PropertiesMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(PropertiesMixin).apply(this, arguments));
      }

      _createClass(PropertiesMixin, [{
        key: "_initializeProperties",

        /**
         * Overrides `PropertiesChanged` method and adds a call to
         * `finalize` which lazily configures the element's property accessors.
         * @override
         * @return {void}
         */
        value: function _initializeProperties() {
          this.constructor.finalize();

          _get(_getPrototypeOf(PropertiesMixin.prototype), "_initializeProperties", this).call(this);
        }
        /**
         * Called when the element is added to a document.
         * Calls `_enableProperties` to turn on property system from
         * `PropertiesChanged`.
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          if (_get(_getPrototypeOf(PropertiesMixin.prototype), "connectedCallback", this)) {
            _get(_getPrototypeOf(PropertiesMixin.prototype), "connectedCallback", this).call(this);
          }

          this._enableProperties();
        }
        /**
         * Called when the element is removed from a document
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          if (_get(_getPrototypeOf(PropertiesMixin.prototype), "disconnectedCallback", this)) {
            _get(_getPrototypeOf(PropertiesMixin.prototype), "disconnectedCallback", this).call(this);
          }
        }
      }], [{
        key: "finalize",

        /**
         * Finalizes an element definition, including ensuring any super classes
         * are also finalized. This includes ensuring property
         * accessors exist on the element prototype. This method calls
         * `_finalizeClass` to finalize each constructor in the prototype chain.
         * @return {void}
         */
        value: function finalize() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
            var superCtor = superPropertiesClass(
            /** @type {PropertiesMixinConstructor} */
            this);

            if (superCtor) {
              superCtor.finalize();
            }

            this.__finalized = true;

            this._finalizeClass();
          }
        }
        /**
         * Finalize an element class. This includes ensuring property
         * accessors exist on the element prototype. This method is called by
         * `finalize` and finalizes the class constructor.
         *
         * @protected
         */

      }, {
        key: "_finalizeClass",
        value: function _finalizeClass() {
          var props = ownProperties(
          /** @type {PropertiesMixinConstructor} */
          this);

          if (props) {
            this.createProperties(props);
          }
        }
        /**
         * Returns a memoized version of all properties, including those inherited
         * from super classes. Properties not in object format are converted to
         * at least {type}.
         *
         * @return {Object} Object containing properties for this class
         * @protected
         */

      }, {
        key: "typeForProperty",

        /**
         * Overrides `PropertiesChanged` method to return type specified in the
         * static `properties` object for the given property.
         * @param {string} name Name of property
         * @return {*} Type to which to deserialize attribute
         *
         * @protected
         */
        value: function typeForProperty(name) {
          var info = this._properties[name];
          return info && info.type;
        }
      }, {
        key: "observedAttributes",

        /**
         * Implements standard custom elements getter to observes the attributes
         * listed in `properties`.
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        get: function get$$1() {
          var _this = this;

          var props = this._properties;
          return props ? Object.keys(props).map(function (p) {
            return _this.attributeNameForProperty(p);
          }) : [];
        }
      }, {
        key: "_properties",
        get: function get$$1() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
            var superCtor = superPropertiesClass(
            /** @type {PropertiesMixinConstructor} */
            this);
            this.__properties = Object.assign({}, superCtor && superCtor._properties, ownProperties(
            /** @type {PropertiesMixinConstructor} */
            this));
          }

          return this.__properties;
        }
      }]);

      return PropertiesMixin;
    }(base);

    return PropertiesMixin;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // The first argument to JS template tags retain identity across multiple
  // calls to a tag for the same literal, so we can cache work done per literal
  // in a Map.
  var templateCaches = new Map();
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */

  var TemplateResult =
  /*#__PURE__*/
  function () {
    function TemplateResult(strings, values, type) {
      var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;

      _classCallCheck(this, TemplateResult);

      this.strings = strings;
      this.values = values;
      this.type = type;
      this.partCallback = partCallback;
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */


    _createClass(TemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        var l = this.strings.length - 1;
        var html = '';
        var isTextBinding = true;

        for (var i = 0; i < l; i++) {
          var s = this.strings[i];
          html += s; // We're in a text position if the previous string closed its tags.
          // If it doesn't have any tags, then we use the previous text position
          // state.

          var closing = findTagClose(s);
          isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
          html += isTextBinding ? nodeMarker : marker;
        }

        html += this.strings[l];
        return html;
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = document.createElement('template');
        template.innerHTML = this.getHTML();
        return template;
      }
    }]);

    return TemplateResult;
  }();
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an <svg> tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the <svg> tag so that
   * clones only container the original fragment.
   */

  var SVGTemplateResult =
  /*#__PURE__*/
  function (_TemplateResult) {
    _inherits(SVGTemplateResult, _TemplateResult);

    function SVGTemplateResult() {
      _classCallCheck(this, SVGTemplateResult);

      return _possibleConstructorReturn(this, _getPrototypeOf(SVGTemplateResult).apply(this, arguments));
    }

    _createClass(SVGTemplateResult, [{
      key: "getHTML",
      value: function getHTML() {
        return "<svg>".concat(_get(_getPrototypeOf(SVGTemplateResult.prototype), "getHTML", this).call(this), "</svg>");
      }
    }, {
      key: "getTemplateElement",
      value: function getTemplateElement() {
        var template = _get(_getPrototypeOf(SVGTemplateResult.prototype), "getTemplateElement", this).call(this);

        var content = template.content;
        var svgElement = content.firstChild;
        content.removeChild(svgElement);
        reparentNodes(content, svgElement.firstChild);
        return template;
      }
    }]);

    return SVGTemplateResult;
  }(TemplateResult);
  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */

  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
   * An expression marker used text-positions, not attribute positions,
   * in template.
   */

  var nodeMarker = "<!--".concat(marker, "-->");
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#attributes-0
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-character
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */

  var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
  /**
   * Finds the closing index of the last closed HTML tag.
   * This has 3 possible return values:
   *   - `-1`, meaning there is no tag in str.
   *   - `string.length`, meaning the last opened tag is unclosed.
   *   - Some positive number < str.length, meaning the index of the closing '>'.
   */

  function findTagClose(str) {
    var close = str.lastIndexOf('>');
    var open = str.indexOf('<', close + 1);
    return open > -1 ? str.length : close;
  }
  /**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */


  var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
    _classCallCheck(this, TemplatePart);

    this.type = type;
    this.index = index;
    this.name = name;
    this.rawName = rawName;
    this.strings = strings;
  };
  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  };
  /**
   * An updateable Template that tracks the location of dynamic parts.
   */

  var Template = function Template(result, element) {
    _classCallCheck(this, Template);

    this.parts = [];
    this.element = element;
    var content = this.element.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null

    var walker = document.createTreeWalker(content, 133
    /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
    NodeFilter.SHOW_TEXT */
    , null, false);
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = []; // The actual previous node, accounting for removals: if a node is removed
    // it will never be the previousNode.

    var previousNode; // Used to set previousNode at the top of the loop.

    var currentNode;

    while (walker.nextNode()) {
      index++;
      previousNode = currentNode;
      var node = currentNode = walker.currentNode;

      if (node.nodeType === 1
      /* Node.ELEMENT_NODE */
      ) {
          if (!node.hasAttributes()) {
            continue;
          }

          var attributes = node.attributes; // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
          // attributes are not guaranteed to be returned in document order. In
          // particular, Edge/IE can return them out of order, so we cannot assume
          // a correspondance between part index and attribute index.

          var count = 0;

          for (var i = 0; i < attributes.length; i++) {
            if (attributes[i].value.indexOf(marker) >= 0) {
              count++;
            }
          }

          while (count-- > 0) {
            // Get the template literal section leading up to the first
            // expression in this attribute
            var stringForPart = result.strings[partIndex]; // Find the attribute name

            var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1]; // Find the corresponding attribute
            // TODO(justinfagnani): remove non-null assertion

            var attribute = attributes.getNamedItem(attributeNameInPart);
            var stringsForAttributeValue = attribute.value.split(markerRegex);
            this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
            node.removeAttribute(attribute.name);
            partIndex += stringsForAttributeValue.length - 1;
          }
        } else if (node.nodeType === 3
      /* Node.TEXT_NODE */
      ) {
          var nodeValue = node.nodeValue;

          if (nodeValue.indexOf(marker) < 0) {
            continue;
          }

          var parent = node.parentNode;
          var strings = nodeValue.split(markerRegex);
          var lastIndex = strings.length - 1; // We have a part for each match found

          partIndex += lastIndex; // Generate a new text node for each literal section
          // These nodes are also used as the markers for node parts

          for (var _i = 0; _i < lastIndex; _i++) {
            parent.insertBefore(strings[_i] === '' ? document.createComment('') : document.createTextNode(strings[_i]), node);
            this.parts.push(new TemplatePart('node', index++));
          }

          parent.insertBefore(strings[lastIndex] === '' ? document.createComment('') : document.createTextNode(strings[lastIndex]), node);
          nodesToRemove.push(node);
        } else if (node.nodeType === 8
      /* Node.COMMENT_NODE */
      && node.nodeValue === marker) {
        var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of the
        // following are true:
        //  * We don't have a previousSibling
        //  * previousSibling is being removed (thus it's not the
        //    `previousNode`)
        //  * previousSibling is not a Text node
        //
        // TODO(justinfagnani): We should be able to use the previousNode here
        // as the marker node and reduce the number of extra nodes we add to a
        // template. See https://github.com/PolymerLabs/lit-html/issues/147

        var previousSibling = node.previousSibling;

        if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
          _parent.insertBefore(document.createComment(''), node);
        } else {
          index--;
        }

        this.parts.push(new TemplatePart('node', index++));
        nodesToRemove.push(node); // If we don't have a nextSibling add a marker node.
        // We don't have to check if the next node is going to be removed,
        // because that node will induce a new marker if so.

        if (node.nextSibling === null) {
          _parent.insertBefore(document.createComment(''), node);
        } else {
          index--;
        }

        currentNode = previousNode;
        partIndex++;
      }
    } // Remove text binding nodes after the walk to not disturb the TreeWalker


    for (var _i2 = 0; _i2 < nodesToRemove.length; _i2++) {
      var n = nodesToRemove[_i2];
      n.parentNode.removeChild(n);
    }
  };
  /**
   * Returns a value ready to be inserted into a Part from a user-provided value.
   *
   * If the user value is a directive, this invokes the directive with the given
   * part. If the value is null, it's converted to undefined to work better
   * with certain DOM APIs, like textContent.
   */

  var getValue = function getValue(part, value) {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (isDirective(value)) {
      value = value(part);
      return noChange;
    }

    return value === null ? undefined : value;
  };
  var directive = function directive(f) {
    f.__litDirective = true;
    return f;
  };

  var isDirective = function isDirective(o) {
    return typeof o === 'function' && o.__litDirective === true;
  };
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */


  var noChange = {};

  var isPrimitiveValue = function isPrimitiveValue(value) {
    return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
  };

  var AttributePart =
  /*#__PURE__*/
  function () {
    function AttributePart(instance, element, name, strings) {
      _classCallCheck(this, AttributePart);

      this.instance = instance;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.size = strings.length - 1;
      this._previousValues = [];
    }

    _createClass(AttributePart, [{
      key: "_interpolate",
      value: function _interpolate(values, startIndex) {
        var strings = this.strings;
        var l = strings.length - 1;
        var text = '';

        for (var i = 0; i < l; i++) {
          text += strings[i];
          var v = getValue(this, values[startIndex + i]);

          if (v && v !== noChange && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var t = _step.value;
                // TODO: we need to recursively call getValue into iterables...
                text += t;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          } else {
            text += v;
          }
        }

        return text + strings[l];
      }
    }, {
      key: "_equalToPreviousValues",
      value: function _equalToPreviousValues(values, startIndex) {
        for (var i = startIndex; i < startIndex + this.size; i++) {
          if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
            return false;
          }
        }

        return true;
      }
    }, {
      key: "setValue",
      value: function setValue(values, startIndex) {
        if (this._equalToPreviousValues(values, startIndex)) {
          return;
        }

        var s = this.strings;
        var value;

        if (s.length === 2 && s[0] === '' && s[1] === '') {
          // An expression that occupies the whole attribute value will leave
          // leading and trailing empty strings.
          value = getValue(this, values[startIndex]);

          if (Array.isArray(value)) {
            value = value.join('');
          }
        } else {
          value = this._interpolate(values, startIndex);
        }

        if (value !== noChange) {
          this.element.setAttribute(this.name, value);
        }

        this._previousValues = values;
      }
    }]);

    return AttributePart;
  }();
  var NodePart =
  /*#__PURE__*/
  function () {
    function NodePart(instance, startNode, endNode) {
      _classCallCheck(this, NodePart);

      this.instance = instance;
      this.startNode = startNode;
      this.endNode = endNode;
      this._previousValue = undefined;
    }

    _createClass(NodePart, [{
      key: "setValue",
      value: function setValue(value) {
        value = getValue(this, value);

        if (value === noChange) {
          return;
        }

        if (isPrimitiveValue(value)) {
          // Handle primitive values
          // If the value didn't change, do nothing
          if (value === this._previousValue) {
            return;
          }

          this._setText(value);
        } else if (value instanceof TemplateResult) {
          this._setTemplateResult(value);
        } else if (Array.isArray(value) || value[Symbol.iterator]) {
          this._setIterable(value);
        } else if (value instanceof Node) {
          this._setNode(value);
        } else if (value.then !== undefined) {
          this._setPromise(value);
        } else {
          // Fallback, will render the string representation
          this._setText(value);
        }
      }
    }, {
      key: "_insert",
      value: function _insert(node) {
        this.endNode.parentNode.insertBefore(node, this.endNode);
      }
    }, {
      key: "_setNode",
      value: function _setNode(value) {
        if (this._previousValue === value) {
          return;
        }

        this.clear();

        this._insert(value);

        this._previousValue = value;
      }
    }, {
      key: "_setText",
      value: function _setText(value) {
        var node = this.startNode.nextSibling;
        value = value === undefined ? '' : value;

        if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
          // If we only have a single text node between the markers, we can just
          // set its value, rather than replacing it.
          // TODO(justinfagnani): Can we just check if _previousValue is
          // primitive?
          node.textContent = value;
        } else {
          this._setNode(document.createTextNode(value));
        }

        this._previousValue = value;
      }
    }, {
      key: "_setTemplateResult",
      value: function _setTemplateResult(value) {
        var template = this.instance._getTemplate(value);

        var instance;

        if (this._previousValue && this._previousValue.template === template) {
          instance = this._previousValue;
        } else {
          instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);

          this._setNode(instance._clone());

          this._previousValue = instance;
        }

        instance.update(value.values);
      }
    }, {
      key: "_setIterable",
      value: function _setIterable(value) {
        // For an Iterable, we create a new InstancePart per item, then set its
        // value to the item. This is a little bit of overhead for every item in
        // an Iterable, but it lets us recurse easily and efficiently update Arrays
        // of TemplateResults that will be commonly returned from expressions like:
        // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
        // If _previousValue is an array, then the previous render was of an
        // iterable and _previousValue will contain the NodeParts from the previous
        // render. If _previousValue is not an array, clear this part and make a new
        // array for NodeParts.
        if (!Array.isArray(this._previousValue)) {
          this.clear();
          this._previousValue = [];
        } // Lets us keep track of how many items we stamped so we can clear leftover
        // items from a previous render


        var itemParts = this._previousValue;
        var partIndex = 0;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var item = _step2.value;
            // Try to reuse an existing part
            var itemPart = itemParts[partIndex]; // If no existing part, create a new one

            if (itemPart === undefined) {
              // If we're creating the first item part, it's startNode should be the
              // container's startNode
              var itemStart = this.startNode; // If we're not creating the first part, create a new separator marker
              // node, and fix up the previous part's endNode to point to it

              if (partIndex > 0) {
                var previousPart = itemParts[partIndex - 1];
                itemStart = previousPart.endNode = document.createTextNode('');

                this._insert(itemStart);
              }

              itemPart = new NodePart(this.instance, itemStart, this.endNode);
              itemParts.push(itemPart);
            }

            itemPart.setValue(item);
            partIndex++;
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        if (partIndex === 0) {
          this.clear();
          this._previousValue = undefined;
        } else if (partIndex < itemParts.length) {
          var lastPart = itemParts[partIndex - 1]; // Truncate the parts array so _previousValue reflects the current state

          itemParts.length = partIndex;
          this.clear(lastPart.endNode.previousSibling);
          lastPart.endNode = this.endNode;
        }
      }
    }, {
      key: "_setPromise",
      value: function _setPromise(value) {
        var _this = this;

        this._previousValue = value;
        value.then(function (v) {
          if (_this._previousValue === value) {
            _this.setValue(v);
          }
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
        removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
      }
    }]);

    return NodePart;
  }();
  var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
      return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    } else if (templatePart.type === 'node') {
      return new NodePart(instance, node, node.nextSibling);
    }

    throw new Error("Unknown part type ".concat(templatePart.type));
  };
  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */

  var TemplateInstance =
  /*#__PURE__*/
  function () {
    function TemplateInstance(template, partCallback, getTemplate) {
      _classCallCheck(this, TemplateInstance);

      this._parts = [];
      this.template = template;
      this._partCallback = partCallback;
      this._getTemplate = getTemplate;
    }

    _createClass(TemplateInstance, [{
      key: "update",
      value: function update(values) {
        var valueIndex = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this._parts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var part = _step3.value;

            if (!part) {
              valueIndex++;
            } else if (part.size === undefined) {
              part.setValue(values[valueIndex]);
              valueIndex++;
            } else {
              part.setValue(values, valueIndex);
              valueIndex += part.size;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }, {
      key: "_clone",
      value: function _clone() {
        // Clone the node, rather than importing it, to keep the fragment in the
        // template's document. This leaves the fragment inert so custom elements
        // won't upgrade until after the main document adopts the node.
        var fragment = this.template.element.content.cloneNode(true);
        var parts = this.template.parts;

        if (parts.length > 0) {
          // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
          // null
          var _walker = document.createTreeWalker(fragment, 133
          /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
          NodeFilter.SHOW_TEXT */
          , null, false);

          var _index = -1;

          for (var i = 0; i < parts.length; i++) {
            var part = parts[i];
            var partActive = isTemplatePartActive(part); // An inactive part has no coresponding Template node.

            if (partActive) {
              while (_index < part.index) {
                _index++;

                _walker.nextNode();
              }
            }

            this._parts.push(partActive ? this._partCallback(this, part, _walker.currentNode) : undefined);
          }
        }

        return fragment;
      }
    }]);

    return TemplateInstance;
  }();
  /**
   * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), into another container (could be the same container), before
   * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
   * container.
   */

  var reparentNodes = function reparentNodes(container, start) {
    var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var node = start;

    while (node !== end) {
      var n = node.nextSibling;
      container.insertBefore(node, before);
      node = n;
    }
  };
  /**
   * Removes nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), from `container`.
   */

  var removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var node = startNode;

    while (node !== endNode) {
      var n = node.nextSibling;
      container.removeChild(node);
      node = n;
    }
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
   */

  function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
        parts = template.parts;
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = 0;
    var part = parts[0];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;

    while (walker.nextNode()) {
      nodeIndex++;
      var node = walker.currentNode; // End removal if stepped past the removing node

      if (node.previousSibling === currentRemovingNode) {
        currentRemovingNode = null;
      } // A node to remove was found in the template


      if (nodesToRemove.has(node)) {
        nodesToRemoveInTemplate.push(node); // Track node we're removing

        if (currentRemovingNode === null) {
          currentRemovingNode = node;
        }
      } // When removing, increment count by which to adjust subsequent part indices


      if (currentRemovingNode !== null) {
        removeCount++;
      }

      while (part !== undefined && part.index === nodeIndex) {
        // If part is in a removed node deactivate it by setting index to -1 or
        // adjust the index as needed.
        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
        part = parts[++partIndex];
      }
    }

    nodesToRemoveInTemplate.forEach(function (n) {
      return n.parentNode.removeChild(n);
    });
  }

  var countNodes = function countNodes(node) {
    var count = 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);

    while (walker.nextNode()) {
      count++;
    }

    return count;
  };

  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    for (var i = startIndex + 1; i < parts.length; i++) {
      var part = parts[i];

      if (isTemplatePartActive(part)) {
        return i;
      }
    }

    return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */


  function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
        parts = template.parts; // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.

    if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
    }

    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;

    while (walker.nextNode()) {
      walkerIndex++;
      var walkerNode = walker.currentNode;

      if (walkerNode === refNode) {
        refNode.parentNode.insertBefore(node, refNode);
        insertCount = countNodes(node);
      }

      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
        // If we've inserted the node, simply adjust all subsequent parts
        if (insertCount > 0) {
          while (partIndex !== -1) {
            parts[partIndex].index += insertCount;
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }

          return;
        }

        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
    }
  }

  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return "".concat(type, "--").concat(scopeName);
  };
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */


  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
      var cacheKey = getTemplateCacheKey(result.type, scopeName);
      var templateCache = templateCaches.get(cacheKey);

      if (templateCache === undefined) {
        templateCache = new Map();
        templateCaches.set(cacheKey, templateCache);
      }

      var template = templateCache.get(result.strings);

      if (template === undefined) {
        var element = result.getTemplateElement();

        if (_typeof(window.ShadyCSS) === 'object') {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }

        template = new Template(result, element);
        templateCache.set(result.strings, template);
      }

      return template;
    };
  };

  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */

  function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
      var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));

      if (templates !== undefined) {
        templates.forEach(function (template) {
          var content = template.element.content;
          var styles = content.querySelectorAll('style');
          removeNodesFromTemplate(template, new Set(Array.from(styles)));
        });
      }
    });
  }

  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered output.
   */

  var ensureStylesScoped = function ensureStylesScoped(fragment, template, scopeName) {
    // only scope element template once per scope name
    if (!shadyRenderSet.has(scopeName)) {
      shadyRenderSet.add(scopeName);
      var styleTemplate = document.createElement('template');
      Array.from(fragment.querySelectorAll('style')).forEach(function (s) {
        styleTemplate.content.appendChild(s);
      });
      window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName); // Fix templates: note the expectation here is that the given `fragment`
      // has been generated from the given `template` which contains
      // the set of templates rendered into this scope.
      // It is only from this set of initial templates from which styles
      // will be scoped and removed.

      removeStylesFromLitTemplates(scopeName); // ApplyShim case

      if (window.ShadyCSS.nativeShadow) {
        var style = styleTemplate.content.querySelector('style');

        if (style !== null) {
          // Insert style into rendered fragment
          fragment.insertBefore(style, fragment.firstChild); // Insert into lit-template (for subsequent renders)

          insertNodeIntoTemplate(template, style.cloneNode(true), template.element.content.firstChild);
        }
      }
    }
  }; // NOTE: We're copying code from lit-html's `render` method here.
  // We're doing this explicitly because the API for rendering templates is likely
  // to change in the near term.


  function render$1(result, container, scopeName) {
    var templateFactory = shadyTemplateFactory(scopeName);
    var template = templateFactory(result);
    var instance = container.__templateInstance; // Repeat render, just call update()

    if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
      instance.update(result.values);
      return;
    } // First render, create a new TemplateInstance and append it


    instance = new TemplateInstance(template, result.partCallback, templateFactory);
    container.__templateInstance = instance;

    var fragment = instance._clone();

    instance.update(result.values);
    var host = container instanceof ShadowRoot ? container.host : undefined; // If there's a shadow host, do ShadyCSS scoping...

    if (host !== undefined && _typeof(window.ShadyCSS) === 'object') {
      ensureStylesScoped(fragment, template, scopeName);
      window.ShadyCSS.styleElement(host);
    }

    removeNodes(container, container.firstChild);
    container.appendChild(fragment);
  }

  /**
   * Interprets a template literal as a lit-extended HTML template.
   */

  var html$1 = function html$$1(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }

    return new TemplateResult(strings, values, 'html', extendedPartCallback);
  };
  /**
   * A PartCallback which allows templates to set properties and declarative
   * event handlers.
   *
   * Properties are set by default, instead of attributes. Attribute names in
   * lit-html templates preserve case, so properties are case sensitive. If an
   * expression takes up an entire attribute value, then the property is set to
   * that value. If an expression is interpolated with a string or other
   * expressions then the property is set to the string result of the
   * interpolation.
   *
   * To set an attribute instead of a property, append a `$` suffix to the
   * attribute name.
   *
   * Example:
   *
   *     html`<button class$="primary">Buy Now</button>`
   *
   * To set an event handler, prefix the attribute name with `on-`:
   *
   * Example:
   *
   *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
   *
   */

  var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
    if (templatePart.type === 'attribute') {
      if (templatePart.rawName.substr(0, 3) === 'on-') {
        var eventName = templatePart.rawName.slice(3);
        return new EventPart(instance, node, eventName);
      }

      var lastChar = templatePart.name.substr(templatePart.name.length - 1);

      if (lastChar === '$') {
        var name = templatePart.name.slice(0, -1);
        return new AttributePart(instance, node, name, templatePart.strings);
      }

      if (lastChar === '?') {
        var _name = templatePart.name.slice(0, -1);

        return new BooleanAttributePart(instance, node, _name, templatePart.strings);
      }

      return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
    }

    return defaultPartCallback(instance, templatePart, node);
  };
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */

  var BooleanAttributePart =
  /*#__PURE__*/
  function (_AttributePart) {
    _inherits(BooleanAttributePart, _AttributePart);

    function BooleanAttributePart() {
      _classCallCheck(this, BooleanAttributePart);

      return _possibleConstructorReturn(this, _getPrototypeOf(BooleanAttributePart).apply(this, arguments));
    }

    _createClass(BooleanAttributePart, [{
      key: "setValue",
      value: function setValue(values, startIndex) {
        var s = this.strings;

        if (s.length === 2 && s[0] === '' && s[1] === '') {
          var value = getValue(this, values[startIndex]);

          if (value === noChange) {
            return;
          }

          if (value) {
            this.element.setAttribute(this.name, '');
          } else {
            this.element.removeAttribute(this.name);
          }
        } else {
          throw new Error('boolean attributes can only contain a single expression');
        }
      }
    }]);

    return BooleanAttributePart;
  }(AttributePart);
  var PropertyPart =
  /*#__PURE__*/
  function (_AttributePart2) {
    _inherits(PropertyPart, _AttributePart2);

    function PropertyPart() {
      _classCallCheck(this, PropertyPart);

      return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
    }

    _createClass(PropertyPart, [{
      key: "setValue",
      value: function setValue(values, startIndex) {
        var s = this.strings;
        var value;

        if (this._equalToPreviousValues(values, startIndex)) {
          return;
        }

        if (s.length === 2 && s[0] === '' && s[1] === '') {
          // An expression that occupies the whole attribute value will leave
          // leading and trailing empty strings.
          value = getValue(this, values[startIndex]);
        } else {
          // Interpolation, so interpolate
          value = this._interpolate(values, startIndex);
        }

        if (value !== noChange) {
          this.element[this.name] = value;
        }

        this._previousValues = values;
      }
    }]);

    return PropertyPart;
  }(AttributePart);
  var EventPart =
  /*#__PURE__*/
  function () {
    function EventPart(instance, element, eventName) {
      _classCallCheck(this, EventPart);

      this.instance = instance;
      this.element = element;
      this.eventName = eventName;
    }

    _createClass(EventPart, [{
      key: "setValue",
      value: function setValue(value) {
        var listener = getValue(this, value);

        if (listener === this._listener) {
          return;
        }

        if (listener == null) {
          this.element.removeEventListener(this.eventName, this);
        } else if (this._listener == null) {
          this.element.addEventListener(this.eventName, this);
        }

        this._listener = listener;
      }
    }, {
      key: "handleEvent",
      value: function handleEvent(event) {
        if (typeof this._listener === 'function') {
          this._listener.call(this.element, event);
        } else if (typeof this._listener.handleEvent === 'function') {
          this._listener.handleEvent(event);
        }
      }
    }]);

    return EventPart;
  }();

  var LitElement =
  /*#__PURE__*/
  function (_PropertiesMixin) {
    _inherits(LitElement, _PropertiesMixin);

    function LitElement() {
      var _this;

      _classCallCheck(this, LitElement);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
      _this.__renderComplete = null;
      _this.__resolveRenderComplete = null;
      _this.__isInvalid = false;
      _this.__isChanging = false;
      return _this;
    }
    /**
     * Override which sets up element rendering by calling* `_createRoot`
     * and `_firstRendered`.
     */


    _createClass(LitElement, [{
      key: "ready",
      value: function ready() {
        this._root = this._createRoot();

        _get(_getPrototypeOf(LitElement.prototype), "ready", this).call(this);

        this._firstRendered();
      }
    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        if (window.ShadyCSS && this._root) {
          window.ShadyCSS.styleElement(this);
        }

        _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this);
      }
      /**
       * Called after the element DOM is rendered for the first time.
       * Implement to perform tasks after first rendering like capturing a
       * reference to a static node which must be directly manipulated.
       * This should not be commonly needed. For tasks which should be performed
       * before first render, use the element constructor.
       */

    }, {
      key: "_firstRendered",
      value: function _firstRendered() {}
      /**
       * Implement to customize where the element's template is rendered by
       * returning an element into which to render. By default this creates
       * a shadowRoot for the element. To render into the element's childNodes,
       * return `this`.
       * @returns {Element|DocumentFragment} Returns a node into which to render.
       */

    }, {
      key: "_createRoot",
      value: function _createRoot() {
        return this.attachShadow({
          mode: 'open'
        });
      }
      /**
       * Override which returns the value of `_shouldRender` which users
       * should implement to control rendering. If this method returns false,
       * _propertiesChanged will not be called and no rendering will occur even
       * if property values change or `requestRender` is called.
       * @param _props Current element properties
       * @param _changedProps Changing element properties
       * @param _prevProps Previous element properties
       * @returns {boolean} Default implementation always returns true.
       */

    }, {
      key: "_shouldPropertiesChange",
      value: function _shouldPropertiesChange(_props, _changedProps, _prevProps) {
        var shouldRender = this._shouldRender(_props, _changedProps, _prevProps);

        if (!shouldRender && this.__resolveRenderComplete) {
          this.__resolveRenderComplete(false);
        }

        return shouldRender;
      }
      /**
       * Implement to control if rendering should occur when property values
       * change or `requestRender` is called. By default, this method always
       * returns true, but this can be customized as an optimization to avoid
       * rendering work when changes occur which should not be rendered.
       * @param _props Current element properties
       * @param _changedProps Changing element properties
       * @param _prevProps Previous element properties
       * @returns {boolean} Default implementation always returns true.
       */

    }, {
      key: "_shouldRender",
      value: function _shouldRender(_props, _changedProps, _prevProps) {
        return true;
      }
      /**
       * Override which performs element rendering by calling
       * `_render`, `_applyRender`, and finally `_didRender`.
       * @param props Current element properties
       * @param changedProps Changing element properties
       * @param prevProps Previous element properties
       */

    }, {
      key: "_propertiesChanged",
      value: function _propertiesChanged(props, changedProps, prevProps) {
        _get(_getPrototypeOf(LitElement.prototype), "_propertiesChanged", this).call(this, props, changedProps, prevProps);

        var result = this._render(props);

        if (result && this._root !== undefined) {
          this._applyRender(result, this._root);
        }

        this._didRender(props, changedProps, prevProps);

        if (this.__resolveRenderComplete) {
          this.__resolveRenderComplete(true);
        }
      }
    }, {
      key: "_flushProperties",
      value: function _flushProperties() {
        this.__isChanging = true;
        this.__isInvalid = false;

        _get(_getPrototypeOf(LitElement.prototype), "_flushProperties", this).call(this);

        this.__isChanging = false;
      }
      /**
       * Override which warns when a user attempts to change a property during
       * the rendering lifecycle. This is an anti-pattern and should be avoided.
       * @param property {string}
       * @param value {any}
       * @param old {any}
       */
      // tslint:disable-next-line no-any

    }, {
      key: "_shouldPropertyChange",
      value: function _shouldPropertyChange(property, value, old) {
        var change = _get(_getPrototypeOf(LitElement.prototype), "_shouldPropertyChange", this).call(this, property, value, old);

        if (change && this.__isChanging) {
          console.trace("Setting properties in response to other properties changing " + "considered harmful. Setting '".concat(property, "' from ") + "'".concat(this._getProperty(property), "' to '").concat(value, "'."));
        }

        return change;
      }
      /**
       * Implement to describe the DOM which should be rendered in the element.
       * Ideally, the implementation is a pure function using only props to describe
       * the element template. The implementation must return a `lit-html`
       * TemplateResult. By default this template is rendered into the element's
       * shadowRoot. This can be customized by implementing `_createRoot`. This
       * method must be implemented.
       * @param {*} _props Current element properties
       * @returns {TemplateResult} Must return a lit-html TemplateResult.
       */

    }, {
      key: "_render",
      value: function _render(_props) {
        throw new Error('_render() not implemented');
      }
      /**
       * Renders the given lit-html template `result` into the given `node`.
       * Implement to customize the way rendering is applied. This is should not
       * typically be needed and is provided for advanced use cases.
       * @param result {TemplateResult} `lit-html` template result to render
       * @param node {Element|DocumentFragment} node into which to render
       */

    }, {
      key: "_applyRender",
      value: function _applyRender(result, node) {
        render$1(result, node, this.localName);
      }
      /**
       * Called after element DOM has been rendered. Implement to
       * directly control rendered DOM. Typically this is not needed as `lit-html`
       * can be used in the `_render` method to set properties, attributes, and
       * event listeners. However, it is sometimes useful for calling methods on
       * rendered elements, like calling `focus()` on an element to focus it.
       * @param _props Current element properties
       * @param _changedProps Changing element properties
       * @param _prevProps Previous element properties
       */

    }, {
      key: "_didRender",
      value: function _didRender(_props, _changedProps, _prevProps) {}
      /**
       * Call to request the element to asynchronously re-render regardless
       * of whether or not any property changes are pending.
       */

    }, {
      key: "requestRender",
      value: function requestRender() {
        this._invalidateProperties();
      }
      /**
       * Override which provides tracking of invalidated state.
       */

    }, {
      key: "_invalidateProperties",
      value: function _invalidateProperties() {
        this.__isInvalid = true;

        _get(_getPrototypeOf(LitElement.prototype), "_invalidateProperties", this).call(this);
      }
      /**
       * Returns a promise which resolves after the element next renders.
       * The promise resolves to `true` if the element rendered and `false` if the
       * element did not render.
       * This is useful when users (e.g. tests) need to react to the rendered state
       * of the element after a change is made.
       * This can also be useful in event handlers if it is desireable to wait
       * to send an event until after rendering. If possible implement the
       * `_didRender` method to directly respond to rendering within the
       * rendering lifecycle.
       */

    }, {
      key: "renderComplete",
      get: function get$$1() {
        var _this2 = this;

        if (!this.__renderComplete) {
          this.__renderComplete = new Promise(function (resolve) {
            _this2.__resolveRenderComplete = function (value) {
              _this2.__resolveRenderComplete = _this2.__renderComplete = null;
              resolve(value);
            };
          });

          if (!this.__isInvalid && this.__resolveRenderComplete) {
            Promise.resolve().then(function () {
              return _this2.__resolveRenderComplete(false);
            });
          }
        }

        return this.__renderComplete;
      }
    }]);

    return LitElement;
  }(PropertiesMixin(HTMLElement));

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var keyMapCache = new WeakMap();

  function cleanMap(part, key, map) {
    if (!part.startNode.parentNode) {
      map.delete(key);
    }
  }

  function repeat(items, keyFnOrTemplate, template) {
    var keyFn;

    if (arguments.length === 2) {
      template = keyFnOrTemplate;
    } else if (arguments.length === 3) {
      keyFn = keyFnOrTemplate;
    }

    return directive(function (part) {
      var keyMap = keyMapCache.get(part);

      if (keyMap === undefined) {
        keyMap = new Map();
        keyMapCache.set(part, keyMap);
      }

      var container = part.startNode.parentNode;
      var index = -1;
      var currentMarker = part.startNode.nextSibling;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          var result = void 0;
          var key = void 0;

          try {
            ++index;
            result = template(item, index);
            key = keyFn ? keyFn(item) : index;
          } catch (e) {
            console.error(e);
            continue;
          } // Try to reuse a part


          var itemPart = keyMap.get(key);

          if (itemPart === undefined) {
            var marker = document.createTextNode('');
            var endNode = document.createTextNode('');
            container.insertBefore(marker, currentMarker);
            container.insertBefore(endNode, currentMarker);
            itemPart = new NodePart(part.instance, marker, endNode);

            if (key !== undefined) {
              keyMap.set(key, itemPart);
            }
          } else if (currentMarker !== itemPart.startNode) {
            // Existing part in the wrong position
            var end = itemPart.endNode.nextSibling;

            if (currentMarker !== end) {
              reparentNodes(container, itemPart.startNode, end, currentMarker);
            }
          } else {
            // else part is in the correct position already
            currentMarker = itemPart.endNode.nextSibling;
          }

          itemPart.setValue(result);
        } // Cleanup

      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (currentMarker !== part.endNode) {
        removeNodes(container, currentMarker, part.endNode);
        keyMap.forEach(cleanMap);
      }
    });
  }

  function _templateObject4() {
    var data = _taggedTemplateLiteral(["\n                    <my-child obj=", "></my-child>\n                "]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    var data = _taggedTemplateLiteral(["\n            <my-slot>\n                ", "\n            </my-slot>\n        "]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    var data = _taggedTemplateLiteral(["\n            <slot></slot>\n        "]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    var data = _taggedTemplateLiteral(["\n            <span>", "</span>\n        "]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  var MyChild =
  /*#__PURE__*/
  function (_LitElement) {
    _inherits(MyChild, _LitElement);

    _createClass(MyChild, null, [{
      key: "properties",
      get: function get() {
        return {
          obj: Object
        };
      }
    }]);

    function MyChild() {
      _classCallCheck(this, MyChild);

      return _possibleConstructorReturn(this, _getPrototypeOf(MyChild).call(this));
    }

    _createClass(MyChild, [{
      key: "_render",
      value: function _render(_ref) {
        var obj = _ref.obj;
        return html$1(_templateObject(), obj.val);
      }
    }]);

    return MyChild;
  }(LitElement);

  var MySlot =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MySlot, _LitElement2);

    _createClass(MySlot, null, [{
      key: "properties",
      get: function get() {
        return {};
      }
    }]);

    function MySlot() {
      _classCallCheck(this, MySlot);

      return _possibleConstructorReturn(this, _getPrototypeOf(MySlot).call(this));
    }

    _createClass(MySlot, [{
      key: "_render",
      value: function _render(_ref2) {
        _objectDestructuringEmpty(_ref2);

        return html$1(_templateObject2());
      }
    }]);

    return MySlot;
  }(LitElement);

  var MyElement =
  /*#__PURE__*/
  function (_LitElement3) {
    _inherits(MyElement, _LitElement3);

    _createClass(MyElement, null, [{
      key: "properties",
      get: function get() {
        return {
          array: Array,
          bool: Boolean
        };
      }
    }]);

    function MyElement() {
      _classCallCheck(this, MyElement);

      return _possibleConstructorReturn(this, _getPrototypeOf(MyElement).call(this));
    }

    _createClass(MyElement, [{
      key: "_render",
      value: function _render(_ref3) {
        var bool = _ref3.bool,
            array = _ref3.array;
        array = array || [{
          val: 1
        }];
        return html$1(_templateObject3(), repeat(array, function (i) {
          return i;
        }, function (i) {
          return html$1(_templateObject4(), i);
        }));
        /*return html`
            <my-slot>
                ${array.map(i=>html`
                    <my-child obj=${i}></my-child>
                `)}
            </my-slot>
        `;*/
      }
    }]);

    return MyElement;
  }(LitElement);

  customElements.define('my-element', MyElement);
  customElements.define('my-child', MyChild);
  customElements.define('my-slot', MySlot);
  console.log('hi');

}());
