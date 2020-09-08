import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './interfaces/product.interface';

@Controller('products')
export class ProductsController {
  private readonly productsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }

  @Get()
  findAll(): Product[] {
    return this.productsService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string): Product {
    return this.productsService.findById(id);
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto): Product {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Product {
    return this.productsService.update(id, updateProductDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    this.productsService.delete(id);
  }
}
