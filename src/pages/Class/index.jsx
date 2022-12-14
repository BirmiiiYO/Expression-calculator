import React from 'react';
import PropTypes from 'prop-types';

import { Display, ControlPanel } from '../../components';
import { Container } from './styles';

export class ClassCalc extends React.Component {
  constructor(props) {
    super(props);
    this.setExpr = this.setExpr.bind(this);
    this.state = {
      expr: '',
    };
  }
  setExpr(value) {
    this.setState((state) => {
      return { expr: value };
    });
  }

  render() {
    return (
      <Container>
        <Display expr={this.state.expr} />
        <ControlPanel
          expr={this.state.expr}
          setExpr={this.setExpr}
          setHistory={this.props.setHistory}
        />
      </Container>
    );
  }
}

ClassCalc.propTypes = {
  setHistory: PropTypes.func,
};
