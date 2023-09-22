<template>
  <div>
    <div>
      <div v-if="quote">{{ quote.quote }}</div>
      <div v-if="quote">{{ quote.author }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    quote: Object, // The quote to display
  },
};
</script>
