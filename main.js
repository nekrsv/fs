chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.scripting.executeScript({
      target: {tabId: tabId},
      files: ["fullscreen.js"]
  });
});
