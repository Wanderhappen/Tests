import { splitIntoWords } from './01'

test('splitting into words should be correct', () => {
	// data
	const sent1 = 'Hello my friend'
	const sent2 = 'JS - the best  programmimg language.'
	// action
	const result1 = splitIntoWords(sent1)
	const result2 = splitIntoWords(sent2)
	// expect result
	expect(result1.length).toBe(3)
	expect(result1[0]).toBe('hello')
	expect(result1[1]).toBe('my')
	expect(result1[2]).toBe('friend')

	expect(result2.length).toBe(5)
	expect(result2[0]).toBe('js')
	expect(result2[1]).toBe('the')
	expect(result2[2]).toBe('best')
	expect(result2[3]).toBe('programmimg')
	expect(result2[4]).toBe('language')
})
