import React from "react";
import Restaurant from "./restaurant";

export default class RestaurantList extends React.Component {

    render() {
        
        let restaurants = this.props.data.map(function(restaurant) {
            return (
            <Restaurant 
                key={restaurant.id} 
                name={restaurant.name} 
                address={restaurant.address} 
                website={restaurant.website}>
            </Restaurant>
            );
        });

        return (
        <div className="restaurants">
            {restaurants}
        </div>
        );
    }
}