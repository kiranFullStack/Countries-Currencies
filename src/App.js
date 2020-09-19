import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import IndividualCountry from './IndividualCountry'
import MainPage from './MainPage'
import MenuAppBar from './MenuAppBar'

function App() {
  const [countriesAllData, setcountriesAllData] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    let countriesAllDataUrl = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(countriesAllDataUrl)
      .then(function(response) {
        // handle success
        console.log(response.data)
        setcountriesAllData(response.data)
        setloading(false)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  }, [])

  return (
    <>
      <Router>
        <MenuAppBar />
        {/* Feature Description of the app with relevant links for code */}

        <div className='container'>
          <Route exact path='/:id' component={IndividualCountry} />
          <Route
            exact
            path='/'
            component={() => (
              <MainPage countriesAllData={countriesAllData} loading={loading} />
            )}
          />
          {/* Footer */}
          <div className='footer-info'>
            Made by Kiran -
            <a
              href='https://kiranfullstack.com/'
              target='_blank'
              rel='noopener noreferrer'
            >
              kiranfullstack.com
            </a>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App
