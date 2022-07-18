let goals = require('./db.json');
let globalID = 3;

module.exports = {
    getGoals: (req,res) => {
        res.status(200).send(goals)
},
   updateGoal: (req, res)=>{
        const {type} = req.body;
        let index = goals.findIndex(elem => elem.id === +req.params.id);
            res.status(200).send(goals);
  },
   
   deleteGoal: (req, res) => {
    let index = goals.findIndex(elem => elem.id === +req.params.id)
    goals.splice(index, 1);
    res.status(200).send(goals);

 },

    createGoal: (req, res)=>{
    console.log(req.body)
        const {title} = req.body;
    let newGoal={
    id:globalID,
    title:title
    }
    goals.push(newGoal);
    globalID++;
    res.status(200).send(goals);
},

///////////////////////////////////////////////////////////////////
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A faithful friend is a strong defense.", "A fresh start will put you on your way."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getMotivation: (req, res) => {
        const motivations = ["Nothing is impossible", "Just one small positive thought in the morning can change your whole day.", "Opportunities don't happen, you create them."];
      
        // choose random goal
        let randomIndex = Math.floor(Math.random() * motivations.length);
        let randomMotivation = motivations[randomIndex];
      
        res.status(200).send(randomMotivation);
    }
   

    

}


    