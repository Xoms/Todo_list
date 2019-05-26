import * as actions from './actions'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect, assert } from 'chai';

configure({ adapter: new Adapter() });

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    expect(actions.addTodo('Use Redux')).to.deep.equal({
      type: 'ADD_TODO',
      text: 'Use Redux'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).to.deep.equal({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toggleTodo should create TOGGLE_TODO action', () => {
    expect(actions.toggleTodo(1)).to.deep.equal({
      type: 'TOGGLE_TODO',
      index: 1
    })
  })
})