class Plataforma{
  constructor(){
    this.grupo = null;
    this.imagem1 = 'plataform1.png';
    this.imagem2 = 'plataform2.png';
    this.imagem3 = 'plataform3.png';
    this.nomeImagem = 'plataforma1';
    this.velocidade = 60;
    this.menosVelocidade = -60;
    this.aleatorio = 1;
    this.VD = 1; // direção da velocidade, 1=direita e 0=esquerda.

  }
  iniciar(grupo){
    this.grupo = grupo;
    this.grupo.enableBody = true;
    this.grupo.physicsBodyType = Phaser.Physics.ARCADE;
  }
  add(x,y){
    var plataforma = this.grupo.create(x,y, this.nomeImagem);
    plataforma.checkWorldBounds = true;
    plataforma.events.onOutOfBounds.add(this.remove, this);
    if (this.aleatorio<=1) {
      plataforma.body.velocity.x = this.velocidade;
      this.VD=1;
    }
    else if(this.aleatorio>1){
      plataforma.body.velocity.x = this.menosVelocidade;
      this.VD=0;
    }
    plataforma.body.immovable = true;
  }
  // andar(plataforma){
  //   var a;
  //   a = Math.random()*2;
  //   if(a<=1){
  //     plataforma.reset(-100,plataforma.y);
  //     plataforma.body.velocity.x = this.velocidade;
  //     this.VD=1;
  //   }
  //   else{
  //     plataforma.reset(800,plataforma.y);
  //     plataforma.body.velocity.x = this.menosVelocidade;
  //     this.VD=0;
  //   }
  // }
  inverter(plataforma){
    if (this.VD==1) {
      plataforma.body.position.x = this.menosVelocidade;
      this.VD=0;
    }
    else {
      plataforma.body.position.x = this.velocidade;
      this.VD=1;
    }
  }

  remove(plataformas){
    plataformas.destroy();
  }

}
