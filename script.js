let player1 = true
let player2 = false

let info = document.querySelector(".info")

let choice1 = document.querySelector(".choice-player-1")
let choice2 = document.querySelector(".choice-player-2")

let player1_ch = null
let player2_ch = null

let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")

let player1_sc = 0
let player2_sc = 0

let round = document.querySelector(".round")
let roundNumber = 1


document.addEventListener('keydown', function(e){
	if(player1 == true && player2 == false){
		if(e.code == "KeyA"){
			console.log("камень")
			player1 = false
			player2 = true
			info.innerHTML = "ходит 2 игрок"
			player1_ch = "камень"
		}

		else if(e.code == "KeyS"){
			console.log("ножницы")
			player1 = false
			player2 = true
			info.innerHTML = "ходит 2 игрок"
			player1_ch = "ножницы"
		}

		else if(e.code == "KeyD"){
			console.log("бумага")
			player1 = false
			player2 = true
			info.innerHTML = "ходит 2 игрок"
			player1_ch = "бумага"
		}
	}	
	if(player1 == false && player2 == true){
		if(e.code == "KeyJ"){
			console.log("камень")
			player2 = false
			info.innerHTML = "loading...."
			player2_ch = "камень"
			setTimeout(show, 500)
			setTimeout(finish, 1500)
			setTimeout(newRound, 3000)
		}

		else if(e.code == "KeyK"){
			console.log("ножницы")
			player2 = false
			info.innerHTML = "loading...."
			player2_ch = "ножницы"
			setTimeout(show, 500)
			setTimeout(finish, 1500)
			setTimeout(newRound, 3000)
		}

		else if(e.code == "KeyL"){
			console.log("бумага")
			player2 = false
			info.innerHTML = "loading...."
			player2_ch = "бумага"
			setTimeout(show, 500)
			setTimeout(finish, 1500)
			setTimeout(newRound, 3000)
		}
	}
})

let show = function(){
	if(player1_ch == "камень"){
		choice1.style.background = "url(1.png)"
		choice1.style.backgroundSize = "100% 100%"
	}
	else if(player1_ch == "ножницы"){
		choice1.style.background = "url(2.jpeg)"
		choice1.style.backgroundSize = "100% 100%"
	}
	else if(player1_ch == "бумага"){
		choice1.style.background = "url(3.webp)"
		choice1.style.backgroundSize = "100% 100%"
	}

	if(player2_ch == "камень"){
		choice2.style.background = "url(1.png)"
		choice2.style.backgroundSize = "100% 100%"
	}
	else if(player2_ch == "ножницы"){
		choice2.style.background = "url(2.jpeg)"
		choice2.style.backgroundSize = "100% 100%"
	}
	else if(player2_ch == "бумага"){
		choice2.style.background = "url(3.webp)"
		choice2.style.backgroundSize = "100% 100%"
	}
}

let finish = function(){
	if(player1_ch == player2_ch){
		info.innerHTML = "НИЧЬЯ"
		player1_sc = player1_sc + 1
		score1.innerHTML = player1_sc
		player2_sc = player2_sc + 1
		score2.innerHTML = player2_sc
	}

	else if(player1_ch == "камень" && player2_ch == "ножницы"){
		info.innerHTML = "1 win"
		player1_sc = player1_sc + 1
		score1.innerHTML = player1_sc
	}
	else if(player1_ch == "ножницы" && player2_ch == "бумага"){
		info.innerHTML = "1 win"
		player1_sc = player1_sc + 1
		score1.innerHTML = player1_sc
	}
	else if(player1_ch == "бумага" && player2_ch == "камень"){
		info.innerHTML = "1 win"
		player1_sc = player1_sc + 1
		score1.innerHTML = player1_sc
	}
	else{
		info.innerHTML = "2 win"
		player2_sc = player2_sc + 1
		score2.innerHTML = player2_sc
	}

}
let newRound = function(){
	player1 = true
	player2 = false
	choice1.style.background = "black"
	choice2.style.background = "black"
	info.innerHTML = "игрок 1 ходит"

	roundNumber = roundNumber + 1
	round.innerHTML = roundNumber
}