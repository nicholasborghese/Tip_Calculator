import { helper } from '@ember/component/helper';

export function decToPercentage(params) {
  var dec = parseFloat(params);
  return dec * 100;
}

export default helper(decToPercentage);
