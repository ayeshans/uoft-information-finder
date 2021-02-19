import React, { Component } from 'react';
import './SearchPage.css';

class SearchPage extends Component {
  render() {
    return (
        <h1>{this.props.campus}</h1>
    );
  }
}

export default SearchPage;