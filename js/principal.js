const game = new Phaser.Game(800, 600, Phaser.CANVAS, '');


const PhaserGame = new Jogo();

//paginas
const pagePrincipal = new Menu();
const pageConfig = new Config();
const pageLoja = new Loja();
const pageFases = new Fases();
const pageTutorial = new Tutorial();
const pageRanking = new Ranking();
const tela = new telaRanking();

game.state.add("telaCadastro", tela, false);

game.state.add('Menu', pagePrincipal, true);

//telas
game.state.add('Game', PhaserGame, false);
game.state.add('Fases', pageFases, false );
game.state.add('Tutorial', pageTutorial, false);
game.state.add('Config', pageConfig, false);
game.state.add('Loja', pageLoja, false);
game.state.add('Ranking', pageRanking, false);



