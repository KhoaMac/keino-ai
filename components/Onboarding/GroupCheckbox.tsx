import { ICheckBox } from "@/interface";
import { useCallback, useState } from "react";
import RadioButton from "../RadioButton";
import { useDispatch } from "react-redux";
import { setOnboardingCheckedStep } from "@/redux/slice/onboardingSlice";

interface IGroupCheckbox {
  name: string;
  checkboxes: ICheckBox[];
  currentSelection: (n: number) => void;
}

const GroupCheckbox = ({
  name,
  checkboxes,
  currentSelection,
}: IGroupCheckbox) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  /**
   * A function that updates the state of the currently selected checkbox.
   * It also calls the `currentSelection` function with the new index.
   * @param {number} index - The index of the checkbox to select.
   */

  const dispatch = useDispatch();
  const handleChange = useCallback((index: number) => {
    setSelectedIndex(index);
    dispatch(setOnboardingCheckedStep(index));
    currentSelection(index);
  }, [dispatch]);

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center w-full justify-between">
      {checkboxes &&
        checkboxes.map((checkbox, index) => (
          <div key={index} className="w-full">
            <RadioButton
              label={checkbox.label}
              index={index}
              selectedIndex={selectedIndex}
              name={name}
              handleChange={(n: number) => handleChange(n)}
            />
          </div>
        ))}
    </div>
  );
};

export default GroupCheckbox;
