import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
   
  const [listofRestaurants, setListofRestrant] = useState(resList);
    return(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {  
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
          
            setListofRestrant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
