// ===========================
// BANCO DE DADOS DE PROBLEMAS
// ===========================

const problemDatabase = {
    'bateria': {
        title: 'Problema de Bateria',
        severity: 'alta',
        description: 'A bateria pode estar fraca, descarregada ou com mau funcionamento.',
        symptoms: ['Carro não liga', 'Luzes fracas', 'Som fraco'],
        causes: [
            'Bateria antiga (3-5 anos)',
            'Alternador com defeito',
            'Conexões corrosivas',
            'Consumo nocturn de carga',
            'Temperatura muito fria'
        ],
        solutions: [
            { title: 'Substitua a bateria', cost: 'R$ 200-400', urgency: 'Alta', steps: ['Desconecte a bateria antiga', 'Instale a nova', 'Teste o sistema'] },
            { title: 'Limpe conexões', cost: 'R$ 0-50', urgency: 'Média', steps: ['Desligue o motor', 'Limpe os terminais', 'Reconecte os cabos'] },
            { title: 'Teste o alternador', cost: 'R$ 100', urgency: 'Média', steps: ['Faça um teste elétrico', 'Verifique se está carregando'] }
        ],
        preventive: 'Verifique a bateria a cada 6 meses, mantenha conexões limpas'
    },

    'motor': {
        title: 'Problema no Motor',
        severity: 'alta',
        description: 'Motor faz barulhos estranhos, dificuldade ao ligar ou desempenho reduzido.',
        symptoms: ['Barulho anormal', 'Falta de potência', 'Trepidação'],
        causes: [
            'Vela de ignição desgastada',
            'Óleo sujo ou vencido',
            'Filtro entupido',
            'Problema de combustão',
            'Corrente ou correia com desgaste'
        ],
        solutions: [
            { title: 'Troque óleo e filtro', cost: 'R$ 150-250', urgency: 'Alta', steps: ['Aqueça o motor', 'Drenque o óleo antigo', 'Instale novo filtro', 'Adicione óleo novo'] },
            { title: 'Substitua as velas', cost: 'R$ 80-200', urgency: 'Média', steps: ['Localize as velas', 'Remova com cuidado', 'Instale novas'] },
            { title: 'Limpe filtro de ar', cost: 'R$ 0-100', urgency: 'Baixa', steps: ['Remova o filtro', 'Limpe ou substitua', 'Reinstale'] }
        ],
        preventive: 'Troque óleo a cada 10.000 km, mantenha filtros limpos'
    },

    'freio': {
        title: 'Problema no Sistema de Freios',
        severity: 'crítica',
        description: 'Freios moles, duros, com barulho ou pedal toquando no fim',
        symptoms: ['Freio mole', 'Barulho nos freios', 'Pedal vai ao fim', 'Vibração ao frear'],
        causes: [
            'Pastilhas desgastadas',
            'Disco de freio danificado',
            'Vazamento de fluido',
            'Ar nos freios',
            'Cilindro mestre danificado'
        ],
        solutions: [
            { title: 'Substitua pastilhas', cost: 'R$ 250-500', urgency: 'Crítica', steps: ['Levante o carro', 'Remova as rodas', 'Retire as pastilhas antigas', 'Instale novas'] },
            { title: 'Troque discos de freio', cost: 'R$ 400-800', urgency: 'Crítica', steps: ['Remova as rodas', 'Retire o disco', 'Instale novo disco'] },
            { title: 'Purgue o sistema', cost: 'R$ 100-200', urgency: 'Média', steps: ['Verifique nível do fluido', 'Remova ar do sistema'] }
        ],
        preventive: '⚠️ CRÍTICO: Freios são essenciais para segurança. Inspecione mensalmente'
    },

    'suspenção': {
        title: 'Problema de Suspensão',
        severity: 'média',
        description: 'Carro bate no solo, trepida muito ou desvira para um lado',
        symptoms: ['Barulho na suspensão', 'Carro muito baixo', 'Trepidação', 'Carro torcido'],
        causes: [
            'Amortecedor quebrado',
            'Mola enferrujada',
            'Bucha desgastada',
            'Barra estabilizadora danificada'
        ],
        solutions: [
            { title: 'Substitua amortecedor', cost: 'R$ 400-800', urgency: 'Alta', steps: ['Levante o carro', 'Remova a roda', 'Desconecte amortecedor antigo', 'Instale novo'] },
            { title: 'Lubrific bucha', cost: 'R$ 50-150', urgency: 'Média', steps: ['Limpe a bucha', 'Aplique graxa'] },
            { title: 'Alinhe as rodas', cost: 'R$ 100-200', urgency: 'Média', steps: ['Leve a oficina especializada'] }
        ],
        preventive: 'Inspecione amortecedores a cada 50.000 km'
    },

    'eletrico': {
        title: 'Problema Elétrico',
        severity: 'média',
        description: 'Luz acesa no painel, falha de componentes elétricos ou bateria descarrega rápido',
        symptoms: ['Luz de avaria acesa', 'Faróis fracos', 'Bateria descarrega', 'Alternador não funciona'],
        causes: [
            'Alternador com defeito',
            'Fiação corrosiva',
            'Bateria fraca',
            'Consumo excessivo',
            'Fusível queimado'
        ],
        solutions: [
            { title: 'Teste alternador', cost: 'R$ 100-200', urgency: 'Alta', steps: ['Faça teste elétrico profissional', 'Substitua se necessário'] },
            { title: 'Verifique fusíveis', cost: 'R$ 0-50', urgency: 'Média', steps: ['Localize a caixa de fusíveis', 'Verifique se há fusível queimado'] },
            { title: 'Limpe conexões', cost: 'R$ 50-100', urgency: 'Média', steps: ['Desconecte bateria', 'Limpe terminais e fiação'] }
        ],
        preventive: 'Inspecione sistema elétrico anualmente'
    },

    'pneu': {
        title: 'Problema com Pneus',
        severity: 'média',
        description: 'Pneus furados, carecas, desgastados ou fora de pressão',
        symptoms: ['Pneu furado', 'Pneu vencido', 'Desgaste irregular', 'Perda de pressão'],
        causes: [
            'Furos ou perfurações',
            'Desgaste natural',
            'Pressão incorreta',
            'Má calibragem das rodas',
            'Alinhamento ruim'
        ],
        solutions: [
            { title: 'Substitua o pneu', cost: 'R$ 300-800', urgency: 'Alta', steps: ['Remova o pneu danificado', 'Instale novo', 'Calibre a pressão'] },
            { title: 'Repare pequenos furos', cost: 'R$ 30-80', urgency: 'Média', steps: ['Localize o furo', 'Aplique adesivo de reparo'] },
            { title: 'Alinhe as rodas', cost: 'R$ 100-200', urgency: 'Média', steps: ['Leve a oficina especializada'] }
        ],
        preventive: 'Calibre pneus mensalmente, substitua a cada 40.000 km'
    },

    'ar-condicionado': {
        title: 'Problema no Ar-Condicionado',
        severity: 'baixa',
        description: 'Ar não esfria, vazamento ou barulho estranho no sistema',
        symptoms: ['Ar não funciona', 'Ar morno', 'Barulho no AC', 'Vazamento de óleo'],
        causes: [
            'Gás refrigerante baixo',
            'Compressor danificado',
            'Vazamento no sistema',
            'Filtro entupido'
        ],
        solutions: [
            { title: 'Recarregue o gás', cost: 'R$ 200-400', urgency: 'Média', steps: ['Leve a oficina especializada', 'Faça recarga do gás R-134a'] },
            { title: 'Substitua o compressor', cost: 'R$ 1500-3000', urgency: 'Alta se houver vazamento', steps: ['Serviço especializado'] },
            { title: 'Limpe o filtro/condensador', cost: 'R$ 100-300', urgency: 'Baixa', steps: ['Desmonte e limpe'] }
        ],
        preventive: 'Recarregue gás anualmente, mantenha manutenção regular'
    }
};

