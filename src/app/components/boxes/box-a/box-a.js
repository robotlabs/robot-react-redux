import './box-a.css';
import React, {Component} from 'react';
import { connect } from 'react-redux';
import { incrementAction } from '../../../redux/actions';
class BoxA extends Component {
  componentDidMount() {
    //** example. importing action via props from App */
    //** then dispatching using dispatch (from Provider) */
    // const { actions } = this.props;
    // const { incrementAction } = actions;
    // setTimeout(() => {
    //   this.props.dispatch(incrementAction(24));
    // }, 2000);
  }
  render() {
    return (
      <div
        className='container'
        onClick={() => {
          this.props.dispatch(incrementAction(3))
        }}>
           -EL: {this.props.count}
      </div>
    )
  }
}
//** being updated via store.count */
function mapStateToProps(state) {
  return {
    count: state.countReducers.count
  };
}
export default connect(mapStateToProps)(BoxA);
