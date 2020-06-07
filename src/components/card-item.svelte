<script>
  
  export let number = ''
  export let title = ''
  export let content = ''

</script>

<div class="card-item">
  <h3><span>{number}</span>{title}</h3>
  <p class="paragraph">{content}</p>
</div>

<style>
.card-item{
  margin-bottom: 40px;
}

.card-item h3{
  background-color: var(--Very-Pale-Red);
  padding: 5px 0;
  text-align: start;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.card-item h3 > span{
  background-color: var(--Bright-Red);
  padding: 5px 15px;
  color: white;
  border-radius: 50px;
  margin-right: 10px;
}

.card-item p{
  text-align: start;
  font-size: 13px;
}

@media(min-width: 768px){
  .card-item h3 {
    background: none;
  }

  .card-item p {
    padding-left: 60px;
    max-width: 500px;
    font-size: 1rem;
  }
}
</style>
