import React, { Component } from 'react';
import Nav from './Nav';
import Main from './Main';
import API from '../utils/API';
import Wrapper from './Wrapper';

class SearchContainer extends Component {
    state = {
        result: {},
        search: "",
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    };

    searchEmployees = () => {
        API.getUsers()
          .then(res => this.setState({ result: res.data }))
          .catch(err => console.log(err));
      };

   handleSearchChange = event => {
       const value = event.target.value;
       const filteredList = this.state.users.filter(user => {
           const amounts = Object.values(user).join("").toLowerCase();
           return amounts.indexOf(value.toLowerCase())!== -1
       })
       this.setState({filteredUsers: filteredList})
   };

   componentDidMount() {
       API.getUsers().then(user => {
           this.setState({
               users: user.data.results,
               filteredUsers: user.data.results
           });
       });
   };

   render() {
       return (
           <Wrapper>
               <Nav handleSearchChange = {this.handleSearchChange} />
               <Main />
           </Wrapper>
       )
   }

}

export default SearchContainer;