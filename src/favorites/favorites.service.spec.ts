import { Test, TestingModule } from "@nestjs/testing"
import { FavoritesService } from "./favorites.service"
import { PrismaService } from "../prisma/prisma.service"
import { mockedPrismaService } from "../../test/mocks"

describe("FavoritesService", () => {
  let service: FavoritesService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FavoritesService,
        {
          provide: PrismaService,
          useValue: mockedPrismaService()
        }
      ]
    }).compile()

    service = module.get<FavoritesService>(FavoritesService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })

  it("should create a favorite", async () => {
    const favorite = {
      name: "test",
      clientId: "123",
      productId: "7935981846725"
    }
    expect(await service.create(favorite)).toEqual({
      data: favorite
    })
  })

  it("should find favorites by clientId", async () => {
    const clientId = "7385169723589"
    expect(await service.findByClientId(clientId)).toHaveLength(2)
    expect(await service.findByClientId(clientId)).toEqual([
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

  it("should remove a favorite by productId", async () => {
    const productId = "7935981846725"
    expect(await service.remove(productId)).toHaveProperty(
      "productId",
      productId
    )
  })
})
