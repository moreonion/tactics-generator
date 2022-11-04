<template>
  <section class="navigation white">
    <div class="grid-container">
      <div id="my-header" class="title-bar hide-for-large">
        <div class="title-bar-left">
          <ul class="menu">
            <li><a class="logo" href="https://www.impact-stack.org/" target="_blank"><img class="logo" src="https://act.more-onion.com/profiles/actmo/themes/impact_stack_theme/logo.png" alt="Logo More Onion"></a></li>
          </ul>
        </div>
        <div class="title-bar-right">
          <a href="https://www.impact-stack.org/the-campaign-tactics-generator/" target="_blank">About</a>
        </div>
      </div>
    </div>
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div id="menu-desktop" class="cell top-bar show-for-large">
          <a class="logo" href="https://www.impact-stack.org/" target="_blank"><img class="logo top-bar-left" src="https://act.more-onion.com/profiles/actmo/themes/impact_stack_theme/logo.png" alt="Logo More Onion"> </a>
          <div class="top-bar-right">
            <a href="https://www.impact-stack.org/the-campaign-tactics-generator/" target="_blank">About</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
a {
  .title-bar-right &,
  .top-bar-right & {
    padding-top: 1rem;
    padding-left: 2rem;
    display: block;
    font-weight: bold;
    border-bottom: 0 none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #141414;
    transition: color 0.3s;

    @media print, screen and (min-width: 40em) {
      padding-top: 1.5rem;
    }
  }
}

a:hover,
a:focus,
a:active {
  .title-bar-right &,
  .top-bar-right & {
    border-bottom: 0 none;
    -webkit-box-shadow: none;
    box-shadow: none;
    color: #8ac128;
  }
}
</style>
