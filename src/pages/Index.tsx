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
      <header className="bg-black/20 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={24} className="text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">SkinMarket</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Магазин
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Продать
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Инвентарь
              </a>
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white"
              >
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-white mb-4">
            Лучшие скины <span className="text-purple-400">CS:GO</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Покупай и продавай скины безопасно. Мгновенные сделки, низкие
            комиссии, честные цены.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              placeholder="Поиск скинов..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-black/30 border-purple-500/30 text-white placeholder:text-gray-400"
            />
            <Button className="bg-purple-600 hover:bg-purple-700 whitespace-nowrap">
              <Icon name="Search" size={16} className="mr-2" />
              Найти
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 bg-black/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                15,847
              </div>
              <div className="text-gray-400">Активных предложений</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                ₽2.4M
              </div>
              <div className="text-gray-400">Оборот за день</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                98.7%
              </div>
              <div className="text-gray-400">Успешных сделок</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-1">
                0.5%
              </div>
              <div className="text-gray-400">Комиссия</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "border-purple-500/30 text-purple-400 hover:bg-purple-500/20"
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
                className="bg-black/30 border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img
                      src={skin.image}
                      alt={skin.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge
                        className={`${getRarityColor(skin.rarity)} text-white`}
                      >
                        {skin.rarity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-white text-lg mb-2 group-hover:text-purple-400 transition-colors">
                    {skin.name}
                  </CardTitle>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Износ:</span>
                      <span className="text-gray-300">{skin.wear}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Float:</span>
                      <span className="text-gray-300">{skin.float}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-400">
                      ₽{skin.price.toLocaleString()}
                    </span>
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-1" />
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Icon name="Gamepad2" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold text-white">SkinMarket</span>
              </div>
              <p className="text-gray-400">
                Надежная торговая площадка для CS:GO скинов
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как купить
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Гарантии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Как продать
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Комиссии
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Выплаты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Правила
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Помощь
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 SkinMarket. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
