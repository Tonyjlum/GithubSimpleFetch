import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './component/searchForm.js'
import ProfileRender from './component/profileRender.js'

class App extends Component {

  state = {
    search: "",
    lastSearch: "",
    currentUser: {}
  }

  //control form inputs
  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  //handle the submit get request of the search form
  handleSubmit = (e) => {
    e.preventDefault()
      if (this.state.search !== "")
      fetch(`https://api.github.com/users/${this.state.search}`)
      .then(response => response.json())
      .then( userInfo => {
        this.setState({
          lastSearch: this.state.search,
          search: "",
          currentUser: userInfo
        }, () => console.log(this.state))
      })
    }


  //renders the profile from the fetch request. If none is found, render message to user with last search query.
  renderSearchedProfile = () => {
    if (this.state.currentUser.message === "Not Found"){
      return <p>{`${this.state.lastSearch} was not found on Github. Please try again.`} </p>
    } else if (this.state.currentUser.login){
      return <ProfileRender currentUser={this.state.currentUser} />
    }
  }

  render() {
    return (
      <div className="App">
        <SearchForm
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {this.renderSearchedProfile()}
      </div>
    );
  }
}

export default App;
