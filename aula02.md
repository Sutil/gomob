- Criar app MeuServico

- Apagar arquivos desnecessários

## Configurar eslint e prettier

excluir `.eslint.js`

- inicializar eslint
```sh
yarn add eslint -D
yarn eslint --inint
```

- instalar configurações do prettier

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D

```

- criar `.prettierrc`

- configurar arquivo `.eslint.js`

```js
module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off',
  },
};
```
## Visão geral do código e componentes

- Conceitos de layout

- Conceitos básicos de javascript


## Criar páginas de navegação


```
yarn add react-navigation react-navigation-stack react-native-gesture-handler
```
- modificar `MainActivity`


```java
package com.reactnavigation.example;

import com.facebook.react.ReactActivity;
+ import com.facebook.react.ReactActivityDelegate;
+ import com.facebook.react.ReactRootView;
+ import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

public class MainActivity extends ReactActivity {

  @Override
  protected String getMainComponentName() {
    return "Example";
  }

+  @Override
+  protected ReactActivityDelegate createReactActivityDelegate() {
+    return new ReactActivityDelegate(this, getMainComponentName()) {
+      @Override
+      protected ReactRootView createRootView() {
+       return new RNGestureHandlerEnabledRootView(MainActivity.this);
+      }
+    };
+  }
}
```

- criar navegação entre login e signup

- criar telas

- instalar axios

- fazer criação de conta com axios.

## Redux

próxima aula