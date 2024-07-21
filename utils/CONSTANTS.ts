import { ICheckBox, ITips } from "@/interface";

const tips: ITips = {
  title: "Pro Tip",
  description:
    "Help Keoni extract your precise brand voice by giving it accurate, up to date information. The more you tell Keoni, the better Keoni gets at understanding you!",
};
const checkboxes: ICheckBox[] = [
  {
    isChecked: true,
    label:
      "Let Keoni extract your brand voice from files, published work or URLs",
  },
  {
    isChecked: false,
    label: "Describe your brand voice to Keoni",
  },
  {
    isChecked: false,
    label: "Quick Start from our templates",
  },
];

const BUTTON_TYPES = {
  DEFAULT: 'default',
  DISABLED: 'disabled',
  OUTLINE: 'outline',
  NONE: 'none',
}

export {
  tips,
  checkboxes,
  BUTTON_TYPES
}
