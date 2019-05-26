import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import { expect, assert } from 'chai';
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Presentationals/footers'
import AddTodo from './Containers/addTodo'
import VisibleTodoList from './Containers/visibleTodoList'

configure({ adapter: new Adapter() });

describe('App component testing', () => {
  
  it ('renders <AddTodo /> component', () =>{
    const wrapper = shallow(<App />);  
    expect(wrapper.containsMatchingElement(<AddTodo />)).to.equal(true);
  });
  it('renders <VisibleTodoList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<VisibleTodoList />)).to.equal(true);
  });
  it('renders <Footer /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).to.equal(true);
  });    
});

