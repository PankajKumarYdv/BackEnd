console.log("Get arguments from terminal");
const all = process.argv;
const argv1 = process.argv[0];
const argv2 = process.argv[1];
const argv3 = process.argv[2];

console.log(`You have entered : 
	${all}
	${argv1} 
	${argv2}
	${argv3}

`);

console.log("Enviroment variable : ", process.env.NODE_ENV || "developer");

console.log("V8 Version : ", process.versions.v8);
