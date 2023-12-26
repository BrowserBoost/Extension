import { Flex, Heading, Link, Image } from 'theme-ui'
import browserBoostLogo from './assets/logo.svg'
import chromeLogo from './assets/chrome.svg'
import edgeLogo from './assets/edge.svg'
import firefoxLogo from './assets/firefox.svg'
import githubLogo from './assets/github.svg'

function App() {
  return (
    <Flex
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Flex
        sx={{
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%',
          margin: '20px',
        }}
      >
        <Image
          src={browserBoostLogo}
          alt="Edge logo"
          sx={{
            width: ['60px', '72px'],
            height: ['60px', '72px'],
            mb: '20px',
          }}
        />

        <Heading
          as="h1"
          sx={{
            fontSize: ['38px', '54px'],
            fontWeight: '600',
            mb: '20px',
          }}
        >
          Browser Boost
        </Heading>
        <Heading
          as="h2"
          sx={{
            fontSize: ['18px', '22px'],
            fontWeight: '300',
            mb: '40px',
          }}
        >
          Open Source Extension That Provides Extra Tools for Your Browser.
        </Heading>
        <Flex
          sx={{
            gap: '20px',
          }}
        >
          <Link
            href="https://chromewebstore.google.com/detail/browser-boost-extra-tools/akknpgblpchaoebdoiojonnahhnfgnem"
            target="_blank"
            rel="noreferrer"
            title="Chrome Download"
          >
            <Image
              src={chromeLogo}
              alt="Chrome logo"
              sx={{
                width: ['60px', '72px'],
                height: ['60px', '72px'],
              }}
            />
          </Link>
          <Link
            href="https://microsoftedge.microsoft.com/addons/detail/browser-boost-extra-too/jehejlgggbhdemlekhoicodollcjnjig"
            target="_blank"
            rel="noreferrer"
            title="Edge Download"
          >
            <Image
              src={edgeLogo}
              alt="Edge logo"
              sx={{
                width: ['60px', '72px'],
                height: ['60px', '72px'],
              }}
            />
          </Link>
          <Image
            src={firefoxLogo}
            alt="React logo"
            title="Firefox Soon"
            sx={{
              width: ['60px', '72px'],
              height: ['60px', '72px'],
              opacity: '0.6',
              filter: 'grayscale(1)',
            }}
          />
          <Link
            href="https://github.com/BrowserBoost/Extension"
            target="_blank"
            rel="noreferrer"
            title="Github"
          >
            <Image
              src={githubLogo}
              alt="React logo"
              sx={{
                width: ['60px', '72px'],
                height: ['60px', '72px'],
              }}
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default App
