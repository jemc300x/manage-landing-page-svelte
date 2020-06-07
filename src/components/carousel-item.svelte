<script>
  export let avatar=''
  export let name=''
  export let content=''
</script>

<div class="carousel-item">
  <div class="carousel-item__logo">
    <img src="./assets/img/{avatar}" alt="{name}" class="avatar">
  </div>
  <div class="carousel-item__body">
    <h4>{name}</h4>
    <p class="paragraph">"{content}"</p>
  </div>
</div>

<style>
.carousel-item{
  text-align: center;
  margin: 0 5px;
  width: 100%;
}

.carousel-item__logo{
  margin-bottom: -50px;
}

.carousel-item__logo .avatar{
  width: 20%;
}

.carousel-item__body{
  background-color: var(--Vary-Light-Gray);
  padding: 60px 10px;
  height: 60%;
}

.carousel-item__body h4{
  padding-bottom: 15px;
}

.carousel-item__body p {
  font-size: 1rem;
  padding: 0 10px;
}

@media(min-width: 768px){
  .carousel-item{
    margin: 0;
    margin-right: 30px;
    width: 560px;
  }

  .carousel-item p{
    font-size: .9rem;
  }

  .carousel-item__body{
    padding: 60px;
  }
}

</style>