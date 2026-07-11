"use strict";
const require_runtime = require("../_virtual/_rolldown/runtime.cjs");
require("../utils/constants.cjs");
let react = require("react");
react = require_runtime.__toESM(react, 1);
//#region src/hooks/useId.ts
let current = 0;
const useIdShim = () => {
	const [id, setId] = (0, react.useState)();
	(0, react.useEffect)(() => setId(++current), []);
	return id && `szh-adn-${id}`;
};
const useId = react.default.useId || useIdShim;
//#endregion
exports.useId = useId;
