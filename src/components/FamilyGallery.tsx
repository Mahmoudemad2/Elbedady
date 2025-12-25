import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Camera, Heart, Calendar, Users } from "lucide-react";
import horseElderImg from "@/assets/gallery/horse-elder.jpg";
import gardenVisitImg from "@/assets/gallery/garden-visit.jpg";
import familyGatheringOldImg from "@/assets/gallery/family-gathering-old.jpg";
import elderPortraitImg from "@/assets/gallery/abdenabygbal.jpg";
import celebrationGatheringImg from "@/assets/gallery/celebration-gathering.jpg";
import familyFormalImg from "@/assets/gallery/family-formal.jpg";
import samiadaImg from "@/assets/gallery/simada.jpg";
import sanosi from "@/assets/gallery/snosi.jpg";
import elderOvalPortraitImg from "@/assets/gallery/elder-oval-portrait.jpg";
import saaif from "@/assets/gallery/saif.jpg";
import farouk from "@/assets/gallery/farouk.jpg";
import khirala from "@/assets/gallery/khirala.jpg";
import grop from "@/assets/gallery/grop.jpg";
import khabiry from "@/assets/gallery/khabiry.jpg";
import largeFamilyGatheringImg from "@/assets/gallery/large-family-gathering.jpg";
import malikfarouk from "@/assets/gallery/malikfarok.jpg";
import abosaiif from "@/assets/gallery/abosaif.jpg";
import khiralla from "@/assets/gallery/khiralla.jpg";
import  abdaslam from "@/assets/gallery/abdsalam.jpg";
import  abdelmanem from "@/assets/gallery/abdemanim.jpg";
import  nabil from "@/assets/gallery/nabil.jpg";
import  saleh from "@/assets/gallery/saleh.jpg";
import  saiid from "@/assets/gallery/saeed.jpg";
import  abdelwahab from "@/assets/gallery/abdelwahab.jpg";
import  mansour from "@/assets/gallery/mansour.jpg";
import  emad from "@/assets/gallery/emad.jpg";
import  mahgoub from "@/assets/gallery/mahgoub.jpg";
import  ali from "@/assets/gallery/ali1.jpg";
import  haitham from "@/assets/gallery/haitham.jpg";
import  nabiil from "@/assets/gallery/nabil2.jpg";
import  alaaa from "@/assets/gallery/allaa.jpg";
import  ahmedbrkat from "@/assets/gallery/barakat.jpg";
import  mohamenabil from "@/assets/gallery/mohamenabil.jpg";
import Navigation1 from "./Navigation";
const FamilyGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const categories = [
    { id: "all", name: "جميع الصور", icon: Camera },
    { id: "gatherings", name: "التجمعات", icon: Users },
    { id: "celebrations", name: "الاحتفالات", icon: Heart },
    { id: "memories", name: "ذكريات", icon: Calendar },
  ];

  const galleryItems = [
    {
      id: 1,
      title: "شيخ العرب السيد أبو سيف البدادى ",
      category: "memories",
      year: "القرن العشرين",
      description:
        "  صورة نادره لشيخ مشايخ العرب الحاج السيد أبو سيف  (رحمه الله)  وإحدى خيوله (غازيا) , الحاج السيد أبو سيف هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير        ",
      image: horseElderImg,
    },
    {
      id: 2,
      title: "  شيخ العرب  فاروق  مرعى البدادى ",
      category: "memories",
      year: "القرن العشرين",
      description:
        "     صورة لشيح العرب فاروق مرعى البدادى  (رحمه الله)  وطيب سيرتة , الأستاذ فاروق مرعى  هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: farouk,
    },

{
      id: 3,
      title: "  شيخ العرب خبيرى عبد الله البدادى ",
      category: "memories",
      year: "القرن العشرين",
      description:
        "     صورة لشيح العرب خبيرى عبد الله البدادى  (رحمه الله)    , شيخ العرب خبيرى هو ابن عبد الله بك عبد السميع عمدة قبيلة الهنادى , وحفيد  ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: khabiry,
    },

    

    {
      id: 4,
      title: "     استضافة معالي الربان عمر المختار صميدة",
      category: "memories",
      year: "القرن الواحد والعشرين",
      description:
        "    معالى الربان عمر المختار صميدة رئيس حزب المؤتمر وعضو مجلس الشيوخ والمؤسس الأول لمجلس  القبائل العربية  والمصرية بحضور  مشايخ العرب المهندس / عبد الوهاب السعدي سلطان عبد الله عبد السميع البدادى والحاج / السيد مرعى السيد عبد السميع البدادى  والحاج أحمد بركات راتب حسين السيد عبد السميع البدادى والحاج / ايمن عبد المنعم راتب حسين السيد عبد السميع البدادى في اطار تلبية دعوتة لمناقشة سير العملية الانتخابية داخل مركز فاقوس وكفر صقر واولاد صقر       ",
      image: samiadaImg,
    },

    {
      id: 5,
      title: "  استضافة الأسرة لعدد من السياسين",
      category: "celebrations",
      year: "القرن العشرين",
      description:
        "                                                                                                                      صورة نادرة لشيخ العرب الحاج / خيرالله السيد عبدالسميع البدادى يستضيف في عزبته بتلراك - شرقية.. السيد / وجيه اباظة .. السياسى الشهير وأحد ضباط الثورة ومحافظ البحيرة والغربية وصاحب توكيلات السيارات الفرنسية بيجو والسيد /  لطفى واكد السياسى المعروف وعضو تنظيم الضباط الأحرار ومدير مكتب الرئيس محمد نجيب والرئيس جمال عبدالناصر وقائد المقاومة على خط القنال 1967 ..   وأعضاء مجلس قيادة الثورة فى زيارة لديار الأسرة البدادية ..                                              ",
      image: khirala,
    },

    {
      id: 6,
      title: " جزء من زعماء الأسرة البدادية  ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "            جزء من زعماء الأسرة البدادية وكبار مشايخها ويتوسطهم عمدة قبيلة الهنادى  حسين بك عبد السميع البدادى و على يمينة شيح العرب خير الله عبد السميع البدادى وعلى يسارة شيخ العرب خبيرى عبد السميع البدادى والواقفين بالترتيب شيخ العرب السعدى سلطان عبد الله البدادى وشيخ العرب راتب حسين السيد عبد السميع البدادى وشيخ العرب أبو سيف السيد عبد السميع البدادى وفى أقصى الصورة الحاج عبد المنعم راتب حسين السيد عبد السميع البدادى    ",
      image: grop,
    },


    {
      id: 7,
      title: "  صورة لشيخ العرب عبد النبى جبيل البدادى    ",
      category: "memories",
      year: "القرن العشرين",
      description:
        "  (ابن فتى ال عبد السميع )   .......   شيخ العرب عبد النبى جبيل ابراهيم عبد السميع البدادى   , هو ابن شيخ العرب جبيل عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: elderPortraitImg,
    },
    {
      id: 8,
      title: " حفل استقبال الملك ادريس السنوسي  ",
      category: "memories",
      year: "القرن العشرين",
      description:
        "     حسين بك عبد السميع البدادى عمدة قبيلة الهنادى  والأسرة البدادية فى استقبال عبد الله باشا لملوم عمدة قبيلة الفوايد وأفراد اللأسرة السنوسية الملكية الليبية       ",
      image: sanosi,
    },
    {
      id: 9,
      title: "  حلقة سباق الأسرة البدادية",
      category: "memories",
      year: "القرن العشرين",
      description:
        "    كما ان خيولنا رؤسها مرفوعة , الصورة للحاج السيد أبو سيف  البدادى والأستاذ نبيل راتب البدادى رحمهم الله فى أحدى حلقات سباق الأسرة البدادية بجزيرة مطاوع ",
      image: saaif,
    },
    
    {
      id: 10,
      title: "   صورة حصرية ونادرة من ذاكرة الأسرة البدادية  ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "         صورة حصرية ونادرة تجمع حسين بك عبد السميع البدادى عمدة قبيلة الهنادى بالملك فاروق ملك مصر والسودان والملك عبد العزيز ال سعود ملك المملكة العربية السعودية أثناء حفل الاستقبال المعد له والذى أشرف عليه حسين بك    ",
      image: malikfarouk,
    },


{
      id: 11,
      title: " مجلس استقبال ضيوف الأسرة البدادية",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "مجلس استقبال الأسرة البدادية للملك ادريس السنوسي ( ملك ليبيا .... السابق ) وأفراد الأسرة السنوسية",
      image: largeFamilyGatheringImg,
    },


    {
      id: 12,
      title: "  صورة  جماعية وحفل    للقبائل العربية ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "صورة لشيخ العرب : عبد الله بك عبد السميع البدادى ( عمده قبيله الهنادي ) ,  وحفل لعمد القباىل العربية ووجهاء ورؤساء المديريات , عبد الله بك عبد السميع هو أول عمدة لقبيلة الهنادي من الأسرة البدادية     ",
      image: familyGatheringOldImg,
    },
    

{
      id: 13,
      title: "الصورة لشيخ مشايخ العرب  ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "       شيخ العرب أبو سيف السيد عبد السميع البدادى رحمه الله , شيخ العرب أبو سيف  هو ابن شيخ العرب السيد عبد السميع و شقيق حسين بك عبد السميع  عمدة قبيلة الهنادى , وحفيد ابراهيم بك عبد السميع شهيد معركة التل الكبير   ",
      image: abosaiif,
    },


{
      id: 14,
      title: "الصورة لشيخ مشايخ العرب  ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "       شيخ العرب خير الله السيد عبد السميع البدادى رحمه الله , شيخ العرب خير الله  هو ابن شيخ العرب السيد عبد السميع و شقيق حسين بك عبد السميع  عمدة قبيلة الهنادى , وحفيد ابراهيم بك عبد السميع شهيد معركة التل الكبير   ",
      image: khiralla,
    },


{
      id: 15,
      title: "  شيخ العرب عبد السلام عبد الله البدادى ",
      category: "memories",
      year: "القرن العشرين",
      description:
        "     صورة لشيح العرب عبد السلام عبد الله البدادى  (رحمه الله)    , شيخ العرب عبد السلام هو ابن عبد الله بك عبد السميع عمدة قبيلة الهنادى , وحفيد  ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: abdaslam,
    },

  {
      id: 16,
      title: "الصورة لشيوخ العرب  ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "       جالسا الشيخ  عبد العال سلطان البدادي   على يمينه الشيخ  عبد الحميد عبد الرحمن البدادي علي يساره الشيخ  الحسيني طحاوي البدادي",
      image: familyFormalImg,
    },


      {
      id: 16,
      title: "  الجد و الحفيد  ",
      category: "gatherings",
      year: "القرن العشرين",
      description:
        "                الصورة تجمع بين الجد و حفيده  , شيخ العرب عبد المنعم راتب حسين البدادى بجوار جده حسين بك عبد السميع البدادى عمدة قبيلة الهنادى",
      image: abdelmanem,
    },


  {
      id: 17,
      title: "     شيخ العرب نبيل راتب حسين البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                     شيخ العرب نبيل راتب حسين البدادى , حفيد حسين بك عبد السميع عمدة قبيلة الهنادى    ",
      image: nabil,
    },

  {
      id: 18,
      title: "         حضرة شيخ العرب صالح بك خبيرى  البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "               كلماته دائمًا ما تحمل الحكمة والمعرفة ، فهو معلمنا وصديقنا في نفس الوقت , منارة العائلة ، وبفضل علمه نرتقي ونتطور  , في زمنٍ قد تختلط فيه الأمور، يظل هو بوصلتنا نحو الحق والعدل، فلن نضل ما دام لنا قدوة انه حضرة شيخ العرب صالح بك خبيرى , حفيد شيخ العرب عبد الله عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: saleh,
    },

  {
      id: 19,
      title: "     شيخ العرب الحاج السيد أبو سيف البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                   كان رحمه الله   هو المزيج النادر بين القلب الكبير والهيبة التي تفرض نفسها ,    ولدت معه الهيبة وظهرت  بالفطرة ، وتظهر في أبسط أفعاله وأقل  كلماته ,   جمعت فيه طيبة القلب وهيبة الأسد، رحمه الله رحمة واسعة ,  الحاج السيد أبو سيف هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير   ",
      image: saiid,
    },
{
      id: 20,
      title: "         حضرة عبد الوهاب السعدى بك البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                     هو رمز العدل والنزاهة في عائلتنا ، نرى في عدله مثالاً  يُحتذى  به  , صوته هو صوت الحق ، ولا يخاف قول ما يراه صواباً ولو كان مخالفاً للتيار , شهادة حق تقال في رجلٍ من شجرة طيبة ، فهو يجسد معاني العدل والشجاعة , هو حفيد شيخ العرب عبد الله عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير  ",
      image: abdelwahab,
    },


{
      id: 21,
      title: "     شيخ العرب  الحاج  منصور  سلطان  البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                     مثال للرجل الشهم والخلوق ، صاحب القلب الطيب والروح الكبيرة ،  يشهد له بصدقه وأخلاقه وحرصه على لَمّ شمل العائلة , لقد زرعت المعروف في قلوب الجميع ، وحصدت محبة وشكراً لا ينضب ، بفضل لطفك ومبادراتك الطيبة وصلتك التي لا تنقطع  ,  شيخ العرب  الحاج  منصور  سلطان حفيد شيخ العرب عبد الله عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير  ",
      image: mansour,
    },


{
      id: 22,
      title: "     شيخ العرب علاء الدين  سلطان  البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                      من يعرفه يدرك أن الذوق والجمال ليسا مجرد طبع بل هما انعكاس لقلب نقي , كرم أخلاقه وطيبة قلبه شيء لا يضاهى ،  نسأل الله أن يديم عليه هذه الصفات وأن يبارك له في   كل أيامه , شيخ العرب مهندس  علاء الدين سلطان حفيد شيخ العرب عبد الله عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: alaaa,
    },


{
      id: 23,
      title: "     شيخ العرب محمد عبد الموجود مصرى البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                     في عالمٍ يغلب فيه المظاهر، كان هو بريقًا من الرقي الأصيل ، أخلاقه هي أجمل ما فيه , بذوقه الرفيع وأخلاقه العالية ، أثبتّ أن الأصل الطيب هو أرقى ما في العرب عامة وفى الأسرة البدادية خاصة , سيرته العطرة هي امتداد لسيرة أجدادنا العظماء , فهو حفيد  شيخ العرب  محجوب عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير  ",
      image: mahgoub,
    },

    {
      id: 24,
      title: "     شيخ العرب على  مفتاح جبيل البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         " نرفع رؤوسنا عالياً بوجود رجل مثلكم في الأسرة البدادية ، يجمع بين الأصل العريق والسلوك المهذب , لقد زرع الأجداد فيكم القيم النبيلة ، فكنتم خير خلف لخير سلف ، سيرتكم العطرة تملأ القلوب فخراً , إن السيرة العطرة التي يتمتع بها هي نتاج أصل طيب وتربية راقية ، نفخر بكم وبانتمائكم لهذه العائلة الكريمة , شيخ العرب على مفتاح هو حفيد  شيخ العرب  جبيل عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير   ",
      image: ali,
    },
  {
      id: 25,
      title: "     شيخ العرب الحاج أحمد بركات  راتب البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         " تتحدث القلوب عنه قبل الألسنة ، فبياض قلبه كان عنوان نقاء روحه , لا يوجد في قاموسه مكان للحقد أو الكراهية، قلبه كان  مساحة خضراء تنبت فيها أزهار المحبة والسلام وشهد على ذلك أقاربه وتلاميذه فكان نعم القلب الطيب والمعلم الناجح رحمه الله رحمة واسعة واسكنه فسيح جناته اللهم امين , شيخ العرب أحمد بركات راتب البدادى هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير  ",
      image: ahmedbrkat,
    },

{
      id: 26,
      title: "     شيخ العرب كابتن محمد نبيل  راتب البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         " كان مثالاً للبر والاحترام، وبأخلاقه الحميدة حظي بحب واحترام الجميع , الأخلاق الطيبة لا تموت بعد الرحيل. ربما تنام وعشرات الدعوات ترفع لك من كل قلب لمست حياته بطيبتك وحسن خلقك , كان زهرة في بستان عائلتنا ، رحل باكراً لكن عبيره باق , شيخ العرب محمد نبيل راتب البدادى هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: mohamenabil,
    },


  {
      id: 27,
      title: "     شيخ العرب عماد محمود مرعى البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                     اجتمعت فيه فضائل الأصل، وطيب السيرة، ورقي الأخلاق و شهامة ورجولة، وطيب قلب لا يضاهى، تلك هي صفاته التي تجعله فخراً لعائلته بأكملها , لأبناء عمومته وأقاربه مكانة خاصة في قلبه ,  شيخ العرب عماد محمود مرعى البدادى  هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير ",
      image: emad,
    },
  {
      id: 28,
      title: "     شيخ العرب هيثم عبد الوهاب البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                       كم هو جميل أن نرى شخصًا يجمع بين الذوق الرفيع والاحترام الجم ، أنه مثال يحتذى به , تعامله الراقي مع الكبير والصغير يعكس تربيته الصالحة وأصله الطيب , فن التعامل والذوق الرفيع صفتان متأصلتان فيه , ذلك ما يجعله مميز الدكتور هيثم السعدى هو حفيد شيخ العرب عبد الله بك عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير   ",
      image:haitham,
    },



  {
      id: 29,
      title: "     شيخ العرب نبيل السيد عبد العاطى البدادى ",
      category: "gatherings",
      year: "القرن  الواحد و العشرين",
      description:
         "                      كان عز وفخر وسند ، رحمه الله رحمة واسعة واسكنه فسيح جناته اللهم امين , النخوة والفزعة ما تنشرى بالمال بل هى طبع الكرام ، كان له من هذه الصفات النصيب الأوفى , رحل عنا ولكنه لم يرحل من قلوبنا , شيخ العرب نبيل السيد عبد العاطى البدادى هو حفيد شيخ العرب السيد عبد السميع ابن ابراهيم بك عبد السميع شهيد معركة التل الكبير  ",
      image:nabiil,


  }



  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <Navigation1 />
      <section id="gallery" className="py-20 bg-background" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="family-title text-4xl md:text-5xl text-foreground mb-6">
              معرض الصور العائلية
            </h2>
            <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              لحظات جميلة وذكريات عزيزة نحتفظ بها في قلوبنا، صور تحكي قصة عائلة
              محبة ولحظات سعادة لا تُنسى
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="lg"
                onClick={() => setActiveCategory(category.id)}
                className={`family-body font-semibold px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "btn-family-primary"
                    : "hover:bg-secondary hover:text-secondary-foreground"
                }`}
              >
                <category.icon size={18} className="ml-2" />
                {category.name}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <Card
                key={item.id}
                className="card-family group cursor-pointer overflow-hidden"
              >
                <div
                  className="relative aspect-video bg-gradient-card overflow-hidden"
                  onClick={() =>
                    setSelectedImage({
                      image: item.image,
                      title: item.title,
                      description: item.description,
                    })
                  }
                >
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full  object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="rounded-full"
                    >
                      <Camera size={16} className="ml-2" />
                      عرض الصورة
                    </Button>
                  </div>
                </div>

                <CardContent className="p-6 bg-card" style={{ height: "100%" }}>
                  <div className="flex items-center justify-between mb-3 ">
                    <Badge variant="outline" className="family-body">
                      {item.year}
                    </Badge>
                    <Heart
                      size={16}
                      className="text-muted-foreground hover:text-primary cursor-pointer transition-colors"
                    />
                  </div>

                  <h3 className="text-xl text-foreground mb-3">{item.title}</h3>

                  <p className=" text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Upload Section */}
          {/* <div className="text-center mt-16">
          <Card className="card-family max-w-md mx-auto">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={28} className="text-primary" />
              </div>
              <h3 className="family-title text-2xl text-foreground mb-4">
                شاركنا ذكرياتك
              </h3>
              <p className="family-body text-muted-foreground mb-6 leading-relaxed">
                هل لديك صور جميلة تريد مشاركتها مع العائلة؟ نحن نرحب بمساهماتكم
              </p>
              <Button className="btn-family-primary w-full">
                <Camera size={18} className="ml-2" />
                إضافة صور جديدة
              </Button>
            </CardContent>
          </Card>
        </div> */}

          {/* Full Screen Image Dialog */}
          <Dialog
            open={!!selectedImage}
            onOpenChange={() => setSelectedImage(null)}
          >
            <DialogContent className="max-w-[95vw] mix-h-[95vh] p-0 border-0 bg-black/95">
              <div className="relative w-full h-full flex flex-col items-center justify-center p-4">
                {/* Close Button */}

                {/* Image */}
                <img
                  src={selectedImage?.image || ""}
                  alt={selectedImage?.title || ""}
                  className="min-w-full max-h-[50vh] object-contain rounded-lg"
                />

                {/* Image Info */}
                {selectedImage && (
                  <DialogTitle className="DialogTitle mt-6 text-center max-w-2xl">
                    
                    
                    
                        {selectedImage.title}
                    
            
                    <DialogDescription className="DialogDescription mt-6 text-center max-w-2xl">
                      
                  
                          {selectedImage.description}
                        
                    
                    </DialogDescription>
                  </DialogTitle>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </section>
    </>
  );
};

export default FamilyGallery;
