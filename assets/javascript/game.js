$(document).ready(function () {
// ----------------------------------------------------------------------------------------------------
    // Global Variables
// ----------------------------------------------------------------------------------------------------

    var total = 0;
    var wins = 0;
    var losses = 0;

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

// ----------------------------------------------------------------------------------------------------
    
    $("#generateNumber").text(randNumber);

// ----------------------------------------------------------------------------------------------------
    $("#crystalOne, #crystalTwo, #crystalThree, #crystalFour").on("click", function() {
        // alert("clicked");
        if( crystalRandOne + total){
            $("playerScore").text(total);
            console.log(this);
        }
    })
// ----------------------------------------------------------------------------------------------------


    //  Generating Number @ start between 19-120
    // ------------------------------------------------------------------------------------------------
    // $(function mainNumber() {
        // var minNumber = parseFloat("19");
        // console.log(minNumber);
        // var maxNumber = parseFloat("120");
        // console.log(maxNumber);
        // var randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
        // console.log("main#: " + randNumber);

    //     $("#generateNumber").text(randNumber);
    // });
    // ------------------------------------------------------------------------------------------------

    // Crystal images to generate a number between 1-12
    // ------------------------------------------------------------------------------------------------
    // $(function crystalOne() {

        // var crystalRandOne = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        // console.log("crystal#1: " + crystalRandOne);

        // // var minNumber = parseFloat("1");
        // // // console.log(minNumber);
        // // var maxNumber = parseFloat("12");
        // // // console.log(maxNumber);
        // // var randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
        // console.log("crystal#1: " + randNumber);

        // $("#crystalOne").on("click", function () {
        //     $("#playerScore").append(randNumber);
        // });

        // $("#crystalOne").text(randNumber);
    });
    // ------------------------------------------------------------------------------------------------
    $("#crystalOne, #crystalTwo, #crystalThree, #crystalFour").on("click", function() {

    })
    // ------------------------------------------------------------------------------------------------
    // $(function crystalTwo() {

        // var crystalRandTwo = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        // console.log("crystal#2: " + crystalRandTwo);

    //     // var minNumber = parseFloat("1");
    //     // // console.log(minNumber);
    //     // var maxNumber = parseFloat("12");
    //     // // console.log(maxNumber);
    //     // var randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
    //     // console.log("crystal#2: " + randNumber);

    //     // $("#crystalTwo").on("click", function () {
    //     //     $("#playerScore").append(randNumber);
    //     // });

    //     // // $("#crystalTwo").text(randNumber);
    // })
    // ------------------------------------------------------------------------------------------------
    // $(function crystalThree() {

        // var crystalRandThree = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        // console.log("crystal#3: " + crystalRandThree);

        // var minNumber = parseFloat("1");
        // // console.log(minNumber);
        // var maxNumber = parseFloat("12");
        // // console.log(maxNumber);
        // var randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
        // console.log("crystal#3: " + randNumber);

        // $("#crystalThree").on("click", function () {
        //     $("#playerScore").append(randNumber);
        // });

        // $("#crystalThree").text(randNumber);
    // })
    // ------------------------------------------------------------------------------------------------
    // $(function crystalFour() {

        // var crystalRandFour = Math.floor(Math.random() * crystalMaxNum) + crystalMinNum;
        // console.log("crystal#4: " + crystalRandFour);

        // var minNumber = parseFloat("1");
        // // console.log(minNumber);
        // var maxNumber = parseFloat("12");
        // // console.log(maxNumber);
        // var randNumber = Math.floor(Math.random() * maxNumber) + minNumber;
        // console.log("crystal#4: " + randNumber);

        // // $("#crystalFour").on("click", function () {
        // //     $("#playerScore.total").append(randNumber);
        // // });

        // $("#crystalFour").on("click", function () {
        //     $("#playerScore").append(randNumber);
        // });

        // $("#crystalFour").text(randNumber);
    // })
    // ------------------------------------------------------------------------------------------------
    
    // Player Score
    // ------------------------------------------------------------------------------------------------
    
    // console.log("#playerScore");

    // ------------------------------------------------------------------------------------------------

// });