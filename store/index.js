export const state = () => ({
  partsItems: [],
  TypeTitles: {
    engine: 'Engine',
    exterior: 'Exterior',
    interior: 'Interior',
    wheels: 'Eheels & Tires',
    batteries: 'Batteries',
    drivetrain: 'Drivetrain',
    grille: 'Front Grille'
  },
  StatusNames: {
    new: 'Brand New',
    surplus: 'Surplus'
  }
})

const sortByTitle = (a, b) => {
  const textA = a.attributes.title.toUpperCase()
  const textB = b.attributes.title.toUpperCase()
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
}

export const mutations = {
  setPartsItems (state, list) {
    list.sort(sortByTitle)
    state.partsItems = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const parts = await require.context('~/content/parts/', false, /\.md$/)
    const partsItems = parts.keys().map((key) => {
      const res = parts(key)
      res.slug = key.slice(2, -3)
      res.route = '/parts/' + res.slug
      return res
    })
    await commit('setPartsItems', partsItems)
  }
}

export const getters = {
}
