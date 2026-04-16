

const meusProjetos = [
    {
        titulo: "Meu Portfolio",
        tecnologias: ["HTML", "CSS", "JavaScript"],
        imagem: "./projeto.png", 
        linkRepo: "#",
        linkDeploy: "#"
    },
    {
        titulo: "Meu Portfolio - React -",
        tecnologias: ["React", "CSS", "Vite"],
        imagem: "./projeto.png", 
        linkRepo: "#",
        linkDeploy: "#"
    },
];

// 2. Renderização Dinâmica
const projectsContainer = document.getElementById('projects-container');

const renderProjetos = () => {
    const projetosHTML = meusProjetos.map(projeto => {
        const techsHTML = projeto.tecnologias.map(tech => `<span>${tech}</span>`).join('');
        const deployLink = projeto.linkDeploy ? `<a href="${projeto.linkDeploy}" target="_blank">Acessar ↗</a>` : '';

        return `
            <div class="project-card">
                <img src="${projeto.imagem}" alt="Preview do projeto ${projeto.titulo}" class="project-img" onerror="this.src='https://via.placeholder.com/600x400?text=Sem+Imagem'">
                <div class="project-content">
                    <h4>${projeto.titulo}</h4>
                    <div class="tech-stack">
                        ${techsHTML}
                    </div>
                    <div class="project-links">
                        <a href="${projeto.linkRepo}" target="_blank">GitHub</a>
                        ${deployLink ? `&nbsp; | &nbsp; ${deployLink}` : ''}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    projectsContainer.innerHTML = projetosHTML;
};

// 3. Lógica do Menu Hambúrguer (Mobile)
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fecha o menu mobile ao clicar em um link
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// 4. Lógica do Tema Claro/Escuro
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = document.getElementById('theme-icon');

const moonIcon = `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>`;
const sunIcon = `
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
`;

const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    body.classList.remove('dark-theme');
    icon.innerHTML = moonIcon;
} else {
    icon.innerHTML = sunIcon;
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        icon.innerHTML = sunIcon;
    } else {
        localStorage.setItem('theme', 'light');
        icon.innerHTML = moonIcon;
    }
});

// Inicializa a aplicação
document.addEventListener('DOMContentLoaded', renderProjetos);