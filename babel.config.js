module.exports = {
  targets: 'defaults',
  assumptions: {
    constantReexports: true,
    ignoreFunctionLength: true,
    ignoreToPrimitiveHint: true,
    iterableIsArray: true,
    noDocumentAll: true,
    noIncompleteNsImportDetection: true,
    noNewArrows: true,
    objectRestNoSymbols: true,
    pureGetters: true,
    setComputedProperties: true,
    setSpreadProperties: true,
    skipForOfIteratorClosing: true
  },
  shouldPrintComment: (val) => /[@#]__PURE__/.test(val),
  plugins: ['pure-annotations'],
  presets: [
    [
      '@babel/preset-env',
      {
        bugfixes: true,
        include: [
          '@babel/plugin-proposal-optional-chaining',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-optional-catch-binding',
          '@babel/plugin-proposal-object-rest-spread'
        ],
        exclude: ['@babel/plugin-transform-typeof-symbol']
      }
    ],
    ['@babel/preset-react', { runtime: 'automatic' }],
    ['@babel/preset-typescript', { isTSX: true, allExtensions: true }]
  ]
};
