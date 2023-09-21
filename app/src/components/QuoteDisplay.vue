<template>
  <div>
    <v-card>
      <v-card-text>
        <v-subtitle v-if="quote">{{ quote.quote }}</v-subtitle>
        <v-caption v-if="quote">{{ quote.author }}</v-caption>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    quote: Object, // The quote to display
  },
};
</script>