// ===========================
// FUN\u00c7\u00c3O: Preencher Problema
// =============================

function fillProblem(problem) {
    const textarea = document.getElementById('problemDesc');
    if (textarea) {
        textarea.value = problem;
        textarea.focus();
    }
}

// ===========================
// FUN\u00c7\u00c3O: Submeter Diagn\u00f3stico
// =============================

document.addEventListener('DOMContentLoaded', function() {
    const diagnosticForm = document.getElementById('diagnosticForm');
    if (diagnosticForm) {
        diagnosticForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitDiagnosis();
        });
    }
});

function submitDiagnosis() {
    const vehicleModel = document.getElementById('vehicleModel').value;
    const problemDesc = document.getElementById('problemDesc').value;
    const whenStarted = document.getElementById('whenStarted').value;

    // Valida\u00e7\u00e3o
    if (!vehicleModel.trim()) {
        document.getElementById('vehicleError').textContent = 'O modelo do veículo é obrigatório.';
        return;
    }
    if (!problemDesc.trim()) {
        document.getElementById('problemError').textContent = 'Descreva o problema.';
        return;
    }
    if (!whenStarted) {
        document.getElementById('whenError').textContent = 'Selecione quando começou.';
        return;
    }

    // Limpar erros
    document.getElementById('vehicleError').textContent = '';
    document.getElementById('problemError').textContent = '';
    document.getElementById('whenError').textContent = '';

    // Armazenar dados no sessionStorage
    sessionStorage.setItem('diagnosisData', JSON.stringify({
        vehicleModel,
        problemDesc,
        whenStarted,
        timestamp: new Date().toLocaleString('pt-BR')
    }));

    // Redirecionar para resultado
    setTimeout(() => {
        window.location.href = 'diagnosis-result.html';
    }, 500);
}

