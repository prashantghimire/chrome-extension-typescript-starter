try {
  // if no iframe, so appropriate message.
  let iframe = document.querySelectorAll('iframe[id^=capital]');
  let dataset = iframe[0]['dataset'];
  let message = {
    type: 'DEALER_INFO',
    data: dataset,
    websiteInfo: {
      dealerName: window.location.host
    }
  };

  chrome.runtime.sendMessage(message, function (response) {
    console.log('response', response);
  });

} catch (e) {
  console.log('error occurred: ', e);
}
