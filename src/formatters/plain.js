import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
};

const plain = (diff) => {
  const getResult = (nodes, path = '') => {
    const result = nodes
      .filter(({ type }) => type !== 'unchanged')
      .map((node) => {
        const { keyName, type } = node;
        const currentPath = `${path}${keyName}`;
        switch (type) {
          case 'nested':
            return getResult(node.children, `${currentPath}.`);
          case 'deleted':
            return `Property '${currentPath}' was removed`;
          case 'added':
            return `Property '${currentPath}' was added with value: ${stringify(node.value2)}`;
          case 'changed':
            return `Property '${currentPath}' was updated. From ${stringify(node.value1)} to ${stringify(node.value2)}`;
          default:
            throw new Error(`Unknown format - ${type}`);
        }
      });
    return result.join('\n');
  };
  return getResult(diff);
};
export default plain;
