import "../utils/constants.mjs";
import React, { useEffect, useState } from "react";
// src/hooks/useId.ts
let current = 0;
const useIdShim = () => {
	const [id, setId] = useState();
	useEffect(() => setId(++current), []);
	return id && `szh-adn-${id}`;
};
const useId = React.useId || useIdShim;
export { useId };
