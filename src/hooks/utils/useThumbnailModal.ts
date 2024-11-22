import { useState, useEffect } from "react";
import { Swiper as SwiperType } from "swiper";

export type UseThumbnailModalReturn = {
  thumbsSwiper: SwiperType | null;
  isThumbnailShow: boolean;
  isAnimating: boolean;
  selectIndex: SelectThumbnail;
  setThumbsSwiper: (swiper: SwiperType | null) => void;
  setSelectIndex: (index: SelectThumbnail) => void;
  handleImageClick: () => void;
};

export type SelectThumbnail = {
  page: number;
  index: number;
};

const useThumbnailModal = (): UseThumbnailModalReturn => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [isThumbnailShow, setIsThumbnailShow] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [selectIndex, setSelectIndex] = useState<SelectThumbnail>({
    page: 1,
    index: 0,
  });

  useEffect(() => {
    if (isThumbnailShow) {
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        setIsAnimating(true);
      }, 50);
    } else {
      document.body.style.overflow = "unset";
      setIsAnimating(false);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isThumbnailShow]);

  const handleImageClick = () => {
    if (isThumbnailShow) {
      setIsAnimating(false);
      setTimeout(() => {
        setIsThumbnailShow(false);
      }, 300);
    } else {
      setIsThumbnailShow(true);
    }
  };

  return {
    thumbsSwiper,
    isThumbnailShow,
    isAnimating,
    selectIndex,
    setThumbsSwiper,
    setSelectIndex,
    handleImageClick,
  };
};

export default useThumbnailModal;
