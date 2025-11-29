import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Trophy } from 'lucide-react';

const FamilyHistory = () => {
  const milestones = [
    {
      year: '1924',
      title: 'تأسيس العائلة',
      description: 'بداية رحلة عائلة عرب عبد السميع على يد الجد الأكبر أحمد عبد السميع',
      location: 'الرياض',
      icon: Users,
      color: 'bg-primary'
    },
    {
      year: '1950',
      title: 'التوسع والنمو',
      description: 'بداية انتشار أفراد العائلة في مختلف مناطق المملكة',
      location: 'الحجاز ونجد',
      icon: MapPin,
      color: 'bg-accent'
    },
    {
      year: '1975',  
      title: 'الجيل الثالث',
      description: 'ولادة الجيل الثالث وبداية عهد جديد من التقدم والازدهار',
      location: 'جدة والدمام',
      icon: Calendar,
      color: 'bg-secondary'
    },
    {
      year: '2000',
      title: 'العصر الحديث',
      description: 'دخول العائلة في مختلف مجالات الأعمال والتعليم والطب',
      location: 'جميع أنحاء المملكة',
      icon: Trophy,
      color: 'bg-primary'
    }
  ];

  const familyValues = [
    { title: 'التراث', description: 'المحافظة على تقاليدنا العريقة' },
    { title: 'التعليم', description: 'الاستثمار في التعليم والمعرفة' },
    { title: 'التكافل', description: 'التعاون والتضامن بين أفراد العائلة' },
    { title: 'الكرم', description: 'حسن الضيافة والكرم الأصيل' }
  ];

  return (
    <section id="history" className="py-20 bg-gradient-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="family-title text-4xl md:text-5xl text-foreground mb-6">
            تاريخ عرب عبد السميع
          </h2>
          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            رحلة عبر الزمن نحكي فيها قصة عائلة عريقة، قصة محبة وتراث وتضحيات أجيال متعاقبة
            لتبني مستقبلاً مشرقاً لأبنائها وأحفادها
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-border hidden md:block"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                  <Card className="card-family">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`${milestone.color} p-2 rounded-full`}>
                          <milestone.icon size={20} className="text-white" />
                        </div>
                        <Badge variant="secondary" className="family-body font-semibold">
                          {milestone.year}
                        </Badge>
                      </div>
                      <h3 className="family-title text-2xl text-foreground mb-3">
                        {milestone.title}
                      </h3>
                      <p className="family-body text-muted-foreground mb-4 leading-relaxed">
                        {milestone.description}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-accent">
                        <MapPin size={16} />
                        <span className="family-body">{milestone.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex items-center justify-center w-2/12">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-card shadow-lg"></div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Values */}
        <div className="text-center mb-12">
          <h3 className="family-title text-3xl text-foreground mb-8">قيم عائلتنا</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {familyValues.map((value, index) => (
            <Card key={value.title} className="card-family text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h4 className="family-title text-xl text-foreground mb-3">
                  {value.title}
                </h4>
                <p className="family-body text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilyHistory;