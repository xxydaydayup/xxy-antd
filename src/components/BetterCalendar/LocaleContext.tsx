import { createContext } from "react";

export interface LocaleContextType {
  locale: string;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: "en-US",
  //   locale: "zh-CN",
});

export default LocaleContext;
