import './box-b.css';
import React, {Component} from 'react';
import {decrementAction} from './../../../redux/actions';

import {connect} from 'react-redux';
class BoxB extends Component {
  render() {
    return (
      <BoxContainer></BoxContainer>
    )
  }
}
const actionsToStore = {
  decrementAction
}
export default connect(null, actionsToStore)(BoxB);

const BoxContainer = () => (
  <div
    className='container-b'>
      Box B
  </div>
)