import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

const sharedConfig = {
  external: ["react", "react-dom", "react/jsx-runtime"],
  plugins: [
    nodeResolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    babel({
      babelHelpers: "bundled",
      extensions: [".ts", ".tsx", ".js", ".jsx"],
    }),
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false,
  },
};

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  ...sharedConfig,
  input: "src/index.ts",
  output: [
    {
      file: "dist/cjs/index.js",
      format: "cjs",
      interop: "default",
    },
    {
      preserveModules: true,
      dir: "dist/es",
      format: "es",
    },
  ],
};
