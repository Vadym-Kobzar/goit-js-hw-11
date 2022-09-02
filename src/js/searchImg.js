const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '29619891-3e3e35bd6f3c3cf8343961e92';

export default class Api {
  constructor() {
    this.currentPage = 1;
    this.searchQuery = '';
    this.pages = 40;
  }

  async fetchGallery() {
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.pages}&page=${this.currentPage}`
      );
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  incrementCurrentPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }
}
