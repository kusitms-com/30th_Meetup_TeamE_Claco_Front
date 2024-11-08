interface ShowFilterTabProps {
  activeTab: string;
  onTabClick: (tab: string) => void;
}

export const ShowFilterTab = ({
  activeTab,
  onTabClick,
}: ShowFilterTabProps) => {
  return (
    <div className="flex justify-center items-center w-full mt-6 mb-[18px]">
      {["전체", "클래식", "무용"].map((tab) => (
        <button
          key={tab}
          className={`body2-medium py-[7px] rounded-[5px] flex-1 ${
            activeTab === tab
              ? "bg-grayscale-80 text-grayscale-30"
              : "bg-grayscale-20 text-grayscale-60"
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
