// Main JS should go here!
// Include scripts using Browserify by doing:
// var $ = require("jquery");

import React from "react";
import ReactDOM from "react-dom";
import restaurantData from "./restaurantData";
import RestaurantList from "./components/restaurant-list";

var app = document.getElementById("app");

class App extends React.Component {
    render() {
        return (
            <div>
              <h1>LURNCH!</h1>
              <p>Below you will find a carefully curated list of restaurants in the greater Columbia, SC area. These restaurants have been deemed delicious by the LURNCH! Committee of Restaurant Decisiveness (CORD). Furthermore, all restaurants on this list offer healthy options.</p>
              <RestaurantList data={restaurantData}></RestaurantList>
            </div>
        );
    }
}

ReactDOM.render(<App />, app);
