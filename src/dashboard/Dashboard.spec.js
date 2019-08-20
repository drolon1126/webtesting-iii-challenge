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

  it('check locked starts at unlocked', () => {
    const container = render(<Dashboard />);
    expect(document.querySelectorAll('.led')[0].innerHTML).toBe("Unlocked");
   })

   it('check open starts at open', () => {
    const container = render(<Dashboard />);
    expect(document.querySelectorAll('.led')[1].innerHTML).toBe("Open");
   })

   it('renders display', ()=>{
    const container = render(<Dashboard />);
    expect(document.querySelectorAll('.display').length).toBe(1);
   })

   it('renders controls', ()=>{
    const container = render(<Dashboard />);
    expect(document.querySelectorAll('.controls').length).toBe(1);
   })

});