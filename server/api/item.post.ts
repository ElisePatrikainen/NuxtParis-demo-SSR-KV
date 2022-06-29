
export default defineEventHandler(async (event) => {
  const body = await useBody(event)

  const item = {
    id: (new Date()).getTime(),
    body
  }

  const storage = useStorage()
  await storage.setItem(`db:items:${item.id}`, item)

  return {
    status: 201,
    response: item
  }
})
