import { Card } from '@/components/ui/card';
import { MapPin, Scroll, Users, Home } from 'lucide-react';

const BeniSuefHistory = () => {
  return (
    <section id="beni-suef-history" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="family-title text-4xl md:text-5xl text-foreground mb-6">
            البدادية وعلاقتها العابرة بمديرية بني سويف
          </h2>
          <p className="family-body text-lg text-muted-foreground max-w-3xl mx-auto">
            قصة الهجرة والترحال من مريوط إلى بني سويف ثم الشرقية
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* البداية - إقليم مريوط */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 bg-card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="family-title text-2xl md:text-3xl text-foreground mb-4">
                  الموطن الأصلي - إقليم مريوط
                </h3>
                <p className="family-body text-base text-muted-foreground leading-relaxed">
                  تبدأ الرحلة من إقليم <span className="text-primary font-semibold">مريوط</span> "من البحيرة حتى الحدود الليبية الآن" - الموطن الأصلى والرئيسى عند دخول الهنادى القطر المصرى من جهة الغرب العربى. قام السلطان <span className="text-primary font-semibold">سليم الأول</span> بإقطاع الهنادى هذه المنطقة ووضعها تحت نفوذهم بفرمان رسمى.
                </p>
              </div>
            </div>
          </Card>

          {/* الانتقال إلى بني سويف */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 bg-card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500/20 to-amber-500/10 flex items-center justify-center text-amber-600">
                  <Scroll className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="family-title text-2xl md:text-3xl text-foreground mb-4">
                  إقطاع محمد علي باشا
                </h3>
                <p className="family-body text-base text-muted-foreground leading-relaxed mb-4">
                  قام الوالى <span className="text-amber-600 font-semibold">محمد على</span> بإقطاع مشايخ الهنادى مناطق أخرى لتعميرها وإصلاحها وتكون تحت مظلة القلعة كالتزام (جباية "ضرائب" وحبوب).
                </p>
                <div className="p-4 bg-muted/50 rounded-lg border-r-4 border-amber-600">
                  <p className="family-body text-sm text-muted-foreground">
                    وُضعت منطقة كبيرة في مديرية بني سويف تحت نفوذ الأسرة البدادية بزعامة شيخ العرب <span className="text-amber-600 font-semibold">عبدالسميع البدادى</span> ألمع مشايخ عرب الهنادى وأذيعهم صيتاً.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {['كوم أبو راضي', 'صفط', 'ونا', 'شرق أبو يط', 'أبو صير', 'ميدوم'].map((area) => (
                      <span key={area} className="px-3 py-1 bg-amber-600/10 text-amber-700 dark:text-amber-400 rounded-full text-sm font-semibold">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* الصراع والخروج */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 bg-card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-500/10 flex items-center justify-center text-red-600">
                  <Users className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="family-title text-2xl md:text-3xl text-foreground mb-4">
                  الصراع وفرمان الخروج
                </h3>
                <p className="family-body text-base text-muted-foreground leading-relaxed mb-4">
                  بعد وفاة زعيمهم شيخ العرب <span className="text-red-600 font-semibold">عبدالسميع البدادى</span>، بدأت أهالي هذه المناطق ينتابها التهور والجنون وأخذتهم الجرأة المتهورة وبدأت في إثارة بعض المشاكل التي كان واقعها "مرير" عليهم.
                </p>
                <p className="family-body text-base text-muted-foreground leading-relaxed">
                  اجتاح فرسان الأسرة مناطقهم وتحولت مناطقهم إلى "جحيم" بفعل النزعة القبلية شديدة التعقيد للأسرة البدادية. وصلت هذه الأخبار إلى <span className="text-red-600 font-semibold">الخديوي إسماعيل</span> فأصدر فرماناً ودعوة للبدادية بالكامل بالخروج من بني سويف.
                </p>
              </div>
            </div>
          </Card>

          {/* الخروج بشرف */}
          <Card className="p-8 border-2 hover:border-primary/50 transition-all duration-300 bg-card">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary">
                  <Home className="w-8 h-8" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="family-title text-2xl md:text-3xl text-foreground mb-4">
                  الخروج والاستقرار النهائي
                </h3>
                <p className="family-body text-base text-muted-foreground leading-relaxed mb-4">
                  خرجت الأسرة تحت مظلة القانون القبلي وفروسية منهم ومراعاتهم لعاداتهم وتقاليدهم القبلية الراقية وهو <span className="text-primary font-semibold">"من يجور يرحل"</span> وسُر الخديوي بذلك.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg border-r-4 border-primary">
                    <h4 className="family-title text-lg text-foreground mb-2">العياط (سنة واحدة)</h4>
                    <p className="family-body text-sm text-muted-foreground">
                      خيّرهم الخديوي بإقطاع مناطق بمركز العياط (محافظة الجيزة حالياً)، لكن قربها من الحضر أثار ضيق زعيمهم شيخ العرب <span className="text-primary font-semibold">إبراهيم بك عبدالسميع البدادى</span>.
                    </p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg border-r-4 border-primary">
                    <h4 className="family-title text-lg text-foreground mb-2">محافظة الشرقية (الاستقرار)</h4>
                    <p className="family-body text-sm text-muted-foreground">
                      نزل بعد ذلك لمحافظة الشرقية بمراكز (أولاد صقر، كفر صقر، فاقوس، بلبيس) وهي المحافظات المتواجد بها الأسرة إلى الآن. ولم يبقَ أحد من الأسرة في بني سويف.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BeniSuefHistory;