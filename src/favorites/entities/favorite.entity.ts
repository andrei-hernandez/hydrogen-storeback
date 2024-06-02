import { Favorites as FavoriteEntity } from "@prisma/client"
import { ApiProperty } from "@nestjs/swagger"

export class Favorite implements FavoriteEntity {
  constructor(partial: Partial<FavoriteEntity>) {
    Object.assign(this, partial)
  }

  @ApiProperty()
  id: string

  name: string
  @ApiProperty()
  clientId: string

  @ApiProperty()
  productId: string

  @ApiProperty()
  createdAt: Date

  @ApiProperty()
  updatedAt: Date
}
