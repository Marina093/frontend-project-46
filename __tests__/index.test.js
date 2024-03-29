import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { expect, test } from '@jest/globals';
import fs from 'fs';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filepath) => fs.readFileSync(getFixturePath(filepath), 'utf-8').trim();

test.each([
  ['file1.json', 'file2.json', undefined, 'result.txt'],
  ['file1.yml', 'file2.yml', 'stylish', 'result.txt'],
  ['file1.json', 'file2.yml', 'stylish', 'result.txt'],
  ['file1.yml', 'file2.json', 'stylish', 'result.txt'],
  ['file1.json', 'file2.json', 'plain', 'resultPlain.txt'],
  ['file1.yml', 'file2.yml', 'plain', 'resultPlain.txt'],
  ['file1.json', 'file2.json', 'json', 'resultJson.txt'],
  ['file1.yml', 'file2.yml', 'json', 'resultJson.txt'],
])('testCheck', (filename1, filename2, formatName, expectedName) => {
  const file1 = getFixturePath(filename1);
  const file2 = getFixturePath(filename2);
  expect(genDiff(file1, file2, formatName)).toBe(readFixture(expectedName));
});
