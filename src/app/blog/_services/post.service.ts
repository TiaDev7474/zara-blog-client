import {httpClient} from "@/app/_lib/axios";

class PostService {
    private    pathname: String = "/posts"
    public async getAllByCategories( per_page: number, current_page: number = 0, category?: string,) {
        //todo implement a helper function that returns a request url with query
        return httpClient.get(`${this.pathname}?per_page=${per_page}&current_page=${current_page}&filter=${category}`);
    }

    //todo: move getAllCategories to category service later
    public async getAllCategoriesFollowedByUser() {
        return httpClient.get(`${this.pathname}/category`)
    }
    public async create(createPostDto: any) {
       return httpClient.post<any>(`${this.pathname}`,createPostDto )
    }
}

export  const postService = new PostService();


