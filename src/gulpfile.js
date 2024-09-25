const cro = require("./cro.config");
const path = require("path");
const chokidar = require("chokidar");
const { spawn } = require("child_process");
const del = require("del");
const fs = require("fs");

function runCommand(entry) {
  const entryFile = entry;
  const destination = entry.replace("src", "dist");

  const lastSlashIndex = destination.lastIndexOf("/");
  let distDir = destination.slice(0, lastSlashIndex);
  const filename = destination.slice(lastSlashIndex + 1);

  if (distDir.indexOf("scss") > -1) distDir = distDir.replaceAll("scss", "css");

  const command = `webpack --env entry=${entryFile} --env destination=${distDir} --env filename=${filename}`;
  const lsProcess = spawn(command, {
    shell: true,
  });

  lsProcess.stdout.on("data", (data) => {
    console.log("Output:", data.toString());
  });

  lsProcess.stderr.on("data", (data) => {
    console.error("Error:", data.toString());
  });

  lsProcess.on("close", (code) => {
    console.log("Process exited with code:", code);

    // delete the dist scss - temp fix
    if (destination.indexOf(".scss") > -1) {
      const filePath = destination.replace("scss", "css");
      deleteExtraScssFile(filePath);
    }
  });
}

function deleteExtraScssFile(filePath) {
  let count = 0;
  const maxCount = 200;
  const delay = 100;
  const interval = setInterval(() => {
    const fileExists = fs.existsSync(filePath);

    if (fileExists) {
      del(filePath);
      clearInterval(interval);
    }

    if (count > maxCount) clearInterval(interval);

    count++;
  }, delay);
}

function watchFiles() {
  const jsWatcher = chokidar.watch(
    `${cro.output.destination}/**/src/js/*.js`,
    {
      ignored: /[\/\\]\./,
      persistent: true,
      ignoreInitial: true,
    }
  );

  jsWatcher.on("change", (event) => {
    const entry = path.join(__dirname, event);
    runCommand(entry);
    // Perform tasks or trigger Gulp tasks based on the event and path
  });

  const scssWatcher = chokidar.watch(
    `${cro.output.destination}/**/src/scss/*.scss`,
    {
      ignored: /[\/\\]\./,
      persistent: true,
      ignoreInitial: true,
    }
  );

  scssWatcher.on("change", (event) => {
    const entry = path.join(__dirname, event);
    runCommand(entry);
    // Perform tasks or trigger Gulp tasks based on the event and path
  });
}

exports.default = watchFiles;
