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

function getPointUpdate() {
  ret = get('v2/entities?type=hk-ufs-point&attrs=id');

  ret.always(function (data) {
    str = '<option selected disabled>Selecione um departamento</option>';

    $(data).each(function () {
      str = str
        + "<option value='" + this.id + "'>" + this.id + "</option>";
    });

    $('#selectUpdate').html(str);
  })
}

function getPointDelete() {
  ret = get('v2/entities?type=hk-ufs-point&attrs=id');
  
  ret.always(function (data) {
    str = '';

    $(data).each(function () {
      str = str
        + "<option value='" + this.id + "'>" + this.id + "</option>";
    });

    $('#selectDelete').html(str);
  });
}