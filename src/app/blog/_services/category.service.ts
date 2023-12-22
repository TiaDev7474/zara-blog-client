import {httpClient} from "@/app/_lib/axios";

class CategoryService {
    private    pathname: String = "/category"

    public async searchCategoryByDesignation(query: string) {
        return httpClient.get(`${this.pathname}?query=${query}`)
    }
}

export const categoryService = new CategoryService();