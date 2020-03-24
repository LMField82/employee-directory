import React, { Component } from "react";
//import css here

export default class Header extends Component {
    render(){
        return (
            <div className="header">
                <h1>Employee Directory</h1>
                <p>Instructions: Enter name to filter through employees.</p>
            </div>
        )
    }
}
