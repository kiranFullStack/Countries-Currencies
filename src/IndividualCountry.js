import React from 'react'

export default function IndividualCountry({ match }) {
  return (
    <div>
      <h1>IndividualCountry</h1>
      {match.params.id}
    </div>
  )
}
