import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";
import Display from './Display';

afterEach(cleanup);

describe('<Display />', () => {
  it('test unlocked open', () => {
    const {getByText} = render(<Display locked={false} closed={false}/>);
    
    const lockDisp = getByText("Unlocked");
    const openDisp = getByText("Open");

    //check locked prop is false it renders unlocked and closed prop is false it renders open
    expect(lockDisp);
    expect(openDisp);

    //check if unlocked has green class and open has green class
    expect(lockDisp).toHaveClass('green-led');
    expect(openDisp).toHaveClass('green-led');
   });

   it('test locked closed', () => {
    const {getByText} = render(<Display locked={true} closed={true}/>);

    const lockDisp = getByText("Locked");
    const openDisp = getByText("Closed");

    //check locked prop is true it renders locked and closed prop is true it renders closed
    expect(lockDisp);
    expect(openDisp);

    //check if locked has red class and closed has red class
    expect(lockDisp).toHaveClass('red-led');
    expect(openDisp).toHaveClass('red-led');
   });
})