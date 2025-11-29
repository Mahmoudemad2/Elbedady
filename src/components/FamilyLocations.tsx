import { MapPin, Map } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FamilyLocations = () => {
  const locations = [
    {
      governorate: "محافظة الشرقية",
      centers: [
        {
          name: "مركز كفر صقر",
          villages: [
            "قرية شيط الهوى",
            "عزبة العرب الكبيرة (عبدالله بك عبدالسميع)",
            "قرية شيط الجمايلة",
            "عزبة مصرى محجوب",
            "عزبة الدكتور خالد",
            "قرية القضاه (وبها أربع عزب يسكن بها الطحاوية البدادية)",
            "عزبة يونس",
            "عزبة موسى",
            "عزبة غالب",
            "عزبة السعداوى"
          ]
        },
        {
          name: "مركز اولاد صقر",
          villages: [
            "قرية تلراك / عزبة عرب عبدالسميع",
            "عزبة علوانى عبدالسميع",
            "عزبة عوض عبدالسميع",
            "عزبة عبيد"
          ]
        },
        {
          name: "مركز بلبيس",
          villages: [
            "محطة الجوسق - عزبة سعيد سعد (ويوجد بها فرع مناع)"
          ]
        },
        {
          name: "مركز فاقوس",
          villages: [
            "  الخواطرة - عزبة ابو زيد",
            "سعدة ابو خليفة",
            "عزبة ام سعدون"
          ]
        },
        {
          name: "مركز أبو كبير",
          villages: ["اولاد موسى - عزبة قايد بك"]
        },
        {
          name: "مركز صان الحجر",
          villages: ["بنك السكر", "قرية الفولى"]
        },
        {
          name: "مركز الحسينية",
          villages: ["بحر البقر"]
        }
      ]
    },
    {
      governorate: "محافظة القليوبية",
      centers: [
        {
          name: "مركز طوخ",
          villages: [
            "عزبة فرجاني (تتميز بكثرة الأطباء والمستشارين)",
            "عزبة رضوان (تتميز بكثرة الأطباء والصيادلة)",
            "عزبة عبدالحميد",
            "عزبة سلومة",
            "عزبة رسلان"
          ]
        }
      ]
    },
    {
      governorate: "محافظة الفيوم",
      centers: [
        {
          name: "مركز طامية",
          villages: [
            "قرية منشية الجمال",
            "عزبة غيم",
            "قرية المظاطلى",
            "عزبة قرين",
            "أم القتيل",
            "عزبة محمود عبدالجليل",
            "العزازية"
          ]
        },
        {
          name: "مركز ابشواى",
          villages: [
            "العجميين",
            "عزبة الهنادوة بالعجميين"
          ]
        }
      ]
    },
    {
      governorate: "محافظة البحيرة",
      centers: [
        {
          name: "مركز الدلنجات (طيبة الاسم)",
          note: "أطلق عليه العرب (طيبة الاسم) نظراً لأنهم كانوا يتشاءمون من اسم الدلنجات",
          villages: [
            "عزبة مقاوى",
            "عزبة مقاوى البحرية",
            "عزبة الحاج عبدالرحمن مقاوى البدادى والحاج محمد عبدالجيد حميدة البدادى",
            "عزبة شراقى",
            "نجع الهنادى",
            "كوبرى عبد المجيد صالح",
            "عزبة الحاج عبد الصادق مقاوى البدادى وأولاده، شيخ العرب محمد مقاوى البدادى"
          ]
        }
      ]
    },
    {
      governorate: "محافظة الاسماعيلية",
      centers: [
        {
          name: "مركز فايد",
          villages: ["قرية ابو سلطان"]
        }
      ]
    },
    {
      governorate: "محافظة كفر الشيخ",
      centers: [
        {
          name: "مركز مطوبس",
          villages: ["قرية الروسى", "عزبة الاسهم"]
        }
      ]
    },
    {
      governorate: "محافظة الاسكندرية",
      centers: [
        {
          name: "المناطق",
          villages: ["باكوس", "الزمخشرى"]
        }
      ]
    }
  ];

  return (
    <section id="locations" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Map className="w-10 h-10 text-primary" />
            <h2 className="family-title text-4xl md:text-5xl text-foreground">
              أماكن عرب البدادية في محافظات مصر
            </h2>
            <Map className="w-10 h-10 text-primary" />
          </div>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="family-body text-lg text-muted-foreground max-w-3xl mx-auto">
            انتشرت عائلة البدادية في ربوع مصر، وتواجدت في العديد من المحافظات والمراكز
            والقرى، حاملة معها تراثها العريق وقيمها الأصيلة
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {locations.map((location, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="family-title text-xl text-foreground">
                    {location.governorate}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 mt-4">
                  {location.centers.map((center, centerIndex) => (
                    <Card key={centerIndex} className="border-border/50">
                      <CardContent className="p-6">
                        <h4 className="family-title text-lg text-primary mb-3">
                          {center.name}
                        </h4>
                        {center.note && (
                          <p className="family-body text-sm text-muted-foreground italic mb-4 pr-4 border-r-2 border-primary">
                            {center.note}
                          </p>
                        )}
                        <ul className="space-y-2">
                          {center.villages.map((village, villageIndex) => (
                            <li 
                              key={villageIndex}
                              className="family-body text-foreground flex items-start gap-2 pr-4"
                            >
                              <span className="text-primary mt-1">•</span>
                              <span>{village}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 p-6 bg-card border border-border rounded-lg">
          <p className="family-body text-center text-muted-foreground">
            <span className="font-semibold text-foreground">تنويه هام:</span> جميع الأماكن المذكورة سابقاً ليست أماكن البدادية جميعاً،
            ولكن هناك أماكن خانتنا ذاكرتنا بنسيانها وعدم ذكرها، ولذلك نأسف لكل بدادي لم نذكر مكان عائلته
          </p>
        </div>
      </div>
    </section>
  );
};

export default FamilyLocations;