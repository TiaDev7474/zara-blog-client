import React , {useCallback , useState} from "react";
import {useFetchTagsByDesignation} from "../../_hooks";
import SelectionInput , {SelectableItem} from "@/app/blog/_component/input/selection.input";

export type Tag = {
    id: number,
    designation: string
}


export default function TagSelectionInput({onSelectedTags, onRemoveTag, tags}: {onSelectedTags: (tag: Tag) => void, onRemoveTag:(tag: Tag) => void,tags: Tag[]}) {
    const [query, setQuery] = useState<string>("");
    const {data, isLoading, isSuccess} = useFetchTagsByDesignation(query)

    const handleSelectedTag = (selectedTag: Tag) => {
       onSelectedTags(selectedTag)
       setQuery("")
    }
    const handleCancelClick = useCallback((tagToRemove: Tag) => {
       onRemoveTag(tagToRemove)
    },[])

    const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setQuery(e.target.value)
    }

    return (
        <React.Fragment>
           <SelectionInput
               label="Tags"
               helperText="Choose tags (up to 5) so readers know what your blog is about "
               selectedItems={tags}
               onItemSelect={handleSelectedTag}
               onItemRemove={handleCancelClick}
               onSearchInputChange={handleSearchInput}
               searchQuery={query}
               isLoading={isLoading}
               isSuccess={isSuccess}
               searchResults={data?.data.result}
           />
        </React.Fragment>
    )
}

