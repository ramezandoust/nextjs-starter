"use client";

import { useTranslations } from "next-intl";
import PageLayout from "../../../components/PageLayout";

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <PageLayout title={t("title")}>
      <p>{t("description")}</p>
    </PageLayout>
  );
};

export default AboutPage;
