var MAP = [
		[1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 2, 1, 1, 1, 1, 2, 1, 1],
		[1, 1, 2, 2, 1, 1, 1, 2, 1],
		[1, 1, 2, 2, 2, 1, 1, 1, 1],
		[1, 1, 1, 2, 2, 2, 1, 1, 1],
		[1, 1, 1, 1, 2, 2, 2, 1, 1],
		[1, 2, 1, 1, 1, 2, 2, 2, 1],
		[1, 1, 2, 1, 1, 1, 2, 2, 1],
		[1, 1, 1, 1, 1, 1, 1, 1, 1]
	]; /* MAP[ROW][COL] */
var TILE_SIZE = 32;

$(function(){
	setTileMapLayout(MAP);
	$(".tile").click(function(){console.log(this.id)});

  setTimeout(function(){$("#loading").hide();}, 500);

  $("body").append("<div id='tooltip'></div>")
  $("#tooltip").css({
    width: "100px",
    height: "100px",
    position: "absolute",
    "background-color" : "skyblue"
  }).hide();

  $(".skill-quick-slot-item").hover(function(e){
    $("#tooltip").show();
    var position = $(this).offset();
    position.left = position.left - ( ($("#tooltip").width()/2) ) + ($(this).width()/2 );
    position.top = position.top - ($("#tooltip").height() + 10);
    $("#tooltip").css(position);
  },function(){
    $("#tooltip").hide();
  });

});

function setTileMapLayout(map){
	var tilemap = "";
	for(row in map){
		column = map[row];
		tilemap += "<div class='row'>";
		for(col in column){
			tilemap +=  "<div class='column'>" +
			"<div id='" + row + "-" + col + "' class='tile " +
			(map[row][col] == 1 ? 'grass' : '') + (map[row][col] == 2 ? 'ground' : '') +
			"'></div></div>";
		}
		tilemap += "</div>";
	}
	$("#game-canvas").html(tilemap);
}
