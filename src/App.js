import React, { Component } from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import SimpleTable from "./components/SimpleTable";
import EnhancedTable from "./components/EnhancedTable";
import MediaCard from "./components/MediaCard";
import CustomTable from "./components/CustomTable";
import "./App.css";



class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar />
        <MediaCard />
        <SimpleTable />
        <EnhancedTable />
        <CustomTable />
      </div>
    );
  }
}

export default App;
