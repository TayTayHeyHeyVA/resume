async function loadIncludes() {
    const includeElements = document.querySelectorAll("[data-include]");
  
    for (const element of includeElements) {
      const file = element.getAttribute("data-include");
  
      try {
        const response = await fetch(file);
  
        if (!response.ok) {
          throw new Error(`Could not load ${file}`);
        }
  
        element.innerHTML = await response.text();
      } catch (error) {
        console.error(error);
        element.innerHTML = "<p>Content failed to load.</p>";
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", loadIncludes);