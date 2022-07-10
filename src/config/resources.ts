import contextWrapper from 'articles/context-wrapper.md'
import propsInitialState from 'articles/props-in-initial-state.md'
import thirdPartyIntegration from 'articles/third-party-integration.md'

export const RESOURCE_TYPE = [
  { id: '', label: 'All' },
  {
    id: 'blog',
    label: 'Blog',
  },
  {
    id: 'case-studies',
    label: 'Case Studies',
  },
  {
    id: 'press',
    label: 'Press',
  },
]

export const RESOURCE_LIST = [
  {
    id: 'third-party-integration',
    imageUrl: 'https://i.imgur.com/Cij5vdL.png',
    title: 'Ad aliqua cillum in nostrud ad ipsum officia occaecat mollit consequat excepteur.',
    description:
      'Excepteur culpa magna do incididunt sunt irure nostrud. Voluptate ad non cupidatat sunt minim eu eiusmod officia. Laboris proident mollit sunt mollit eiusmod pariatur ad voluptate. Velit anim commodo fugiat Lorem esse nisi nisi deserunt amet id cillum irure ullamco.',
    type: 'blog',
    source: thirdPartyIntegration,
  },
  {
    id: 'context-wrapper',
    imageUrl:
      'https://images.unsplash.com/photo-1477554193778-9562c28588c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
    title: 'Voluptate esse irure exercitation in aliqua.',
    description:
      'Aliquip incididunt laborum laborum sint do eiusmod excepteur est mollit. Ipsum Lorem eu officia ullamco in laborum labore ullamco adipisicing. Consectetur aute duis sint Lorem anim dolore est commodo dolor enim anim dolore in. Excepteur id consectetur ad mollit sit.',
    type: 'press',
    source: contextWrapper,
  },
  {
    id: 'props-in-initial-state',
    imageUrl:
      'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Amet incididunt ex sint consequat cillum voluptate ad.',
    description:
      'Duis aliqua excepteur esse Lorem excepteur esse quis dolore sint nisi id est esse proident. Irure sunt ipsum ad cupidatat magna incididunt. Nostrud nisi consequat eu ipsum tempor anim ex id consectetur irure occaecat.',
    type: 'case-studies',
    source: propsInitialState,
  },
]
