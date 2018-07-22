function theBeatlesPlay(musiciansArr, instrumentsArr) {
  var resultArr = [];

  for (var i = 0; i < musiciansArr.length; i++){
      resultArr.push(`${musiciansArr[i]} plays ${instrumentsArr[i]}`);
  }

  return resultArr;
}

function johnLennonFacts(factsArr) {
  var n = 0;

  while (n < factsArr.length) {
    factsArr[n] = (`${factsArr[n]}!!!`);

    n++;
  }

  return factsArr;
}

function iLoveTheBeatles(aNum) {
  var resultArr = [];

  if (aNum < 15) {
    resultArr.push('I love the Beatles!');

    do {
      resultArr.push('I love the Beatles!');

      aNum--;
    } while (aNum > 0);
  } else resultArr.push('I love the Beatles!');

  return resultArr;
}
