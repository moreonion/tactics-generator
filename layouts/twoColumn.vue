<template>
  <div id="page">

    <TheHeader />

    <section id="main">
      <h1 class="show-for-sr">Advocacy campaign tactic idea generator by Impact Stack</h1>
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
  background-image: url(https://act.more-onion.com/sites/actmo/files/styles/banner/public/background_dark_image.png?itok=4fDMy_b9);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
