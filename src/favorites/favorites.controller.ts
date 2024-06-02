import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Post
} from "@nestjs/common"
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger"
import { FavoritesService } from "./favorites.service"
import { Favorite } from "./entities/favorite.entity"
import { CreateFavoriteDto } from "./dto/create-favorite.dto"

@Controller("favorites")
@ApiTags("favorites")
export class FavoritesController {
  private logEntity: string = "Favorites Controller"
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get(":clientId")
  @ApiCreatedResponse({ type: Favorite, isArray: true })
  findByClientId(clientId: string): Promise<Favorite[]> {
    new Logger("FavoritesController").log("executing findByClientId controller")
    return this.favoritesService.findByClientId(clientId)
  }

  @Post("/")
  @ApiCreatedResponse({ type: Favorite })
  create(@Body() createFavoriteDto: CreateFavoriteDto): Promise<Favorite> {
    new Logger("FavoritesController").log("executing create controller")
    return this.favoritesService.create(createFavoriteDto)
  }

  @Delete(":productId")
  @ApiCreatedResponse({ type: Favorite })
  deleteByProductId(@Param("productId") productId: string): Promise<Favorite> {
    new Logger("FavoritesController").log("executing delete controller")
    return this.favoritesService.remove(productId)
  }
}
