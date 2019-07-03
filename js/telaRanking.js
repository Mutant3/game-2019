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
    create()
    {
        this.stage.backgroundColor = '#806000';
        this.add.text(10,10, "Documentação: https://github.com/azerion/phaser-input");
        //Esse é o campo para habilitar o texto
        game.plugins.add(PhaserInput.Plugin);
        
        this.txtNome = this.add.inputField(10, 90,
        {
            font: '18px Arial',
                    fill: '#ffffff',
                    fillAlpha: 0,
                    fontWeight: 'bold',
                    forceCase: PhaserInput.ForceCase.upper,
                    width: 300,
                    max: 20,
                    padding: 8,
                    placeHolder: 'Digite seu nome',
                    textAlign: 'left',
                    zoom: true
        });

        this.txtPontos = this.add.inputField(400, 90,
        {
            font: '18px Arial',
                    fill: '#ffffff',
                    fillAlpha: 0,
                    fontWeight: 'bold',
                    width: 300,
                    max: 20,
                    padding: 8,
                    placeHolder: 'Digite os pontos',
                    textAlign: 'left',
                    zoom: true
        });

        var btnsalvar = this.add.text(50,150, "SALVAR");
        var btnrnk = this.add.text(200,150," VER RANKING");

        btnsalvar.inputEnabled = true;
        btnsalvar.events.onInputDown.add(this.salvar, this);

        btnrnk.inputEnabled = true;
        btnrnk.events.onInputDown.add(this.exibir, this);

        this.textocomranking=this.add.text(10,300, "");

}

salvar()
{
   
    let nome, pontos;
    
    //pega os dados do input
    nome = this.txtNome.value;
    pontos = this.txtPontos.value;
 
    this.ranking.gravar(nome,pontos);

    alert("SALVO COM SUCESSO");
 
    game.state.start("Menu")
}

exibir()
{
    let lista;
    
     lista = this.ranking.lista;
        this.textocomranking.text = "RANKING\n";
        for(let i=0;i<lista.length;i++)
        {
            this.textocomranking.text +=lista[i].nome + " -  " + lista[i].pontos + "\n";
        }
    
}

}