<script>
  import { link } from 'svelte-spa-router'

  let showMenu = false;

  function handleClick(){
    showMenu = false;
  }

</script>

<input type="checkbox" name="menu" id="menu" bind:checked={showMenu}>
<section class="header">
  <div class="navbar">
    <a href="/" use:link>
      <img src="../assets/img/logo.svg" alt="" class="header-logo">
    </a>
    <label for="menu" class="menu-icon"></label>
  </div>
  <div class="menu-container">
    <ul class="menu-items">
      <li><a href="/pricing" use:link on:click={handleClick}>Pricing</a></li>  
      <li><a href="/product" use:link on:click={handleClick}>Product</a></li>  
      <li><a href="/about-us" use:link on:click={handleClick}>About Us</a></li>  
      <li><a href="/careers" use:link on:click={handleClick}>Careers</a></li>  
      <li><a href="/community" use:link on:click={handleClick}>Community</a></li>  
    </ul>
  </div>
  <div class="btn-header">
    <button class="btn orange">Get Started</button>
  </div>
</section>

<style>
.hide{
  display: none;
}

.btn-header{
  display: none;
}

.header{
  height: 100px;
  padding: 50px 20px;
  left: 0;
  right: 0;
}

.navbar{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-items{
  list-style: none;
  text-align: center;
  padding: 50px 0;
  margin: 0 20px;
  background-color: white;
  border-radius: 5px;
}

.menu-items li{
  padding-bottom: 25px;
}

.menu-items a{
  text-decoration: none;
  color: var(--Dark-Blue);
  font-weight: 700;
}

.menu-items a:hover{
  color: var(--Dark-Grayish-Blue);
}

.menu-container{
  display: none;
  position: fixed;
  top: 100px;
  left: 0;
  right: 0;
  text-align: center;
  height: 100vh;
  background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5));
}

.header-logo{
  width: 100px;
}

.menu-icon{
  width: 30px;
  height: 24px;
  background-image: url(../assets/img/icon-hamburger.svg);
  background-repeat: no-repeat;
  background-position: center;
}

#menu{
  display: none;
}

#menu:checked ~ * .menu-container{
  display: block;
}

#menu:checked ~ .header{
  position: fixed;
  background-color: rgba(255, 255, 255, 0.5);
}

#menu:checked ~ * .menu-icon{
  background-image: url(../assets/img/icon-close.svg);
}

@media(min-width: 768px){
  .header{
    display: grid;
    grid-template-areas: "logo menu button";
    justify-content: space-between;
    align-items: center;
    justify-items: center;
    padding: 50px 10%;
    height: 150px;
  }
  .header-logo{
    grid-area: logo;
  }
  .menu-container{
    grid-area: menu;
    display: block;
    height: 30px;
    position: initial;
    text-align: center;
    background: transparent;
    margin: 0;
    padding: 0;
  }
  .menu-items{
    display: flex;
    padding: 0;
    margin: 0;
    background-color: transparent;
  }
  .menu-items li{
    margin-right: 20px;
  }
  .menu-icon{
    display: none;
  }
  .btn-header{
    display: block;
    grid-area: button;
  }
}
</style>