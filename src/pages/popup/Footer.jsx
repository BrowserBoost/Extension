import React from 'react'
import { Flex, Link } from 'theme-ui'
import { reviewUrl } from 'utils/constants'

const Footer = () => {
  return (
    <Flex
      sx={{
        fontSize: '12px',
        color: 'darkGrey',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Flex sx={{ justifyContent: 'space-around', width: '100%' }}>
        <Link href={reviewUrl} target="_blank" variant="footer">
          Rate Us
        </Link>
        <Link
          href="https://chromewebstore.google.com/detail/akknpgblpchaoebdoiojonnahhnfgnem/support"
          target="_blank"
          variant="footer"
        >
          Support
        </Link>
        <Link
          href="https://github.com/BrowserBoost/Extension"
          target="_blank"
          variant="footer"
        >
          Github
        </Link>
        <Link
          href="mailto:contact@browserboost.org"
          target="_blank"
          variant="footer"
        >
          Email
        </Link>
      </Flex>
    </Flex>
  )
}

export default Footer
