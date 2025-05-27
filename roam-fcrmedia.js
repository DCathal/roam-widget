(function() {
  var div = document.createElement('div');
  div.id = 'roam-lobby';
  div.style.width = '300px';
  document.currentScript.parentNode.insertBefore(div, document.currentScript);

  var script = document.createElement('script');
  script.src = 'https://ro.am/lobbylinks/embed.js';
  script.onload = function() {
    Roam.initLobbyEmbed({
      url: 'https://ro.am/fcrmedia/',
      parentElement: document.getElementById('roam-lobby'),
      lobbyConfiguration: 'drop_in_button',
      theme: 'dark',
      onSizeChange: function(w, h) {
        div.style.height = h + 'px';
      }
    });
  };
  document.head.appendChild(script);
})();
