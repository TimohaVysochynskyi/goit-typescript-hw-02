import { useState, useEffect } from "react";

import { fetchImagesWithName } from "../../images-api";

import SearchBar from "../SearchBar/SearchBar.jsx";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import Loader from "../Loader/Loader.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";

import { PhotoDataType } from "../../common.types";

import css from "./App.module.css";

export default function App() {
  const [images, setImages] = useState<PhotoDataType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState<PhotoDataType | null>(null);

  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (query.trim() === "") {
      return;
    }

    async function fetchArticles(): Promise<void> {
      try {
        setError(false);
        setLoading(true);
        const data: any = await fetchImagesWithName(query, page);
        setImages((prevState) => [...prevState, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [page, query]);

  const handleSearch = async (input: string): Promise<void> => {
    setImages([]);
    setQuery(input);
    setPage(1);
  };

  const handleLoadMore = async (): Promise<void> => {
    setPage(page + 1);
  };

  const handleModalOpen = async (data: PhotoDataType): Promise<void> => {
    setIsModal(true);
    setModalData(data);
  };

  const handleModalClose = async (): Promise<void> => {
    setIsModal(false);
    setModalData(null);
    // console.log("Closed");
  };

  return (
    <>
      <main className={css.container}>
        <SearchBar onSearch={handleSearch} />
        {loading && <Loader />}
        {error && <ErrorMessage />}
        {images.length > 0 && (
          <ImageGallery images={images} openModal={handleModalOpen} />
        )}
        {images.length > 5 && (
          <LoadMoreBtn onClick={handleLoadMore} disabled={loading} />
        )}
      </main>
      {isModal && (
        <ImageModal
          image={modalData as PhotoDataType}
          isOpen={isModal}
          onClose={handleModalClose}
        />
      )}
    </>
  );
}
