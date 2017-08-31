$(document).ready(function () {
	var grid = new Array();
	var tour = 1;
	var z = 0;
	var w = 0;
	var canMove = 0;
	var pionSelec = new Array(0, 0);
	var pionDir = new Array(0, 0, 0, 0);
	var pionEat = new Array(0, 0, 0, 0);
	var pionPosY = new Array();
	var pionPosX = new Array();
	var pionMange = new Array();
	var count = 0;
	var eat = 1;

	function coordGet (coord, type) {
		if(type == 'y')
		{
			if(coord == 0)
				return 'A';
			if(coord == 1)
				return 'B';
			if(coord == 2)
				return 'C';
			if(coord == 3)
				return 'D';
			if(coord == 4)
				return 'E';
			if(coord == 5)
				return 'F';
			if(coord == 6)
				return 'G';
			if(coord == 7)
				return 'H';
			if(coord == 8)
				return 'I';
			if(coord == 9)
				return 'J';
		}
		else
		{
			if(coord == 0)
				return '1';
			if(coord == 1)
				return '2';
			if(coord == 2)
				return '3';
			if(coord == 3)
				return '4';
			if(coord == 4)
				return '5';
			if(coord == 5)
				return '6';
			if(coord == 6)
				return '7';
			if(coord == 7)
				return '8';
			if(coord == 8)
				return '9';
			if(coord == 9)
				return '10';
		} 
	}

	function cleanPion () {
		var clean = 0;
		var o = 0;
		var coord = new Array();
		coord[0] = '#';
		while(o < 2)
		{
			pionSelec[o] = 0;
			o++;
		}
		o = 0;
		while(o < 4)
		{
			pionDir[o] = 0;
			pionEat[o] = 0;
			pionPosX[o] = -1;
			pionPosY[o] = -1;
			pionMange[o] = new Array();
			while(clean < 100)
			{
				pionMange[o][clean] = -1;
				clean++;
			}
			clean = 0;
			o++;
		}
		while(z < 10)
		{
			while(w < 10)
			{
				coord[1] = coordGet(z, 'y');
				coord[2] = coordGet(w, 'x');
				$(coord).removeClass("active");
				w++;
			}
			w = 0;
			z++;
		}
		z = 0;
	}

	function initGrid () {
		while(z < 10)
		{
			grid[z] = new Array();
			while(w < 10)
			{
				if((z < 4) && (z % 2 == 0 && w % 2 != 0))
					grid[z][w] = 2;
				else if((z < 4) && (z % 2 != 0 && w % 2 == 0))
					grid[z][w] = 2;
				else if((z > 5) && (z % 2 != 0 && w % 2 == 0))
					grid[z][w] = 1;
				else if((z > 5) && (z % 2 == 0 && w % 2 != 0))
					grid[z][w] = 1;
				else
					grid[z][w] = 0;
				w++;
			}
			w = 0;
			z++;
		}
		z = 0;
		w = 0;
	}

	cleanPion();
	initGrid();

	function getCoord (id, dir) {
		if(dir == 'y')
		{
			if(id[0] == 'A')
				return 0;
			if(id[0] == 'B')
				return 1;
			if(id[0] == 'C')
				return 2;
			if(id[0] == 'D')
				return 3;
			if(id[0] == 'E')
				return 4;
			if(id[0] == 'F')
				return 5;
			if(id[0] == 'G')
				return 6;
			if(id[0] == 'H')
				return 7;
			if(id[0] == 'I')
				return 8;
			if(id[0] == 'J')
				return 9;
		}
		else
		{
			if(id[1] == '1')
				return 0;
			if(id[1] == '2')
				return 1;
			if(id[1] == '3')
				return 2;
			if(id[1] == '4')
				return 3;
			if(id[1] == '5')
				return 4;
			if(id[1] == '6')
				return 5;
			if(id[1] == '7')
				return 6;
			if(id[1] == '8')
				return 7;
			if(id[1] == '9')
				return 8;
			if(id[1] == '10')
				return 9;
		}
	}

	function can_move(y, x)
	{
		var loop = 0;
		var memY = 0;
		var memX = 0;
		var i = 0;
		console.log("je vais chercher");
		if(grid[y][x] == 2 || grid[y][x] == 4)
		{
			if(grid[y][x] == 4)
			{
			}
			else
			{
				z = y;
				w = x;
				while(i < 4)
				{
					console.log("j'entre dans la boucle 1");
					count = i;
					eat = 1;
					while(eat != 0)
					{
						console.log("j'entre dans la boucle 2");
						if(count = 0)
						{
							if(y - 1 < 0 || x - 1 < 0)
							{
								count++;
							}
							else
							{
								y--;
								x--;
							}
						}
						if(count = 1)
						{
							if(y - 1 < 0 || x + 1 > 9)
							{
								count++;
							}
							else
							{
								y--;
								x++;
							}
						}
						if(count = 2)
						{
							if(y + 1 > 9 || x + 1 > 9)
							{
								count++;
							}
							else
							{
								y++;
								x++;
							}
						}
						if(count = 3)
						{
							if(y + 1 > 9 || x - 1 < 0)
							{
								count++;
							}
							else
							{
								y++;
								x--;
							}
						}
						if(grid[y][x] == 1 || grid[y][x] == 3)
						{
							if(count == 0 && grid[y - 1][x - 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y--;
								x--;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0;
							}
							else if(count == 1 && grid[y - 1][x + 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y--;
								x++;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0;
							}
							else if(count == 2 && grid[y + 1][x + 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y++;
								x++;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0;
							}
							else if(count == 3 && grid[y + 1][x - 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 100) +  x;
								loop = 0;
								pionEat[i] += 1;
								y++;
								x--;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0
							}
							else
							{
								y = memY;
								x = memX;
								count++;
							}
						}
						if(count > 3)
							eat = 1;
					}
					i++;
				}
				y = z;
				x = w;
				i = 0;
				while(i < 4)
				{
					if(i == 0)
					{
						if(grid[y - 1][x - 1] == 0)
							pionDir[i] = 1;
					}
					if(i == 1)
					{
						if(grid[y - 1][x + 1] == 0)
							pionDir[i] = 1;
					}
					if(i == 2)
					{
						if(grid[y + 1][x + 1] == 0)
							pionDir[i] = 1;
					}
					if(i == 3)
					{
						if(grid[y + 1][x + 1] == 0)
							pionDir[i] = 1;
					}
					i++;
				}
				i = 0;
			}
		}
		else
		{
			if(grid[y][x] == 3)
			{

			}
			else
			{
				z = y;
				w = x;
				while(i < 4)
				{
					console.log("j'entre dans la boucle 1");
					count = i;
					eat = 1;
					while(eat != 0)
					{
						console.log("j'entre dans la boucle 2");
						if(count = 0)
						{
							if(y - 1 < 0 || x - 1 < 0)
							{
								count++;
							}
							else
							{
								y--;
								x--;
							}
						}
						if(count = 1)
						{
							if(y - 1 < 0 || x + 1 > 9)
							{
								count++;
							}
							else
							{
								y--;
								x++;
							}
						}
						if(count = 2)
						{
							if(y + 1 > 9 || x + 1 > 9)
							{
								count++;
							}
							else
							{
								y++;
								x++;
							}
						}
						if(count = 3)
						{
							if(y + 1 > 9 || x - 1 < 0)
							{
								count++;
							}
							else
							{
								y++;
								x--;
							}
						}
						console.log(grid[y][x]);
						if(grid[y][x] == 2 || grid[y][x] == 4)
						{
							if(count == 0 && grid[y - 1][x - 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y--;
								x--;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0;
							}
							else if(count == 1 && grid[y - 1][x + 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y--;
								x++;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0;
							}
							else if(count == 2 && grid[y + 1][x + 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y++;
								x++;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0;
							}
							else if(count == 3 && grid[y + 1][x - 1] == 0)
							{
								while(pionMange[i][loop] != 0)
								{
									loop++;
								}
								pionMange[i][loop] = (y * 10) +  x;
								loop = 0;
								pionEat[i] += 1;
								y++;
								x--;
								pionPosX[i] = x * 10 + i;
								pionPosY[i] = y * 10 + i;
								memY = y;
								memX = x;
								count = 0
							}
							else
							{
								y = memY;
								x = memX;
								count++;
							}
						}
						if(count > 3)
							eat = 1;
					}
					i++;
				}
				y = z;
				x = w;
				i = 0;
				while(i < 4)
				{
					if(i == 0)
					{
						if(grid[y - 1][x - 1] == 0)
							pionDir[i] = 1;
					}
					if(i == 1)
					{
						if(grid[y - 1][x + 1] == 0)
							pionDir[i] = 1;
					}
					if(i == 2)
					{
						if(grid[y + 1][x + 1] == 0)
							pionDir[i] = 1;
					}
					if(i == 3)
					{
						if(grid[y + 1][x + 1] == 0)
							pionDir[i] = 1;
					}
					i++;
				}
				i = 0;
			}
		}
		console.log("pas de probleme ici");
	}

	function move_pion(y, x) {
		var i = 0;
		var memI = 0;
		var coord = new Array();
		coord[0] = '#';
		coord[1] = coordGet(z, 'y');
		coord[2] = coordGet(w, 'x');
		while(i < 4)
		{
			if(pionPosY[i] / 10 == y && pionPosX[i] / 10 == x)
				memI = pionPosX[i] % 10;
			i++;
		}
		i = 0;
		if(grid[pionSelec[0]][pionSelec[1]] == 1)
		{
			$(coord).removeClass("pblanc");
			coord[1] = coordGet(pionPosY[memI] / 10, 'y');
			coord[2] = coordGet(pionPosX[memI] / 10, 'x');
			$(coord).addClass("pblanc");
		}
		if(grid[pionSelec[0]][pionSelec[1]] == 3)
		{
			$(coord).removeClass("dblanc");
			coord[1] = coordGet(pionPosY[memI] / 10, 'y');
			coord[2] = coordGet(pionPosX[memI] / 10, 'x');
			$(coord).addClass("dblanc");
		}
		if(grid[pionSelec[0]][pionSelec[1]] == 2)
		{
			$(coord).removeClass("pnoir");
			coord[1] = coordGet(pionPosY[memI] / 10, 'y');
			coord[2] = coordGet(pionPosX[memI] / 10, 'x');
			$(coord).addClass("pnoir");
		}
		if(grid[pionSelec[0]][pionSelec[1]] == 4)
		{
			$(coord).removeClass("dblanc");
			coord[1] = coordGet(pionPosY[memI] / 10, 'y');
			coord[2] = coordGet(pionPosX[memI] / 10, 'x');
			$(coord).addClass("dblanc");
		}
		while(pionMange[memI][i] != 0)
		{
			coord[1] = coordGet(pionMange[memI][i] / 10, 'y');
			coord[2] = coordGet(pionMange[memI][i] % 10, 'x');
			$(coord).removeClass("pblanc");
			$(coord).removeClass("pnoir");
			$(coord).removeClass("dblanc");
			$(coord).removeClass("dnoir");
			i++;
		}
		
	}

	function case_active(y, x) {
		var coord = new Array();
		coord[0] = '#';
		coord[1] = coordGet(y, 'y');
		coord[2] = coordGet(x, 'x');
		var booleen = $(coord).hasClass("active");
		if(booleen == true)
			return 1;
		else
			return 2;
	}

	function active_case(i, y, x, type) {
		var coord = new Array();
		coord[0] = '#';
		if(type == 1)
		{
			if(i == 0)
			{
				coord[1] = coordGet(y - 2, 'y');
				coord[2] = coordGet(x - 2, 'x');
				$(coord).addClass("active");
			}
			if(i == 1)
			{
				coord[1] = coordGet(y - 2, 'y');
				coord[2] = coordGet(x + 2, 'x');
				$(coord).addClass("active");
			}
			if(i == 2)
			{
				coord[1] = coordGet(y + 2, 'y');
				coord[2] = coordGet(x + 2, 'x');
				$(coord).addClass("active");
			}
			if(i == 3)
			{
				coord[1] = coordGet(y + 2, 'y');
				coord[2] = coordGet(x - 2, 'x');
				$(coord).addClass("active");
			}
		}
	};

	$(".case").click(function () {
		var i = 0;
		var best = 0;
		var y = getCoord($(this).attr("id"), 'y');
		var x = getCoord($(this).attr("id"), 'x');
		if(case_active(y, x) == 1)
		{
			move_pion(y, x);
			cleanPion();
			if(tour == 1)
				tour = 2;
			else
				tour = 1;
		}
		else
		{
			if(grid[y][x] % 2 == 0 && tour == 2)
			{
				alert("je vais chercher les possibilités pour cette case noire");
				cleanPion();
				pionSelec[0] = y;
				pionSelec[1] = x;
				can_move(y, x);
			}
			else if((grid[y][x] == 1 || grid[y][x] == 3) && tour == 1)
			{
				alert("je vais chercher les possibilités pour cette case blanche");
				cleanPion();
				pionSelec[0] = y;
				pionSelec[1] = x;
				can_move(y, x);
			}
			while(i < 4)
			{
				if(pionEat[i] > best)
					best = pionEat[i];
				i++;
			}
			i = 0;
			if(best != 0)
			{
				while(i < 4)
				{
					if(pionEat[i] == best)
					{
						active_case(i, pionPosY[i], pionPosX[i], 1);
					}
					i++;
				}
				i = 0;
			}
			else
			{
				while(i < 4)
				{
					if(pionDir[i] != 0)
					{
						active_case(i, y, x, 0);
					}
				}
			}
		}	

	});
	
});