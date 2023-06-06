import React, { useState } from 'react'

const Apicallmsg = () => {



    document.getElementById('regform').addEventListener('submit', function(event) {
        event.preventDefault();
      
        const formData = new FormData(this);
        
        // Convert form data to JSON
        const registrationData = {};
        for (let [key, value] of formData.entries()) {
          registrationData[key] = value;
        }
      
        // Make a POST request to the server
        fetch('/api/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(registrationData)
        })
        .then(response => {
          if (response.ok) {
            console.log('Registration successful!');
            setMsg('Success')
            // Perform any further actions or display success message
    
          } else {
            console.error('Registration failed:', response.statusText);
            // Handle registration failure and display error message
            setMsg('error..')
          }

        })

        .catch(error => {
          console.error('Registration failed:', error);
          // Handle registration failure and display error message
        });
      });
    const [msg,setMsg]= useState('')
  return (
    <div>
        <h4 style={{color:msg==='error'?'red':'green'}}>
{msg}
        </h4>
    </div>
  )
}

export default Apicallmsg
  