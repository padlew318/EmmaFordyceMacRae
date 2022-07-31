// Initialize and add the map
function initMap() {
    // The location of Uluru
    const capeann = { lat: 42.6334, lng: -70.6777 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: capeann,
    });

    // The markers
    const label1 = "1";
    const newengland = { lat: 42.6334, lng: -70.6777 };

    const marker1 = new google.maps.Marker({
      position: newengland,
      map,
      label: label1,
      title:"New England"
    });

  }
  
  window.initMap = initMap;