/**
 * Author: Danil Zakablukovskiy - danil.kabluk@gmail.com
 */

if (image = $('img.main_img').attr('src')) {
    if (!$('#saver').length) {
        chrome.runtime.sendMessage('show_icon');

        title = $('#set_title').find('h1').text().replace(/\W/g, '');
        today = new Date();
        date = today.getDate() + '_' + (today.getMonth() + 1) + '_' + today.getFullYear();
        button = '<li id="saver">' +
            '<a href="' + image + '" download="Polyvore - ' + title + ' - ' + date + '.jpg" title="Save">' +
            '<span title="Save it" class="btn primary bigbtn clickable">' +
            '<span class="action_label">' +
            'Save' +
            '</span>' +
            '</span>' +
            '</a>' +
            '</li>';
        buttonFull = '<div class="clearfix" id="top_actions"><ul class="actions new_actions clearfix" id="main_actions"><li><ul class="inline clearfix"><li id="saver">' +
            '<a href="' + image + '" download="Polyvore - ' + title + ' - ' + date + '.jpg" title="Save">' +
            '<span title="Save it" class="btn primary bigbtn clickable">' +
            '<span class="action_label">' +
            'Save' +
            '</span>' +
            '</span>' +
            '</a>' +
            '</li></ul></li></ul></div>';

        if ($('#main_actions').length)
            $('#main_actions > li > ul').prepend(button);
        else
            $('#top').append(buttonFull);
    }
}