'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');
var reactTransitionState = require('react-transition-state');
var jsxRuntime = require('react/jsx-runtime');

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _excluded$3 = ["allowMultiple", "transition", "transitionTimeout"];

var getTransition = function getTransition(transition, name) {
  return transition === true || !!(transition && transition[name]);
};

var useAccordionProvider = function useAccordionProvider(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      allowMultiple = _ref.allowMultiple,
      transition = _ref.transition,
      transitionTimeout = _ref.transitionTimeout,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var transitionMap = reactTransitionState.useTransitionMap(_extends({
    singleEnter: !allowMultiple,
    timeout: transitionTimeout,
    enter: getTransition(transition, 'enter'),
    exit: getTransition(transition, 'exit'),
    preEnter: getTransition(transition, 'preEnter'),
    preExit: getTransition(transition, 'preExit')
  }, rest));
  return _extends({
    mountOnEnter: !!rest.mountOnEnter,
    initialEntered: !!rest.initialEntered
  }, transitionMap);
};

var ACCORDION_BLOCK = 'szh-accordion';
var ACCORDION_PREFIX = 'szh-adn';
var ACCORDION_ATTR = "data-" + ACCORDION_PREFIX;
var ACCORDION_BTN_ATTR = "data-" + ACCORDION_PREFIX + "-btn";
var AccordionContext = /*#__PURE__*/react.createContext({});

var bem = function bem(block, element, modifiers, className, addModifier) {
  var blockElement = element ? block + "__" + element : block;
  var classString = blockElement;
  if (addModifier && modifiers) for (var _i2 = 0, _Object$keys2 = Object.keys(modifiers); _i2 < _Object$keys2.length; _i2++) {
    var name = _Object$keys2[_i2];
    var value = modifiers[name];
    if (value) classString += " " + blockElement + "--" + (value === true ? name : name + "-" + value);
  }
  var expandedClassName = typeof className === 'function' ? className(modifiers) : className;

  if (typeof expandedClassName === 'string') {
    expandedClassName = expandedClassName.trim();
    if (expandedClassName) classString += " " + expandedClassName;
  }

  return classString;
};

var AccordionProvider = function AccordionProvider(props) {
  return /*#__PURE__*/jsxRuntime.jsx(AccordionContext.Provider, _extends({}, props));
};

var getAccordion = function getAccordion(node) {
  do {
    node = node.parentElement;
  } while (node && !node.hasAttribute(ACCORDION_ATTR));

  return node;
};

var getNextIndex = function getNextIndex(moveUp, current, length) {
  return moveUp ? current > 0 ? current - 1 : length - 1 : (current + 1) % length;
};

var moveFocus = function moveFocus(moveUp, e) {
  var _document = document,
      activeElement = _document.activeElement;
  if (!activeElement || !activeElement.hasAttribute(ACCORDION_BTN_ATTR) || getAccordion(activeElement) !== e.currentTarget) return;
  var nodes = e.currentTarget.querySelectorAll("[" + ACCORDION_BTN_ATTR + "]");
  var length = nodes.length;

  for (var i = 0; i < length; i++) {
    if (nodes[i] === activeElement) {
      var next = getNextIndex(moveUp, i, length);

      while (getAccordion(nodes[i]) !== getAccordion(nodes[next])) {
        next = getNextIndex(moveUp, next, length);
      }

      if (i !== next) {
        e.preventDefault();
        nodes[next].focus();
      }

      break;
    }
  }
};

var useAccordion = function useAccordion() {
  var _accordionProps;

  var accordionProps = (_accordionProps = {}, _accordionProps[ACCORDION_ATTR] = '', _accordionProps.onKeyDown = function onKeyDown(e) {
    return e.key === 'ArrowUp' ? moveFocus(true, e) : e.key === 'ArrowDown' && moveFocus(false, e);
  }, _accordionProps);
  return {
    accordionProps: accordionProps
  };
};

