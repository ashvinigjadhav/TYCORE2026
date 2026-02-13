const body = document.body;
const toggleButton = document.querySelector("[data-theme-toggle]");
const typingTarget = document.querySelector("[data-typing]");
const typingPhrases = [
    "IoT & Machine Learning",
    "Cybersecurity",
    "Intelligent Systems",
    "Frontend Engineering"
];
let typingIndex = 0;
let charIndex = 0;
let typingForward = true;

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                if (entry.target.dataset.bar) {
                    entry.target.querySelector("span").style.width = entry.target.dataset.bar;
                }
            }
        });
    },
    { threshold: 0.2 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

document.querySelectorAll(".skill-bar").forEach((el) => observer.observe(el));

if (toggleButton) {
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("light");
        toggleButton.textContent = body.classList.contains("light") ? "Dark Mode" : "Light Mode";
    });
}

function typeLoop() {
    if (!typingTarget) {
        return;
    }

    const phrase = typingPhrases[typingIndex];
    typingTarget.textContent = phrase.slice(0, charIndex);

    if (typingForward) {
        if (charIndex < phrase.length) {
            charIndex += 1;
        } else {
            typingForward = false;
            setTimeout(typeLoop, 900);
            return;
        }
    } else {
        if (charIndex > 0) {
            charIndex -= 1;
        } else {
            typingForward = true;
            typingIndex = (typingIndex + 1) % typingPhrases.length;
        }
    }

    setTimeout(typeLoop, typingForward ? 90 : 45);
}

typeLoop();

const modal = document.querySelector("[data-modal]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalBody = document.querySelector("[data-modal-body]");
const modalClose = document.querySelector("[data-modal-close]");

document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
        if (!modal) {
            return;
        }
        const title = button.dataset.title;
        const description = button.dataset.description;
        modalTitle.textContent = title;
        modalBody.textContent = description;
        modal.classList.add("active");
    });
});

function closeModal() {
    if (modal) {
        modal.classList.remove("active");
    }
}

if (modalClose) {
    modalClose.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
}

const form = document.querySelector("[data-contact-form]");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.querySelector("[name='name']");
        const email = form.querySelector("[name='email']");
        const message = form.querySelector("[name='message']");
        let hasError = false;

        form.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

        if (!name.value.trim()) {
            name.nextElementSibling.textContent = "Name is required.";
            hasError = true;
        }
        if (!email.value.includes("@")) {
            email.nextElementSibling.textContent = "Enter a valid email.";
            hasError = true;
        }
        if (message.value.trim().length < 10) {
            message.nextElementSibling.textContent = "Message should be at least 10 characters.";
            hasError = true;
        }

        if (!hasError) {
            form.reset();
            alert("Thanks! Your message has been sent.");
        }
    });
}

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
let particles = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createParticles() {
    particles = Array.from({ length: 80 }).map(() => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.6,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.4
    }));
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(75, 180, 255, 0.6)";
    particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
    });
    requestAnimationFrame(draw);
}

resizeCanvas();
createParticles();
draw();
window.addEventListener("resize", () => {
    resizeCanvas();
    createParticles();
});

const githubContainer = document.querySelector("[data-github]");
if (githubContainer) {
    fetch("https://api.github.com/users/JanmeshRAUT/repos?sort=updated")
        .then((response) => response.json())
        .then((repos) => {
            const topRepos = repos.slice(0, 4);
            githubContainer.innerHTML = topRepos
                .map(
                    (repo) => `
                        <div class="card github-card">
                            <div class="gh-header">
                                <h3>${repo.name}</h3>
                                <div class="gh-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </div>
                            </div>
                            <p>${repo.description || "No description provided."}</p>
                            <div class="gh-footer">
                                <div class="gh-stats">
                                    ${repo.language ? `<span class="gh-lang"><span class="lang-dot"></span>${repo.language}</span>` : ''}
                                    <span class="gh-star">★ ${repo.stargazers_count}</span>
                                </div>
                                <a class="gh-link" href="${repo.html_url}" target="_blank" rel="noreferrer">
                                    View Repo &rarr;
                                </a>
                            </div>
                        </div>
                    `
                )
                .join("");
        })
        .catch(() => {
            githubContainer.innerHTML = "<p class='muted'>Unable to load GitHub projects right now.</p>";
        });
}
