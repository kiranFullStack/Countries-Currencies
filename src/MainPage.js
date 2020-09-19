import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function MainPage({
  sortcountriesDecending,
  sortcountriesAscending,
  countriesAllData,
  loading,
  clearinitialcountriesAllData,
}) {
  return (
    <>
      {loading ? (
        'true'
      ) : (
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
          <Button
            variant='contained'
            color='primary'
            onClick={() => clearinitialcountriesAllData()}
          >
            Clear
          </Button>

          {countriesAllData.map((item, index) => (
            <Link key={item.name} to={`/${item.name}`}>
              <div onClick={() => console.log(item.name)}>
                <h1>{item.name}</h1>
                <h1>{item.capital}</h1>
                <h1>{item.population}</h1>
                <img
                  className='flag-icon'
                  src={item.flag}
                  alt='coumntry falg'
                />
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  )
}
