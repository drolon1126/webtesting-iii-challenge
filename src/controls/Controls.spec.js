import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls';

afterEach(cleanup);

describe('<Controls />', () => {
  it('check if both buttons render', () => {
    const container = render(<Controls locked={false} closed={false}/>);
    expect(document.querySelectorAll('.toggle-btn').length).toBe(2);
   });

   it('test unlocked, open', () => {
    const test = jest.fn();
    const test2 = jest.fn();

    const {getByText} = render(<Controls locked={false} closed={false} toggleLocked={test} toggleClosed={test2}/>);

    const lockBtn = getByText('Lock Gate');
    const openBtn = getByText('Close Gate');

    //check text
    expect(lockBtn);
    expect(openBtn);

    //disable lock button if open
    expect(lockBtn.disabled).toBe(true);

    //check buttons call functions on click
    fireEvent.click(lockBtn);
    fireEvent.click(openBtn);
    expect(test).not.toHaveBeenCalled();
    expect(test2).toHaveBeenCalled();
   });

   it('locked, closed', () => {
    const test = jest.fn();
    const test2 = jest.fn();

    const {getByText} = render(<Controls locked={true} closed={true} toggleLocked={test} toggleClosed={test2}/>);

    const lockBtn = getByText('Unlock Gate')
    const openBtn = getByText('Open Gate')

    //check text
    expect(lockBtn);
    expect(openBtn);

    //disable open button if locked
    expect(openBtn.disabled).toBe(true);

    //check buttons call functions on click
    fireEvent.click(lockBtn);
    fireEvent.click(openBtn);
    expect(test).toHaveBeenCalled();
    expect(test2).not.toHaveBeenCalled();
   });
})