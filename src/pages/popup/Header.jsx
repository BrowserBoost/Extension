import React from 'react'
import { Flex, Box, Image, Button } from 'theme-ui'
import logo from 'assets/logo.svg'
import reloadIcon from 'assets/reload.svg'

const Header = () => {
  return (
    <Flex
      sx={{
        pb: '14px',
        mb: '14px',
        fontWeight: 'bold',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid',
        borderColor: 'borderGrey',
      }}
    >
      <Flex
        sx={{
          gap: '8px',
        }}
      >
        <Image src={logo} alt="Browser Boost logo" height="20" width="20" />
        <Box
          sx={{
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          Browser Boost
        </Box>
      </Flex>
      <Button
        onClick={() => chrome.tabs.reload()}
        title="Reload page"
        sx={{ all: 'unset', cursor: 'pointer' }}
      >
        <Image src={reloadIcon} alt="Reload page" height="20" width="20" />
      </Button>
    </Flex>
  )
}

export default Header
