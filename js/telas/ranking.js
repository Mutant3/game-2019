class Ranking{
    constructor(){
        if(localStorage.getItem("ranking")==null)
        {
            this.lista = Array();   
        }
        else
        {
            let rankingDoStorage = localStorage.getItem("ranking");
            this.lista = JSON.parse(rankingDoStorage);
        }
    }

    preload(){
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

    create(){

        this.game.add.sprite(0, 0, 'fundo');
        this.estrelas = game.add.group();   ///faz as estrelas colledirem
        this.estrelas.enableBody = true;
        game.time.events.repeat(Phaser.Timer.SECOND * 0.2, 10, this.carregarEstrelas, this);

        this.game.add.sprite(0, 0, 'bordas');
        this.game.add.sprite(0, 0, 'tabela');
        this.game.add.sprite(0, 0, 'quadro');

        const exitBtn = game.add.button(game.world.centerX - 400, 540, 'botão', this.exit);

   
        this.contagem = game.add.text(400, 300, "", { fontSize: '25px', fill: 'white'});
        for(let i=0;i<this.lista.length;i++)
        {
            this.contagem.text +=this.lista[i].nome + " -  " + this.lista[i].pontos + "\n";
        }
        
       


    }

    update(){
        
    }



    exit() {
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Menu')
    }

<<<<<<< HEAD
    gravar(nome, pontos)
    {
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
class Pontuacao
{
    constructor()
    {
        this.pontos = 0;
        this.nome = null;
=======

    carregarEstrelas() {
        for (let i = 0; i < 1; i++) {
            let e = this.estrelas.create(Math.random() * 700, Math.random() * 100 * -8, 'estrela');
            e.body.gravity.y = Math.random() * (100 - 60) + 60;
            e.body.collideWorldBounds = true;
            e.body.velocity.x = Math.random() * (200 - (-200)) + (-200);
            e.body.bounce.setTo(1, 1);

        }
>>>>>>> 333713d38b4cc639259f4a52398f0adb857f7648
    }
}