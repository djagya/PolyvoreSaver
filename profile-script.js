/**
 * Author: Danil Zakablukovskiy - danil.kabluk@gmail.com
 */

today = new Date();
date = today.getDate() + '_' + (today.getMonth()+1) + '_' + today.getFullYear();

$('div.content.collection').each(function (i){
    var image = $(this).find('.img_size_y.xsrc').attr('xsrc'),
        title = $(this).parent().find('.set_title').text().replace(/\W/, '');

    $(this).parent().find('.actions').prepend(
        '<a href="' + image + '" download="Polyvore - ' + title + ' - ' + date + '" class="comments btn right" title="Save">' +
            '<div class="sprite saveit"></div> ' +
            'Save' +
        '</a>');
});