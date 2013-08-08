/**
 * Author: Danil Zakablukovskiy - danil.kabluk@gmail.com
 */
chrome.runtime.sendMessage('show_icon');

var today = new Date(),
    date = today.getDate() + '_' + (today.getMonth()+1) + '_' + today.getFullYear();

function appendSaveButtons() {
    $('div.grid_item').not('.with-save').each(function (){
        var imageEl = $(this).find('img'),
            title = $(this).find('li.title > a').text(),
            image = '',
            wasImg = false;

        if (imageEl && title) {
            title = title.replace(/\W/, '');
            image = imageEl.attr('xsrc');

            if (!image)
                image = imageEl.attr('src');

            if (image.indexOf('img-set') >= 0) {
                wasImg = true;
                image = image.replace(/.\.jpg/, 'y.jpg');
            }
            else if (image.indexOf('img-thing') >= 0) {
                wasImg = true;
                image = image.replace(/\/size\/./, '/size/l');
            }

            if (wasImg)
                $(this).find('ul.buttons').prepend(
                    '<li><a href="' + image + '" download="Polyvore - ' + title + ' - ' + date + '" class="comments btn right" title="Save">' +
                        'Save' +
                    '</a></li>');

            $(this).addClass('with-save');
        }
    });
}

appendSaveButtons();

$('#pagination_placeholder').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    if (event.type == 'DOMNodeInserted' && event.target.className == 'layout_grid grid_5 mod_inline_save clearfix ') {
        appendSaveButtons();
    }
});

$('#content').bind('DOMNodeInserted DOMNodeRemoved', function(event) {
    if (event.type == 'DOMNodeInserted' && event.target.className == 'layout_grid grid_5 mod_inline_save clearfix ') {
        appendSaveButtons();
    }
});