<script>
  import Router from 'svelte-spa-router'
	import MainLayout from './layout/main-layout.svelte'
  import routes from './router.js'
</script>

<MainLayout>
  <Router {routes}/>
</MainLayout>

<style>
	
</style>