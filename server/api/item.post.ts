import storage from '../../services/storage'

export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const item = {
    id: (new Date()).getTime(),
    body
  }

  await storage.setItem(`items:${item.id}`, item)

  return {
    status: 201,
    response: item
  }
})