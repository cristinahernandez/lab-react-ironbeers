import axios from "axios";

class BeerService {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://ih-beer-api.herokuapp.com/beers"
    });
  }
  getAllBeers() {
    return this.axios.get().then(response => response.data);
  }
  getOneBeer(id) {
    return this.axios.get(id).then(response => response.data);
  }
  getRandomBeer(random) {
    return this.axios.get(random).then(response => response.data);
  }
  postNewBeer(body) {
    return this.axios.post("/new", body).then(({ data: beer }) => beer);
  }
}

const beerService = new BeerService();

export default beerService;
