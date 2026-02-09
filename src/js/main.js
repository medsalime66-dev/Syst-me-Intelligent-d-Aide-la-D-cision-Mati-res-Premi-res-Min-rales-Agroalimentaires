import '../css/input.css'
import { renderLayout } from './components/Layout.js'
import { renderHome } from './pages/Home.js'
import { renderMaterialForm } from './pages/MaterialForm.js'
import { renderAnalysis } from './pages/AnalysisDashboard.js'
import { renderHistory } from './pages/History.js'

const routes = {
  '/': renderHome,
  '/evaluate': renderMaterialForm,
  '/analysis': renderAnalysis,
  '/history': renderHistory,
};

function router() {
  const path = window.location.pathname;
  const pageRender = routes[path] || routes['/'];
  const content = pageRender();
  document.querySelector('#app').innerHTML = renderLayout(content);

  // Update active nav link
  document.querySelectorAll('[data-link]').forEach(link => {
    if (link.getAttribute('href') === path) {
      link.classList.add('border-blue-500', 'text-slate-800');
      link.classList.remove('border-transparent', 'text-slate-500');
    } else {
      link.classList.remove('border-blue-500', 'text-slate-800');
      link.classList.add('border-transparent', 'text-slate-500');
    }
  });
}

function navigate(url) {
  window.history.pushState({}, "", url);
  router();
}

window.router = { navigate };

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', e => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigate(e.target.href);
    }
  });
  router();
});
