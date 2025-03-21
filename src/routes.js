// filepath: src/routes.js
import Home from './pages/home/home.svelte';
import AboutMe from './pages/about/about.svelte';

export default {
  '/': Home,
  '/aboutme': AboutMe
};