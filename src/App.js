import React, {Component} from "react";
//import logo from './logo.svg';
import Customer from "./components/Customer";
import './App.css';

const customers = [
  {
  'id':1,
  'image':"https://placeimg.com/64/64/1",
  'name':'홍길동',
  'birthday':'961222',
  'gender':'남',
  'job':'대학생'
  }, 
  {
    'id':2,
    'image':"https://placeimg.com/64/64/2",
    'name':'전희수',
    'birthday':'900226',
    'gender':'남',
    'job':'프로그래머'
  }, 
  {
      'id':3,
      'image':"https://placeimg.com/64/64/3",
      'name':'김소영',
      'birthday':'850406',
      'gender':'여',
      'job':'디자이너'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c=>{return(<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>);})}
      </div>
    );
  }  
}

export default App;
