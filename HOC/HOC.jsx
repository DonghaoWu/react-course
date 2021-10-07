// share functionalities but not share the state.
// withCounter ===> HOC name
// WrappedComponent ===> parameter
// WithCounter ===> returned Component result in HOC

import React from 'react';

const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          incrementCount={this.incrementCount}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;

export default UpdateComponent(ClickCounter);
export default UpdateComponent(HoverCounter);
export default UpdateComponent(OtherCounter);


