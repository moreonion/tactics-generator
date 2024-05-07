<template>
  <section id="footer" class="white oneline">
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-11 small-offset-1 large-offset-0">
          <div id="block-block-1" class="block block-block">
            <div class="content">
              <h2>Like it? Share it.</h2>
              <ul class="menu share">
                <li><a :href="`http://www.facebook.com/share.php?u=${baseUrl}${$route.fullPath}`" target="_blank" class="button secondary small filled">Facebook</a></li>
                <li><a :href="`http://twitter.com/share?text=${baseUrl}${$route.fullPath}`" target="_blank" class="button secondary small filled">Twitter</a></li>
                <li><a :href="`mailto:?subject=Tactic%20for%20our%20campaign&body=${baseUrl}${$route.fullPath}`" class="button secondary small filled">Email</a></li>
                <li class="show-for-small hide-for-medium"><a :href="`whatsapp://send?text=${baseUrl}${$route.fullPath}`" class="button secondary small filled">Whatsapp</a></li>
                <li class="show-for-medium"><a href="#" @click.prevent="copyToClipboard(baseUrl + $route.fullPath)" class="button secondary small filled">Copy link</a></li>
              </ul>
              <ul class="menu">
                <li><a href="https://www.impact-stack.org/" target="_blank">About Impact Stack</a></li>
                <li><a href="https://act.more-onion.com/tactics-generator-idea" target="_blank">Submit an idea!</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  const baseUrl = useRuntimeConfig().public.baseUrl;

  const copyToClipboard = (str) => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };
</script>

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

  #footer a.button.filled.small {
    display: inline-block;
    min-width: 12em;
    padding-left: 2em;
    text-align: left;
    text-transform: none;
    text-decoration: none;
    font-weight: normal;
    color: #fff;
  }
</style>
