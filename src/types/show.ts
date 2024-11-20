export type Show = {
  id: number;
  posterImage: string;
  showType: string;
  status: string;
  defaultLiked: boolean;
  title: string;
  location: string;
  date: string;
  keywords: string[];
  isLiked: boolean;
};

export type UseSearchAndFilterProps = {
  initialShowData: Show[];
  activeTab: string;
};

export type ShowFilterProps = {
  onClose: () => void;
  onApply: (
    price: string,
    location: string,
    date: string,
    feature: string
  ) => void;
};

export type ClacoPickShowProps = {
  imageSrc: string;
  title: string;
};

export type ClacoPickProps = {
  userName: string;
  picks: { imageSrc: string; title: string }[];
};

export type TabMenuItem = {
  value: TabMenu;
  label: string;
};

export type TabMenu = "서양음악(클래식)" | "무용" | null;

export type ShowFilterTabProps = {
  activeTab: TabMenu;
  onTabClick: (tab: TabMenu) => void;
  className?: string;
};
