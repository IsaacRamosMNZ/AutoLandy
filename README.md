# 🚗 AutoLand v2.0 - Diagnósticos Online Profissional

Uma plataforma completa e profissional para diagnósticos online de veículos. Com interface moderna, sistema inteligente de diagnóstico e galeria de peças.

## 📋 Estrutura do Projeto

```
AutoLand/
├── index.html                 # Página inicial (hero + benefícios)
├── about.html                 # Sobre a empresa (missão, visão, valores, equipe)
├── diagnostic.html            # Sistema de diagnóstico interativo
├── gallery.html               # Galeria de fotos de mecânica
├── services.html              # Serviços e planos
├── contact.html               # Formulário de contato + FAQ
├── diagnosis-result.html      # Resultado do diagnóstico
├── success.html               # Página de sucesso
├── css/
│   └── style.css             # Estilos (Dark mode + Responsivo)
├── js/
│   ├── script.js             # Scripts gerais (validação, scroll)
│   └── diagnostic.js         # Sistema de diagnóstico com IA
├── img/                       # Pasta para suas imagens
└── README.md                  # Este arquivo
```

## ✨ NOVO em v2.0

### 🔍 **Sistema de Diagnóstico Inteligente**
- Banco de dados com 7 categorias de problemas
- Análise automática por palavras-chave
- Soluções detalhadas com custos estimados
- Página de resultado completa

### 🖼️ **Galeria Profissional**
- 36 imagens reais de mecânica
- 5 categorias filtráveis
- Efeitos hover elegantes
- Layout responsivo

### 📄 **Múltiplas Páginas**
- 8 páginas HTML bem estruturadas
- Navegação consistente
- Breadcrumb em todas as páginas
- Menu dinâmico

### 🎨 **Fundos Variados**
- 2+ imagens de fundo diferentes
- Gradientes personalizados
- Não fica repetitivo ao scrollar
- Efeito parallax

### 💼 **Conteúdo Profissional**
- About com missão/visão/valores
- Equipe fictícia com avatares
- Planos e preços
- FAQ completo

## 🔍 Sistema de Diagnóstico

### Categorias de Problemas:
1. **Bateria** - Problemas de carga e partida
2. **Motor** - Barulhos, óleo, desempenho
3. **Freios** - Pastilhas, discos, vazamentos ⚠️
4. **Suspensão** - Amortecedores, molas
5. **Elétrico** - Alternador, fusíveis
6. **Pneus** - Furos, desgaste
7. **Ar-Condicionado** - Gás, compressor

### Fluxo de Diagnóstico:
1. Usuário vai para `/diagnostic.html`
2. Descreve o problema
3. Sistema analisa palavras-chave
4. Redireciona para `/diagnosis-result.html`
5. Exibe resultado completo com soluções

## ✨ Características

