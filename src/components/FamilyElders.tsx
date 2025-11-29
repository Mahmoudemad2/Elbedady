import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Crown, Heart, Star, Users, Quote, Calendar } from 'lucide-react';

interface Elder {
  id: string;
  name: string;
  title: string;
  age: number;
  wisdom: string;
  achievements: string[];
  image?: string;
  birthYear: number;
}

const eldersData: Elder[] = [
  {
    id: '1',
    name: 'الحاج محمد عبد السميع',
    title: 'رب الأسرة',
    age: 82,
    wisdom: 'الصبر مفتاح الفرج، والعلم نور يضيء طريق الأجيال',
    achievements: ['تأسيس الأعمال العائلية', 'تربية 8 أطفال', 'خدمة المجتمع لأكثر من 40 عام'],
    birthYear: 1942
  },
  {
    id: '2',
    name: 'الحاجة فاطمة عبد السميع',
    title: 'أم العائلة',
    age: 76,
    wisdom: 'البيت الذي تحكمه المحبة لا تهزه العواصف',
    achievements: ['تربية الأجيال', 'الأعمال الخيرية', 'حفظ التراث العائلي'],
    birthYear: 1948
  },
  {
    id: '3',
    name: 'الأستاذ أحمد عبد السميع',
    title: 'عميد العائلة الأكبر',
    age: 89,
    wisdom: 'التعليم أعظم ميراث يمكن أن نتركه للأجيال القادمة',
    achievements: ['مدير مدرسة لـ35 عام', 'كاتب ومؤلف', 'مرشد روحي للعائلة'],
    birthYear: 1935
  }
];

const FamilyElders = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background/50 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Crown className="h-8 w-8 text-primary" />
            <h2 className="family-title text-4xl md:text-5xl text-foreground">
              كبار العائلة
            </h2>
            <Crown className="h-8 w-8 text-primary" />
          </div>
          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            حكماء العائلة وأعمدتها، الذين نهلنا من علمهم وخبرتهم
            ونقتدي بحكمتهم في مسيرة الحياة
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary via-primary-glow to-primary mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Elders Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {eldersData.map((elder) => (
            <Card key={elder.id} className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-elegant group">
              {/* Crown decoration */}
              <div className="absolute top-4 right-4">
                <Crown className="h-6 w-6 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <CardContent className="p-8 text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <Avatar className="h-24 w-24 mx-auto border-4 border-primary/30 shadow-lg">
                    <AvatarImage src={elder.image} alt={elder.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xl font-bold">
                      {elder.name.split(' ')[0][0]}{elder.name.split(' ')[elder.name.split(' ').length - 1][0]}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                      {elder.age} سنة
                    </Badge>
                  </div>
                </div>

                {/* Name and Title */}
                <h3 className="family-title text-2xl text-foreground mb-2">{elder.name}</h3>
                <p className="text-primary font-semibold mb-4">{elder.title}</p>

                {/* Birth Year */}
                <div className="flex items-center justify-center gap-2 mb-6 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">مولود عام {elder.birthYear}</span>
                </div>

                {/* Wisdom Quote */}
                <div className="relative mb-6 p-4 bg-primary/5 rounded-lg border border-primary/10">
                  <Quote className="h-5 w-5 text-primary/60 absolute top-2 right-2" />
                  <p className="family-body text-sm text-foreground/90 italic leading-relaxed mt-3">
                    "{elder.wisdom}"
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <Star className="h-4 w-4 text-primary" />
                    <span className="text-sm font-semibold text-foreground">الإنجازات</span>
                  </div>
                  {elder.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="family-title text-3xl text-foreground mb-2">{eldersData.length}</div>
              <p className="text-sm text-muted-foreground">كبار العائلة</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <div className="family-title text-3xl text-foreground mb-2">
                {Math.round(eldersData.reduce((sum, elder) => sum + elder.age, 0) / eldersData.length)}
              </div>
              <p className="text-sm text-muted-foreground">متوسط العمر</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary" />
              </div>
              <div className="family-title text-3xl text-foreground mb-2">
                {eldersData.reduce((sum, elder) => sum + elder.achievements.length, 0)}
              </div>
              <p className="text-sm text-muted-foreground">الإنجازات</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary" />
              </div>
              <div className="family-title text-3xl text-foreground mb-2">∞</div>
              <p className="text-sm text-muted-foreground">الحب والاحترام</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyElders;