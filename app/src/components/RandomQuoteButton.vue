<template>
  <v-btn @click="getRandomQuote" color="primary">Get Random Quote</v-btn>
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
