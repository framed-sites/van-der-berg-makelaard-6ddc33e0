import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <select
      value={lang}
      onChange={(e) => setLang(e.target.value)}
      className="bg-transparent border border-border rounded-md px-2 py-1 text-sm text-foreground/80 hover:text-foreground focus:outline-none focus:ring-1 focus:ring-ring cursor-pointer"
      aria-label="Select language"
    >
          <option value="nl">NL</option>
          <option value="en">EN</option>
    </select>
  )
}
