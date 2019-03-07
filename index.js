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
      version: 'detect',
      pragma: 'wp.element'
    }
  },
  globals: {
    wp: 'readonly',
    lodash: 'readonly',
    moment: 'readonly'
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/display-name': 'off'
  }
}