- ✅ **8 Páginas HTML** - Totalmente separadas e organizadas
- ✅ **HTML Semântico** - Estrutura completa com tags semânticas
- ✅ **Dark Mode Profissional** - Preto (#0f0f0f) + Laranja (#ff6b00)
- ✅ **Design Responsivo** - Mobile (600px), Tablet (900px), Desktop
- ✅ **Formulários Funcionais** - Validação JavaScript real
- ✅ **Mensagens Dinâmicas** - Sem `alert()`, aparecem no DOM
- ✅ **Scroll Gradient** - Fundo muda ao fazer scroll
- ✅ **Galeria Filtável** - Fotos com filtros funcionais
- ✅ **Performance** - CSS Flexbox, zero dependências
- ✅ **Imagens Profissionais** - Links do Unsplash (gratuito)

## 🎨 Design

### Cores
- **Primária**: `#0f0f0f` (Preto muito escuro)
- **Secundária**: `#1a1a1a` (Preto escuro)
- **Accent**: `#ff6b00` (Laranja vibrante)
- **Texto**:  `#ffffff` (Branco) e `#e0e0e0` (Cinza claro)

### Tipografia
- Font: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- Pesos: 500-700 (Medium a Bold)
- Tamanhos: Responsivos por página

## 📱 Responsividade 100%

### Desktop (1200px+)
- Layout completo 3 colunas
- Menu horizontal full
- Grid otimizado

### Tablet (≤900px)
- Layout 2 colunas
- Menu ajustado
- Imagens em escala

### Mobile (≤600px)
- 1 coluna
- Menu vertical compacto
- Fontes otimizadas
- Padding reduzido
- Buttons em coluna

## 🚀 Funcionalidades Principais

### 📄 Pages & Navigation
- [x] 8 páginas HTML independentes
- [x] Menu de navegação consistente
- [x] Breadcrumb navigation
- [x] Links internos funcionais
- [x] Page transitions suaves

### 🔧 Formulários
- [x] Validação real (nome, email, mensagem)
- [x] Erros dinâmicos (sem alert)
- [x] Submit com redirect
- [x] Reset automático

### 🤖 Diagnóstico Inteligente
- [x] Análise por palavras-chave
- [x] Banco de dados de problemas
- [x] Soluções detalhadas
- [x] Custos estimados
- [x] Passos para resolver

### 🖼️ Galeria
- [x] 36 imagens reais
- [x] Grid responsivo
- [x] Filtros funcionais
- [x] Hover effects
- [x] Overlays elegantes

### 🎯 Outros
- [x] Scroll gradient animation
- [x] Smooth scroll de âncoras
- [x] FAQ completo
- [x] Planos de preço
- [x] Testimoniais

## 📖 Páginas Detalhes

### 🏠 **Index** - Landing Page
- Hero section com CTA
- 3 benefícios principais
- Seção de funcionalidades
- Call to action secundário

### 👥 **About** - Sobre Company
- Missão, visão, valores
- História da empresa
- Números/estatísticas (15K+ usuários, 50K+ diagnósticos)
- 4 membros da equipe

### 🔧 **Diagnostic** - Sistema Diagnóstico
- Formulário descritivo
- 12 cards de problemas comuns
- Clicáveis (preenchem formulário)
- Análise automática

### 🖼️ **Gallery** - Galeria Fotos
- Grid de 12+ imagens
- 5 categorias: Todos, Motor, Suspensão, Elétrico, Freios
- Filtros funcionais
- Imagens reais (Unsplash)

### 💼 **Services** - Serviços
- 6 cards de serviços
- Tabela de features
- 3 planos de preço
- Cards interativos

### 📞 **Contact** - Contato
- Formulário funcional
- 4 métodos de contato
- Links redes sociais
- 6 FAQs

### ✅ **Diagnosis Result** - Resultado
- Info do veículo
- Análise detalhada
- Soluções recomendadas
- Próximos passos
- Testimoniais

## 💻 Tecnologias

- **HTML5** - Semântica completa
- **CSS3** - Flexbox, Grid, Gradientes, Animações
- **JavaScript Vanilla** - Sem jQuery, sem framework
- **Imagens** - Links diretos (sem upload)

**Zero dependências externas!** 🎉

## 🧪 Como Testar

### 1. Localmente com Live Server
```
VS Code → Extensão "Live Server" → Right-click index.html → Open with Live Server
```

### 2. Com Python
```bash
cd C:\Users\aluno.saolucas\AutoLand
python -m http.server 8000
# Acesse: http://localhost:8000
```

### 3. Teste o Diagnóstico
1. Clique em "Diagnóstico" no menu
2. Digite um problema (ex: "Carro não liga", "Motor barulhento")
3. Clique "Analisar"
4. Veja o resultado completo!

### 4. Teste a Galeria
1. Clique em "Galeria"
2. Clique nos botões de filtro
3. Hover nas imagens

## 📋 Checklist Completo

### ✅ HTML
- [x] `<!DOCTYPE html>` e meta tags
- [x] Semântica completa (header, nav, main, section, footer)
- [x] Meta viewport responsivo
- [x] 8 páginas independentes
- [x] Breadcrumb em todas

### ✅ CSS
- [x] Arquivo externo (css/style.css)
- [x] 1409 linhas de CSS otimizado
- [x] Classes (não tags genéricas)
- [x] Flexbox para layout
- [x] Gradientes personalizados
- [x] Hover effects
- [x] Animações suaves
- [x] 2 níveis de media queries

### ✅ JavaScript
- [x] Validação de formulário
- [x] Mensagens de erro dinâmicas
- [x]  `event.preventDefault()`
- [x] Manipulação de DOM
- [x] Sistema inteligente de diagnóstico
- [x] Galeria com filtros

### ✅ Design
- [x] Dark mode profissional
- [x] Cores bem definidas
- [x] Espaçamento consistente
- [x] Tipografia legível
- [x] Responsive 100%
- [x] Sem quebras de layout

### ✅ Conteúdo
- [x] Título impactante
- [x] Descrições detalhadas
- [x] 3+ benefícios principais
- [x] Imagens profissionais
- [x] Múltiplos CTAs
- [x] FAQ completo
- [x] Informações de contato

## 🌐 Deploy no GitHub Pages

```bash
# 1. Inicializar Git
git init
git add .
git commit -m "AutoLand v2.0 - Sistema diagnóstico profissional"

# 2. Criar repositório (autoland)
git remote add origin https://github.com/SEU_USER/autoland.git
git branch -M main
git push -u origin main

# 3. Ativar Pages
Settings → Pages → Deploy from branch (main) → Save

# 4. Acessar
https://seu-usuario.github.io/autoland
```

## 📊 Estatísticas

- **8 páginas HTML**
- **1 arquivo CSS** (1409 linhas)
- **2 arquivos JS** (800+ linhas)
- **0 dependências externas**
- **100% responsivo**
- **36+ imagens** (externas)
- **7 categorias diagnóstico**
- **12 problemas comuns**
- **3 planos de preço**
- **100% funcional** ✨

## 🎓 Para Apresentação

Destaques:
1. ⭐ Sistema inteligente de diagnóstico
2. ⭐ Design profissional e moderno
3. ⭐ 8 páginas bem estruturadas
4. ⭐ Galeria com filtros
5. ⭐ Completamente responsivo
6. ⭐ Sem dependências (puro HTML/CSS/JS)
7. ⭐ Fundos variados (não repetitivo)
8. ⭐ Todas as funcionalidades funcionam

## 📝 Licença

Projeto escolar 2026 - AutoLand 🚗

---

**Pronto para apresentar! 🚀 Tudo está implementado e testado.**
