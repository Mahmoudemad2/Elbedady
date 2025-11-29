import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sword, Heart, Crown, Users, MapPin, BookOpen, Trophy } from 'lucide-react';

const IbrahimHero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-card to-background">
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
                  شيخ العرب إبراهيم عبد السميع
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
          <p className="family-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            <span className="text-primary font-bold">المجد والخلود</span> - حياة كرم وكفاح ثم استشهاد في سبيل الوطن
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mt-8 rounded-full"></div>
          
          {/* Reference */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="family-body text-sm text-primary font-medium">
              📚 مرجع: فرسان العرب - الأسرة البدادية
            </p>
          </div>
        </div>

        {/* Biography Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Character Traits */}
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 family-title text-2xl text-primary">
                <Crown className="h-8 w-8" />
                صفاته النبيلة
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-card/50 p-4 rounded-lg border border-primary/10">
                <h4 className="family-title text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  رجل عالي النفس
                </h4>
                <p className="family-body text-muted-foreground">
                  ذا إباء، يعيش على الحرية أكثر مما يعيش على الخبز. رفض عدة أعطية من والي مصر في أرض خصبة ورضي بأرض غير ذات عمران في شمال الدلتا إرضاءً لنوازع العزة والكبرياء.
                </p>
              </div>
              
              <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                <h4 className="family-title text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <Users className="h-5 w-5 text-secondary" />
                  كريم ذا بذل
                </h4>
                <p className="family-body text-muted-foreground">
                  يؤثر الإيثار على الأثرة ولو به خصاصة. كان يؤثر أقاربه على نفسه، فعندما يشتري كيلات من الذرة الصغيرة، يوزعها على أقاربه ولا يتبقى له إلا نصف كيلة.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Military Service */}
          <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 family-title text-2xl text-secondary">
                <Sword className="h-8 w-8" />
                خدمته العسكرية
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                  حرب عكا - ممثلاً للأسرة
                </Badge>
                <p className="family-body text-muted-foreground">
                  ندبه والده عن الأسرة في حرب عكا فأبلى بلاءً حسناً. ثار يوماً على إبراهيم باشا فعُقد له مجلساً عسكرياً حكم عليه بالموت، لكن شجاعته وأمانته أنقذته.
                </p>
              </div>

              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h4 className="family-title text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-accent" />
                  قصة مع محمد علي
                </h4>
                <p className="family-body text-muted-foreground text-sm">
                  عندما حمل أمر موته بنفسه، اشترى قماشاً كفناً وذهب للقلعة قائلاً: "يا أفندينا هذا كفني معي، إن شئت تعفو وإن شئت نفذت". فسُر محمد علي من شجاعته وعفا عنه.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Battle of Tel el-Kebir */}
        <Card className="mb-16 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 family-title text-3xl text-accent text-center justify-center">
              <Trophy className="h-10 w-10" />
              استشهاد في معركة التل الكبير
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-card/50 p-6 rounded-lg border border-accent/20">
              <h4 className="family-title text-xl font-bold text-foreground mb-4">الحرب العرابية</h4>
              <p className="family-body text-muted-foreground leading-relaxed">
                لما نادى منادي الحرب العرابية كان إبراهيم سباقاً إلى الدفاع عن وطنه رغم شيخوخته آنذاك. سار إلى الميدان بعد أن ودع أهله كأنه كان يعلم أن هذا آخر المطاف.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
                <h4 className="family-title text-lg font-bold text-foreground mb-3">صموده البطولي</h4>
                <p className="family-body text-muted-foreground text-sm">
                  في أثناء الهجوم الغادر فر الكثير من المحاربين، وصمد إبراهيم مع قلة قليلة في أتون المعركة الرهيب يستحث العربان بكلمة: <strong>"عيب يا هنادي - ديرة يا هنادي"</strong>
                </p>
              </div>

              <div className="bg-secondary/5 p-4 rounded-lg border border-secondary/20">
                <h4 className="family-title text-lg font-bold text-foreground mb-3">الاستشهاد</h4>
                <p className="family-body text-muted-foreground text-sm">
                  قاتل حتى أصابته ضربة سيف من أحد رجال الطابور الهندي في المعركة البيضاء. سقط شهيداً مجاهداً كبيراً، فخر الأسرة والوطن.
                </p>
              </div>
            </div>

            <div className="bg-accent/5 p-6 rounded-lg border border-accent/20">
              <h4 className="family-title text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="h-6 w-6 text-accent" />
                اللحظات الأخيرة
              </h4>
              <p className="family-body text-muted-foreground leading-relaxed">
                عاد صديقه المخلص "أبو جبريل" يتفقده، فوجده ملقى والدماء تنذف من ذراعه. ناداه إبراهيم: "اسقني يا أبو جبريل"، فأحضر له الماء في عباءته المبللة ليروي عطشه قبل أن يسلم الروح.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Legacy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Sons */}
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 family-title text-2xl text-primary">
                <Users className="h-8 w-8" />
                أولاده الأربعة الكبار
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="family-body text-muted-foreground mb-4">
                خلف إبراهيم من بعده أولاده الذين يُعدون الأربعة الكبار في الأسرة، حيث مكنوا للأسرة في محلها الجديد واتسعت رقعة أملاكهم وعلا مجدهم.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <Badge variant="outline" className="p-2 text-center bg-primary/5 border-primary/30">
                  السيد
                </Badge>
                <Badge variant="outline" className="p-2 text-center bg-secondary/5 border-secondary/30">
                  محجوب  
                </Badge>
                <Badge variant="outline" className="p-2 text-center bg-accent/5 border-accent/30">
                  عبدالله
                </Badge>
                <Badge variant="outline" className="p-2 text-center bg-primary/5 border-primary/30">
                  جبيل
                </Badge>
              </div>
              <p className="family-body text-sm text-muted-foreground mt-4 italic">
                يُعد عصرهم العصر الذهبي للأسرة وسنفرد لكل منهم سجل خاص على حده.
              </p>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 family-title text-2xl text-accent">
                <BookOpen className="h-8 w-8" />
                الاعتراف التاريخي
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-card/50 p-4 rounded-lg border border-accent/10">
                <p className="family-body text-muted-foreground leading-relaxed">
                  تنبه الضمير المصري الحي لشهداء التل الكبير القلائل، فقام الوزير المصري السابق الأستاذ 
                  <strong className="text-accent"> علي أيوب </strong>
                  بنشر كتاب في إحدى الصحف اليومية الكبرى يسجل أسماء خمسة من المدنيين الذين صمدوا في معركة التل الكبير.
                </p>
                <div className="mt-4 p-3 bg-accent/10 rounded border border-accent/20">
                  <p className="family-title text-lg font-bold text-accent text-center">
                    ومن بينهم جدنا: إبراهيم عبد السميع
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default IbrahimHero;