import { connect } from 'react-redux'
import { setVisibilityFilter } from '../Actions/actions'
import Link from '../Presentationals/links'

const mapStateToProps = (state, ownProps) => {  
//chose wich link is active
  return {    
    active: ownProps.filter === state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default FilterLink