import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import SearchArea from '../components/SearchArea';
import ListOfBucketlists from "../components/bucketlists/ListOfBucketlists";
import Footer from '../components/Footer';
import {connect} from "react-redux";
import LoginForm from "../components/auth/login";

class App extends Component {

  render() {

    const { dispatch, buckets, isAuthenticated } = this.props;

    return (
      <div>
        {isAuthenticated
          ?
          <div>
            <Header/>
            <div className="container-fluid" id="main-container">
              <SearchArea />
              <ListOfBucketlists
                dispatch={dispatch}
                buckets={buckets}
              />
            </div>
          </div>
          :
          <LoginForm
            dispatch={dispatch}
            isAuthenticated={isAuthenticated}
          />
          }
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { buckets, isFetching, isAuthenticated } = state;
  return {
    buckets,
    isFetching,
    isAuthenticated
  }
};

export default connect(mapStateToProps)(App);
