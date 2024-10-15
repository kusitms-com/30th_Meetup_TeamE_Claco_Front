import { ConfirmButton } from "@/components/Login/button";

export const SelectFeature = ({ onConfirm }: { onConfirm: () => void }) => {
    // const [selectedFeature, setSelectedFeature] = useState<string[]>([]);

    // const handleFeatureClick = (feature: string) => {
    //     if (selectedFeature.includes(feature)) {
    //     setSelectedFeature(selectedFeature.filter((feat) => feat !== feature));
    //     } else {
    //     setSelectedFeature([...selectedFeature, feature]);
    //     }
    // };

    return(
        <div className="flex flex-col justify-between h-full">
            <div>
                
            </div>
            <ConfirmButton isChecked={true} onClick={onConfirm}>
                다음
            </ConfirmButton>
        </div>
    );
};