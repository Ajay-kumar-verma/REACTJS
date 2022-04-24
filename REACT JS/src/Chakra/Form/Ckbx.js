import React from 'react'
import { Checkbox, CheckboxGroup ,Stack,HStack} from '@chakra-ui/react'
const Ckbx = () => {
    return (
        <div>
            <Stack spacing={10} direction='row'>
  <Checkbox isDisabled>Checkbox</Checkbox>
  <Checkbox isDisabled defaultIsChecked>
    Checkbox
  </Checkbox>
</Stack>


<Stack spacing={10} direction='row'>
  <Checkbox colorScheme='red' defaultIsChecked>
    Checkbox
  </Checkbox>
  <Checkbox colorScheme='green' defaultIsChecked>
    Checkbox
  </Checkbox>
</Stack>



<HStack spacing={10} direction='row'>
  <Checkbox size='sm' colorScheme='red'>
    Checkbox
  </Checkbox>
  <Checkbox size='md' colorScheme='green' defaultIsChecked>
    Checkbox
  </Checkbox>
  <Checkbox size='lg' colorScheme='orange' defaultIsChecked>
    Checkbox
  </Checkbox>
</HStack>

        </div>
    )
}

export default Ckbx
