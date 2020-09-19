import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import { sortBy } from 'lodash'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom'
import IndividualCountry from './IndividualCountry'
import MainPage from './MainPage'

function App() {
  const [countriesAllData, setcountriesAllData] = useState([])

  useEffect(() => {
    let countriesAllDataUrl = 'https://restcountries.eu/rest/v2/all'
    axios
      .get(countriesAllDataUrl)
      .then(function(response) {
        // handle success
        console.log(response.data)
        sortBy(response.data, ['name', 'population'])

        setcountriesAllData(response.data)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  }, [])

  let sortcountriesDecending = (params) => {
    setcountriesAllData(
      sortBy(countriesAllData, [
        function(o) {
          return o.population
        },
      ])
    )
  }

  let sortcountriesAscending = (params) => {
    setcountriesAllData(
      sortBy(countriesAllData, [
        function(o) {
          return o.population
        },
      ]).reverse()
    )
  }

  return (
    <>
      <Router>
        <Route exact path='/:id' component={IndividualCountry} />
        <Route
          exact
          path='/'
          component={() => (
            <MainPage
              sortcountriesAscending={sortcountriesAscending}
              sortcountriesDecending={sortcountriesDecending}
              countriesAllData={countriesAllData}
            />
          )}
        />
      </Router>
    </>
  )
}

export default App
