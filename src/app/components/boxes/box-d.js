import './box-d.css';
import React, {Component} from 'react';
class BoxD extends Component {
  render() {
    return (
      <BoxContainer></BoxContainer>
    )
  }
}
export default BoxD;

const BoxContainer = () => (
  <div
    className='container-d'>
      Box D
  </div>
)
