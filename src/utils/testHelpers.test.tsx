import { ShallowWrapper } from 'enzyme';

import App from 'App';

import { createShallowWrapper } from './testHelpers';

describe('createShallowWrapper', () => {
  it('returns a shallow wrapper', () => {
    const wrapper = createShallowWrapper(App, {
      blabla: false,
    });

    expect(wrapper).toBeInstanceOf(ShallowWrapper);
  });
});
