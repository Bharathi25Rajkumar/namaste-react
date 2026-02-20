import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(resData);

    return (
        <div className="body">
            <div className="menu-opt">
                <div className="btn">
                    <button className="filter-btn"
                onClick={() => {
                    let filteredRestaurants = listOfRestaurants.filter(res => res.avgRating > 4.5);
                    setListOfRestaurants(filteredRestaurants);
                }}>Top Rated Restaurants</button>  
                </div>                        
                <div className="search">
                    <input placeholder="Search for restaurant" type="text" />
                <button className="search-btn">Search</button>
                </div>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.id} res={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;