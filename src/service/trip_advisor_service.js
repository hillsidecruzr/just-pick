const API_BASE = "https://tripadvisor1.p.rapidapi.com";
const ENDPOINTS = {
  restaurant_search: "restaurants/list-in-boundary"
};

export default class {
    async findRestaurants(bl_lat, bl_long, tr_lat, tr_long) {
        try {
            const unit = "mi";
            const response = await fetch(`${API_BASE}/${ENDPOINTS.restaurant_search}?lunit=${unit}&limit=30&currency=USD&lang=en_US&bl_latitude=${bl_lat}&bl_longitude=${bl_long}&tr_latitude=${tr_lat}&tr_longitude=${tr_long}`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
                    "x-rapidapi-key": "29293bff52msh46a8a742d2f26bfp16890djsn7f78d7b00198"
                }
            });

            console.log(response);
        } catch(e) {
            console.log("error.");
            console.log(e);
        }

    }
}