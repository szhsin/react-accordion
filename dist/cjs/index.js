'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactTransitionState = require('react-transition-state');
var react = require('react');
var jsxRuntime = require('react/jsx-runtime');

var AccordionContext = /*#__PURE__*/react.createContext({});

var AccordionProvider = function AccordionProvider(_ref) {
  var children = _ref.children;
  var transitionMap = reactTransitionState.useTransitionMap({
    singleEnter: true
  });
  return /*#__PURE__*/jsxRuntime.jsx(AccordionContext.Provider, {
    value: transitionMap,
    children: children
  });
};

var Accordion = function Accordion(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider, {
    children: /*#__PURE__*/jsxRuntime.jsx("div", {
      children: children
    })
  });
};

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

var _excluded = ["stateMap", "setItem", "deleteItem"];

var useAccordionItem = function useAccordionItem() {
  var ref = react.useRef(null);

  var _useContext = react.useContext(AccordionContext),
      stateMap = _useContext.stateMap,
      setItem = _useContext.setItem,
      deleteItem = _useContext.deleteItem,
      rest = _objectWithoutPropertiesLoose(_useContext, _excluded);

  if (process.env.NODE_ENV !== 'production' && !stateMap) {
    throw new Error("[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.");
  }

  react.useEffect(function () {
    var item = ref.current;
    setItem(item, {
      preEnter: true,
      preExit: true,
      timeout: 250,
      initialEntered: false
    });
    return function () {
      return void deleteItem(item);
    };
  }, [setItem, deleteItem]);
  return _extends({
    itemRef: ref,
    state: stateMap.get(ref.current)
  }, rest);
};

var useTransitionHeight = function useTransitionHeight(state) {
  var _useState = react.useState(),
      height = _useState[0],
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

        console.log('Observer1', height);
        height && setHeight(height);
      });
      observer.observe(element, {
        box: 'border-box'
      });
      resizeObserver.current = observer;
    }
  }, []);
  react.useLayoutEffect(function () {
    if (state === 'preEnter') {
      var _elementRef$current;

      var _height = (_elementRef$current = elementRef.current) == null ? void 0 : _elementRef$current.getBoundingClientRect().height;

      console.log('height', _height);
      setHeight(_height);
    }
  }, [state]);
  return [height, cbRef, elementRef];
};

var AccordionItem = function AccordionItem(_ref) {
  var header = _ref.header,
      children = _ref.children;

  var _useAccordionItem = useAccordionItem(),
      itemRef = _useAccordionItem.itemRef,
      toggle = _useAccordionItem.toggle,
      _useAccordionItem$sta = _useAccordionItem.state;

  _useAccordionItem$sta = _useAccordionItem$sta === void 0 ? {} : _useAccordionItem$sta;
  var state = _useAccordionItem$sta.state;
  var hidden = !state || state === 'exited';

  var _useTransitionHeight = useTransitionHeight(state),
      height = _useTransitionHeight[0],
      panelRef = _useTransitionHeight[1];

  console.log('state', state);
  return /*#__PURE__*/jsxRuntime.jsxs("div", {
    ref: itemRef,
    children: [/*#__PURE__*/jsxRuntime.jsx("h3", {
      style: {
        margin: 0
      },
      children: /*#__PURE__*/jsxRuntime.jsx("button", {
        onClick: function onClick() {
          return toggle(itemRef.current);
        },
        children: header
      })
    }), /*#__PURE__*/jsxRuntime.jsx("div", {
      role: "region",
      className: state,
      style: {
        display: hidden ? 'none' : 'block',
        height: state === 'exiting' || state === 'preEnter' ? 0 : state === 'preExit' || state === 'entering' ? height : undefined,
        transition: 'height .25s ease-in-out',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/jsxRuntime.jsx("div", {
        ref: panelRef,
        style: {
          padding: '1rem'
        },
        children: children
      })
    })]
  });
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.useAccordionItem = useAccordionItem;
