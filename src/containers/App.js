import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import SearchArea from '../components/SearchArea';
import ListOfBucketlists from "../components/bucketlists/ListOfBucketlists";
import Footer from '../components/Footer';
import {connect} from "react-redux";

class App extends Component {

  render() {

    const { dispatch, buckets } = this.props;

    return (
      <div>
        <Header/>
        <div className="container-fluid" id="main-container">
          <SearchArea />
          <ListOfBucketlists
            dispatch={dispatch}
            buckets={buckets}
          />
        </div>
        <Footer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { buckets, isFetching } = state;
  return {
    buckets,
    isFetching
  }
};

export default connect(mapStateToProps)(App);
