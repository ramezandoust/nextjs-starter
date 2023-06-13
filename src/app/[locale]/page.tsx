"use client";

import { useTranslations } from "next-intl";
import PageLayout from "../../components/PageLayout";

export default function Index() {
  const t = useTranslations("Index");

  return (
    <PageLayout title={t("title")}>
      <p>{t("description")}</p>
    </PageLayout>
  );
}
