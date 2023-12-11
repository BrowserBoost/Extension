import React from 'react'
import { Flex, Box, Switch } from 'theme-ui'

const OptionBox = ({
  title,
  description,
  onChange,
  checked,
  showDescription,
  children,
}) => {
  return (
    <Flex
      sx={{
        width: '100%',
        flexDirection: 'column',
        mt: showDescription ? '14px' : null,
        pb: showDescription ? null : '14px',
        mb: showDescription ? null : '14px',
        borderBottom: showDescription ? null : '1px solid',
        borderColor: showDescription ? null : 'borderGrey',
      }}
      title={description}
    >
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 'bold',
        }}
      >
        <Flex sx={{ alignItems: 'center', gap: '8px' }}>
          <Box
            sx={{
              fontWeight: 'bold',
            }}
          >
            {title}
          </Box>
        </Flex>
        {onChange ? (
          <Box>
            <Switch
              onChange={onChange}
              checked={checked}
              sx={{
                m: '0',
                backgroundColor: 'lightGrey',
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
        ) : null}
      </Flex>
      {showDescription && (
        <Box sx={{ fontSize: '12px', color: 'darkGrey', mt: '6px' }}>
          {description}
        </Box>
      )}
      {children}
    </Flex>
  )
}

export default OptionBox
