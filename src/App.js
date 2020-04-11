import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Social from "./Social/Social";
import Statistic from "./Statistic/Statistic";
import Friends from "./Friends/Friends";
import Transaction from "./Transaction/Transaction";

import friends from "./db/Friends.json";
import dataStatistic from './db/statistical-data.json'


function App() {
  return (
    <>
      <Social />
      <Statistic title={"Statistic Title"} data={dataStatistic}/>
      <Friends friends={friends} />
      <Transaction />
    </>
  );
}

export default App;
