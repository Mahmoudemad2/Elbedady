import { Calendar, Gift, Heart, Cake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const FamilyEvents = () => {
  const events = [
    {
      id: 1,
      title: "عيد ميلاد الجد أحمد",
      date: "15 مارس",
      type: "birthday",
      description: "احتفال بعيد ميلاد الجد أحمد الثمانين",
      icon: Cake,
      color: "bg-primary"
    },
    {
      id: 2,
      title: "ذكرى زواج العم محمد وخالة فاطمة",
      date: "22 أبريل",
      type: "anniversary",
      description: "الذكرى الخامسة والعشرين لزواجهما المبارك",
      icon: Heart,
      color: "bg-accent"
    },
    {
      id: 3,
      title: "زفاف سارة",
      date: "10 مايو",
      type: "wedding",
      description: "زفاف ابنة العائلة سارة في حفل جميل",
      icon: Gift,
      color: "bg-secondary"
    },
    {
      id: 4,
      title: "تخرج أحمد من الجامعة",
      date: "20 يونيو",
      type: "graduation",
      description: "احتفال بتخرج أحمد من كلية الهندسة",
      icon: Gift,
      color: "bg-muted"
    },
    {
      id: 5,
      title: "لم شمل العائلة السنوي",
      date: "5 أغسطس",
      type: "reunion",
      description: "اللقاء السنوي لجميع أفراد عائلة عرب عبد السميع",
      icon: Calendar,
      color: "bg-primary"
    },
    {
      id: 6,
      title: "عيد ميلاد الجدة خديجة",
      date: "12 سبتمبر",
      type: "birthday",
      description: "احتفال بعيد ميلاد الجدة خديجة الخامس والسبعين",
      icon: Cake,
      color: "bg-accent"
    }
  ];

  const getEventTypeLabel = (type: string) => {
    const types = {
      birthday: "عيد ميلاد",
      anniversary: "ذكرى زواج",
      wedding: "زفاف",
      graduation: "تخرج",
      reunion: "لم شمل"
    };
    return types[type as keyof typeof types] || type;
  };

  return (
    <section className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="family-title text-4xl md:text-5xl text-foreground mb-6">
            المناسبات العائلية
          </h2>
          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto">
            نحتفل معاً بكل المناسبات الجميلة التي تجمع عائلة عرب عبد السميع
            في لحظات فرح وسعادة لا تُنسى
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <Card 
                key={event.id} 
                className="card-family group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="mb-2 w-fit mx-auto">
                    {getEventTypeLabel(event.type)}
                  </Badge>
                  <CardTitle className="family-title text-xl text-card-foreground">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center mb-4 text-primary">
                    <Calendar className="w-5 h-5 ml-2" />
                    <span className="family-body font-semibold text-lg">
                      {event.date}
                    </span>
                  </div>
                  <p className="family-body text-muted-foreground leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="family-title text-4xl text-primary mb-2">12</div>
            <p className="family-body text-muted-foreground">مناسبة سنوية</p>
          </div>
          <div className="text-center">
            <div className="family-title text-4xl text-primary mb-2">5</div>
            <p className="family-body text-muted-foreground">أعياد ميلاد</p>
          </div>
          <div className="text-center">
            <div className="family-title text-4xl text-primary mb-2">3</div>
            <p className="family-body text-muted-foreground">ذكريات زواج</p>
          </div>
          <div className="text-center">
            <div className="family-title text-4xl text-primary mb-2">1</div>
            <p className="family-body text-muted-foreground">لم شمل سنوي</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyEvents;