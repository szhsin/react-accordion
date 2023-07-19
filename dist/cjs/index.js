'use strict';

var React = require('react');
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

const _excluded$4 = ["transition", "transitionTimeout"];
const getTransition = (transition, name) => transition === true || !!(transition && transition[name]);
const useAccordionProvider = (_ref = {}) => {
  let {
      transition,
      transitionTimeout
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);
  const transitionMap = reactTransitionState.useTransitionMap(_extends({
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

const ACCORDION_BLOCK = 'szh-accordion';
const ACCORDION_PREFIX = 'szh-adn';
const ACCORDION_ATTR = `data-${ACCORDION_PREFIX}`;
const ACCORDION_BTN_ATTR = `data-${ACCORDION_PREFIX}-btn`;
const AccordionContext = /*#__PURE__*/React.createContext({});

const bem = (block, element, modifiers) => (className, props) => {
  const blockElement = element ? `${block}__${element}` : block;
  let classString = blockElement;
  modifiers && Object.keys(modifiers).forEach(name => {
    const value = modifiers[name];
    if (value) classString += ` ${blockElement}--${value === true ? name : `${name}-${value}`}`;
  });
  let expandedClassName = typeof className === 'function' ? className(props) : className;
  if (typeof expandedClassName === 'string') {
    expandedClassName = expandedClassName.trim();
    if (expandedClassName) classString += ` ${expandedClassName}`;
  }
  return classString;
};

const mergeProps = (target, source) => {
  if (!source) return target;
  const result = _extends({}, target);
  Object.keys(source).forEach(key => {
    const targetProp = target[key];
    const sourceProp = source[key];
    if (typeof sourceProp === 'function' && targetProp) {
      result[key] = (...e) => {
        targetProp(...e);
        sourceProp(...e);
      };
    } else {
      result[key] = sourceProp;
    }
  });
  return result;
};

const AccordionProvider = props => /*#__PURE__*/jsxRuntime.jsx(AccordionContext.Provider, _extends({}, props));

const getAccordion = node => {
  do {
    node = node.parentElement;
  } while (node && !node.hasAttribute(ACCORDION_ATTR));
  return node;
};
const getNextIndex = (moveUp, current, length) => moveUp ? current > 0 ? current - 1 : length - 1 : (current + 1) % length;
const moveFocus = (moveUp, e) => {
  const {
    activeElement
  } = document;
  if (!activeElement || !activeElement.hasAttribute(ACCORDION_BTN_ATTR) || getAccordion(activeElement) !== e.currentTarget) return;
  const nodes = e.currentTarget.querySelectorAll(`[${ACCORDION_BTN_ATTR}]`);
  const {
    length
  } = nodes;
  for (let i = 0; i < length; i++) {
    if (nodes[i] === activeElement) {
      let next = getNextIndex(moveUp, i, length);
      while (getAccordion(nodes[i]) !== getAccordion(nodes[next])) next = getNextIndex(moveUp, next, length);
      if (i !== next) {
        e.preventDefault();
        nodes[next].focus();
      }
      break;
    }
  }
};
const useAccordion = () => {
  const accordionProps = {
    [ACCORDION_ATTR]: '',
    onKeyDown: e => e.key === 'ArrowUp' ? moveFocus(true, e) : e.key === 'ArrowDown' && moveFocus(false, e)
  };
  return {
    accordionProps
  };
};

const _excluded$3 = ["providerValue", "className"];
const ControlledAccordion = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
      providerValue,
      className
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
  const {
    accordionProps
  } = useAccordion();
  return /*#__PURE__*/jsxRuntime.jsx(AccordionProvider, {
    value: providerValue,
    children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, mergeProps(accordionProps, rest), {
      ref: ref,
      className: bem(ACCORDION_BLOCK)(className)
    }))
  });
});
ControlledAccordion.displayName = 'ControlledAccordion';

