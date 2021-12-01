import fs from "fs";
import path from "path";

import { returnEmptyIfUndefined } from "../helpers";

interface AppState {
  name: string;
  codes: {
    header: string;
    footer: string;
  };
  pages: {
    index: string;
  };
}

export const readProject = (path: string): string => {
  return fs.readFileSync(path, "utf8");
};

export const syncProject = (path: string, content: string): void => {
  fs.writeFileSync(path, JSON.stringify(content, null, 4));
};

export const publishProject = (
  projectPath: string,
  content: AppState
): void => {
  const htmlPath = path.join(path.dirname(projectPath), "index.html");
  const formattedContent = `${returnEmptyIfUndefined(
    content?.codes?.header
  )}${returnEmptyIfUndefined(content?.pages?.index)}${returnEmptyIfUndefined(
    content?.codes?.footer
  )}`;
  fs.writeFileSync(htmlPath, formattedContent);
};
