import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tent, Mountain, Coins, Crown, Users, Home, DollarSign } from "lucide-react";

const MahgoubHero = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  شيخ العرب محجوب عبد السميع
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
          
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <Badge variant="outline" className="text-lg px-4 py-2">
              بداوة وهمة عالية
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              الابن الثاني للشهيد
            </Badge>
          </div>

          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            الابن الثاني لشهيد الوطن إبراهيم عبد السميع، جمع بين البساطة البدوية والهمة العالية
          </p>
        </div>

        {/* الطبع والشخصية */}
        <Card className="mb-12 shadow-xl border-2 border-primary/10">
          <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Tent className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">البداوة والبساطة</h2>
              <Tent className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="family-body text-lg leading-relaxed space-y-4">
              <p>كان رحمه الله يجنح من دون إخوته إلى البداوة، فكان غير راغب في التأنق في مظهره</p>
              <p>يميل إلى البساطة غير متكلف رغم أنه كان ثرياً</p>
              <p>وقد ساعدته هذه البساطة في تنمية ثروته</p>
              
              <Separator className="my-6" />
              
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-6 rounded-lg">
                <h4 className="family-title text-xl mb-4 text-primary">الغيرة الشريفة</h4>
                <p>ولكنه مع هذه البداوة كان غيوراً، إذا شيد أحد إخوته منزلاً فخماً شيد مثله</p>
                <p>وإذا اقتنى عربة خيل حنطور جاء بمثلها</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* الثروة والماشية */}
        <Card className="mb-12 shadow-xl border-2 border-primary/10">
          <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coins className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">الثروة والماشية</h2>
              <Coins className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="family-body text-lg leading-relaxed space-y-4 text-center">
              <p>وقد وسع الله عليه في الثروة حتى اقتنى الكثير من العزب والأطيان</p>
              
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-8 rounded-lg my-8">
                <h4 className="family-title text-xl mb-6 text-primary text-center">مشهد الماشية عند الغروب</h4>
                <p className="mb-4">كان الناظر إلى قطيع ماشيته عند إيابها إلى حظائرها وقت الغروب يرى عجباً</p>
                <p className="text-lg font-semibold text-primary">
                  يرى ألواناً من الأبقار والجاموس والخيل والأغنام تشغل مسافة لا تقل عن كيلومتر أو تزيد يسوقها رعاتها
                </p>
              </div>
              
              <p>كان حريصاً على ماله ومع هذا كان ملجأ لأشقائه وأقاربه ليقرضهم عند الحاجة</p>
              <p>لا يتزمت ولا يستنكف - قلنا أنها بداوة وعروبة كانت تجري في عروقه في مسرى دمائه</p>
            </div>
          </CardContent>
        </Card>

        {/* المهرجانات والكرم */}
        <Card className="mb-12 shadow-xl border-2 border-primary/10">
          <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">المهرجانات والأبهة</h2>
              <Crown className="w-6 h-6 text-primary" />
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="family-body text-lg leading-relaxed space-y-4 text-center">
              <p>ولكنه في بعض الأحيان كان يشذ عن القاعدة من حيث البساطة والبداوة إلى حب المظاهر والأبهة</p>
              
              <div className="bg-gradient-to-r from-secondary/10 to-primary/5 p-8 rounded-lg my-8">
                <h4 className="family-title text-xl mb-6 text-primary">ختان الحفيدين</h4>
                <p className="mb-4">فعندما شاء ختان حفيديه <strong>أبو النجاح</strong> و <strong>عبد الرازق</strong></p>
                <p className="mb-4">عمل لكل منهما مهرجاناً فخماً أقيمت فيه السرادقات</p>
                <p className="mb-4">ودقت فيه الموسيقى ونصبت حلبة سباق</p>
                <p className="text-lg font-semibold text-primary">
                  كانت فيها نواح خير كثيرة عُرف عنها إكرام ضيفه والتوسعة على أهله
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* الكرم والرحمة */}
        <Card className="shadow-xl border-2 border-primary/10">
          <CardHeader className="text-center bg-gradient-to-r from-primary/5 to-secondary/5">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Home className="w-6 h-6 text-primary" />
              <h2 className="family-title text-3xl text-primary">الكرم والعطف</h2>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 text-center">
            <div className="family-body text-lg leading-relaxed space-y-4">
              <p>يحنو على الفقير ويدينه منه</p>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/20">
                <h4 className="family-title text-xl mb-4 text-center text-primary">ابن محجوب عبد السميع</h4>
                <div className="text-center p-4 bg-background rounded-lg border border-border">
                  <p className="family-body font-semibold text-lg">مصري</p>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg mt-8">
                <p className="text-xl font-semibold text-primary">رحمه الله رحمة واسعة</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* المرجع */}
        <div className="text-center mt-12">
          <Badge variant="outline" className="text-sm px-3 py-1">
            المرجع: فرسان العرب - الأسرة البدادية
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default MahgoubHero;