import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Crown, Mountain, Coins, Award, Users, Star, Sword, Trophy } from "lucide-react";
import abdallahPortrait from "@/assets/abdallah-portrait.jpg";

const AbdallahHero = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-background/95 to-background" dir="rtl">
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
                  شيخ العرب عبد الله بك عبد السميع
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
          {/* صورة عبد الله بك عبد السميع */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img 
                src={abdallahPortrait} 
                alt="عبد الله بك عبد السميع" 
                className="w-full h-full object-cover object-top sepia-[0.3] hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              عملاق الأسرة
            </Badge>
            <Badge variant="outline" className="text-lg px-4 py-2">
              زعيم قبيلة الهنادي
            </Badge>
          </div>

          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            كان عملاق الجسم - عملاقاً في شخصيته - عملاقاً في ثرائه - عملاقاً في مجده ومركزه الاجتماعي
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* Physical Description and Appearance */}
        <Card className="mb-12 border-primary/10">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">المظهر والهيبة</h2>
              <Star className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="family-body text-lg leading-relaxed">
              كان فارع الطول قوي البنيان كبير الرأس واسع العينين أنيقاً في ملبسه ومظهره، 
              كان يلبس الطراز العربي المغربي يبرز في لباسه الطربوش المغربي والحرام الحريري المغربي 
              الضافي الذيول الواسع من الأطراف فوق جبة وقفطان وحزام حمصاني.
            </p>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="family-body text-lg leading-relaxed italic">
                "كان إذا سار في شوارع المدن الكبرى يمشي منتصب القامة حتى في شيخوخته مرفوع الرأس 
                عالي البناء متزملاً بحرامه الحريري الأبيض الفضفاض حتى أطراف قدميه في مظهر عربي جليل وسمت مهيب"
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Wealth and Properties */}
        <Card className="mb-12 border-primary/10">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">الثروة والممتلكات</h2>
              <Coins className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="family-body text-lg leading-relaxed">
              كان عملاقاً في ثرائه فقد انتظمت أملاكه الزراعية لا عزباً وضياعاً فحسب بل بلاداً بأكملها 
              إذ كان يملك آلاف الأفدنة الزراعية الخصبة.
            </p>
            
            <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <h3 className="family-title text-xl text-primary mb-3">عزبة شيط الهوى</h3>
                <p className="family-body leading-relaxed">
                  كان يتوسط هذه الممتلكات الواسعة عزبة كبرى تسمى عزبة شيط الهوى مساحتها آلاف الأفدنة 
                  من أخصب الأراضي الزراعية وأجملها ذات عمران آلت إليه من أحد المزارعين الأروام البارزين 
                  في الزراعة بعد وفاته واسمه (كوسيتا جورغلي). كانت بها حديقة كبرى تعد من أجمل حدائق القطر المصري.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Social Status and Leadership */}
        <Card className="mb-12 border-primary/10">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">المجد والمركز الاجتماعي</h2>
              <Crown className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="family-body text-lg leading-relaxed">
              كان عملاقاً في مجده ومركزه الاجتماعي فكان أول من برز في الأسرة وانتزع عمودية قبيلة الهنادي 
              تلك الزعامة المغتصبة في أزمنة رقود العائلة الاجتماعي من مغتصبها غالب الطحاوي.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Award className="w-6 h-6 text-primary" />
                    <h3 className="family-title text-xl">الرتب والأوسمة</h3>
                  </div>
                  <ul className="family-body space-y-2">
                    <li>• رتبة البكوية من الدرجة الثانية</li>
                    <li>• رتبة البكوية من الدرجة الأولى</li>
                    <li>• رتبة الميرميران</li>
                    <li>• النيشان المجيد والشاهاني</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Users className="w-6 h-6 text-primary" />
                    <h3 className="family-title text-xl">لجنة فحص العربان العليا</h3>
                  </div>
                  <p className="family-body">
                    كان رابع أربعة فقط ضمتهم لجنة فحص العربان العليا عام 1910 لتتولى فحص عروبة 
                    كل أفراد القبائل العربية الضاربة في القطر المصري وعددها اثنان وسبعون قبيلة كبرى.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        {/* Character and Personality */}
        <Card className="mb-12 border-primary/10">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">الشخصية والأخلاق</h2>
              <Trophy className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="family-body text-lg leading-relaxed italic">
                "كان إذا اصطفت وفود الأعيان وأعمدة القبائل في ساحة وزارة الداخلية لمقابلة مستشار الداخلية الإنجليزي 
                وهو آنذاك الحاكم بأمره في الدولة - تتهيب لهذه الظروف الشخوص إليه ومحادثته وفي غمرة هذا التهيب 
                يبرز من بينها عبد الله بك عبد السميع بقامته الفارعة المهيبة ويتقدم نحوه في غير تجهيز ولا تحفظ 
                ويمد يده إليه ليصافحه ويشد على يده ويقول له أذيك يا خواجة"
              </p>
            </div>
            
            <p className="family-body text-lg leading-relaxed text-center">
              كان متواضعاً قريباً إلى الله طيب السريرة متسامحاً ضرب بتسامحه الأمثال
            </p>
          </CardContent>
        </Card>

        {/* Death and Funeral */}
        <Card className="mb-12 border-primary/10">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sword className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">الوفاة والتشييع</h2>
              <Sword className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="family-body text-lg leading-relaxed">
              مات في الثمانين من عمره بعد أن دوى اسمه عالياً في الآفاق وسارت بذكره الركبان. 
              عند وفاته شُيع جثمانه إلى دار الآخرة في موكب مهيب جليل ضم الآلاف المؤلفة من المشيعين 
              من كل الطبقات أهالي وأعيان وعمد القبائل وشيوخها وعمد البلاد والتجار والموظفين.
            </p>
            
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="family-body text-lg leading-relaxed">
                أوفدت الحكومة ثلة من العساكر والمشاة والخفراء أمامهم ضباط البوليس شاكي السلاح يسيرون 
                أمام هذا المشهد الرهيب الذي لا يرى أوله من كان في آخره. وما ووري الفقيد التراب حتى أطلق 
                حرس الشرف طلقاتهم تحية للفقيد الكبير.
              </p>
            </div>
            
            <div className="text-center">
              <p className="family-body text-lg text-primary font-semibold">
                رحمه الله رحمة واسعة وتغمده برضوانه
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Sons */}
        <Card className="border-primary/10">
          <CardHeader>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">الأبناء</h2>
              <Users className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {['عبد الرحمن', 'خبيري', 'عبد السلام', 'سلطان', 'نصر'].map((son) => (
                <Badge key={son} variant="outline" className="text-center p-3 text-lg">
                  {son}
                </Badge>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="family-body text-sm text-muted-foreground italic">
                مرجع: فرسان العرب الأسرة البدادية
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AbdallahHero;