import { shallowMount } from '@vue/test-utils'; // Import shallowMount from @vue/test-utils
import App from '../App.vue'; // Import your component
import {describe, it, expect} from 'vitest'

describe('App', () => {
  // Test case: Renders the component
  it('Renders the component', () => {
    // Shallowly render the App component
    const wrapper = shallowMount(App, {
      stubs: {
        RandomQuoteButton: true, // Stub child components
        QuoteDisplay: true, // Stub child components
      },
    });

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true);
  });
});
