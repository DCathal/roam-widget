(function() {
  // Configuration
  var config = {
    baseUrl: 'https://getlocal.ie/q/',
    placeholder: 'Search local products...',
    buttonText: 'Search',
    theme: 'light' // 'light' or 'dark'
  };

  // Read data attributes from script tag
  var scriptTag = document.currentScript;
  if (scriptTag) {
    if (scriptTag.getAttribute('data-placeholder')) {
      config.placeholder = scriptTag.getAttribute('data-placeholder');
    }
    if (scriptTag.getAttribute('data-button-text')) {
      config.buttonText = scriptTag.getAttribute('data-button-text');
    }
    if (scriptTag.getAttribute('data-theme')) {
      config.theme = scriptTag.getAttribute('data-theme');
    }
  }

  // Styles
  var styles = document.createElement('style');
  styles.textContent = [
    '.getlocal-widget {',
    '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
    '  max-width: 500px;',
    '  margin: 0 auto;',
    '}',
    '.getlocal-widget * {',
    '  box-sizing: border-box;',
    '}',
    '.getlocal-search-form {',
    '  display: flex;',
    '  border-radius: 8px;',
    '  overflow: hidden;',
    '  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);',
    '}',
    '.getlocal-search-form.theme-dark {',
    '  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);',
    '}',
    '.getlocal-search-input {',
    '  flex: 1;',
    '  padding: 14px 18px;',
    '  border: none;',
    '  font-size: 16px;',
    '  outline: none;',
    '  min-width: 0;',
    '}',
    '.getlocal-search-form.theme-light .getlocal-search-input {',
    '  background: #fff;',
    '  color: #333;',
    '}',
    '.getlocal-search-form.theme-dark .getlocal-search-input {',
    '  background: #2d3748;',
    '  color: #fff;',
    '}',
    '.getlocal-search-form.theme-dark .getlocal-search-input::placeholder {',
    '  color: #a0aec0;',
    '}',
    '.getlocal-search-btn {',
    '  padding: 14px 24px;',
    '  background: #00d4aa;',
    '  border: none;',
    '  cursor: pointer;',
    '  font-size: 16px;',
    '  font-weight: 600;',
    '  color: #fff;',
    '  transition: background 0.2s ease;',
    '  display: flex;',
    '  align-items: center;',
    '  gap: 8px;',
    '  white-space: nowrap;',
    '}',
    '.getlocal-search-btn:hover {',
    '  background: #00b894;',
    '}',
    '.getlocal-search-btn svg {',
    '  width: 18px;',
    '  height: 18px;',
    '  flex-shrink: 0;',
    '}',
    '.getlocal-branding {',
    '  text-align: center;',
    '  margin-top: 10px;',
    '  font-size: 12px;',
    '}',
    '.getlocal-search-form.theme-light + .getlocal-branding {',
    '  color: #666;',
    '}',
    '.getlocal-search-form.theme-dark + .getlocal-branding {',
    '  color: #a0aec0;',
    '}',
    '.getlocal-branding a {',
    '  color: #00d4aa;',
    '  text-decoration: none;',
    '}',
    '.getlocal-branding a:hover {',
    '  text-decoration: underline;',
    '}',
    '@media (max-width: 400px) {',
    '  .getlocal-search-btn span {',
    '    display: none;',
    '  }',
    '  .getlocal-search-btn {',
    '    padding: 14px 16px;',
    '  }',
    '}'
  ].join('\n');
  document.head.appendChild(styles);

  // Create widget HTML
  var container = document.createElement('div');
  container.className = 'getlocal-widget';
  container.innerHTML = [
    '<form class="getlocal-search-form theme-' + config.theme + '">',
    '  <input type="text" class="getlocal-search-input" placeholder="' + config.placeholder + '" autocomplete="off">',
    '  <button type="submit" class="getlocal-search-btn">',
    '    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '      <circle cx="11" cy="11" r="8"></circle>',
    '      <path d="M21 21l-4.35-4.35"></path>',
    '    </svg>',
    '    <span>' + config.buttonText + '</span>',
    '  </button>',
    '</form>',
    '<div class="getlocal-branding">',
    '  Powered by <a href="https://getlocal.ie" target="_blank" rel="noopener">GetLocal.ie</a>',
    '</div>'
  ].join('');

  // Insert into DOM
  scriptTag.parentNode.insertBefore(container, scriptTag);

  // Event handling
  var form = container.querySelector('.getlocal-search-form');
  var input = container.querySelector('.getlocal-search-input');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var query = input.value.trim();
    if (query) {
      window.open(config.baseUrl + encodeURIComponent(query), '_blank');
    }
  });
})();
