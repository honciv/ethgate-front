import React, { Component } from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import SimpleTable from "./components/SimpleTable";
import MediaCard from "./components/MediaCard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <div className="cards">
          <MediaCard />
          <MediaCard />
          <MediaCard />
        </div>
        <SimpleTable />
      </div>
    );
  }
}

export default App;
