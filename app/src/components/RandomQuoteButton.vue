<template>
  <button @click="getRandomQuote" class="primary-button">Get Random Quote</button>
</template>

<script>
export default {
  methods: {
    getRandomQuote() {
      // Emit an event to request a random quote
      this.$emit("get-random-quote");
    },
  },
};
</script>

<style scoped>
/* You can define styles for the button here */
.primary-button {
  background-color: #1976d2; /* Example primary color */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
</style>
