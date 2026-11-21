// La sección aparece únicamente al agregar proyectos reales.
const projects = [
  // {
  //   name: "Nombre del proyecto",
  //   description: "Descripción breve",
  //   service: "Tienda en línea",
  //   screenshot: "assets/images/showcase/proyecto.webp",
  //   technologies: ["HTML", "CSS", "JavaScript"],
  //   url: "https://ejemplo.com"
  // }
];

(() => {
  const section = document.getElementById("portafolio");
  const grid = document.getElementById("portfolio-grid");
  if (!section || !grid || !projects.length) return;

  projects.forEach((project) => {
    if (!project?.name || !project?.description) return;
    const card = document.createElement("article");
    card.className = "portfolio-card";
    if (project.screenshot) {
      const img = document.createElement("img");
      img.src = project.screenshot;
      img.alt = `Captura del proyecto ${project.name}`;
      img.loading = "lazy";
      img.decoding = "async";
      img.addEventListener("error", () => img.remove(), { once: true });
      card.append(img);
    }
    const content = document.createElement("div");
    content.className = "portfolio-card-content";
    const category = document.createElement("small");
    category.textContent = project.service || "Proyecto digital";
    const title = document.createElement("h3");
    title.textContent = project.name;
    const description = document.createElement("p");
    description.textContent = project.description;
    content.append(category, title, description);
    if (Array.isArray(project.technologies) && project.technologies.length) {
      const tech = document.createElement("p");
      tech.textContent = project.technologies.join(" · ");
      content.append(tech);
    }
    if (project.url) {
      try {
        const url = new URL(project.url);
        if (["https:", "http:"].includes(url.protocol)) {
          const link = document.createElement("a");
          link.href = url.href;
          link.target = "_blank";
          link.rel = "noopener noreferrer";
          link.textContent = "Ver proyecto ↗";
          content.append(link);
        }
      } catch { /* Una URL incompleta no muestra enlace. */ }
    }
    card.append(content);
    grid.append(card);
  });
  section.hidden = !grid.childElementCount;
})();
