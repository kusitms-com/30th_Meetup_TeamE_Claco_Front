import { ReactComponent as Search } from "@/assets/svgs/search.svg";
import { SearchBarProps } from "@/types";

export const SearchBar = ({
  value,
  onChange,
  onKeyDown,
  children,
}: SearchBarProps) => {
  return (
    <div className="w-full flex items-center pl-[13px] pr-2 py-[15px] rounded-[7px] bg-grayscale-30 gap-[7px]">
      <Search width="18" height="18" viewBox="0 0 24 24" color="#8A8585" />
      <input
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={children}
        className="flex flex-grow w-full justify-center bg-grayscale-30 text-grayscale-80 text-body2-medium outline-none placeholder:text-grayscale-60"
      />
    </div>
  );
};
