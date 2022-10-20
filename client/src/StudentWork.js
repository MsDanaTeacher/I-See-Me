import React from 'react'

export default function StudentWork({work, handleWorkDelete}) {
    
  return (
    <div>
        <img src={work.student_work} height="200px" width="200px"/>
        <button onClick={() => handleWorkDelete(work)}>Delete</button>
    </div>
  )
}
