import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";
import Dashboard from './Dashboard';


afterEach(cleanup);

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Dashboard />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('test Dashboard', () => {
    const {getByText} = render(<Dashboard />);
    //check locked starts at unlocked and open starts at open
    expect(getByText("Unlocked"));
    expect(getByText("Open"));

    //renders display and controls
    expect(document.querySelectorAll('.display').length).toBe(1);
    expect(document.querySelectorAll('.controls').length).toBe(1);
   })
});