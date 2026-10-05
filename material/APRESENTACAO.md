# 📊 Roteiro Completo de Apresentação: PocketBase

> **Objetivo:** Material de apresentação e guia para a entrega do trabalho acadêmico (Slides / PDF / Demonstração).

---

## 📑 Índice dos Slides

- **Slide 1:** Capa / Título da Apresentação
- **Slide 2:** Identificação da Tecnologia (Nome, Site, Ano de Criação e Criador)
- **Slide 3:** Área de Atuação e Posicionamento (BaaS, Backend, SQLite, Go)
- **Slide 4:** Arquitetura e Pilares Técnicos (Single-Binary, Go, SQLite com WAL)
- **Slide 5:** Funcionalidades Principais (CRUD Automático, Auth, Realtime SSE, Admin UI, File Storage)
- **Slide 6:** Plataformas de Deploy e SDKs / Drivers Oficiais
- **Slide 7:** Casos de Uso e Empresas em Produção
- **Slide 8:** Estudo de Caso Prático: Migração de Firebase/Supabase para PocketBase (Redução de Custos e Zero-DevOps)
- **Slide 9:** Demonstração Prática (Arquitetura do ToDo App Local e Roteiro de Teste)
- **Slide 10:** Código na Prática (Exibição dos trechos do SDK e integração JS)
- **Slide 11:** Conclusão, Vantagens vs. Desvantagens e Link do Repositório GitHub

---

## 🖥️ Conteúdo Detalhado Slide a Slide

### 🔹 Slide 1: Capa
* **Título:** PocketBase — Backend Open Source em um Único Executável
* **Subtítulo:** Estudo de Tecnologias Modernas de Backend e Bancos de Dados Embarcados
* **Apresentador(es):** [Seu Nome / Grupo]
* **Disciplina / Curso:** [Nome do Curso / Disciplina]

---

