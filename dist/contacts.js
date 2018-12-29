menu_toggle.onclick = function () {
    menu_ul.classList.toggle("block");
    let mt = document.querySelectorAll('.mt');
    mt[0].classList.toggle("marg");
}

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('body'), {
    dotColor: '#fec222',
    lineColor: '#ccc'
  });
}, false);

var mymap = L.map('mapid').setView([50.42838275619874, 30.593079113043505], 14);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiaWx1YSIsImEiOiJjam51MG8wbmMwMTRlM3F1cTJlODd4cjV2In0.7NYLuOal-7aswChQHP1E_w', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox.streets'
}).addTo(mymap);

L.marker([50.42838275619874, 30.593079113043505]).addTo(mymap)
  .bindPopup("<h3 class='map-h3' >Banckruptcy agency</h3><p class = 'map-p' >Киев, пр. Павла Тычины, 1в</p>").openPopup();

var popup = L.popup();
