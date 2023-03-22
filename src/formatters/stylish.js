const spacesCount = 4;
const getIndent = (depth) => ' '.repeat(spacesCount * depth - 2);

const stringify = (data, depth) => {
  if (typeof data !== 'object' || data === null) {
    return `${data}`;
  }
  const indent = ' '.repeat(spacesCount * depth + 2);
  const strArray = Object
    .entries(data)
    .map(([key, value]) => `${indent}  ${key}: ${stringify(value, depth + 1)}`);
  return `{\n${strArray.join('\n')}\n${' '.repeat(spacesCount * depth)}}`;
};

const stylish = (data) => {
  const iter = (node, depth) => {
    const {
      keyName, type, value1, value2,
    } = node;
    switch (type) {
      case 'nested': {
        const arr = node.children.flatMap((child) => iter(child, depth + 1));
        return `${getIndent(depth)}  ${keyName}: {\n${arr.join('\n')}\n${getIndent(depth)}  }`;
      }
      case 'added':
        return `${getIndent(depth)}+ ${keyName}: ${stringify(value2, depth)}`;

      case 'deleted':
        return `${getIndent(depth)}- ${keyName}: ${stringify(value1, depth)}`;

      case 'changed': {
        const str1 = `${getIndent(depth)}- ${keyName}: ${stringify(value1, depth)}`;
        const str2 = `${getIndent(depth)}+ ${keyName}: ${stringify(value2, depth)}`;
        return [str1, str2];
      }
      default:
        return `${getIndent(depth)}  ${keyName}: ${stringify(node.value, depth)}`;
    }
  };
  const resultArray = data.flatMap((node) => iter(node, 1));
  return `{\n${resultArray.join('\n')}\n}`;
};

export default stylish;
