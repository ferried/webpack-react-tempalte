/*
 * @Date: 2020-02-14 13:32:37
 * @Author: ferried
 * @Email: harlancui@outlook.com
 * @LastEditors  : ferried
 * @LastEditTime : 2020-02-14 13:40:28
 * @Editor: Visual Studio Code
 * @Desc: nil
 * @License: nil
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increaseAction } from '../action/CountAction';


class Counter extends React.PureComponent {
  render() {
    const { value, onIncreaseClick } = this.props;
    return (
      <div>
        <span>{value}</span>
        <button type="submit" onClick={onIncreaseClick}> +1</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncreaseClick: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { value: state.count };
}

function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
