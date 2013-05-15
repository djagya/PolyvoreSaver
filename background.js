/**
 * Author: Danil Zakablukovskiy - danil.kabluk@gmail.com
 */

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (tab.url.indexOf('set?id=') > -1 || /http:\/\/.*[^www]\.polyvore.com/.test(tab.url))
        chrome.pageAction.show(tab.id);
});