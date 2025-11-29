import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, Users, Sword, Star } from 'lucide-react';

const SahawyHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="inline-block relative">
              {/* Decorative top border */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
                <Crown className="w-6 h-6 text-primary animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
              </div>
              
              {/* Name container with ornate styling */}
              <div className="relative px-12 py-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10 rounded-2xl border-2 border-primary/30 shadow-2xl backdrop-blur-sm">
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary/40 rounded-tl-2xl"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/40 rounded-tr-2xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary/40 rounded-bl-2xl"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/40 rounded-br-2xl"></div>
                
                <h1 className="family-title text-4xl md:text-5xl lg:text-6xl text-foreground relative"
                    style={{ textShadow: '0 0 20px rgba(var(--primary), 0.2)' }}>
                  شيخ العرب الطحاوي عبد السميع
                </h1>
              </div>
              
              {/* Decorative bottom border */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
                <Crown className="w-6 h-6 text-primary animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              الطــحــاوى
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              شقيق الشهيد العظيم
            </Badge>
          </div>
          
          <p className="family-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            شقيق الشهيد العظيم والمجاهد الكبير إبراهيم عبد السميع وهو رجل كبير جليل المقدار
            يأتي على رأس فرع كبير من فروع الأسرة فرع الطحاوى عبد السميع
          </p>
          
          <div className="mt-8">
            <Badge variant="outline" className="text-sm px-3 py-1">
              المرجع: فرسان العرب - الأسرة البدادية
            </Badge>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          
          {/* الموطن والأملاك */}
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="family-title text-2xl text-foreground">الموطن والأملاك</h3>
              </div>
              <p className="family-body text-muted-foreground leading-relaxed">
                أملاكهم وموطنهم في عدة عزب بزمام قرية القضاة مركز كفر صقر تناسل من صلبه ذراري كثيرة 
                كان أبي النفس عالي الهمة واسع الثراء
              </p>
            </CardContent>
          </Card>

          {/* الأبناء */}
          <Card className="border-2 border-primary/20 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sword className="w-6 h-6 text-primary" />
                </div>
                <h3 className="family-title text-2xl text-foreground">الأبناء الثلاثة</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="family-body font-semibold text-foreground mb-2">موسى الطحاوى</p>
                  <p className="family-body text-sm text-muted-foreground">بطل معركة زيادة الشهيرة</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="family-body font-semibold text-foreground">يونس</p>
                </div>
                <div className="p-4 bg-muted/30 rounded-lg">
                  <p className="family-body font-semibold text-foreground">حميدة</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* المكانة والتقدير */}
        <Card className="border-2 border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-full">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <h3 className="family-title text-2xl text-foreground">المكانة والتقدير</h3>
            </div>
            <p className="family-body text-lg text-muted-foreground leading-relaxed text-center">
              كان مهاباً في الأوساط العربية وكان ذا مكانة كبيرة في أسرته ومحل تقدير جيرانه
              <br />
              رحمه الله رحمة واسعة
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SahawyHero;