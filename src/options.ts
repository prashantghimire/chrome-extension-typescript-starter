$(function () {
  chrome.tabs.executeScript({
    file: 'js/script.js'
  });
});

chrome.runtime.onMessage.addListener(function (event) {
  console.log('event : ', event);
  const vehicleData = event.data;
  const optionalFields = ['additionalInformation'];
  const nullFields = [];
  let diagnosisResultString = '';
  Object.keys(vehicleData).forEach(key => {
    let vehicleDatum = vehicleData[key];
    if ((!vehicleDatum || vehicleDatum === 'null' || vehicleDatum === 'NaN') && optionalFields.indexOf(key) <= -1) {
      nullFields.push({
        field: key,
        value: vehicleDatum
      });
      diagnosisResultString += `${key}: ${vehicleDatum}<br>`;
    }
  });

  $('#dealerName').append(event.websiteInfo.dealerName);
  console.log('info ', diagnosisResultString);
  let diagnosticsHtml = '';
  if (diagnosisResultString) {
    diagnosticsHtml = '<div class="alert alert-danger">The following data is missing: <br>' + diagnosisResultString + '</div>';
  } else {
    diagnosticsHtml = '<h3 class="alert alert-success text-center">The button is good!</h3>';
  }
  $('#diagnosisInfo').append(diagnosticsHtml);

});
