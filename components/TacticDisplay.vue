<template>
  <article class="card">
    <div class="card-divider">
      #{{ parseInt(content.ID.slice(0, 2), 16) }}&nbsp;{{ type === 'hook' ? 'Engagement action' : 'Objective' }}
    </div>
    <div class="card-section">
      <h2 class="primary">{{ content.Title }}</h2>
      <p>{{ content.Introduction }}</p>
      <template v-if="content['Full text']">
        <transition name="expand">
          <p v-if="showFull">{{ content['Full text'] }}</p>
        </transition>
        <p><a href="#" @click.prevent="toggleFull">{{ showFull ? 'Read less' : 'Read more'}}</a></p>
      </template>
    </div>
  </article>
</template>

<script setup>
const showFull = ref(false);
const props = defineProps({
  content: Object,
  type: String
});
const toggleFull = () => {
  showFull.value = !showFull.value
};
</script>

<style scoped>
.card .card-section {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

@media print, screen and (min-width: 40em) {
  .card .card-section {
    padding: 2rem 3.5rem 2rem 2.5rem;
  }
}

.card-divider {
  display: inline-block;
  padding: 0.75rem 1rem;
  font-weight: bold;
}

@media print, screen and (min-width: 40em) {
  .card-divider {
    padding: 1rem 1.5rem;
  }
}

.card .card-section h2.primary {
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  line-height: 1.25;
  text-transform: uppercase;
  color: #8ac128;
}

@media print, screen and (min-width: 40em) {
  .card .card-section h2.primary {
    font-size: 2rem;
    line-height: 1.171875;
  }
}

@media print, screen and (min-width: 64em) {
  .card .card-section h2.primary {
    font-size: 2.5rem;
    line-height: 1.125;
  }
}

.expand-enter-active {
  transition: opacity 0.3s ease, max-height 0.3s cubic-bezier(1,0,1,0);
}

.expand-leave-active {
  transition: opacity 0.3s ease, max-height 0.3s cubic-bezier(0,1,0,1);
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 9999px;
}
</style>
