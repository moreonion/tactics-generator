<template>
  <div id="page">

    <TheHeader />

    <section id="main">
      <div class="grid-container">
        <div class="grid-x grid-margin-x">
          <div class="cell medium-9 large-7 intro">
            <h1>The advocacy campaign tactic idea generator</h1>
            <p>Successful advocacy campaigns need a good strategy and creative ideas for tactics. Our idea generator can help you spark new ideas or reshape old ones. <a href="https://www.impact-stack.org/the-campaign-tactics-generator/" title="More about the Impact Stack tactics generator">Find out more</a> or click the "Generate new tactic" button to explore.</p>
          </div>
        </div>
      </div>
      <div class="grid-container">
        <div class="grid-x grid-margin-x">

          <div id="content" class="cell large-7">
            <slot />
          </div>

          <div class="sidebar show-for-large cell large-5">
            <slot name="sidebar" />
          </div>

        </div>
      </div>
    </section>

    <slot name="sidebar" />

    <TheFooter />


  </div>
</template>

<style lang="scss">
#main {
  overflow: initial; // To make position: sticky work on the sidebar.
  background-image: url(https://ucarecdn.com/415f1900-5ecc-4b2c-a8db-9dfef91e4981/background__green_people_flipped.png);
  background-repeat: no-repeat;
  background-size: cover;

  @media print, screen and (max-width: 63.999em) {
    background-position: bottom right;
    background-size: auto;
  }

  .intro {
    padding-bottom: 3.3rem;
  }
}
</style>
