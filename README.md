# Browser Boost Extension

**Chrome Download:** https://chrome.google.com/webstore/detail/akknpgblpchaoebdoiojonnahhnfgnem

**Edge Download:** https://microsoftedge.microsoft.com/addons/detail/jehejlgggbhdemlekhoicodollcjnjig


The Browser Boost extension provides an open-source, privacy respecting alternative to numerous single-use extensions.

You can rely on Browser Boost instead of having to trust multiple extensions from various developers, which are often closed source, collect user data, and come with undocumented permissions.

Browser Boost collects no user data, does not require signup, has no servers, is entirely open source, and is 100% free.

## Tools

🔊 **Boost Volume:** Increase the maximum volume of your browser up to 600%.

🕵️ **Change User Agent:** Spoof user agent to emulate different devices or browsers.

🖱️ **Enable Right Click & Select:** Force enable right clicks, copy, & text selection on sites that have disabled right click or selection interactions.

💾 **Save Image as Type:** Add context menu to save images as JPG, PNG or WebP.

💬 **Disable WebRTC:** Disable WebRTC requests to prevent IP address leaks.

## Screenshot

![screenshot](https://raw.githubusercontent.com/BrowserBoost/extension/master/promo/screenshot2.png)

## Permission Justifications

**tabCapture:** To capture and modify the audio of a tab. Required to boost volume. 

**privacy:** To modify the IPHandlingPolicy. Required to disable WebRTC.

**webNavigation:** To trigger onCommitted and onHistoryStateUpdated listener. Required to change user agent and enable right click & select. 

**scripting:** To inject scripts into webpages. Required to change user agent and enable right click & select. 

**downloads:** To trigger download of modified image. Required to save image as type.

**contextMenus:** To add option to context menu. Required to save image as type.

**offscreen:** To use the tabCapture API and HTML canvas in the background service worker. Required to boost volume and save Image as type. 

**declarativeNetRequestWithHostAccess:** To modify user agent header. Required to change user agent

**storage:** To store user settings.

**Host permission:** To trigger webNavigation on every website. Required to change user agent and enable right click & select. 

## Development

This application is built with Javascript and React.

Clone this repo and run these commands to start the development server.

```
yarn
yarn start
```

Load the extension on Chrome:

- Access chrome://extensions/
- Check Developer mode
- Click on Load unpacked extension
- Select the build folder.
