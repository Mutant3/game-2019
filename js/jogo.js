class Jogo {
    constructor() {
        this.nFase = 1;
        this.cF = 1;        // controlador final
        this.cY = 3;          // coluna Y
        this.lX = 1;           // linha X
        this.pxC = 650;      // posição X casa
        this.pyC = 70;      // posição Y casa
        this.cVidas = 0;
        this.cursors = null;
        this.piso = null;
        this.lava = null;
        this.player = null;
        this.player2 = null;

        //grupos
        this.grupoPlataformas = null; 
        this.grupoInimigos = null;
        this.grupoPremios = null;
        this.grupoVidas = null;
        this.grupoCasa = null;
       
        this.contagem = null;
        this.colideplataforma = null;
        this.colideplataforma2 = null;
        this.considerarColisao = null;
        this.considerarColisao2 = true;
        this.colidepiso2 = null;
        this.colidepiso = null;
        this.H = null;
        this.quantidade = 5;

        this.W = null;
        this.A = null;
        this.S = null;
        this.D = null;
        this.R = null;
        this.clickR = 0;
        this.Q = null;

        this.timer = null
        this.contagemTimer = 0;

        this.contagemVidas = null;
        this.vida = 5;
        this.pontos = 0;
        this.limite = 0; // probalidade de aparecer premios ou inimigos
        this.multiInimigos = 1.2;
        this.multiPremios = 2.3;
        this.random = Math.random()*4;
        this.imagem = null;
        this.nPlataformas = 10;
        this.plataformasX = 0;
        this.plataformasX2 = 150
        this.plataformasX3 = 300

        //classes         
        this.personagem = new Personagem(); 
        this.inimigos = new Inimigo();
        this.boss = new Boss();
        this.premios = new Premio();
        this.plataformas = new Plataforma();
        this.vidas = new Vida();
        this.casas = new Casa();
       
        
              
      }

    init() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
    }
    preload() {
       //SKINS PERSONAGEM
       this.load.spritesheet('personagem', this.personagem.sprite, this.personagem.largura, this.personagem.altura);

      this.load.image('botão', 'assets/buttons/Exit.png')


       //boss
       this.load.spritesheet('boss', this.boss.sprite1, this.boss.largura, this.boss.altura)
       this.load.spritesheet('boss2', this.boss.sprite2, this.boss.largura, this.boss.altura)
       this.load.spritesheet('boss3', this.boss.sprite3, this.boss.largura, this.boss.altura)


       //SKINS PLATAFORMA
       this.load.image('plataforma1', 'assets/' + this.plataformas.imagem1);
       this.load.image('plataforma2', 'assets/' + this.plataformas.imagem2);
       this.load.image('plataforma3', 'assets/' + this.plataformas.imagem3);

       
       //linha
       this.load.image('linha1', 'assets/linha1.png');
       this.load.image('linha2', 'assets/linha2.png');
       this.load.image('linha3', 'assets/linha3.png');


       this.load.image('lava','assets/fogo.png');
       this.load.image('porta','assets/DoorOpen.png');


        //fundo
       this.load.image('fundo1', 'assets/background1.png');
       this.load.image('fundo2', 'assets/background2.png');
       this.load.image('fundo3', 'assets/background3.png');

        //inimigos
       this.load.image('inimigo1', 'assets/' + this.inimigos.imagem1);
       this.load.image('inimigo2','assets/'+this.inimigos.imagem2);
       this.load.image('inimigo3', 'assets/' + this.inimigos.imagem3);

       //casa
       this.load.image('parte1','assets/'+this.casas.imagem);
       this.load.image('parte2', 'assets/' + this.casas.imagem2);
       this.load.image('parte3', 'assets/' + this.casas.imagem3);


        this.load.image('premio','assets/'+this.premios.imagem);
        this.load.image('vida','assets/'+this.vidas.imagem);
    }
    create() {

        // cursors
        this.cursors = this.input.keyboard.createCursorKeys();
        
        this.A = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.D = game.input.keyboard.addKey(Phaser.Keyboard.D);
        this.W = game.input.keyboard.addKey(Phaser.Keyboard.W);
        this.S = game.input.keyboard.addKey(Phaser.Keyboard.S);
        this.R = game.input.keyboard.addKey(Phaser.Keyboard.R);
        this.Q = game.input.keyboard.addKey(Phaser.Keyboard.Q);

      
        
        // fundo
        this.imagem3 = this.game.add.sprite(0, 0, 'fundo3')
        this.imagem2 = this.game.add.sprite(0, 0, 'fundo2')
        this.imagem1 = this.game.add.sprite(0,0, 'fundo1')
        
        
        this.contagem = game.add.text(400, 300, 'FASE 1', { fontSize: '25px', fill: 'white' });




        // chão
        this.piso = game.add.group();
        this.piso.enableBody = true;
        this.p3 = this.piso.create(0, 100, 'linha3');
        this.p3.body.immovable = true;

        this.p2 = this.piso.create(0, 100, 'linha2');
        this.p2.body.immovable = true;

        this.p1 = this.piso.create(0, 100, 'linha1');
        this.p1.body.immovable = true;

        

        // água
        this.lava = game.add.group();
        this.lava.enableBody = true;
        var a = this.lava.create(0, 570, 'lava');
        a.body.immovable = true;
        a.scale.setTo(4,1)

        // criação personagem
        this.player = this.add.sprite(378, 0, 'personagem');
        this.physics.arcade.enable(this.player);
        this.personagem.iniciar(this.player);

        //boss 
       this.player2 = this.add.sprite(100, 40, this.boss.nomeImagem);
       this.physics.arcade.enable(this.player2);
       this.boss.iniciar(this.player2);

        // casinha
        this.grupoCasa = this.add.physicsGroup();
        this.casas.iniciar(this.grupoCasa);

        // plataformas
        this.grupoPlataformas = this.add.physicsGroup();
        this.plataformas.iniciar(this.grupoPlataformas);

        // vidas
        this.grupoVidas = this.add.physicsGroup();
        this.vidas.iniciar(this.grupoVidas);

        //  inimigos
        this.grupoInimigos = this.add.physicsGroup();
        this.inimigos.iniciar(this.grupoInimigos);
       

        // Premios
        this.grupoPremios = this.add.physicsGroup();
        this.premios.iniciar(this.grupoPremios);

      const exitBtn = game.add.button(game.world.centerX - 400, 540, 'botão', this.exit);


        // criação e probalidade inimigos e premios
        // for(this.limite=0; this.limite<=5; this.limite++){
        //   this.random = Math.random()*4;
        //   if(this.random < 2){
        //     this.inimigos.add(Math.floor(Math.random() * (600 - 100)) + 100, this.multiInimigos * 100, this.inimigos.nomeImagem);
        //     this.multiInimigos++;
        //   }
        //   else{
        //     this.premios.add(Math.floor(Math.random() * (600 - 100)) + 100, this.multiPremios * 100, 'premio');
        //     this.multiPremios++;
        //   }
        // }
        // criação plataformas
      // for (var i = 1; i < 15; i++) {
      //   this.plataformas.add(800, Math.round(Math.random() * (150 - 550) / 70) * 70 + 550, 'plataforma1');
      // }

        
      
      
        // criação vidas
        for (this.cVidas = 0; this.cVidas < 5; this.cVidas++) {
            this.vidas.add(this.cVidas*30,20, 'vida');
        }


      if (fasesJogo == 2) {
        this.fase2();
      }
      else if (fasesJogo == 3) {
        this.fase3();
      }
      else {

      } 

        }


    update() {



      //colisão player1
        if (this.considerarColisao == true) {
            this.colidepiso = this.physics.arcade.collide(this.player, this.piso);
            this.colideplataforma =  this.physics.arcade.collide(this.player, this.grupoPlataformas);
        }



        // colisões
        this.physics.arcade.overlap(this.player, this.grupoPremios, this.pegarPremio, null, this);
        this.physics.arcade.collide(this.player, this.grupoInimigos, this.matarInimigo, null, this);
        this.physics.arcade.collide(this.player, this.player2, this.collideBoss, null, this);
        this.physics.arcade.overlap(this.player, this.porta, this.calcFases, null, this);
        this.physics.arcade.overlap(this.player, this.lava, this.caiulava, null, this);

        //Andar nas flechas
        if (this.cursors.left.isDown) {
            this.personagem.esquerda();
        }
        else if (this.cursors.right.isDown) {
            this.personagem.direita();
        }
        else if (this.cursors.up.isDown && (this.colideplataforma || this.colidepiso)) {
            this.personagem.cima();
            this.considerarColisao = false;
        }
        else if (this.cursors.down.isDown) {
          this.personagem.baixo();
          this.considerarColisao = false;
        }

        //inverter plataformas e verificar os clicks
        else if(this.R.isDown){
          if(this.clickR < 1){
            // this.plataformas.grupo.children.length = 0;
            this.plataformasX = 800;
            this.plataformasX2 = 650;
            this.plataformasX3 = 500;
            this.plataformas.aleatorio = 2
            this.clickR ++
          }
          else if(this.clickR == 1){
            // this.plataformas.grupo.children.length = 0;
            this.plataformasX = 0;
            this.plataformasX2 = 150
            this.plataformasX3 = 300
            this.plataformas.aleatorio = 1;
            this.clickR = 0

          }
        }

      else if(this.Q.isDown){
          location.reload();
          game.state.start('Game')
      }
        //Andar WASD
      else if (this.A.isDown) {
        this.personagem.esquerda();
      }
      else if (this.D.isDown) {
        this.personagem.direita();
      }
      else if (this.W.isDown && (this.colideplataforma || this.colidepiso)) {
        this.personagem.cima();
        this.considerarColisao = false;
      }
      else if (this.S.isDown) {
        this.personagem.baixo();
        this.considerarColisao = false;
      }
      else {
        this.personagem.parar();
        this.considerarColisao = true;
      }

        
        // if (this.H.isDown) {
        // // this.plataformas.andar();
        // }


        // matar personagem
        if (this.vida==0) {
          this.personagem.remove();
          game.add.text(80, 150, 'GAME OVER!! :/, aperte Q para recomeçar', { fontSize: '30px', fill: 'red' });

        }

        // vida
        if (this.cVidas==4) {
          this.grupoVidas.position.x = -30;
        }
        else if (this.cVidas==3){
          this.grupoVidas.position.x = -60;
        }
        else if (this.cVidas==2) {
          this.grupoVidas.position.x = -90;
        }
        else if (this.cVidas==1) {
          this.grupoVidas.position.x = -120;
        }
        else if (this.cVidas==0) {
          this.grupoVidas.position.x = -150;
        }
        
        // coluna casa
        if (this.cY==3) {
          this.pyC=65;
        }
        else if (this.cY==2) {
          this.pyC=45;
        }
        else if (this.cY==1) {
          this.pyC=25;
        }
        else if (this.cY==0) {
          this.lX=2;
          this.pyC=5;
          this.cY--;
        }
        else if (this.cY==-1) {
          if (this.lX>5) {
            this.lX=2;
            this.cY--;

            this.porta = game.add.group();
          	this.porta.enableBody = true;
          	this.door = this.porta.create(697,30,'porta');
            this.door.body.immovable = true;
            
          }
        }
        else if (this.cY==-2) {
          this.cF=0;
        }

        //casa
        if (this.lX==1) {
          this.pxC=650;
        }
        else if (this.lX==2) {
          this.pxC=670;
        }
        else if (this.lX==3) {
          this.pxC=690;
        }
        else if (this.lX==4) {
          this.pxC=710;
        }
        else if (this.lX==5) {
          this.pxC=730;
        }
        else if (this.lX==6) {
          this.pxC=750;
        }
        // limitador X casa
        if (this.lX>6) {
          this.cY--;
          this.lX=1;
        }


          ///                              reset                           ///
        if(this.premios.grupo.children.length + this.inimigos.grupo.children.length < 5){
          this.random = Math.random()*2;
          var lado = Math.random()*2;
          if(this.random<1.5){
            if(lado<1){
              this.inimigos.aleatorio = 0.5;
              this.inimigos.add(0, Math.round(Math.random() * (140 - 550) / 160) * 160 + 550, this.inimigos.nomeInimigo);
            }
      
            else{
              this.inimigos.aleatorio = 1.5;
              this.inimigos.add(800, Math.round(Math.random() * (140 - 550) / 160) * 160 + 550, this.inimigos.nomeInimigo);
            }
          }
          else{
            if(lado<1){
              this.inimigos.aleatorio = 0.5;
              this.premios.add(0, Math.floor(Math.random() * (130 - 500) + 500), 'premio');
            }
            else{
              this.inimigos.aleatorio = 1.5;
              this.premios.add(800, Math.floor(Math.random() * (130 - 500) + 500), 'premio');
            }
          }

        }

      if (this.plataformas.grupo.children.length < 18) {
        // this.lado = Math.random() * 2;
        // if (this.lado < 1) {
  
          this.plataformas.add(this.plataformasX, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
         this.plataformas.add(this.plataformasX, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
         this.plataformas.add(this.plataformasX, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
        this.plataformas.add(this.plataformasX2, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
        this.plataformas.add(this.plataformasX3, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
          
          

        // }
        // else {
        //   // this.plataformas.add(800, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
        //   // this.plataformas.add(650, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');
        //   // this.plataformas.add(500, Math.round(Math.random() * (150 - 550) / 100) * 100 + 550, 'plataforma1');

        // }
      }



     
        

        // passar fase
        if (this.pontos==1) {
          game.state.start('Game2');
        }

        this.game.world.bringToTop(this.player);
        //this.contagem.text = this.lX + ' ' + this.cY;
    }
    // efeitos das colisões
    pegarPremio(personagem, grupoPremios){
      this.premios.andar(grupoPremios);
      this.pontos++;
      if (this.cF==1) {
        this.casas.add(this.pxC,this.pyC, this.casas.nomeImagem);
        this.lX++;

      }
    //  this.fase2()
    }
    // inimigos player
    matarInimigo(personagem, grupoInimigos){
      this.inimigos.andar(grupoInimigos);
      this.vida--;
      this.cVidas--;
      this.pontos--;
      // this.casas.apagarBlcok();
    }
    caiulava(personagem, lava){
      this.player.position.x=378;
      this.player.position.y=0;
      this.vida--;
      this.cVidas--;
    }

    collideBoss(personagem, player2){
      this.boss.remove();
      if (this.nFase == 1) {
        this.player2 = this.add.sprite(100, 40, 'boss');
        this.physics.arcade.enable(this.player2);
        this.boss.iniciar(this.player2);
      }
      else if (this.nFase == 2) {
        this.player2 = this.add.sprite(100, 40, 'boss2');
        this.physics.arcade.enable(this.player2);
        this.boss.iniciar(this.player2);
      }
      else{
        this.player2 = this.add.sprite(100, 40, 'boss3');
        this.physics.arcade.enable(this.player2);
        this.boss.iniciar(this.player2);
      }
      
      this.vida = 0;
      for(let i = 0; i<5; i++){
        this.cVidas --;

      }
      // this.pontos--;
       

      
    }

    

  


    calcFases(){
      if(this.nFase == 1){
        this.fase2();
      }
      else if(this.nFase == 2){
        this.fase3();
      }
    }

    fase2(){
      game.add.text(400, 300, 'FASE II', { fontSize: '25px', fill: 'white' });

      //inimigos
      this.inimigos.velocidade = 90;
      this.inimigos.menosVelocidade = 90;
      this.inimigos.nomeImagem = 'inimigo2';

      //boss
      this.boss.velocidade = 130;
      this.boss.menosVelocidade = -130
      this.boss.nomeBoss = 'boss2'
      this.boss.remove();
      this.player2 = this.add.sprite(100, 40, this.boss.nomeBoss);
      this.physics.arcade.enable(this.player2);
      this.boss.iniciar(this.player2);
      
      //fundo
      this.imagem1.destroy();

      //plataform
      this.plataformas.nomeImagem = 'plataforma2';

      //Piso
      this.p1.destroy();
      

      //casa
      this.casas.limpar();
      this.door.destroy(); //porta
      this.casas.limpar();
      this.casas.limpar();
      this.casas.limpar();
      this.casas.limpar();
      this.casas.nomeImagem = 'parte2'      

      //reset
      this.cF = 1;        // controlador final
      this.cY = 3;          // coluna Y
      this.lX = 1;           // linha X
      this.pxC = 650;      // posição X casa
      this.pyC = 70;      // posição Y casa
      this.cVidas = 0;
      this.vida = 7;
      this.pontos = 0;
      this.limite = 0; // probalidade de aparecer premios ou inimigos
      this.multiInimigos = 1.2;
      this.multiPremios = 2.3;
      this.random = Math.random() * 4;
      this.imagem = null;
      this.nPlataformas = 10;
      this.contagemVidas = null;
      this.quantidade = 7;

      this.grupoVidas = this.add.physicsGroup();
      this.vidas.iniciar(this.grupoVidas);

      //vidas
      for (this.cVidas = 0; this.cVidas < 5; this.cVidas++) {
        this.vidas.add(this.cVidas * 30, 20, 'vida');
      }

      this.nFase = 2

    }

    exit(){
      location.reload();
    }

    fase3(){
      game.add.text(400, 300, 'FASE III', { fontSize: '25px', fill: 'white' });
      //inimigos
      this.inimigos.velocidade = 110;
      this.inimigos.menosVelocidade = -110;
      this.inimigos.nomeImagem = 'inimigo3';

      //boss
      this.boss.velocidade = 250;
      this.boss.menosVelocidade = -250;
      this.boss.nomeBoss = 'boss3'
      this.boss.remove();
      this.player2 = this.add.sprite(100, 40, this.boss.nomeBoss);
      this.physics.arcade.enable(this.player2);
      this.boss.iniciar(this.player2);

      //fundo
      this.imagem1.destroy();
      this.imagem2.destroy();

      //plataform
      this.plataformas.nomeImagem = 'plataforma3';
      this.nPlataformas = 4;
      this.plataformas.velocidade = 150;
      this.plataformas.menosVelocidade = -150;

      //Piso
      this.p1.destroy();
      this.p2.destroy();



      //casa
      this.casas.limpar();
      this.door.destroy(); //porta
      this.casas.limpar();
      this.casas.limpar();
      this.casas.limpar();
      this.casas.limpar();
      this.casas.nomeImagem = 'parte3'

      //reset
      this.cF = 1;        // controlador final
      this.cY = 3;          // coluna Y
      this.lX = 1;           // linha X
      this.pxC = 650;      // posição X casa
      this.pyC = 70;      // posição Y casa
      this.cVidas = 0;
      this.vida = 7;
      this.pontos = 0;
      this.limite = 0; // probalidade de aparecer premios ou inimigos
      this.multiInimigos = 1.2;
      this.multiPremios = 2.3;
      this.random = Math.random() * 4;
      this.imagem = null;
      this.nPlataformas = 10;
      this.contagemVidas = null;

      this.grupoVidas = this.add.physicsGroup();
      this.vidas.iniciar(this.grupoVidas);

      //vidas
      for (this.cVidas = 0; this.cVidas < 5; this.cVidas++) {
        this.vidas.add(this.cVidas * 30, 20, 'vida');
      }

      this.nFase = 3;
    }
    
    
}
