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


$(document).ready(function() {  // Wenn alles fertig geladen ist insertet er die Funktion die durch die Json looped im div
    filmInsert($('.container'));


    
  var a = $('.container');  
  var b = a.find('boxwrapper');
console.log(b)

   
    
    let counter1 = 0
        $("#button1").on("click", function(){
           
    counter1++
    $(".boxwrapper").attr("data-order", function(i, origValue){
        return counter1});


            $("#output1").text("BUDS " +counter1)
        })

        

    let counter2 = 0
    $("#button2").on("click", function(){
       
counter2++
$(".boxwrapper").attr("data-order", function(i, origValue){
    return counter2});
        $("#output2").text("BUDS " +counter2)
    })  
    let counter3 = 0
        $("#button3").on("click", function(){
           
    counter3++
    $("#output3").attr("class", function(i, origValue){
        return counter3; });
            $("#output3").text("BUDS " +counter3)
        })  
        let counter4 = 0
            $("#button4").on("click", function(){
               
        counter4++
        $("#output4").attr("class", function(i, origValue){
            return counter1; });
                $("#output4").text("BUDS " +counter4)
            })  
            let counter5 = 0
                $("#button5").on("click", function(){
                   
            counter5++
            $("#output5").attr("class", function(i, origValue){
                return counter5; });
                    $("#output5").text("BUDS " +counter5)
                })
                  
    let counter6 = 0
    $("#button6").on("click", function(){
       
counter6++
console.log(counter1)
$("#output1").attr("class", function(i, origValue){
    return counter6; });
        $("#output6").text("BUDS " + counter6)
    })
    
    


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
            <p> <button id="button${data.id}">
              <img src="img/budspencer_official.png"></button>
              <span id="output${data.id}" class="counter${data.id}">BUDS ${data.likes}</span>
            </p>
          </div>
        </div>`;
          insert.append(box);
        
        });
      }
    
    
      var kk = $(".boxwrapper").attr("data-order")
      console.log(a)
   


      var a = $('.container');  
      var b = a.find('.boxwrapper');
      console.log(b)

      var ascending = true;

      var $myColorList = $('#my-color-list');
      var $colors = $myColorList.children('li');
      var sortList = Array.prototype.sort.bind($colors);
      
      var doSort = function ( ascending ) {
          
          sortList(function ( a, b ) {
      
              var a = a.innerHTML;
              var bText = b.innerHTML;
      
              if ( aText < bText ) {
                  return ascending ? -1 : 1;
              }
      
              if ( aText > bText ) {
                  return ascending ? 1 : -1;
              }
      
              return 0;
          });
          
          $myColorList.append($colors);
      
      };
      
      $('#btn-sort').on('click', function () {
          doSort(ascending);
          ascending = !ascending;
      });




});













