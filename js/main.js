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
});

function setTileMapLayout(map){
	var container  = $("#game-canvas"),
		mapHeight  = MAP.length,
		mapWidth   = MAP[0].length;

	container.html(tileMapLayout(map));
	container.css({
		width : (TILE_SIZE * mapWidth) + "px",
		height: (TILE_SIZE * mapHeight) + "px"
	});
	$(".row").css({
		width : (TILE_SIZE * mapWidth) + "px",
		height: TILE_SIZE + "px"
	});
	$(".column").css({
		width  : TILE_SIZE + "px",
		height : TILE_SIZE + "px",
		"float": "left"
	});
	$(".tile").css({
		width : TILE_SIZE + "px",
		height: TILE_SIZE + "px"
	});
}
function tileMapLayout(map){
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
	return tilemap;
}
