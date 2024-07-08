import { ChangeEvent, useState, DragEvent } from "react";
import cn from "classnames";
import useFormContext from "../hooks/use-form-context";

type selectedImage = {
  name: string;
  url: string;
};

const ImageDropdown = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const {
    actions: { setData },
    state: { data },
  } = useFormContext();

  const addImages = (files: FileList) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].type.split("/")[0] !== "image") continue;
      if (!data.images.some((img) => img.name === files[i].name)) {
        setData((prevData) => ({
          ...prevData,
          images: [
            ...data.images,
            { name: files[i].name, url: URL.createObjectURL(files[i]) },
          ],
        }));
      }
    }
  };
  const deleteImage = (index: number) => {
    setData((prevData) => ({
      ...prevData,
      images: data.images.filter((_, i) => i !== index),
    }));
  };

  const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files as FileList;
    if (files.length === 0) return;
    addImages(files);
  };
  const dragOverHandler = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = "copy";
  };
  const dragLeaveHandler = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
  };
  const dropHandler = (event: DragEvent) => {
    event.preventDefault();
    setIsDragging(false);
    const files = event.dataTransfer.files as FileList;
    addImages(files);
  };

  return (
    <div>
      <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
        Загрузите скриншоты проекта
      </h3>
      <div
        className="flex items-center justify-center w-full"
        onDragOver={dragOverHandler}
        onDragLeave={dragLeaveHandler}
        onDrop={dropHandler}
      >
        <label
          htmlFor="dropzone-file"
          className={cn(
            "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500",
            {
              ["border-purple-500 bg-purple-50"]: isDragging,
            }
          )}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold" role="button">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={inputHandler}
            multiple
          />
        </label>
      </div>
      <div className="w-full h-auto flex gap-1 flex-wrap mt-4">
        {data.images.map((img, i) => (
          <div className="w-[75px] h-[75px] mr-[5px] relative" key={img.name}>
            <img
              src={img.url}
              alt="photo"
              className="w-full h-full rounded-md"
            />
            <span
              onClick={() => deleteImage(i)}
              className="absolute right-[5px] top-[-2px] text-purple-700 cursor-pointer"
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropdown;
