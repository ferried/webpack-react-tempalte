import React from 'react';
import PropTypes from 'prop-types';

class DefaultLayout extends React.PureComponent {
  render() {
    const { children } = this.props;
    return (
      <>
        <h1>hahahaha</h1>
        {children}
      </>
    );
  }
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DefaultLayout;
