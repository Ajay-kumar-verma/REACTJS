import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
const Grd = () => {
    return (

    //   in that height and width has to defined  it give us a page 
    //  by rows and colums 
        <>
<Grid
  h='200px'

  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(5, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={1} bg='tomato' />
  <GridItem colSpan={2} bg='blue' />
  <GridItem colSpan={2} bg='blue' />
  <GridItem colSpan={4} bg='tomato' />

</Grid>

        </>
    )
}

export default Grd
