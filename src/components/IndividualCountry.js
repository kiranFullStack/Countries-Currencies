import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import GridLoader from 'react-spinners/GridLoader'
import { css } from '@emotion/core'
import Button from '@material-ui/core/Button'

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

export default function IndividualCountry({ match }) {
  const [countryIndividualData, setcountryIndividualData] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    let countryIndividualDataUrl = `https://restcountries.eu/rest/v2/name/${match.params.id}`

    axios
      .get(countryIndividualDataUrl)
      .then(function(response) {
        // handle success
        console.log(response.data)
        setcountryIndividualData(response.data)
        setloading(false)
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
      {loading ? (
        <GridLoader css={override} size={80} color={'#BE1E80'} loading='true' />
      ) : (
        <>
          <Link to='/'>
            <Button variant='contained' color='secondary'>
              Back
            </Button>
          </Link>
          {
            <div style={{ paddingTop: '4%' }}>
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
        </>
      )}
    </div>
  )
}
