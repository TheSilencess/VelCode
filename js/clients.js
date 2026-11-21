// Colocá cada logo en assets/images/clients/ y agregá un objeto al arreglo.
const clients = [
  // { name: "Nombre del cliente", logo: "assets/images/clients/cliente.webp", website: "https://ejemplo.com" }
];

(() => {
  const container = document.getElementById("clients-content");
  if (!container || !clients.length) return;

  const grid = document.createElement("div");
  grid.className = "clients-grid";

  clients.forEach((client) => {
    if (!client?.name || !client?.logo) return;
    const wrapper = document.createElement(client.website ? "a" : "div");
    wrapper.className = "client-item";
    if (client.website) {
      try {
        const url = new URL(client.website);
        if (!["https:", "http:"].includes(url.protocol)) return;
        wrapper.href = url.href;
        wrapper.target = "_blank";
        wrapper.rel = "noopener noreferrer";
        wrapper.setAttribute("aria-label", `Visitar sitio de ${client.name}`);
      } catch { return; }
    }

    const logo = document.createElement("img");
    logo.src = client.logo;
    logo.alt = `Logotipo de ${client.name}`;
    logo.loading = "lazy";
    logo.decoding = "async";
    logo.addEventListener("error", () => {
      logo.remove();
      const fallback = document.createElement("span");
      fallback.className = "client-fallback";
      fallback.textContent = client.name;
      wrapper.append(fallback);
    }, { once: true });
    wrapper.append(logo);
    grid.append(wrapper);
  });

  if (grid.childElementCount) container.replaceChildren(grid);
})();
