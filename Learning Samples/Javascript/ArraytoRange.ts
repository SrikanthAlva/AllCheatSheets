let myArray = ["AB01","AB02","AB03","AB04","AB11","BC12","BC13", "SB33"];

function getRanges(array, group) {
  var ranges = [], rstart, rend;
  for (var i = 0; i < array.length; i++) {
    rstart = array[i];
    rend = rstart;
    while (array[i + 1] - array[i] == 1) {
      rend = array[i + 1]; // increment the index if the numbers sequential
      i++;
    }
    ranges.push(rstart == rend ? group+rstart+'' : group+rstart + '-' + group+rend);
  }
  return ranges;
}


let groups = myArray.reduce((groups,item)=>{
  let belongsTo = item.match(/[a-zA-Z]/g).join('');
  groups[belongsTo] ? groups[belongsTo].push(item) :groups[belongsTo]=[item];
  return groups;
},{})

let expectedString = Object.entries(groups).reduce((output,[key,value])=>{
  output=`${output}${output.length ? ', ' : ''}${getRanges(value.map(i=>i.match(/[0-9]/g).join('')),key)}`;
  return output;
},'');

console.log(expectedString);
// expected string "AB01-AB04, AB11, BC12-BC13, SB33"

///////////////////////////////////////////////////////////////////////////////////////


myArray = ["AB01", "AB02", "AB03", "AB04", "AB11", "BC12", "BC13", "SB33"];

const getValues = (str) => {
  return [str.match(/\D+/)[0], Number(str.match(/\d+/)[0])];
};

let [prevPrefix, prevNumber] = getValues(myArray[0]);

let previous;
let result = myArray[0];
for (let i = 1; i < myArray.length; i++) {
  let [prefix, number] = getValues(myArray[i]);
  if (prevPrefix === prefix && number - 1 === prevNumber) {
    previous = myArray[i];
  } else {
    result += (previous ? `-${previous}, ` : ", ") + myArray[i];
    previous = undefined;
  }
  prevNumber = number;
  prevPrefix = prefix;
}

console.log(result);