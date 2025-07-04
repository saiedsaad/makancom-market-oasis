import Header from "@/components/Header";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CategoryPage = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const { t } = useTranslation();

  const displayName = categoryKey
    ? t(`categories.list.${categoryKey}`)
    : t("categories.all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">{displayName}</h2>
        <p className="text-muted-foreground">{t('categories.allSubtitle')}</p>
      </div>
    </div>
  );
};

export default CategoryPage;
