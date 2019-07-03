class Casa{
  constructor(){
    this.grupo = null;
    this.imagem = 'block1.png';
    this.imagem2 = 'block2.png';
    this.imagem3 = 'block3.png'

    this.nomeImagem = 'parte1'

  }
  iniciar(grupo){
    this.grupo = grupo;
    this.grupo.enableBody = true;
    this.grupo.physicsBodyType = Phaser.Physics.ARCADE;
  }
  add(x,y){
     var casa = this.grupo.create(x,y, this.nomeImagem);

     this.block = casa;
    }
    limpar(){ 
      this.grupo.forEach(casa => {
        casa.destroy();
      });
    }
    
    apagarBlcok(){
    this.block.destroy();
  }
  
}
