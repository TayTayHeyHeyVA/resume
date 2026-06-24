export function createMediaCard(item) {
    const card = document.createElement(item.url ? "a" : "article");

    card.className = "show-card";

    if (item.url) {
      card.href = item.url;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }
  
    const art = document.createElement("div");
    art.className = "show-art";
    art.setAttribute("aria-hidden", "true");
  
    if (item.artwork) {
      const img = document.createElement("img");
      img.src = item.artwork;
      img.alt = `${item.title} cover art`;
      img.loading = "lazy";
      art.appendChild(img);
    }
  
    const meta = document.createElement("div");
    meta.className = "show-meta";
  
    card.appendChild(art);
    card.appendChild(meta);
  
    return { card, meta };
  }
  
  export function renderRoles(roles = []) {
    return roles.map(r => `<p class="roles"><i>${r}</i></p>`).join("");
  }
  
  export function episodeLabel(count) {
    return `${count} episode${count === 1 ? "" : "s"}`;
  }