import React from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
const Stck = () => {
    return (
        <div>
            <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <Box h='40px' bg='yellow.200'>
    1
  </Box>
  <Box h='40px' bg='tomato'>
    2
  </Box>
  <Box h='40px' bg='pink.100'>
    3
  </Box>
</VStack>
        </div>
    )
}

export default Stck
