import React from 'react'
import { Flex, Box, Switch } from 'theme-ui'

const OptionBox = ({ title, description, onChange, checked, children }) => {
  return (
    <Flex
      sx={{
        width: '100%',
        flexDirection: 'column',
        pb: '14px',
        mb: '14px',
        borderBottom: '1px solid',
        borderColor: 'borderGrey',
      }}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '10px',
          fontWeight: 'bold',
        }}
      >
        <Box
          sx={{
            fontWeight: 'bold',
          }}
        >
          {title}
        </Box>
        {children ? null : (
          <Box>
            <Switch
              onChange={onChange}
              checked={checked}
              sx={{
                m: '0',
                backgroundColor: 'darkGrey',
                width: '36px',
                height: '20px',
                '& > div': {
                  width: '16px',
                  height: '16px',
                },
                'input:checked ~ &': {
                  backgroundColor: 'blue',
                },
              }}
            />
          </Box>
        )}
      </Flex>
      <Box sx={{ fontSize: '12px', color: 'lightGrey' }}>{description}</Box>
      {children}
    </Flex>
  )
}

export default OptionBox
