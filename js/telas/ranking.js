class Ranking {
    constructor() {
        if (localStorage.getItem("ranking") == null) {
            this.lista = Array();
        }
        else {
            let rankingDoStorage = localStorage.getItem("ranking");
            this.lista = JSON.parse(rankingDoStorage);
        }
    }

    preload() {
        this.load.image('fundo', 'assets/fases/background.png');
        this.load.image('bordas', 'assets/fases/bordas.png')
        this.load.image('tabela', 'assets/fases/rankingtable.png')
        this.load.image('quadro', 'assets/fases/ranking.png')

        this.load.image('estrela', 'assets/bluestar.png');


        this.load.image('botão', 'assets/buttons/Exit.png')

        this.load.audio('click', 'assets/sounds/click.mp3', {
            instances: 1
        })
    }

    create() {

        this.game.add.sprite(0, 0, 'fundo');
        this.estrelas = game.add.group();   ///faz as estrelas colledirem
        this.estrelas.enableBody = true;
        game.time.events.repeat(Phaser.Timer.SECOND * 0.2, 10, this.carregarEstrelas, this);

        this.game.add.sprite(0, 0, 'bordas');
        this.game.add.sprite(0, 0, 'tabela');
        this.game.add.sprite(0, 0, 'quadro');

        const exitBtn = game.add.button(game.world.centerX - 400, 540, 'botão', this.exit);

        this.msg1 = game.add.text(190, 49, "Jogadores", { fontSize: '21px', fill: 'blue', });
        this.msg2 = game.add.text(560, 49, "Pts", { fontSize: '21px', fill: 'blue', });

        this.nome = game.add.text(190, 75, "", { fontSize: '21px', fill: 'black', });
        this.pts = game.add.text(560, 75, "", { fontSize: '21px', fill: 'black', });

    

        // for (let i = 0; i < this.lista.length; i++) {
        //     for(let i2 = 0; i2 < this.lista.length; i2++){
        //         if(this.lista[i].pontos < this.lista[i2].pontos){
        //             this.lista[i].nome = this.lista[i2].nome;
        //             this.lista[i].pontos = this.lista[i2].pontos;
        //             i++;
        //         }
        //     }
        // this.nome.text += this.lista[i].nome + "\n";
        // this.pts.text += this.lista[i].pontos + "\n";
        // }

        this.lista.sort(this.ordenar);

        for (let i = 0; i < this.lista.length; i++) {
            this.nome.text += this.lista[i].nome + "\n";
            this.pts.text += this.lista[i].pontos + "\n";
        }

        // this.nome.text += this.lista[i].nome + "\n";
        // this.pts.text += this.lista[i].pontos + "\n";
        

        


    }

    update() {

    }



    exit() {
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Menu')
    }

    carregarEstrelas() {
        for (let i = 0; i < 1; i++) {
            let e = this.estrelas.create(Math.random() * 700, Math.random() * 100 * -8, 'estrela');
            e.body.gravity.y = Math.random() * (100 - 60) + 60;
            e.body.collideWorldBounds = true;
            e.body.velocity.x = Math.random() * (200 - (-200)) + (-200);
            e.body.bounce.setTo(1, 1);
    
        }
    }

    ordenar (a, b) {
    if (a.pontos > b.pontos)
        return -1;
    if (a.pontos < b.pontos)
        return 1;
    return 0;
}
    gravar(nome, pontos) {
        //Monta a pontuação
        let p = new Pontuacao();
        p.nome = nome;
        p.pontos = parseInt(pontos);
        //adiciona ao array
        this.lista.push(p);
        //atualiza o storage
        let rankingDoStorage = JSON.stringify(this.lista);
        localStorage.setItem("ranking", rankingDoStorage);
    }
}

class Pontuacao {
    constructor() {
        this.pontos = 0;
        this.nome = null;


        }
    }
 
