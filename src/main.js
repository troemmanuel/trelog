const chalk = require("chalk");

const flag = process.env.DEBUG || true;

exports.LOG = function (...args){
    if(flag === true){
        console.log(chalk.blue(`${args.join()}`));
    }
};

exports.WARN = function (...args){
    if(flag === true){
        console.log(chalk.green(`${args.join()}`));
    }
};

exports.ERROR = function (...args){
    if(flag === true){
        console.log(chalk.red(`${args.join()}`));
    }
};