# 📊 App de Finanças Pessoais

Um aplicativo simples e eficiente para gerenciamento de finanças pessoais, permitindo que os usuários acompanhem receitas, despesas e seu saldo total em tempo real.  

---

## 📱 **Principais Funcionalidades**

- **Autenticação**:  
  - Login e registro de novos usuários.  
  - Segurança no armazenamento de credenciais.  

- **Gerenciamento Financeiro**:  
  - Registro de receitas e despesas com categorização.  
  - Exibição do saldo total e histórico de transações recentes.  
  - Filtro por data e categorias.  

- **Dashboard Interativa**:  
  - Resumo visual de entradas e saídas do dia.  
  - Gráficos para acompanhamento financeiro.  

- **Perfil do Usuário**:  
  - Personalização e logout.  

---

## 🖼️ **Layout do Aplicativo**

### **1. Tela de Login**
Tela inicial para que o usuário possa acessar sua conta, com campos para e-mail e senha, além de um botão para criar uma nova conta.  

### **2. Tela de Cadastro**
Interface limpa e objetiva para criação de novos usuários, contendo campos para nome, e-mail e senha, além de um botão para finalizar o cadastro.  

### **3. Tela de Perfil**
Apresenta o nome do usuário e funcionalidades como “Registrar Gastos” e “Sair”.  

### **4. Tela de Registro**
Permite o cadastro de uma nova transação financeira. Inclui:  
- Campos para o nome e valor da transação.  
- Botões para escolher se é receita ou despesa.  
- Botão para salvar a transação.  

### **5. Dashboard**
Exibe o resumo financeiro do dia, com separação clara entre entradas e saídas. Apresenta:  
- Total de entradas e saídas em destaque.  
- Histórico das últimas transações, organizadas por tipo (receita/despesa).  

---

## 🚀 **Tecnologias Utilizadas**

### **Frontend**
- **Framework**: React Native  
- **Navegação**: React Navigation  
- **Estilização**: Styled-components  
- **Gerenciamento de Estado**: Context API  

### **Backend**
O aplicativo consome dados da seguinte API:  
🔗 [Backend-Finanças](https://github.com/devfraga/backend-financas)

A API é responsável por:  
- Armazenar as transações do usuário.  
- Gerenciar a autenticação.  
- Calcular o saldo total.  

---

## 🔧 **Como Rodar o Projeto**

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/app-financas.git
