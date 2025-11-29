import { Card } from "@/components/ui/card";
import { Heart, Building, Wheat, Star,Crown } from "lucide-react";

const JabilHero = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-card to-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          
          
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
                
                <h2 className="family-title text-4xl sm:text-5xl text-foreground relative"
                    style={{ textShadow: '0 0 20px rgba(var(--primary), 0.2)' }}>
                  شيخ العرب جبيل عبد السميع
                </h2>
              </div>
              
                {/* Decorative bottom border */}
              <div className="flex items-center justify-center gap-3 mt-4">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/60"></div>
                <Crown className="w-6 h-6 text-primary animate-pulse" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/60"></div>
              </div>
            </div>
          </div>
          <p className="family-body text-xl text-muted-foreground mb-2">
            فتى آل عبد السميع
          </p>
          <p className="family-body text-lg text-muted-foreground">
            أصغر أولاد إبراهيم عبد السميع وأول من أنشبت المنية أظافرها فيه منهم
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Introduction */}
        <div className="mb-12">
          <Card className="p-8 bg-card/50 border-primary/20">
            <p className="family-body text-lg text-foreground leading-relaxed">
              مات تقريباً في العقد الخامس من عمره وكان لوفاته وقع الصاعقة على أشقائه وأهله لما يتحلى به من رجولة فتية وشمائل طيبة. 
              لقد شُقت عليه الجيوب وقُصت ضفائر النساء ولُطمت الخدود وخرجت عليه ربات الخدور من خدورهن غير متحذرات ولا متهيبات.
            </p>
          </Card>
        </div>

        {/* Character Traits */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <div className="flex items-center mb-4">
              <Heart className="w-6 h-6 text-primary ml-3" />
              <h3 className="family-title text-xl text-foreground">الشمائل الطيبة</h3>
            </div>
            <p className="family-body text-muted-foreground leading-relaxed">
              كان رجلاً بارزاً بين أهله وجيرته كريماً سمحاً شهماً قوياً يلطم أعداءه بقوة ويسخو ويغدق على وسطه، 
              خصوصاً من تستبد بهم الحاجة بغير منٍّ ولا جميل.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <div className="flex items-center mb-4">
              <Building className="w-6 h-6 text-primary ml-3" />
              <h3 className="family-title text-xl text-foreground">البناء والتعمير</h3>
            </div>
            <p className="family-body text-muted-foreground leading-relaxed">
              جاهد كثيراً مع شقيقه عبد الله بك في بناء ثروة واسعة مترامية الأطراف وكان هو المدبر المباشر لشؤونها، 
              وكان ذا مقدرة واسعة في إستصلاح الأراضي البور وتشييد العزب.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <div className="flex items-center mb-4">
              <Wheat className="w-6 h-6 text-primary ml-3" />
              <h3 className="family-title text-xl text-foreground">استصلاح الأراضي</h3>
            </div>
            <p className="family-body text-muted-foreground leading-relaxed">
              يُحيل الأرض الميتة إلى أرض خصبة منتجة فكان رجلاً بناءً جاهد في تعمير وتشييد صرح الأسرة الاقتصادي. 
              كان محبوباً من المزارعين والفلاحين لكرمه عليهم ودماثة خلقه وتواضعه.
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
            <div className="flex items-center mb-4">
              <Star className="w-6 h-6 text-primary ml-3" />
              <h3 className="family-title text-xl text-foreground">القوة والعدالة</h3>
            </div>
            <p className="family-body text-muted-foreground leading-relaxed">
              كان شديد البطش على المتكبرين وذوي الغلظة والصلف. عاش مجداً ومات محبوباً ففُجع فيه الناس أجمعين، 
              رحمه الله وأسكنه فسيح جناته.
            </p>
          </Card>
        </div>

        {/* The Mourning */}
        <div className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-muted/30 to-card/50 border-primary/20">
            <h3 className="family-title text-2xl text-foreground mb-6 text-center">
              مأتم الفتى الكبير
            </h3>
            <p className="family-body text-lg text-muted-foreground leading-relaxed text-center">
              نصبت النساء عليه حلقات وحلقات تتوسطها طبول تدور حولها الفتيات والنساء تقرع إحداهن الطبل قرعات حزينة يندبن فتى العائلة الكبير الذي ترك فراغاً كبيراً، 
              واستبد الحزن ببعض أشقائه وأقاربه فدخلوا حلقات المندب يشاركون النساء في لوعة الحزن والهلع.
            </p>
          </Card>
        </div>

        {/* Sons */}
        <div className="mb-12">
          <Card className="p-8 bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <h3 className="family-title text-2xl text-foreground mb-6 text-center">
              الأبناء
            </h3>
            <div className="text-center">
              <div className="bg-card p-6 rounded-lg border border-primary/20">
                <h4 className="family-title text-xl text-primary mb-2">عبد النبي</h4>
                <p className="family-body text-muted-foreground">ابن شيخ العرب جبيل إبراهيم عبد السميع</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Reference */}
        <div className="text-center">
          <p className="family-body text-sm text-muted-foreground italic">
            مرجع: فرسان العرب - الأسرة البدادية
          </p>
        </div>
      </div>
    </section>
  );
};

export default JabilHero;