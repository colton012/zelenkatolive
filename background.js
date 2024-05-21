chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {redirectUrl: details.url.replace("zelenka.guru", "lolz.live")};
    },
    {urls: ["*://zelenka.guru/*"]},
    ["blocking"]
  );
  