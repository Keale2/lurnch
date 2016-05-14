import React from "react";
import Restaurant from "./restaurant";

export default function RestaurantList({data}) {
    let restaurants = data.map(function(restaurant) {
        return (
        <Restaurant 
            key={restaurant.id} 
            name={restaurant.name} 
            address={restaurant.address} 
            map={restaurant.map} 
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