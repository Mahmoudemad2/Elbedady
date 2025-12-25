import { Card } from "@/components/ui/card";
import { Swords, Award, Shield } from "lucide-react";
const FamilyHeroes = () => {
  const heroes = [
    {
      name: "الشيخ إبراهيم بك عبدالسميع البدادى",
      title: "شيخ محاربى عربان الهنادى",
      battles: ["حرب عكا 1831م", "معركة التل الكبير 1882م"],
      story: "كان رجل حرب بمعنى الكلمة وقد ندبته الاسرة البدادية عن قبيلته (الهنادى) واشترك مع ابراهيم باشا ابن محمد على فى حروب الشام ضد الاتراك . ولما نادى المنادى بالحرب العرابية كان سباقا للدفاع عن وطنه رغم شيخوخته . وفى اثناء الهجوم الغادر فى موقعة التل الكبير صمد شيخ العرب مع قلة قليلة فى اتون المعركة الرهيب يحث العربان من زملائه بكلمة عرباوية ((ديرة ياهنادى)) أى اصمدوا . حيث ظل ينزف حتى استشهد ، وأصبح قبره مزاراً لأهالى المنطقة لبطولته واصراره وغيرته على وطنه."
    },
    {
      name: "الشيخ موسى طحاوى عبدالسميع البدادى",
      title: "بطل معركة زيادى",
      battles: ["معركة زيادى ببنى سويف"],
      story: "أحد ابطال معركة (زيادى) الطاحنة بين الاسرة البدادية واحدى الأسر الكبيرة فى المنطقة أثناء الهجرة الثانية للاسرة ومكوثها ببنى سويف. فلحقت أسرتنا بهذه الاسرة هزيمة منكرة وعلى اثرها خرجت جميع الأسرة البدادية ومنحت أراضى أخرى خارج بنى سويف بمرسوم خديوى."
    },
    {
      name: "الشيخ أبوهيف سعيد البدادى",
      title: "بطل معركة حرارة",
      battles: ["معركة حرارة - مركز كوم حمادة - البحيرة"],
      story: "بطل معركة (حرارة بمركز كوم حماده - البحيرة) كانت ذلك فى الوقت الذى كانت تحارب فيه قبيلة الهنادى جنب لجنب مع المماليك وقائدهم مراد بك وكانت المعركة ضد جيش محمد على ويعاونه قبيلة اولاد على."
    },
    {
      name: "الشيخ مناع سعيد البدادى",
      title: "حادى عسكر - حرب الحبشة",
      battles: ["حرب الحبشة 1874م"],
      story: "شارك في حرب الحبشة 1874م ونجحوا فى ضم مدينة سنهيت ثم رجع لمصر وكان برتبة (حادى عسكر) اى ضابط عن المتطوعين العرب ممثلا لقبيلة الهنادى وكان احد الابطال العظام."
    },
    {
      name: "الشيخ على عبدالسميع البدادى",
      title: "محارب تجريدات السودان والحبشة",
      battles: ["السودان - دارفور 1861م", "حملة الحبشة"],
      story: "سافر فى تجريدات حربية فى عهدى الخديوى سعيد والخديوى إسماعيل إلى السودان بمديرية دارفور لإخماد القبائل السودانية عام 1861م هناك وايضا حملة الحبشة التى قادها حسن باشا ابن الخديوى اسماعيل."
    },
    {
      name: "الشيخ محمد اللافى البدادى",
      title: "قائد حملة برقة",
      battles: ["حملة برقة 1854م"],
      story: "سافر على رأس حملة تأديبية للقبائل التى ثارت على الوالى محمد سعيد وحاربوهم حتى برقة 1854م."
    }
  ];

  return (
    <>
    
    
    <section className="py-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              أبطال لن ننساهم
            </h2>
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            سطروا أروع الصفحات فى تاريخ الأسرة البدادية وقبيلتهم (الهنادى) من خلال مشاركتهم فى الحروب والمعارك والحملات المختلفة
          </p>
        </div>

        {/* Heroes Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {heroes.map((hero, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10 shrink-0">
                  <  Swords className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {hero.name}
                  </h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    <Award className="w-4 h-4" />
                    {hero.title}
                  </div>
                </div>
              </div>

              {/* Battles */}
              <div className="mb-4 space-y-2">
                {hero.battles.map((battle, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    {battle}
                  </div>
                ))}
              </div>

              {/* Story */}
              <p className="text-muted-foreground leading-relaxed text-right">
                {hero.story}
              </p>
            </Card>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="text-center mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-2 border-primary/20">
          <p className="text-lg md:text-xl font-bold text-foreground mb-4 leading-relaxed">
            أبطال حفروا أسماءهم بحروف من ذهب لوطنيتهم وفزعتهم ونصرتهم لوطنهم ولقبيلتهم الهنادى ولإرثهم وعاداتهم وحميتهم البدادية
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            حين كان رجال البدادية فى ميادين المعارك كان هناك من كان يجلس يجهز التاريخ حسب أهواءه الشخصية ليترك كلمات لم يقدر على فعلها وينسج تاريخ لم يخوضه
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-bold text-lg">
            <Shield className="w-5 h-5" />
            التاريخ لا يموت
          </div>
        </div>
      </div>
    </section>
    
    
    
    
    
    </>
  );
};

export default FamilyHeroes;