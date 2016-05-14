import React from "react";
import ReactDOM from "react-dom";
import getData from "./get-data";
import RestaurantList from "./components/restaurant-list";

const app = document.getElementById("app");

class App extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { restaurantData: [] };
    }
    
    componentDidMount() {
        getData("./restaurant-data.json", (data) => {
            this.setState({ restaurantData: data });
        });
    }
    
    render() {
        return (
            <div>
              <h1>LURNCH!</h1>
              <p>Below you will find a carefully curated list of restaurants in the greater Columbia, SC area. These restaurants have been deemed delicious by the LURNCH! Committee of Restaurant Decisiveness (CORD). Furthermore, all restaurants on this list offer healthy options.</p>
              <RestaurantList data={this.state.restaurantData}></RestaurantList>
            </div>
        );
    }
}

ReactDOM.render(<App />, app);
