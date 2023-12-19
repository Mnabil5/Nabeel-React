// import { useState } from "react";
// import App1 from "./App";


// function  App1(){

// const [student,setStudent] = useState({
// name:"name",
// rollno:"rollno",
// });

// const handleChange=(e)=>{
//     const {name,value}=e.target;
//     setFormData((prevData)=>({
//       ...prevData,
//       [name]:value,
//     }));
// };

// const handleSubmit=(e)=>{
//     e.preventDefault();
//     console.log("this is running");
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
// </label>,<br />,
// <button type="submit">"Submit"</button>
// </form>
// );
// }
// export default App1;