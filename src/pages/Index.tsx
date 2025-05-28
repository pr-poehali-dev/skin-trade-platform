import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const skins = [
    {
      id: 1,
      name: "AK-47 | Redline",
      price: 2450,
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=300&h=200&fit=crop",
      wear: "Field-Tested",
      category: "rifle",
      float: 0.23,
      rarity: "Classified",
    },
    {
      id: 2,
      name: "AWP | Dragon Lore",
      price: 45000,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=200&fit=crop",
      wear: "Factory New",
      category: "sniper",
      float: 0.01,
      rarity: "Covert",
    },
    {
      id: 3,
      name: "Glock-18 | Fade",
      price: 890,
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=300&h=200&fit=crop",
      wear: "Minimal Wear",
      category: "pistol",
      float: 0.08,
      rarity: "Restricted",
    },
    {
      id: 4,
      name: "M4A4 | Howl",
      price: 8900,
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=300&h=200&fit=crop",
      wear: "Field-Tested",
      category: "rifle",
      float: 0.16,
      rarity: "Contraband",
    },
    {
      id: 5,
      name: "Karambit | Doppler",
      price: 12500,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
      wear: "Factory New",
      category: "knife",
      float: 0.03,
      rarity: "Covert",
    },
    {
      id: 6,
      name: "USP-S | Kill Confirmed",
      price: 1200,
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop",
      wear: "Minimal Wear",
      category: "pistol",
      float: 0.09,
      rarity: "Covert",
    },
  ];

  const categories = [
    { id: "all", name: "Все", icon: "Grid3X3" },
    { id: "rifle", name: "Винтовки", icon: "Target" },
    { id: "pistol", name: "Пистолеты", icon: "Zap" },
    { id: "sniper", name: "Снайперки", icon: "Crosshair" },
    { id: "knife", name: "Ножи", icon: "Sword" },
  ];

  const getRarityColor = (rarity: string) => {
    const colors = {
      Consumer: "bg-gray-500",
      Industrial: "bg-blue-500",
      "Mil-Spec": "bg-purple-500",
      Restricted: "bg-pink-500",
      Classified: "bg-red-500",
      Covert: "bg-orange-500",
      Contraband: "bg-yellow-500",
    };
    return colors[rarity as keyof typeof colors] || "bg-gray-500";
  };

  const filteredSkins = skins.filter((skin) => {
    const matchesSearch = skin.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || skin.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              EasySkins
            </h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/10">
                <Icon name="User" size={20} className="mr-2" />
                Войти
              </Button>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Корзина
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-6">
            Лучшие скины CS2
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Покупайте и продавайте скины CS2 на EasySkins - самой надёжной
            торговой площадке
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Найти скин..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              <Icon name="Search" size={20} />
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500"
                    : "text-white hover:bg-white/10"
                }`}
              >
                <Icon name={category.icon as any} size={16} className="mr-2" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Skins Grid */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkins.map((skin) => (
              <Card
                key={skin.id}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="p-0">
                  <img
                    src={skin.image}
                    alt={skin.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-white mb-2">{skin.name}</CardTitle>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      className={`${getRarityColor(skin.rarity)} text-white`}
                    >
                      {skin.rarity}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-gray-300 border-gray-500"
                    >
                      {skin.wear}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-400">
                      ₽{skin.price.toLocaleString()}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                  <div className="text-sm text-gray-400 mt-2">
                    Float: {skin.float}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/20 border-t border-white/10 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 EasySkins. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
