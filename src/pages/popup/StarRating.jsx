/** @jsxImportSource theme-ui */
import React, { useState } from 'react'
import { Flex, Box, Link, Button } from 'theme-ui'

const StarRating = () => {
  const [hoveredStar, setHoveredStar] = useState(-1)
  const [lowRatingClicked, setLowRatingClicked] = useState(false)

  return (
    <Flex
      sx={{
        fontSize: '12px',
        color: 'lightGrey',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {lowRatingClicked ? (
        <Link
          href="mailto:contact@browserboost.org?subject=Feedback for Browser Boost"
          target="_blank"
        >
          Please send us your feedback to help us improve!
        </Link>
      ) : (
        <>
          <Box sx={{ mr: '8px' }}>Rate us:</Box>
          {[...Array(5)].map((_, index) => (
            <Button
              onClick={() => {
                if (index < 3) {
                  setLowRatingClicked(true)
                } else {
                  window.open(
                    'https://chrome.google.com/webstore/detail/akknpgblpchaoebdoiojonnahhnfgnem/reviews'
                  )
                }
              }}
              sx={{ all: 'unset' }}
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width={12}
                height={12}
                onMouseOver={() => setHoveredStar(index)}
                onMouseOut={() => setHoveredStar(-1)}
                style={{
                  cursor: 'pointer',
                  paddingRight: '4px',
                  boxSizing: 'content-box',
                }}
              >
                <path
                  d="m109.818 36.076.992 2.534c.077.197.244.321.445.337l2.619.203c.432.032.782.321.916.75a1.1 1.1 0 0 1-.32 1.169l-2.006 1.77a.547.547 0 0 0-.17.546l.623 2.661c.104.439-.048.877-.401 1.14a.988.988 0 0 1-1.164.045l-2.509-1.62-2.508 1.62a.988.988 0 0 1-1.164-.044 1.101 1.101 0 0 1-.401-1.14l.624-2.662a.547.547 0 0 0-.17-.547l-2.007-1.769a1.1 1.1 0 0 1-.32-1.169c.134-.429.484-.718.916-.75l2.619-.203a.51.51 0 0 0 .445-.337l.992-2.534c.165-.42.533-.677.968-.677.448-.003.816.257.98.677z"
                  sx={{
                    fill: index <= hoveredStar ? 'blue' : 'darkGrey',
                    fillOpacity: 1,
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    transition: '0.2s',
                  }}
                  transform="translate(-102.843 -35.4)"
                />
              </svg>
            </Button>
          ))}
        </>
      )}
    </Flex>
  )
}

export default StarRating
