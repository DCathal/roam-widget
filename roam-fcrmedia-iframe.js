<!-- Roam inline widget begin -->
<div id="roam-lobby" style="width: 300px;"></div>
<script type="text/javascript" src="https://ro.am/lobbylinks/embed.js"></script>
<script>
  const parentElement = document.getElementById("roam-lobby");
  Roam.initLobbyEmbed({
    url: "https://ro.am/cathal/lobby-2",
    parentElement,
    lobbyConfiguration: "drop_in_button",
    theme: "dark",
    onSizeChange: (width, height) => {
      parentElement.style.height = `${height}px`;
    },
  });
</script>
<!-- Roam inline widget end -->


