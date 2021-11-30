import fs from "fs";
import path from "path";

interface AppState {
  name: string;
  codes: {
    header: string;
    footer: string;
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
  const formattedContent = `${content?.codes?.header}${content?.codes?.footer}`;
  fs.writeFileSync(htmlPath, formattedContent);
};
