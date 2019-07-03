class Personagem {
    constructor() {
        this.sprite = null;
        this.kikada = 0.1;
        this.gravidade = 1000;
        this.player = null;
        this.largura = null;
        this.altura = null;
        this.considerarColisao = true;

        this.carregarKoala();

    }
    // criar personagem
    iniciar(player) {
        this.player = player;
        this.player.body.collideWorldBounds = true;
        this.player.body.bounce.y = this.kikada;
        this.player.body.gravity.y = this.gravidade;
        this.player.animations.add('andar', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10, true);
        this.player.animations.add('parado', [0], 10, true);
    }
    // moves
    esquerda() {
        this.player.body.velocity.x = -200;
        this.player.play('andar');
    }
    direita() {
        this.player.body.velocity.x = 200;
        this.player.play('andar');
    }
    cima() {
        this.player.body.velocity.y = -350;
        this.player.play('andar');
    }
    baixo() {
        this.player.body.velocity.y = 200;
        this.player.play('andar');
    }
    parar() {
        this.player.body.velocity.x = 0;
        this.player.play('parado');
    }
    carregarCao() {
        this.sprite = 'assets/cao4264.png';
        this.largura = 42;
        this.altura = 64;
    }
    carregarKoala() {
        this.sprite = 'assets/koala6062.png';
        this.largura = 60;
        this.altura = 59;
    }
    carregarCoelho() {
        this.sprite = 'assets/coelho4267.png';
        this.largura = 42;
        this.altura = 67;
    }
    remove() {
        this.player.kill();
    }
}
