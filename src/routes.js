// filepath: src/routes.js
import Home from './pages/home/home.svelte';
import AboutMe from './pages/about/about.svelte';
import Contact from './pages/contact/contact.svelte';

export default {
  '/': Home,
  '/aboutme': AboutMe,
  '/contact': Contact
};