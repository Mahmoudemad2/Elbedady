import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, MapPin, Users, Scroll, Swords, Crown } from 'lucide-react';

const HanadiTribe = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-10 h-10 text-primary ml-3" />
            <h2 className="family-title text-4xl md:text-5xl text-foreground">
              قبيلة الهنادي
            </h2>
            <Shield className="w-10 h-10 text-primary mr-3" />
          </div>
          <p className="family-body text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            القبيلة الأم التي تعود بأصلها إلى بني سليم القيسية المضرية
          </p>
          <div className="w-24 h-1 bg-primary mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="warriors" className="mb-12" dir='rtl'>
          <div className="w-full mb-8 overflow-x-auto scrollbar-hide pb-2">
            <TabsList className="inline-flex w-auto min-w-full md:grid md:w-full md:grid-cols-6 h-auto flex-nowrap gap-1">
              <TabsTrigger value="warriors" className="family-body whitespace-nowrap flex-shrink-0 px-4 py-3 text-sm md:text-base">فرسان وفاتحون</TabsTrigger>
              <TabsTrigger value="origins" className="family-body whitespace-nowrap flex-shrink-0 px-4 py-3 text-sm md:text-base">الأصول</TabsTrigger>
              <TabsTrigger value="bani-sulaym" className="family-body whitespace-nowrap flex-shrink-0 px-4 py-3 text-sm md:text-base">بني سليم</TabsTrigger>
              <TabsTrigger value="history" className="family-body whitespace-nowrap flex-shrink-0 px-4 py-3 text-sm md:text-base">التاريخ</TabsTrigger>
              <TabsTrigger value="branches" className="family-body whitespace-nowrap flex-shrink-0 px-4 py-3 text-sm md:text-base">الفروع</TabsTrigger>
              <TabsTrigger value="badadia" className="family-body whitespace-nowrap flex-shrink-0 px-4 py-3 text-sm md:text-base">البدادية</TabsTrigger>
            </TabsList>
          </div>

          {/* Warriors Tab */}
          <TabsContent value="warriors" className="space-y-6 " dir="rtl">
            <Card className="border-l-4 border-l-primary" dir='rtl' >
              <CardHeader >
                <CardTitle className="family-title text-2xl flex items-center gap-2 text-right">
                  <Swords className="w-6 h-6 text-primary" />
                  قبيلة الهنادى فرسان وفاتحون وأعيان
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p className="font-semibold text-primary">
                  التاريخ هو صانع الوعي بالذات، ومنبع الفيض للمستقبل، والجذور هي كوامن الهوية، ويمثلان معا البوصلة الوحيدة القادرة علي إعادتنا نحو غد يمثلنا، في حاضر نعيش فيه، يسعي الكثيرون إلي تلويثه بشتي موبقات التفتيت.
                </p>
                <p>
                  إذا ذكر اسم الهنادي، فما أسرع ما تتبادر إلي الذهن، الفروسية والشراسة والاستهانة بالموت وسرعة امتشاق السيوف، ويمكن القول علي وجه اليقين، إن الهنادي من القبائل المحاربة التي سجل التاريخ لها نشاطا أو بروزا مع القبائل المجاورة لها في منازلها أو مع السلطات الحاكمة سواء بسواء.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">أبرز إنجازات الهنادي</CardTitle>
              </CardHeader>
              <CardContent className="text-right">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="family-body">• عقدوا صلحاً مع محمد علي جرياً وراء مصالحهم الاقتصادية</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="family-body">• قاوموا الحملة الفرنسية بضراوة وشاركوا في المجهود الحربي</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="family-body">• امتد ذكرهم إلي سوريا باشتراكهم في حملة إبراهيم باشا</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="family-body">• أطلق عليهم أحمد باشا الجزار لقب الهوارة لشدة بأسهم</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="family-body">• انضموا إلي الحركة العرابية واشتركوا في معركة كفر الدوار</p>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg">
                    <p className="family-body">• اشتهروا باحتكار الصقور وكلاب الصيد والجياد العربية</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">الهنادي في عهد محمد علي باشا</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p>
                  عندما غامر محمد علي بحروبه في جزيرة العرب والشام والسودان، عرض علي الهنادي تشكيل فرق منهم، بشرط أن يأتي كل منهم بفرسه وبندقيته، وقد أفادت هذه الفرق المساعدة للجيش المصري من الوجهة العسكرية، فكانت كفرق (القوزاق) غير المنظمين في جيوش روسيا.
                </p>
                <p className="font-bold text-primary text-xl">
                  والهنادي هم الذين أسروا رشيد باشا قائد الجيش العثماني في معركة (قونية) خلال الحملة الأولي للشام عام 1822 م.
                </p>
                <p>
                  كان محمد علي يكافئ مشايخ العربان بمبالغ عالية، فور عودتهم من أداء مأمورياتهم في فتوحاته، كما كان يكافئهم بتعينهم في منصب كبير المشايخ في قبائلهم.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">الهنادي خارج مصر</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-6 text-right">
                <div>
                  <h4 className="font-semibold text-primary mb-3">في بلاد الشام وسوريا:</h4>
                  <p className="mb-2">
                    ذكرهم في سوريا، وهم أنصاف حضر من بقايا الأعراب المتطوعة في جيش إبراهيم باشا، وقد ظلوا في بلاد الشام بعد رجوع الحملة المصرية، ولهم قري عديدة في قضاء الباب بحلب في سوريا.
                  </p>
                  <p>
                    من أبرز عائلاتهم: البطران، آل الربيع، وآل الجاويش. ومن أشهر رجالاتهم المجاهد أحمد مريود الذي استشهد في الثورة السورية عام 1926.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">في الأردن:</h4>
                  <p>
                    في البلقاء من الأردن يوجد العوازم ويقال إنهم بطن من عرب الهنادي الذين قدموا من الديار المصرية. من أشهر أعلامهم دولة الرئيس مضر بدران الذي كان رئيساً للوزراء ما بين عامي 1984-1980.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary mb-3">في فلسطين:</h4>
                  <p className="mb-2">
                    استخدمهم أحمد باشا الجزار أثناء حكمه بلاد الشام 1804-1775، للقضاء علي إمارة آل زيدان وحلفائهم العرب، ولصد هجمات البدو علي شمال فلسطين، وكان لهم دورهم البارز في إيقاع الهزيمة بجيش نابليون حين حاصر عكا.
                  </p>
                  <p>
                    يتوزعون في غزة وبئر السبع ونابلس والخليل والرملة، ومن أشهر عائلاتهم حجازي في غزة وعائلة بدران في نابلس.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">الصفات والخصائص</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p>
                  عندما يذكر اسم الهنادي، فما أسرع ما تتبادر إلي الذهن، الفروسية والشراسة والاستهانة بالموت وسرعة امتشاق السيوف. ولقد ينبغي أن نضيف إلي ما سبق شهرتها باحتكار الصقور وكلاب الصيد والجياد العربية الأصيلة.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    يذكر الدكتور نبيل صبحي حنا أنهم كانوا يطاردون الصقور، بأن يأخذ الهنداوى حمامة ويربط جناحيها حتي لا تهرب ويثبت عدداً من شعر الخيل معقوداً حول جسمها، وعندما ينقض الصقر عليها يتعثر في خيوط الشعر فيمكن للهنداوى أن يمسك به.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">التوطين والاستقرار</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p>
                  كانت الهنادي من القبائل أكثر ميلا للاستقرار وتقبلا للتوطين في الفترة التي شهدت منح وتوزيع الأراضي عليهم في عهد محمد علي باشا.
                </p>
                <p>
                  نجحت سياسة منح الأراضي حيث توجد الأراضي الصالحة للزراعة فاستقر جزء كبير من قبيلة الهنادي بمحافظة المنوفية، ومارست الزراعة حتي انفصلت تماما عن القبيلة الأم.
                </p>
                <p className="font-semibold text-primary">
                  تستقر الغالبية العظمي من أفراد القبيلة في محافظة الشرقية، وهم منتشرون في جميع مراكزها، كما يوجد فروع منهم في القليوبية والبحيرة والفيوم وبني سويف والإسكندرية.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Origins Tab */}
          <TabsContent value="origins" className="space-y-6" dir="rtl">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="family-title text-2xl flex items-center gap-2">
                  <Scroll className="w-6 h-6 text-primary" />
                  الأصل والنسب
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p>
                  الهنادي تعود بأصلها إلى <span className="text-primary font-semibold">قبائل بني سليم القيسية المضرية</span> التي كانت تعيش في الحجاز، وهي قبيلة قوية منيعة الجانب نشيطة، ووقائعها في كتب التاريخ معروفة.
                </p>
                <p>
                  في أوائل القرن الرابع الهجري تمردت سليم وجارتها هلال وهي قيسية مضرية أيضاً، فحوربوا وهاجروا إلى الشام ومنها إلى مصر.
                </p>
                <p>
                  في القرن الخامس الهجري بالتحديد سنة <span className="text-primary font-semibold">444 هـ</span>، أغراهم الخليفة الفاطمي المستنصر بالله بالرحيل إلى المغرب للقضاء على حكم المعز بن باديس.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="family-title text-xl flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    الاستقرار في ليبيا
                  </CardTitle>
                </CardHeader>
                <CardContent className="family-body leading-relaxed text-right">
                  <p>
                    انتهى المطاف ببني سليم أن عادوا إلى ليبيا واستوطنوا صحراءها، وحافظوا على ما عندهم من عادات وتقاليد ولغة عربية، حتى صارت ليبيا عربية لا ينافسها في عروبتها قطر عربي آخر باستثناء الجزيرة العربية.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="family-title text-xl flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    السعادي
                  </CardTitle>
                </CardHeader>
                <CardContent className="family-body leading-relaxed text-right">
                  <p>
                    انشطار سكان البادية الليبية إلى قسمين عظيمين، وهم أبناء سعدي بنت الزناتي خليفة. وينقسم السعادي إلى ثلاثة أقسام: <span className="text-primary">البراغيث، العقاقرة، والسلالمة</span> (الهنادي وبنوعونة والبهجة).
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Bani Sulaym Tab */}
          <TabsContent value="bani-sulaym" className="space-y-6" dir="rtl">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="family-title text-2xl flex items-center gap-2 text-right">
                  <Crown className="w-6 h-6 text-primary" />
                  قبائل بني سليم - القبيلة الأم
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p className="font-semibold text-primary text-xl">
                  تنسب إلى سُليم بن منصور بن عكرمة بن خصفة بن قيس عيلان بن مضر بن نزار بن معد بن عدنان من ذرية إسماعيل بن إبراهيم عليهم السلام.
                </p>
                <p>
                  لهم الشرف العظيم بمشاركة نبينا ﷺ فتح مكة بألف فارس وكثير من الغزوات والفتوحات الإسلامية.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg my-4">
                  <p className="font-semibold text-primary">
                    قال النبي محمد ﷺ في حديث صحيح شهير: « أنا ابن العواتك من سليم »
                  </p>
                  <p className="text-sm mt-2">
                    والعواتك هُن ثلاث نساء من جدات النبي محمد جميعهن يحملن اسم عاتكة ومن قبيلة بني سليم.
                  </p>
                </div>
                <p>
                  كانوا يقيمون في المنطقة الممتدة بين الطائف ومكة وبين المدينة ونجد.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">نزولهم مصر وشمال أفريقيا</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p>
                  كان نزولهم مع الفتوحات بجانب هجرات متتالية زادت بشكل تصاعدى بدءاً من العصر الأموى "عهد هشام بن عبدالملك" 109هـ - حينما طلب "عبيدالله ابن الحبحاب" بيوتاً من "قيس" فكان له ما طلب بشرط أن يكونوا بعيد عن العاصمة "الفسطاط".
                </p>
                <p>
                  نزلوا "مائة بيت من بنى نضر ومائة بيت من بنى سليم" منطقة بلبيس فاستوطنوا هذه المنطقة وعمروها وسمح لهم بشراء الخيول وتربيتها فأثروا من تربية الخيل بسبب جودة المراعى واتساع الأراضى الزراعية.
                </p>
                <p>
                  فازداد ثراءهم حتى وصلت أخبارهم أبناء عمومتهم في الجزيرة العربية فنزحوا إلى مصر خمسمائة بيت وبعدها بعام وصل خمسمائة بيت آخر حتى وصل عددهم ألف وخمسمائة بيت في بلبيس وحدها.
                </p>
                <p>
                  في خلافة "مروان بن محمد آخر خلفاء بنى أمية" وولاية "الحوثرة بن سهيل الباهلى" وصل عدد بيوت قيس (القبيلة الأم لبنى سليم) ثلاثة آلاف بيت فأصبحت بلبيس منطقة نفوذ لقيس.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">الصراع مع العباسيين</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p>
                  توقف عندها التاريخ خاصة مع بداية "عصر العباسيين" فقد بدأ الصراع يحتدم بين قيس والقبائل العربية من جهة والعباسيين من جهة أخرى عندما استعان العباسيون بالفرس في الحكم وفرضت الضرائب المجحفة فاحتدم الصراع وذلك 178هـ.
                </p>
                <p>
                  كان ذلك في ولاية "إسحاق بن سليمان بن على العباسى" واستمرت الصراعات حتى تحولت إلى ثورة كبرى ضد العباسيين وطرد الموظفين العباسيين في الدلتا والصعيد حتى انتهاء الثورة في 10 محرم 217هـ حين أخمدها الخليفة المأمون بالإصلاحات الضريبية وبداية عصر جديد.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">العصر الفاطمي</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p>
                  توالت الهجرات في "العصر الفاطمى" حينما قدمت بنى سليم وبنى هلال وما لبثوا أن استقروا عدة سنوات حتى طلب منهم الخليفة الفاطمى إخماد ثورات شمال أفريقيا.
                </p>
                <p>
                  استقل والى تونس "المعز بن باديس" بحكم أفريقية "تونس" واستمال الشمال الأفريقي تحت قيادته فسرعان ما أخمدت بنى سليم وبنى هلال أبناء عمومتهم الثورة فعادت شمال أفريقيا إلى الدولة المركزية في مصر.
                </p>
                <p className="font-semibold text-primary">
                  أقطعهم الخليفة المستنصر هذه المنطقة الممتدة بين حدود مصر حتى مراكش فتشكلت قبائل قوية "من القبيلة الأم بنى سليم" في منطقة برقة ونزلوا مصر مرة أخرى على هيئة هجرات متتالية في بداية العصر العثمانى.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5">
              <CardHeader>
                <CardTitle className="family-title text-xl text-right">علامة فارقة في التاريخ العربى</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <p className="font-semibold text-lg">
                  قبائل بنى سليم قبائل محاربة قوية ظلت في صراع دائم من أجل البقاء، رقم صعب يقف طويلاً أمامه التاريخ فقد شاركت بشكل مؤثر في تاريخ ومستقبل العرب، بطون متسعة وانتشارها في جل الوطن العربى.
                </p>
                <div className="bg-background/80 p-4 rounded-lg">
                  <p className="text-primary font-semibold">
                    ونفخر نحن "الأسرة البدادية" من قبيلة الهنادى من السلالمة من السعادى من سليم بانتمائنا لهذه القبيلة العريقة حيث ميراثنا من القوة والفزعة وتصدر المشهد دائماً.
                  </p>
                </div>
                <p>
                  قبيلة الهنادى إحدى أقوى "قبائل سليم" قبيلة محاربة شاركت في جميع الأحداث السياسية بداية من "عصر محمد على" واستعانته بالهنادى بجانب القبائل السلمية في حروبه وتوسعاته للإمبراطورية وترسيخ حكمه وحماية المنطقة الشرقية لمصر.
                </p>
                <p>
                  كان للبدادية "أكبر بطون الهنادى" النصيب الأكبر لفرسان الهنادى، فاستشهاد "إبراهيم بك عبدالسميع البدادى" في معركة التل الكبير 1882م شاهد على ذلك بجانب أبناء عمومتهم من بيت الأفراد/قبيلة الهنادى مفتاح موسى جبريل وغيرهم الكثير.
                </p>
                <p className="font-semibold">
                  أينما وجد أبناء قبائل سليم يكسبون احترام الجميع وتجدهم في الصفوف الأمامية في الدفاع عن دينهم ووطنهم وقبيلتهم بفضل الله.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-xl text-right flex items-center gap-2">
                  <Scroll className="w-5 h-5 text-primary" />
                  قيل فيهم
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <div className="border-r-4 border-primary pr-4 py-2">
                  <p className="mb-2">
                    <span className="font-semibold text-primary">قال أبو عبد الله محمد بن أحمد بن عبد الله الأسدي سنة 322هـ:</span>
                  </p>
                  <p className="text-muted-foreground">
                    "سليم بن منصور بن عكرمة بن خصفه بن قيس بن عيلان بن مضر، وسليم شعب لا قبيلة، لأنه خرج منه عدة قبائل وعمائر وبطون وأفخاذ."
                  </p>
                </div>

                <div className="border-r-4 border-primary pr-4 py-2">
                  <p className="mb-2">
                    <span className="font-semibold text-primary">قال الحمداني:</span>
                  </p>
                  <p className="text-muted-foreground">
                    "وهم أكثر قبائل قيس عدداً، وفيهم الأبطال الأنجاد، والخيل الجياد."
                  </p>
                </div>

                <div className="border-r-4 border-primary pr-4 py-2">
                  <p className="mb-2">
                    <span className="font-semibold text-primary">قال ابن خلدون:</span>
                  </p>
                  <p className="text-muted-foreground">
                    "وأما بني سليم هؤلاء فبطن متسع من أوسع بطون مضر وأكثرهم جموعاً، وهم بنو سليم بن منصور بن عكرمة بن خصفة بن قيس، وفيهم شعوب كثيرة."
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* History Tab */}
          <TabsContent value="history" className="space-y-6" dir="rtl">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="family-title text-2xl flex items-center gap-2">
                  <Swords className="w-6 h-6 text-primary" />
                  الهجرة إلى مصر
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p>
                  سميت بهذا الاسم نسبة إلى والدهم <span className="text-primary font-semibold">هند بن سلام</span>. قدمت هذه القبيلة إلى مصر من طرابلس الغرب أوائل العهد العثماني، وقد أقامت في البحيرة التي منحها للهنادي <span className="text-primary font-semibold">السلطان سليم الأول</span>.
                </p>
                <p>
                  بلغ تعداد أفرادها إبان الحملة الفرنسية على مصر حوالي <span className="text-primary font-semibold">30 ألفاً</span>، وبلغ عدد فرسانها أكثر من <span className="text-primary font-semibold">ثمانمائة</span>، وكانت من أقوى القبائل التي واجهت الحملة الفرنسية.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-2xl">الصراع مع أولاد علي</CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p>
                  كانت قبائل الهنادي تسيطر على قبيلة الجميعات في البحيرة. وعندما وصلت قبيلة أولاد علي، استقبلتهم الجميعات وساعدتهم على الإقامة، ووجدت في ذلك فرصة للانتقام من الهنادي.
                </p>
                <p>
                  هاجمت قبيلة أولاد علي متكاتفة مع قبيلة الجميعات الهنادي وأجبرتها على عبور وادي النيل شرق كفر الزيات واستولت على البحيرة.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-2xl">عهد محمد علي باشا</CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p>
                  كانت العلاقة بين الهنادي ومحمد علي تتباين بين العداء والولاء. ساعدت الهنادى قوات الألفي بك في حربه مع محمد علي، مما دفعه لإرسال حملات تأديبية في البحيرة والفيوم عام 1806.
                </p>
                <p>
                  بعد موت الألفى بك 1807، عقدت الهنادي صلحاً مع محمد علي. وعندما غامر بحروبه في جزيرة العرب والشام والسودان، شكل فرقاً من الهنادي كانت كفرق القوزاق في جيوش روسيا.
                </p>
                <p className="text-primary font-semibold">
                  الهنادي هم الذين أسروا رشيد باشا قائد الجيش العثماني في معركة قونية خلال الحملة الأولى للشام عام 1822م.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="family-title text-2xl text-foreground mb-2">الفروسية</h3>
                  <p className="family-body text-muted-foreground">شهرة بالفروسية والشجاعة</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Swords className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="family-title text-2xl text-foreground mb-2">الشراسة</h3>
                  <p className="family-body text-muted-foreground">قبيلة محاربة سجلها التاريخ</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Crown className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="family-title text-2xl text-foreground mb-2">الأصالة</h3>
                  <p className="family-body text-muted-foreground">احتكار الصقور والجياد</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Branches Tab */}
          <TabsContent value="branches" className="space-y-6" dir="rtl">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="family-title text-2xl flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  فروع قبيلة الهنادي
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed text-right">
                <p className="mb-6">
                  أولاد هند الذي تنتسب إليه القبيلة، وتشمل الفروع التالية:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">سليم</h3>
                    <p>بيت السلْم (البدادي، الداوودة، أبو مجحود)</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">منيصر</h3>
                    <p>بطن المناصرة</p>
                  </div>
                
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">طريف</h3>
                    <p>بطن الطريفيات</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">عليوة</h3>
                    <p>بطن العليوات (حويطة، المنفي، أبي بكر)</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">الفردي</h3>
                    <p>بطن الأفراد (أبو منديل، جبريل)</p>
                  </div>
                  <div className="bg-muted/30 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-primary mb-3">مؤمن</h3>
                    <p>أبو حرب، البلتاجي، بريشة، سعيد، الجهمي</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-2xl">فرع عليوة</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed text-right">
                <p className="mb-4">من نسل حويطة:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>مطرود ومنه بيت المطاردة بأبي صوير</li>
                  <li>العلواني ودعبس</li>
                </ul>
                <p className="mt-4 mb-4">أنجب أبو بكر ولدين:</p>
                <ul className="list-disc list-inside space-y-2 mr-6">
                  <li>الشافعي</li>
                  <li>بركات وأولاد الأول الطحاوي</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Badadia Tab */}
          <TabsContent value="badadia" className="space-y-6" dir="rtl">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="family-title text-2xl flex items-center gap-2">
                  <Crown className="w-6 h-6 text-primary" />
                  عرب البدادية
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body text-lg leading-relaxed space-y-4 text-right">
                <p>
                  عائلات البدادى (عرب البدادية) تعتبر من أكبر فروع الهنادى، ينتمون إلى <span className="text-primary font-semibold">شيخ العرب عبدالقادر البدادى</span> صاحب الثراء والجاه أقوى رجال القبيلة في عصره.
                </p>
                <p>
                  تميز بالاستقلالية وسكن منطقة الساقية الحمراء بمصراته التى تعتبر شديدة القساوة لم يسكنها سوى ذوى البأس والبداوة الشديدة، كان ذلك قبل الهجرة ثانياً مع القبيلة إلى مديرية البحيرة بمصر.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-2xl">التسلسل من شيخ العرب عبدالقادر البدادى</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed text-right">
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">عبد القادر البدادى</h4>
                      <p className="text-muted-foreground">رأس العائلة وشيخها الأول</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">إبراهيم عبدالقادر</h4>
                      <p className="text-muted-foreground">شيخ عرب جليل، سار على نهج والده</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">شيخ العرب أبو فضيلة</h4>
                      <p className="text-muted-foreground">رأس العائلة بحق، تفرعت منه الفروع الثلاث الكبرى</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-r-4 border-r-primary bg-gradient-to-l from-primary/5 to-background">
              <CardHeader>
                <CardTitle className="family-title text-2xl flex items-center gap-2 text-right">
                  <Swords className="w-6 h-6 text-primary" />
                  أبو هيف الثاني - الذي تحدى الخديوي عباس
                </CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed space-y-4 text-right">
                <div className="bg-primary/10 p-4 rounded-lg mb-4">
                  <p className="font-semibold text-primary">
                    أبو هيف الثاني بن حمد بن مناع بن سعيد البدادي
                  </p>
                  <p className="text-sm mt-2">
                    عميد فرع الأسرة الذي استقر بمركز بلبيس
                  </p>
                </div>

                <p>
                  كان أبو هيف هذا شيخ عرب وقور مملوء بداوة وحمية يقيم بأنشاص بجوار صحرائها عبر ترعة الحلوه، وكانت أطيانه تجاور مزارع الخديوي عباس حلمي الثاني. كان رجلاً مهاباً ملحوظ المكانة في وسط محترماً يتعمد العربان من شتى القبائل في هذه الدائرة الواسعة من مركز بلبيس.
                </p>

                <p>
                  كان رجلاً ذا جلد وقوة إرادة - إذا أراد زيارة أقاربه بنواحي شيط الهوى (من أعمال مركز كفر صقر) امتطى ظهر جواده وقطع هذه المسافات الشاسعة لا يكل ولا يمل ويرجع على نفس الوضع. كان أبياً عالي النفس يحترم شخصيته.
                </p>

                <div className="bg-muted/50 p-6 rounded-lg my-6">
                  <h4 className="font-semibold text-xl text-primary mb-4">قصة التحدي الشهيرة:</h4>
                  <div className="space-y-3">
                    <p>
                      كان الخديوي عباس يحبه ويحترمه، وكان إذا حضر إلى مزارعه في أنشاص صحبه معه في التفتيش على الحقول فكان يركب معه جواده.
                    </p>
                    <p>
                      ذات مرة شاءت أطماع الخديوي أن يضم قطعة من أراضي أبو هيف مجاورة وداخلة في أرضه إلى أملاكه ويعطيه بدلاً منها، فلم يرض أبوهيف. فاستعمل معه كل وسائل الإغراء فلم يرض.
                    </p>
                    <p>
                      وعندما كان يصاحبه في تجواله قال له الخديوي: ألا ترضى يا أبو هيف بهذا العرض السخي؟ فأبى أبوهيف. فغضب أفندينا وقال له وهما يمتطيان الخيل ويتحازيان في السير في الحقول: ألا ترضى يا بزبور العرب بعرض أفندينا؟ ودفعه في صدره بشمسيته التي كان يحملها.
                    </p>
                    <p className="font-bold text-primary text-lg">
                      فغضب أبو هيف لهذه الإهانة وأمسك بالشمسية بيده وقال له: «عيب يا مولانا، هذا شيء كثير لا أرضاه»
                    </p>
                    <p>
                      فزاد غضب الخديوي من هذا التحدي وقال له: أمتكبر أنت على دفعك بالشمسية؟
                    </p>
                    <p className="font-bold text-primary text-lg">
                      فقال: «نعم، أنا لا أضرب بالشمسية كالخدم والعبيد - أنا رجل عربي لا أضرب إلا بالبندقية»
                    </p>
                    <p>
                      قالها بعنف ولوى عنان جواده يريد مفارقة الخديوي. فأكبر الخديوي هذه الهمة العالية وهذا الإباء والشمم واسترضاه وطيب خاطره وتأكدت بينهما الصداقة من جديد.
                    </p>
                  </div>
                </div>

                <div className="bg-primary/10 p-4 rounded-lg">
                  <p className="font-semibold text-primary">
                    وقد شاءت الأقدار أن يكرر أبو هيف الثاني في هذه النعرة العالية جده الخالد أبو هيفاً الأول رحمه الله وأمطر قبريهما شآبيب الرحمة والغفران.
                  </p>
                </div>

                <div className="mt-6 text-sm text-muted-foreground">
                  <p>المرجع: فرسان العرب - الأسرة البدادية</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-2xl">الفروع الثلاث الكبرى</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed text-right">
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-4">سعيد</h3>
                    <ul className="space-y-2">
                      <li>• عبدالسميع</li>
                      <li>• طه</li>
                      <li>• شراقى</li>
                      <li>• مناع</li>
                      <li>• أبوهيف الكبير</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-4">عبدالسميع الكبير</h3>
                    <ul className="space-y-2">
                      <li>• الجالى</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6 rounded-lg border-2 border-primary/20">
                    <h3 className="text-2xl font-bold text-primary mb-4">إبراهيم</h3>
                    <ul className="space-y-2">
                      <li>• بوفضيله الثانى</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-muted/30 p-6 rounded-lg">
                  <h4 className="font-semibold text-xl mb-4 text-primary">بيوت البدادى الستة:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-background rounded">
                      <h5 className="font-semibold mb-2">عبدالسميع</h5>
                      <p className="text-sm text-muted-foreground">ابراهيم، الطحاوى، علوانى، كيلانى، محمد، على، يوسف، جوده</p>
                    </div>
                    <div className="p-4 bg-background rounded">
                      <h5 className="font-semibold mb-2">الجالى</h5>
                      <p className="text-sm text-muted-foreground">عبدالغفار، سلومة</p>
                    </div>
                    <div className="p-4 bg-background rounded">
                      <h5 className="font-semibold mb-2">شراقى</h5>
                      <p className="text-sm text-muted-foreground">مقاوى، بوزريده، عيسى، على، محمود</p>
                    </div>
                    <div className="p-4 bg-background rounded">
                      <h5 className="font-semibold mb-2">طه</h5>
                      <p className="text-sm text-muted-foreground">عبدالنبى، مناع الثانى</p>
                    </div>
                    <div className="p-4 bg-background rounded">
                      <h5 className="font-semibold mb-2">مناع</h5>
                      <p className="text-sm text-muted-foreground">أبوهيف، سليمان</p>
                    </div>
                    <div className="p-4 bg-background rounded">
                      <h5 className="font-semibold mb-2">بوفضيله الثانى</h5>
                      <p className="text-sm text-muted-foreground">اللافى، شنتير</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="family-title text-2xl">انتشار عرب البدادية</CardTitle>
              </CardHeader>
              <CardContent className="family-body leading-relaxed">
                <p className="mb-4">انتشرت عائلات البدادية في محافظات عديدة:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">الشرقية</h5>
                      <p className="text-sm text-muted-foreground">أولاد صقر، كفر صقر، فاقوس، أبوكبير، صان الحجر، بلبيس</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">القليوبية</h5>
                      <p className="text-sm text-muted-foreground">طوخ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">البحيرة</h5>
                      <p className="text-sm text-muted-foreground">الدلنجات، أبو المطامير</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">كفر الشيخ</h5>
                      <p className="text-sm text-muted-foreground">مطوبس</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">الفيوم</h5>
                      <p className="text-sm text-muted-foreground">طامية، أبشواى</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">بني سويف</h5>
                      <p className="text-sm text-muted-foreground">الواسطى</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="font-semibold">الإسكندرية</h5>
                      <p className="text-sm text-muted-foreground">باكوس</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* References */}
        <Card className="bg-gradient-to-br from-muted/50 to-muted/20">
          <CardHeader>
            <CardTitle className="family-title text-2xl flex items-center gap-2">
              <Scroll className="w-6 h-6 text-primary" />
              المراجع
            </CardTitle>
          </CardHeader>
          <CardContent className="family-body leading-relaxed">
            <ul className="space-y-2">
              <li>• أحمد وصفي زكريا، في كتابه "عشائر الشام"</li>
              <li>• الدكتور نبيل صبحي حنا، في كتابه "المجتمعات الصحراوية في الوطن العربي"</li>
              <li>• جرانيال لوبير، في الجزء الثاني من كتاب "وصف مصر"</li>
              <li>• محمود الشرقاوي في كتابه "مصر في القرن الثامن عشر"</li>
              <li>• السعدى سلطان البدادى في كتابه "فرسان العرب الأسرة البدادية"</li>
            </ul>
            <p className="mt-6 text-sm text-muted-foreground text-left">
              إعداد: محمود عماد محمود مرعى البدادى
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HanadiTribe;
