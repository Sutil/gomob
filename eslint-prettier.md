## Configuração do eslint com prettier



- Deletar os arquivos `.eslint.js ` e `.prettierrc.js` da raiz do projeto.

- Intalar dependência de desenvolvimento do eslint.

```
yarn add eslint -D
```

- Instalar o eslint no projeto.

```
yarn eslint --init
```

No console aparecerá várias questões, siga conforme a seguir:

- Escolha a opção 'To check syntax, find problems, and enforce code style'.

```shel
? How would you like to use ESLint? 
  To check syntax only 
  To check syntax and find problems 
❯ To check syntax, find problems, and enforce code style 
```

```shel
? What type of modules does your project use? 
❯ JavaScript modules (import/export) 
  CommonJS (require/exports) 
  None of these 
```
```shel
? Which framework does your project use? (Use arrow keys)
❯ React 
  Vue.js 
  None of these 
```
Na questão abaixo, escolha 'N'

```shel
Does your project use TypeScript? (y/N) : N
```
Na questão abaixo, use a `barra de espaço` para desmarcar todas as opções, pois o React Native não roda no navegador nem no node.

```shel
? Where does your code run? 
❯◯ Browser
 ◯ Node
```

```shel
? How would you like to define a style for your project? (Use arrow keys)
❯ Use a popular style guide 
  Answer questions about your style 
  Inspect your JavaScript file(s)
```

```shel
? Which style guide do you want to follow? (Use arrow keys)
❯ Airbnb (https://github.com/airbnb/javascript) 
  Standard (https://github.com/standard/standard) 
  Google (https://github.com/google/eslint-config-google) 
```

```shel
? What format do you want your config file to be in? (Use arrow keys)
❯ JavaScript 
  YAML 
  JSON 
```

- Escolha 'Y' na questão abaixo:
```shel
? Would you like to install them now with npm? (Y/n) : Y
```
Nesse processo o eslint usou o npm, mas estamos usando o yarn, então, delete o arquivo `package-lock.json`.

Execute o comando: 
```
yarn
```


Após esses passos o eslint estará instalado, e agora vamos configurar.

- Instale as dependências de desenvolvimento do `prettier`, `eslint-config-prettier`, `eslint-plugin-prettier` e `babel-eslint`

```shel
yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint -D
```

Altere o conteúdo do arquivo `.eslint.js` conforme abaixo:

```js
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

Crie um arquivo `.prettierrc` na raiz do projeto com o conteúdo abaixo:

```json
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

Para finalizar, confira suas configurações do VSCode.

Digite o atalho `Ctrl + Shift + P` e procure por `Preferences: Open settings (JSON)`.

O conteúdo do arquivo deve ser semelhante ao a seguir:

```json
{
    "workbench.iconTheme": "material-icon-theme",
    "window.zoomLevel": -1,
    "editor.suggestSelection": "first",
    "vsintellicode.modify.editor.suggestSelection": "automaticallyOverrodeDefaultValue",
    "workbench.colorTheme": "Dracula",
    "editor.formatOnSave": false,
    "editor.rulers": [80,120],
    "editor.tabSize": 2,
    "editor.renderLineHighlight": "gutter",
    "emmet.syntaxProfiles": {
        "javascript": "jsx",
    },
    "emmet.includeLanguages": {
        "javascript": "javascriptreact"
    },
    "javascript.updateImportsOnFileMove.enabled": "never",
    "breadcrumbs.enabled": true,
    "editor.parameterHints.enabled": true,
    
    "eslint.autoFixOnSave": true,
    "eslint.validate": [
        {
            "language": "javascript",
            "autoFix": true,
        },
        {
            "language": "javascriptreact",
            "autoFix": true,
        },
        {
            "language": "typescript",
            "autoFix": true,
        },
        {
            "language": "typescriptreact",
            "autoFix": true,
        },        
    ]
}

```

Tenha certeza o que as extenções do Eslint e do prettier estão instaladas no VsCode.