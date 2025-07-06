
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, X, MapPin, DollarSign } from "lucide-react";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onLocationFilter: (location: string) => void;
  onPriceFilter: (minPrice: string, maxPrice: string) => void;
  activeFilters: string[];
  onClearFilters: () => void;
}

const SearchFilters = ({ 
  onSearch, 
  onCategoryFilter, 
  onLocationFilter, 
  onPriceFilter,
  activeFilters,
  onClearFilters 
}: SearchFiltersProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const { t } = useTranslation();

  const categories = [
    'all',
    'cars',
    'realEstate',
    'phones',
    'furniture',
    'motorcycles',
    'electronics',
    'homeAppliances'
  ];

  const locations = [
    'All Locations',
    'Damascus',
    'Rif Dimashq',
    'Aleppo',
    'Homs',
    'Hama',
    'Latakia',
    'Tartus',
    'Daraa',
    'As-Suwayda',
    'Quneitra',
    'Idlib',
    'Al-Hasakah',
    'Deir ez-Zor',
    'Raqqa'
  ];

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handlePriceFilter = () => {
    onPriceFilter(minPrice, maxPrice);
  };

  return (
    <div className="space-y-4">
      {/* Main Search */}
      <div className="flex gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <Input
            placeholder={t('header.searchPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            className="pl-10 pr-4 py-3 text-lg rounded-full border-2 border-primary/20 focus:border-primary"
          />
        </div>
        <Button
          onClick={handleSearch}
          className="rounded-full px-8 bg-primary hover:bg-primary/90"
        >
          {t('header.search')}
        </Button>
        <Button 
          variant="outline" 
          onClick={() => setShowFilters(!showFilters)}
          className="rounded-full px-6"
        >
          <Filter className="w-4 h-4 mr-2" />
          {t('search.filters')}
        </Button>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-muted-foreground">{t('search.activeFilters')}</span>
          {activeFilters.map((filter, index) => (
            <Badge key={index} variant="secondary" className="flex items-center gap-1">
              {filter}
              <X className="w-3 h-3 cursor-pointer" onClick={onClearFilters} />
            </Badge>
          ))}
          <Button variant="ghost" size="sm" onClick={onClearFilters}>
            {t('search.clearAll')}
          </Button>
        </div>
      )}

      {/* Advanced Filters */}
      {showFilters && (
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">{t('search.category')}</label>
                <Select onValueChange={onCategoryFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('search.selectCategory')} />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category === 'all' ? t('categories.all') : t(`categories.list.${category}`)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">{t('search.location')}</label>
                <Select onValueChange={onLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder={t('search.selectLocation')} />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((location) => (
                      <SelectItem key={location} value={location}>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {location}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">{t('search.minPrice')}</label>
                <Input
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">{t('search.maxPrice')}</label>
                <div className="flex gap-2">
                  <Input
                    type="number"
                    placeholder="Any"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <Button onClick={handlePriceFilter} size="sm">
                    <DollarSign className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-4 text-right">
              <Button className="px-6" onClick={handleSearch}>
                {t('header.search')}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchFilters;
