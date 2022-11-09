import Profile from './Profile';
import './App.css'; 


function App() {

  const name="mouna"
   const handleName=(name)=>{
     (name=="anonym")?(alert(`plz insert name`)):alert(`hello ${name} `)
   }
  return (
    <div className="kiko">
      <Profile  name='hamza' handleName={handleName} img='https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80'  width="100" height="50" />
 
      <Profile name="amine"  handleName={handleName} />
      <Profile name={name} handleName={handleName} />


    </div> 

    
  );
}



export default App
