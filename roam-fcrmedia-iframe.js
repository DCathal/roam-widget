(function() {
  var iframe = document.createElement('iframe');
  iframe.src = 'https://ro.am/fcrmedia/';
  iframe.style.width = '120%';
  iframe.style.height = '1200px';
  iframe.style.border = '0';
  iframe.allow = 'camera; microphone; autoplay';
  iframe.setAttribute('title', 'Live Chat with FCR Media');

  // Optional: Add a container div
  var container = document.createElement('div');
  container.style.maxWidth = '500px';
  container.style.margin = '0 auto';
  container.appendChild(iframe);

  document.currentScript.parentNode.insertBefore(container, document.currentScript);
})();
