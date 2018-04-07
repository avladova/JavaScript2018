'use strict';

let plan = `
###############
#             #
#       #     #
#             #
#             #
#             #
###############`;

plan = plan.trim().split('\n');

let planW = plan[0].length;
let planH = plan.length;

let mageX = 3;
let mageY = 2;

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
//while (plan[mageY][mageX + 1] == ' ') {
  //  moveRight();
//}

function move(x,y) {
    if ((x<=0)||(y<=0)) {alert('input correct coordinates')}
    else{
        while (mageX!=x) //((plan[y][x] == ' ')&&) 
        {
          if (mageX<x) {
              moveRight(); 
             // mageX++;
              }
          else {if (mageX>x) {
              moveLeft();
            //  mageX--;
          }
        }
        while ((plan[y][x] == ' ')&&(mageY!=y)) 
        {
          if (mageY<y) {
              moveDown(); 
         
              }
          else {if (mageY>y) {
              moveUp();
           
          }
        }
    }
    }   
    printPlan();}
}
