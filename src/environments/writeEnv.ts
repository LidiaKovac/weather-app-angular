
// import { config } from 'dotenv';

const setEnv = () => {
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: '.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
  API_KEY: '${process.env['API_KEY']}',
  production: false,
  BE_URL: 'http://localhost:3000/'
};
`;

const targetPathProd = './src/environments/environment.prod.ts';
// Load node modules
require('dotenv').config({
  path: '.env',
});
// `environment.ts` file structure
const envConfigFileProd = `export const environment = {
API_KEY: '${process.env['API_KEY']}',
production: true,
BE_URL: '${process.env['BE_URL']}'
};
`;

  require("fs").writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });

  require("fs").writeFile(targetPathProd, envConfigFileProd, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPathProd} \n`
      );
    }
  });
};

setEnv();
