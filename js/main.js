// portfolio images filter
$(document).ready(function() {
    $('.list-inline-item').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'All') {
            $('.item-box').show('1000');
        } else {
            $('.item-box').not('.'+value).hide('1000');
            $('.item-box').filter('.'+value).show('1000');
        }
    });
});