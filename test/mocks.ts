const favoritesData = [
  {
    id: "dc96c9a7-81cc-43b4-9850-8788e8814f90",
    name: "test",
    clientId: "123",
    productId: "7935981846725",
    createdAt: "2024-06-02 01:50:11.324",
    updatedAt: "2024-06-02 01:50:11.324"
  },
  {
    id: "1bf8119f-ff49-4d6f-b78e-906a621d4137",
    name: "7 Shakra Bracelet",
    clientId: "7385169723589",
    productId: "7935981748421",
    createdAt: "2024-06-02 04:15:17.954",
    updatedAt: "2024-06-02 04:15:17.954"
  },
  {
    id: "8f450aa1-c6a6-4efd-a0f9-9d6250b7f655",
    name: "Gemstone Necklace",
    clientId: "7385169723589",
    productId: "7935982174405",
    createdAt: "2024-06-02 04:43:46.305",
    updatedAt: "2024-06-02 04:43:46.305"
  }
]

export const mockedPrismaService = () => ({
  favorites: {
    create: jest.fn(dto => Promise.resolve({ ...dto })),
    findMany: jest.fn(({ where: { clientId } }) =>
      Promise.resolve(
        favoritesData.filter(favorite => favorite.clientId === clientId)
      )
    ),
    delete: jest.fn(({ where: { productId } }) =>
      // by default the .delete() of the model returns the element that was deleted
      Promise.resolve(
        favoritesData.find(favorite => favorite.productId === productId)
      )
    )
  }
})

export const mockedFavoritesService = () => ({
  findByClientId: jest.fn(clientId =>
    Promise.resolve(
      favoritesData.filter(favorite => favorite.clientId === clientId)
    )
  ),
  create: jest.fn(dto => Promise.resolve({ ...dto })),
  remove: jest.fn(productId => {
    return Promise.resolve(
      favoritesData.find(favorite => favorite.productId === productId)
    )
  })
})
