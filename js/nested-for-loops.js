/**
 * Returns a string representation of a 2-dimensional data structure 
 * @param {number} depth 
 * @param {number} [width=depth] 
 * @returns {string}
 */
function nestedForLoops (depth, width = depth) {
  let result = "\n";
  
  // Write code here
  if (!depth || !width ){
    return "";
  }
  if (typeof depth !== 'number'){
    return "";
  }
  if (typeof width !== 'number'){
    return "";
  }
  
  for (let depthCount = 0; depthCount < depth; depthCount++){
    for (let widthCount = 0; widthCount < width; widthCount++){
      result = result.concat('{x:', widthCount.toString(), ', ');
      result = result.concat('y:', depthCount.toString(), '}');
      if (widthCount < width - 1){
        result = result.concat(", ");
      }
      if (widthCount === width - 1){
        result = result.concat('\n');
      }
    }
  }
  return result;
};

// To see your console output outside the tests add function calls here.
// console.log(nestedForLoops(4));
