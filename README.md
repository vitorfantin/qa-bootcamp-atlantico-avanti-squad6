# 🧪 Projeto de Automação de Testes - Luma Demo (Bootcamp Atlântico Avanti)

> Projeto desenvolvido em grupo durante o **Bootcamp Atlântico Avanti**, com foco em **automação de testes end-to-end** utilizando **Cypress**.  
> O objetivo é validar o funcionamento de um e-commerce de demonstração (Luma Demo), garantindo qualidade e estabilidade nas principais funcionalidades da loja.

---

## 🛍️ Sobre o Luma Demo

O **Luma Demo** é um site de demonstração de e-commerce baseado no **Magento 2** e **ScandiPWA**.  
Ele simula uma loja virtual com catálogo de produtos divididos em categorias como roupas e acessórios.  

O site permite:
- Visualizar itens e detalhes de produtos;  
- Aplicar filtros e realizar buscas;  
- Adicionar produtos ao carrinho;  
- Navegar entre páginas institucionais.

⚠️ **Importante:**  
Este é um **ambiente de teste**, portanto, os produtos, preços e transações são **fictícios**, servindo apenas para fins de **avaliação de funcionalidades, interface e usabilidade**.

---
## ⚡ Integração Contínua e Cypress Cloud

O projeto possui integração com **GitHub Actions**, permitindo a execução automatizada dos testes em cada push ou pull request nas branches `main` ou `master`.  

Além disso, os testes estão conectados ao **Cypress Cloud**, oferecendo:
- Visualização de resultados de testes em tempo real;  
- Histórico completo de execuções;  
- Comparação entre runs e análise de falhas;  
- Logs detalhados com screenshots e vídeos.


## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Framework de automação de testes end-to-end  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – Linguagem base para os testes  
- [Node.js](https://nodejs.org/) – Ambiente de execução  
- [GitHub](https://github.com/) – Controle de versão e colaboração em equipe  
- [VS Code](https://code.visualstudio.com/) – Editor de código utilizado no projeto

---

## 🎯 Objetivo do Projeto

Desenvolver uma suíte de testes automatizados que valide o comportamento do site **Luma Demo**, cobrindo:
- Fluxo de compra e adição ao carrinho;  
- Aplicação de filtros e busca de produtos;  
- Validação de elementos visuais e navegação;  
- Testes de interface e comportamento responsivo.

O foco é **garantir a qualidade** e **detectar possíveis falhas** antes da entrega, aplicando boas práticas de QA.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)

### Passos para execução

```bash
# Clone este repositório
git clone https://github.com/seuusuario/nome-do-repositorio.git

# Acesse a pasta do projeto
cd nome-do-repositorio

# Instale as dependências
npm install

# Execute o Cypress
npx cypress open
```

Após abrir o Cypress, escolha o modo de execução (interativo ou headless) e selecione os testes desejados.

---

## 🌿 Controle de Versionamento e Boas Práticas de Git

Para manter o repositório organizado e evitar conflitos de código, **todas as alterações devem ser realizadas em uma nova branch**.  
As atualizações **não devem ser enviadas diretamente para a branch `main`**.

### 🔧 Fluxo Padrão

1. Crie uma nova branch a partir da `main`:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b nome-da-sua-branch
   ```

2. Faça suas alterações e confirme os commits:
   ```bash
   git add .
   git commit -m "Descrição clara do que foi alterado"
   ```

3. Envie a branch para o repositório remoto:
   ```bash
   git push origin nome-da-sua-branch
   ```

4. Acesse o GitHub e **abra um Pull Request (PR)** para a branch `main`.  
   O PR será revisado por outro membro da equipe antes da aprovação.

💡 **Dica:** Use nomes de branch descritivos, por exemplo:
- `feature/adicionar-casos-teste-cenario-3`
- `refactor/casos-teste-cenario-3`
- `feature/adicionar-teste-login`
- `fix/ajuste-elemento-carrinho`
- `refactor/otimizar-estrutura-testes`

---

## 🧩 Estrutura de Pastas

```bash
📦 projeto-luma-demo
 ┣ 📂 cypress
 ┃ ┣ 📂 e2e           # Testes end-to-end
 ┃ ┣ 📂 fixtures      # Massa de dados (mock)
 ┃ ┣ 📂 support       # Configurações e comandos customizados
 ┣ 📜 package.json
 ┣ 📜 README.md
```

---

## 👥 Equipe do Projeto

| Integrante                         | Função               |
| ---------------------------------- | -------------------- |
| **Vitor Evangelista Fantin**       | 🧭 Team Líder de QA   |
| **Adriana Machado Martins Heck**   | 🔍 Analista de Testes |
| **Michael Freitas Lima Machado**   | 🔍 Analista de Testes |
| **Guilherme Silva Santos**         | 🔍 Analista de Testes |
| **Victor Ravel Santos Cavalcante** | 🔍 Analista de Testes |
| **Amanda Ramos**                   | 🔍 Analista de Testes |

---

## 🧪 Testes Automatizados

Os testes foram estruturados para validar:
- Abertura e funcionamento das principais páginas do site  
- Busca e filtro de produtos  
- Adição de produtos ao carrinho  
- Verificação de elementos visuais  
- Fluxo básico de compra (simulado)

---

## 📊 Relatórios

Os resultados dos testes podem ser visualizados diretamente na interface do Cypress ou exportados via:
```bash
npx cypress run --reporter mochawesome
```

---
