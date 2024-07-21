import { IBrandVoices, ICheckBox, ITips } from "@/interface";
import Avatar06 from "@/public/assets/icons/default-avatar/avatar-6.svg";
import Avatar07 from "@/public/assets/icons/default-avatar/avatar-7.svg";
import Avatar05 from "@/public/assets/icons/default-avatar/avatar-5.svg";

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


const listDescriptions = [
  "dummy 1 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 2 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 3 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 4 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 5 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 6 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 7 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 8 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 9 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
  "dummy 10 - id placerat in quis Nunc malesuada eget ex id enim. id eu commodo at Sed non In eget eu elit hendrerit gravida tincidunt commodo faucibus felis, turpis quam nibh ullamcorper elit efficitur. convallis. tortor. ullamcorper Ut dolor non quam",
];

const BUTTON_TYPES = {
  DEFAULT: 'default',
  DISABLED: 'disabled',
  OUTLINE: 'outline',
  NONE: 'none',
}

const TABLE_HEADERS_BRAND_VOICES = [
  { name: "Brand Voice" },
  { name: "Avatar" },
  { name: "Description" },
  { name: "Detail" },
  { name: "Default?" }
];

const TABLE_DATA_BRAND_VOICES: IBrandVoices[] = [
  {
    name: "Funny Cola",
    avatar: Avatar05,
    description: "Optimistic, hopeful, joyful",
    isDefault: true,
  },
  {
    name: "Professional",
    avatar: Avatar07,
    description: "Expert, competent, skilled",
    isDefault: false,
  },
  {
    name: "Humorous",
    avatar: Avatar06,
    description: "Witty, amusing, comical",
    isDefault: false,
  },
];

export {
  tips,
  checkboxes,
  BUTTON_TYPES,
  listDescriptions,
  TABLE_HEADERS_BRAND_VOICES,
  TABLE_DATA_BRAND_VOICES,
}
