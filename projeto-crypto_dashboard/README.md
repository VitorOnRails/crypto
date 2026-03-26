# 🪙 Crypto Finance Dashboard

## 💻 Sobre o Projeto
Um dashboard financeiro interativo focado no acompanhamento de criptomoedas, desenvolvido para simular uma carteira real. O projeto apresenta dados complexos de forma clara, utilizando gráficos dinâmicos e consumo de dados do mercado financeiro em tempo real.

## ✨ Funcionalidades
* **Consumo de API Real:** Integração com a API pública da Binance para exibir o preço atual do Bitcoin (BTC) em Reais (BRL) e o histórico de variação.
* **Gráficos Dinâmicos e Reativos:** Visualização interativa com ApexCharts, incluindo filtros de período (1 Dia, 1 Semana, 1 Mês, 1 Ano) e mudança automática de cores (verde/vermelho) baseada no desempenho da moeda.
* **Gestão de Carteira:** Cálculo automatizado do saldo total (Moeda Fiat + Criptomoedas) utilizando cotações em tempo real e formatação nativa de moedas (`Intl.NumberFormat`).
* **Dashboard Responsivo:** Layout fluido que se adapta perfeitamente a dispositivos móveis (com menu lateral em gaveta) e desktops, garantindo a melhor experiência de uso em qualquer tela.
* **Navegação SPA:** Transições rápidas entre os painéis (Central, Transações, Suporte) com feedback visual ativo.

## 🛠️ Tecnologias Utilizadas
* **[React 19](https://react.dev/)**
* **[Vite](https://vitejs.dev/)**
* **[Chakra UI v3](https://chakra-ui.com/)** (Arquitetura de componentes customizados)
* **[React Router DOM](https://reactrouter.com/)**
* **[ApexCharts](https://apexcharts.com/)** (Renderização de dados financeiros)
* **[React Icons](https://react-icons.github.io/react-icons/)**

## 🚀 Como executar o projeto

### Pré-requisitos
É necessário ter o [Git](https://git-scm.com) e o [Node.js](https://nodejs.org/en/) instalados na sua máquina.

### Passo a Passo

1. Clone este repositório:
```bash
git clone https://github.com/VitorOnRails/crypto.git
```

2. Acesse a pasta do projeto:

```bash
cd crypto/projeto-crypto_dashboard
```

3. Instale as dependências:

```bash
npm install
```

4. Execute a aplicação em modo de desenvolvimento:

```bash
npm run dev
```

5. O aplicativo será aberto no seu navegador padrão no endereço:

http://localhost:5173