// Step 1: Creating the tic tac toe board using array
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

// Step 2: Declaring the variables
let w; // = width / 3;
let h; // = height / 3;
let ai = 'X';
let human = 'O';
let currentPlayer = human;

// Step 3: Defining the setup function
function setup() {
  createCanvas(400, 400);
  w = width / 3;
  h = height / 3;
  bestMove();
}

// Step 4: Defining the equals function
function equals(a, b, c) {
  return a == b && b == c && a != '';
}

// Step 5: Defining the checkWinner function
function checkWinner() {
  let winner = null;
  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }
  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }
  // Diagonal
  if (equals(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

// Step 6: Defining the mousePressed function
function mousePressed() {
  if (currentPlayer == human) {
    // Human make turn
    let i = floor(mouseX / w);
    let j = floor(mouseY / h);
    // If valid turn
    if (board[i][j] == '') {
      board[i][j] = human;
      currentPlayer = ai;
      bestMove();
    }
  }
}

// Step 7: Defining the draw function
function draw() {
  background(0);
  strokeWeight(4);
  stroke("#FFFFFF")

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == human) {
        noFill();
        stroke("rgb(255, 230, 64)");
        strokeWeight(10);
        ellipse(x, y, r * 2);
      } else if (spot == ai) {
        stroke("rgb(156, 23, 255)");
        strokeWeight(10);
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let result = checkWinner();
  if (result != null) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 'tie') {

      location.href = "./tie.html";
    } else {
      location.href = "./win.html";
    }
  }
}