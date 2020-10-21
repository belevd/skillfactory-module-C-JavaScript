import { reverseString } from "../reverseString";

describe('test for reverseString function', () => {
    it('should correctly work with any string', () => {
        const string = 'something';
        const result = reverseString(string);
        expect(result).toBe('gnihtemos');
    })
})