export interface Icon {
  title: string;
  icon: string;
  text: string;
}

export interface Plan {
  title: string;
  functions: string[];
}

export interface Modal{
  slogan: string,
  description: string,
  icons: Icon[],
  characteristics: string[],
  plans: Plan[],
  video: string,
  btnColor: string,
  cfdi: boolean,
  watermarkSrc: string
}