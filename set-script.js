/**
 * Author: Danil Zakablukovskiy - danil.kabluk@gmail.com
 */

if (image = $('img.main_img').attr('src'))
{
    if ($('#saver').length === 0)
    {
        title = $('#set_title > h1').text().replace(/\W/, '');
        today = new Date();
        date = today.getDate() + '_' + (today.getMonth()+1) + '_' + today.getFullYear();

        $('#main_actions > li > ul').append(
            '<li id="saver">' +
                '<a href="' + image + '" download="Polyvore - ' + title + ' - ' + date + '" title="Save">' +
                '<span title="Save it" class="btn primary bigbtn clickable">' +
                    '<span class="action_label">' +
                        '<div class="sprite saveit">' +
                        '</div>' +
                        'Save' +
                    '</span>' +
                '</span>' +
                '</a>' +
            '</li>');
    }
}