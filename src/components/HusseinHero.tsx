import { Crown, Star, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import husseinPortrait from '@/assets/hussein-portrait.jpg';

const HusseinHero = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted/30 to-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
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
                  شيخ العرب حسين بك عبد السميع
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
          
          {/* صورة حسين بك عبد السميع */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
              <img 
                src={husseinPortrait} 
                alt="حسين بك عبد السميع" 
                className="w-full h-full object-cover object-top sepia-[0.3] hover:sepia-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Badge variant="secondary" className="text-sm px-4 py-2">
              الرجل اللامع
            </Badge>
            <Badge variant="outline" className="text-sm px-4 py-2">
              من أبرز رجالات العروبة
            </Badge>
          </div>
          
          <p className="family-body text-lg text-muted-foreground mb-12 max-w-4xl mx-auto">
            كان رحمه الله من أبرز رجالات الأسرة بل من أبرز رجالات العروبة في القطر المصري، 
            كان رجلاً من طراز ممتاز كان طوداً شامخاً وصرحاً شامخاً بين قومه وعشيرته
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* الشخصية والقيادة */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-primary" />
                <h3 className="family-title text-2xl text-foreground">الشخصية والقيادة</h3>
              </div>
              <div className="space-y-4 family-body text-muted-foreground">
                <p>
                  يفزعون إليه في الشدائد والملمات يجدون في كنفه الأمد والعون والعطاء والندى لا يستنكف ولا يضيق بهم ذرعاً
                </p>
                <p>
                  يهب للنضال والدفاع عنهم مضحياً بالغالي والرخيص، كان غيوراً على أهله وقرابته يبطش في الذود عنهم بكل مختال عزيز
                </p>
                <p>
                  كان رجلاً ذا شخصية قوية جارفة عز وجودها على الكثير والكثير كان إذا أحب أعطى وأغدق وأفرح وإذا غضب ضرب وأوجع وأبكى
                </p>
              </div>
            </CardContent>
          </Card>

          {/* البناء والإنجاز */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-primary" />
                <h3 className="family-title text-2xl text-foreground">البناء والإنجاز</h3>
              </div>
              <div className="space-y-4 family-body text-muted-foreground">
                <p>
                  كان عصامياً بنى نفسه بنفسه، رحل إلى بلدة أخرى مع والدته وتركز في قطعة أخرى من الأرض متواضعة المساحة
                </p>
                <p>
                  جد فيها واجتهد وعاونته والدته وكانت سيدة جليلة حكيمة مرتفعة المعنويات وعمل بيديه وشد على بطنه
                </p>
                <p>
                  حتى استحالت هذه الرقعة الزراعية المنكمشة إلى عزب وضياع تبلغ الألف من الأفدنة عدا من أخصب الأطيان الزراعية
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* المظهر والشخصية */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-primary" />
                <h3 className="family-title text-2xl text-foreground">المظهر والشخصية</h3>
              </div>
              <div className="space-y-4 family-body text-muted-foreground">
                <p>
                  كان رحمه الله عالي القامة، عريض المنكبين، متين البنيان، كبير الرأس موفور الصحة مشرقها
                </p>
                <p>
                  ذا بصر حديد نفاذ يكاد يكون مغناطيسياً لا يكاد يصر على مواجهته الكثير
                </p>
                <p>
                  كان يعنى بلباسه ومظهره كثيراً، يلبس أغلى الحلل وأثمنها يرتديها في أناقة وانسجام يضفيان عليه مهابة وجلال
                </p>
              </div>
            </CardContent>
          </Card>

          {/* التهذيب والأخلاق */}
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <Crown className="w-6 h-6 text-primary" />
                <h3 className="family-title text-2xl text-foreground">التهذيب والأخلاق</h3>
              </div>
              <div className="space-y-4 family-body text-muted-foreground">
                <p>
                  كان رحمه الله مهذباً ذو أخلاق مشهوراً بالأدب الجم يعرف كيف يخاطب الناس يراعي مشاعرهم وعوائدهم
                </p>
                <p>
                  لا يجرح إحساسهم أو يخدش حياءهم وإن كانوا أقل منه شأناً ينزل إلى مستواهم العقلي ويعمل بتقاليدهم
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* المجد والوجاهة */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors mb-16">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="family-title text-2xl text-foreground">المجد والوجاهة</h3>
              <Award className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4 family-body text-muted-foreground">
              <p className="text-center">
                نعم خُلق للمجد والوجاهة له كان وجيهاً في مظهره وفي مشيته وخطواته وفي حديثه وكلماته
              </p>
              <p>
                انتزع عمودية القبيلة بعد وفاة عمه، بعد أن ظلت شاغرة فترة طويلة وتاهت في دواوين الحكومة ودهاليزها
              </p>
              <p>
                أصبح عضواً ضمن لجان العرب العليا وكان فيها العضو النابه الذي يتكلم باسم العرب في مناسبات رسمية كثيرة
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mt-6">
                <h4 className="family-title text-lg text-primary mb-3">الحفلات الملكية التي نظمها:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• حفلة استقبال الأمير سعود بالشرقية عام 1926</li>
                  <li>• حفلة استقبال الملك عبدالعزيز آل سعود عند زيارته للقاهرة</li>
                  <li>• حفلة استقبال الملك إدريس السنوسي ملك ليبيا</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* البلاغة والخطابة */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors mb-16">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Star className="w-6 h-6 text-primary" />
              <h3 className="family-title text-2xl text-foreground">البلاغة والخطابة</h3>
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4 family-body text-muted-foreground text-center">
              <p>
                كان رجلاً ذا منطق قوي إذا تكلم كانت العبارة القوية والحديث البارع كان أمياً هاوياً من الطراز الأول
              </p>
              <p>
                إذا شاء يتصدى للدفاع عن موضوع له أو لغيره ينسف حجج خصمه نسفاً ويسفه آراءه ببلاغة واقتدار
              </p>
              <p>
                كان عظيماً في صياغة عبارته يحسن التعبير عما يهدف إليه
              </p>
            </div>
          </CardContent>
        </Card>

        {/* النهاية والوفاة */}
        <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors mb-16">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Crown className="w-6 h-6 text-primary" />
              <h3 className="family-title text-2xl text-foreground">النهاية والوفاة</h3>
              <Crown className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4 family-body text-muted-foreground">
              <p>
                مرض رحمه الله مرض الموت فلم يشكُ ولم يتوجع إذا عاده أحد لم يسمع منه أنيناً ولا شكوى
              </p>
              <p>
                حتى في ساعات احتضاره لم نرَ منه أو عليه سمات الضعف والتخاذل، رجل لم يعرف الهزيمة حتى عند الموت
              </p>
              <p>
                شُيعت جنازته في موكب مهيب لا أول له ولا آخر تقدمته رجال البوليس السواري والمشاة وضباط القيادة
              </p>
              <div className="bg-primary/10 p-6 rounded-lg mt-6 text-center">
                <p className="family-title text-primary text-xl mb-2">
                  "علو في الحياة وفي الممات *** لحق أنك أحد المعجزات"
                </p>
                <p className="text-sm text-muted-foreground">- المتنبي في أبي فراس الحمداني</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* المرجع */}
        <div className="text-center">
          <p className="family-body text-sm text-muted-foreground">
            المرجع: فرسان العرب - الأسرة البدادية
          </p>
          <p className="family-body text-xs text-muted-foreground mt-2">
            رحمه الله وأسكنه فسيح جناته
          </p>
        </div>
      </div>
    </section>
  );
};

export default HusseinHero;