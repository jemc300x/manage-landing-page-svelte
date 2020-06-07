import Home from './pages/home.svelte'
import NotFound from './pages/notfound.svelte'
import TestPage from './pages/testPage.svelte'

export default {
  '/': Home,
  '/pricing': TestPage,
  '/product': TestPage,
  '/about-us': TestPage,
  '/pricing': TestPage,
  '*': NotFound
}