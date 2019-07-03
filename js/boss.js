class Boss{
  constructor(){
    this.sprite1 = 'assets/boss1.png';
    this.sprite2 = 'assets/boss2.png';
    this.sprite3 = 'assets/boss3.png';

    this.nomeImagem = 'boss';
    this.velocidade = 80;
    this.menosVelocidade = -80;

    this.boss = null;
    this.largura = 60;
    this.altura = 62;
    

    
  }
    // criar personagem
    iniciar(boss){
      this.boss = boss;
      this.boss.body.bounce.setTo(1, 1);

      this.boss.enableBody = true;
      this.boss.physicsBodyType = Phaser.Physics.ARCADE
      this.boss.body.collideWorldBounds = true;

      if (this.boss.body.collideWorldBounds){
        this.boss.body.velocity.x = this.menosVelocidade;
      }
      else{
        this.boss.body.velocity.x = this.velocidade;
      }

      this.boss.body.bounce.y = this.jump;
  
    }
   

    remove(){
      this.boss.kill();
    }

    
  }
