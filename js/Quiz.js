class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    backgroundColor(150);
    text("My Quiz");
    getContestantInfo();
    if(contestantInfo !== undefined){
      fill("Blue");
      textSize(20);
      text("*NOTE: Contestant who answered correctly are highlighted in green colour!", 130, 230)
    }
    for(var prl in allContestants){
      if(correctAns === allContestants[plr].answer)
      fill("green");
      else
      fill("red");
    }
    
  }

}
