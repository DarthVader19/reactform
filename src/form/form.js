import React, { useState } from 'react'

import {data} from './countries'
const Form = () => {


    const [country,setCountry] = useState('');
    const [state,setState] = useState([]);
    const [city,setCity] = useState([]);

    

    const setValue=(e,of_='state')=>{
     
     const value = e.target.value
     console.log(e.target.id,value);
     if(of_==='country') setCountry(value);
     const values = data[of_][value]
     of_==='state'?setState([...state,...values]):setCity([...city,...values])
   }

    const displayAge=(e)=>{
        console.log(+e.target.value.slice(0,4));
           
        const age = new Date().getFullYear() - +e.target.value.slice(0,4);

       document.querySelector('#age').setAttribute('placeholder',age)
    }

  return (
    <div >
        <h2>Registration Form</h2>
    <form  id = 'regform' action="api/register" method="POST">


        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" pattern="[A-Za-z]+" required />
        <br/><br/>

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" pattern="[A-Za-z]+" required />
        <br/><br/>

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br/><br/>
        

        <label  htmlFor="country">Country: </label>
        <select onClick={(e)=>setValue(e)} id="country" name="country" required>
            <option value="INDIA">INDIA</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="UK">UK</option>
            <option value="CHINA">CHINA</option>
            <option value="JAPAN">JAPAN</option>


            {/* <!-- Add more countries as needed --> */}
        </select>
        <br/><br/>

        <label htmlFor="state">State:</label>
        <select  onClick={(e)=>setValue(e,'city')} id="state" name="state" required>

          {
             state.map(st=>{
             return (<option value={st}>{st}</option>)

             })
          }
            {/* <!-- Options will be populated dynamically based on the selected country --> */}
        </select>
        <br/><br/>

        <label htmlFor="city">City:</label>
        <select id="city" name="city" required>


            
          {
             city.map(st=>{
             return (<option value={st}>{st}</option>)

             })
          }
            {/* <!-- Options will be populated dynamically based on the selected state --> */}
        </select>
        <br/><br/>

        <label htmlFor="gender">Gender:</label>
        <input type="radio" id="male" name="gender" value="male" required />
        <label htmlFor="male">Male</label>
        <input type="radio" id="female" name="gender" value="female" required />
        <label htmlFor="female">Female</label>
        <br/><br/>

        <label htmlFor="dob">Date of Birth:</label>
        <input  onChange={(e)=>displayAge(e)} type="date"  id="dob" name="dob" required />
        <br/><br/>

        <label htmlFor="age">Age:</label>
        <input type="number"  id="age" name="age" required />
        <br/><br/>

        <input type="submit" value="Save" />
    </form>

    </div>

    
  )
}

export default Form;