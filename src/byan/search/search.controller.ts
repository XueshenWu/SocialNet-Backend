import { Controller, NotFoundException, Post, Query } from '@nestjs/common';
import { SearchService } from './search.service';

@Controller('/api/search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post('/post')
  async searchPosts(@Query('q') query: string): Promise<any> {
    const searchResults = await this.searchService.searchPosts(query);
    if (!searchResults) {
      throw new NotFoundException('No posts found');
    }
    console.log(JSON.stringify(searchResults, null, 2));
    return searchResults;
  }

}
