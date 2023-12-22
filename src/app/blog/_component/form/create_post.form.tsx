"use client"
import TagSelectionInput , {Tag} from "@/app/blog/_component/input/tag_selection.input";
import Button from "@/app/component/button";
import React , {useRef , useState} from "react";
import UploadIcon from "@/app/blog/_component/icons/upload.icon";
import Image from "next/image";
import CategorySelectionInput from "@/app/blog/_component/input/category_selection.input";




export default function CreatePostForm() {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [selectedImage, setSelectedImage] = useState<File>();
    const [tags, setTags] = useState<Tag[]>([]);
    const [title, setTitle] = useState<string>("");
    const [content, setContent] = useState<string>("");
    const [category, setCategory] = useState<Tag[]>([])
    const handleBrowseFileCLick = () => {
        if(fileInputRef.current) {
            fileInputRef.current.click()
        }
    }
    const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.files){
            setSelectedImage(event.target.files[0]);
        }
    }
    const handleRemoveSelectedImage = () => {
        setSelectedImage(undefined)
    }

    const handleSelectTags = (selectedTag: Tag) => {
        const isAlreadySelected = tags.some(tag => tag.id === selectedTag.id)
        if(isAlreadySelected){
            return
        }
        setTags(prevState => [...prevState,selectedTag])
    }

    const handleRemoveTag = (tagToRemove: Tag) => {
        setTags(prevState => prevState.filter(tag => tag.id !== tagToRemove.id))
    }

    const handleSelectCategory = (selectedCategory: Tag) => {
        const isAlreadySelected = category.some(category => category.id === selectedCategory.id)
        if(isAlreadySelected){
            return
        }
        setCategory(prevState => [...prevState,selectedCategory])
    }
    const handleRemoveCategory = (categoryToRemove: Tag) => {
        setCategory(prevState => prevState.filter(category => category.id !== categoryToRemove.id))
    }
    //todo: Refactor this file
    const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const formdata = new FormData()
        formdata.append('title', title);
        formdata.append('content', content);
        const tagsData = tags.map(tag => tag.id);
        tagsData.forEach(tagId => {
            formdata.append('tags[]', tagId.toString());
        });


    }

    return (
        <form className="max-w-lg mx-auto">
            <div className="mb-5">
                <label htmlFor="title" className="form-label">Title</label>
                <span className="form-helper-text">Enter a captivating title for your blog post. Make it concise and engaging</span>
                <input
                    name="title"
                    type="text"
                    id="title"
                    className="form-input"
                    placeholder=''
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <label htmlFor="content" className="form-label mb-2">Content</label>
                <textarea
                    name="content"
                    id="content"
                    className="form-input no-scrollbar resize-none"
                    rows={4}
                    placeholder="Compose the main content of your blog post here.."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <div className="mb-5">
                <CategorySelectionInput onSelectedCategory={handleSelectCategory}  onRemoveCategory={handleRemoveCategory} category={category} />
            </div>
            <div className="mb-5">
                <TagSelectionInput onSelectedTags={handleSelectTags} onRemoveTag={handleRemoveTag} tags={tags}/>
            </div>
            <div className="mb-5">
                <span className="form-helper-text">Choose image relevant to your content</span>
                <div className="w-full h-32 flex flex-col justify-center items-center rounded-lg border bg-gray-100 dark:bg-background_dark border-dashed">
                    <label htmlFor="file">
                        <input
                            id="file"
                            type="file"
                            className="hidden"
                            accept="image/*"
                            ref={fileInputRef}
                            onChange={onFileInputChange}
                        />
                    </label>
                    <div>
                        <button
                            onClick={handleBrowseFileCLick}
                            type="button"
                            className="flex flex-col justify-center items-center dark:text-white underline dark:hover:text-secondary hover:text-secondary text-black"
                        >
                            <span>
                                <UploadIcon />
                            </span>
                            <span>
                                click to upload
                            </span>
                        </button>
                    </div>
                </div>
                <div className="p-4">
                    {
                        selectedImage && (
                            <div className="relative w-40 ">
                                <Image
                                    src={URL.createObjectURL(selectedImage)}
                                    alt="image preview of the selected image"
                                    width={150}
                                    height={100}
                                />
                                <button
                                    onClick={handleRemoveSelectedImage}
                                    className="absolute flex justify-center items-center top-0 right-0 bg-white rounded-full p-1 hover:text-secondary hover:bg-opacity-80 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18"></line>
                                        <line x1="6" y1="6" x2="18" y2="18"></line>
                                    </svg>
                                </button>
                            </div>
                        )
                    }
                </div>

            </div>

            <Button
                isLink={false} type="primary" label="Publish" onClick={handleSubmit}/>
        </form>
    )
}