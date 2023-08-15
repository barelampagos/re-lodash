const _ = require('../index');

test('chunk', () => {
	expect(_.chunk(['a', 'b', 'c', 'd'], 2)).toStrictEqual([
		['a', 'b'],
		['c', 'd'],
	]);

	expect(_.chunk(['a', 'b', 'c', 'd'], 3)).toStrictEqual([
		['a', 'b', 'c'],
		['d'],
	]);
});

test('compact', () => {
	expect(_.compact(['yes', 'no', 'not sure', null, 'no', ''])).toStrictEqual([
		'yes',
		'no',
		'not sure',
		'no',
	]);

	expect(
		_.compact([undefined, null, 'only me?', false, 0, undefined])
	).toStrictEqual(['only me?']);
});
