# PocketBase ToDo App - Estudo de Tecnologia

Este repositório contém o código prático para a demonstração do **PocketBase**, um backend open-source em um único executável. O exemplo desenvolvido é um aplicativo ToDo simples.

## Funcionalidades Demonstradas
* Operações de CRUD (Create, Read, Update, Delete) utilizando a API REST automática do PocketBase.
* Persistência de dados usando o SQLite embarcado do PocketBase.

## Pré-requisitos
* Ter baixado o executável do [PocketBase](https://pocketbase.io/docs/) compatível com o seu sistema operacional.
* Um navegador web atualizado.

## Instruções de Instalação e Configuração

1. **Iniciando o Backend:**
   * Extraia o executável do PocketBase dentro da pasta `backend`.
   * Abra o terminal nesta pasta e execute o comando:
     ```bash
     ./pocketbase serve
     ```
   * O servidor estará rodando em `http://127.0.0.1:8090`.

2. **Configurando o Banco de Dados:**
   * Acesse o Admin Dashboard em `http://127.0.0.1:8090/_/`.
   * Crie uma nova Collection chamada `tarefas`.
   * Adicione os campos: `titulo` (Plain text) e `concluida` (Boolean).
   * Vá em **API Rules** da collection `tarefas` e destrave todas as regras (List, View, Create, Update, Delete) clicando no ícone de cadeado. Salve.

## Instruções de Teste (Execução)

1. Mantenha o servidor do PocketBase rodando no terminal.
2. Abra a pasta `frontend` e dê um clique duplo no arquivo `index.html` para abri-lo diretamente no navegador.
3. Teste a aplicação:
   * Digite uma tarefa e clique em "Adicionar" (Create).
   * Clique no nome da tarefa para alternar seu status de conclusão (Update).
   * Clique no botão "X" para excluir uma tarefa (Delete).
   * Atualize a página e veja que as tarefas continuam salvas, sendo lidas do banco (Read).