import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Student from './Student'
import Createstudent from './CreateStudent'
import Updatestudent from './UpdateStudent'

function App() {

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Student />} />
          <Route path='/create' element={<Createstudent />} />
          <Route path='/update/:id' element={<Updatestudent />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App