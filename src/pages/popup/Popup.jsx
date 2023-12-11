/** @jsxImportSource theme-ui */
import React, { useEffect, useState } from 'react'
import { Flex, Box, Image, Select, Input, Button } from 'theme-ui'
import OptionBox from './OptionBox'
import Footer from './Footer.jsx'
import { getUserAgentHeaderRule } from 'utils/changeUserAgent.js'
import userAgents from 'utils/userAgents.js'
import {
  addSaveImageContextMenu,
  removeSaveImageContextMenu,
} from 'utils/saveImageAsType.js'
import logo from 'assets/logo.svg'
import reloadIcon from 'assets/reload.svg'

const Popup = () => {
  const [activeTabId, setActiveTabId] = useState(null)
  const [volume, setVolume] = useState(100)
  const [userAgentInfo, setUserAgentInfo] = useState('browserDefault')
  const [userAgentValue, setUserAgentValue] = useState(navigator.userAgent)
  const [enableRightClick, setEnableRightClick] = useState(false)
  const [enableAdvancedMode, setEnableAdvancedMode] = useState(false)
  const [saveImageAsType, setSaveImageAsType] = useState(false)
  const [disableWebRtc, setDisableWebRtc] = useState(false)

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      setActiveTabId(tabs[0].id)
      chrome.storage.local.get([String(tabs[0].id)], (storage) => {
        if (storage[tabs[0].id]) {
          setVolume(storage[tabs[0].id] * 100)
        }
      })
    })

    chrome.storage.local.get(
      [
        'userAgentInfo',
        'userAgentValue',
        'enableRightClick',
        'enableAdvancedMode',
        'saveImageAsType',
        'disableWebRtc',
      ],
      (storage) => {
        storage.userAgentInfo && setUserAgentInfo(storage.userAgentInfo)
        storage.userAgentValue && setUserAgentValue(storage.userAgentValue)
        storage.enableRightClick &&
          setEnableRightClick(storage.enableRightClick)
        storage.enableAdvancedMode &&
          setEnableAdvancedMode(storage.enableAdvancedMode)
        storage.saveImageAsType && setSaveImageAsType(storage.saveImageAsType)
        storage.disableWebRtc && setDisableWebRtc(storage.disableWebRtc)
      }
    )
  }, [])

  useEffect(() => {
    if (userAgentInfo !== 'browserDefault' && userAgentValue) {
      chrome.declarativeNetRequest.updateDynamicRules({
        addRules: [getUserAgentHeaderRule(userAgentValue)],
        removeRuleIds: [1],
      })
    } else {
      chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: [1],
      })
    }
  }, [userAgentInfo, userAgentValue])

  const setActiveTabVolume = async (value) => {
    return chrome.runtime.sendMessage({
      name: 'setTabVolume',
      target: 'background',
      tabId: activeTabId,
      value,
    })
  }

  const handleSliderChange = (event) => {
    const newValue = event.target.value
    setActiveTabVolume(newValue / 100)
    setVolume(newValue)
  }

  const handleUserAgentInfoChange = (event) => {
    setUserAgentInfo(event.target.value)

    chrome.storage.local.set({
      userAgentInfo: event.target.value,
    })

    if (event.target.value === 'browserDefault') {
      setUserAgentValue(navigator.userAgent)
      chrome.storage.local.set({
        userAgentValue: null,
      })
    } else if (event.target.value !== 'custom') {
      const userAgentObj = JSON.parse(event.target.value)
      setUserAgentValue(userAgentObj.value)
      chrome.storage.local.set({
        userAgentValue: userAgentObj.value,
      })
    }
  }

  const handleUserAgentValueChange = (event) => {
    if (userAgentInfo !== 'custom') {
      setUserAgentInfo('custom')
      chrome.storage.local.set({
        userAgentInfo: 'custom',
      })
    }

    setUserAgentValue(event.target.value)
    chrome.storage.local.set({
      userAgentValue: event.target.value,
    })
  }

  const toggleEnableRightClick = () => {
    chrome.storage.local.set({
      enableRightClick: !enableRightClick,
    })

    setEnableRightClick(!enableRightClick)
  }

  const toggleEnableAdvancedMode = () => {
    chrome.storage.local.set({
      enableAdvancedMode: !enableAdvancedMode,
    })

    setEnableAdvancedMode(!enableAdvancedMode)
  }

  const toggleSaveImageAsType = () => {
    if (!saveImageAsType) {
      addSaveImageContextMenu()
    } else {
      removeSaveImageContextMenu()
    }

    chrome.storage.local.set({
      saveImageAsType: !saveImageAsType,
    })

    setSaveImageAsType(!saveImageAsType)
  }

  const toggleDisableWebRtc = () => {
    chrome.privacy.network.webRTCIPHandlingPolicy.set({
      value: disableWebRtc ? 'default' : 'disable_non_proxied_udp',
    })

    chrome.storage.local.set({
      disableWebRtc: !disableWebRtc,
    })

    setDisableWebRtc(!disableWebRtc)
  }

  return (
    <Box sx={{ p: '14px' }}>
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
      <OptionBox
        title="Boost Volume"
        description="Increase the maximum volume of your browser (per tab)."
      >
        <Box sx={{ mt: '12px' }}>
          <input
            type="range"
            min="0"
            max="600"
            value={volume}
            onChange={handleSliderChange}
            sx={{
              width: '100%',
              margin: '0 0 8px 0',
              cursor: 'pointer',
              accentColor: 'blue',
            }}
          />
          <Flex sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ fontSize: '12px', color: 'darkGrey', width: '38px' }}>
              0%
            </Box>
            <Box sx={{ fontSize: '12px', fontWeight: 'bold' }}>
              {Math.trunc(volume)}%
            </Box>
            <Box sx={{ fontSize: '12px', color: 'darkGrey', width: '38px' }}>
              600%
            </Box>
          </Flex>
        </Box>
      </OptionBox>
      <OptionBox
        title="Change User Agent"
        description="Spoof user agent to emulate different devices or browsers. "
      >
        <Box sx={{ mt: '10px' }}>
          <Select
            value={userAgentInfo}
            onChange={handleUserAgentInfoChange}
            variant="selectInput"
            sx={{
              cursor: 'pointer',
            }}
          >
            <option value="browserDefault">Browser Default</option>
            <option value="custom">Custom</option>

            {Object.keys(userAgents).map((key) => (
              <optgroup label={userAgents[key].title} key={key}>
                {userAgents[key].values.map((key) => (
                  <option key={key.value} value={JSON.stringify(key)}>
                    {key.title}
                  </option>
                ))}
              </optgroup>
            ))}
          </Select>
        </Box>
        <Box sx={{ mt: '10px' }}>
          <Input
            value={userAgentValue}
            onChange={handleUserAgentValueChange}
            variant="selectInput"
          />
        </Box>
      </OptionBox>
      <OptionBox
        title="Enable Right Click & Select"
        description="Force enable right clicks, copy, & text selection."
        onChange={toggleEnableRightClick}
        checked={enableRightClick}
      >
        {enableRightClick && (
          <OptionBox
            title="Advanced Mode"
            description="Advanced mode may break some websites."
            onChange={toggleEnableAdvancedMode}
            checked={enableAdvancedMode}
            showDescription
          />
        )}
      </OptionBox>
      <OptionBox
        title="Enable Save Image as Type"
        description="Add context menu to save images as JPG, PNG or WebP."
        onChange={toggleSaveImageAsType}
        checked={saveImageAsType}
      />
      <OptionBox
        title="Disable WebRTC"
        description="Disable WebRTC requests to prevent IP address leaks."
        onChange={toggleDisableWebRtc}
        checked={disableWebRtc}
      />
      <Footer />
    </Box>
  )
}

export default Popup
