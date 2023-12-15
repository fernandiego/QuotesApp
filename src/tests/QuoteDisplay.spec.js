import { mount } from '@vue/test-utils'; // Import mount from @vue/test-utils
import QuoteDisplay from '../components/QuoteDisplay.vue'; // Import your component
import {describe, it, expect} from 'vitest'
describe('QuoteDisplay', () => {
  // Test case: Renders the component with a quote
  it('Renders with a quote', async () => {
    // Define a sample quote
    const quote = {
      quote: 'Sample quote text',
      author: 'Sample author',
    };

    // Mount the component with the quote prop
    const wrapper = mount(QuoteDisplay, {
      propsData: {
        quote,
      },
    });

    // Assert that the quote and author are displayed
    expect(wrapper.text()).toContain(quote.quote);
    expect(wrapper.text()).toContain(quote.author);
  });

  // Test case: Renders without a quote
  it('Renders without a quote', async () => {
    // Mount the component without the quote prop
    const wrapper = mount(QuoteDisplay);

    // Assert that the component does not display any text
    expect(wrapper.text()).toBe('');
  });
});
