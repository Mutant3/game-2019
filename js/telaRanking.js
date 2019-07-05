class telaRanking
{
    constructor()
    {
        this.input=null;
        this.texto=null;
        this.ranking=new Ranking();
        this.textocomranking=null;
        this.txtNome = null;
        this.txtPontos = null;
    }

    preload(){
        this.load.image('fundo', 'assets/menu.png');
        this.load.image('borda', 'assets/fases/borda2.png')


        this.load.image('jogar', 'assets/buttons/jogar.png')
        this.load.image('ranking', 'assets/buttons/showranking.png')
        this.load.image('salvar', 'assets/buttons/salvar.png')
        
        this.load.audio('click', 'assets/sounds/click.mp3', {
            instances: 1
        })

    }
    create()
    {
        this.game.add.sprite(0, 0, 'fundo');
        this.game.add.sprite(0, 0, 'borda');


        //Esse é o campo para habilitar o texto
        game.plugins.add(PhaserInput.Plugin);
        
        this.txtNome = this.add.inputField(250, 140,
        {
            
            font: '18px Arial',
                    fill: 'blue',
                    fillAlpha: 1,
                    fontWeight: 'bold',
                    forceCase: PhaserInput.ForceCase.upper,
                    width: 250,
                    max: 20,
                    padding: 8,
                    placeHolder: '           Digite seu nome',
                    textAlign: 'left',
                    zoom: true,
            
        }
        );

        this.txtPontos = this.add.inputField(278, 200,
        {
            font: '18px Arial',
                    fill: 'blue',
                    fillAlpha: 1,
                    fontWeight: 'bold',
                    width: 200,
                    max: 20,
                    padding: 8,
                    placeHolder: 'Digite os pontos',
                    textAlign: 'left',
                    zoom: true
        });

        const salvarBtn = game.add.button(game.world.centerX - 75, 260, 'salvar', null);
        const rankingBtn = game.add.button(game.world.centerX - 75, 380, 'ranking', this.exibir);
        const jogarBtn = game.add.button(game.world.centerX -75, 320, 'jogar', this.jogar);

        salvarBtn.inputEnabled = true;
        salvarBtn.events.onInputDown.add(this.salvar, this);

}

salvar()
{
   
    let nome, pontos;
    
    //pega os dados do input
    nome = this.txtNome.value;
    pontos = this.txtPontos.value;
 
    this.ranking.gravar(nome,pontos);

    alert("SALVO COM SUCESSO");
    
    game.state.start("Game")
 
}

jogar(){
    this.click = game.add.audio('click');
    this.click.play();
    game.state.start("Game")
}

exibir()
{
    this.click = game.add.audio('click');
    this.click.play();
    game.state.start('Ranking');
    
}

}