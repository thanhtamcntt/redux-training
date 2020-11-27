import React, { Component } from 'react';
import FoodContainer from '../containers/food-list'
import FoodDetailContainer from '../containers/food-detail';

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div className="App">
                    <div className="App-header">
                        <h2>Welcome to React with Redux project</h2>
                    </div>
                    <p className="App-intro">
                        <p>This is a tutorial React app with Redux</p>
                    </p>
                    <h2>List of foods: </h2>
                    <FoodContainer />
                    <hr />
                    <h2>Food details: </h2>
                    <FoodDetailContainer />
                </div>
            </div>
        );
    }
}

export default Home;