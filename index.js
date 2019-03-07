module.exports = {
  extends: [
    '@ufhealth/eslint-config-standard',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: '16.6',
      pragma: 'wp'
    }
  },
  globals: {
    wp: 'readonly',
    lodash: 'readonly',
    moment: 'readonly'
  },
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off'
  }
}
