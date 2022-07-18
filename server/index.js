const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());


const {getCompliment, getFortune, getMotivation, getGoals, createGoal, updateGoal, deleteGoal} = require('./controller');


app.get('/api/goals', getGoals);
app.post('/api/goals', createGoal);

app.put('/api/goals/:id', updateGoal)
app.delete('/api/goals/:id', deleteGoal)


app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/motivation", getMotivation);

  



app.listen(4000, () => console.log("Server running on 4000"));






