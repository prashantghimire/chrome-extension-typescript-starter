const version = '1.0';

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.windows.create({url: 'popup.html', type: 'popup', width: 800, height: 600});
});
