import { Home } from './components/Home.js';
import { Register } from './components/Register.js';
import { Login } from './components/Login.js';
import { Feed } from './components/Feed.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': Home,
  '/register': Register,
  '/login': Login,
  '/feed': Feed,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(routes[pathname](onNavigate));
};

const pathname = window.location.pathname;
const component = routes[pathname] || Home;

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(component(onNavigate));
};

rootDiv.appendChild(component(onNavigate));
