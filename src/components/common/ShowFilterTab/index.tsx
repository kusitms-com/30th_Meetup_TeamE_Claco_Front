import { ShowFilterTabProps } from "@/types";

export const ShowFilterTab = ({
  activeTab,
  onTabClick,
  className = "",
}: ShowFilterTabProps) => {
  return (
    <div className={`flex justify-center bg-grayscale-20 rounded-[5px] items-center w-full ${className}`}>
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
