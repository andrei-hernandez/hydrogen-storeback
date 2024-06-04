import { Test, TestingModule } from "@nestjs/testing"
import { FavoritesController } from "./favorites.controller"
import { FavoritesService } from "./favorites.service"
import { mockedFavoritesService } from "../../test/mocks"

describe("FavoritesController", () => {
  let controller: FavoritesController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoritesController],
      providers: [
        {
          provide: FavoritesService,
          useValue: mockedFavoritesService()
        }
      ]
    }).compile()

    controller = module.get<FavoritesController>(FavoritesController)
  })

  it("should be defined", () => {
    expect(controller).toBeDefined()
  })

  it("should create a favorite", async () => {
    const favorite = {
      name: "test",
      clientId: "123",
      productId: "7935981846725"
    }
    expect(await controller.create(favorite)).toEqual(favorite)
  })

  it("should find favorites by clientId", async () => {
    const clientId = "7385169723589"
    expect(await controller.findByClientId(clientId)).toHaveLength(2)
    expect(await controller.findByClientId(clientId)).toEqual([
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
    ])
  })

  it("should delete a favorite by productId", async () => {
    const productId = "7935981846725"
    expect(await controller.deleteByProductId(productId)).toEqual({
      id: "dc96c9a7-81cc-43b4-9850-8788e8814f90",
      name: "test",
      clientId: "123",
      productId: "7935981846725",
      createdAt: "2024-06-02 01:50:11.324",
      updatedAt: "2024-06-02 01:50:11.324"
    })
  })
})
