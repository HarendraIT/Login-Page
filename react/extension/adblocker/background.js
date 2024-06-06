chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return { cancel: true };
    },
    {
      urls: [
        "*://*.doubleclick.net/*",
        "*://*.googleadservices.com/*",
        "*://*.googlesyndication.com/*",
        "*://*.ad.doubleclick.net/*",
        "*://*.adclick.g.doubleclick.net/*"
        // Add more ad URLs to block as needed
      ],
      types: ["script", "image", "stylesheet"]
    },
    ["blocking"]
  );
  