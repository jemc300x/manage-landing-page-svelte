<script>
  import CarouselItem from './carousel-item.svelte'
</script>

<div class="carousel-container">
      
  <input type="radio" name="carousel" id="radio-1" checked>
  <input type="radio" name="carousel" id="radio-2">
  <input type="radio" name="carousel" id="radio-3">
  <input type="radio" name="carousel" id="radio-4">

  <div class="carousel">
    <div class="carousel-item__container">      
      <CarouselItem
        avatar="avatar-anisha.png"
        name="Anisha Li"
        content="Manage has supercharged our team's workflow. The ability to maintain visibily on larger milestones at all times keeps everyone motivated."
      />
      <CarouselItem
        avatar="avatar-ali.png"
        name="Ali Bravo"
        content="We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused."
      />
      <CarouselItem
        avatar="avatar-richard.png"
        name="Richard Watts"
        content="Manage allows us to provide structure and process. It keeps us organized and focused. i can't stop recommending them to everyone i talk to!."
      />
      <CarouselItem
        avatar="avatar-shanai.png"
        name="Shanai Gough"
        content="Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive."
      />
    </div>
  </div>
   
  <div class="bullets">
    <label class="bullet" for="radio-1" id="dot-for-carousel-item-1"></label>
    <label class="bullet" for="radio-2" id="dot-for-carousel-item-2"></label>
    <label class="bullet" for="radio-3" id="dot-for-carousel-item-3"></label>
    <label class="bullet" for="radio-4" id="dot-for-carousel-item-4"></label>
  </div>
</div>

<style>
.carousel-container{
  margin-bottom: 10px;
}

.carousel{
  overflow: auto;
  height: 400px;
}

.carousel::-webkit-scrollbar{
  visibility: hidden;
}

.carousel:hover .carousel-container::-webkit-scrollbar{
  visibility: visible;
}

.carousel-item__container{
  width: calc(375px * 4);
  display: flex;
  transition: transform .5s;
}

input[type="radio"]{
  display: none;
}

.bullets{
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}

.bullet{
  width: 10px;
  height: 10px;
  border: 2px solid var(--Bright-Red);
  background-color: white;
  margin: 5px;
  border-radius: 50%;
  cursor: pointer;
}

#radio-1:checked ~ .carousel .carousel-item__container{
  transform: translateX(0%);
}
#radio-2:checked ~ .carousel .carousel-item__container{
  transform: translateX(-25%);
}
#radio-3:checked ~ .carousel .carousel-item__container{
  transform: translateX(-50%);
}
#radio-4:checked ~ .carousel .carousel-item__container{
  transform: translateX(-75%);
}

.carousel-container #radio-1:checked ~ .bullets label#dot-for-carousel-item-1,
.carousel-container #radio-2:checked ~ .bullets label#dot-for-carousel-item-2,
.carousel-container #radio-3:checked ~ .bullets label#dot-for-carousel-item-3,
.carousel-container #radio-4:checked ~ .bullets label#dot-for-carousel-item-4{
  background-color: var(--Bright-Red);
}

@media(min-width: 768px){
  .carousel .carousel-item__container{
    margin-left: -50px;
    padding-left: 80px;
    width: calc(600px * 4);
    transform: translateX(0%);
  }

  .bullets{
    display: none;
  }

}


</style>