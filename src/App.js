import React, { Component } from "react";

import "./App.css";
import ButtonDisplay from "./components/ButtonDisplay";
import { Card, Header, Image } from "semantic-ui-react";
import { random } from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null,
    };
    this.assignNewQuoteIndex = this.assignNewQuoteIndex.bind(this);
    this.selectedQuoteIndex = this.selectedQuoteIndex.bind(this);
  }

  componentDidMount() {
    fetch("https://seinfeld-quotes.herokuapp.com/quotes")
      .then((data) => data.json())
      .then((quotes) => this.setState({ ...quotes }, this.assignNewQuoteIndex));
  }
  get selectedQuote() {
    if (
      !this.state.quotes.length ||
      !Number.isInteger(this.state.selectedQuoteIndex)
    ) {
      return;
    }
    return this.state.quotes[this.state.selectedQuoteIndex];
  }

  assignNewQuoteIndex() {
    this.setState({ selectedQuoteIndex: this.selectedQuoteIndex() });
  }

  nextQuoteClickHandler() {
    console.log("hi");
  }
  selectedQuoteIndex() {
    if (!this.state.quotes.length) {
      return;
    }
    return random(0, this.state.quotes.length - 1);
  }

  render() {
    return (
      <div className="App">
        <Image
          className="centered"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0d/Seinfeld.svg"
        />
        <Header as="h1">QUOTABLES</Header>

        <Card className="centered" color="grey">
          <Card.Content>
            <Card.Header>
              {this.selectedQuote ? this.selectedQuote.quote : ""}
            </Card.Header>
            <br />
            <Card.Description>
              -{this.selectedQuote ? this.selectedQuote.author : ""}
            </Card.Description>
            <br />
            <ButtonDisplay
              buttonDisplayName="Next Quote"
              clickHandler={this.assignNewQuoteIndex}
            />
          </Card.Content>
        </Card>
      </div>
    );
  }
}
export default App;
