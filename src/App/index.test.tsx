import { ShallowWrapper } from 'enzyme';
import {
  createShallowWrapper,
  expectWrappersTreeToMatchSnapshot,
} from 'utils/testHelpers';
import App from './index';

const createSubject = (): ShallowWrapper => createShallowWrapper(App, {});

it('renders the expected snapshot', (): void => {
  expectWrappersTreeToMatchSnapshot(createSubject());
});

it('should change the title after 2 seconds', (): void => {
  const wrapper = createSubject();

  expect(wrapper.text()).toContain('My App');

  setTimeout((): void => {
    expect(wrapper.text()).toContain('The title changed haha');
  }, 2000);
});