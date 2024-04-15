import {describe, expect, it} from '@jest/globals';

import {stringUtils} from '@utils';

describe('stringUtils', () => {
  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of each word ', () => {
      const name = stringUtils.capitalizeFirstLetter('ana maria');
      expect(name).toBe('Ana Maria');
    });

    it('should remove leading/trailing spaces', () => {
      const name = stringUtils.capitalizeFirstLetter(' ana maria ');
      expect(name).toBe('Ana Maria');
    });
  });
});
