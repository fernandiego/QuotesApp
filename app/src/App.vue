<template>
  <div>
    <main>
      <div>
        <RandomQuoteButton @get-random-quote="getRandomQuote" />
        <QuoteDisplay :quote="currentQuote" />
      </div>
    </main>
  </div>
</template>

<script>
import RandomQuoteButton from "./components/RandomQuoteButton.vue";
import QuoteDisplay from "./components/QuoteDisplay.vue";
import quotes from "./quotes.json";

export default {
  components: {
    RandomQuoteButton,
    QuoteDisplay,
  },
  data() {
    return {
      quotes,
      currentQuote: null,
    };
  },
  methods: {
    getRandomQuote() {
      // Get a random quote from the JSON file
      const randomIndex = Math.floor(Math.random() * this.quotes.length);
      this.currentQuote = this.quotes[randomIndex];
    },
  },
};
</script>
