import React from 'react';
import { mount, ReactWrapper, shallow, ShallowWrapper } from 'enzyme';
import enzymeToJson from 'enzyme-to-json';

/**
 * Generates a ShallowWrapper to make the tests code leaner
 *
 * @param component  The component to create
 * @param props      The props to add to the given component
 * @param children   The children to add to the given component
 * @returns          A shallow wrapper of the component generated with the given params
 */
const createShallowWrapper = (component, props = {}, children = null): ShallowWrapper => (
  shallow(React.createElement(component, props, children))
);

/**
 * Generates a MountedWrapper to make the tests code leaner
 *
 * @param component  The component to create
 * @param props      The props to add to the given component
 * @param children   The children to add to the given component
 * @returns          A shallow wrapper of the component generated with the given params
 */
const createMountedWrapper = (component, props = {}, children = null): ReactWrapper => (
  mount(React.createElement(component, props, children))
);

/**
 * Checks if the given wrapper matches with the existing snapshot
 *
 * @param wrapper  Wrapped component that we want to match to the snapshot
 */
const expectWrappersTreeToMatchSnapshot = (wrapper: ShallowWrapper|ReactWrapper): void => {
  const tree = enzymeToJson(wrapper);

  expect(tree).toMatchSnapshot();
};

export {
  createShallowWrapper,
  createMountedWrapper,
  expectWrappersTreeToMatchSnapshot,
};
