$(document).ready(function() {  // Wenn alles fertig geladen ist insertet er die Funktion die durch die Json looped im div
    filmInsert($('.container'));

});



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

function filmInsert(insert) {
    $.each(film, function(i, data) { //.each statt loop
      let box = 
      
      `<div class="boxwrapper">
      <div class="imgbox">
      <img src="${data.img}" alt="${data.titel}">
    </div>
    <div class="textbox">
        <h3>${data.titel}</h3>
        <p>${data.beschreibung}</p>
        <p> <a id="button${data.id}">
          <img src="img/budspencer_official.png"> Like
          </a>
          <span class="output${data.id}">${data.likes}</span>
        </p>
      </div>
    </div>`;
      insert.append(box);
    
    });
  }

  var button = document.getElementById("clickme"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click me: " + count;
};
