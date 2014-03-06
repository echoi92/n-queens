/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({n:n});
  for (var i = 0; i < n; i++) {
    board.rows()[i][i]=1;
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(board.rows()));
  return board.rows();
  //input = size of the board/n of rooks
  //output = array of arrays, with indication where the rooks are placed with 1.
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  if(n === 1){
    return 1;
  }
  var output = 1;
  for (var i = 1; i <= n; i++) {
     output = output * i;
  }
  var solutionCount = output;
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var j = 0;
  if(n===1){
    console.log("returning 1")
    return [[1]];
  }

  if (n<4){
    var tboard = new Board({n: n});
    return tboard.rows();
  }
  if(n<4){
    console.log("n is less than 4");
    return ;
    console.log("returned 0");
  }
 
  var myBoard = new Board({n: n});

  if(n%2===0){
   j=1
    for (var i = 0; i < n; i++) {
      if(j>=n){
        j=0;
      }
      myBoard.rows()[i][j]=1;
      j+=2;
    }
  }else{


  for (var i = 0; i < n; i++) {
    if(j>=n){
      j=1;
    }
    myBoard.rows()[i][j]=1;
    j+=2;
  }
}
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(myBoard.rows()));
  return myBoard.rows();

  //create new table
  //create an iteration going thru all the elements in the current row
  //place a queen into current[nextAvailableSpot] element
  //and alter the board to have value of -1 for elements in the queens direction of attack
  //pass the altered version of the board to next recursion


};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

var myBoard = new Board({n: n});
  var placeQueen = function(){
    var currentBoard = myBoard;
    for (var r = 0; r < n; r++) {
      for(var c = 0; c< n; c++){
        if(currentBoard.rows()[r][c] !== -1){
          currentBoard.rows()[r][c] = 1;
          attackMove(currentBoard, r, c, n);
        }
      }

     }
 };
var attackMove = function(board, qr, qc, n){
  //[0,0] 0th row & 0th colums all -1
  // for i =0 i++, 0+i,0+i all -1
  // 0-i, 0+i all -1
  //
  for (var k = 1; k < n-qc; k++) {
    board.rows()[qr][k+qc] = -1;
  }

  for (var j = 1; j < n-qr; j++) {
    board.rows()[qr+j][qc] = -1;
  }


  if(qr>qc){
    var l = qc;
  }else{
    var l = qr;
  }

  for (var m = 1; m < n-2-l; m++) {
    board.rows()[qr+m][qc+m] = -1;
  }

  var z = 0;

  if(n - qr > qc){
    z = qc;
  }else{
    z = n - qr;
  }

  for (var o = 1; o <= z; o++){
    board.rows()[qr+o][qc-o] = -1;
  }
};




  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};













