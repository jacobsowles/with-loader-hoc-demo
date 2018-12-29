import React, { PureComponent } from "react";

import PuppyPicture from "../PuppyPicture";
import WithLoader from "../WithLoader";
import "./App.css";

const PuppyPictureWithLoader = WithLoader(PuppyPicture);

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 3000);
  }

  render() {
    return (
      <div className="app">
        <PuppyPictureWithLoader isLoading={this.state.isLoading} />
      </div>
    );
  }
}

export default App;
