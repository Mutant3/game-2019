class Inimigo{
  constructor(){
    this.grupo = null;
    this.imagem1 = "Inimigo_1.png";
    this.imagem2 = "Inimigo_11.png";
    this.imagem3 = "Inimigo_9.png";

    this.velocidade = 60;
    this.menosVelocidade = -60;
    this.aleatorio = Math.random()*2;
    this.nomeImagem = 'inimigo1';
  }

  iniciar(grupo){
    this.grupo = grupo;
    this.grupo.enableBody = true;
    this.grupo.physicsBodyType = Phaser.Physics.ARCADE;
  }
  add(x,y){
    var inimigo = this.grupo.create(x,y, this.nomeImagem);
    inimigo.checkWorldBounds = true;

    inimigo.events.onOutOfBounds.add(this.remove, this);
    
    if(this.aleatorio<=1){
      inimigo.body.velocity.x = this.velocidade;
    }
    else if(this.aleatorio>1){
      inimigo.body.velocity.x = this.menosVelocidade;
    }
  }
  andar(inimigo){
    var a;
    a = Math.random()*2;
    if (a<=1) {
      inimigo.reset(0,inimigo.y);
      inimigo.body.velocity.x = this.velocidade;
    }
    else{
      inimigo.reset(800,inimigo.y);
      inimigo.body.velocity.x = this.menosVelocidade;
    }
  }
  remove(inimigo){ 
    inimigo.destroy();
  }
}
