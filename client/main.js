const goalsContainer = document.querySelector('#goals-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/goals`

const goalsCallback = ({ data: goals }) => displayGoals(goals)
const errCallback = err => console.log(err.res.data)


const getAllGoals = () => axios.get(baseURL).then(goalsCallback).catch(errCallback)

const createGoal = body => axios.post(baseURL, body).then(goalsCallback).catch(errCallback)


const deleteGoal = id => axios.delete(`${baseURL}/${id}`).then(goalsCallback).catch(errCallback)

const updateGoal = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(goalsCallback).catch(errCallback)


function submitHandler(event) {
    event.preventDefault()

    let title = document.querySelector('#title')
   

    let bodyObj = {
        title: title.value,
    }

    createGoal(bodyObj)

    title.value = ''
}

    function createGoalCard(goal) {
        const goalCard = document.createElement('div')
        goalCard.classList.add('goal-card')
    
        goalCard.innerHTML = `<p class="goal-title">${goal.title}</p>
        <div class="btns-container"></div>
        <button onclick="deleteGoal(${goal.id})">delete</button>`
       
        goalsContainer.appendChild(goalCard);
    }

    function displayGoals(arr) {
        goalsContainer.innerHTML = ``
        for (let i = 0; i < arr.length; i++) {
            createGoalCard(arr[i])
        }
    }

    
    form.addEventListener('submit', submitHandler)
    
    // getAllGoals();



////////////////////////////////////////////////////////////////////////////////////



const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment);


////////////////////////////////////////////////////////////////////////////////////

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () =>{
    axios.get("http://localhost:4000/api/fortune/").then(res => {
        const data = res.data;
        alert(data);
    });

};

fortuneBtn.addEventListener('click', getFortune);


////////////////////////////////////////////////////////////////////////////////////

const motivationBtn = document.getElementById('motivationButton');

const getMotivation = ()=>{
    axios.get("http://localhost:4000/api/motivation/").then(res => {
        const data = res.data;
        alert(data);
    });
}

motivationBtn.addEventListener('click', getMotivation);


//////////////////////////////////////////////////////////////////////////////////////////////////////////

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


    









