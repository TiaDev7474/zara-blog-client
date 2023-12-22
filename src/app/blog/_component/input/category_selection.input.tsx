import SelectionInput from "@/app/blog/_component/input/selection.input";
import {Tag} from "@/app/blog/_component/input/tag_selection.input";
import React , {useCallback , useState} from "react";
import {useFetchCategoryByDesignation , useFetchTagsByDesignation} from "@/app/blog/_hooks";


export default function CategorySelectionInput({onRemoveCategory,onSelectedCategory, category}: {onSelectedCategory: (item: Tag) => void , onRemoveCategory: (item: Tag) => void, category: Tag[]}) {
    const [query, setQuery] = useState<string>("");
    const {data, isLoading, isSuccess} = useFetchCategoryByDesignation(query)

    const handleSelectedCategory = (selectedCategory: Tag) => {
        onSelectedCategory(selectedCategory)
        setQuery("")
    }
    const handleCancelClick = useCallback((categoryToRemove: Tag) => {
        onRemoveCategory(categoryToRemove)
    },[])

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setQuery(e.target.value)
    }

    return (
        <SelectionInput
            label="Catgeory"
            helperText="Choose one relevant  category to your post"
            selectedItems={category}
            onItemSelect={handleSelectedCategory}
            onItemRemove={onRemoveCategory}
            onSearchInputChange={handleSearchInput}
            searchQuery={query}
            isLoading={isLoading}
            isSuccess={isSuccess}
            searchResults={data?.data.result}
        />
    )
}