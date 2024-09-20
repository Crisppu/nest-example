module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
  //configuracion para decirle a eslintrc que vamos a trabajar con windows porque windows termmina con otros caracteres al final
  //sino se quita las advertencia tenemos que reiniciar el servidor de eslint
  //> eslint serve
  // buscar: ESLint: restart EsLint Server
  "prettier/prettier": [
    "error",
    {
      "endOfLine": "auto"
    }
  ]
};
