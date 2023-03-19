const spacesCount = 4;
const getIndent = (depth) => ' '.repeat(spacesCount * depth - 2);

const stringify = (data, depth) => {
  if (typeof data !== 'object' || data === null) {
    return `${data}`;
  }
  const strArray = Object.entries(data).map(([key, value]) => `${' '.repeat(spacesCount * depth + 2)}  ${key}: ${stringify(value, depth + 1)}`);
  const finalString = `{\n${strArray.join('\n')}\n${' '.repeat(spacesCount * depth)}}`;
  return finalString;
};

const stylish = (data) => {
  const iter = (node, depth) => {
    const name = node.keyName;
    switch (node.type) {
      case 'nested': {
        const arr = node.children.flatMap((child) => iter(child, depth + 1));
        return `${getIndent(depth)}  ${name}: {\n${arr.join('\n')}\n${getIndent(depth)}  }`;
      }
      case 'added':
        return `${getIndent(depth)}+ ${name}: ${stringify(node.value2, depth)}`;

      case 'deleted':
        return `${getIndent(depth)}- ${name}: ${stringify(node.value1, depth)}`;

      case 'changed': {
        const str1 = `${getIndent(depth)}- ${name}: ${stringify(node.value1, depth)}`;
        const str2 = `${getIndent(depth)}+ ${name}: ${stringify(node.value2, depth)}`;
        return [str1, str2];
      }
      default:
        return `${getIndent(depth)}  ${name}: ${stringify(node.value, depth)}`;
    }
  };
  const resultArray = data.flatMap((node) => iter(node, 1));
  const resultString = `{\n${resultArray.join('\n')}\n}`;
  return resultString;
};

export default stylish;
