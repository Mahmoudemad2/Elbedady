import { Shield, Swords, Mountain, Users, Landmark, Crown, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation1 from './Navigation';
const BadadiaOrigins = () => {
  const heroes = [
    {
      name: "ابراهيم بك عبدالسميع البدادى",
      role: "شهيد معركة التل الكبير",
      description:
        "كان رجل حرب بمعنى الكلمة، اشترك مع ابراهيم باشا في حروب الشام، واستشهد في معركة التل الكبير وهو يردد (ديرة ياهنادى)",
      icon: Swords,
    },
    {
      name: "موسى الطحاوى عبدالسميع البدادى",
      role: "بطل معركة زيادى",
      description:
        "أحد أبطال معركة زيادى الطاحنة التي انتصرت فيها الأسرة البدادية",
      icon: Swords,
    },
    {
      name: "ابوهيف سعيد البدادى",
      role: "بطل معركة حرارة",
      description:
        "بطل معركة حرارة بمركز كوم حمادة بالبحيرة، حارب جنباً إلى جنب مع المماليك",
      icon: Swords,
    },
    {
      name: "مناع سعيد البدادى",
      role: "بطل حرب الحبشة",
      description:
        "شارك في حرب الحبشة برتبة حادي عسكر (ضابط عن المتطوعين العرب)",
      icon: Swords,
    },
  ];

  const tribes = [
    "الهنادي",
    "المحاميد",
    "المغاربة",
    "البراعصة",
    "الجرابي",
    "الجوازي",
    "الفوايد",
    "أولاد علي",
  ];

  const mainBranches = [
    {
      title: "سـعيــد",
      children: [
        {
          name: "عبدالسميع",
          subChildren: [
            "إبراهيم",
            "الطحاوى",
            "علوانى",
            "كيلانى",
            "محمد",
            "على",
            "يوسف",
            "جوده",
          ],
        },
        {
          name: "شـــراقى",
          subChildren: ["مقاوى", "بوزريده", "عيسى", "على", "محمود"],
        },
        {
          name: "طـــــــه",
          subChildren: ["عبدالنبى", "منــــاع الثانى", "أبوالقاسم"],
        },
        {
          name: "منـــــاع",
          subChildren: ["حمد"],
        },
        {
          name: "على",
          subChildren: ["حامد", "مجاور"],
        },
        {
          name: "أبوهيف الأول",
          note: "استشهد شاباً في معركة حرارة بالبحيرة",
        },
      ],
    },
    {
      title: "عبدالسميع",
      children: [
        {
          name: "الجالى",
          subChildren: ["عبدالغفار", "سلومة"],
        },
      ],
    },
    {
      title: "إبراهيم",
      children: [
        {
          name: "أبوفضيله الثانى",
          subChildren: ["اللافى", "شنتير"],
        },
      ],
    },
  ];

  const leaders = [
    {
      name: "عبدالسميع بك البدادى",
      year: "1848م",
      role: "زعيم الأسرة وأحد شيوخ القبيلة",
    },
    {
      name: "إبراهيم بك عبدالسميع البدادى",
      year: "1882م",
      role: "زعيم الأسرة ومن شيوخ القبيلة",
      note: "استشهد في معركة التل الكبير وهو في الثمانين من عمره",
    },
    {
      name: "عبدالله بك عبدالسميع البدادى",
      year: "1895م",
      role: "عمدة قبيلة الهنادى",
      note: "حصل على الكثير من الأوسمة والنياشين من السلطان العثمانى",
    },
    {
      name: "حسين بك عبدالسميع البدادى",
      year: "1931م",
      role: "عمدة قبيلة الهنادى",
    },
  ];

  return (
    <>
    <Navigation1/>
    <section
      className="py-20 bg-gradient-to-b from-background via-muted/30 to-background"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6 ">
            <Landmark className="w-12 h-12 text-primary" />
            {/* <h2 className="family-title text-5xl text-foreground">من هم البدادية</h2> */}
            <h3 className="family-title text-3xl text-foreground text-center">
              من هم البدادية
            </h3>
            <Landmark className="w-12 h-12 text-primary" />
          </div>
          <Badge variant="outline" className="text-lg px-6 py-2 mb-6">
            عرب البدادية من قبيلة الهنادى من بني سليم
          </Badge>
        </div>

        {/* Origin Story */}
        <Card className="mb-12 border-2 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="family-title text-3xl text-foreground mb-4">
                  الأصول والنسب
                </h3>
                <div className="family-body text-lg text-foreground/90 leading-relaxed space-y-4">
                  <p>
                    عرب البدادية أحد بطون بيت السلم من{" "}
                    <span className="text-primary font-bold">
                      قبيلة الهنادى
                    </span>{" "}
                    منسوبة إلى هند بن سلام من قبائل بني سليم بن منصور بن عكرمة
                    بن خصنة بن قيس بن عيلان بن مضر بن نزار بن معد بن عدنان.
                  </p>
                  <p>
                    هاجرت من شبه الجزيرة العربية إلى مصر إبان الفتوحات واشتركوا
                    مع الفاطميين في إخماد الثورات في المغرب العربي فاستقر جزء
                    هناك واستقر جزء آخر بمصر.
                  </p>
                  <p>
                    انتقلت قبيلة الهنادي إلى الديار المصرية حوالي سنة{" "}
                    <span className="text-primary font-bold">1000 هجرية</span>{" "}
                    في عهد العثمانيين وقطنت مديرية البحيرة أولاً ثم انتقلت إلى
                    صعيد مصر، وأقطعها محمد علي باشا جزءاً من مديرية الشرقية.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why "البدادى" */}
        <Card className="mb-12 bg-gradient-to-br from-card via-card to-primary/5">
          <CardContent className="p-8">
            <h3 className="family-title text-3xl text-foreground mb-6 text-center">
              لماذا سُموا بالبدادية؟
            </h3>
            <p className="family-body text-lg text-foreground/90 leading-relaxed text-center max-w-4xl mx-auto">
              سُمي جد العائلة ورأسها{" "}
              <span className="text-primary font-bold">البدادى</span> لأنه كان
              رجلاً واسع الثراء ذا مال وإبل كثيرة لا يتمكن عبيده من أن تحلب
              ضروعها لكثرتها{" "}
              <span className="text-primary font-bold">فتتبدد</span> أي ترشح
              الضروع ألبانها، فسماه العرب{" "}
              <span className="text-primary font-bold">عبد القادر البدادى</span>
              . وكان من شيوخ العرب المعدودين في عصره ذا جاه ومال وذا بذل وسخاء
              وصاحب نجدة ومروءة.
            </p>
          </CardContent>
        </Card>

        {/* Full Lineage */}
        <Card className="mb-12 border-2 border-primary/20">
          <CardContent className="p-8">
            <h3 className="family-title text-3xl text-foreground mb-6 text-center">
              نسب الأسرة الكامل
            </h3>
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-6 rounded-lg">
              <p className="family-body text-lg text-foreground text-center leading-relaxed">
                <span className="text-primary font-bold">
                  عبدالقادر "البدادى"
                </span>{" "}
                بن محمد بن شعيب بن دويس بن
                <span className="text-primary font-bold">
                  {" "}
                  سليم (بيت السلم)
                </span>{" "}
                بن حماد بن
                <span className="text-primary font-bold">
                  {" "}
                  هند (قبيلة الهنادى)
                </span>{" "}
                بن
                <span className="text-primary font-bold">
                  {" "}
                  سلام (السلالمة)
                </span>{" "}
                من
                <span className="text-primary font-bold">
                  {" "}
                  (قبائل السعادى)
                </span>{" "}
                من
                <span className="text-primary font-bold">
                  {" "}
                  (قبائل بنى سليم)
                </span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Family Tree Path */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h3 className="family-title text-3xl text-foreground mb-6 text-center">
              سلسلة جدود الأسرة
            </h3>
            <div className="flex flex-col items-center gap-4">
              <div className="text-center">
                <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg mb-4">
                  <p className="family-title text-2xl text-primary">
                    عبد القادر البدادى
                  </p>
                  <p className="family-body text-sm text-muted-foreground">
                    جد الأسرة القوي البارز - صاحب الصيت والثراء
                  </p>
                </div>
              </div>
              <div className="w-1 h-8 bg-primary/30"></div>
              <div className="text-center">
                <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg mb-4">
                  <p className="family-title text-2xl text-primary">إبراهيم</p>
                  <p className="family-body text-sm text-muted-foreground">
                    شيخ عرب جليل - مجد
                  </p>
                </div>
              </div>
              <div className="w-1 h-8 bg-primary/30"></div>
              <div className="text-center">
                <div className="inline-block bg-primary/10 px-6 py-3 rounded-lg mb-4">
                  <p className="family-title text-2xl text-primary">
                    أبو فضيلة
                  </p>
                  <p className="family-body text-sm text-muted-foreground">
                    رأس العائلة - آدم الأسرة الثانى
                  </p>
                </div>
              </div>
              <div className="flex gap-8 mt-4">
                <Badge variant="outline" className="text-base px-4 py-2">
                  سعيد
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2">
                  عبد السميع
                </Badge>
                <Badge variant="outline" className="text-base px-4 py-2">
                  إبراهيم
                </Badge>
              </div>
              <p className="family-body text-muted-foreground text-center mt-4">
                منهم نُسجت خيوط وتاريخ الأسرة العريق
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Related Tribes */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h3 className="family-title text-3xl text-foreground mb-6 text-center">
              القبائل المشهورة من بني سليم
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {tribes.map((tribe, index) => (
                <div key={index} className="text-center">
                  <Badge
                    variant="secondary"
                    className="text-base px-4 py-2 w-full"
                  >
                    {tribe}
                  </Badge>
                </div>
              ))}
            </div>

<div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <p className="family-body text-center text-muted-foreground">
         الشقيقان  ابراهيم  والطحاوى  من بنى سليم أب وأم حيث أنهم الشقيقين من عبد السميع البدادى من قبيلة الهنادى , ومن أم واحدة هى حليمة من  عائلة بياضة الشهيرة من قبيلة البراعصة
          </p>
        </div>


          </CardContent>
        </Card>

        {/* Main Branches */}
        <div className="mb-12">
          <h3 className="family-title text-4xl text-foreground text-center mb-8">
            فروع الأسرة البدادية
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mainBranches.map((branch, idx) => (
              <Card key={idx} className="border-2 border-primary/20">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Badge variant="default" className="text-lg px-6 py-2">
                      {branch.title}
                    </Badge>
                  </div>
                  <div className="space-y-4">
                    {branch.children.map((child, childIdx) => (
                      <div key={childIdx} className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-primary/5 rounded-lg">
                          <Users className="w-4 h-4 text-primary flex-shrink-0" />
                          <p className="family-body text-foreground font-semibold">
                            {child.name}
                          </p>
                        </div>
                        {child.subChildren && (
                          <div className="mr-6 space-y-1">
                            {child.subChildren.map((sub, subIdx) => (
                              <div
                                key={subIdx}
                                className="flex items-center gap-2 p-1.5 bg-muted/30 rounded"
                              >
                                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
                                <p className="family-body text-sm text-muted-foreground">
                                  {sub}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                        {child.note && (
                          <p className="family-body text-xs text-muted-foreground italic mr-6">
                            * {child.note}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="family-body text-muted-foreground text-center mt-8 text-lg">
            منهم تأتى أحد أكبر فروع قبيلة الهنادى وينتشروا فى معظم محافظات مصر
          </p>
        </div>

        {/* Heroes Section */}
        <div className="mb-12">
          <h3 className="family-title text-4xl text-foreground text-center mb-8">
            أبطال سطروا التاريخ
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {heroes.map((hero, index) => {
              const Icon = hero.icon;
              return (
                <Card
                  key={index}
                  className="border-2 border-primary/20 hover:border-primary/40 transition-all"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-lg">
                        <Icon className="w-8 h-8  text-amber-600" />
                      </div>

                      <div className="flex-1">
                        <h4 className="family-title text-xl text-foreground mb-2">
                          {hero.name}
                        </h4>
                        <Badge variant="secondary" className="mb-3">
                          {hero.role}
                        </Badge>
                        <p className="family-body text-foreground/80 leading-relaxed">
                          {hero.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Additional Hero */}
        <Card className="mb-12 border-2 border-primary/30">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Swords className="w-8 h-8 flex-shrink-0 mt-1 text-amber-600 " />
              </div>
              <div>
                <h4 className="family-title text-2xl text-foreground mb-3">
                  على عبدالسميع البدادى
                </h4>
                <p className="family-body text-lg text-foreground/90 leading-relaxed">
                  سافر في تجريدات حربية في عهدي الخديو سعيد والخديو إسماعيل إلى
                  السودان بمديرية دارفور لإخماد الثورات هناك، وأيضاً حملة الحبشة
                  التي قادها حسن باشا ابن الخديو إسماعيل.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Section */}
        <Card className="mb-12 bg-gradient-to-br from-primary/5 via-card to-primary/10">
          <CardContent className="p-8">
            <h3 className="family-title text-4xl text-foreground mb-8 text-center">
              شيوخ وعمد الأسرة والقبيلة
            </h3>
            <p className="family-body text-lg text-center text-muted-foreground mb-8">
              منهم البكوات وعمد القبيلة وأصحاب المناصب والنفوذ وكبراء مناطقهم
              أينما وجدوا
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {leaders.map((leader, idx) => (
                <Card key={idx} className="bg-card border-2 border-primary/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Crown className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="family-title text-xl text-primary mb-2">
                          {leader.name}
                        </h4>
                        <Badge variant="secondary" className="mb-2">
                          {leader.year}
                        </Badge>
                      </div>
                    </div>
                    <p className="family-body text-foreground/90 mb-2">
                      {leader.role}
                    </p>
                    {leader.note && (
                      <p className="family-body text-sm text-muted-foreground italic">
                        • {leader.note}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
            <p className="family-body text-center text-muted-foreground mt-8">
              وغيرهم الكثير من الشيوخ والمشاهير الذين صنعوا تاريخ الأسرة
              والقبيلة ونستنير بتاريخهم إلى الآن
            </p>
          </CardContent>
        </Card>

        {/* Closing Statement */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-6 rounded-lg">
            <p className="family-title text-2xl text-foreground mb-2">
              بذلك سطرت الأسرة البدادية أعظم الملاحم التاريخية
            </p>
            <div className="w-32 h-1 bg-primary mx-auto rounded-full mt-4"></div>
          </div>
        </div>

        {/* Reference */}
        <div className="mt-8 text-center">
          <Badge variant="outline" className="text-base px-6 py-2">
            المرجع: فرسان العرب - الأسرة البدادية
          </Badge>
        </div>
      </div>
    </section>
    
    
    
    </>
  );
};

export default BadadiaOrigins;
