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

var _excluded$4 = ["allowMultiple", "transition", "transitionTimeout"];

var getTransition = function getTransition(transition, name) {
  return transition === true || !!(transition && transition[name]);
};

var useAccordionProvider = function useAccordionProvider(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      allowMultiple = _ref.allowMultiple,
      transition = _ref.transition,
      transitionTimeout = _ref.transitionTimeout,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);

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

var mergeProps = function mergeProps(target, source) {
  if (!source) return target;

  var result = _extends({}, target);

  Object.keys(source).forEach(function (key) {
    var targetProp = target[key];
    var sourceProp = source[key];

    if (typeof sourceProp === 'function' && targetProp) {
      result[key] = function () {
        targetProp.apply(void 0, arguments);
        sourceProp.apply(void 0, arguments);
      };
    } else {
      result[key] = sourceProp;
    }
  });
  return result;
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

var _excluded$3 = ["providerValue", "className"];
var ControlledAccordion = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var providerValue = _ref.providerValue,
      className = _ref.className,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  var _useAccordion = useAccordion(),
      accordionProps = _useAccordion.accordionProps;

  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider, {
    value: providerValue,
    children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, mergeProps(accordionProps, rest), {
      ref: ref,
      className: bem(ACCORDION_BLOCK, undefined, undefined, className)
    }))
  });
});
ControlledAccordion.displayName = 'ControlledAccordion';

var _excluded$2 = ["allowMultiple", "initialEntered", "mountOnEnter", "unmountOnExit", "transition", "transitionTimeout", "onStateChange"];
var Accordion = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
  var allowMultiple = _ref.allowMultiple,
      initialEntered = _ref.initialEntered,
      mountOnEnter = _ref.mountOnEnter,
      unmountOnExit = _ref.unmountOnExit,
      transition = _ref.transition,
      transitionTimeout = _ref.transitionTimeout,
      onStateChange = _ref.onStateChange,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);

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

var useAccordionItem = function useAccordionItem(_ref) {
  var _buttonProps;

  var state = _ref.state,
      toggle = _ref.toggle;
  var buttonId = _useId();
  var panelId = _useId();
  var buttonProps = (_buttonProps = {
    id: buttonId
  }, _buttonProps[ACCORDION_BTN_ATTR] = '', _buttonProps['aria-controls'] = panelId, _buttonProps['aria-expanded'] = state.isEnter, _buttonProps.onClick = toggle, _buttonProps);
  var panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    buttonProps: buttonProps,
    panelProps: panelProps
  };
};

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? react.useLayoutEffect : react.useEffect;

var useHeightTransition = function useHeightTransition(_ref) {
  var status = _ref.status,
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

    status === 'preEnter' && setHeight((_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.getBoundingClientRect().height);
  }, [status]);
  var style = {
    height: status === 'preEnter' || status === 'exiting' ? 0 : status === 'entering' || status === 'preExit' ? _height : undefined,
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

function getItemState(providerValue, key, itemInitialEntered) {
  var stateMap = providerValue.stateMap,
      mountOnEnter = providerValue.mountOnEnter,
      initialEntered = providerValue.initialEntered;

  var _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;

  return stateMap.get(key) || {
    status: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
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

var useAccordionItemState = function useAccordionItemState(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      itemKey = _ref.itemKey,
      initialEntered = _ref.initialEntered;

  var itemRef = react.useRef(null);
  var context = useAccordionContext();
  var key = itemKey != null ? itemKey : itemRef.current;
  var state = getItemState(context, key, initialEntered);
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
  return {
    itemRef: itemRef,
    state: state,
    toggle: react.useCallback(function (toEnter) {
      return toggle(key, toEnter);
    }, [toggle, key])
  };
};

var _excluded$1 = ["itemKey", "initialEntered"];

var withAccordionItemState = function withAccordionItemState(WrappedItem) {
  var WithAccordionItemState = /*#__PURE__*/react.forwardRef(function (_ref, ref) {
    var itemKey = _ref.itemKey,
        initialEntered = _ref.initialEntered,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);

    return /*#__PURE__*/jsxRuntime.jsx(WrappedItem, _extends({
      forwardedRef: ref
    }, rest, useAccordionItemState({
      itemKey: itemKey,
      initialEntered: initialEntered
    })));
  });
  WithAccordionItemState.displayName = 'WithAccordionItemState';
  return WithAccordionItemState;
};

var _excluded = ["forwardedRef", "itemRef", "state", "toggle", "className", "header", "headingProps", "buttonProps", "contentProps", "panelProps", "children"];

var getRenderNode = function getRenderNode(nodeOrFunc, props) {
  return typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
};

var WrappedItem = /*#__PURE__*/react.memo(function (_ref) {
  var forwardedRef = _ref.forwardedRef,
      itemRef = _ref.itemRef,
      state = _ref.state,
      toggle = _ref.toggle,
      className = _ref.className,
      header = _ref.header,
      headingProps = _ref.headingProps,
      buttonProps = _ref.buttonProps,
      contentProps = _ref.contentProps,
      panelProps = _ref.panelProps,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded);

  var itemState = {
    state: state,
    toggle: toggle
  };

  var _useAccordionItem = useAccordionItem(itemState),
      _buttonProps = _useAccordionItem.buttonProps,
      _panelProps = _useAccordionItem.panelProps;

  var _useHeightTransition = useHeightTransition(state),
      transitionStyle = _useHeightTransition[0],
      _panelRef = _useHeightTransition[1];

  var panelRef = useMergeRef(panelProps && panelProps.ref, _panelRef);
  var status = state.status,
      isMounted = state.isMounted,
      isEnter = state.isEnter;
  var modifiers = {
    status: status,
    expanded: isEnter
  };
  return /*#__PURE__*/jsxRuntime.jsxs("div", _extends({}, rest, {
    ref: useMergeRef(forwardedRef, itemRef),
    className: bem(ACCORDION_BLOCK, 'item', modifiers, className, true),
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", _extends({}, headingProps, {
      style: _extends({
        margin: 0
      }, headingProps && headingProps.style),
      className: bem(ACCORDION_BLOCK, 'item-heading', modifiers, headingProps && headingProps.className),
      children: /*#__PURE__*/jsxRuntime.jsx("button", _extends({}, mergeProps(_buttonProps, buttonProps), {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'item-btn', modifiers, buttonProps && buttonProps.className),
        children: getRenderNode(header, itemState)
      }))
    })), isMounted && /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: status === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps && contentProps.style),
      className: bem(ACCORDION_BLOCK, 'item-content', modifiers, contentProps && contentProps.className),
      children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, mergeProps(_panelProps, panelProps), {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'item-panel', modifiers, panelProps && panelProps.className),
        children: getRenderNode(children, itemState)
      }))
    }))]
  }));
});
WrappedItem.displayName = 'AccordionItem';
var AccordionItem = /*#__PURE__*/withAccordionItemState(WrappedItem);

var useAccordionState = function useAccordionState() {
  var context = useAccordionContext();
  return {
    getItemState: function getItemState$1(key, _temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          initialEntered = _ref.initialEntered;

      return getItemState(context, key, initialEntered);
    },
    toggle: context.toggle
  };
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionProvider = AccordionProvider;
exports.ControlledAccordion = ControlledAccordion;
exports.useAccordion = useAccordion;
exports.useAccordionItem = useAccordionItem;
exports.useAccordionItemState = useAccordionItemState;
exports.useAccordionProvider = useAccordionProvider;
exports.useAccordionState = useAccordionState;
exports.useHeightTransition = useHeightTransition;
exports.useMergeRef = useMergeRef;
exports.withAccordionItemState = withAccordionItemState;
