import { defineConfig } from 'rolldown';
import { addDirective } from 'rollup-plugin-add-directive';

export default defineConfig({
  external: ['react', 'react-dom', 'react/jsx-runtime', 'react-transition-state'],
  plugins: [addDirective({ pattern: 'index' })],
  treeshake: {
    moduleSideEffects: false,
    propertyReadSideEffects: false
  },
  transform: {
    target: ['es2020'],
    assumptions: {
      noDocumentAll: true
    },
    define: {
      'process.env.NODE_ENV': 'process.env.NODE_ENV'
    }
  },
  input: 'src/index.ts',
  output: [
    {
      dir: 'dist/cjs',
      format: 'cjs',
      entryFileNames: '[name].cjs',
      preserveModules: true,
      strict: true
    },
    {
      dir: 'dist/esm',
      format: 'es',
      entryFileNames: '[name].mjs',
      preserveModules: true
    }
  ]
});
