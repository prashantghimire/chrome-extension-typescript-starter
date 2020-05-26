import * as $ from 'jquery';

let tabId = parseInt(window.location.search.substring(1));

window.addEventListener('load', function () {
    chrome.debugger.sendCommand({tabId: tabId}, 'Network.enable');
    chrome.debugger.onEvent.addListener(doThing);
});

window.addEventListener('unload', function () {
    chrome.debugger.detach({tabId: tabId});
});

function doThing(debugeeId, message, params) {
    try {
        let url = (params.request.url);
        if (url.indexOf('.capitalone.com') <= -1) {
            return;
        }
        let urlParams = params.request.url.split('&');
        let items = urlParams
            .map(item => {
                let field = '';
                let string = item.split('=')[1];
                if (!string || string === 'NaN' || string === 'null') {
                    field = '<span style="color: red">' + item + '</span>';
                } else {
                    field = item;
                }
                return decodeURIComponent(field);
            })
            .join('<br>');
        if (message === 'Network.requestWillBeSent') {
            $('#sent').append(items + '<br>');
        } else if (message === 'Network.responseReceived') {
            $('#received').append(items + '<br>');
        }
    } catch (e) {

    }
}
