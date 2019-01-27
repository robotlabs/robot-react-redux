import './box-a.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import {incrementAction} from './../../redux-actions';
class BoxA extends Component {
  componentDidMount() {
    this.props.dispatch(incrementAction(14));
    setTimeout(() => {
      this.props.dispatch(incrementAction(24));
    }, 2000)
  }
  render() {
    return (
      <BoxEl>
           -EL: {this.props.count}
      </BoxEl>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(BoxA);


const BoxEl = (props) => (
  <div
    className='container'>
      Box A {props.children}
  </div>
)