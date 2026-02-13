import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { BookOpen, Calendar, User, ArrowLeft, Crown, Scroll, Feather, Share2, Facebook, Twitter, Link, MessageCircle, Eye } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Content } from "vaul";

const VIEWS_STORAGE_KEY = "article_views";

// قاعدة عشوائية ثابتة لكل مقال
const BASE_VIEWS: Record<number, number> = {
  1: 1247,
  2: 892,
  3: 1534,
  4: 1089,
};

const getStoredViews = (): Record<number, number> => {
  try {
    const stored = localStorage.getItem(VIEWS_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
};

const getDisplayViews = (articleId: number, storedViews: Record<number, number>): number => {
  const base = BASE_VIEWS[articleId] || 1000;
  return base + (storedViews[articleId] || 0);
};

const incrementView = (articleId: number): number => {
  const views = getStoredViews();
  views[articleId] = (views[articleId] || 0) + 1;
  localStorage.setItem(VIEWS_STORAGE_KEY, JSON.stringify(views));
  return views[articleId];
};

const Articles = () => {
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});

  useEffect(() => {
    setViewCounts(getStoredViews());
  }, []);

  const articles = [
    {
      id: 1,
      title: "أعلام العائلة عبر التاريخ",
      excerpt: "  العلاقات المصرية الليبية عميقة ومتوطدة منذ سنوات _ وليس أدل على ذلك أن ....  ",
      content: `        العلاقات المصرية الليبية عميقة ومتوطدة منذ سنوات _ وليس أدل على ذلك أن البكباشى أركان حرب  جمال عبد الناصر  _ رئيس وزراء جمهورية مصر _ ذهب إلى مقر سفارة المملكة الليبية المتحدة بالقاهرة  _ الساعة السادسة مساء الأحد 5 يونيو 1955  ومصطفى بن حليم _ رئيس وزراء المملكة الليبية المتحدة _ ليشهدا  على عقد قران  إدريس الأول ملك المملكة  الليبية المتحدة _ ابن السيد المهدى السنوسى _ على الملكة علية ابنة المرحوم عبدالقادر بك لملوم _ ابن المرحوم لملوم  بك السعدى _ عمدة قبيلة الفوايد
عقد القران الشيخ عبدالرحمن تاج _ شيخ الجامع الأزهر بالقاهرة _ بمهر  3000 جنيه ومؤخرا صداق 4000 جنيه _ بموافقة الملكة فاطمة زوجة الملك إدريس _ كان فى وداع الملكة علية  لدى مغادرتها القاهرة إلى ليبيا على اليخت المصر (فخر البحار) 
...نص مقال فى الصفحة الأخيرة لجريدة الأهرام بتاريخ   20 سبتمبر 2010 بعنوان الأصل ليبى والنسب مصرى 

ومن المعروف أن "أسرة البدادى"  ترتبط بصلات القرابة والنسب مع أسرة لملوم  عن طريق "السيدة مبروكة بنت سعيد آل البدادى (شقيقة شيخ العرب عبدالسميع آل البدادى...رأس الأسرة البدادية وقبيلة الهنادى )  إذ تزوجت ابنتها "كلثوم الجبالى" بالسعدى كيشار ...عميد آل كيشار من قبيلة الفوايد   وأم الرجال الثلاث العظام الذين دوى اسمهم فى عالم العروبة وهم
لملوم بك السعدى (جد الملكة علية ) ومحمد بك السعدى  والمصرى باشا السعدى ....نائب رئيس الوفد المصرى  حيث كان الرئيس الحزب ذاك سعد باشا زغلول رحمة الله على الجميع..                                                   `,
      author: "  شيخ العرب منصور سلطان ",
      date: "20 يناير 2024",
      category: "شخصيات",
      icon: User,
      image: "/src/assets/gallery/article1.jpeg",
    },





  {
      id: 2,
      title: " مقال حول المنتسبين للأسرة البدادية  ",
      excerpt: "       قل هاتوا برهانكم .!     و لنحسم  هذا  الأمر  . ! ...",
      content: `                               .....................

                              قل هاتوا برهانكم .!  
                           و لنحسم  هذا  الأمر  . !
                         ...............................

            لايزال التلاسن قائماً .. والتناوش صادما .!

  المسألة ومافيها  :
 ......................
                  
             أن البدادية لا تتبرأ أبداً من أبنائها تحت أى 
             ظرفٍ ..وإلا لخلعنا قلوبنا.. وألقينا بأكبادنا
             فى غيابت الجب.  !
        والقول بغير ذلك إفكٌ مبين.وبثٌ للفرقة
        والوقيعة داخل جدران ذلك البيت الكريم !
                     (  البدادية  لاتأكل  عيالها.  !)

 الموضوع ومافيه:
 ......................
                    تهتم بداديتنا بالآداب  .. وحسن
                   التخاطب.. وإنتقاء مخارج الألفاظ 
                   لذا يستحيل على أى بدادى أن يشبه 
                   أبناءة ب ( الكلاب) .!  فلا مبرر إذن                   
                    لدس (  السم في العسل.. !)

      أبناؤنا على علاقات ممتازة مشرفةٌ مع كل 
      أطياف مجتمع الهنادى وغيره من المجتمعات
      فلاداعى للصيد فى( الماء العكر.! ) 

      أبناؤنا.. قمنا على تنشئتهم وتربيتهم.. فإن 
      طالهم عوار.. فالعيب فينا قبلهم. !
      فقط إبتعدوا عما يعكر صفوهم.. وحاذروا 
     المساس بأنسابهم واحذروا النيل من تاريخهم 
      فهذا إرثهم.. لاشريك فيه  ولامنازع  لهم.  !

  الحكاية ومافيها  :
 .......................
              أن شباب البدادية هْم من قاموا 
             بإستقبالكم مرحبين هاشين باشاين عند
             وفادتكم والقيام على رفادتكم.. حال 
             تشريفكم الديار .. وهم من عبروا النهر 
             فى أيدى الكبار لتهنئتكم بأفراحكم 
            كان آخرها الشهر المنقضي .. ثم عادوا 
           ليعودوكم فى ملماتكم معزين مشاطرين.
              

        الأمر ومافيه  :                                    
       ..................

       أنكم قدمتم لنا ( جَداً لكم ) نحترمة ونقدره 
       ولاننازعكم فيه  فهذا جدكم .. وذاك شأنكم. !
 
       لكنكم  وضعتم جدكم( جَداً علينا ) دون أن 
        تقدموا ( البينة والبرهان ) .. وهذا إن قبلنا 
       به يهدم  البنيان..ويأتى على مابقى لنا وكان. 
       
          الشبيبة البدادية يعون تماماً بأنهم وسائر 
       خلق الله سواسيةٌ كأسنان المشط لاميزة لهم
        على أحدٍ..ولاميزة لمخلوقٍ عليهم إلا بتقوى
         الله وصالح الأعمال. !

       الشباب البدادى يعلم أنسابه وجذوره ويحفظ  
       تاريخه.. وهم مطالبون بل ومأمورون بالدفاع 
        عن سلالتهم وتحصينها حتى( تأتيهم البينة ) . !

        إنتظرنا طويلاً  .. ولن ننتظر أكثر الهنادى  . !
       فإن شئتم هاتو برهانكم ..(غفر الله لنا ولكم) .
 
        وسأدعوا البدادية ليروا رأياً..علنا بذلك نوئد
        فتنةً  فى مهدها. !

      أما أنتم  بنو عبدالقادر البدادى.. أنتم  مدعوون 
      بل ومطالبون بوقف الأمر عند هذا الحد حفظاً 
      وحفاظاً على وشائج تربطنا بأحبةً لنا على 
      الشاطئ الآخر من النهر ..إنتهوا الآن خير لكم. 
        
..............................................................                                         `,
      author: "   شيخ العرب صالح خبيري",
      date: "15 يناير 2022",
      category: "  مقال حول المنتسبين",
      icon: Crown,
      image: "/src/assets/gallery/article2.jpeg",
    },





  {
      id: 3,
      title: " أسباب إنشاء منصة الأسرة البدادية",
      excerpt:   "     الحمد لله رب العالمين الذي خلق الإنسان من طين ثم جعله في قرار مكين...      " ,
      content:` الحمد لله رب العالمين الذي خلق الإنسان من طين ثم جعله في قرار مكين...

الحمد لله رب العالمين الذي خلق الإنسان من طين ثم جعله في قرار مكين، نحمده على جزيل فضله وإحسانه، ونصلي ونسلّم على المبعوث رحمة للعالمين نبينا محمد صلى الله عليه وسلّم وعلى آله وصحابته أجمعين

━━━━━━━━━━━━━━━━━━━━━━
📖 الآيات القرآنية
━━━━━━━━━━━━━━━━━━━━━━

﴿ يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا يُصْلِحْ لَكُمْ أَعْمَالَكُمْ وَيَغْفِرْ لَكُمْ ذُنُوبَكُمْ وَمَن يُطِعِ اللَّهَ وَرَسُولَهُ فَقَدْ فَازَ فَوْزًا عَظِيمًا ﴾
[الأحزاب: 70-71]

﴿ يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ وَخَلَقَ مِنْهَا زَوْجَهَا وَبَثَّ مِنْهُمَا رِجَالًا كَثِيرًا وَنِسَاءً وَاتَّقُوا اللَّهَ الَّذِي تَسَاءَلُونَ بِهِ وَالْأَرْحَامَ إِنَّ اللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا ﴾
[النساء: 1]

﴿ يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ ﴾
[الحجرات: 13]

﴿ إِنَّ اللَّهَ اصْطَفَىٰ آدَمَ وَنُوحًا وَآلَ إِبْرَاهِيمَ وَآلَ عِمْرَانَ عَلَى الْعَالَمِينَ ذُرِّيَّةً بَعْضُهَا مِن بَعْضٍ وَاللَّهُ سَمِيعٌ عَلِيمٌ ﴾
[آل عمران: 33-34]

━━━━━━━━━━━━━━━━━━━━━━
📿 الأحاديث النبوية
━━━━━━━━━━━━━━━━━━━━━━

❝ تعلموا من أنسابكم ما تحفظون به أحسابكم وتصلون به أرحامكم، فإن صلة الرحم محبة في الأهل، مثراة في المال، منسأة في الأجل، مرضاة للرب ❞
— رسول الله ﷺ

❝ من ادّعى إلى غير أبيه وهو يعلم أنه غير أبيه فالجنة عليه حرام ❞
— رسول الله ﷺ

❝ الولاء لُحمة كلُحمة النسب، والنسب لا يُباع ولا يُوهب ❞
— رسول الله ﷺ

❝ كلكم من آدم وآدم من تراب ❞
— رسول الله ﷺ

❝ لا فرق لعربي على عجمي إلا بالتقوى ❞
— رسول الله ﷺ

❝ الناس مؤتمنون على أنسابهم ❞
— رسول الله ﷺ

━━━━━━━━━━━━━━━━━━━━━━
🏛️ أقوال الصحابة
━━━━━━━━━━━━━━━━━━━━━━

❝ تعلموا النسب فربّ رحم مجهولة قد وُصلت بعرفان نسبها ❞
— عمر بن الخطاب رضي الله عنه

❝ أكرم عشيرتك فإنهم جناحك الذي به تطير ❞
— علي بن أبي طالب كرّم الله وجهه

━━━━━━━━━━━━━━━━━━━━━━
⚔️ حفظ النسب أمانة
━━━━━━━━━━━━━━━━━━━━━━

حفظ النسب أمانة في أعناق الآباء تورثه الأبناء، فمن الواجب على المسلم أن يحافظ على نسبه كما حث على حفظه الشارع دون التعالي والتفاخر على أحد أو التعصب الذي نهى عنه الرسول العظيم عليه أفضل الصلاة وأتم التسليم بقوله:

❝ دعوها فإنها منتنة ❞
يعني بذلك العصبية الجاهلية

جعلنا الله ممن يستمعون القول فيتبعون أحسنه

━━━━━━━━━━━━━━━━━━━━━━
🤝 التواصل والتراحم
━━━━━━━━━━━━━━━━━━━━━━

الهدف من حفظ النسب:
• توثيق صلة القربى
• تعريف الأجيال القادمة

ما قدمته من جهد لجمع شتات أسر وفصائل وعشائر وبطون هذه القبيلة أقصد به تعريف الأجيال القادمة بالأقرب فالأقرب لتوثيق عرى صلة القربى بين الأفراد

وأستمد العون من الله العلي القدير وأسأله أن يجعل هذا العمل خالصاً لوجهه تعالى

وأبرأ إلى الله من كل عمل لا يرضي رب العزة والجلال

━━━━━━━━━━━━━━━━━━━━━━

وصلى الله وسلّم على المبعوث رحمة للعالمين وسلام على المرسلين والحمد لله رب العالمين    `
    ,  author: "  محمود عماد مرعي",
      date: "18 يناير 2025",
      category: " رسالة المنصة",
      icon: Feather,
      image: "/src/assets/gallery/article3.jpeg",
    },







    {
      id: 4,
      title: "مستقبل العائلة والأجيال القادمة",
      excerpt: "رؤية مستقبلية للحفاظ على تراث العائلة وتعزيز الروابط بين أفرادها...",
      content: `في ظل التحولات المعاصرة، تسعى عائلة عرب عبد السميع للحفاظ على تراثها العريق مع مواكبة العصر الحديث.
تم إنشاء هذه المنصة الإلكترونية كخطوة نحو توثيق تاريخ العائلة وتسهيل التواصل بين أفرادها المنتشرين في مختلف الأماكن.
 نأمل أن تسهم هذه الجهود في تعزيز الروابط العائلية ونقل التراث والقيم الأصيلة للأجيال القادمة بطريقة تناسب العصر الرقمي و تتميز عائلة عرب عبد السميع بمجموعة من العادات والتقاليد الأصيلة التي حافظت عليها عبر الأجيال
من أبرز هذه التقاليد الاحتفال بالمناسبات العائلية بشكل جماعي، حيث يجتمع أفراد العائلة من مختلف الأماكن للمشاركة في الأفراح والأحزان.

كما تحرص العائلة على إحياء ذكرى الأجداد والحفاظ على الروابط العائلية من خلال اللقاءات الدورية والتواصل المستمر بين الأجيال المختلفة..`,
      author: "  محمود عماد مرعي",
      date: "4 فبراير 2026",
      category: "رؤية مستقبلية",
      icon: Feather,
      image: "/src/assets/gallery/rticle5.jpeg",
    },


      {
      id: 5,
      title: " حكاية منتسبين  ",
      excerpt: "                                                                    كثر الحديث عنها وأصبنا بالملل فقد انتشرت ظاهرة الانتساب للقبائل منذ فترة بحثا عن كسب احترام أو وضع اجتماعى مرموق !! على حسب ضيق     ...",
      content:` كثر الحديث عنها وأصبنا بالملل فقد انتشرت ظاهرة الانتساب للقبائل منذ فترة بحثا عن كسب احترام أو وضع اجتماعى مرموق !! "على حسب ضيق افقه" أو التخلى عن أصل معين أو اسم معين او هروبا من واقع قديم حان تغييره يتماشى مع وضعه المادى أو ربما عصر عاودت فيه العصبيات والالقاب والتخلى عن " فكرة اصل الفتى فعله ".. والوقوع فى حرمة خلط الأنساب.. وهل هناك من يساعدهم بالداخل لأجل مصالح شخصية أو المساهمة فى اضعاف وتشتيت طرف أخر داخل القبيلة او العائلة ..

- باستشارة "فريق المحلليين التابع للصفحة" تحدثوا بإختصار عن هذا الموضوع تحت عدة عناوين :-

* عوامل جذب المنتسب :-
》بريق اسم معين أو شهرته وضخامته تجعل البعض يلهث عن فكرة التخلى عن اصله والدخول تحت اسم آخر وكأن من ينتمى لهذا الإسم له الجنات أو له ميزه عن باقى البشر !!!
》غريزة منتسب قديم فى تعزيز موقعه داخل القبيلة بإضافة من يريد الانضمام أين كان مكانه أو أصله ويستحوذ على شباب مغرر بهم لهدف ومصلحة شخصية ليس إلا والبحث عن وضع مرموق يفتقده فى حياته ..
》من الداخل ومن صلب القبيلة ويقوم بجذب اشخاص بهدف مصالح مادية او تقويته او عن جهل او من يتملكه العناد او غرور او ارعن متباهيا بكتاب قرأه أو وجهة نظر متغطرسه شابته او لإضعاف طرف آخر داخل قبيلته لخلخلة إسم يجده منافس له "كما يصور له عقله الضئيل" .. دون النظر لحجم الجريمة التى يرتكبها ..
》أحمق .. يجامل من يحبهم أو صديق وفى يكافئه !.. ولا يدرى أن هناك بعض الأصدقاء أوفياء أقرب اليك من بعض اقاربك ..

* كيف تعرفه بغض النظر عن الوثائق التى تثبت انتماءه :-
》طريقة لبسه الغير منسقة تجد مثلا يلبس الغترة او الشال العربى على لبس ذوى القطعتين (القميص والبنطال) !
》يخلط بين الزى الخاص المغاربة (الفرملة والشنة ) مع الزى الخاص بالمشارقة (الشال او الغترة مع العقال) مع جلباب ليس له علاقة لا بالزى المغاربى ولا المشرقى - لا يا عزيزى البس مايحلو كيفما شئت لكن لا تخلط عن جهل لاظهارك انك تنتمى لهذا او ذاك .
》التحدث بغطرسة وعنجهية وكبرياء ظنا أن هذا تأصيل او ينم عن اصول عريقة !!!! .. --> الهيبة تبدو على الاصيل فى قمة تواضعه " هبة من الله " وليس تصنعا ☝..
》مراقبة بعض الكلمات الخاصة بالقبيلة مثال (حنى ، اشكين ، هايا) وغيرهم وسرعان ما تجده فى كل منشور او حديث ممل يتلعثم ويطرب آذانك كل دقيقة بهم ! ..
》عند مناقشته وعند غلق طريق المبررات عليه لا يجد امامه سوى الشتائم والسب والطعن وفى الأخير القليل من الدموع والشكاوى وفى الحال يجد من يقف بجانبه ! ..
》دس الفتن داخل قبيلتك او عائلتك لتخفيف الضغط عنه وجعل الجميع يشكك فى الجميع .. وكأن الانتماء للقبيلة شرف وتذكرة عبور للجنة والمنزلة الرفيعة ..
》النشاط الاجتماعى والانسانى .. تجده بكلمات مضللة وتشوبها السخرية والكذب .. ملك الفزعات الفيسبوكية .. وسيول من المجاملات والنفاق .. دائما ما يجد سبيلا للدخول الى قلب احدهم من خلال اللعب على وتر ما يحب ومايصبوا..
》التغنى الدائم بوثائق وأوراق لا حصر تثبت نسبهم لا وجود لها الا فى مخيلتهم شديدة الظلمة ..

* لا نجد إلا أن نقول ان الرجل بأفعاله وعمله وليس الدخول تحت اسم كبير يجعل منك رجلا .. اصنع نفسك واصنع عائلتك الخاصة ولا تقلل من نفسك او كرامتك .. ف رجل احيانا يحيى قبيلة ..!

* قال الله تعالى .. { (يَا أَيُّهَا النَّاسُ إِنَّا خَلَقْنَاكُم مِّن ذَكَرٍ وَأُنثَى وَجَعَلْنَاكُمْ شُعُوبًا وَقَبَائِلَ لِتَعَارَفُوا إِنَّ أَكْرَمَكُمْ عِندَ اللَّـهِ أَتْقَاكُمْ إِنَّ اللَّهَ عَلِيمٌ خَبِيرٌ)،

> قال عزوجل .. لتعارفوا وليس لتنتسبوا ☝ `,
      author: "   اسلام خير الله البدادى ",
      date: "2 فبراير 2025",
      category: "مقالات اجتماعية ",
      icon: Feather,
      image: "/src/assets/gallery/rticle6.jpeg",
    },





  ];

  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden" dir="rtl">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Decorative Icons */}
        <div className="absolute top-24 left-8 opacity-10 animate-pulse">
        
        </div>
        <div className="absolute top-32 right-8 opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
        
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Ornamental Top Border */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-primary" />

            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-primary" />
          </div>

          <h1 className="family-title text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground drop-shadow-lg">
            المقالات والأخبار
          </h1>

          <div className="flex items-center justify-center gap-3 mb-8">
            
            <p className="family-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              مقالات وأخبار عن تاريخ العائلة وأحداثها ومناسباتها
            </p>
            
          </div>

          {/* Ornamental Bottom Border */}
          
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 relative">
        {/* Decorative Elements */}
        <div className="absolute top-40 left-4 opacity-5">
          <BookOpen size={120} className="text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-4 opacity-5">
          <Feather size={120} className="text-primary animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Card dir="rtl"
                  key={article.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in-up 0.6s ease-out forwards',
                  }}
                  onClick={() => {
                    const newCount = incrementView(article.id);
                    setViewCounts(prev => ({ ...prev, [article.id]: newCount }));
                    setSelectedArticle(article);
                  }}
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute bottom-3 right-3 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Icon size={14} />
                      <span className="family-body text-xs font-medium">{article.category}</span>
                    </div>
                  </div>
                  <CardContent className="p-6 md:p-8 relative" dir="rtl">
                    {/* Decorative Top Line */}
                    <div dir="rtl" className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                    {/* Read More Icon */}
                    <div className="flex items-center justify-end mb-4">
                      <div className="bg-primary/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ArrowLeft size={16} className="text-primary" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="family-title text-xl md:text-2xl mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="family-body text-muted-foreground mb-6 leading-relaxed">
                      {article.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 pt-4 border-t border-border/50 flex-wrap">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User size={14} />
                        <span className="family-body text-sm">{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={14} />
                        <span className="family-body text-sm">{article.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-primary">
                        <Eye size={14} />
                        <span className="family-body text-sm">{getDisplayViews(article.id, viewCounts)} مشاهدة</span>
                      </div>
                    </div>

                    {/* Read Full Article Button */}
                    <Button 
                      className="w-full mt-6 gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        const newCount = incrementView(article.id);
                        setViewCounts(prev => ({ ...prev, [article.id]: newCount }));
                        setSelectedArticle(article);
                      }}
                    >
                      <BookOpen size={16} />
                      قراءة المقال كاملاً
                    </Button>

                    {/* Decorative Bottom Element */}
                    <div className="flex items-center gap-2 mt-4">
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
                      {/* <Scroll size={14} className="text-primary/50" /> */}
                      <div className="flex-1 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Dialog */}
      <Dialog  open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" dir="rtl">
          {selectedArticle && (
            <div className="space-y-6">
              {/* Article Image */}
              <div className="relative h-64 -mx-6 -mt-6 overflow-hidden rounded-t-lg">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute bottom-4 right-4 left-4">
                  <div className="flex items-center gap-2 mb-2">
                    <selectedArticle.icon size={20} className="text-primary" />
                    <span className="family-body text-sm text-primary font-medium">
                      {selectedArticle.category}
                    </span>
                  </div>
                  <h2 className="family-title text-2xl md:text-3xl text-foreground">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex items-center gap-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <User size={16} />
                  <span className="family-body text-sm">{selectedArticle.author}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span className="family-body text-sm">{selectedArticle.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="family-body text-foreground leading-relaxed whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Share Buttons */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center gap-2 mb-4">
                  <Share2 size={18} className="text-primary" />
                  <span className="family-body text-sm text-muted-foreground">مشاركة المقال:</span>
                </div>
                <TooltipProvider>
                  <div className="flex items-center gap-3 flex-wrap">
                    {/* Facebook */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-[#1877F2]/10 border-[#1877F2]/30 hover:bg-[#1877F2]/20 text-[#1877F2]"
                          onClick={() => {
                            const url = encodeURIComponent(window.location.href);
                            const text = encodeURIComponent(selectedArticle.title);
                            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank', 'width=600,height=400');
                          }}
                        >
                          <Facebook size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>مشاركة على فيسبوك</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Twitter/X */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-foreground/5 border-foreground/20 hover:bg-foreground/10"
                          onClick={() => {
                            const url = encodeURIComponent(window.location.href);
                            const text = encodeURIComponent(selectedArticle.title);
                            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400');
                          }}
                        >
                          <Twitter size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>مشاركة على تويتر</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* WhatsApp */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-[#25D366]/10 border-[#25D366]/30 hover:bg-[#25D366]/20 text-[#25D366]"
                          onClick={() => {
                            const url = encodeURIComponent(window.location.href);
                            const text = encodeURIComponent(`${selectedArticle.title}\n\n`);
                            window.open(`https://wa.me/?text=${text}${url}`, '_blank');
                          }}
                        >
                          <MessageCircle size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>مشاركة على واتساب</p>
                      </TooltipContent>
                    </Tooltip>

                    {/* Copy Link */}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="outline"
                          size="icon"
                          className="bg-primary/10 border-primary/30 hover:bg-primary/20 text-primary"
                          onClick={() => {
                            navigator.clipboard.writeText(window.location.href);
                            toast({
                              title: "تم النسخ",
                              description: "تم نسخ رابط المقال بنجاح",
                            });
                          }}
                        >
                          <Link size={18} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>نسخ الرابط</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </TooltipProvider>
              </div>

              {/* Close Button */}
              <div className="pt-4 border-t border-border">
                <Button
                  onClick={() => setSelectedArticle(null)}
                  className="w-full"
                >
                  إغلاق
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Decorative Footer Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        

          <p className="family-body text-lg text-muted-foreground leading-relaxed">
            نسعى من خلال هذه المقالات لتوثيق تاريخ عائلة عرب عبد السميع العريقة
            ونقل تراثها وقيمها للأجيال القادمة
          </p>

        
        </div>
      </section>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Articles;
