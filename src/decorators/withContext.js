import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import emptyFunction from '../../node_modules/react/lib/emptyFunction';

function withContext(ComposedComponent) {
  return class WithContext {

    static propTypes = {
      context: PropTypes.shape({
        onSetTitle: PropTypes.func,
        onSetMeta: PropTypes.func
      })
    };

    static childContextTypes = {
      onSetTitle: PropTypes.func.isRequired,
      onSetMeta: PropTypes.func.isRequired
    };

    getChildContext() {
      let context = this.props.context;
      return {
        onSetTitle: context.onSetTitle || emptyFunction,
        onSetMeta: context.onSetMeta || emptyFunction
      };
    }

    render() {
      let { context, ...other } = this.props; // eslint-disable-line no-unused-vars
      return <ComposedComponent {...other} />;
    }

  };
}

export default withContext;
