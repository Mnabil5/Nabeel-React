import "./App.css"
import React from "react";
  import { object, string } from "yup";
  import { FormikProvider, useFormik, Field, ErrorMessage } from "formik";
  import { useEffect } from "react";
  let userSchema = object({
    name: string().min(3).max(10).required(),
    email: string().email().required(),
  });
  
  function App() {
   
    const formik = useFormik({
      initialValues: {
        name: "",
        email: "",
      },
    
      onSubmit: (values) => console.log("This is formik form data", values),
      validationSchema: userSchema,
    })
  
    const { errors, touched, values, resetForm, setValues } = formik;
    useEffect(() => console.log(errors), [errors]);
    
    return (
      <>
        <FormikProvider value={formik}>
          <form onSubmit={formik.handleSubmit}> <br />
            <Field name='name' /> <br />
            {/* {errors.name && touched.name ? <div>{errors.name}</div> : null} */}
            <ErrorMessage name='name' /><br />
            <Field name='email' /> <br />
            {/* {errors.email && touched.email ? <div>{errors.email}</div> : null} */}
            <ErrorMessage name='email' /> <br />
            <button type='submit'>Submit</button>
          </form>
        </FormikProvider>
      </>
    );
  }
  
  
  
  




  






//   const [count, setCount] = useState(0)
// const [counter,setCounter]= useState("1")
// const [firstname,setFirstname]= useState("");
// const [lastname,setLastname]= useState("");
// const [rollno,setRollno]= useState("");

// const handleSubmit=(e)=>{
//   e.preventDefault();
//   console.log("this is running");
// }

//   return (

// <div className='App'>
// <form >
//   <label >firstname</label><br />
//   <input type="text"
//   name="firstname"
//   value={firstname}
//   onChange={(e)=> setFirstname (e.target.value)}/>
//   <br />
//   <label >lastname</label><br />
//   <input type="text"
//   firstname="lastname"
//   value={lastname}
//   onChange={(e)=> setLastname (e.target.value)}/>
//   <br />
//   <label >rollno</label><br />
//   <input type="number"
//   rollno="rollno"
//   value={rollno}
//   onChange={(e)=> setRollno (e.target.value)}/>
//   <br />
// <button onClick={handleSubmit}>submit</button>
// </form>

// </div>
  







// const [student,setStudent] = useState({
// name:"",
// rollno:"",
// });

// const [FormData,setFormData]=useState("")
// const handleChange=(e)=>{
//   const {name,value}=e.target;
//   FormData((FormData)=>({
//     ...FormData,
//     [name]:value,
//   }));
// };

// const handleChange=(e)=>{
//     const {name,value}=e.target;
//     setStudent((studData)=>({
//       ...studData,
//       [name]:value,
//     }));
// };

// const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("this is running",student);
//   };

// return(
//   <form onSubmit={handleSubmit}>
// <label>
//   Name :<input type="text"
//   name="name"
//   value={student.name}
//   onChange={handleChange}/>
// </label>,<br />
// <label>
//   Roll no :<input type="text"
//   name="rollno"
//   value={student.rollno}
//   onChange={handleChange}/>
// </label>,<br />
// <button type="submit">Submit</button>
// </form>
// );
// }

/* <div>
     <User username={"ABDUL"}/>
    <User username={"ALI"}/>
    <User username={"AKBAR"}/> 
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */














export default App;
