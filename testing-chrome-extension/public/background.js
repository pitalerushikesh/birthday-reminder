chrome.action.onClicked.addListener(async (activeTab) => {
  var newURL = "index.html";
  await chrome.tabs.create({ url: newURL });
});
