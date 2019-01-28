import './box-c.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BoxC extends Component {
  render() {
    return (
      <div
        className='container-c'>
          Box xC {this.props.count}, {this.props.state}
      </div>
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