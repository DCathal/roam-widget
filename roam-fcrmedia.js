(function() {
  var div = document.createElement('div');
  div.id = 'roam-lobby';
  div.style.minWidth = '320px';
  div.style.margin = '2rem auto';
  div.style.maxWidth = '800px';
  document.currentScript.parentNode.insertBefore(div, document.currentScript);

  var script = document.createElement('script');
  script.src = 'https://ro.am/lobbylinks/embed.js';
  script.onload = function() {
    Roam.initLobbyEmbed({
      url: 'https://ro.am/fcrmedia/',
      parentElement: document.getElementById('roam-lobby'),
      lobbyConfiguration: 'full',          // ✅ Full lobby: video, chat, calendar
      accentColor: '#0059DC',              // Your brand blue
      theme: 'dark',                       // Matches Roam’s dark UI
      onSizeChange: function(w, h) {
        div.style.height = h + 'px';
      }
    });
  };
  document.head.appendChild(script);
})();


