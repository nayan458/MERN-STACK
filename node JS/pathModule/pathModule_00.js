const path = require("path");

// console.log(path.dirname('C:/Users/nayan/Desktop/node_tute_00'))
console.log(path.dirname('C:/Users/nayan/Desktop/node_tute_00/pathModule/pathModule_00.js'))
console.log(path.extname('C:/Users/nayan/Desktop/node_tute_00/pathModule/pathModule_00.js'))
console.log(path.basename('C:/Users/nayan/Desktop/node_tute_00/pathModule/pathModule_00.js'))

console.log(path.parse('C:/Users/nayan/Desktop/node_tute_00/pathModule/pathModule_00.js'))

// const nam = path.parse('C:/Users/nayan/Desktop/node_tute_00/pathModule/pathModule_00.js').name
// console.log(nam);

/*          OR           */

const nam_02 = path.parse('C:/Users/nayan/Desktop/node_tute_00/pathModule/pathModule_00.js');
console.log(nam_02.root);
console.log(nam_02.name);
