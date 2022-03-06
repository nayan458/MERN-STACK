const chalk = require("chalk");
const validator = require("validator");

const res = validator.isEmail("nayan@hagura.com");
console.log(res);
// console.log(chalk.blue.underline.inverse("false"));