document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terima kasih atas konfirmasi kehadiran Anda!');
});

function initMap() {
    var lokasi = {lat: -6.200000, lng: 106.816666}; // Ganti dengan koordinat lokasi acara kamu
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: lokasi
    });
    var marker = new google.maps.Marker({
        position: lokasi,
        map: map
    });
}

document.addEventListener('DOMContentLoaded', function() {
    var music = document.getElementById('music');
    var playPauseButton = document.getElementById('play-pause');

    music.play();

    playPauseButton.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            playPauseButton.textContent = 'Pause';
        } else {
            music.pause();
            playPauseButton.textContent = 'Play';
        }
    });
});
