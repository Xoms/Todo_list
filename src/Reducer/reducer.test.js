import { todos, visibilityFilter } from './reducer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect, assert } from 'chai';

configure({ adapter: new Adapter() });

describe('todos reducer', () => {
  it('should handle initial state', () => {
    expect(
      todos(undefined, {})
    ).to.deep.equal([])
  })

  it('should handle ADD_TODO', () => {
    expect(
      todos([], {
        type: 'ADD_TODO',
        text: 'Run the tests'        
      })
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false        
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false,          
        }
      ], {
        type: 'ADD_TODO',
        text: 'Use Redux'        
      })
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false
      }, {
        text: 'Use Redux',
        completed: false
      }
    ])

    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false
        }, {
          text: 'Use Redux',
          completed: false
        }
      ], {
        type: 'ADD_TODO',
        text: 'Fix the tests'
      })
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false
      }, {
        text: 'Use Redux',
        completed: false
      }, {
        text: 'Fix the tests',
        completed: false
      }
    ])
  })

  it('should handle TOGGLE_TODO', () => {
    expect(
      todos([
        {
          text: 'Run the tests',
          completed: false
        }, {
          text: 'Use Redux',
          completed: false
        }
      ], {
        type: 'TOGGLE_TODO',
        index: 1
      })
    ).to.deep.equal([
      {
        text: 'Run the tests',
        completed: false
      }, {
        text: 'Use Redux',
        completed: true
      }
    ])
  })

})

describe('visibilityFilter reducer', () => {
    it('should handle initial state', () => {
      expect(
        visibilityFilter(undefined, {})
      ).to.equal('SHOW_ALL')
    })
    it('should handle SET_VISIBILITY_FILTER', () => {
        expect(
            visibilityFilter(
              'SHOW_ALL',
              {type: 'SET_VISIBILITY_FILTER', filter: 'SHOW_COMPLETED'}          
          )).to.equal('SHOW_COMPLETED')
    })

})