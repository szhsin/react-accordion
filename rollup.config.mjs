// @ts-check

import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';

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
    {
      name: 'rollup-plugin-add-directives',
      banner: (chunk) => (chunk.name === 'index' ? "'use client';" : '')
    }
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
