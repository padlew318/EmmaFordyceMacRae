         
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const capeann = { lat: 42.6400, lng: -70.64 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: capeann,
    });

    // The markers
    const label1 = "1";
    const newengland = { lat: 42.6334, lng: -70.6777 };

    const label2 = "2";
    const hodgekinscove = { lat: 42.6693, lng: -70.6676 };

    const label3 = "3";
    const newenglanbeach = { lat: 42.6795, lng: -70.6591 };

    const label4 = "4";
    const fishermen = { lat: 42.67625, lng: -70.626 };

    const label5 = "5";
    const pigeoncove = { lat: 42.67625, lng: -70.620 };

    const label6 = "6";
    const rockportbeach = { lat: 42.65991, lng: -70.61608 };

    const label7 = "7";
    const whiteboat = { lat: 42.608, lng: -70.66423 };

    const label8 = "8";
    const mainstreet = { lat: 42.6115, lng: -70.669 };

    const label9 = "9";
    const halfmoonbeach = { lat: 42.6050, lng: -70.677 };

    const label10 = "10";
    const stagefortpark = { lat: 42.6040, lng: -70.68878 };

    const label11 = "11";
    const gloucestergarden = { lat: 42.6040, lng: -70.683 };

    const label12 = "12";
    const capeannmuseum = { lat: 42.6154, lng: -70.6650 };

    const marker1 = new google.maps.Marker({
      position: newengland,
      map,
      label: label1,
      title:"New England"
    });

    const marker2 = new google.maps.Marker({
      position: hodgekinscove,
      map: map,
      label: label2,
      title:"Hodekins Cove"
    });

    const marker3 = new google.maps.Marker({
      position: newenglanbeach,
      map: map,
      label: label3,
      title:"New England Beach"
    });

    const marker4 = new google.maps.Marker({
      position: fishermen,
      map: map,
      label: label4,
      title:"Fishermen"
    });

    const marker5 = new google.maps.Marker({
        position: pigeoncove,
        map: map,
        label: label5,
        title: "Pigeon Cove"
    });

    const marker6 = new google.maps.Marker({
        position: rockportbeach,
        map: map,
        label: label6,
        title: "Rockport Beach"
    });

    const marker7 = new google.maps.Marker({
        position: whiteboat,
        map: map,
        label: label7,
        title: "White Boat"
    });

    const marker8 = new google.maps.Marker({
        position: mainstreet,
        map: map,
        label: label8,
        title: "Main Street"
    });

    const marker9 = new google.maps.Marker({
        position: halfmoonbeach,
        map: map,
        label: label9,
        title: "Half Moon Beach"
    });

    const marker10 = new google.maps.Marker({
        position: stagefortpark,
        map: map,
        label: label10,
        title: "Stage Fort Park"
    });

    const marker11 = new google.maps.Marker({
        position: gloucestergarden,
        map: map,
        label: label11,
        title: "Gloucester Garden"
    });

    const marker12 = new google.maps.Marker({
        position: capeannmuseum,
        map: map,
        label: label12,
        title: "Cape Ann Museum"
    });

  }
  
  window.initMap = initMap;