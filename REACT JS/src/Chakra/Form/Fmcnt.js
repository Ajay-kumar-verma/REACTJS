import React from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Select 
  } from '@chakra-ui/react'
const Fmcnt = () => {
    return (
        <div>

<FormControl isRequired>
  <FormLabel htmlFor='first-name'>First name</FormLabel>
  <Input id='first-name' placeholder='First name' />
</FormControl>



<FormControl>
  <FormLabel htmlFor='country'>Country</FormLabel>
  <Select id='country' placeholder='Select country'>
    <option>United Arab Emirates</option>
    <option>Nigeria</option>
  </Select>
</FormControl>

        </div>
    )
}

export default Fmcnt
