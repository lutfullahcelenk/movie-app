import React, { useState } from "react";
// import {createUser, signUpProvider} from '../auth/firebase';
// import { useHistory } from "react-router-dom";


const Register = () => {

  // const history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const user = {firstName, lastName, email, password};
    const displayName = `${firstName} ${lastName}`;
    // createUser(user.email, user.password, displayName);
    // history.push('/');
  }
  // const handleProviderRegister = () => {
  //   signUpProvider();
  //   history.push('/');
  // }

  return (
    <div className="register">
      <div className="form-image">
        <img src={"https://picsum.photos/1200/900"} alt="sample-movie" />
      </div>
      <div className="register-form">
        <h1 className="form-title display-3">Register to LutFlix</h1>
        <form id="register">
          <div class="mb-3">
            <label for="first-name" class="form-label display-4">First Name</label>
            <input type="text" class="form-control" id="first-name" placeholder="Enter your first name..." onChange={e => setFirstName(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="last-name" class="form-label display-4">Last Name</label>
            <input type="text" class="form-control" id="last-name" placeholder="Enter your last name..." onChange={e => setLastName(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label display-4">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email address..." onChange={e => setEmail(e.target.value)}/>
          </div>
          <div class="mb-3">
            <label for="password" class="form-label display-4">Password</label>
            <input type="password" class="form-control" id="password" placeholder="Enter your password..." onChange={e => setPassword(e.target.value)}/>
          </div>
          <input type="button" class="btn btn-primary form-control" value="Register" onClick={handleSubmit} />
        </form>
        <button class="btn btn-primary form-control" 
        // onClick={handleProviderRegister}
        >Continue with Google</button>
      </div>
    </div>
  );
};
export default Register;