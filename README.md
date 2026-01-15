# 🔧 Teste MFE Webpack

Um projeto de **Micro Front-ends (MFE)** desenvolvido com **Angular 16/18** e **Module Federation** do Webpack, demonstrando como compartilhar componentes e funcionalidades entre múltiplas aplicações de forma independente e escalável.

## 📋 Visão Geral

Este repositório contém uma arquitetura de micro front-ends com dois aplicativos Angular:

- **Host App**: Aplicação host que consome módulos remotos (Angular 18)
- **Child App**: Aplicação remota que expõe componentes como módulos federados (Angular 16)

O projeto utiliza a biblioteca `@angular-architects/module-federation` para configurar e gerenciar a comunicação entre as aplicações.

## 🏗️ Estrutura do Projeto

```
teste-mfe-webpack/
├── README.md
├── host-app/                    # Aplicação host/principal
│   ├── angular.json             # Configuração do Angular
│   ├── package.json             # Dependências
│   ├── tsconfig.json            # Configuração TypeScript
│   ├── webpack.config.js        # Configuração Webpack dev
│   ├── webpack.prod.config.js   # Configuração Webpack prod
│   └── README.md
│
└── child-app/                   # Aplicação remota/módulo federado
    ├── angular.json             # Configuração do Angular
    ├── package.json             # Dependências
    ├── tsconfig.json            # Configuração TypeScript
    ├── webpack.config.js        # Configuração Webpack dev
    ├── webpack.prod.config.js   # Configuração Webpack prod
    └── README.md
```

## 🚀 Começando

### Pré-requisitos

- **Node.js** 18.x ou superior
- **npm** ou **yarn**

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/GustavoL012/teste-mfe-webpack.git
cd teste-mfe-webpack
```

2. Instale as dependências de ambas as aplicações:
```bash
# Host App
cd host-app
npm install

# Child App (em outro terminal)
cd child-app
npm install
```

## 💻 Desenvolvimento

### Rodando Aplicações Individualmente

**Host App:**
```bash
cd host-app
npm start
# Acesse: http://localhost:4200
```

**Child App:**
```bash
cd child-app
npm start
# Acesse: http://localhost:4200 (ajuste a porta se necessário)
```

### Rodando Ambas as Aplicações

Use o comando `run:all` que inicia um servidor MFE de desenvolvimento:

```bash
# Na raiz do projeto ou dentro de qualquer aplicação
npm run run:all
```

## 🔧 Configuração de Module Federation

### Host App (webpack.config.js)

```javascript
const { withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  shared: {},
});
```

A aplicação host está configurada para consumir módulos remotos.

### Child App (webpack.config.js)

```javascript
const { withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  name: "child-app",
  filename: "remoteEntry.js",
  exposes: {
    "./web-components": "./src/bootstrap.ts",
  },
  shared: {},
});
```

A aplicação child expõe o arquivo `remoteEntry.js` com web-components disponíveis para consumo pelo host.

## 📦 Dependências Principais

### Host App (Angular 18)
- `@angular/core@^18.0.0`
- `@angular/router@^18.0.0`
- `@angular-architects/module-federation@^18.0.0`
- `ngx-build-plus@^18.0.0`

### Child App (Angular 16)
- `@angular/core@^16.2.0`
- `@angular/material@^16.2.14`
- `@angular/cdk@^16.2.14`
- `@angular-architects/module-federation@^16.0.3`
- `ngx-build-plus@^16.0.0`

## 🛠️ Scripts Disponíveis

Ambas as aplicações possuem os seguintes scripts npm:

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila a aplicação para produção |
| `npm run watch` | Monitora mudanças e faz rebuild automático |
| `npm test` | Executa testes unitários via Karma |
| `npm run run:all` | Inicia servidor MFE com ambas aplicações |

## 🧪 Testes

Executar testes unitários:

```bash
# Host App
cd host-app
npm test

# Child App
cd child-app
npm test
```

Os testes usam **Karma** como test runner e **Jasmine** como framework de testes.

## 📦 Build para Produção

```bash
# Host App
cd host-app
npm run build

# Child App
cd child-app
npm run build
```

Os artefatos compilados serão armazenados no diretório `dist/` de cada aplicação.

## 🎯 Casos de Uso

Este projeto demonstra:

✅ Implementação de Micro Front-ends com Module Federation  
✅ Compartilhamento de módulos Angular entre aplicações independentes  
✅ Web Components com Angular  
✅ Configuração avançada de Webpack  
✅ Desenvolvimento paralelo de múltiplas aplicações  
✅ Escalabilidade em arquiteturas de front-end complexas  

## 🔗 Recursos Úteis

- [Angular Module Federation](https://angular.io/guide/module-federation)
- [@angular-architects/module-federation](https://www.npmjs.com/package/@angular-architects/module-federation)
- [Webpack Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Angular CLI Documentation](https://angular.io/cli)

