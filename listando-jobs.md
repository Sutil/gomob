# Aula - Listas

## Instalar dependências

```shel
yarn add date-fns intl react-native-masked-text


```

## Cores que vamos usar.

Roxo: #9575cd
Verde: #b9f6ca

## formatação de moeda

```js
import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: moneyFormat } = new IntlPolyfill.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
```


