import { Card } from '@/components/ui/card';
import { Cloud, Sun, Sunrise, Crown } from 'lucide-react';

const FamilyStages = () => {
  const stages = [
    {
      number: "الأولى",
      title: "غيوم ومتاهات",
      icon: Cloud,
      color: "text-slate-500",
      description: "تبدأ المرحلة الأولى منذ بدأ نزوح الأسرة من الساقية الحمراء إلى أن استقرت في أحضان الديار المصرية ، إلى أن أوصلها مطافها إلى الجد الأول المعروف لنا شعيب الحمرى المستقر في مديرية البحيرة وهى مرحلة غيوم ومتاهات ذات غموض فلا نعلم في أى وقت بدأت ولا الظروف التى بدأت فيها .",
      details: "يرجع تاريخ الحمر الذين تنحدر من أصولهم الأسرة البدادية إلى بني سليم وهى القبيلة الكبرى التى هاجرت إلى المغرب العربي في أيام الفاطميين لمحاربة ثوار المغرب على الحاكم بأمر الله الفاطمى من نيف وثمانمائة عام تقريباً ."
    },
    {
      number: "الثانية",
      title: "انقشاع السحب",
      icon: Cloud,
      color: "text-blue-500",
      description: "هذه المرحلة تبدأ من شعيب الحمرى إلى رأس الأسرة الأولى عبد القادر البدادى , شعيب أول من عرفنا معرفة اليقين من أجدادنا الأوئل فهو جد عبد القادر البدادى المشهور ووالد محمد أب عبد القادر ,  إذن الجد الأول شعيب ثم محمد ثم عبد القادر البدادى .",
      details: "سُمى البدادى لأنه كان رجلاً واسع الثراء ذا مال وإبل كثيرة لا يتمكن عبيده من أن تحلب ضروعها لكثرتها فتتبدد أي ترشح الضروع ألبانها فسماه العرب عبد القادر البدادى , وهذه المرحلة كانت خلال ما قبل ثلاثمائة عام تقريباً أي في عصر المماليك على وجه التقريب , وكان البدادى من شيوخ العرب المعدودين في عصره ذا جاه ومال وذا بذل وسخاء وصاحب نجدة ومروءة ، لمع في محيط البداوة لمعاناً قوياً رحمه الله ."
    },
    {
      number: "الثالثة",
      title: "شروق",
      icon: Sunrise,
      color: "text-amber-500",
      description: "هذه المرحلة تعد فجر تاريخ الأسرة إذ فيها نُسجت خيوط تاريخها , وهذه الخيوط تبدأ من جد الأسرة القوى البارز المسماة باسمه وهو عبد القادر البدادى إلى ابنه إبراهيم وهو شيخ عرب جليل - مجيد - سار على نهج والده بالارتفاع بشأن الأسرة .",
      details: "ومن بعده إلى ابنه شيخ العرب أبو فضيلة وهو رجل يعد رأس العائلة بحق إذ تفرعت منه الفروع الثلاث الكبرى للأسرة البدادية ."
    },
    {
      number: "الرابعة",
      title: "مرحلة القوة والمجد",
      icon: Crown,
      color: "text-amber-600",
      description: "تبدأ هذه المرحلة من شيخ العرب أبو فضيلة (آدم) الأسرة الثاني ، إذ هو أب السلالات البدادية جميعها ، وتنتهى إلى عبد السميع البدادى الذي طُبعت أسرتنا عرفاً ورسمياً باسمه وطابعه .",
      details: "هذه المرحلة تمثل ذروة القوة والمجد للأسرة البدادية ، حيث ترسخت مكانتها وانتشرت فروعها في ربوع مصر ."
    }
  ];

  return (
    <section id="family-stages" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="family-title text-4xl md:text-5xl text-foreground mb-6">
            المراحل التاريخية للأسرة البدادية
          </h2>
          <p className="family-body text-lg text-muted-foreground max-w-3xl mx-auto">
            رحلة عبر الزمن تروي قصة الأسرة البدادية عبر أربع مراحل تاريخية عظيمة
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="space-y-8">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <Card 
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 bg-card"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center ${stage.color}`}>
                      <Icon className="w-10 h-10" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                        المرحلة {stage.number}
                      </span>
                      <h3 className="family-title text-2xl md:text-3xl text-foreground">
                        {stage.title}
                      </h3>
                    </div>
                    
                    <p className="family-body text-base text-muted-foreground leading-relaxed mb-4">
                      {stage.description}
                    </p>
                    
                    <div className="p-4 bg-muted/50 rounded-lg border-r-4 border-primary">
                      <p className="family-body text-sm text-muted-foreground leading-relaxed">
                        {stage.details}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FamilyStages;