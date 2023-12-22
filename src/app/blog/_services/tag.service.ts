import {httpClient} from "@/app/_lib/axios";

class TagService {
    private pathname = "/tags"

    public getTagsByDesignation(query: string) {
        const params = {query: query};
        const searchParams = new URLSearchParams(params);
        return httpClient.get(`${this.pathname}?${searchParams}`)
    }
}

export const tagService = new TagService();