// ===========================
// Portfolio Marco
// ===========================

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const alvo = document.querySelector(this.getAttribute("href"));

        if (alvo) {

            alvo.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});

// ===========================
// Navbar muda ao descer
// ===========================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        nav.classList.add("scroll");

    } else {

        nav.classList.remove("scroll");

    }

});

// ===========================
// Revelar elementos ao scroll
// ===========================

const elementos = document.querySelectorAll(
    ".card, .project, section h2, section p"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .15
});

elementos.forEach(el => {

    observer.observe(el);

});

// ===========================
// Efeito Hover Cards
// ===========================

document.querySelectorAll(".card, .project").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        card.style.setProperty("--x", x + "px");
        card.style.setProperty("--y", y + "px");

    });

});

// ===========================
// Digitação do título
// ===========================

const titulo = document.querySelector("header h1 span");

const texto = "Marco";

let i = 0;

titulo.textContent = "";

function escrever() {

    if (i < texto.length) {

        titulo.textContent += texto.charAt(i);

        i++;

        setTimeout(escrever, 130);

    }

}

setTimeout(escrever, 500);

// ===========================
// Botão GitHub animação
// ===========================

const botao = document.querySelector(".btn");

if (botao) {

    botao.addEventListener("mouseenter", () => {

        botao.style.transform = "translateY(-3px) scale(1.04)";

    });

    botao.addEventListener("mouseleave", () => {

        botao.style.transform = "";

    });

}

// ===========================
// Destaque da seção ativa
// ===========================

const secoes = document.querySelectorAll("section");

const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let atual = "";

    secoes.forEach(sec => {

        const topo = sec.offsetTop - 150;

        if (scrollY >= topo) {

            atual = sec.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + atual) {

            link.classList.add("active");

        }

    });

});

// ===========================
// Ano automático
// ===========================

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML = `© ${new Date().getFullYear()} Marco`;

}

console.log("%cPortfolio carregado com sucesso!",
"color:#3b82f6;font-size:15px;font-weight:bold;");