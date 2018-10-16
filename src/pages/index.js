import React from 'react'
// import styled from 'react-emotion'

import Background from '../components/background'
import Layout from '../components/layout'
import Form from '../components/form'
import Answer from '../components/answer'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
        showAnswer: false
    };
  }

  handler(result) {
    this.setState({
        showAnswer: true,
        result: result
    });
  }

  render() {
    return (
      <Layout>
      <Background answer={this.state.showAnswer}/>
      {this.state.showAnswer ? <Answer duration={this.state.result} /> : <Form handler={this.handler} />}
    </Layout>
    )
  }
}

export default IndexPage
