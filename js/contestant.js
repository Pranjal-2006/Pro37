class Contestant{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;

    }
    getCount(){
        var contestantcount_ref = database.ref('contestantCount');
        contestantcount_ref.on("value",(data)=>{
            contestantCount = data.val();
        })

    }

updateCount(count){
    database.ref('/').update({
        contestantCount:count})

}
update(){
    var contestantIndex = "contestants/contestant" + this.index;
    database.ref(contestantIndex).set({
        name:this.name,
    answer:this.answer
});
}
static getContestantInfo(){
    var pi_ref = database.ref('contestants');
    pi_ref.on("value",(data)=>{
        allContestants = data.val();
      })
}
}