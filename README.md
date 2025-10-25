# 🧪 Projeto de Automação de Testes - Luma Demo (Bootcamp Atlântico Avanti)

> Projeto desenvolvido em grupo durante o **Bootcamp Atlântico Avanti**, com foco em **automação de testes end-to-end** utilizando **Cypress**.  
> O objetivo é validar o funcionamento de um e-commerce de demonstração (Luma Demo), garantindo qualidade e estabilidade nas principais funcionalidades da loja.

---

## 🛍️ Sobre o Luma Demo

O **Luma Demo** é um site de demonstração de e-commerce baseado no **Magento 2** e **ScandiPWA**, simulando uma loja virtual com produtos divididos em categorias como roupas e acessórios.  

O site permite:
- Visualizar itens e detalhes de produtos  
- Aplicar filtros e realizar buscas  
- Adicionar produtos ao carrinho  
- Navegar entre páginas institucionais

⚠️ **Importante:** Este é um **ambiente de teste**; produtos, preços e transações são **fictícios**, apenas para **avaliação de funcionalidades, interface e usabilidade**.

---

## ⚡ Integração Contínua e Cypress Cloud

O projeto possui integração com **GitHub Actions**, executando testes automaticamente em cada push ou pull request nas branches `main` ou `master`.  

Além disso, os testes estão conectados ao **Cypress Cloud**, permitindo:
- 📈 Visualização de resultados em tempo real  
- 🕒 Histórico completo de execuções  
- 🔍 Comparação entre runs e análise de falhas  
- 📸 Logs detalhados com screenshots e vídeos

---

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) – Automação de testes end-to-end  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) – Linguagem base  
- [Node.js](https://nodejs.org/) – Ambiente de execução  
- [GitHub](https://github.com/) – Controle de versão  
- [VS Code](https://code.visualstudio.com/) – Editor de código

---

## 🎯 Objetivo do Projeto

Desenvolver uma suíte de testes automatizados que valide o comportamento do site **Luma Demo**, cobrindo:
- Fluxo de compra e adição ao carrinho  
- Aplicação de filtros e busca de produtos  
- Validação de elementos visuais e navegação  
- Testes de interface e comportamento responsivo

O foco é **garantir a qualidade** e **detectar falhas antes da entrega**, aplicando boas práticas de QA.

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos
Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Cypress](https://www.cypress.io/)

### Passos para execução

```bash
# Clone o repositório
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

Para manter o repositório organizado e evitar conflitos, **todas as alterações devem ser realizadas em uma nova branch**.  
**Não envie alterações diretamente para a branch `main`.**

### 🔧 Fluxo Padrão de Branch

```bash
# 1. Atualize a main local
git checkout main
git pull origin main

# 2. Crie uma nova branch a partir da main
git checkout -b nome-da-sua-branch

# 3. Faça suas alterações e confirme os commits
git add .
git commit -m "Descrição clara do que foi alterado"
```

---

## 🚨 Atualizando sua branch antes de abrir um Pull Request

> ⚠️ **ATENÇÃO:** Atualizar sua branch com as últimas mudanças da `main` é **crucial** antes de abrir o Pull Request, evitando conflitos e garantindo que você não está enviando código desatualizado.

```bash
# 1️⃣ Certifique-se de estar na sua branch
git checkout sua-branch

# 2️⃣ Busque as atualizações do repositório remoto
git fetch origin

# 3️⃣ Faça o merge da main na sua branch
git merge origin/main

# ⚠️ Isso criará um commit de merge integrando atualizações da main com seu código

# 4️⃣ Se houver conflitos:
# - Resolva manualmente
# - Adicione os arquivos resolvidos
git add <arquivos>
# - Finalize o commit do merge
git commit

# 5️⃣ Envie a branch atualizada para o repositório remoto
git push origin sua-branch
```

### 💡 Dicas para Pull Request
- Abra o PR para a branch `main`; outro membro da equipe fará a revisão antes da aprovação.  
- Use nomes de branch descritivos:
  - `feature/adicionar-casos-teste-cenario-3`  
  - `refactor/otimizar-estrutura-testes`  
  - `fix/ajuste-elemento-carrinho`

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

| Integrante                         | Função                 | Perfil GitHub                                   | LinkedIn             |
| ---------------------------------- | --------------------   | --------------------                            | --------------------
| **Vitor Evangelista Fantin**       | 🧭 Team Líder de QA   | [Clique Aqui](https://github.com/vitorfantin)   | [Clique Aqui](https://www.linkedin.com/in/vitorfantin/)
| **Adriana Machado Martins Heck**   | 🔍 Analista de Testes |
| **Michael Freitas Lima Machado**   | 🔍 Analista de Testes | [Clique Aqui](https://github.com/MichaelMachad0)   | [Clique Aqui](https://www.linkedin.com/in/michael-machado-qa)
| **Guilherme Silva Santos**         | 🔍 Analista de Testes |
| **Victor Ravel Santos Cavalcante** | 🔍 Analista de Testes | [Clique Aqui](https://github.com/VictorYates)   | [Clique Aqui](https://www.linkedin.com/in/victor-cavalcante-619b69311)
| **Amanda Ramos**                   | 🔍 Analista de Testes | [Clique Aqui](https://github.com/SrtaAmadaRamos)   | [Clique Aqui](https://www.linkedin.com/in/amanda-pereira-ramos-933408194)

---

## 🧪 Testes Automatizados

Os testes cobrem:
- Abertura e funcionamento das principais páginas do site  
- Busca e filtro de produtos  
- Adição de produtos ao carrinho  
- Verificação de elementos visuais  
- Fluxo básico de compra (simulado)

---

## 📊 Relatórios do Bootcamp

| Nome                         | Link                  
| -----------------------------| --------------------  
| **Especificação de Bugs**    | [Clique Aqui](https://github.com/vitorfantin/qa-bootcamp-atlantico-avanti-squad6/blob/main/documentos_relatorios_desenvolvidos/Especifica%C3%A7%C3%A3o%20de%20Bugs%20-%20Squad%206%20-%20Quality%20Ninjas.docx.pdf)
| **Especificação de Teste**   | [Clique Aqui](https://github.com/vitorfantin/qa-bootcamp-atlantico-avanti-squad6/blob/main/documentos_relatorios_desenvolvidos/Especifica%C3%A7%C3%A3o%20de%20Teste%20-%20Squad%206%20-%20Quality%20Ninjas.docx.pdf)
| **Plano de Teste**           | [Clique Aqui](https://github.com/vitorfantin/qa-bootcamp-atlantico-avanti-squad6/blob/main/documentos_relatorios_desenvolvidos/Plano%20de%20Teste%20-%20Squad%206%20-%20Quality%20Ninjas.docx.pdf)
| **Relatório de Teste**       | [Clique Aqui](https://github.com/vitorfantin/qa-bootcamp-atlantico-avanti-squad6/blob/main/documentos_relatorios_desenvolvidos/Relat%C3%B3rio%20de%20Teste%20-%20Squad%206%20-%20Quality%20Ninjas.docx.pdf)
| **Apresentação DemoDay**     | [Clique Aqui](https://github.com/vitorfantin/qa-bootcamp-atlantico-avanti-squad6/blob/main/documentos_relatorios_desenvolvidos/Apresentac%CC%A7a%CC%83o%20DemoDay%20-%20Squad%206%20.pptx)
