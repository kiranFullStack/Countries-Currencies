import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function IndividualCountry({ match }) {
  const [countryIndividualData, setcountryIndividualData] = useState([])

  useEffect(() => {
    let countryIndividualDataUrl = `https://restcountries.eu/rest/v2/name/${match.params.id}`

    axios
      .get(countryIndividualDataUrl)
      .then(function(response) {
        // handle success
        console.log(response.data)
        setcountryIndividualData(response.data)
      })
      .catch(function(error) {
        // handle error
        console.log(error)
      })
      .then(function() {
        // always executed
      })
  }, [match.params.id])
  return (
    <div>
      <Link to='/'>
        <button>Back</button>
      </Link>
      <h1>IndividualCountry</h1>
      {
        <div>
          {countryIndividualData.map((item, index) => (
            <div key={item.name}>
              {item.name === match.params.id ? (
                <>
                  <img
                    className='flag-icon'
                    src={item.flag}
                    alt='coumntry falg'
                  />
                  <h1> Country name - {item.name}</h1>
                  <h1> Capital - {item.capital}</h1>
                  <h1> Population - {item.population}</h1>
                  <h1> Alpha code - {item.alpha3Code}</h1>
                  <h1>
                    Currencies - {item.currencies[0].name} (
                    {item.currencies[0].symbol})
                  </h1>
                </>
              ) : (
                ''
              )}
            </div>
          ))}
        </div>
      }
    </div>
  )
}
