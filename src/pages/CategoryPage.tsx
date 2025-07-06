import Header from "@/components/Header";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { products } from "@/lib/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CategoryPage = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  const { t } = useTranslation();
  const [sort, setSort] = useState<'asc' | 'desc'>('asc');

  const items = products
    .filter(p => !categoryKey || p.category === categoryKey)
    .sort((a, b) =>
      sort === 'asc' ? a.price - b.price : b.price - a.price
    );

  const displayName = categoryKey
    ? t(`categories.list.${categoryKey}`)
    : t("categories.all");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-4">{displayName}</h2>
        <p className="text-muted-foreground mb-6">{t('categories.allSubtitle')}</p>

        <div className="flex justify-end mb-6 gap-2">
          <Button
            variant={sort === 'asc' ? 'default' : 'outline'}
            onClick={() => setSort('asc')}
          >
            Price Low-High
          </Button>
          <Button
            variant={sort === 'desc' ? 'default' : 'outline'}
            onClick={() => setSort('desc')}
          >
            Price High-Low
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Card key={item.id} className="overflow-hidden">
              <img src={item.image} alt={item.title} className="h-40 w-full object-cover" />
              <CardContent className="p-4 space-y-2">
                <h3 className="font-semibold line-clamp-2">{item.title}</h3>
                <p className="text-accent font-bold">SYP {item.price.toLocaleString()}</p>
                <p className="text-sm text-muted-foreground">{item.location}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
