import React, { Component } from 'react';
import Nav from './Nav';
import API from '../utils/API';
import DataTable from './DataTable'
import "../../src/styles/App.css";

class SearchContainer extends Component {
    state = {
        result: {},
        search: "",
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    };

    headings = [
        {name: "Image", width: "10%"},
        {name: "Name", width: "15%"},
        {name: "Phone", width: "15%"},
        {name: "Email", width: "20%"},
        {name: "DOB", width: "10%"},
    ]

    

    handleSort = (heading) => {
        if (this.state.order === "descend") {
            this.setState({order: "ascend"})
        } else {
            this.setState({order: "descend"})
        }

        const compare = (emp1, emp2) => {
            if (this.state.order === "ascend") {
                if (emp1[heading] === undefined) {
                    return 1;
                } else if (emp2[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return emp1[heading].first.localeCompare(emp2[heading].first)
                } else {
                    return emp1[heading] - emp2[heading];
                }
            } else {
                if (emp2[heading] === undefined) {
                    return 1;
                } else if (emp1[heading] === undefined) {
                    return -1;
                } else if (heading === "name") {
                    return emp2[heading].first.localeCompare(emp1[heading].first)
                } else {
                    return emp2[heading] - emp1[heading];
                }
            }
        }

        const sortedUsers = this.state.filteredUsers.sort(compare())
        this.setState({ filteredUsers: sortedUsers });
    }



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
           <>
               <Nav handleSearchChange = {this.handleSearchChange} />
               <div className="dataArea">
                   <DataTable 
                        headings={this.headings}
                        users={this.state.filteredUsers}
                        handleSort={this.handleSort}
                   />
               </div>
           </>
       )
   }

}

export default SearchContainer;