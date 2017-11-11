import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchArea from './components/SearchArea';
import ListOfBucketlists from "./components/ListOfBucketlists";
import Footer from './components/Footer';

class App extends Component {
  render() {


    return (
      <div>
        <Header/>
        <div className="container-fluid" id="main-container">
          <SearchArea />
          <ListOfBucketlists/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
