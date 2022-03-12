import React,{useState} from 'react'; 
import './style.css';
 
const Form = () => { 

  const [values, setValues] = useState([]);
  const [errors, setErrors] = useState([]);
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values)); 
  }; 
  const handleChange = (e) => { 
    setValues({ ...values, [e.target.name]: e.target.value })
  }; 
  const  validate = (values) =>  {
    let errors = {};
    if (!values.email) { 
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 8) {
      errors.password = 'Password must be 8 or more characters';
    }
    return errors;
  };
  
      return (
        <>   
          <form onSubmit={handleSubmit} noValidate> 
            <div className="field">
              <label className="label">Email Address</label> <br />
                <input autoComplete="off" className={`input ${errors.email && 'error__input__color'}`} 
                type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                {errors?.email && ( <div className='error__color'>  <p>{errors.email}</p></div> )}
            </div>
            <div className="field">
              <label className="label">Password</label> <br />
                <input className={`input ${errors.password && 'error__input__color'}`} type="password" 
                name="password" onChange={handleChange} value={values.password || ''} required />
                {errors.password && (  <div className='error__color'> <p>{errors.password}</p></div> )}
            </div>  
            <button type="submit"  >Login</button> 
          </form> 
        </>
      );
};

export default Form;
