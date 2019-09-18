# Enternter estrutura do projeto

Navgar pelos arquivos e diretórios importantes.

# ESlnt e Prettier

criar .editorconfig

```
root = true

[*]
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

- Deletar .eslintrc.js

- instalar eslint

```sh
yarn add eslint -D
yarn eslint --init
```

remover `package-lock.json` e rodar yarn novamente

- instalar prettier

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Substituir o conteúdo do arquivo `.esllintrc.js` pelo conteúdo abaixo:

```
module.exports = {
  env: {
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly'
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'no-param-reassign': 'off',
    'no-console': 'off'
  },
};
```

## Configurar rotas

```
yarn add react-navigation react-native-gesture-handler react-navigation-stack
```

# Alterar MainActivity

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

# Criar páginas

- UserList
- UserDetails

- configuração de navegação

```json
{
  "defaultNavigationOptions": {
    "headerTintColor": "#fff",
    "headerLeftContainerStyle": {
      "marginLeft": 20
    },
    "headerStyle": {
      "backgroundColor": "#49265c"
    }
  }
}
```

- instalar react-native-vector-icons
- Criar campo de texto para add users do github.
- Criar lista de users.

## Estilizar

```
yarn add polished styled-components react-native-linear-gradient
```

```javascript
import styled from "styled-components";
import LinearGradient from "react-native-linear-gradient";
import colors from "~/styles/colors";

export default styled(LinearGradient).attrs({
  colors: [colors.primaryDark, colors.primaryLight]
})`
  flex: 1;
`;
```
