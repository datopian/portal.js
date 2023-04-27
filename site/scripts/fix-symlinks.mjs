// Script executed before builds

import fs from "fs";

//  If Vercel environment is detected
if (process.env.VERCEL_ENV) {
  console.log(
    "[scripts/fix-symlinks.mjs] Vercel environment detected. Fixing symlinks..."
  );

  const pathToAssetsLn = "./public/assets";
  
  fs.symlinkSync("../../public/assets", pathToAssetsLn);
  
  console.log(fs.readdirSync(pathToAssetsLn)) 
  console.log(fs.readdirSync("./public")) 
}
