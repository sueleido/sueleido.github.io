# Portfólio Profissional — Sueleido Chaves

> **Infraestrutura, Redes e Cloud: conectando ambientes, automatizando processos e construindo soluções resilientes.**

Este é o repositório oficial do portfólio profissional de **Sueleido Chaves da Silva Filho**, desenvolvido sob medida com arquitetura estática leve, moderna, responsiva e pronta para hospedagem gratuita de alta performance no **GitHub Pages**.

---

## 🧭 Visão Geral

O site foi projetado para transmitir autoridade técnica e honestidade profissional, destacando:
- **Mais de 7 anos de experiência prática** em infraestrutura crítica corporativa, redes de backbone de grande operadora (Grupo Brisanet), protocolos OSPF/MPLS, DWDM e suporte a projetos de expansão como o 5G.
- **Transição consolidada para Cloud & DevOps**, evidenciada pela certificação **AWS Certified Solutions Architect – Associate (SAA-C03)** e cursos avançados.
- **Projetos práticos e reais** no GitHub com **Docker, Docker Compose, Ansible, Vagrant, Linux e Zabbix**.
- **Laboratórios de Cloud (Roadmap)** com arquiteturas detalhadas em desenvolvimento (Terraform Multi-AZ, CI/CD com GitHub Actions, Kubernetes local com Kind).

---

## 🛠️ Tecnologias e Arquitetura

O projeto adota uma arquitetura estática pura, sem dependências frágeis de compilação ou vulnerabilidades de dependências externas (`npm`/`node_modules`):

- **HTML5 Semântico**: Estrutura acessível com metadados SEO, Open Graph, Twitter Cards e marcação Schema.org (`Person`).
- **CSS3 Moderno**: Variáveis CSS, layout CSS Grid e Flexbox, tipografia mono/sans, tema escuro sofisticado inspirado em terminais e infraestrutura de redes.
- **JavaScript Modular (ES6+)**: Componentes desacoplados para menu responsivo móvel, scroll spy, console de terminal interativo simulando diagnósticos de infraestrutura e utilitário de cópia de e-mail.
- **GitHub Pages + GitHub Actions**: Pipeline de publicação automatizado via workflow nativo `.github/workflows/deploy.yml`.

---

## 📂 Estrutura de Arquivos

```text
portfolio-sueleido/
├── index.html                  # Documento principal com todas as seções estruturadas
├── .nojekyll                   # Garante que o GitHub Pages sirva todos os assets e pastas
├── css/
│   ├── variables.css           # Paleta de cores (Dark/Mint/Cyan), fontes e medidas
│   ├── reset.css               # Reset moderno, estilos de acessibilidade e scroll suave
│   ├── components.css          # Botões, cards, tags, terminal, linha do tempo e badges
│   └── main.css                # Layouts de grid, header, seções e media queries responsivas
├── js/
│   ├── main.js                 # Inicialização de scripts, observer de animações e utilitários
│   ├── navigation.js           # Menu móvel acessível e scroll-spy ativo
│   └── terminal.js             # Console interativo de diagnóstico de infraestrutura
├── assets/
│   ├── favicon.svg             # Favicon vetorial exclusivo no estilo terminal
│   └── avatar.jpg              # Foto de perfil sincronizada do GitHub
├── .github/
│   └── workflows/
│       └── deploy.yml          # Workflow do GitHub Actions para publicação automática
└── README.md                   # Documentação completa de execução e publicação
```

---

## 💻 Como Executar Localmente

Como o projeto é estático e puro, você pode testá-lo instantaneamente utilizando o Python (já instalado em qualquer sistema Linux):

1. Abra o terminal no diretório do projeto:
   ```bash
   cd /home/leidson/portfolio-sueleido
   ```

2. Inicie o servidor HTTP embutido:
   ```bash
   python3 -m http.server 8000
   ```

3. Abra seu navegador no endereço:
   ```text
   http://localhost:8000
   ```

---

## 🚀 Publicação no GitHub Pages

### Duas Estratégias de Publicação

1. **Repositório de Usuário (`sueleido.github.io`) — Recomendado para portfólio principal**:
   - URL resultante: `https://sueleido.github.io/`
   - O site será a raiz do seu domínio pessoal no GitHub.

2. **Repositório de Projeto (`portfolio` ou `meu-portfolio`)**:
   - URL resultante: `https://sueleido.github.io/portfolio/`
   - Ideal se você preferir reservar a raiz para outros fins.

---

### Passo a Passo de Publicação com Git

Caso o `git` ainda não esteja instalado no seu sistema:
```bash
sudo apt update && sudo apt install -y git
```

#### 1. Configurar o repositório local
```bash
cd /home/leidson/portfolio-sueleido
git init
git config user.name "Sueleido Chaves"
git config user.email "sueleidoc@gmail.com"
git branch -M main
```

#### 2. Adicionar os arquivos e realizar o commit inicial
```bash
git add .
git commit -m "feat: implementacao inicial do portfolio profissional de infraestrutura e cloud"
```

#### 3. Criar o repositório no GitHub
- Acesse https://github.com/new
- Nome do repositório: `sueleido.github.io` (ou `portfolio`)
- Visibilidade: **Public**
- **Não** marque a opção de inicializar com README (o projeto já possui o README completo).
- Clique em **Create repository**.

#### 4. Vincular o repositório remoto e fazer o push
```bash
# Se o repositório criado for sueleido.github.io:
git remote add origin https://github.com/sueleido/sueleido.github.io.git
git push -u origin main
```

#### 5. Ativar o GitHub Pages com GitHub Actions
1. No repositório no GitHub, clique na aba **Settings** (Configurações).
2. Na barra lateral esquerda, clique em **Pages**.
3. Na seção **Build and deployment** > **Source**, altere de *"Deploy from a branch"* para:
   👉 **GitHub Actions**
4. O GitHub executará automaticamente o workflow localizado em `.github/workflows/deploy.yml`.
5. Em cerca de 1 minuto, seu site estará no ar na URL indicada!

---

## 🔄 Como Atualizar o Portfólio no Futuro

- **Adicionar um novo projeto ou laboratório**:
  Abra `index.html` e adicione um novo `<article class="project-card reveal">` na seção `/03` ou `/04`.
- **Atualizar certificações**:
  Edite a seção `/06` em `index.html` e inclua o novo link ou credencial.
- **Publicar as alterações**:
  ```bash
  git add index.html
  git commit -m "docs: adiciona nova certificacao/projeto"
  git push origin main
  ```
  O GitHub Actions fará o build e deploy automaticamente sem qualquer intervenção manual.

---

## 🔒 Segurança e Privacidade

- Nenhuma credencial, token interno, topologia restrita ou endereço IP privado de empresas foi exposto.
- Todas as informações profissionais refletem dados publicamente confirmados na trajetória do profissional e em seus repositórios no GitHub.
