let callback = function (details) {
  $('#dealerInfo').append(details.method + ' -- ' +details.url + '<br>');
};

let filter = {urls: ['https://*.capitalone.com/*'],};
let extraInfoSpec = ['requestBody'];

chrome.webRequest.onBeforeRequest.addListener(callback, filter, extraInfoSpec);

$(document).on('click', '#button1', function () {
  console.log('loaded click');
});
