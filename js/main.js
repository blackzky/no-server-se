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

  setTimeout(function(){$("#loading").hide();}, 1000);
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
