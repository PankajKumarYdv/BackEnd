import fs from "fs";
import { spawn } from "child_process";

const childProcess = spawn("node", ["childProcess.js"]);

// process
childProcess.stdout.on("data", (chunk) => {
  console.log(chunk.toString());
});
