class Question{
    constructor(){
        this.input1 = createInput("Name");
        this.input2 = createInput("CorrectOption")

        this.button = createButton("Play");
        this.greet = createElement('h2');
        this.title = createElement('h2');
    }
hide(){
    this.greet.hide();
    this.button.hide();
    this.input1.hide();
    this.input2.hide();
    this.title.hide();
}

display(){
    //var title = createElement('h2');
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What starts and ends with the letter 'E', but has only one letter?");
    this.question.position(150,80);
    this.option1.html("1: Everyone");
    this.option1.position(150,100);
    this.option2.html("2: Envelope");
    this.option2.postion(150,120);

    this.input1.position(150,230);
    this.input2.position(350,230);
    

this.button.mousePressed(()=>{
    this.input1.hide();
    this.input2.hide();
    this.button.hide();
     contestant.name = this.input.value();
     contestant.answer = this.input.value();
    contestantCount+=1;
    contestant.index = contestantCount;
    contestant.update()
    contestant.updateCount(contestantCount);
       this.greet.html("Hello"+ contestant.name)
       this.greet.position(425,200);

})

}
}