const version = '1.0';
chrome.browserAction.onClicked.addListener(function (tab) {

  let w = 800;
  let h = 600;
  let left = (screen.width / 2) - (w / 2);
  let top = (screen.height / 2) - (h / 2);
  chrome.windows.create({
    url: 'popup.html', type: 'popup',
    width: w,
    height: h,
    left: left,
    top: top
  }, function (window) {
  });
});

