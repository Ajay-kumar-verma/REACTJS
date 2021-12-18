import React from 'react'

import { Flex, Spacer ,Box,Heading,Button} from '@chakra-ui/react'
const Flx = () => {
    return (
        <>
{/* Fles is a blox for displaying the box as a flex boxes 
// in horizontal order 
*/}
<Flex p="10px"  bg="green">
 
  <Box bg='tomato' height='80px'>
AJAY
  </Box>


  <Box bg='tomato' height='80px'>
AJAY
  </Box>
  <Box bg='tomato' height='80px'>
AJAY
  </Box>
  <Box bg='tomato' height='80px'>
AJAY
  </Box>

  </Flex>
        </>
    )
}

export default Flx


