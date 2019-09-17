import React from 'react'
import {
  Box,
  Card,
  Image,
  Heading,
  Text
} from 'rebass'

const CountryCard = ({
  country: {
    name,
    flag,
    languages
  }
}) => {
  return (
    <Card
      sx={{
        p: 1,
        borderRadius: 2,
        boxShadow: '0 0 16px rgba(0, 0, 0, .25)',
      }}>
      <Image src={flag} />
      <Box px={2}>
        <Heading as='h3'>
          {name}
        </Heading>
        <Text fontSize={0}>
          {`In ${name} we speak ${languages[0].name}.`}
        </Text>
      </Box>
    </Card>
  )
}

export default CountryCard
