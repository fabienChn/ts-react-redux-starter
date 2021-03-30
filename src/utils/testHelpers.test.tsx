import { ShallowWrapper } from 'enzyme';

import App from 'App';

import { createShallowWrapper } from './testHelpers';

describe('createShallowWrapper', (): void => {
  it('returns a shallow wrapper', (): void => {
    const wrapper = createShallowWrapper(App, {
      blabla: false,
    });

    expect(wrapper).toBeInstanceOf(ShallowWrapper);
  });
});