const _excluded$2 = ["allowMultiple", "initialEntered", "mountOnEnter", "unmountOnExit", "transition", "transitionTimeout", "onStateChange"];
const Accordion = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
      allowMultiple,
      initialEntered,
      mountOnEnter,
      unmountOnExit,
      transition,
      transitionTimeout,
      onStateChange
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);
  const providerValue = useAccordionProvider({
    allowMultiple,
    initialEntered,
    mountOnEnter,
    unmountOnExit,
    transition,
    transitionTimeout,
    onStateChange
  });
  return /*#__PURE__*/jsxRuntime.jsx(ControlledAccordion, _extends({}, rest, {
    ref: ref,
    providerValue: providerValue
  }));
});
Accordion.displayName = 'Accordion';

let current = 0;
const useIdShim = () => {
  const [id, setId] = React.useState();
  React.useEffect(() => setId(++current), []);
  return id && `${ACCORDION_PREFIX}-${id}`;
};
const useId = React.useId || useIdShim;

const useAccordionItem = ({
  state,
  toggle,
  disabled
}) => {
  const buttonId = useId();
  const panelId = buttonId && buttonId + '-';
  const buttonProps = {
    id: buttonId,
    'aria-controls': panelId,
    'aria-expanded': state.isEnter,
    onClick: toggle
  };
  disabled ? buttonProps.disabled = true : buttonProps[ACCORDION_BTN_ATTR] = '';
  const panelProps = {
    id: panelId,
    'aria-labelledby': buttonId,
    role: 'region'
  };
  return {
    buttonProps,
    panelProps
  };
};

const useIsomorphicLayoutEffect = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined' ? React.useLayoutEffect : React.useEffect;

const useHeightTransition = ({
  status,
  isResolved
}) => {
  const [height, setHeight] = React.useState();
  const elementRef = React.useRef(null);
  useIsomorphicLayoutEffect(() => {
    (status === 'preEnter' || status === 'preExit') && setHeight(elementRef.current.getBoundingClientRect().height);
  }, [status]);
  const style = {
    height: status === 'preEnter' || status === 'exiting' ? 0 : status === 'entering' || status === 'preExit' ? height : undefined,
    overflow: isResolved ? undefined : 'hidden'
  };
  return [style, elementRef];
};

function setRef(ref, instance) {
  typeof ref === 'function' ? ref(instance) : ref.current = instance;
}
function useMergeRef(refA, refB) {
  return React.useMemo(() => {
    if (!refA) return refB;
    if (!refB) return refA;
    return instance => {
      setRef(refA, instance);
      setRef(refB, instance);
    };
  }, [refA, refB]);
}

const getItemState = (providerValue, key, itemInitialEntered) => {
  const {
    stateMap,
    mountOnEnter,
    initialEntered
  } = providerValue;
  const _initialEntered = itemInitialEntered != null ? itemInitialEntered : initialEntered;
  return stateMap.get(key) || {
    status: _initialEntered ? 'entered' : mountOnEnter ? 'unmounted' : 'exited',
    isMounted: !mountOnEnter,
    isEnter: _initialEntered,
    isResolved: true
  };
};
const useAccordionContext = () => {
  const context = React.useContext(AccordionContext);
  if (process.env.NODE_ENV !== 'production' && !context.stateMap) {
    throw new Error('[React-Accordion] Cannot find a <AccordionProvider/> above this AccordionItem.');
  }
  return context;
};

const useAccordionItemEffect = ({
  itemKey,
  initialEntered,
  disabled
} = {}) => {
  const itemRef = React.useRef(null);
  const context = useAccordionContext();
  const key = itemKey != null ? itemKey : itemRef.current;
  const state = getItemState(context, key, initialEntered);
  const {
    setItem,
    deleteItem,
    toggle
  } = context;
  React.useEffect(() => {
    if (disabled) return;
    const key = itemKey != null ? itemKey : itemRef.current;
    setItem(key, {
      initialEntered
    });
    return () => void deleteItem(key);
  }, [setItem, deleteItem, itemKey, initialEntered, disabled]);
  return {
    itemRef,
    state,
    toggle: React.useCallback(toEnter => toggle(key, toEnter), [toggle, key])
  };
};

