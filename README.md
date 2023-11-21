# Browser Boost Extension

**Download:** https://chrome.google.com/webstore/detail/akknpgblpchaoebdoiojonnahhnfgnem

The Browser Boost extension provides an open-source, privacy respecting alternative to numerous single-use extensions.

You can rely on Browser Boost instead of having to trust multiple single-use extensions from various developers, which are often closed source and come with undocumented permissions.

Browser Boost collects no user data, does not require signup, has no servers, is entirely open source and is 100% free.

## Tools:

🔊 **Boost Volume:** Increase the maximum volume of your browser up to 600%.

🕵️ **Change User Agent:** Spoof user agent to emulate different devices or browsers.

🖱️ **Enable Right Click & Select:** Force enable right clicks, copy, & text selection on sites that have disabled right-click or selection interactions.

💾 **Save Image as Type:** Add context menu to save images as JPG, PNG or WebP.

💬 **Disable WebRTC:** Disable WebRTC requests to prevent IP address leaks.

## Screenshot

![screenshot](https://raw.githubusercontent.com/BrowserBoost/extension/master/promo/screenshot2.png)

## Permission Justifications:

**tabCapture:** To capture and modify the audio of a tab. Required to boost volume. 

**privacy:** To modify the IPHandlingPolicy. Used to disable WebRTC.

**webNavigation:** To trigger onCommitted and onHistoryStateUpdated listener. Used to change user agent and enable right click & select. 

**scripting:** To inject scripts into webpages. Used to change user agent and enable right click & select. 

**downloads:** To trigger download of modified images. Used to save Image as type.

**contextMenus:** Add context menu option for save Image as type.

**offscreen:** To use the tabCapture API and HTML canvas in the background service worker. Used to boost volume and save Image as type. 

**declarativeNetRequestWithHostAccess:** To modify user agent header. Used to change user agent

**storage:** To remember user settings.

**Host permission:** To trigger webNavigation on every website. Used to change user agent and enable right click & select. 

## Development:

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
