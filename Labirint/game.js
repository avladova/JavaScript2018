'use strict';

let plan = `
################
#              #
#              #
#              #
#              #
#              #
#              #
#              #
#              #
#              #
#              #
#              #
################`;

plan = plan.trim().split('\n');

let planW = plan[0].length;
let planH = plan.length;
// var N
 let N=15
let mageX = Math.floor(N/2);
let mageY = Math.floor(N/2);

function printPlan() {
    let s = '';
    for (let i = 0; i < planH; i++) {
        for (let j = 0; j < planW; j++) {
            if (j == mageX && i == mageY) {
                s += 'M';
            } else {
                s += plan[i][j];
            }
        }
        s += '\n';
    }
    console.log(s);
}

printPlan();

function moveLeft() {
    if (plan[mageY][mageX - 1] == ' ') {
        mageX--;
    }
    printPlan();
}

function moveRight() {
    if (plan[mageY][mageX + 1] == ' ') {
        mageX++;
    }
    printPlan();
}
function moveDown() {
    if (plan[mageY+1][mageX] == ' ') {
        mageY++;
    }
    printPlan();
}
function moveUp() {
    if (plan[mageY-1][mageX] == ' ') {
        mageY--;
    }
    printPlan();
}


function move() {
    let i=1;
    while (i<N){
    if (mageX % 2==0) { 
        for (let j=1; j<=i; j++) { moveUp(); } 
        for(let j=1; j<=i; j++) {moveRight()}}
    else {
        for (let j=1; j<=i; j++) { moveDown();} 
        for (let j=1; j<=i; j++) { moveLeft();}
            
          }
    i++;    }
        printPlan();
       
    
}
