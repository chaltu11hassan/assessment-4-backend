const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const {getDestinations,createDestination,updateDestination, deleteDestination} = require('./controller');

const {addToWishlist, getCountries, deleteCountry} = require('./controller');

const {login, register} = require('./controller');

app.get('/api/destinations', getDestinations);
app.post('/api/destinations', createDestination);
app.put('/api/destinations/:id', updateDestination);
app.delete('/api/destinations/:id', deleteDestination);

app.post('/api/countries', addToWishlist);
app.get('/api/countries',getCountries);
app.delete('/api/countries/:id', deleteCountry);

app.post('/api/login', login)
app.post('/api/register', register)


app.listen(4000, () => console.log("Server running on 4000"));






