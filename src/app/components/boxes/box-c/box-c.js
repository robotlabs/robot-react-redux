import './box-c.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BoxC extends Component {
  render() {
    return (
      <BoxContainer>{this.props.count}, {this.props.state}</BoxContainer>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.countReducers.count,
    state: state.appStateReducers.state
  }
}
export default connect(mapStateToProps)(BoxC);

const BoxContainer = (props) => (
  <div
    className='container-c'>
      Box xC {props.children}
  </div>
)