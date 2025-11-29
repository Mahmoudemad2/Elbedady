import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TreePine, Star, Crown } from "lucide-react";
import familyTreeImage from "@/assets/family-tree-detailed.jpg";

const FamilyTreePage = () => {
  const [viewMode, setViewMode] = useState<"text" | "image">("text");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20" dir="rtl">
      <Navigation />
      
      <main className="container mx-auto px-4 py-24">
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center mb-4">
            <TreePine className="w-16 h-16 text-primary animate-pulse" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold bg-gradient-to-l from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            مشجر عائلة البدادي
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            شجرة العائلة الكاملة من الجد الأكبر عبد القادر البدادي وصولاً إلى جميع الفروع
          </p>
          
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => setViewMode("text")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                viewMode === "text"
                  ? "bg-primary text-white shadow-lg classcolor"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <Users className="w-4 h-4 inline-block ml-2" />
              عرض النسب
            </button>
            <button
              onClick={() => setViewMode("image")}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                viewMode === "image"
                  ? " bg-primary classcolor text-white shadow-lg"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              <TreePine className="w-4 h-4 inline-block ml-2" />
              عرض الصورة
            </button>
          </div>
        </div>

        {viewMode === "text" ? (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* مقدمة عن الأسرة */}
            <Card className="shadow-2xl border-2 border-primary/20 ">
              <CardHeader className="bg-gradient-to-l from-primary/10 to-transparent border-b">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                  <Crown className="w-8 h-8 text-primary" />
                  <span> الأسرة البدادية </span>
                    <Crown className="w-8 h-8 text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6 text-center">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    أحد أعرق وأكبر بيوت الهنادى ويرجع تسميتهم إلى الجد القوى البارز صاحب الصيت والثراء 
                    وأحد فرسان قبيلة الهنادى
                  </p>
                  
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-xl border border-primary/20">
                    <h3 className="font-bold text-xl mb-4 text-primary flex items-center justify-center gap-2">
                      <Star className="w-6 h-6" />
                      النسب الكامل
                    </h3>
                    <p className="text-lg leading-relaxed font-semibold">
                      عبدالقادر "البدادى" بن محمد بن شعيب بن دويس بن سليم (بيت السلم) 
                      بن حماد بن هند (قبيلة الهنادى) بن سلام (السلالمة) 
                      من (قبائل السعادى) من (قبائل بنى سليم)
                    </p>
                  </div>

                  <div className="bg-muted/50 p-6 rounded-xl">
                    <p className="text-base leading-relaxed">
                      عقب له ← <span className="font-bold text-primary">إبراهيم</span>
                    </p>
                    <p className="text-base leading-relaxed mt-2">
                      عقب لإبراهيم ← <span className="font-bold text-primary">أبوفضيله</span>
                    </p>
                    <p className="text-base leading-relaxed mt-2">
                      عقب لأبوفضيله ← <span className="font-bold text-primary">سعيد ، عبدالسميع ، ابراهيم</span>
                    </p>
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      وهم جدود الأسرة البدادية ومنهم نسجت خيوط وتاريخ الأسرة العريق
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* الفروع الرئيسية */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* فرع سعيد */}
              <Card className="shadow-xl hover:shadow-2xl transition-shadow border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/20 to-primary/10">
                  <CardTitle className="text-center text-2xl rounded-s-sm">
                    <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full dark-css">
                      <TreePine className="w-6 h-6" />
                      <span> سـعيــد</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">عبدالسميع</p>
                      <p className="text-sm text-muted-foreground mr-4">
                        إبراهيم، الطحاوى، علوانى، كيلانى، محمد، على، يوسف، جوده
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">شـــراقى</p>
                      <p className="text-sm text-muted-foreground mr-4">
                        مقاوى، بوزريده، عيسى، على، محمود
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">طـــــــه</p>
                      <p className="text-sm text-muted-foreground mr-4">
                        عبدالنبى، منــــاع الثانى، أبوالقاسم
                      </p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">منـــــاع</p>
                      <p className="text-sm text-muted-foreground mr-4">حمد</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">على</p>
                      <p className="text-sm text-muted-foreground mr-4">حامد، مجاور</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-red-500/10 to-transparent p-3 rounded-lg border-r-4 border-red-500">
                      <p className="font-semibold mb-2 text-red-600">ابوهيف الأول</p>
                      <p className="text-sm text-muted-foreground mr-4 italic">
                        استشهد شاباً في إحدى معارك الهنادى مع إحدى القبائل الأخرى 
                        وهي معركة (حرارة بالبحيرة)
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* فرع عبدالسميع */}
              <Card className="shadow-xl hover:shadow-2xl transition-shadow border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/20 to-primary/10">
                  <CardTitle className="text-center text-2xl">
                    <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full dark-css">
                      <TreePine className="w-6 h-6" />
                      <span> عبدالسميع</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">الجالى</p>
                      <p className="text-sm text-muted-foreground mr-4">
                        عبدالغفار، سلومة
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* فرع إبراهيم */}
              <Card className="shadow-xl hover:shadow-2xl transition-shadow border-2 border-primary/20">
                <CardHeader className="bg-gradient-to-br from-primary/20 to-primary/10">
                  <CardTitle className="text-center text-2xl">
                    <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full dark-css">
                      <TreePine className="w-6 h-6" />
                      <span>إبراهيم</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-primary/10 to-transparent p-3 rounded-lg border-r-4 border-primary">
                      <p className="font-semibold mb-2">بوفضيله الثانى</p>
                      <p className="text-sm text-muted-foreground mr-4">
                        اللافى، شنتير
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* إحصائيات */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-gradient-to-br from-primary/10 to-transparent shadow-lg">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="font-semibold text-3xl">3</p>
                  <p className="text-sm text-muted-foreground mt-2">الفروع الرئيسية</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-transparent shadow-lg">
                <CardContent className="p-6 text-center">
                  <TreePine className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="font-semibold text-3xl">20+</p>
                  <p className="text-sm text-muted-foreground mt-2">الأفرع الفرعية</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-primary/10 to-transparent shadow-lg">
                <CardContent className="p-6 text-center">
                  <Star className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <p className="font-semibold text-3xl">5+</p>
                  <p className="text-sm text-muted-foreground mt-2">أجيال موثقة</p>
                </CardContent>
              </Card>
            </div>
          </div>
        ) : (
          <Card className="max-w-6xl mx-auto shadow-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-l from-primary/10 to-transparent border-b">
              <CardTitle className="flex items-center justify-center gap-3 text-2xl">
                <TreePine className="w-8 h-8 text-primary" />
                <span>المشجر الأصلي للعائلة</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative group">
                <img
                  src={familyTreeImage}
                  alt="مشجر عائلة البدادي الأصلي"
                  className="w-full h-auto hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <p className="text-white font-semibold text-lg">انقر للتكبير</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="p-6">
              <p className="text-muted-foreground leading-relaxed">
                هذا المشجر يوضح التسلسل الكامل لعائلة البدادي من الجد الأكبر عبد القادر البدادي،
                حيث تفرعت العائلة إلى عدة فروع رئيسية استقرت في مناطق مختلفة من مصر،
                وحافظت كل منها على تراثها وأصالتها العربية.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default FamilyTreePage;
