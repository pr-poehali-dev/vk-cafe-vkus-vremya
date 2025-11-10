import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const menuItems = [
  {
    category: 'Роллы',
    items: [
      { name: 'Филадельфия', description: 'Лосось, сливочный сыр, авокадо', price: 450, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/ab1574bb-d77a-4242-86c0-5a1e2ed5c377.jpg' },
      { name: 'Калифорния', description: 'Краб, авокадо, огурец, тобико', price: 380, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/ab1574bb-d77a-4242-86c0-5a1e2ed5c377.jpg' },
      { name: 'Дракон', description: 'Угорь, огурец, унаги соус', price: 520, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/ab1574bb-d77a-4242-86c0-5a1e2ed5c377.jpg' },
    ]
  },
  {
    category: 'Суши',
    items: [
      { name: 'Суши с лососем', description: 'Классическое нигири с лососем', price: 180, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/ab1574bb-d77a-4242-86c0-5a1e2ed5c377.jpg' },
      { name: 'Суши с тунцом', description: 'Свежий тунец на рисе', price: 200, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/ab1574bb-d77a-4242-86c0-5a1e2ed5c377.jpg' },
      { name: 'Суши с угрём', description: 'Нежный угорь с соусом', price: 190, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/ab1574bb-d77a-4242-86c0-5a1e2ed5c377.jpg' },
    ]
  },
  {
    category: 'Напитки',
    items: [
      { name: 'Зелёный чай матча', description: 'Традиционный японский чай', price: 150, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/d751e966-4f91-43d0-9a8e-a553a4f8163d.jpg' },
      { name: 'Саке тёплое', description: 'Классическое рисовое вино', price: 350, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/d751e966-4f91-43d0-9a8e-a553a4f8163d.jpg' },
      { name: 'Рамунэ', description: 'Японский газированный напиток', price: 120, image: 'https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/d751e966-4f91-43d0-9a8e-a553a4f8163d.jpg' },
    ]
  },
];

const reviews = [
  {
    name: 'Анна Кузнецова',
    avatar: 'АК',
    rating: 5,
    text: 'Потрясающее место! Атмосфера переносит в Японию. Роллы свежайшие, особенно понравилась Филадельфия.',
    date: '2 дня назад'
  },
  {
    name: 'Дмитрий Соколов',
    avatar: 'ДС',
    rating: 5,
    text: 'Лучшие суши в городе! Повара настоящие мастера своего дела. Обязательно вернёмся.',
    date: '5 дней назад'
  },
  {
    name: 'Мария Петрова',
    avatar: 'МП',
    rating: 5,
    text: 'Уютно, вкусно, красиво. Обслуживание на высшем уровне. Чай матча просто волшебный!',
    date: '1 неделю назад'
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState<'menu' | 'about' | 'reviews'>('menu');

  return (
    <div className="min-h-screen bg-background">
      <header className="relative h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(26, 31, 44, 0.7), rgba(26, 31, 44, 0.7)), url('https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/f839cf7a-9b00-43b1-9946-f309ee1bbe75.jpg')`,
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
            Вкус & Время
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light mb-8">
            味 Традиции японской кухни
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-medium px-8"
              onClick={() => setActiveSection('menu')}
            >
              <Icon name="Utensils" className="mr-2" size={20} />
              Меню
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-secondary text-secondary hover:bg-secondary/10 font-medium px-8"
              onClick={() => setActiveSection('about')}
            >
              <Icon name="Info" className="mr-2" size={20} />
              О кафе
            </Button>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-20 bg-card border-b border-border backdrop-blur-md bg-card/95">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-1 py-2">
            <Button
              variant={activeSection === 'menu' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('menu')}
              className="flex items-center gap-2"
            >
              <Icon name="Utensils" size={18} />
              Меню
            </Button>
            <Button
              variant={activeSection === 'about' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('about')}
              className="flex items-center gap-2"
            >
              <Icon name="Home" size={18} />
              О кафе
            </Button>
            <Button
              variant={activeSection === 'reviews' ? 'default' : 'ghost'}
              onClick={() => setActiveSection('reviews')}
              className="flex items-center gap-2"
            >
              <Icon name="Star" size={18} />
              Отзывы
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'menu' && (
          <div className="space-y-12 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наше меню</h2>
              <p className="text-muted-foreground text-lg">Свежие ингредиенты, традиционные рецепты</p>
            </div>

            {menuItems.map((section) => (
              <div key={section.category} className="space-y-6">
                <h3 className="text-3xl font-semibold text-foreground border-l-4 border-primary pl-4">
                  {section.category}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.items.map((item) => (
                    <Card key={item.name} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-[1.02] bg-card border-border">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl">{item.name}</CardTitle>
                          <Badge variant="secondary" className="bg-primary text-primary-foreground font-bold">
                            {item.price} ₽
                          </Badge>
                        </div>
                        <CardDescription className="text-muted-foreground">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSection === 'about' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">О кафе</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            </div>

            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src="https://cdn.poehali.dev/projects/8f63af22-cfaf-4f6c-bc1a-53b15ea56c93/files/f839cf7a-9b00-43b1-9946-f309ee1bbe75.jpg"
                  alt="Интерьер кафе"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" size={24} />
                    Наша философия
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    "Вкус & Время" — это место, где японские традиции встречаются с современным комфортом. 
                    Мы верим, что хорошая еда требует времени и внимания к деталям.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground flex items-center gap-2">
                    <Icon name="Heart" className="text-primary" size={24} />
                    Качество и свежесть
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    Все блюда готовятся из свежайших ингредиентов, доставляемых ежедневно. 
                    Наши повара прошли обучение в Японии и следуют аутентичным рецептам.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Icon name="Clock" className="mx-auto text-primary mb-3" size={32} />
                    <h4 className="font-semibold text-foreground mb-2">Время работы</h4>
                    <p className="text-sm text-muted-foreground">Пн-Вс: 11:00 - 23:00</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Icon name="MapPin" className="mx-auto text-primary mb-3" size={32} />
                    <h4 className="font-semibold text-foreground mb-2">Адрес</h4>
                    <p className="text-sm text-muted-foreground">ул. Сакуры, 12</p>
                  </div>
                  <div className="text-center p-6 bg-muted/30 rounded-lg">
                    <Icon name="Phone" className="mx-auto text-primary mb-3" size={32} />
                    <h4 className="font-semibold text-foreground mb-2">Телефон</h4>
                    <p className="text-sm text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === 'reviews' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Отзывы гостей</h2>
              <div className="flex items-center justify-center gap-2 text-primary">
                {[...Array(5)].map((_, i) => (
                  <Icon key={i} name="Star" size={24} fill="currentColor" />
                ))}
                <span className="ml-2 text-muted-foreground">5.0 из 5</span>
              </div>
            </div>

            <div className="space-y-6">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground">{review.name}</h4>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Icon key={i} name="Star" size={16} fill="currentColor" className="text-primary" />
                          ))}
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted/30 border-border">
              <CardContent className="p-8 text-center">
                <Icon name="MessageCircle" className="mx-auto text-primary mb-4" size={48} />
                <h3 className="text-xl font-semibold text-foreground mb-2">Поделитесь впечатлениями</h3>
                <p className="text-muted-foreground mb-6">
                  Мы ценим мнение каждого гостя и постоянно работаем над улучшением сервиса
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Edit" className="mr-2" size={18} />
                  Оставить отзыв
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Вкус & Время</h3>
            <p className="text-muted-foreground">Традиции японской кухни с 2020 года</p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
            <p className="text-sm text-muted-foreground pt-4">
              © 2024 Вкус & Время. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
