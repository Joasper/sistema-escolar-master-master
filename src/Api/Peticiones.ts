import axios from "axios";

const Peticiones = axios.create({
  baseURL: "http://localhost:2000/api",
});

export default Peticiones;
