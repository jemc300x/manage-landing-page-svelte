<script>
  import CardItem from './card-item.svelte'
</script>

<section class="main">
  <div class="main-column1">
    <h2>What's different about Manage?</h2>
    <p class="paragraph">Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for madern digital product teams</p>
  </div>
  <div class="main-column2">
    <CardItem 
      number="01"
      title="Track company-wide progress"
      content="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
    />
    <CardItem 
      number="02"
      title="Advanced built-in reports"
      content="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
    />
    <CardItem 
      number="03"
      title="Everything you need in one place"
      content="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
    />
    <!-- <div class="card-item">
      <h3><span>01</span> Track company-wide progress</h3>
      <p class="paragraph">See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
    </div>
    <div class="card-item">
      <h3><span>02</span> Advanced built-in reports</h3>
      <p class="paragraph"></p>
    </div>
    <div class="card-item">
      <h3><span>03</span> Everything you need in one place</h3>
      <p class="paragraph"></p>
    </div> -->
  </div>
</section>

<style>
.main{
  text-align: center;
  padding: 0 25px;
}

.main-column1 h2{
  font-size: 2rem;
  padding-bottom: 20px;
  font-weight: 700;
}

.main-column1 p {
  padding: 0 15px 50px 15px;
  font-size: 0.9rem;
}

@media(min-width: 768px){
  .main{
    padding: 50px 10%;
    display: flex;
    flex-direction: row;
  }

  .main-column1{
    flex: 50%;
    text-align: start;
    padding-right: 5%;
  }

  .main-column2{
    flex: 50%;
    padding-left: 35px;
  }

  .main-column1 h2 {
    font-size: 2.5rem;
  }

  .main-column1 p{
    font-size: 1rem;
    max-width: 390px;
    padding-left: 0;
  }
}
</style>