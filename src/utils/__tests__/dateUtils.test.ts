import {Duration, add, formatISO, sub} from 'date-fns';

import {dateUtils} from '@utils';

const MOCKED_NOW = 1696573824333;

const getDateISO = (duration: Duration, operation?: 'sub' | 'add'): string => {
  operation = operation || 'sub';
  const time =
    operation === 'sub' ? sub(Date.now(), duration) : add(Date.now(), duration);
  const timeISO = formatISO(time);

  return dateUtils.formatRelative(timeISO);
};

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      expect(getDateISO({seconds: 30})).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      expect(getDateISO({minutes: 30})).toBe('30 m');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      expect(getDateISO({hours: 12})).toBe('12 h');
    });

    it('should be displayed in days if less than 7 days ago', () => {
      expect(getDateISO({days: 3})).toBe('3 d');
    });

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      expect(getDateISO({weeks: 2})).toBe('2 sem');
    });

    it('should be displayed in weeks if less than 12 months ago', () => {
      expect(getDateISO({months: 3})).toBe('3 mes');
    });

    it('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      expect(getDateISO({months: 24})).toBe('06/10/2021');
    });

    it('should be displayed in dd/MM/yyyy if in future date', () => {
      expect(getDateISO({days: 2}, 'add')).toBe('08/10/2023');
    });
  });
});
