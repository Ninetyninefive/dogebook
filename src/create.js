import React, { useState } from 'react'
import { Multiselect } from 'react-widgets'
import 'react-widgets/dist/css/react-widgets.css';
import { name } from 'store/storages/cookieStorage';

let friends = ['Madlad', 'Bettan', 'Kotten', 'Krutknut'];

class FriendSelector extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = { value: ['@Madlad', '@Bettan'] }
  }

  render() {
    return (
      <Multiselect
        data={friends}
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    )
  }
}

const Dog = {
  name: '',
  nick: '',
  age: 0,
  bio: '',
  friends: []
};
 
 //convert JSON animal into a string
 var dehydratedDog = JSON.stringify(Dog);
 
 //save it with local storage
 window.localStorage.setItem('Dog', dehydratedDog);
 
 //get 'animal' and rehydrate it  (convert it back JSON)
 var rehydratedDog = JSON.parse(window.localStorage.getItem('Dog'));

class Create extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        Dog 
      };
      
      this.handleChange = this.handleChange.bind(this);
    }
  
  handleChange = (e) => {
    e.preventDefault();
    const target = e.target;
    const value = target.type;
    const name = target.name;
    this.setState({
      [name]: value
    });
    
    console.log(e.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let newDog = this.state;
    console.log(Dog);
  }

  render() {
    
    return (
      <form onSubmit={this.handleSubmit.bind(this.state)}>
        <label>Namn:
          <input 
              placeholder="Name" 
              className="name" 
              type="text" 
              value={this.state.name} 
              onChange={this.handleChange}

          />
        </label>
        <br></br>
        <label>Nick:
          <input 
              placeholder="Nickname" 
              className="nick" 
              type="text" 
              value={this.state.nick} 
              onChange={this.handleChange}

          />
        </label>
        <br></br>
        <label>Age:
          <input 
              placeholder="Age" 
              className="age" 
              input type="text" 
              pattern="[0-9]*" 
              min="0" 
              max="25" 
              value={this.state.age} 
              onChange={this.handleChange}

          />
        </label>
        <br></br>
        <label>Bio:
          <input 
              placeholder="Biography" 
              className="bio" 
              type="text" 
              value={this.state.bio} 
              onChange={this.handleChange}

          />
        </label>
        <br></br>
        <label>Friends:
          <select 
              placeholder="Tom" 
              className="friends" 
              type="select" 
              width="100" 
              data={friends} 
              value={this.state.friends} 
              onChange={value => this.setState({ value })}

        />
          <FriendSelector
                placeholder="Tom"
                className="friends"
                data={friends}
                value={this.state.value}
                onChange={value => this.setState({ value })}
                />
        </label>
        <br></br>
        <input 
            className="submit" 
            type="submit" 
            value="Submit"

        />
      </form>
    );
  }
}

export {Create}