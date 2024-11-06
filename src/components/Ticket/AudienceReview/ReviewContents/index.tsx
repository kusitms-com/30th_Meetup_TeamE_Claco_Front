import { ReactComponent as Required } from "@/assets/svgs/required.svg";
import { ReactComponent as Plus } from "@/assets/svgs/plus.svg";
import { ReviewContentsProps } from "@/types";

export const ReviewInput = ({
  value,
  onChange,
  files,
  onFileChange,
}: ReviewContentsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    if (text.length <= 500) {
      onChange(text);
    }
  };

  return (
    <>
      <div className="flex flex-col mt-8">
        <div className="flex">
          <span className="headline2-bold text-grayscale-80">
            감상평을 남겨주세요
          </span>
          <Required />
        </div>
        <div className="h-[214px] flex items-end flex-col gap-4 mt-5 px-[19px] pt-[21px] pb-[14px] bg-grayscale-20 rounded-[5px]">
          <textarea
            placeholder={`감상 포인트, 연주자의 음악과 연기, 스토리, 무대 연출,\n공연의 완성도 등 공연에 대해 느낀 점과 기억에 남는\n모든 것을 자유롭게 작성해보세요.`}
            className="resize-none w-full min-h-[140px] bg-transparent text-grayscale-80 body2-medium outline-none placeholder:text-grayscale-60"
            value={value}
            onChange={handleChange}
          />
          <span className="self-end caption-12 text-grayscale-60">
            {value.length}/500
          </span>
        </div>
      </div>
      <div className="flex flex-col mt-8 mb-8">
        <span className="headline2-bold text-grayscale-80">
          사진 또는 비디오를 첨부해 <br />
          보다 생생한 리뷰를 공유해주세요.
        </span>
        <div className="flex mt-5 gap-3">
          {files.length < 3 && (
            <label className="w-[84px] h-[84px] bg-grayscale-30 rounded-[5px] flex items-center justify-center flex-col cursor-pointer">
              <input
                type="file"
                multiple
                accept="image/*,video/*"
                onChange={onFileChange}
                className="hidden"
              />
              <Plus className="text-grayscale-60" />
              <span className="text-grayscale-60 caption-12">
                {files.length}/3
              </span>
            </label>
          )}

          {files.map((file, index) => (
            <div
              key={index}
              className="w-[84px] h-[84px] rounded-[5px] overflow-hidden"
            >
              {file.type.startsWith("image") ? (
                <img
                  src={URL.createObjectURL(file)}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <video
                  src={URL.createObjectURL(file)}
                  controls
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
