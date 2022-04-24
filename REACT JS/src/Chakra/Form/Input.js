import React from 'react'
import {Stack } from '@chakra-ui/react'

const Input = () => {
    return (
        <div>
            

            <Stack spacing={3}>
  <Input placeholder='extra small size' size='xs' />
  <Input placeholder='small size' size='sm' />
  <Input placeholder='medium size' size='md' />
  <Input placeholder='large size' size='lg' />
</Stack>

        </div>
    )
}

export default Input
