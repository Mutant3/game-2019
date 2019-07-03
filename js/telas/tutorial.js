class Tutorial {
    constructor() {

    }

    preload() {

    this.load.image('fundo', 'assets/tutorial.png');

    this.load.image('botão', 'assets/buttons/Exit.png')

    this.load.audio('click', 'assets/sounds/click.mp3', {
            instances: 1
        })


    }

    create() {
        this.game.add.sprite(0, 0, 'fundo');

        const exitBtn = game.add.button(game.world.centerX - 400, 540, 'botão', this.exit);

    }

    update() {

    }

    exit(){
        this.click = game.add.audio('click');
        this.click.play();
        game.state.start('Menu')
    }
}