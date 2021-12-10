import { SimpleGrid,Box } from '@chakra-ui/react'
import React from 'react'
const SimpleGrd = () => {
    return (
//   we width in that height we have to defined 

<>
  {/* THIS IS USED OFR DIVIDEING PAG INTO ROWS AND COLUMNS */}
  {/* width is defined equally ... */}
  {/* <SimpleGrid columns={4} spacing={20}>
  <Box bg='red'    h='180px'></Box>
  <Box bg='blue'   h='280px'></Box>
  <Box bg='green' h='380px'></Box>
  <Box bg='yellow'  h='80px'></Box>
  <Box bg='gray'  h='80px'></Box>
</SimpleGrid> */}


{/* THIS IS USED FOR child box cant be min for given size */}
<SimpleGrid minChildWidth='220px' spacing='10px'>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  

  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  <Box bg='tomato' height='80px'></Box>
  

 
  
</SimpleGrid>



        </>
    )
}

export default SimpleGrd;
