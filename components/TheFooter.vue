<template>
  <section id="footer" class="white oneline">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-11 small-offset-1 large-offset-0">
          <div id="block-block-1" class="block block-block">
            <div class="content">
              <h2>Like it? Share it.</h2>
              <ul class="menu share">
                <li><button type="button" class="button secondary small filled">Facebook</button></li>
                <li><button type="button" class="button secondary small filled">Twitter</button></li>
                <li><button type="button" class="button secondary small filled">Email</button></li>
                <li><button type="button" class="button secondary small filled">Copy link</button></li>
              </ul>
              <ul class="menu">
                <li><a href="#">About Impact Stack</a></li>
                <li><a href="#">Submit an idea!</a></li>
              </ul>
              <!--
              <ul class="menu legal">
                <li><a href="https://www.more-onion.com/legal/" target="_blank">Terms</a></li>
                <li><a href="https://www.more-onion.com/privacy/" target="_blank">Privacy</a></li>
                <li><a href="https://www.more-onion.com/about/" target="_blank">About more onion</a></li>
              </ul>
            -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  h2 {
    text-transform: none;
  }

  #footer .menu {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
    padding-top: 0; // override impact-stack.css

    @media print, screen and (min-width: 64em) {
      flex-direction: row;
    }

    &.share {
      padding-bottom: 3rem;
    }
  }

  .button.filled.small {
    text-transform: none;
    min-width: 12em;
    padding-left: 2em;
    text-align: left;
    font-weight: normal;
  }
</style>