var _excluded$2 = ["providerValue", "className"];
var ControlledAccordion = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var providerValue = _ref.providerValue,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider, {
    value: providerValue,
    children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, rest, accordionProps, {
      ref: ref,
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }))
  });
});
ControlledAccordion.displayName = 'ControlledAccordion';

var _excluded$1 = ["allowMultiple", "initialEntered", "mountOnEnter", "unmountOnExit", "transition", "transitionTimeout", "onStateChange"];
var Accordion = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var allowMultiple = _ref.allowMultiple,
      initialEntered = _ref.initialEntered,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      transition = _ref.transition,
      transitionTimeout = _ref.transitionTimeout,
      onStateChange = _ref.onStateChange,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  var providerValue = useAccordionProvider({
    allowMultiple: allowMultiple,
    initialEntered: initialEntered,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit,
    transition: transition,
    transitionTimeout: transitionTimeout,
    onStateChange: onStateChange
  });
  return /*#__PURE__*/jsxRuntime.jsx(ControlledAccordion, _extends({}, rest, {
    ref: ref,
    providerValue: providerValue
  }));
});
Accordion.displayName = 'Accordion';

var current = 0;

var useIdShim = function useIdShim() {
  var _useState = react.useState(),
      id = _useState[0],
      setId = _useState[1];

  react.useEffect(function () {
    return setId(++current);
  }, []);
  return id && ACCORDION_PREFIX + "-" + id;
};

var _useId = react.useId || useIdShim;

function getItemStates(providerValue, key, itemInitialEntered) {
  var stateMap = providerValue.stateMap,
      mountOnEnter = providerValue.mountOnEnter,
      initialEntered = providerValue.initialEntered;

  var _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;

  return stateMap.get(key) || {
    state: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: _initialEntered,
    isResolved: true
  };
}

var useAccordionContext = function useAccordionContext() {
  var context = react.useContext(AccordionContext);

  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error('[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.');
  }

  return context;
};

var useAccordionItem = function useAccordionItem(_temp) {
  var _buttonProps;

  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered;

  var itemRef = react.useRef(null);
  var context = useAccordionContext();
  var setItem = context.setItem,
      deleteItem = context.deleteItem,
      toggle = context.toggle;
  react.useEffect(function () {
    var key = itemKey != null ? itemKey : itemRef.current;
    setItem(key, {
      initialEntered: initialEntered
    });
    return function () {
      return void deleteItem(key);
    };
  }, [setItem, deleteItem, itemKey, initialEntered]);
  var key = itemKey != null ? itemKey : itemRef.current;
  var states = getItemStates(context, key, initialEntered);

  var toggleItem = function toggleItem(toEnter) {
    return toggle(key, toEnter);
  };

  var buttonId = _useId();
  var panelId = _useId();
  var buttonProps = (_buttonProps = {
    id: buttonId
  }, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps['aria-controls'] = panelId, _buttonProps['aria-expanded'] = states.isEnter, _buttonProps.onClick = toggleItem, _buttonProps);
  var panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    itemRef: itemRef,
    states: states,
    buttonProps: buttonProps,
    panelProps: panelProps,
    toggle: toggleItem
  };
};

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

