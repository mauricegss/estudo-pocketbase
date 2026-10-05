# PocketBase ToDo App - Estudo de Tecnologia

Este repositório contém o código prático para a demonstração do **PocketBase**, uma solução de backend open-source em um único executável (Backend-as-a-Service - BaaS) construída em Go e SQLite.

O exemplo desenvolvido é um aplicativo de lista de tarefas (**ToDo App**) que demonstra a integração direta entre um frontend web e a API gerada automaticamente pelo PocketBase.

---

## 🚀 Funcionalidades Demonstradas
* **CRUD Completo:** Criação, listagem, atualização de status e remoção de tarefas.
* **Consumo via JavaScript SDK Oficial:** Uso do SDK do PocketBase (`pocketbase.umd.js`) no frontend.
* **Persistência com SQLite Embarcado:** Armazenamento automático e integrado no arquivo `pb_data/data.db`.
* **Painel Administrativo Nativo (Admin UI):** Gerenciamento visual de coleções, schemas e regras de acesso em tempo real.

---

## 📁 Estrutura do Repositório

```text
├── backend/            # Executável do PocketBase e diretório de dados (pb_data)
├── frontend/           # Aplicação web (HTML/CSS/JS) consumindo a API
│   └── index.html      # Interface do usuário com integração ao SDK PocketBase
├── material/           # Arquivos de apoio, manuais e documentação do estudo
└── README.md           # Guia de instalação, configuração e testes
```

---

## 📋 Pré-requisitos
* Executável do [PocketBase](https://pocketbase.io/docs/) compatível com seu sistema operacional (incluso na pasta `backend` para Windows ou baixável no site oficial).
* Qualquer navegador web moderno (Google Chrome, Firefox, Edge, etc.).

---

## 🛠️ Instruções de Instalação e Configuração

### 1. Iniciando o Backend
1. Abra um terminal na pasta `backend`:
   ```bash
   cd backend
   ```
2. Execute o servidor:
   * **Windows (PowerShell/CMD):**
     ```powershell
     .\pocketbase.exe serve
     ```
   * **Linux/macOS:**
     ```bash
     ./pocketbase serve
     ```
3. O servidor estará disponível em: `http://127.0.0.1:8090`

### 2. Configurando o Banco de Dados (Painel Admin)
1. Acesse o painel de administração: [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/)
2. Na primeira execução, crie sua conta de superusuário/administrador com e-mail e senha.
3. Crie uma nova Collection:
   * Clique em **"New collection"**.
   * Nome da collection: `tarefas` (tipo: *Base collection*).
4. Adicione os campos necessários:
   * `titulo` ➔ Tipo **Plain text** (Marque como *Non-empty* se desejar).
   * `concluida` ➔ Tipo **Bool / Boolean**.
   * `encerrada` ➔ Tipo **Date** (ou **Plain text**) para registrar a data de conclusão.
   *(Nota: os campos `id`, `created` e `updated` são gerenciados automaticamente pelo PocketBase).*
5. Configurar as permissões (**API Rules**):
   * Na aba **API Rules** da collection `tarefas`, clique no ícone de cadeado em todas as ações (*List/Search*, *View*, *Create*, *Update*, *Delete*) para deixá-las destravadas (campo vazio = acesso público para a demonstração).
   * Clique em **"Save changes"**.

---

## 🧪 Instruções de Teste e Demonstração

1. Com o backend PocketBase rodando no terminal, abra o arquivo `frontend/index.html` em seu navegador (dê um duplo clique no arquivo ou abra via Live Server).
2. Execute o fluxo de testes:
   * **Create (Criar):** Digite um texto no campo e clique no botão **"Adicionar"**. A tarefa aparecerá na listagem e será salva no PocketBase.
   * **Read (Listar):** Ao carregar ou recarregar a página, as tarefas persistidas no SQLite são trazidas via `pb.collection('tarefas').getFullList()`.
   * **Update (Atualizar):** Marque ou desmarque a checkbox da tarefa. O status `concluida` e a data em `encerrada` serão atualizados no banco.
   * **Delete (Excluir):** Clique no botão vermelho **"Excluir"** para remover o registro.
3. *(Opcional para a apresentação)*: Abra o Admin UI em [http://127.0.0.1:8090/_/](http://127.0.0.1:8090/_/) lado a lado com a tela do app para mostrar os registros sendo criados e modificados diretamente na tabela do PocketBase!