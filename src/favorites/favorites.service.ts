import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"
import { CreateFavoriteDto } from "./dto/create-favorite.dto"
import { Favorite } from "./entities/favorite.entity"

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  async create(createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    return this.prisma.favorites.create({ data: createFavoriteDto })
  }

  async findByClientId(clientId: string): Promise<Favorite[]> {
    return this.prisma.favorites.findMany({ where: { clientId } })
  }

  async remove(productId: string): Promise<Favorite> {
    return this.prisma.favorites.delete({ where: { productId } })
  }
}
