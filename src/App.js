import logo from './logo.svg';
import './App.css';

function App() {

  let myName = {
    name: "Billah Masum, ",
    job: "software developer"
  }

  let singerName = {
    name: "The Don",
    job: "This is me"
  }
 
  return (
    <div className="App">
      <header className="App-header">
      <Person></Person>
      <MyFile></MyFile>
      <DoubleLine></DoubleLine>
      </header>
    </div>
  );
}
function Person(){
  let styleColor ={
    color:'red',
    backgroundColor:'tomato'
  }
  return <h1 style={styleColor}>Name: Billah Md Masum</h1>
}

function MyFile(){
  let styleFile = {
    color:'yellow',
    backgroundColor:'black'
  }
  return <h2 style={styleFile}>Job: Software Engineer</h2>
}

function DoubleLine(){

  let styleDouble = {
    border:'3px solid white',
    margin: '10px'
  }
  return (
    <div style={{border: '2px solid white', margin:'10px'}}>
      <h1>Name: Md Masum Billah</h1>
      <h2>Job: Software Developer</h2>
    </div>
  )
}
export default App;
