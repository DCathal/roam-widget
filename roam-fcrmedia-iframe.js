(function () {
  const CONTAINER_ID = "roam-lobby";
  const ROAM_SCRIPT_ID = "roam-embed-js";
  const ROAM_EMBED_SRC = "https://ro.am/lobbylinks/embed.js";
  const ROAM_URL = "https://ro.am/cathal/lobby-2";

  function ensureContainer() {
    let el = document.getElementById(CONTAINER_ID);
    if (!el) {
      el = document.createElement("div");
      el.id = CONTAINER_ID;
      el.style.width = "100%";          // responsive width
      el.style.maxWidth = "420px";      // tweak as you like
      el.style.margin = "0 auto";       // center if narrower than parent
      el.setAttribute("aria-label", "Roam Lobby");
      const anchor = document.currentScript || document.body.firstChild;
      (anchor?.parentNode || document.body).insertBefore(el, anchor || null);
    }
    return el;
  }

  function loadRoamScript() {
    return new Promise((resolve, reject) => {
      if (window.Roam && typeof window.Roam.initLobbyEmbed === "function") {
        resolve();
        return;
      }
      const existing = document.getElementById(ROAM_SCRIPT_ID);
      if (existing) {
        existing.addEventListener("load", () => resolve());
        existing.addEventListener("error", reject);
        return;
      }
      const s = document.createElement("script");
      s.id = ROAM_SCRIPT_ID;
      s.src = ROAM_EMBED_SRC;
      s.async = true;
      s.onload = () => resolve();
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  function init() {
    const parentElement = ensureContainer();
    loadRoamScript()
      .then(() => {
        window.Roam.initLobbyEmbed({
          url: ROAM_URL,
          parentElement,
          lobbyConfiguration: "drop_in_button",
          theme: "dark",
          onSizeChange: (width, height) => {
            parentElement.style.height = height + "px";
          },
        });
      })
      .catch((err) => {
        console.error("Failed to load Roam embed:", err);
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();


