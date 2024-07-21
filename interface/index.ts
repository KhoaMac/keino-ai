export interface IStepper {
  index: number;
  status: boolean;
  title: string;
}

export interface ITips {
  title: string
  description: string
}

export interface ICheckBox {
  isChecked: boolean
  label?: string
}
