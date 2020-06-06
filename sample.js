var turn = 0;
var fin = false;
function action(n){
    if(fin) return;
    var elem = document.getElementById('id' + n);
    if(elem.innerText === ''){
        if(turn % 2 === 0) elem.innerText = '○';
        else elem.innerText = '×';
        turn++;
    }
    check();
}

function check() {
    var a = document.getElementById('id' + 0).innerText;
    var b = document.getElementById('id' + 1).innerText;
    var c = document.getElementById('id' + 2).innerText;
    var d = document.getElementById('id' + 3).innerText;
    var e = document.getElementById('id' + 4).innerText;
    var f = document.getElementById('id' + 5).innerText;
    var g = document.getElementById('id' + 6).innerText;
    var h = document.getElementById('id' + 7).innerText;
    var i = document.getElementById('id' + 8).innerText;
    if(a !== '' && a === b && b === c) win();
    else if(d !== '' && d === e && e === f) win();
    else if(g !== '' && g === h && h === i) win();
    else if(a !== '' && a === d && d === g) win();
    else if(b !== '' && b === e && e === h) win();
    else if(c !== '' && c === f && f === i) win();
    else if(a !== '' && a === e && e === i) win();
    else if(c !== '' && c === e && e === g) win();
    if(turn === 9) draw();
}

function win() {
    var elem = document.getElementById('finish');
    var player = (turn % 2 === 0 ? '×' : '○');
    elem.innerHTML = '<h1>' + player + 'の勝ちです</h1>';
    fin = true;
}

function draw() {
    var elem = document.getElementById('finish');
    elem.innerHTML = '<h1>引き分けです</h1>';
    fin = true;
}

function clear1() {
    for(var i = 0; i < 9; i++){
        document.getElementById('id' + i).innerText = '';
    }
    turn = 0;
    fin = false;
    var elem = document.getElementById('finish');
    elem.innerText = '';
}