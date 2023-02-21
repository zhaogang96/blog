import { marked } from "marked";
import axios from "axios";

async function getFileData(path: string) {
  if (!path) {
    console.log("File not exists!");
    return undefined;
  }

  const { data } =
    (await axios.get(path).catch(() => {
      console.log("File not exists!");
      return undefined;
    })) || {};

  return data;
}

export async function markdownToHtml(path: string) {
  const mdData = await getFileData(path);
  if (!mdData) {
    return undefined;
  }

  return marked.parse(mdData);
}
