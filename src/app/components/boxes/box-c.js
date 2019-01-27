import './box-c.css';
import React, {Component} from 'react';
import {connect} from 'react-redux';

class BoxC extends Component {
  render() {
    console.log('this.props', this.props);
    return (
      <BoxContainer>{this.props.count}, {this.props.countxxx}</BoxContainer>
    )
  }
}
function mapStateToProps(state) {
  return {
    count: state.a.count,
    countxxx: state.b.countxxx
  }
}
export default connect(mapStateToProps)(BoxC);

const BoxContainer = (props) => (
  <div
    className='container-c'>
      Box xC {props.children}
  </div>
)