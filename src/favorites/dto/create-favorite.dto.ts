import { ApiProperty } from "@nestjs/swagger"

export class CreateFavoriteDto {
  @ApiProperty()
  name: string

  @ApiProperty()
  clientId: string

  @ApiProperty()
  productId: string
}
