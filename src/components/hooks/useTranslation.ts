import { useLanguage } from "@/context/language-context";
import { translations } from "@/locales/translations";

export const useTranslation = () => {
  const { language } = useLanguage();
  return translations[language];
};
