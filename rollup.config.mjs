// @ts-check

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { addDirective } from 'rollup-plugin-add-directive';

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
    addDirective({ pattern: 'index' })
  ],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false
  },
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      interop: 'default',
      entryFileNames: '[name].cjs',
      preserveModules: true
    },
    {
      dir: 'dist/esm',
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true
    }
  ]
};
