<script>
  import Header from '../components/header.svelte'
  import Footer from '../components/footer.svelte'
</script>

<div>
  <Header></Header>
  <slot></slot>
  <Footer></Footer>
</div>
