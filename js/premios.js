class Premio{
  constructor(){
    this.grupo = null;
    this.imagem = 'pequeno.png';
    this.velocidade = 50;
    this.menosVelocidade = -50;
    this.aleatorio = Math.random()*3;
  }
  iniciar(grupo){
    this.grupo = grupo;
    this.grupo.enableBody = true;
    this.grupo.physicsBodyType = Phaser.Physics.ARCADE;
  }
  add(x,y){
    var premio = this.grupo.create(x,y,'premio');
    premio.checkWorldBounds = true;
    premio.events.onOutOfBounds.add(this.remove, this);
    if(this.aleatorio<=1.5){
      premio.body.velocity.x = this.velocidade;
    }
    else if(this.aleatorio>1.5){
      premio.body.velocity.x = this.menosVelocidade;
    }
  }
  andar(premio){
    var a;
    a = Math.random()*2;
    if (a<=1) {
      premio.reset(0,premio.y);
      premio.body.velocity.x = this.velocidade;
    }
    else{
      premio.reset(800,premio.y);
      premio.body.velocity.x = this.menosVelocidade;
    }
  }
  remove(premio){ 
    premio.destroy();
  }
}
