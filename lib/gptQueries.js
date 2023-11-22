import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const sleep = ms => new Promise(r => setTimeout(r, ms * 1000));
const getRandomInt = (max) => Math.floor(Math.random() * max);

const responsesDir = path.join(process.cwd(), 'lib', '_responses');
const sourcesDir = path.join(process.cwd(), 'lib', '_sources');

export async function getQueryResponseMD(id) {
  const fullPath = path.join(responsesDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    contentHtml,
    ...matterResult.data,
  };
}

export async function getQuerySourcesMD(id) {
  const fullPath = path.join(sourcesDir, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return { sources: contentHtml };
}

export async function getResponse() {
  await sleep(2);

  const randomNo = getRandomInt(2);
  const queryResponse = await getQueryResponseMD(randomNo);
  const sources = await getQuerySourcesMD(randomNo);

  return {...queryResponse, ...sources}
}