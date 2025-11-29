import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Crown, Heart, Home, Star, Coffee, Users, MapPin } from "lucide-react";
import alsayedPortrait from "@/assets/alsayed-portrait.jpg";

const AlSayedHero = () => {
  return (
    <section id="alsayed-hero" className="py-20 bg-gradient-to-br from-background via-background/95 to-primary/5">
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
                  شيخ العرب السيد عبد السميع
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
          
          {/* صورة السيد عبد السميع */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img 
                src={alsayedPortrait} 
                alt="شيخ العرب السيد عبد السميع" 
                className="w-full h-full object-cover sepia-[0.3] hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <Badge variant="outline" className="text-lg px-4 py-2">
              كرم وتقى
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              أكبر أبناء الشهيد إبراهيم عبد السميع
            </Badge>
          </div>
          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            آلت إليه زعامة الأسرة وشياخة القبيلة، رجل كريم السجايا، طيب الخصال، حاتم الطائي زمانه
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 mx-auto mt-8 rounded-full"></div>
        </div>

        {/* الصفات الشخصية */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary/20 hover:border-primary/30 transition-colors">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle className="family-title text-2xl">الصفات الشخصية</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="family-body text-right space-y-3">
                <p>رُزق بسطة في الجسم طولاً وعرضاً ومهابة في المنظر، نظيفاً يعتني بهندامه</p>
                <p>صارم إذا غضب حتى على أولاده، لكن إذا سكن إلى نفسه وُجدت الطيبة البدوية والهدوء والابتسامة</p>
                <p>طبيعته غير متكلفة لصيقة بدمه وحياته، عطوفاً على أقاربه الفقراء</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/30 transition-colors">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Heart className="w-6 h-6 text-primary" />
                <CardTitle className="family-title text-2xl">الكرم والسخاء</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="family-body text-right space-y-3">
                <p>مطبوع على الكرم والسخاء على الصغير والكبير والغني والفقير</p>
                <p>كان الأطفال الفقراء يتسابقون نحوه عند عودته من سفر أو سوق ليوزع عليهم الحلوى</p>
                <p>لا يخلو منزله من الأضياف وطالبي العطاء وأصحاب المصالح</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* أسلوب المعيشة */}
        <Card className="mb-16 border-2 border-primary/20">
          <CardHeader className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Home className="w-6 h-6 text-primary" />
              <CardTitle className="family-title text-3xl">أسلوب المعيشة الكريم</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <Coffee className="w-5 h-5 text-primary" />
                  <h4 className="family-title text-xl">المائدة والضيافة</h4>
                </div>
                <div className="family-body text-right space-y-2">
                  <p>كانت مائدته عامرة بأجود الأطعمة وأطيبها دوماً</p>
                  <p>له إدارة خاصة وسرفيس من أحدث الأدوات وأغلاها</p>
                  <p>طاحونة خاصة لطحن البن يديرها حمار من كثرة الاستهلاك</p>
                  <p>مطبخ منزله يعمل ليل نهار</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h4 className="family-title text-xl">في السوق</h4>
                </div>
                <div className="family-body text-right space-y-2">
                  <p>كان يُسمى "السيد أبو عبد السميع سوق الضحى"</p>
                  <p>يتبعه عشرات من ذوي الحاجات ليقضي مطالب سوقهم</p>
                  <p>يعود من السوق على حمار حصاوي تتبعه عربات محملة بالبضائع</p>
                  <p>يوسع بها على أهل بيته والفقراء والمحرومين</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* التقوى والحج */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-primary/20 hover:border-primary/30 transition-colors">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-primary" />
                <CardTitle className="family-title text-2xl">التقوى والعبادة</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="family-body text-right space-y-3">
                <p>كان رجلاً تقياً عارفاً بالله، حريصاً على فرائض دينه</p>
                <p>حج إلى بيت الله مرتين وزار المسجد الأقصى</p>
                <p>اصطحب معه عدداً من الفقراء والخدم وزوجته على حسابه الخاص</p>
                <p>أقام له نجله حسين بك احتفالاً عظيماً عند عودته من الحج</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary/20 hover:border-primary/30 transition-colors">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle className="family-title text-2xl">التربية والأخلاق</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="family-body text-right space-y-3">
                <p>حريص على المستوى الخلقي لأبنائه رغم عطفه وحنوه عليهم</p>
                <p>صارم جارف عندما يشكو أحد الناس من أي من أبنائه</p>
                <p>محاسبته وتربيته لهم علنية قوية على مسمع من الناس</p>
                <p>كانت تربية مثالية أرضت نفسه الصريحة</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* الأسرة والأولاد */}
        <Card className="mb-16 border-2 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="family-title text-3xl">الأسرة والذرية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="family-body text-right space-y-4">
              <p>كان مزواجاً رزقه الله من زوجاته بنين وبنات كثيرات، وكان حانياً على الصغير والكبير</p>
              <p>كان يولي عنايته كثيراً وعطفه إلى بناته لضعفهن</p>
              <p>حتى أحفاده كان لهم جنة وربيعها، يتفقدهم بالقراطيس من أفخر أنواع الحلوى</p>
              <p>كان إذا عاد من سفر أو غيبة يعود محملاً بهدايا لكل فرد من عائلته وقرائبه</p>
              <p>يعاونه ابنه الأكبر الحبار <strong>حسين بك عبد السميع</strong> الذي كان يأخذ دائماً بيد والده</p>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                <h4 className="family-title text-xl mb-4 text-center text-primary">أبناء السيد عبد السميع</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-background rounded-lg border border-border">
                    <p className="family-body font-semibold">حسين بك</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border">
                    <p className="family-body font-semibold">أبو سيف</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border">
                    <p className="family-body font-semibold">مرعي</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border">
                    <p className="family-body font-semibold">خير الله</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border">
                    <p className="family-body font-semibold">عوض</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-lg border border-border">
                    <p className="family-body font-semibold">عبد العاطي</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* الوفاة */}
        <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-background">
          <CardHeader className="text-center">
            <CardTitle className="family-title text-3xl text-primary">الوفاة والذكرى</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="family-body text-right space-y-4 text-center">
              <p className="text-lg">
                توفاه الله في شهر يناير عام <span className="font-bold text-primary">1913</span> وهو يناهز الثمانين من عمره
              </p>
              <p className="text-lg">
                مبكياً عليه من كل العيون حتى عيون الأطفال بكته
              </p>
              <div className="text-primary font-bold text-xl mt-6">
                رحمه الله وجزاه قدر ما عمل من مرضاته آمين
              </div>
            </div>
          </CardContent>
        </Card>

        {/* المرجع */}
        <div className="text-center mt-12">
          <Badge variant="outline" className="text-sm px-3 py-1">
            مراجع: فرسان العرب - الأسرة البدادية
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default AlSayedHero;