const _excluded$1 = ["itemKey", "initialEntered"];
const withAccordionItem = WrappedItem => {
  const WithAccordionItem = /*#__PURE__*/React.forwardRef((_ref, ref) => {
    let {
        itemKey,
        initialEntered
      } = _ref,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
    return /*#__PURE__*/jsxRuntime.jsx(WrappedItem, _extends({
      forwardedRef: ref
    }, rest, useAccordionItemEffect({
      itemKey,
      initialEntered,
      disabled: rest.disabled
    })));
  });
  WithAccordionItem.displayName = 'WithAccordionItem';
  return WithAccordionItem;
};

const _excluded = ["forwardedRef", "itemRef", "state", "toggle", "className", "disabled", "header", "headingTag", "headingProps", "buttonProps", "contentProps", "panelProps", "children"];
const getRenderNode = (nodeOrFunc, props) => typeof nodeOrFunc === 'function' ? nodeOrFunc(props) : nodeOrFunc;
const WrappedItem = /*#__PURE__*/React.memo(_ref => {
  let {
      forwardedRef,
      itemRef,
      state,
      toggle,
      className,
      disabled,
      header,
      headingTag: Heading = 'h3',
      headingProps,
      buttonProps,
      contentProps,
      panelProps,
      children
    } = _ref,
    rest = _objectWithoutPropertiesLoose(_ref, _excluded);
  const itemState = {
    state,
    toggle,
    disabled
  };
  const {
    buttonProps: _buttonProps,
    panelProps: _panelProps
  } = useAccordionItem(itemState);
  const [transitionStyle, _panelRef] = useHeightTransition(state);
  const panelRef = useMergeRef(panelProps && panelProps.ref, _panelRef);
  const {
    status,
    isMounted,
    isEnter
  } = state;
  return /*#__PURE__*/jsxRuntime.jsxs("div", _extends({}, rest, {
    ref: useMergeRef(forwardedRef, itemRef),
    className: bem(ACCORDION_BLOCK, 'item', {
      status,
      expanded: isEnter
    })(className, state),
    children: [/*#__PURE__*/jsxRuntime.jsx(Heading, _extends({}, headingProps, {
      style: _extends({
        margin: 0
      }, headingProps && headingProps.style),
      className: bem(ACCORDION_BLOCK, 'item-heading')(headingProps && headingProps.className, state),
      children: /*#__PURE__*/jsxRuntime.jsx("button", _extends({}, mergeProps(_buttonProps, buttonProps), {
        type: "button",
        className: bem(ACCORDION_BLOCK, 'item-btn')(buttonProps && buttonProps.className, state),
        children: getRenderNode(header, itemState)
      }))
    })), isMounted && /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, contentProps, {
      style: _extends({
        display: status === 'exited' ? 'none' : undefined
      }, transitionStyle, contentProps && contentProps.style),
      className: bem(ACCORDION_BLOCK, 'item-content')(contentProps && contentProps.className, state),
      children: /*#__PURE__*/jsxRuntime.jsx("div", _extends({}, mergeProps(_panelProps, panelProps), {
        ref: panelRef,
        className: bem(ACCORDION_BLOCK, 'item-panel')(panelProps && panelProps.className, state),
        children: getRenderNode(children, itemState)
      }))
    }))]
  }));
});
WrappedItem.displayName = 'AccordionItem';
const AccordionItem = /*#__PURE__*/withAccordionItem(WrappedItem);

const useAccordionState = () => {
  const context = useAccordionContext();
  return {
    getItemState: (key, {
      initialEntered
    } = {}) => getItemState(context, key, initialEntered),
    toggle: context.toggle,
    toggleAll: context.toggleAll
  };
};

exports.Accordion = Accordion;
exports.AccordionItem = AccordionItem;
exports.AccordionProvider = AccordionProvider;
exports.ControlledAccordion = ControlledAccordion;
exports.useAccordion = useAccordion;
exports.useAccordionItem = useAccordionItem;
exports.useAccordionItemEffect = useAccordionItemEffect;
exports.useAccordionProvider = useAccordionProvider;
exports.useAccordionState = useAccordionState;
exports.useHeightTransition = useHeightTransition;
exports.useMergeRef = useMergeRef;
exports.withAccordionItem = withAccordionItem;
