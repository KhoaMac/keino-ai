import { ICheckBox } from "@/interface";
import { useState } from "react";

interface IGroupCheckbox {
  name: string
  checkboxes: ICheckBox[];
  currentSelection: (n: number) => void
}

const GroupCheckbox = ({name, checkboxes, currentSelection }: IGroupCheckbox) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  /**
   * A function that updates the state of the currently selected checkbox.
   * It also calls the `currentSelection` function with the new index.
   * @param {number} index - The index of the checkbox to select.
   */
  const handleChange = (index: number) => {
    setSelectedIndex(index);
    currentSelection(selectedIndex)
  };

  return (
    <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center w-full justify-between">
      {checkboxes && checkboxes.map((checkbox, index) => (
        <label
          key={index}
          htmlFor={`${name}-${index}`}
          className={`group-check-boxes-container relative cursor-pointer md:max-w-[11.25rem] w-full flex items-center gap-2.5 bg-gray-scale-15 border-0.5 ${
            selectedIndex === index ? "border-primary" : "border-gray-scale-20"
          } rounded-lg p-2.5 min-h-[7.8125rem] h-auto`}
        >
          <input
            type="radio"
            checked={selectedIndex === index}
            name={name}
            id={`${name}-${index}`}
            onChange={() => handleChange(index)}
            className="hidden absolute opacity-0 cursor-pointer"
          />
          <span className="custom-radio-checked"></span>
          <span className="text-body-medium-regular text-gray-scale-60 pl-10">
            {checkbox.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default GroupCheckbox;