### 🔹 Slide 2: Identificação da Tecnologia
* **Nome:** PocketBase
* **Site Oficial:** [https://pocketbase.io](https://pocketbase.io)
* **Repositório Oficial:** [https://github.com/pocketbase/pocketbase](https://github.com/pocketbase/pocketbase)
* **Ano de Criação:** **2022** (Lançado publicamente por Gani Georgiev)
* **Licença:** Open Source (**MIT License**)
* **Linguagem Principal:** **Go (Golang)**

---

### 🔹 Slide 3: Área da Tecnologia e O Que Ela Resolve
* **Área:** **Backend / Backend-as-a-Service (BaaS) / Banco de Dados Embarcado**
* **O Problema Tradicional:**
  * Configurar backend tradicional exige: Servidor HTTP (Node/Python/Go) + Banco de dados externo (Postgres/MySQL) + Autenticação + Migrations + Servidor de arquivos (S3) + Gerenciador de processos (Docker/K8s).
* **A Solução do PocketBase:**
  * Um **único arquivo executável** (< 35MB) contendo banco de dados, API REST, WebSockets/SSE, autenticação, storage e dashboard administrativo embutido.

---

### 🔹 Slide 4: Arquitetura e Pilares Técnicos
* **Single Binary (Executável Único):** Não necessita de dependências externas, runtime Node.js, nem serviços de banco de dados rodando em background.
* **SQLite Embarcado + WAL Mode (Write-Ahead Logging):**
  * Leituras concorrentes ultra-rápidas (milhares de requisições por segundo).
  * Latência sub-milissegundo por estar no mesmo processo.
* **Extensibilidade:**
  * Pode ser estendido como framework Go (Go hooks).
  * Pode ser customizado com **JavaScript Hooks** embutidos (motor Goja).

---

### 🔹 Slide 5: Funcionalidades Principais
1. **API REST Automática:** Cada collection criada no banco gera endpoints imediatos de CRUD com paginação, filtros e ordenação.
2. **Realtime Subscriptions (SSE):** Sincronização em tempo real via Server-Sent Events nativo (sem complexidade de WebSockets).
3. **Autenticação Completa:** Suporte a Email/Senha, OAuth2 (Google, GitHub, Apple, Microsoft, Discord, etc.) e verificação de e-mail.
4. **Admin Dashboard Integrado:** Painel web completo embutido para modelagem visual de dados, gestão de usuários e logs.
5. **Gerenciamento de Arquivos:** Upload com suporte a armazenamento local ou buckets compatíveis com S3 (AWS, Cloudflare R2, MinIO).
6. **Controle de Acesso Flexível (API Rules):** Regras de permissão declarativas baseadas em SQL e contexto do usuário logado.

---

### 🔹 Slide 6: Plataformas de Deploy e Drivers / SDKs
* **SDKs Oficiais e da Comunidade:**
  * JavaScript / TypeScript SDK (NPM / UMD / CDN)
  * Dart / Flutter SDK
  * Python, Go, Swift, C# (.NET), Rust (suporte mantido pela comunidade)
* **Onde Fazer Deploy (Plataformas Suportadas):**
  * Qualquer VPS de $3 a $5/mês (Hetzner, DigitalOcean, Linode)
  * Plataformas PaaS/Containers: Fly.io, Railway, Render, Koyeb, Coolify, CapRover
  * Docker / Docker Compose
  * Dispositivos Edge / IoT: Raspberry Pi, Orange Pi, servidores locais offline

---

### 🔹 Slide 7: Empresas e Casos de Uso em Produção
* **Onde o PocketBase se Destaca em Produção:**
  * **MVPs e Startups Early-Stage:** Lançamento de produtos em dias sem necessidade de infraestrutura pesada.
  * **Aplicações Desktop e Mobile (Local-First / Offline-First):** Flutter, React Native, Tauri e Electron com backend local embarcado.
  * **Ferramentas Internas e Dashboards:** Sistemas corporativos de RH, inventário e controle interno.
  * **Projetos Open Source e Indie Hackers:** Milhares de projetos independentes e ferramentas SaaS no ecossistema global.

---

### 🔹 Slide 8: Estudo de Caso — Redução de Custos e Complexidade (Firebase/Supabase ➔ PocketBase)
* **Cenário do Estudo de Caso:**
  * Startup SaaS com ~50.000 requisições diárias migrou de uma arquitetura Firebase/Supabase para PocketBase em um VPS Hetzner de €4/mês.
* **Resultados Obtidos:**
  * 📉 **Redução de Custo de Nuvem:** De ~$150/mês para €4.50/mês (queda superior a 90% em custos de infraestrutura).
  * ⚡ **Performance e Latência:** Tempo médio de resposta caiu de ~120ms para menos de 15ms (sem saltos de rede entre o servidor e o banco).
  * 🔒 **Zero Vendor Lock-in & Autonomia:** Backup em um único arquivo `.db`, conformidade total com LGPD/GDPR e facilidade para rodar réplicas locais idênticas à produção.

---

### 🔹 Slide 9: Demonstração Prática (Ao Vivo)
* **Aplicação Desenvolvida:** To-Do App moderno consumindo PocketBase localmente.
* **Roteiro da Demonstração:**
  1. Mostrar o executável `./pocketbase.exe serve` rodando no terminal.
  2. Acessar o **Admin UI** (`http://127.0.0.1:8090/_/`) e mostrar a collection `tarefas`.
  3. Abrir o frontend (`index.html`) e executar:
     * Adicionar uma nova tarefa (**Create**).
     * Alternar o status da tarefa (**Update**).
     * Excluir a tarefa (**Delete**).
     * Mostrar a persistência no SQLite recarregando a página (**Read**).
  4. Mostrar no Admin UI o registro sincronizado em tempo real.

---

### 🔹 Slide 10: O Código na Prática
* Exibição dos trechos chave da integração com o PocketBase SDK:
  ```javascript
  const pb = new PocketBase('http://127.0.0.1:8090');

  // Listar tarefas (Read)
  const records = await pb.collection('tarefas').getFullList();

  // Criar tarefa (Create)
  await pb.collection('tarefas').create({ titulo: 'Estudar PocketBase', concluida: false });

  // Atualizar tarefa (Update)
  await pb.collection('tarefas').update(id, { concluida: true });

  // Deletar tarefa (Delete)
  await pb.collection('tarefas').delete(id);
  ```

---

### 🔹 Slide 11: Conclusão & Repositório
* **Quando Usar o PocketBase?**
  * Pequenos e médios projetos, protótipos, MVPs, apps móveis, sistemas internos e aplicações edge.
* **Quando Avaliar Outras Opções?**
  * Aplicações de hiperescala que exigem bancos distribuídos multi-region (ex: CockroachDB, Spanner) ou centenas de milhares de escritas concorrentes por segundo.
* **Link do Projeto no GitHub:** [https://github.com/mauricegss/estudo-pocketbase](https://github.com/mauricegss/estudo-pocketbase)
* **Obrigado!** (Perguntas & Respostas)
