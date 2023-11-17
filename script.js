const celula1 = document.getElementById("celula1");
celula1.onclick = function(evento) { 
    jogada(evento.target)
}

const celula2 = document.getElementById("celula2");
celula2.onclick = function(evento) { 
    jogada(evento.target)
}

const celula3 = document.getElementById("celula3");
celula3.onclick = function(evento) { 
    jogada(evento.target)
}

const celula4 = document.getElementById("celula4");
celula4.onclick = function(evento) { 
    jogada(evento.target)
}

const celula5 = document.getElementById("celula5");
celula5.onclick = function(evento) { 
    jogada(evento.target)
}

const celula6 = document.getElementById("celula6");
celula6.onclick = function(evento) { 
    jogada(evento.target)
}

const celula7 = document.getElementById("celula7");
celula7.onclick = function(evento) { 
    jogada(evento.target)
}

const celula8 = document.getElementById("celula8");
celula8.onclick = function(evento) { 
    jogada(evento.target)
}

const celula9 = document.getElementById("celula9");
celula9.onclick = function(evento) { 
    jogada(evento.target)
}
let jogadorAtual = 'X';
let vencedor = false;

function jogada(celulaClicada){
    if(vencedor !== false){
        alert('Jogo já terminou :(');
        return;
    }

    if( celulaClicada.innerHTML != '' ) {
        alert('Celula já jogada!');
        return;
    }
    
    celulaClicada.innerHTML = jogadorAtual;
    vencedor = verificaVencedor();
    if(vencedor !== false && vencedor != ''){
        alert(`O vencedor é ${vencedor}`);
        return;
    }
    if (vencedor === ''){
        alert('Nenhum vencedor!');
        return;
    }

    if( jogadorAtual == 'X' ) {
        jogadorAtual = '○';
    } else {
        jogadorAtual = 'X';
    }
    alert(`O proximo jogador é ${jogadorAtual}.`)

}

function verificaVencedor() {
    if(celula1.innerHTML != '' && celula1.innerHTML == celula2.innerHTML && celula1.innerHTML == celula3.innerHTML){
        return celula1.innerHTML;
        
    }
    if(celula4.innerHTML != '' && celula4.innerHTML == celula5.innerHTML && celula4.innerHTML == celula6.innerHTML){
        return celula4.innerHTML;

    }

    if(celula7.innerHTML != '' && celula7.innerHTML == celula8.innerHTML && celula7.innerHTML == celula9.innerHTML){
        return celula7.innerHTML;
         
    }
    if(celula1.innerHTML != '' && celula1.innerHTML == celula5.innerHTML && celula1.innerHTML == celula9.innerHTML){
        return celula1.innerHTML;
        
    }
    if(celula2.innerHTML != '' && celula2.innerHTML == celula5.innerHTML && celula2.innerHTML == celula8.innerHTML){
        return celula2.innerHTML;
        
    }
    if(celula3.innerHTML != '' && celula3.innerHTML == celula5.innerHTML && celula3.innerHTML == celula7.innerHTML){
        return celula3.innerHTML;
        
    }

    if(celula3.innerHTML != '' && celula3.innerHTML == celula6.innerHTML && celula3.innerHTML == celula9.innerHTML){
        return celula3.innerHTML;
    }

    if(celula1.innerHTML != '' && celula2.innerHTML != '' && celula3.innerHTML != '' && celula4.innerHTML != '' && celula5.innerHTML != '' && celula6.innerHTML != '' && celula7.innerHTML != '' && celula8.innerHTML != '' && celula9.innerHTML != ''){
        return '';
    }
    return false;
}


function resetarPartida(){
    celula1.innerHTML = '';
    celula2.innerHTML = '';
    celula3.innerHTML = '';
    celula4.innerHTML = '';
    celula5.innerHTML = '';
    celula6.innerHTML = '';
    celula7.innerHTML = '';
    celula8.innerHTML = '';
    celula9.innerHTML = '';
    vencedor = false;
}

