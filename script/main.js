// holt die externe Json file und wandelt sie in ein object um
let readJSON = function (file) {
    let json = {}
    $.ajax({
        'async': false,
        'global': false,
        'url': file,
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
};

let film = readJSON("script/film.json");
console.table(film);

console.log(typeof(film));


$(document).ready(function() {  // Wenn alles fertig geladen ist 
    filmInsert($('.container'));



// holt die value vom click counter und fügt 1 dazu
$(document).on("click", ".textbox button", function() {
    let likes = parseInt($(this).closest(".textbox").find("span").text());
    console.log(likes)
    $(this).closest(".textbox").find("span").text(likes + 1);
  });
 

 // speichert alle divs im array und danach wirds sortiert anhand der like values mit der sort funktion
  $("#sort").on("click", function() {
    let divs = $(".boxwrapper")

    let sorted = divs.sort(function(a, b) {
       return $(a).find("span").text() < $(b).find("span").text() ? 1 : -1;
            
    });
    Swal.fire('SORTING DONE -- MY MASTER')
    $(".container").append(sorted);
  
    


  });
 

    function filmInsert(insert) {
        $.each(film, function(i, data) { //.each statt loop
           
          
          let box = 
          
          `<div class="boxwrapper" id="${i++}" data=[0]>
          <div class="imgbox">
          <img src="${data.img}" alt="${data.titel}">
        </div>
        <div class="textbox">
            <h3>${data.titel}</h3>
            <p>${data.beschreibung}</p>
            <p> <button id="button${data.id}">
              <img src="img/budspencer_official.png"></button>BUDS 
              <span id="output${data.id}" class="counter${data.id}">0</span>
            </p>
          </div>
        </div>`;
          insert.append(box);
        
        });
      }
    
});













