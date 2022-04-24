import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'

export const    Btn=()=>{

return(<>
<ButtonGroup variant='outline' spacing='26'>
  <Button colorScheme='blue'>Save</Button>
  <Button>Cancel</Button>
</ButtonGroup>

<Button
  size='md'
  height='48px'
  width='200px'
  border='2px'
  borderColor='green.500'
>
  Button
</Button>
</>)

}


