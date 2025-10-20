import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Кулинарная Студия</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('hero')} className="hover:text-primary transition-colors">Главная</button>
            <button onClick={() => scrollToSection('menu')} className="hover:text-primary transition-colors">Меню</button>
            <button onClick={() => scrollToSection('chef')} className="hover:text-primary transition-colors">Шеф-повар</button>
            <button onClick={() => scrollToSection('program')} className="hover:text-primary transition-colors">Программа</button>
            <button onClick={() => scrollToSection('booking')} className="hover:text-primary transition-colors">Запись</button>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/8958dfe5-d5b4-44fd-b613-44ac2ce299b5/files/4425e9ec-306b-4582-8fb9-035c5635bda6.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Мастер-класс по итальянской кухне</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">Научитесь готовить аутентичные итальянские блюда от профессионального шеф-повара</p>
          <Button 
            onClick={() => scrollToSection('booking')} 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Записаться на мастер-класс
          </Button>
        </div>
      </section>

      <section id="menu" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Меню мастер-класса</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Блюда, которые вы научитесь готовить</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Паста Карбонара',
                description: 'Классическая римская паста с беконом, яйцами и сыром пекорино',
                icon: 'UtensilsCrossed'
              },
              {
                title: 'Ризотто с грибами',
                description: 'Кремовое ризотто с белыми грибами и пармезаном',
                icon: 'Soup'
              },
              {
                title: 'Тирамису',
                description: 'Легендарный итальянский десерт с кофе и маскарпоне',
                icon: 'Cake'
              }
            ].map((dish, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 animate-scale-in hover:scale-105 border-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center">
                      <Icon name={dish.icon} size={40} className="text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{dish.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{dish.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="chef" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/8958dfe5-d5b4-44fd-b613-44ac2ce299b5/files/edef0eee-4121-418a-b155-95c6465c096c.jpg"
                alt="Шеф-повар"
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
            </div>
            
            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Познакомьтесь с шеф-поваром</h2>
              <h3 className="text-2xl font-semibold text-primary mb-4">Марко Россини</h3>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Профессиональный шеф-повар с 15-летним опытом работы в лучших ресторанах Италии и России.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Обладатель звезды Мишлен, специалист по традиционной итальянской кухне. Марко создает уникальную атмосферу на своих мастер-классах, делясь профессиональными секретами и авторскими рецептами.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Award" className="text-primary" size={24} />
                  <span className="font-semibold">15 лет опыта</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" className="text-primary" size={24} />
                  <span className="font-semibold">Звезда Мишлен</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Users" className="text-primary" size={24} />
                  <span className="font-semibold">500+ учеников</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Программа мастер-класса</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                time: '10:00 - 10:30',
                title: 'Знакомство и введение',
                description: 'Приветствие участников, знакомство с кухней и инструментами'
              },
              {
                time: '10:30 - 12:00',
                title: 'Приготовление пасты Карбонара',
                description: 'Изучение техники приготовления классической римской пасты'
              },
              {
                time: '12:00 - 12:30',
                title: 'Кофе-брейк',
                description: 'Дегустация приготовленных блюд, общение'
              },
              {
                time: '12:30 - 14:00',
                title: 'Ризотто с грибами',
                description: 'Мастер-класс по приготовлению кремового ризотто'
              },
              {
                time: '14:00 - 15:30',
                title: 'Десерт Тирамису',
                description: 'Секреты идеального итальянского десерта'
              },
              {
                time: '15:30 - 16:00',
                title: 'Завершение',
                description: 'Совместная дегустация, вручение сертификатов'
              }
            ].map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all animate-fade-in border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-primary text-white px-4 py-2 rounded-lg font-bold text-center min-w-[140px]">
                        {item.time}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-10"
          style={{
            backgroundImage: 'url(https://cdn.poehali.dev/projects/8958dfe5-d5b4-44fd-b613-44ac2ce299b5/files/af57c7f9-8ecf-4f18-9c50-b1fc9008efa3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Запись на мастер-класс</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">Заполните форму, и мы свяжемся с вами для подтверждения</p>
          
          <Card className="max-w-2xl mx-auto shadow-2xl border-2">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Ваше имя *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше имя"
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@mail.com"
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                    Телефон *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+7 (999) 123-45-67"
                    className="text-base"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Комментарий
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Расскажите о вашем опыте приготовления или задайте вопросы"
                    rows={4}
                    className="text-base"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold mb-4">Кулинарная Студия</h3>
              <p className="text-gray-300">Лучшие мастер-классы по итальянской кухне</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Phone" size={18} />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="Mail" size={18} />
                  info@culinary-studio.ru
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Icon name="MapPin" size={18} />
                  Москва, ул. Примерная, 1
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4 justify-center md:justify-start">
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Facebook" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Instagram" size={24} />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Кулинарная Студия. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
