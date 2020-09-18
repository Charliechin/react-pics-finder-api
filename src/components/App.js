import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
class App extends React.Component {
  state = { images: [] }

  // this is how to use async in an arrow function
  // Remember to use arrow functions to avoid the classic this.setState
  // is not a function error.

  onSearchSubmit = async (term) => {
    const response = await unsplash
      .get('/search/photos', {
        params: { query: term },
      });
    // console.log(response.data.results);
    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '5em' }}>
        <p>App.js!</p>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div >
    )
  };
}
export default App;

