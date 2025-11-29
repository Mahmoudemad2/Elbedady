import { Card, CardContent } from '@/components/ui/card';
import { Quote, BookOpen, Star } from 'lucide-react';

interface Wisdom {
  id: number;
  text: string;
  author?: string;
  category: 'حكمة' | 'مثل' | 'قول';
}

const wisdomData: Wisdom[] = [
  {
    id: 1,
    text: "ياكلها التمساح ولا ياخدها فلاح",
    category: 'مثل',
    author: 'من تراث العرب البدو'
  },
  {
    id: 2,
    text: "إن طَوّل مرسالك أرجَى خيره",
    category: 'حكمة'
  },
  {
    id: 3,
    text: "إن غاب القط العب يا فار",
    category: 'مثل'
  },
  {
    id: 4,
    text: "إن كبر ولدك خاويه",
    category: 'حكمة'
  },
  {
    id: 5,
    text: "من صبر ظفر، ومن لجأ إلى الله كُفِي",
    category: 'حكمة'
  },
  {
    id: 6,
    text: "أهل السماح ملاح",
    category: 'قول'
  },
  {
    id: 7,
    text: "البُعد جفا",
    category: 'حكمة'
  },
  {
    id: 8,
    text: "الأيام أطول من أهلهن",
    category: 'قول'
  },
  {
    id: 9,
    text: "الباب اللى بيجيك منه الريح سِدّه واستريح",
    category: 'حكمة'
  },
  {
    id: 10,
    text: "باب النجار مخَلّع",
    category: 'مثل'
  },
  {
    id: 11,
    text: "البدوي اسْتَدّ بعد أربعين سنة وقال استعجلت",
    category: 'مثل',
    author: 'من تراث الهنادى'
  },
  {
    id: 12,
    text: "البَرَكَة في طولة الروح",
    category: 'حكمة'
  },
  {
    id: 13,
    text: "بعد ما شاب وَدّوه عالكُتّاب",
    category: 'مثل'
  },
  {
    id: 14,
    text: "البعيد عن العين بعيد عن القلب",
    category: 'حكمة'
  },
  {
    id: 15,
    text: "بن آدم زي الخُضْرة",
    category: 'مثل'
  },
  {
    id: 16,
    text: "بنت الرجال ما بتستحي من الرجال",
    category: 'قول'
  },
  {
    id: 17,
    text: "بين حانا ومانا ضاعت لحانا",
    category: 'مثل'
  },
  {
    id: 18,
    text: "التعرّض فيه الهلاك",
    category: 'حكمة'
  },
  {
    id: 19,
    text: "ثُلثين الولد للخال",
    category: 'قول'
  },
  {
    id: 20,
    text: "جارك القريب ولا أخوك البعيد",
    category: 'حكمة'
  },
  {
    id: 21,
    text: "الجاهل عدو نفسه",
    category: 'قول'
  },
  {
    id: 22,
    text: "الجايات أكثر من الرايحات",
    category: 'حكمة'
  },
  {
    id: 23,
    text: "جبل على جبل ما بيلتقي بن آدم على بن آدم بيلتقي",
    category: 'مثل'
  },
  {
    id: 24,
    text: "الجَمل لو شاف عَوَجَة رقبته ما هَدَر",
    category: 'مثل'
  },
  {
    id: 25,
    text: "جود بلا موجود تعبان صاحبه",
    category: 'حكمة'
  },
  {
    id: 26,
    text: "جَوِّع كلبك يتبعك",
    category: 'قول'
  },
  {
    id: 27,
    text: "ابن بطني بيفهم رَطْني",
    category: 'مثل'
  },
  {
    id: 28,
    text: "اللي بيشرب من بير ما بيرمي فيه حجر",
    category: 'حكمة'
  },
  {
    id: 29,
    text: "اللي بيصير جمّال بيوسع باب داره",
    category: 'حكمة'
  },
  {
    id: 30,
    text: "اللي ما بيعرف الصقر بيشويه",
    category: 'مثل'
  },
  {
    id: 31,
    text: "اللي ما له كبير بيطيح في البير",
    category: 'قول'
  },
  {
    id: 32,
    text: "الأمانة بتسَوِّد الغراب",
    category: 'حكمة'
  },
  {
    id: 33,
    text: "أول الرقص حنجله",
    category: 'مثل'
  },
  {
    id: 34,
    text: "بختك يا أبو بخيت",
    category: 'قول'
  },
  {
    id: 35,
    text: "التسهيل على الله",
    category: 'حكمة'
  },
  {
    id: 36,
    text: "جاء يكحّلها عماها",
    category: 'مثل'
  }
];

const FamilyWisdom = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'حكمة':
        return <Star className="w-5 h-5 text-primary" />;
      case 'مثل':
        return <BookOpen className="w-5 h-5 text-primary" />;
      case 'قول':
        return <Quote className="w-5 h-5 text-primary" />;
      default:
        return <Quote className="w-5 h-5 text-primary" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'حكمة':
        return 'bg-primary/10 text-primary';
      case 'مثل':
        return 'bg-secondary/10 text-secondary-foreground';
      case 'قول':
        return 'bg-accent/10 text-accent-foreground';
      default:
        return 'bg-primary/10 text-primary';
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Quote className="w-8 h-8 text-primary ml-3" />
            <h2 className="family-title text-4xl md:text-5xl text-foreground">
              الحكم والأمثال
            </h2>
            <Quote className="w-8 h-8 text-primary mr-3 rotate-180" />
          </div>
          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            تراثنا العربي زاخر بالحكم والأمثال التي تنقل لنا خبرات الأجداد وحكمتهم عبر القرون
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Wisdom Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wisdomData.map((wisdom) => (
            <Card key={wisdom.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(wisdom.category)}`}>
                    {wisdom.category}
                  </span>
                  {getCategoryIcon(wisdom.category)}
                </div>
                
                <blockquote style={{display:"flex",justifyContent:"center"}} className="family-body text-foreground text-lg leading-relaxed mb-4 relative">
                  <Quote className="w-4 h-4 text-primary/40 absolute -top-2 -right-2" />
                  {wisdom.text}
                  <Quote className="w-4 h-4 text-primary/40 absolute -bottom-2 -left-2 rotate-180" />
                </blockquote>
                
                {wisdom.author && (
                  <p className="text-sm text-muted-foreground text-left">
                    - {wisdom.author}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="family-title text-2xl text-foreground mb-1">13</h3>
            <p className="family-body text-muted-foreground">حكم</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="family-title text-2xl text-foreground mb-1">16</h3>
            <p className="family-body text-muted-foreground">أمثال</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Quote className="w-8 h-8 text-accent-foreground" />
            </div>
            <h3 className="family-title text-2xl text-foreground mb-1">7</h3>
            <p className="family-body text-muted-foreground">أقوال</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <div className="text-2xl">📚</div>
            </div>
            <h3 className="family-title text-2xl text-foreground mb-1">∞</h3>
            <p className="family-body text-muted-foreground">تراث عريق</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilyWisdom;