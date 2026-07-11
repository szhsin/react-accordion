import { AccordionContext } from "../utils/constants.mjs";
import { jsx } from "react/jsx-runtime";
//#region src/components/AccordionProvider.tsx
const AccordionProvider = (props) => /* @__PURE__ */ jsx(AccordionContext.Provider, { ...props });
//#endregion
export { AccordionProvider };
