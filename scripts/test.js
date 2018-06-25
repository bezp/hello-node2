// var x = { setTitle1:
//   { card1_1: { term1_1: 'def1_1' },
//     card1_2: { term1_2: 'def1_2' },
//     card1_3: { term1_3: 'def1_3' } },
//  setTitle2:
//   { card2_1: { term2_1: 'def2_1' },
//     card2_2: { term2_2: 'def2_2' },
//     card2_3: { term2_3: 'def2_3' } },
//  setTitle3:
//   { card3_1: { term3_1: 'def3_1' },
//     card3_2: { term3_2: 'def3_2' },
//     card3_3: { term3_3: 'def3_3' } } };


// var jsObj = { 
//   setTitle1:
//   { card1_1: { term1_1: 'def1_1' },
//     card1_2: { term1_2: 'def1_2' },
//     card1_3: { term1_3: 'def1_3' } },
//  setTitle2:
//   { card2_1: { term2_1: 'def2_1' },
//     card2_2: { term2_2: 'def2_2' },
//     card2_3: { term2_3: 'def2_3' } },
//  setTitle3:
//   { card3_1: { term3_1: 'def3_1' },
//     card3_2: { term3_2: 'def3_2' },
//     card3_3: { term3_3: 'def3_3' } } };
  

var jsObjList = { 
  setTitle1:
  { card1: [ 'term1_1', 'def1_1' ],
    card2: [ 'term1_2', 'def1_2' ],
    card3: [ 'term1_3', 'def1_3' ] },
  setTitle2:
  { card1: [ 'term2_1', 'def2_1' ],
    card2: [ 'term2_2', 'def2_2' ],
    card3: [ 'term2_3', 'def2_3' ] },
  setTitle3:
  { card1: [ 'term3_1', 'def3_1' ],
    card2: [ 'term3_2', 'def3_2' ],
    card3: [ 'term3_3', 'def3_3' ] } };

var newCard =  {card4_1: [ 'term4_1', 'def4_1' ]};

// console.log(jsObjList.setTitle1);
// console.log('~');
// console.log(jsObjList.setTitle2);
// console.log('~');
// console.log(jsObjList.setTitle3);



//adding new card to a set
// function addCard(setTitle, card, newInfo) {
//   jsObjList[setTitle][card] = newInfo;
// }
// console.log(jsObjList.setTitle1); 
// var c4 = [ 'term4_1', 'def4_1' ]; 
// addCard('setTitle1', 'card4', c4);
// console.log(jsObjList.setTitle1); 

//updating card in a set
// function updateCard (setTitle, card, newInfo) {
//   jsObjList[setTitle][card] = newInfo;
// }
// console.log(jsObjList.setTitle2);
// var c2 = [ 'xterm2_2', 'xdef2_2']
// updateCard('setTitle2', 'card2', c2);
// console.log(jsObjList.setTitle2);

//deleting card from set
// function deleteCard (setTitle, card) {
//   delete jsObjList[setTitle][card];
// }
// console.log(jsObjList.setTitle3);
// deleteCard('setTitle3', 'card3');
// console.log(jsObjList.setTitle3);

