import stylish from './stylish.js';
import plain from './plain.js';

const formatSelection = (difference, formatName) => {
  switch (formatName) {
    case 'stylish':
      return stylish(difference);
    case 'plain':
      return plain(difference);
    case 'json':
      return JSON.stringify(difference);
    default:
      throw new Error`Unknown format ${formatName}`();
  }
};

export default formatSelection;
