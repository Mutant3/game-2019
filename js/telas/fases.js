class Fases {
    constructor() {
    
        this.estrelas
    }

    preload() {

        this.load.image('estrela', 'assets/star.png');

       this.load.image('fundo', 'assets/fases/background.png');
       this.load.image('bordas', 'assets/fases/bordas.png')
       this.load.image('text', 'assets/fases/fasetext.png')
       this.load.image('quadros', 'assets/fases/quadros.png')

       this.load.image('botão', 'assets/buttons/Exit.png')

       //fases
        this.load.image('fase1', 'assets/fases/fase1.png')
        this.load.image('fase2', 'assets/fases/fase2.png')
        this.load.image('fase3', 'assets/fases/fase3.png')


        this.load.audio('click', 'assets/sounds/click.mp3', {
            instances: 1
        })


    }

    create() {
        this.game.add.sprite(0, 0,'fundo');

        this.estrelas = game.add.group();   
        this.estrelas.enableBody = true;

        
        this.game.add.sprite(0, 0, 'bordas');
        
        game.time.events.repeat(Phaser.Timer.SECOND * 0.1, 10, this.carregarEstrelas, this);
        
        const exitBtn = game.add.button(game.world.centerX - 400, 540, 'botão', this.exit);
        

        game.add.text(100, 270, 'A fase só pode ser escolhida uma vez pro sessão.', { fontSize: '25px', fill: 'blue' });

        //Botões Fases
        const fase1Btn = game.add.button(game.world.centerX - 315, 44, 'fase1', this.fase1);
        const fase2Btn = game.add.button(game.world.centerX  +48, 37, 'fase2', this.fase2);
        const fase3Btn = game.add.button(game.world.centerX - 315, 334, 'fase3', this.fase3);

        
        this.game.add.sprite(0, 0, 'quadros');
        this.game.add.sprite(0, 0, 'text');
    }

    update() {

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

    exit() {
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Menu')
    }

    fase1(){
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Game')
    }

    fase2(){
        this.click = game.add.audio('click');
        this.click.play();
        fasesJogo = 2
        game.state.start('Game')
    }

    fase3() {
        this.click = game.add.audio('click');
        this.click.play();
        fasesJogo = 3
        game.state.start('Game')
    }
}