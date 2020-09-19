import React from 'react'
import { withRouter } from 'react-router-dom'
import MUIDataTable from 'mui-datatables'
import GridLoader from 'react-spinners/GridLoader'
import { css } from '@emotion/core'

//
// ─── COLUMNS FOR THE TABLE HEADER ───────────────────────────────────────────────
//

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const columns = [
  {
    name: 'name',
    label: 'Name',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'capital',
    label: 'Capital',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'population',
    label: 'Population',
    options: {
      filter: true,
      sort: true,
    },
  },

  {
    name: 'region',
    label: 'Region',
    options: {
      filter: true,
      sort: true,
    },
  },

  {
    name: 'topLevelDomain',
    label: 'Domain',
    options: {
      filter: true,
      sort: true,
    },
  },
]

function MainPage({ countriesAllData, loading, history }) {
  const options = {
    filter: true,
    filterType: 'dropdown',
    onRowClick: (data) => history.push(`/${data[0]}`, 'params'),
  }
  return (
    <>
      <p className='desc-para'>
        Mindtree Assignment with Listing all countries, Responsive Design,
        Sorting each feild by clicking on header, Filtering the feilds
        dynamically and reset, Search, Download CSV, Pagination and Rows per
        page setting and fetching data from countries api.
        <br />(
        <a
          href='https://github.com/kiranFullStack/Countries-Currencies'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span role='img' aria-label='pointer'>
            👉🏼
          </span>
          Frontend Code
        </a>
        )
      </p>
      {loading ? (
        <GridLoader css={override} size={80} color={'#BE1E80'} loading='true' />
      ) : (
        <div>
          <MUIDataTable
            title={'Country List'}
            data={countriesAllData}
            columns={columns}
            options={options}
          />
        </div>
      )}
    </>
  )
}

export default withRouter(MainPage)
