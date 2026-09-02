function applyThemeFromLocalStorage() {
 // Read theme from localStorage
 const theme = localStorage.getItem('flutter.theme') || 'light';

 console.log('theme', theme);

 // Apply it immediately to the HTML <body>
 document.documentElement.setAttribute('data-theme', theme);
}


window.getFlutterTheme = function() {
  let v = localStorage.getItem('flutter.theme');

  // If not set, return default directly
  if (!v) return 'light';

  // Try to JSON.parse first (if it was saved as JSON)
  try {
    return JSON.parse(v);
  } catch (_) {}

  // Otherwise return raw cleaned string
  if (v.startsWith('"') && v.endsWith('"')) {
    return v.slice(1, -1);
  }

  return v;
 }