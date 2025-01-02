// @ts-check

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import preserveDirectives from 'rollup-preserve-directives';

/**
 * @type {import('rollup').RollupOptions}
 */
export default {
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-transition-state'],
  plugins: [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx', '.js', '.jsx']
    }),
    preserveDirectives()
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false
  },
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/cjs/index.js',
      format: 'cjs',
      interop: 'default'
    },
    {
      preserveModules: true,
      dir: 'dist/es',
      format: 'es'
    }
  ]
};
