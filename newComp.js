const fs = require("fs");

const NewCompName = process.argv[2];

const rootCompsFolderPath = "src/components/";

const newFolderPath = rootCompsFolderPath + NewCompName;

fs.mkdirSync(newFolderPath);

const compBoilerPlate = `
import * as React from "react";

export interface ${NewCompName}Props {

}

export function ${NewCompName}({} : ${NewCompName}Props): React.ReactNode {
  return (
    <>
      ${NewCompName}
    </>
  )
}
`;
fs.writeFileSync(newFolderPath + `/${NewCompName}.tsx`, compBoilerPlate);

fs.writeFileSync(
  newFolderPath + "/index.tsx",
  `export * from "./${NewCompName}";`
);

fs.appendFileSync(
  rootCompsFolderPath + "index.tsx",
  `export * from "./${NewCompName}";\n`
);
