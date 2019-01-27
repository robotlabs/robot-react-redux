import './box-e.css';
import React, {Component} from 'react';
class BoxE extends Component {
  render() {
    return (
      <BoxContainer></BoxContainer>
    )
  }
}
export default BoxE;

const BoxContainer = () => (
  <div
    className='container-e'>
      Box E
  </div>
)
