import React, {useState} from 'react';
import axios from 'axios';


const Signup = () => {
    const[email,setemail] = useState('');
    const[pass,setpass] = useState('');
    console.log({email,pass})
    
    const handleEmail = (e) => {
        setemail(e.target.value);

    }
    const handlePass = (e) => {
        setpass(e.target.value);

    }
    // console.log(email,pass);
    const handleApi = () => {
        axios.post('https://reqres.in/api/login',{
            email:email,
            password: pass
        })
        .then(result => {
            console.log(result.data)
            alert('success')
        })
        .catch(function (error) {
            // handle error
            alert('service error')
            console.log(error);
          })

    }

  return (
    <div className='SignUp'>
        <div style = {{paddingTop:'186px',margin:'auto',textAlign:'center',}}className='form'>
            <div className='inputfield'>
                <div>
                    <p>Name:</p>
                    <input type="text" placeholder='email' value={email} onChange = {handleEmail}  />
                    <br />
                    <p>Password:</p>
                    <input type="text" placeholder='pass' value={pass} onChange = {handlePass}/>
                    <br />
                    <button onClick={handleApi}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Signup