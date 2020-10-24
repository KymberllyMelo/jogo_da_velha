let partida = 0;
let firstPlayer = '';
let nom_jogador_atual = '';
let id_partida = '';

function jogadorAtual(firstPlayer){
    if(partida % 2 == 0){
        nom_jogador_atual = $(`#${firstPlayer}`).val();
        return firstPlayer
    }
    firstPlayer = firstPlayer == 'X' ? 'O' : 'X';
    nom_jogador_atual = $(`#${firstPlayer}`).val();
    return firstPlayer
}


function verificaNomeJogadores(){
    if(!$('#X').val().trim().length){
        alert('Necessário preencher o nome do Jogador 1.');
        return false
    }
    if(!$('#O').val().trim().length){
        alert('Necessário preencher o nome do Jogador 2.');
        return false
    }
    return true
}


function comecaJogada(){
    if(!verificaNomeJogadores())
        return

    partida = 0;
    $('#configuracoes_iniciais').css('display', 'none');
    $('#tabuleiro, #menu').css('display', 'flex');
    $('#tabuleiro tr td').removeClass().css("pointer-events", "auto");

    $.ajax({
        url: '/game',
        type:'POST',
    }).done((retorno) => {
        id_partida = retorno.id;
        firstPlayer = retorno.firstPlayer;

        $('.id_jogo').html(id_partida);
        $('.jogador_atual').html($(`#${firstPlayer}`).val());

    }).fail((retorno) => {
        alert('Falha ao iniciar partida, tente novamente!');
    });
}


function marcaJogada(jObj, player){
    partida++;
    jogadorAtual(firstPlayer);
    classeQuadro = player == 'X' ? 'marcaX' : 'marcaO';
    $('.jogador_atual').html(nom_jogador_atual);
    jObj.css("pointer-events", "none").addClass(classeQuadro);
}


function realizaJogada(obj){
    const jObj = $(obj);
    const player = jogadorAtual(firstPlayer);

    data = {
        'id': id_partida,
        'player': player,
        'position': {'x': jObj.attr('x'), 'y': jObj.attr('y')}
    }

    $.ajax({
        url: `/game/${id_partida}/movement`,
        dataType:'json',
        type:'POST',
        headers:{'Content-Type': 'application/json'},
        data: JSON.stringify(data)
    }).done((retorno) => {
        if(retorno.msg)
            return alert(retorno.msg);

        marcaJogada(jObj, player);

        vencedor = retorno.winner;
        if(vencedor){
            if(vencedor == 'Draw')
                mensagem = 'Jogo finalizou em Empate!';
            else
                mensagem = `Jogador ${$(`#${vencedor}`).val().toUpperCase()} ganhou o jogo`;

            if(confirm(`${mensagem}. Deseja iniciar uma nova partida?`))
                comecaJogada();
            else
                $('#tabuleiro tr td').css("pointer-events", "none");
        }

    }).fail((retorno) => {
        alert('Falha ao realizar jogada, tente novamente!');
    });
}