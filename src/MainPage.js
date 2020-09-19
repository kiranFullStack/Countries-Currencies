import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function MainPage({
  sortcountriesDecending,
  sortcountriesAscending,
  countriesAllData,
}) {
  return (
    <div>
      <h1>MainPage</h1>
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
          <Link to={`/${item.name}`}>
            <div key={item.name} onClick={() => console.log(item.name)}>
              <h1>{item.name}</h1>
              <h1>{item.capital}</h1>
              <h1>{item.population}</h1>
              <img className='flag-icon' src={item.flag} alt='coumntry falg' />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
