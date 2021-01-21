// Your code here
function mapToNegativize(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = - sourceArray[i];
  }
  return sourceArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}

function mapToDouble(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] = 2 * sourceArray[i];
  }
  return sourceArray;
}

for (let i = 0; i < sourceArray.length; i++) {
  sourceArray[i] = - sourceArray[i];
}
return sourceArray;
