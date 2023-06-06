
import { useState } from 'react';
import './App.css';
import Displaypage from './form/displaypage';
import Form from './form/form';
// import Apicallmsg from './apicall';



function App() {

  const [showinfo,setShowinfo] = useState(false);

  // const data={
  //   name: 'john',
  //   age:23
  // }
  return (
    <div className="App">
     {!showinfo? <Form/>:
      <Displaypage  data={{name:'testname',age:45}}/>
    
     }
     <button onClick={()=>setShowinfo(!showinfo)}>{!showinfo?'showinfo':'back'}</button>
     {/* <Displaypage data={{name:'testname',age:45}}/> */}
     {/* <Apicallmsg /> */}
    </div>
  );
}

export default App;
