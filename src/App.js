import React, { Component } from 'react';
import {
  Col,
  Button,
  Grid,
  PageHeader,
  Row,
} from 'react-bootstrap'

class App extends Component {
    constructor (props) {
        super(props)
        this.state = {
            buttonText: "Play Game",
            gameWon: false,
            result: ""

        }
    }
    toggleResult() {
        const newButtonText = this.state.gameWon ? "Play Game" : "Excellent!"
        const newGameOne = this.state.gameWon ? false : true
        const newResult =
        this.state.result ? '' : 'Congratulations'
        this.setState({buttonText: newButtonText, gameWon: newGameOne, result : newResult})



    }

  render() {
    return (
      <Grid>
        <PageHeader>
          Testing Example
        </PageHeader>
        <Row>
          <Col xs={4}>
            <Button onClick={this.toggleResult.bind(this)}>
            {this.state.buttonText}
            </Button>
          </Col>
          <Col xs={8}>
            <p id="result-text">{this.state.result}</p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
