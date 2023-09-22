import { mount } from '@vue/test-utils';
import RandomQuoteButton from '../components/RandomQuoteButton.vue';
import {describe, it, expect} from 'vitest'

describe('RandomQuoteButton.vue', () => {
  it('emits "get-random-quote" event when clicked', async () => {
    const wrapper = mount(RandomQuoteButton);

    await wrapper.find('button').trigger('click');

    expect(wrapper.emitted('get-random-quote')).toBeTruthy();
  });
});
