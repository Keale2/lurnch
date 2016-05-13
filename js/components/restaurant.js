import React from "react";

export default class Restaurant extends React.Component {
    render() {
        return (
        <li className="restaurant"><a href={this.props.website} target="_blank">{this.props.name}</a> [<a href="#">map</a>]</li>
        );
    }
}