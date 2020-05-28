let key = 'windowState';

// chrome.browserAction.onClicked.addListener(function (tab) {
//   console.log('triggered');
//   // if (localStorage.getItem(key) === 'open') {
//   //   console.log('already open');
//   //   return;
//   // }
//
//   chrome.tabs.create({'url': chrome.extension.getURL('popup.html')}, function (tab) {
//     console.log('tab created : ', tab);
//     localStorage.setItem(key, 'open');
//   });
// });
//
// chrome.tabs.onRemoved.addListener(function () {
//   localStorage.removeItem(key);
// });
