import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Crown, MapPin, Scroll, Users, Sword, Heart } from 'lucide-react';

const GreatAncestor = () => {
  const achievements = [
    {
      icon: Crown,
      title: 'زعامة الأسرة والقبيلة',
      description: 'تزعم عبد السميع الأسرة كلها والقبيلة بأسرها بعد وفاة والده سعيد'
    },
    {
      icon: MapPin,
      title: 'الاستقرار في البحيرة',
      description: 'استقر في موطنه بمديرية البحيرة زمناً فاضت فيه خيراته على الناس'
    },
    {
      icon: Scroll,
      title: 'الولاية والجباية',
      description: 'ولاه محمد علي جباية مال سبع بلاد في مديرية بني سويف'
    },
    {
      icon: Sword,
      title: 'المشاركة في الحروب',
      description: 'شارك أبناؤه في حروب إبراهيم باشا ضد الأتراك وحرب الحبشة'
    }
  ];

  const locations = [
    'أبو راضي', 'صفت', 'ونا', 'شرق بويط', 'أبو صير', 'ميدوم'
  ];

  const family = [
    { name: 'إبراهيم', mother: 'حليمة من عائلة بياضة الشهيرة بالفيوم', description: 'شارك في حروب إبراهيم باشا وكان برتبة حادي عسكر' },
    { name: 'الطحاوي', mother: 'حليمة من عائلة بياضة الشهيرة بالفيوم', description: 'من أبناء عبد السميع البارزين' },
    { name: 'علي', mother: 'توما الحبشية', description: 'جبار قوة وبأساً' },
    { name: 'علواني', mother: 'توما الحبشية', description: 'جبار قوة وبأساً' },
    { name: 'محمد', mother: 'بحر النيل الحبشية', description: 'رجل متدين طيب' }
  ];

  return (
    <section id="great-ancestor" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Crown size={48} className="text-primary" />
            <h2 className="family-title text-4xl md:text-5xl text-foreground">
              عبد السميع البدادي
            </h2>
            <Crown size={48} className="text-primary" />
          </div>
          <p className="family-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
            الجد الأكبر و ألمع الأسماء في الأسرة وأذيعها صيتاً، الجد الذي تميزت ذريته بكثرة العدد
            وأمسك أولاده وأحفاده بأسباب القوة والمنعة والثراء والهمة العالية والجاه العريض
          </p>
          <Badge variant="secondary" className="family-body text-lg px-6 py-2">
            المرجع: فرسان العرب - الأسرة البدادية
          </Badge>
        </div>

        {/* Main Biography */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Biography Text */}
          <div className="lg:col-span-2">
            <Card className=" ">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6 ">
                  <Scroll className="text-primary" size={24} />
                  <h3 className="family-title text-2xl text-foreground">السيرة والتاريخ</h3>
                </div>
                <div className="space-y-6 family-body text-muted-foreground leading-relaxed">
                  <p>
                    تزعم عبد السميع الأسرة كلها بعد وفاة والده سعيد ومقتل أخوه أبو هيف، بل القبيلة بأسرها،
                    واتسع رزقه وماله والتف حوله الخدم والحشم وأصبح علماً خفاقاً عرفت شخصيته عند ولاة الأمور.
                  </p>
                  <p>
                    استقر في موطنه بمديرية البحيرة زمناً فاضت فيه خيراته على الناس، حتى أن كبير جماعته على الرزبة
                    أفاء الله عليه من خير عبد السميع، وحفيده الآن محمد حسن علي بك الرزبة من أعيان مديرية البحيرة.
                  </p>
                  <p>
                    قامت الدسائس بين عبد السميع ومحمد علي الكبير بواسطة رجال قبيلة أولاد علي التي تدين بالولاء
                    إلى محمد علي، وهي تتنازع مناطق النفوذ مع الهنادي في البحيرة. أما الأسرة البدادية فكانت تدين
                    بالولاء للمماليك مسبقاً.
                  </p>
                  <p>
                    قرر محمد علي الكبير إرضاءً لقبيلة أولاد علي إبعاد عبد السميع وأسرته من البحيرة إلى مديرية
                    بني سويف، واسترضاه بأن ولاه جباية مال سبع بلاد بها. ومن ثم كانت الهجرة الثانية للأسرة
                    واستوطنوا الأرض الجديدة.
                  </p>
                  <p>
                    كان عبد السميع يُسمى في جبايته لأموال الدولة ملتزماً، أي يعين الوالي قدراً من المال يورد إليه
                    وللملتزم الحرية في جباية ما أمكنه علاوة على ذلك، فكانت العملية تدر عليه وعلى أسرته رزقاً
                    وخيراً وفيراً ورفاهية، فضلاً عما لها من جاه ومكانة رسمية في هذه الدائرة الواسعة من البلاد السبع.
                  </p>
                  <p>
                    مكثت الأسرة وزعيمها في هذا المنزل الرغد العالي المكانة قرابة المائة عام. وتوفى عبد السميع
                    بكوم أبو راضي ودُفن بها، وما زالت آثار جبانة الأسرة في صحرائها الغربية، وما زالت بعض الحياض
                    الزراعية تُسمى بحوض البدادي رحمه الله.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div className="space-y-6">
            <Card className="">
              <CardContent className="p-6">
                <h3 className="family-title text-xl text-foreground mb-4">الإنجازات والمناصب</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0">
                        <achievement.icon size={16} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="family-body font-semibold text-foreground text-sm mb-1">
                          {achievement.title}
                        </h4>
                        <p className="family-body text-xs text-muted-foreground leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Locations */}
            <Card className="">
              <CardContent className="p-6">
                <h3 className="family-title text-xl text-foreground mb-4">البلاد السبع</h3>
                <div className="grid grid-cols-2 gap-2">
                  {locations.map((location, index) => (
                    <Badge key={index} variant="outline" className="family-body text-center justify-center">
                      {location}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Family Members */}
        <Card className="card-family bg-gradient-to-br from-background via-background/95 to-primary/5">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={24} />
              <h3 className="family-title text-2xl text-foreground">الأبناء والذرية</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {family.map((member, index) => (
                <Card key={index} className="">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <Heart size={16} className="text-primary" />
                      <h4 className="family-title text-lg text-foreground">{member.name}</h4>
                    </div>
                    <p className="family-body text-sm text-muted-foreground mb-2">
                      <strong>الأم:</strong> {member.mother}
                    </p>
                    <p className="family-body text-sm text-muted-foreground">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Wars and Military Service */}
        <Card className=" mt-8 ">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sword className="text-primary" size={24} />
              <h3 className="family-title text-2xl text-foreground">المشاركة في الحروب</h3>
            </div>
            <div className="space-y-4 family-body text-muted-foreground leading-relaxed">
              <p>
                في الحروب التي قادها إبراهيم باشا ضد الأتراك في سوريا، اشترك فيها إبراهيم ابن عبد السميع
                كما اشترك في الحرب العرابية، وكان في الأولى شاباً وكانت له مواقف مشهودة بها وكان برتبة حادي عسكر
                أي ضابط للمتطوعين العرب من قبيلته.
              </p>
              <p>
                في حرب الحبشة التي شنها إسماعيل باشا، أوفد عبد السميع شقيقه طاها نيابة عن الأسرة حادي عسكر.
                وفي نهاية هذه الحملة عاد طاها يحمل إلى أخوه عبد السميع جاريتين حبشيتين تسرى بهما.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GreatAncestor;