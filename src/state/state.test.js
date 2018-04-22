import * as reducers from './reducers'
import * as actions from './actions'
import * as selectors from './selectors'

describe('reducer tests', () => {
  describe('tags reducer', () => {
    let tags = reducers.tags
    const initState = tags(undefined, actions.noop())

    test('can set all tags at once', () => {
      const expected = {
        status: 'UNATTEMPTED',
        data: { hello: false, world: false },
      }

      const result = tags(initState, actions.setTags(expected.data))
      expect(result).toEqual(expected)
    })

    test('has async status field', () => {
      const expected = { status: 'SUCCESS', data: { hello: true, world: true } }
      const result = [
        actions.setTagsRequestStatus('SUCCESS'),
        actions.setTags(expected.data),
      ].reduce(tags, initState)
      expect(result).toEqual(expected)
    })

    test('can set a tag to true', () => {
      const expected = { ...initState, data: { ...initState.data, world: true } }
      const result = tags(initState, actions.addSelectedTag('world'))
      expect(result).toEqual(expected)
    })

    test('can set a tag to false', () => {
      const startState = { ...initState, data: { world: true } }
      const expected = { ...initState, data: { world: false } }
      const result = tags(startState, actions.removeSelectedTag('world'))
      expect(result).toEqual(expected)
    })

    test('can set all tags to false', () => {
      const startState = { ...initState, data: { hello: true, world: true } }
      const expected = { ...initState, data: { hello: false, world: false } }
      const result = tags(startState, actions.clearSelectedTags())
      expect(result).toEqual(expected)
    })
  })
})

describe('selector tests', () => {
  const initState = [
    actions.noop(),
    actions.setTags({
      hello: true,
      world: false,
      foo: true,
      bar: false,
    }),
    actions.setApplicants({
      'hello@world.com': {
        name: 'Joe Doe',
        email: 'hello@world.com',
        tags: ['hello'],
      },
      'jane@goodall.com': {
        name: 'Jane Goodall',
        email: 'jane@goodall.com',
        tags: ['hello', 'foo'],
      },
      'jim@jam.com': {
        name: 'Jim McJammin',
        email: 'jim@jam.com',
        tags: ['foo', 'bar'],
      },
    }),
  ].reduce(reducers.rootReducer, undefined)

  test('selected tags', () => {
    const expected = { hello: true, foo: true }
    expect(selectors.selectedTags(initState)).toEqual(expected)
  })

  test('selected tag count', () => {
    expect(selectors.selectedTagCount(initState)).toBe(2)
  })

  test('filtered applicants', () => {
    const result = selectors.filteredApplicants(initState)
    expect(result.length).toBe(1)
    expect(result[0].tags).toEqual(['hello', 'foo'])
  })
})
