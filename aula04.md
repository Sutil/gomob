## Listagem dos serviços

- date-fns
- intl 

```js
import IntlPolyfill from 'intl';
import 'intl/locale-data/jsonp/pt-BR';

export const { format: formatPrice } = new IntlPolyfill.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

```