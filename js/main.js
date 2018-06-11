$(document).ready(function () {
    $('.filter-dropdown').on('click', function (event) {
        var link = $(this);

        if(link.attr('aria-expanded') === "true"){
            link.find('span i').removeClass('fa-sort-up');
            link.find('span i').addClass('fa-sort-down');
        }else{
            link.find('span i').removeClass('fa-sort-down');
            link.find('span i').addClass('fa-sort-up');
        }
    });

    /*ARROW EXPANDED LINK MENU*/
    const linkCollapse = $('.link-menu[data-toggle="collapse"]');
    linkCollapse.on('click', function () {
        if(linkCollapse.attr('aria-expanded') === "false"){
            $(this).find('i').removeClass('fa-angle-left');
            $(this).find('i').addClass('fa-angle-down');

            linkCollapse.attr('aria-expanded', true);
        }else{
            $(this).find('i').removeClass('fa-angle-down');
            $(this).find('i').addClass('fa-angle-left');

            linkCollapse.attr('aria-expanded', false);
        }
    });
});

$( window ).resize(function() {
});