import React, { useState, useEffect } from "react";
import Plus from "../../assets/svg/plus_bc.svg";

interface PhotoUploaderProps {
  currentAvatar: string | null | any;  // Початковий аватар
  onUpload: (photo: File) => void;  // Передаємо фото для завантаження
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({ currentAvatar, onUpload }) => {
  const [photo, setPhoto] = useState<string | null>(currentAvatar);  // Стан для попереднього перегляду фото

  // Використовуємо useEffect для оновлення стану photo, якщо currentAvatar змінюється
  useEffect(() => {
    if (currentAvatar) {
      setPhoto(currentAvatar);  // Якщо є currentAvatar, оновлюємо фото
    }
  }, [currentAvatar]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const uploadedPhoto = reader.result as string;
        setPhoto(uploadedPhoto);  // Оновлюємо попередній перегляд фото
        onUpload(file);  // Передаємо файл для завантаження
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    const inputElement = document.getElementById("fileInput") as HTMLInputElement;
    inputElement.value = "";  // Скидаємо вибір файлу
    inputElement.click();  // Імітуємо натискання для вибору нового файлу
  };

  return (
    <div className="flex justify-center items-center">
      {photo ? (
        <div className="relative">
          <img
            className="w-20 h-20 object-cover rounded-full"
            src={photo}
            alt="Uploaded Avatar"
          />
          <button
            className="absolute bottom-0 right-0 bg-white rounded-full p-1"
            onClick={handleButtonClick}
          >
            <img className="w-6 h-6" src={Plus} alt="Change Avatar" />
          </button>
        </div>
      ) : (
        <button
          className="w-20 h-20 bg-white rounded-full flex justify-center items-center"
          onClick={handleButtonClick}
        >
          <img className="size-10" src={Plus} alt="Upload Avatar" />
        </button>
      )}
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </div>
  );
};

export default PhotoUploader;
