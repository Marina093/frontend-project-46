import _ from 'lodash';

const getTreeDiff = (file1, file2) => {
  const keys1 = _.keys(file1);
  const keys2 = _.keys(file2);
  const keys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(keys);
  const resultTree = sortedKeys.map((key) => {
    if (!_.has(file1, key)) {
      return { keyName: key, type: 'added', value2: file2[key] };
    }
    if (!_.has(file2, key)) {
      return { keyName: key, type: 'deleted', value1: file1[key] };
    }
    if (_.isObject(file1[key]) && _.isObject(file2[key])) {
      return { keyName: key, type: 'nested', children: getTreeDiff(file1[key], file2[key]) };
    }
    if (file1[key] !== file2[key]) {
      return {
        keyName: key, type: 'changed', value1: file1[key], value2: file2[key],
      };
    }
    return { keyName: key, type: 'unchanged', value: file1[key] };
  });
  return resultTree;
};
export default getTreeDiff;
