<!-- Roam inline widget begin -->
<div id="roam-lobby" style="min-width: 320px;"></div>
<script type="text/javascript" src="https://ro.am/lobbylinks/embed.js"></script>
<script>
  const parentElement = document.getElementById("roam-lobby");
  Roam.initLobbyEmbed({
    url: "https://ro.am/fcrmedia/",
    parentElement,
    accentColor: "#0059DC",
    theme: "dark",
    lobbyConfiguration: "default",
    prefill: {
      name: "Cathal Dempsey",
      email: "cathal.dempsey@fcrmedia.ie",
      note: "Howdy!"
    },
    onDateTimeSelected: (lobby, payload) => console.debug("onDateTimeSelected", lobby, payload),
    onProfileFormComplete: (lobby, payload) =>
      console.debug("onProfileFormComplete", lobby, payload),
    onEventScheduled: (lobby, payload) => console.debug("onEventScheduled", lobby, payload),
    onSizeChange: (width, height) => {
      parentElement.style.height = `${height}px`;
    },
  });
</script>
<!-- Roam inline widget end -->
