class Vida{
  constructor(){
    this.grupo = null;
    this.imagem = 'star.png';
    this.vida
    
  }
  iniciar(grupo){
    this.grupo = grupo;
    this.enableBody = true;
    this.grupo.physicsBodyType = Phaser.Physics.ARCADE;
  }
  add(x,y){
   this.vida = this.grupo.create(x,y,'vida'); 
  }
  remove(vida){
   this.vida.kill();
  }
}
