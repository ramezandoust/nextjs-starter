import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function LocaleSwitcher() {
  const EN = <Image src="/gb.svg" width={18} height={16} alt="English" />;
  const FA = <Image src="/ir.svg" width={18} height={16} alt="Persian" />;

  const t = useTranslations("LocaleSwitcher");
  const pathname = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "en" ? FA : EN;

  const handleChangePath = () => {
    if (locale === "en") {
      return "/fa" + pathname;
    } else {
      const newPathname = pathname.replace(locale, "en");
      return newPathname;
    }
  };

  return (
    <Link className="nav-link" href={handleChangePath()} prefetch={false}>
      {otherLocale}
    </Link>
  );
}
