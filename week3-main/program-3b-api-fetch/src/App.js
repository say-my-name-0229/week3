import React, { useEffect, useState } from "react"; 
 
function App() { 
  const [students, setStudents] = useState([]); 
 
  useEffect(() => { 
    setTimeout(() => { 
      setStudents([ 
        "Rahul", 
        "Priya", 
        "Amit", 
        "Sneha", 
        "Kiran" 
      ]); 
    }, 1000); 
  }, []); 
 
  return ( 
    <div style={{ padding: "20px" }}> 
      <h1>Student List</h1> 
 
      <ul> 
        {students.map((student, index) => ( 
          <li key={index}>{student}</li> 
        ))} 
      </ul> 
    </div> 
  ); 
}
export default App; 