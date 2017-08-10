import React, { Component } from 'react';
import data from '../constants/data'
import styles from '../stylesheets/index.css'
import Wishlist from './Wishlist'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedPlaces:[]
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id){
    let newClickedPlaces = (this.state.clickedPlaces.includes(id) ? this.state.clickedPlaces.filter(ident => ident != id) : this.state.clickedPlaces.concat([id]))
    this.setState({ clickedPlaces: newClickedPlaces})
  }

  render() {

    return (
      <div id="wishlist-div">
        <div className="row">
          <div className="small-12 small-centered columns text-center">
            <h3>Wanderlust Wishlist</h3>
            <Wishlist data={this.props.data} handleClick={this.handleClick} clickedPlaces={this.state.clickedPlaces} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
