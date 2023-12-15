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
  // Create a copy of the quotes array to avoid modifying the original data
  const availableQuotes = [...this.quotes];

  // Check if all quotes have been used; if so, reset the availableQuotes array
  if (availableQuotes.length === 0) {
    availableQuotes.push(...this.quotes);
  }

  // Get a random index within the availableQuotes array
  const randomIndex = Math.floor(Math.random() * availableQuotes.length);

  // Extract and remove the selected quote from availableQuotes
  this.currentQuote = availableQuotes.splice(randomIndex, 1)[0];

  // Update the modified availableQuotes array in the object
  this.quotes = availableQuotes;
}
,
  },
};
</script>
