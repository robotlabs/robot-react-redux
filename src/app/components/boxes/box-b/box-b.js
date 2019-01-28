import './box-b.css';
import React, {Component} from 'react';
import { bindActionCreators } from 'redux'
import {decrementAction} from './../../../redux/actions';

import {connect} from 'react-redux';
class BoxB extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div
        onClick={() => {
          this.props.decrement(2)
        }}
        className='container-b'>
          Box B
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.countReducers.count
  };
}
//** in this way we can use a decrement props, and keep using dispatch if needed */
const mapDispatchToProps = dispatch => {
  return {
    decrement: (v) => dispatch(decrementAction(v)),
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BoxB);
