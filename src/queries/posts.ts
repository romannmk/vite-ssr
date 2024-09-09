import { queryOptions } from '@tanstack/react-query'
import { API_URL } from '@/config'
import axios from 'axios'

export type PostType = {
  id: string
  title: string
  body: string
}

const delay = (n = 500) => new Promise((r) => setTimeout(r, n))

const queryFn = async () => {
  await delay(5000)
  return axios.get<PostType[]>(`${API_URL}/products`)
}

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn,
})
