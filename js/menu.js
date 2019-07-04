class Menu {
    constructor(){

        this.estrelas
        this.click
    }
    init() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
    }

    preload(){
        this.load.image('fundo','assets/menu.png');
        this.load.image('estrela', 'assets/bluestar.png');

        this.load.audio('click', 'assets/sounds/click.mp3', {
            instances: 1
        })


        //butons
        this.load.image('start', 'assets/buttons/start.png');
        this.load.image('config', 'assets/buttons/config.png');
        this.load.image('tutorial', 'assets/buttons/tutorial.png');
        this.load.image('fases', 'assets/buttons/fases.png');
        this.load.image('loja', 'assets/buttons/loja.png');
        this.load.image('ranking', 'assets/buttons/ranking.png');




      }
    create(){
        this.game.add.sprite(0,0,'fundo');
        
        
        
        this.estrelas = game.add.group();   ///faz as estrelas colledirem
        this.estrelas.enableBody = true;

        const startBtn = game.add.button(game.world.centerX - 81, 245, 'start', this.start);
        const configBtn = game.add.button(game.world.centerX - 86, 325, 'config', this.config);
        const tutorialBtn = game.add.button(game.world.centerX - 86, 400, 'tutorial', this.tutorial);
        const fasesBtn = game.add.button(game.world.centerX -260, 325, 'fases', this.fases);
        const lojaBtn = game.add.button(game.world.centerX +90, 324, 'loja', this.loja);
        const rankingBtn = game.add.button(game.world.centerX -85, 170, 'ranking', this.ranking);
        

        
        game.time.events.repeat(Phaser.Timer.SECOND * 0.5, 10, this.carregarEstrelas, this);

        alert('O Game e sons funcionam corretamente no FIREFOX!');
    }
    
    update(){
    }
    
    
    start(){
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('telaCadastro')        
    }
    
    config(){
        this.click = game.add.audio('click');
        this.click.play();
        game.add.text(400, 300, 'em desenvolvimento', { fontSize: '25px', fill: 'black' });
    }

    tutorial(){
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Tutorial')
    }

    fases(){
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Fases')
    }

    ranking(){
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Ranking')
    }

    loja(){
        this.click = game.add.audio('click');
        this.click.play();
        game.add.text(400, 100, 'em desenvolvimento', { fontSize: '25px', fill: 'black' });
    }


    carregarEstrelas() {
    for (let i = 0; i < 1; i++) {
        let e = this.estrelas.create(Math.random() * 700, Math.random() * 100 * -8, 'estrela');
        e.body.gravity.y = Math.random() * (100 - 60) + 60;
        e.body.collideWorldBounds = true;
        e.body.velocity.x = Math.random() * (200 - (-200)) + (-200);
        e.body.bounce.setTo(1,1);

    }
 }

}
