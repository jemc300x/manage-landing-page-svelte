<section class="sub-footer">
  <div class="sub-footer__title">
    <h2>Simplify how your team works today.</h2>
  </div>
  <div class="sub-footer__button">
    <button class="btn white">Get Started</button>
  </div>
</section>

<style>
.sub-footer{
  background-color: var(--Bright-Red);
  text-align: center;
  padding: 50px 0;
  background-image: url(../assets/img/bg-simplify-section-mobile.svg);
  background-repeat: no-repeat;
  background-position: center left;
}

.sub-footer h2 {
  color: white;
  font-size: 2.5rem;
  padding: 20px;
}

@media(min-width: 768px){
  .sub-footer{
    height: 250px;
    display: flex;
    padding: 0 10%;
    justify-content: space-between;
    align-items: center;
    background-image: url(../assets/img/bg-simplify-section-desktop.svg);
    background-repeat: no-repeat;
    background-position: top center;
  }

  .sub-footer__title h2{
    text-align: start;
    max-width: 500px;
    padding: 0;
  }
}
</style>