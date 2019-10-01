## Baixar backend fake

git clone git@github.com:Sutil/gomob.git
ou
git clone https://github.com/Sutil/gomob.git

dentro da pasta do projeto, executar:
```sh
node server.js
```

## instalação de libs

```
yarn add axios @react-native-community/async-storage react-native-vector-icons

react-native link @react-native-community/async-storage
react-native link react-native-vector-icons
```

- resetar cache e instalar novamente
```
react-native start --reset-cache
react-native run-android
```

## Criar api e fazer signup e login

- criar service com axios


- lembrar que após login devemos setar o token para todas requisições:

```
api.defaults.headers.Authorization = `Bearer ${token}`;
```

## Configurar nova stack com rotas após login

- configurar header:
```
{
  headerLayoutPreset: 'center',
  headerBackTitleVisible: false,
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#49265c',
    },
    headerTintColor: '#fff',
  },
}
```

- criar tela de loading para identificar token
- conceitos de useEffect

## Criar header customizado para Home

- criar botão de logout

## Criar flatList para listar os jobs
