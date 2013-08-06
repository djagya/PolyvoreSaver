/**
 * Author: Danil Zakablukovskiy - danil.kabluk@gmail.com
 */

chrome.runtime.onMessage.addListener(
    function(request, sender) {
        if (request == 'show_icon')
            chrome.pageAction.show(sender.tab.id);
    });