var useHeightTransition = function useHeightTransition(_ref) {
  var state = _ref.state,
      isResolved = _ref.isResolved;

  var _useState = react.useState(),
      _height = _useState[0],
      setHeight = _useState[1];

  var elementRef = react.useRef(null);
  var resizeObserver = react.useRef();
  var cbRef = react.useCallback(function (element) {
    var _resizeObserver$curre;

    elementRef.current = element;
    if (typeof ResizeObserver !== 'function') return;
    (_resizeObserver$curre = resizeObserver.current) == null ? void 0 : _resizeObserver$curre.disconnect();
    resizeObserver.current = undefined;

    if (element) {
      var observer = new ResizeObserver(function () {
        var _element$getBoundingC = element.getBoundingClientRect(),
            height = _element$getBoundingC.height;

        height && setHeight(height);
      });
      observer.observe(element, {
        box: 'border-box'
      });
      resizeObserver.current = observer;
    }
  }, []);
  useIsomorphicLayoutEffect(function () {
    var _elementRef$current;

    state === 'preEnter' && setHeight((_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.getBoundingClientRect().height);
  }, [state]);
  var style = {
    height: state === 'preEnter' || state === 'exiting' ? 0 : state === 'entering' || state === 'preExit' ? _height : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, cbRef, elementRef];
};

function setRef(ref, instance) {
  typeof ref === 'function' ? ref(instance) : ref.current = instance;
}

function useMergeRef(refA, refB) {
  return react.useMemo(function () {
    if (!refA) return refB;
    if (!refB) return refA;
    return function (instance) {
      setRef(refA, instance);
      setRef(refB, instance);
    };
  }, [refA, refB]);
}

var _excluded = ["itemKey", "initialEntered", "className", "header", "headerProps", "buttonProps", "contentProps", "panelProps", "children"];

var getRenderNode = function getRenderNode(nodeOrFunc, props) {
  return typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
};

var AccordionItem = /*#__PURE__*/react.forwardRef(function (_ref, forwardedRef) {
  var itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered,
      className = _ref.className,
      header = _ref.header,
      headerProps = _ref.headerProps,
      buttonProps = _ref.buttonProps,
      contentProps = _ref.contentProps,
      panelProps = _ref.panelProps,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useAccordionItem = useAccordionItem({
    itemKey: itemKey,
    initialEntered: initialEntered
  }),
      itemRef = _useAccordionItem.itemRef,
      states = _useAccordionItem.states,
      toggle = _useAccordionItem.toggle,
      _buttonProps = _useAccordionItem.buttonProps,
      _panelProps = _useAccordionItem.panelProps;

  var _useHeightTransition = useHeightTransition(states),
      transitionStyle = _useHeightTransition[0],
      _panelRef = _useHeightTransition[1];

  var panelRef = useMergeRef(panelProps == null ? void 0 : panelProps.ref, _panelRef);
  var state = states.state,
      isMounted = states.isMounted,
      isEnter = states.isEnter;
  var modifiers = {
    state: state,
    expanded: isEnter
  };
  var renderProps = {
    states: states,
    toggle: toggle
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", _extends({}, rest, {
    ref: useMergeRef(forwardedRef, itemRef),
    className: bem(ACCORDION_BLOCK, 'item', modifiers, className, true),
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", _extends({}, headerProps, {
      style: _extends({
        margin: 0
      }, headerProps == null ? void 0 : headerProps.style),
      className: bem(ACCORDION_BLOCK, 'header', modifiers, headerProps == null ? void 0 : headerProps.className),
      children: /*#__PURE__*/jsxRuntime.jsx("button", _extends({}, buttonProps, _buttonProps, {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'btn', modifiers, buttonProps == null ? void 0 : buttonProps.className),
        children: getRenderNode(header, renderProps)
      }))
    })), isMounted && /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: state === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps == null ? void 0 : contentProps.style),
      className: bem(ACCORDION_BLOCK, 'content', modifiers, contentProps == null ? void 0 : contentProps.className),
      children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, panelProps, _panelProps, {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'panel', modifiers, panelProps == null ? void 0 : panelProps.className),
        children: getRenderNode(children, renderProps)
      }))
    }))]
  }));
});
AccordionItem.displayName = 'AccordionItem';

var useAccordionState = function useAccordionState() {
  var context = useAccordionContext();
  return {
    getItemStates: function getItemStates$1(key, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          initialEntered = _ref.initialEntered;

      return getItemStates(context, key, initialEntered);
    },
    toggle: context.toggle
  };
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.ControlledAccordion = ControlledAccordion;
exports.useAccordionProvider = useAccordionProvider;
exports.useAccordionState = useAccordionState;
