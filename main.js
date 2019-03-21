
var newURL = "https://swapi.co/api/planets/"
$.getJSON(newURL,function(data){
    let planets = data.results;
    $.each(planets, function(i, data){
        $('#get-data').append('<tr><td>'+ data.name +'</td><td>'+ data.rotation_period +'</td><td>'+ data.orbital_period +'</td><td>'+ data.diameter +'</td><td>'+ data.climate +'</td><td>'+ data.gravity +'</td><td>'+ data.terrain +'</td><td>'+ data.surface_water +'</td><td>'+ data.population +'</td><td>'+ data.residents +'</td><td>'+ data.films +'</td></tr>');
    });

    let next = data.next
    document.getElementById("nextButton").onclick = function() {nextPage(next)};
    
    console.log(next)
})

function nextPage(nextURL){
    $.getJSON(nextURL,function(data){
        let planets = data.results;
        $.each(planets, function(i, data){
            $('#get-data').append('<tr><td>'+ data.name +'</td><td>'+ data.rotation_period +'</td><td>'+ data.orbital_period +'</td><td>'+ data.diameter +'</td><td>'+ data.climate +'</td><td>'+ data.gravity +'</td><td>'+ data.terrain +'</td><td>'+ data.surface_water +'</td><td>'+ data.population +'</td><td>'+ data.residents +'</td><td>'+ data.films +'</td></tr>');
        });
    
        let nextURL = data.next
        document.getElementById("nextButton").onclick = function() {nextPage(nextURL)};
        console.log(planets)

        if(nextURL === null){
            console.log('Out of Data')
            document.getElementById("nextButton").innerHTML = "Out of Data";
         }
    })
}

function FilterDataPlanet() {
    var input, filter, table, tr, td, i, value;
    input = document.getElementById("filter_planet");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        value = td.textContent || td.innerText;
        if (value.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function FilterDataRotation(){
      var input, filter, table, tr, td, i, value;
      input = document.getElementById("filter_rotation");
      //filter = input.value.toUpperCase();
      table = document.getElementById("table");
      tr = table.getElementsByTagName("tr");
      for (i = 0; i < tr.length; i++) {
          td = tr[i].getElementsByTagName("td")[0];
          if (td) {
              value = td.textContent || td.innerText;
              if (value.toUpperCase().indexOf(filter) > -1) {
                  tr[i].style.display = "";
              } else {
                  tr[i].style.display = "none";
              }
          }
      }
  }





