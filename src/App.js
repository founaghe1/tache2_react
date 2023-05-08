import React, { useEffect } from 'react';
import './App.css';
import {Fruit} from './Fruit'
import { useState, createContext } from 'react';
import { Button } from 'react-bootstrap';
import { Task } from './Task';
import { Text } from './Text';
import Axios  from 'axios';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import {Navbar} from './pages/Navbar'
import { ChangeProfile } from './Components/ChangeProfile';


export const AppContext = createContext();

function App() {
  const ecole = "Bakeliste";
  const age = 18;
  const isGreen = true;
  const names = ["Moha", "Pedro", "Ali", "Kali", "Bali", "Fali"];
  
  const fruits = [
    {nom: "Banane", poid: '10kg'},
    {nom: "Orange", poid: '9kg'},
    {nom: "Mangue", poid: '25kg'},
    {nom: "Poire", poid: '13kg'},
  ];

  const planets = [
    {name: 'Mars', isGasPlanet: false},
    {name: 'Earth', isGasPlanet: false},
    {name: 'Jupiter', isGasPlanet: true},
    {name: 'Venus', isGasPlanet: false},
    {name: 'Neptune', isGasPlanet: true},
    {name: 'Uranus', isGasPlanet: true},
  ]

  // State
  const [ages, setAge] = useState(0);

  const increaseAge = () =>{
    setAge(ages + 1)
  }

  const decrementAge = () =>{
    setAge(ages - 1)
  }

  const setToZero = () =>{
    setAge(0)
  }

  const [inputValue, setInputValue] = useState("");

  const setInputValueFunction = (event) =>{
    setInputValue(event.target.value);
  }

  const [ShowText, setShowText] = useState(false);

  const handleShow = () => {
    setShowText(true);
  };

  const handleHide = () => {
    setShowText(false);
  };

  const [textColor, setTextColor] = useState("green");


  {/* Modul 5 : CRUD en React ToDo Liste */}

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const nouvelTache = (event) =>{
    setNewTask(event.target.value);
  }

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length -1].id + 1,
      taskName: newTask,
      completed: false,
      doing: false,
      
    }
    setTodoList(todoList.concat([task]));
    // const newTodoLiist = [...todoList, newTask];
    // setTodoList(newTodoLiist);
  }

  const deleteTask = (id) =>{
    // const newTodoList = todoList.filter(task => task !== taskName);
    
    // const newTodoList = todoList.filter((task) =>{
    //   return task !== taskName;
      
    // });
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) =>{
    setTodoList(todoList.map((task) => {
      if(task.id === id){
        return{...task, completed: true, doing: true} 

        //task.completed = !task.completed;
      }else{
        return task;
      }
    })
    ); 
  }

  // Module 6 Component lifeCycle UseEffect Hook

  const [showInput, setShowInput] = useState(false);

  // Module 7: Fethching data from API's in react 
  
  // fetch("https://catfact.ninja/fact")
  // .then((response) => response.json())
  // .then((responseData) => {
  //   console.log(responseData);
  // });

  const[catFact, setCatFact] = useState("")

  const fetcCatFact = () =>{
    Axios.get("https://catfact.ninja/fact").then((resp) =>{
      setCatFact(resp.data.fact);
      // console.log(resp.data);
    })
  }

  // useEffect(() =>{
  //   fetcCatFact();
  // },[]);

  // Exemple 2:

  const [name, setName] = useState("")
  const [predictedAge, setPredictedAge] = useState(null)

  const fetchAge = ()=> {
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
      setPredictedAge(res.data);
    })
  }

  // Exercice : Fethching data from API
  const [generatedExcuse, setGeneratedExcuse] = useState("")
  const fetchExcuse = (excuse) =>{
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) =>{
      setGeneratedExcuse(res.data[0].excuse);
    })

  }


  {/* Module 9: State Management */}

  const [username, setUsername] = useState("@userName");
  
  

  return (
    <div className="App">
      <h3>Hello c'est Mohamed Sarifou Diallo, {ecole} en programmation.</h3> 
      <div className='firstDiv'>
        {/* <User /> */}
        <div className='ama'>
          <User name='Amadou' age={25} email="ama@gamil.com" salary={90000} position="Senior SDE" company="Amazon"/>
        </div>
        <div className='ali'>
          <User name='Ali' age={33} email="ali@gamil.com" salary={12000} position="Junior SDE" company="Google"/>
        </div> 
        <div className='mari'>
          <User name='Mari' age={44} email="mari@gamil.com" salary={10000} position="Project Manger" company="Netflix"/>
        </div>
      </div>

      {/* Operateur ternaire condition  */}
      <div>
        <h3>Operateur ternaire condition</h3>
        {age >= 18 ? <h3>OVER AGE</h3> : <h3>UNDER AGE</h3>}
      </div>
      <div>
        <h3 style={{color: isGreen ? 'green' : 'red'}}>This has color</h3>

        {isGreen && <button>Si Green est Vrai Affiche Button</button>}
      </div>

      {/* Liste en react */}
      <div>
        <h3>Liste en reactJs</h3>
        {names.map((name) =>{
          return <h2>{name}</h2>
        })}
      </div>
      <div>
        {fruits.map((fruits) =>{
          return <Fruit Nom={fruits.nom} Poid={fruits.poid} />
        })}
      </div>

      <div>
        <h1 style={{color: isGreen ? "green" : "red" }}>Exercice: <small> liste avec operateur ternaire </small></h1>
        {planets.map((planet) =>
          planet.isGasPlanet && <h3>{planet.name} is Gas planet</h3>
        )}

        {planets.map((planet) =>
          !planet.isGasPlanet && <h3>{planet.name} is not Gas planet</h3>
        )}
      </div>

      {/* state */}
      <div className='state'>
        <h3>STATE:</h3>
        <h3>Exemple 1:</h3>
        <Button onClick={increaseAge} className='increm'>Increase Number</Button>

        <Button onClick={setToZero} className='increm1'>Set to zero</Button>

        <Button onClick={decrementAge} className='decrem'>Decrease Number</Button>

        <h3> {ages}  </h3>

      </div>
      <div>
        <h3>Exemple 2:</h3>
        <input type='text' className='input' onChange={setInputValueFunction}/>
        <h3> {inputValue} </h3>
      </div>
      <div>
        <h3>Exemple 3:</h3>
        <div className='btn'>
          <Button className='increm' onClick={handleShow}>Montrez le texte</Button>
          <Button className='increm' onClick={handleHide}>Cachez le texte</Button>
        </div>

        {ShowText && <h4>HI, MY NAME IS MOHAMED DIALLO</h4>}
      </div>

      <div>
        <h3>Exemple 4:</h3>
        <button className='decrem' onClick={() =>{
          setTextColor(textColor === "green" ? "red" : "green")
        }}>Change Color</button>
        <h3 style={{color: textColor}}>Change ma couleur !!!!</h3>
      </div>


      {/* Modul 5 : CRUD en React ToDo Liste */}

        <div>
          <h3 style={{marginTop: 35}}>Modul 5 : CRUD en React ToDo Liste </h3>
          <div className='addTask'>
            <input className='input' onChange={nouvelTache}/>
            <Button style={{marginTop: 30, marginLeft: 7}} onClick={addTask}>Ajouter tache</Button>
          </div>
          <div className='taskList'>
            {todoList.map((task) => {
              return <Task taskName={task.taskName} id={task.id}
              doing = {task.doing}
              completed = {task.completed}
              deleteTask={deleteTask} completeTask={completeTask}/>
            })}
          </div>
        </div>

      {/* Module 6 Component lifeCycle UseEffect Hook   */}

      <div className='module6'>
        <h3>Module 6 : Component lifeCycle UseEffect Hook </h3>
        <Button className='decrem' onClick={() => {
          setShowInput(!showInput);
        }}>Show / Hide Input</Button>

        <h5>{showInput && <Text />}</h5>  

      </div>

      {/* Module 7: Fethching data from API's in react */}

      <div>
        <h3>Module 7 : Fethching data from API's in react </h3>
        <button className='decrem my-3' onClick={fetcCatFact}>Generate Cat Fact</button>
        <p className='mx-3 fw-bold'>{catFact}</p>

      </div>
        {/* Exemple 2 */}
      <div>
        <h4>Exemple 2:Fethching data from API </h4>
        <input placeholder='Ex: Mohamed'  className='me-2' onChange={(event) =>{
          setName(event.target.value);
        }}/>
        <button type="button" className=" decrem" onClick={fetchAge}>Predir l'age</button>
        <p className='fw-bold mt-3 me-5 pe-5'>Nom : {predictedAge?.name} </p>
        <p className='fw-bold mt-3 me-5 pe-5'>L'age predit est : {predictedAge?.age} </p>
        <p className='fw-bold mt-3 me-5 pe-5'>Compte : {predictedAge?.count} </p>
      </div>

      {/* Exercice */}

      <div>
        <h4>Exercice: Fethching data from API</h4>
        <h3 className='mb-3'>Generate An Excuse for:</h3>
        <button className='decrem px-4' onClick={() => fetchExcuse("party")}>Fete</button>
        <button className='decrem mx-2' onClick={() => fetchExcuse("family")}>Famille</button>
        <button className='decrem' onClick={() => fetchExcuse("office")}>Bureau</button>

        <p className='mx-5 px-5 fw-bold mt-3'> {generatedExcuse} </p>
      </div>


        

        <div className='mt-5'>
          <h4>Module 8 et 9: Les Routes avec reactJs / useContext Hook et state Management:</h4>
          <AppContext.Provider value={{username, setUsername}}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/changeProfile" element={<ChangeProfile />} />
              <Route path='*' element={<h1> ERROR 404 Page not found  </h1>} />
            </Routes>
          </Router>
          </AppContext.Provider>
        </div>
      
      
    </div>
  );
}





const User = (props) =>{
  return(
    <div className='secondDiv'>
      {/* <h2><small>Nom:</small> Bali</h2>
      <h2><small>Age:</small> 33 ans</h2>
      <h2><small>Email:</small> bali@gamil.com</h2> */}
      <h2 ><small>Name:</small> {props.name}</h2>
      <h2 ><small>Age:</small> {props.age}</h2>
      <h2><small>Email:</small> {props.email}</h2>

      <h2><small>Salary:</small> {props.salary}</h2>
      <h2><small>Position:</small> {props.position}</h2>
      <h2><small>Company:</small> {props.company}</h2>
      <hr />

    </div>
  )
  
}





export default App;