// ===========================
// FUN\u00c7\u00c3O: Exibir Resultado
// =============================

function displayDiagnosisResult() {
    const data = JSON.parse(sessionStorage.getItem('diagnosisData'));
    if (!data) return;

    // Preencherer informa\u00e7\u00f5es
    document.getElementById('resultTime').textContent = `Diagnóstico realizado em: ${data.timestamp}`;
    document.getElementById('vehicleInfo').textContent = data.vehicleModel;
    document.getElementById('problemInfo').textContent = data.problemDesc;

    // Analisar problema
    const matchedProblem = analyzeProblem(data.problemDesc);

    // Preencher diagn\u00f3stico
    const diagnosisContent = document.getElementById('diagnosisContent');
    if (matchedProblem) {
        diagnosisContent.innerHTML = `
            <div class="diagnosis-card">
                <div class="severity-badge severity-${matchedProblem.severity}">${matchedProblem.severity.toUpperCase()}</div>
                <h4>${matchedProblem.title}</h4>
                <p>${matchedProblem.description}</p>
                
                <div class="problem-section">
                    <strong>Possíveis Causas:</strong>
                    <ul>
                        ${matchedProblem.causes.map(cause => `<li>${cause}</li>`).join('')}
                    </ul>
                </div>

                <div class="problem-section">
                    <strong>Manutenção Preventiva:</strong>
                    <p>${matchedProblem.preventive}</p>
                </div>
            </div>
        `;
    } else {
        diagnosisContent.innerHTML = `
            <div class="diagnosis-card">
                <div class="severity-badge severity-media">MÉDIA</div>
                <h4>Problema Genérico Identificado</h4>
                <p>Não foi possível identificar o problema específico. Recomendamos consultar um especialista.</p>
                <p><strong>O problema descrito:</strong> "${data.problemDesc}"</p>
            </div>
        `;
    }

    // Preencher solu\u00e7\u00f5es
    if (matchedProblem) {
        displaySolutions(matchedProblem.solutions);
    }
}

function analyzeProblem(description) {
    const desc = description.toLowerCase();

    // Procurar por palavra-chave
    if (desc.includes('bateria') || desc.includes('liga') || desc.includes('descarrega')) {
        return problemDatabase.bateria;
    }
    if (desc.includes('motor') || desc.includes('barulho') || desc.includes('potência')) {
        return problemDatabase.motor;
    }
    if (desc.includes('freio') || desc.includes('mole') || desc.includes('pedal')) {
        return problemDatabase.freio;
    }
    if (desc.includes('suspensão') || desc.includes('bate') || desc.includes('trepida')) {
        return problemDatabase.suspenção;
    }
    if (desc.includes('luz') || desc.includes('elétrico') || desc.includes('alternador')) {
        return problemDatabase.eletrico;
    }
    if (desc.includes('pneu') || desc.includes('roda') || desc.includes('furo')) {
        return problemDatabase.pneu;
    }
    if (desc.includes('ar') || desc.includes('condicionado') || desc.includes('esfria')) {
        return problemDatabase['ar-condicionado'];
    }

    return null;
}

function displaySolutions(solutions) {
    const solutionsGrid = document.getElementById('solutionsGrid');
    solutionsGrid.innerHTML = solutions.map(sol => `
        <div class="solution-card">
            <div class="solution-header">
                <h4>${sol.title}</h4>
                <span class="urgency-badge urgency-${sol.urgency.toLowerCase()}">${sol.urgency}</span>
            </div>
            <div class="solution-cost">Custo estimado: <strong>${sol.cost}</strong></div>
            <div class="solution-steps">
                <strong>Passos:</strong>
                <ol>
                    ${sol.steps.map(step => `<li>${step}</li>`).join('')}
                </ol>
            </div>
        </div>
    `).join('');
}
