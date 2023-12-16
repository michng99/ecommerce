module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }, { printWidth: 120 }],
    'no-console': 'off',
    'comma-dangle': [2, 'always-multiline'],
  },
}
