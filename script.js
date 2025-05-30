// Conteúdos das seções
const sections = {
    home: `
        <section>
            <h2>🌱 Conexão Campo e Cidade</h2>
            <p>Conectar o campo à cidade para promover soluções para um futuro mais sustentável.</p>
            <img class="campo-img" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80" alt="Campo verde e céu azul" />
        </section>
    `,
    problemas: `
        <section>
            <h2>🌾 Problemas Enfrentados no Campo e na Cidade</h2>
            <ol>
                <li>Desvalorização do Trabalho Rural: O trabalho rural é invisibilizado pela sociedade urbana.</li>
                <li>Falta de Acesso à Tecnologia no Campo: Muitos produtores não têm acesso a internet e ferramentas digitais.</li>
                <li>Desperdício de Alimentos: A falta de infraestrutura para escoamento causa grande desperdício de alimentos.</li>
                <li>Fuga de Jovens do Campo: A migração de jovens para as cidades enfraquece o desenvolvimento rural.</li>
            </ol>
            <div class="highlight">
                <h3>Desmatamento: Um Problema Grave</h3>
                <p>O desmatamento ilegal compromete os recursos naturais e a biodiversidade. É crucial unir tecnologia e campo para monitorar e combater este problema.</p>
            </div>
        </section>
    `,
    solucoes: `
        <section>
            <h2>💡 Soluções Criativas para a Conexão Campo-Cidade</h2>
            <ol>
                <li>Apadrinhar um Produtor: Conectar consumidores urbanos com agricultores.</li>
                <li>Conexão Jovens Urbanos e Rurais: Compartilhar habilidades tecnológicas entre jovens urbanos e agricultores.</li>
                <li>Sistema de Aviso de Colheita: Notificar excedente de alimentos para consumidores urbanos.</li>
                <li>Empreendedorismo Jovem no Campo: Incentivar o empreendedorismo para manter os jovens no campo.</li>
            </ol>
            <div class="highlight">
                <h3>Como a Tecnologia Pode Combater o Desmatamento</h3>
                <p>Uso de drones, sensores e inteligência artificial para monitorar áreas florestais, identificar queimadas e garantir proteção ambiental.</p>
            </div>
        </section>
    `,
    futuro: `
        <section>
            <h2>🌍 O Futuro da Conexão entre Campo e Cidade</h2>
            <p>A integração entre o campo e a cidade é essencial para um futuro sustentável e justo. O uso consciente dos recursos naturais, aliado à tecnologia, será chave para a transformação.</p>
        </section>
    `,
    videos: `
        <section>
            <h2>🎥 Vídeos sobre Conexão Campo e Cidade</h2>
            <ul>
                <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://wa.me/55" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
            </ul>
        </section>
    `
};

const contentDiv = document.getElementById('content');
const navButtons = document.querySelectorAll('.nav-btn');

// Função para trocar conteúdo
function loadSection(section) {
    contentDiv.innerHTML = sections[section];
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.nav-btn[data-section="${section}"]`).classList.add('active');
}

// Zoom controle
let zoomLevel = 1;
const zoomInBtn = document.getElementById('zoom-in');
const zoomOutBtn = document.getElementById('zoom-out');

zoomInBtn.addEventListener('click', () => {
    if (zoomLevel < 2) {
        zoomLevel += 0.1;
        document.body.style.zoom = zoomLevel;
    }
});
zoomOutBtn.addEventListener('click', () => {
    if (zoomLevel > 0.6) {
        zoomLevel -= 0.1;
        document.body.style.zoom = zoomLevel;
    }
});

// Social buttons
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const url = btn.getAttribute('data-url');
        window.open(url, '_blank', 'noopener,noreferrer');
    });
});

// Inicializa página com home
loadSection('home');
