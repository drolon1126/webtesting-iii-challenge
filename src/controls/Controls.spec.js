import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer';
import "@testing-library/jest-dom/extend-expect";
import Controls from './Controls';

afterEach(cleanup);

const toggleLocked = () => {
  this.setState(prev => ({ locked: !prev.locked }));
};

const toggleClosed = () => {
  this.setState(prev => ({ closed: !prev.closed }));
};

describe('<Controls />', () => {

  it('check if both buttons render', () => {
    const container = render(<Controls locked={false} closed={false} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn').length).toBe(2);
   });

   it('check text on lock button if unlocked then Lock Gate', () => {
    const container = render(<Controls locked={false} closed={false} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn')[0].childNodes[0].nodeValue).toBe('Lock Gate');
   });

   it('check text on lock button if locked then Unlock Gate', () => {
    const container = render(<Controls locked={true} closed={true} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn')[0].childNodes[0].nodeValue).toBe('Unlock Gate');
   });

   it('check text on open button if closed then Open Gate', () => {
    const container = render(<Controls locked={false} closed={true} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn')[1].childNodes[0].nodeValue).toBe('Open Gate');
   });

   it('check text on open button if open then Close Gate', () => {
    const container = render(<Controls locked={false} closed={false} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn')[1].childNodes[0].nodeValue).toBe('Close Gate');
   });

   it('disable lock button if open', () => {
    const container = render(<Controls locked={false} closed={false} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn')[0]).toHaveAttribute('disabled');
   });

   it('disable open button if locked', () => {
    const container = render(<Controls locked={true} closed={true} toggleLocked={toggleLocked} toggleClosed={toggleClosed}/>);
    expect(document.querySelectorAll('.toggle-btn')[1]).toHaveAttribute('disabled');
   });

})