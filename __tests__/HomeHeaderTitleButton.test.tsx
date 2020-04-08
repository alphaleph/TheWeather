import React from 'react';
import {render} from '@testing-library/react-native';
import HomeHeaderTitleButton from 'src/components/HomeHeaderTitleButton';
// import {fireEvent} from '@testing-library/react-native';

const title = 'title';

//TODO: Address navigator + screen dependencies for useNavigator() components

describe('HomeHeaderTitleButton', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const {getByText} = render(<HomeHeaderTitleButton title={title} />);
    expect(getByText(title).props.children).toBe(title);
  });
});
