import { readFileSync } from 'fs';
import path from 'path';
import getParser from './parsers.js';
import getTreeDiff from './treeDiff.js';
import formatSelection from './formatters/index.js';

const readFile = (filepath) => readFileSync(filepath, 'utf-8');
const getAbsolutePath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const data1 = readFile(getAbsolutePath(filepath1));
  const data2 = readFile(getAbsolutePath(filepath2));

  const dataParse1 = getParser(data1, getFormat(filepath1));
  const dataParse2 = getParser(data2, getFormat(filepath2));

  const difference = getTreeDiff(dataParse1, dataParse2);
  return formatSelection(difference, formatName);
};
export default genDiff;
