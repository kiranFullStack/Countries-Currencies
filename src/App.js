import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.scss'
import { sortBy } from 'lodash'
import Button from '@material-ui/core/Button'

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

  let myFunction = (params) => {}

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
    <div>
      <Button
        variant='contained'
        color='primary'
        onClick={() => sortcountriesDecending()}
      >
        Sort Decending
      </Button>
      <Button
        variant='contained'
        color='primary'
        onClick={() => sortcountriesAscending()}
      >
        Sort Ascending
      </Button>
      {countriesAllData.map((item, index) => (
        <div key={item.name} onClick={() => console.log(item.name)}>
          <h1>{item.name}</h1>
          <h1>{item.capital}</h1>
          <h1>{item.population}</h1>
          <img className='flag-icon' src={item.flag} alt='coumntry falg' />
        </div>
      ))}
    </div>
  )
}

export default App
