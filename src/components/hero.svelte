<section class="hero">
  <div class="hero-illustration">
    <img class="hero-illustration__img" src="../assets/img/illustration-intro.svg" alt="Illustration">
  </div>
  <div class="hero-details">
    <h1 class="hero-details__title">Bring everyone together to build better products.</h1>
    <p class="hero-details__content paragraph">Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.</p>
    <button class="btn orange">Get Started</button>
  </div>
</section>

<style>
.hero{
  display: flex;
  flex-direction: column;
  padding: 40px 25px;
  margin-bottom: 50px;
  text-align: center;
}

.hero-illustration{
  flex: 50%;
}

.hero-illustration__img{
  width: 100%;
}

.hero-details{
  flex: 50%;
}

.hero-details__title{
  font-size: 2.5rem;
  padding-bottom: 1.2rem;
}

.hero-details__content{
  font-size: 1rem;
  padding-bottom: 1.5rem;
}

@media(min-width: 768px){
  .hero{
    align-items: center;
    flex-direction: row-reverse;
    padding: 0 10%;
    margin-top: 50px;
  }

  .hero-details{
    text-align: start;
    padding-right: 5%;
  }

  .hero-details__title{
    font-size: 3.5rem;
  }

  .hero-details__content{
    padding-right: 35%;
  }

}
</style>