<div id="roam-lobby" style="min-width:320px;"></div>
<script src="https://ro.am/lobbylinks/embed.js"></script>
<script>
  const parentElement = document.getElementById("roam-lobby");
  Roam.initLobbyEmbed({
    url: "https://ro.am/fcrmedia/",
    parentElement,
    lobbyConfiguration: "full",  // ✅ This shows the full lobby
    accentColor: "#0059DC",      // Optional: Your brand color
    theme: "dark",               // or "light"
    onSizeChange: (width, height) => {
      parentElement.style.height = `${height}px`;
    }
  });
</script>

