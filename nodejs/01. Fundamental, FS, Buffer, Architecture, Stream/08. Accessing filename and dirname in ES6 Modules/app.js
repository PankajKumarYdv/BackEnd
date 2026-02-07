/*  code 1
const { dirname, filename } = import.meta;
console.log(dirname);
console.log(filename);
*/

/* Set our own property in import.meta 
import.meta.authorName = "Pankaj Kumar";
// const { filename, dirname, authorName } = import.meta;

const { authorName } = import.meta;
const { filename } = import.meta;
const { dirname } = import.meta;
console.log(authorName);
console.log(filename);
console.log(dirname);

*/

/* Know form where code is run ed */
console.log(process.cwd());
