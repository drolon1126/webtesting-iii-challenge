import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  it('check locked prop is false it renders unlocked', () => {
    const container = render(<Display locked={false} closed={false}/>);
    expect(document.querySelectorAll('.led')[0].innerHTML).toBe("Unlocked");
   });

   it('check closed prop is false it renders open', () => {
    const container = render(<Display locked={false} closed={false}/>);
    expect(document.querySelectorAll('.led')[1].innerHTML).toBe("Open");
   });

   it('check locked prop is true it renders locked', () => {
    const container = render(<Display locked={true} closed={true}/>);
    expect(document.querySelectorAll('.led')[0].innerHTML).toBe("Locked");
   });

   it('check closed prop is true it renders closed', () => {
    const container = render(<Display locked={false} closed={true}/>);
    expect(document.querySelectorAll('.led')[1].innerHTML).toBe("Closed");
   });

   it('check if unlocked has green class', () => {
    const {container, getByText} = render(<Display locked={false} closed={true}/>);
    expect(getByText('Unlocked')).toHaveClass('green-led');
   });

   it('check if locked has red class', () => {
    const {container, getByText} = render(<Display locked={true} closed={true}/>);
    expect(getByText('Locked')).toHaveClass('red-led');
  });

  it('check if closed has red class', () => {
    const {container, getByText} = render(<Display locked={false} closed={true}/>);
    expect(getByText('Closed')).toHaveClass('red-led');
   });

   it('check if open has green class', () => {
    const {container, getByText} = render(<Display locked={false} closed={false}/>);
    expect(getByText('Open')).toHaveClass('green-led');
  });

   
})