import { createClient } from '~/plugins/contentful.js'
const client = createClient()

const getContentfulItems = (env, commit) => {
  return Promise.all([
    client.getEntries({
      content_type: 'autoParts',
      order: '-sys.createdAt'
    }),
    client.getEntries({
      content_type: 'category',
      order: '-sys.createdAt'
    })
  ]).then(([autoparts, categories]) => {
    commit('setPartsItems', autoparts)
    commit('setCategories', categories)
    return true
  })
}

export const state = () => ({
  partsItems: [],
  categories: [],
  TypeTitles: {
    engine: 'Engine',
    exterior: 'Exterior',
    interior: 'Interior',
    wheels: 'Wheels & Tires',
    batteries: 'Batteries',
    drivetrain: 'Drivetrain',
    grille: 'Front Grille'
  },
  StatusNames: {
    new: 'Brand New',
    surplus: 'Surplus'
  },
  coverImage: {
    url: 'https://via.placeholder.com/1110x200.png?text=No%20Image%20Found',
    title: 'No Image Found'
  }
})

// const sortByTitle = (a, b) => {
//   const textA = a.fields.title.toUpperCase()
//   const textB = b.fields.title.toUpperCase()
//   return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
// }

export const mutations = {
  setPartsItems (state, list) {
    state.partsItems = list
  },
  setCategories (state, list) {
    state.categories = list
  },
  setCoverImage (state, coverImage) {
    state.coverImage = coverImage
  }
}

export const actions = {
  async nuxtServerInit ({ commit }, { env }) {
    await getContentfulItems(env, commit)
  }
}

export const getters = {
}
