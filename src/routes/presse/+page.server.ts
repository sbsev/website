import { fetchPage, fetch_yaml_list } from '$lib/fetch'
import type { PageLoad } from './$types'

export const load: PageLoad = () => {
  return {
    page: fetchPage(`presse`),
    pressItems: fetch_yaml_list(`Presse`, `presse#`).then((items) => {
      return items.reduce((acc, itm) => {
        // split items into sub-lists by year
        const year = itm.date.getFullYear()
        if (!acc[year]) acc[year] = []
        acc[year].push(itm)
        return acc
      }, {})
    }),
  }
}
