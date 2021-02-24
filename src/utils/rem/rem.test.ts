import rem from './rem';

describe('rem', () => {
	it('should calculate rem with base 8 by default', () => {
		expect(rem(16)).toStrictEqual('2rem');
	});
	it('should calculate rem with base passed in', () => {
		expect(rem(10, 10)).toStrictEqual('1rem');
	});
	it('should calculate rem correctly', () => {
		expect(rem(32)).toStrictEqual('4rem');
	});
	it('should calculate rem correctly for negative numbers', () => {
		expect(rem(-32)).toStrictEqual('-4rem');
	});
	it('should return px if base is <1', () => {
		expect(rem(15, 0)).toStrictEqual('15px');
	});
});
