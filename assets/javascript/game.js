$(document).ready(function () {
// // ----------------------------------------------------------------------------------------------------
//     // Global Variables
// // ----------------------------------------------------------------------------------------------------

    var minNumber = parseFloat("19");
        // console.log(minNumber);
    var maxNumber = parseFloat("120");
        // console.log(maxNumber);
    var randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
        console.log("main#: " + randNumber);

    var crystalMinNum = parseFloat("1");
        // console.log("crystalMinNum: " + crystalMinNum);
    var crystalMaxNum = parseFloat("12");
        // console.log("crystalMaxNum: " + crystalMaxNum);
    var crystalRandOne = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        console.log("crystal#1: " + crystalRandOne);
    var crystalRandTwo = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        console.log("crystal#2: " + crystalRandTwo);
    var crystalRandThree = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        console.log("crystal#3: " + crystalRandThree);
    var crystalRandFour = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        console.log("crystal#4: " + crystalRandFour);

    var userTotal = 0;
    var wins = 0;
    var losses = 0;
// // ----------------------------------------------------------------------------------------------------
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#generateNumber").text(randNumber);
    $("#playerScore").text(userTotal);
// // ----------------------------------------------------------------------------------------------------
    //Reset!
    function reset(){
        randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
        $("#generateNumber").text(randNumber);
        crystalRandOne = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        crystalRandTwo = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        crystalRandThree = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        crystalRandFour = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        userTotal = 0;
        $("playerScore").text(userTotal);
    };
// // ----------------------------------------------------------------------------------------------------
    function winner() {
        alert("Winner!")
        wins++;
        $("#wins").text(wins);
        reset();
    };

    function loser() {
        alert("Loser!")
        losses++;
        $("#losses").text(losses);
        reset();
    };
// // ----------------------------------------------------------------------------------------------------
    // Crystal #1
    $("#crystalOne").on("click", function() {
        userTotal = userTotal + crystalRandOne;
        console.log("userTotal: " + userTotal);
        $("#playerScore").text(userTotal);
        if (userTotal == randNumber) {
            winner();
        }
        else if (userTotal > randNumber) {
            loser();
        }
    });
    // Crystal #2
    $("#crystalTwo").on("click", function() {
        userTotal = userTotal + crystalRandTwo;
        console.log("userTotal: " + userTotal);
        $("#playerScore").text(userTotal);
        if (userTotal == randNumber) {
            winner();
        }
        else if (userTotal > randNumber) {
            loser();
        }
    });
    // Crystal #3
    $("#crystalThree").on("click", function() {
        userTotal = userTotal + crystalRandThree;
        console.log("userTotal: " + userTotal);
        $("#playerScore").text(userTotal);
        if (userTotal == randNumber) {
            winner();
        }
        else if (userTotal > randNumber) {
            loser();
        }
    });
    // Crystal #4
    $("#crystalFour").on("click", function() {
        userTotal = userTotal + crystalRandFour;
        console.log("userTotal: " + userTotal);
        $("#playerScore").text(userTotal);
        if (userTotal == randNumber) {
            winner();
        }
        else if (userTotal > randNumber) {
            loser();
        }
    });
});
// ----------------------------------------------------------------------------------------------------