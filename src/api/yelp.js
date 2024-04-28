import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses", // Base URL for Yelp API requests
  headers: {
    Authorization: "Bearer ",
  },
});
