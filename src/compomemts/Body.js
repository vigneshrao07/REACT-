import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
  const [listofRestaurants, setListofRestrant] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9966085&lng=77.5920743&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListofRestrant(
      json.data.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
     
  };
  // if (listofRestaurants.length === 0) {
  //   return <Shimmer/>;
  // }
  return  listofRestaurants.length === 0?<Shimmer/>:(
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4.2
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
