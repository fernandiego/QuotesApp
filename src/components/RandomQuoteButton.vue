<template>
  <div class="center-button">
    <button @click="getRandomQuote" class="primary-button">Get Random Quote</button>
  </div>
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
/* You can define styles for the button and centering container here */
.center-button {
  display: flex;
  justify-content: center; /* Horizontally center the content */
  align-items: center; /* Vertically center the content */
}

.primary-button {
  background-color: red; /* Example primary color */
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 12px;
  opacity: 0.5;
  transition: 0.3s;
  box-shadow: 0 5px #999
}
.primary-button:hover {
  opacity: 1
}
.primary-button:active {
  transform: translate(4px);
  background-color: red;
  box-shadow: 0 1px #777;
}
</style>
