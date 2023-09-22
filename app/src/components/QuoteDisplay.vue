<template>
  <div class="center-content">
    <div v-if="quote">
      <div class="quote">{{ quote.quote }}</div>
      <div class="author">{{ quote.author }}</div>
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

<style scoped>
/* Center the content both vertically and horizontally */
.center-content {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  justify-content: center; /* Vertically center the content */
  align-items: center; /* Horizontally center the content */
  height: 100vh; /* Set the container height to 100% of the viewport height */
}

/* Additional styling for the quote and author */
.quote {
  font-size: 24px; /* Example font size */
  text-align: center; /* Center text horizontally */
  margin-bottom: 16px; /* Example margin for spacing */
}

.author {
  font-size: 18px; /* Example font size */
  text-align: center; /* Center text horizontally */
  font-weight: bold; /* Example font weight */
}
</style>
