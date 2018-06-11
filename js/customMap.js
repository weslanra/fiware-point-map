var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -10.924907, lng: -37.102012},
        zoom: 17
    });

    /* Carregando pontos no mapa */
    ret = get('v2/entities?type=hk-ufs-point');

    ret.always(function (date) {
        $(date).each(function () {
            var latLng = new google.maps.LatLng(this.location.value.coordinates[0], this.location.value.coordinates[1]);

            var marker = new google.maps.Marker({
                position: latLng,
                map: map
            });

            var contentString =
                '<div class="infowindow-marker">'
                    + '<h3>' + this.name.value + '</h3>'
                    + '<div>'
                        + '<span>Responsável: ' + this.membro.value.responsavel + '</span><br>'
                        + '<span>Número de Professores: ' + this.membro.value["num_professor"] + '</span>'
                    + '</div>'
                +'</div>';

            bindInfoWindow(marker, map, new google.maps.InfoWindow({
              content: contentString
            }));

        });
    });
    /* Carregando pontos no mapa */
}

function bindInfoWindow(marker, map, infowindow){
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}