import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header';
import SearchArea from '../components/SearchArea';
import ListOfBucketlists from "../components/bucketlists/ListOfBucketlists";
import Footer from '../components/Footer';

class App extends Component {
  state = {
    data: [
            {
              id: 1,
              name: 'BucketList1',
              items: [
                {
                  id: 1,
                  name: 'I need to do X',
                  date_created: '2015-08-12 11:57:23',
                  date_modified: '2015-08-12 11:57:23',
                  done: false
                },
              ],
              date_created: '2015-08-12 11:57:23',
              date_modified: '2015-08-12 11:57:23',
              created_by: '1113456',
            },
            {
              id: 2,
              name: 'BucketList2',
              items: [
                {
                  id: 1,
                  name: 'I need to do X',
                  date_created: '2015-08-12 11:57:23',
                  date_modified: '2015-08-12 11:57:23',
                  done: false
                },
                {
                  id: 2,
                  name: 'I need to do X',
                  date_created: '2015-08-12 11:57:23',
                  date_modified: '2015-08-12 11:57:23',
                  done: false
                },
                {
                  id: 3,
                  name: 'I need to do X',
                  date_created: '2015-08-12 11:57:23',
                  date_modified: '2015-08-12 11:57:23',
                  done: true
                },
              ],

              date_created: '2015-08-12 11:57:23',
              date_modified: '2015-08-12 11:57:23',
              created_by: '1113456',
            },
            {
              id: 3,
              name: 'BucketList3',
              date_created: '2015-08-12 11:57:23',
              date_modified: '2015-08-12 11:57:23',
              created_by: '1113456',
            },
            {
              id: 4,
              name: 'BucketList4',
              date_created: '2015-08-12 11:57:23',
              date_modified: '2015-08-12 11:57:23',
              created_by: '1113456',
            },

    ]
  };

  render() {
    return (
      <div>
        <Header/>
        <div className="container-fluid" id="main-container">
          <SearchArea />
          <ListOfBucketlists data={this.state.data}/>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
