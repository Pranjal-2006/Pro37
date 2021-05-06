class Quiz{
    constructor(){}
    getState(){
        var gs_ref = database.ref('gameState');
        gs_ref.on("value",function(data){
            gameState = data.val();
        })

    }

update(state){
    database.ref('/').update({
        gameState:state})
}
 async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCount_ref = await database.ref('contestantCount').once("value");
        if(contestantCount_ref.exists()){
 contestantCount = contestantCount_ref.val();
 contestant.getCount();
        }

     question = new Question();
     question.display();
    }
    

}
play(){
    question.hide();
    background("yellow");

    Contestant.getContestantInfo();
    if(allContestants !== undefined){
        var display_Answers = 230;
        text("Contestants who have correctly answered is green", 130, 230);
    

    for(var plr in allContestants){
        var correctAns = "2";
        if(correctAns === allContestants[plr].answer)
            fill("green");
            else 
            fill("red");
            display_Answers+= 30;
            text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_Answers);
    }

       

 

}
}
}

    