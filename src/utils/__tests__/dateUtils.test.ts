import {add, formatISO, sub} from 'date-fns';

import {dateUtils} from '@utils';

const MOCKED_NOW = 1696573824333;

describe('dateUtils', () => {
  describe('formatRelative', () => {
    beforeAll(() => {
      jest.spyOn(Date, 'now').mockImplementation(() => MOCKED_NOW);
    });

    afterAll(() => {
      jest.clearAllMocks();
    });

    it('should be displayed in seconds if less than 1 minute ago', () => {
      const time = sub(Date.now(), {seconds: 30});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('30 s');
    });

    it('should be displayed in minutes if less than 1 hour ago', () => {
      const time = sub(Date.now(), {minutes: 30});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('30 m');
    });

    it('should be displayed in hours if less than 1 day ago', () => {
      const time = sub(Date.now(), {hours: 12});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('12 h');
    });

    it('should be displayed in days if less than 7 days ago', () => {
      const time = sub(Date.now(), {days: 3});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('3 d');
    });

    it('should be displayed in weeks if less than 4 weeks ago', () => {
      const time = sub(Date.now(), {weeks: 2});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('2 sem');
    });

    it('should be displayed in weeks if less than 12 months ago', () => {
      const time = sub(Date.now(), {months: 3});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('3 mes');
    });

    it('should be displayed in dd/MM/yyyy if more than 12 months ago', () => {
      const time = sub(Date.now(), {years: 2});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('06/10/2021');
    });

    it('should be displayed in dd/MM/yyyy if in future date', () => {
      const time = add(Date.now(), {days: 2});
      const timeISO = formatISO(time);

      expect(dateUtils.formatRelative(timeISO)).toBe('08/10/2023');
    });
  });
});
