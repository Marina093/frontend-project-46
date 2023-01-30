import { readFileSync } from 'fs';
import path from 'path';
import getTreeDiff from './treeDiff.js';
import stylish from './stylish.js';

const readFile = (filepath) => readFileSync(filepath, 'utf-8');
const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const parsers = (data) => JSON.parse(data);

const genDiff = (filepath1, filepath2) => {
  const data1 = readFile(getAbsolutePath(filepath1));
  const data2 = readFile(getAbsolutePath(filepath2));
  const dataParse1 = parsers(data1);
  const dataParse2 = parsers(data2);

  const difference = getTreeDiff(dataParse1, dataParse2);
  return stylish(difference);
};
export default genDiff;
