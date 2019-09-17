import React, { useState } from 'react'
import { useFetch } from './hooks'
import CountryCard from './CountryCard'
import { Box } from 'rebass'

const COUNTRIES_URL = 'https://restcountries.eu/rest/v2/all'

const CountriesList = () => {
  const [data, loading] = useFetch(COUNTRIES_URL)
  const [searchTerm, setSearchTerm] = useState('')

  if (loading) return <h3>loading</h3>

  return (
    <Box
      sx={{
        display: 'grid',
        gridGap: 3,     // theme.space[3]
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      }}>
      {
        data.map(country => country.name.includes(searchTerm) &&
          <CountryCard
            key={country.alpha3Code}
            country={country}
          />)
      }
    </Box>
  )
}

export default CountriesList