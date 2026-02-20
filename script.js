// ===========================
// VALIDAÇÃO DO FORMULÁRIO
// =============================

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');
const successMessage = document.getElementById('successMessage');

// Limpar mensagens de erro ao focar
nameInput.addEventListener('focus', () => {
    nameError.textContent = '';
});

emailInput.addEventListener('focus', () => {
    emailError.textContent = '';
});

messageInput.addEventListener('focus', () => {
    messageError.textContent = '';
});

// Funções de Validação
function validateName(name) {
    if (!name.trim()) {
        return 'O nome é obrigatório.';
    }
    if (name.trim().length < 3) {
        return 'O nome deve ter pelo menos 3 caracteres.';
    }
    return '';
}

function validateEmail(email) {
    if (!email.trim()) {
        return 'O email é obrigatório.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return 'Por favor, insira um email válido.';
    }
    return '';
}

function validateMessage(message) {
    if (!message.trim()) {
        return 'A mensagem é obrigatória.';
    }
    if (message.trim().length < 10) {
        return 'A mensagem deve ter pelo menos 10 caracteres.';
    }
    return '';
}

// Manipulador do Envio do Formulário
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Limpar todas as mensagens de erro
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    successMessage.textContent = '';
    successMessage.classList.remove('show');

    // Validar todos os campos
    const nameErrorMsg = validateName(nameInput.value);
    const emailErrorMsg = validateEmail(emailInput.value);
    const messageErrorMsg = validateMessage(messageInput.value);

    // Exibir mensagens de erro
    if (nameErrorMsg) {
        nameError.textContent = nameErrorMsg;
    }
    if (emailErrorMsg) {
        emailError.textContent = emailErrorMsg;
    }
    if (messageErrorMsg) {
        messageError.textContent = messageErrorMsg;
    }

    // Se não houver erros, processar formulário
    if (!nameErrorMsg && !emailErrorMsg && !messageErrorMsg) {
        // Mostrar mensagem de sucesso
        successMessage.textContent = '✓ Solicitação recebida! Nossa equipe entrará em contato em breve.';
        successMessage.classList.add('show');

        // Limpar formulário
        contactForm.reset();

        // Redirecionar para página de sucesso após 2 segundos
        setTimeout(() => {
            window.location.href = 'success.html';
        }, 2000);
    }
});

// ===========================
// ANIMAÇÃO DE GRADIENTE COM SCROLL
// =============================

function updateScrollGradient() {
    // Calcular percentual de scroll
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    // Definir cores do gradiente
    const darkColor = '#0f0f0f';
    const orangeColor = '#ff6b00';
    const darkerColor = '#1a1a1a';

    // Interpolar entre cores com base na posição do scroll
    let gradient;
    
    if (scrollPercent < 50) {
        // Primeira metade: escuro para laranja
        const progress = scrollPercent / 50;
        gradient = `linear-gradient(135deg, 
                    hsl(0, 0%, ${15 - (progress * 5)}%), 
                    hsl(20, 100%, ${40 + (progress * 10)}%), 
                    hsl(0, 0%, ${26 - (progress * 6)}%))`;
    } else {
        // Segunda metade: laranja de volta para escuro
        const progress = (scrollPercent - 50) / 50;
        gradient = `linear-gradient(135deg, 
                    hsl(0, 0%, ${10 + (progress * 6)}%), 
                    hsl(20, 100%, ${50 - (progress * 10)}%), 
                    hsl(0, 0%, ${20 + (progress * 6)}%))`;
    }

    // Aplicar gradiente ao corpo
    document.body.style.background = gradient;
    document.body.style.backgroundAttachment = 'fixed';
}

// Escutar evento de scroll
window.addEventListener('scroll', () => {
    requestAnimationFrame(updateScrollGradient);
});

// Gradiente inicial definido
updateScrollGradient();

// ===========================
// LINKS ÂNCORA COM SCROLL SUAVE
// =============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
