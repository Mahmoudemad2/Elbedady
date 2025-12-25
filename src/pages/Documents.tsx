import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent ,DialogTitle} from "@/components/ui/dialog";
import { ScrollText, Stamp, Crown, Swords, Shield, Scroll, FileText } from "lucide-react";
import doc1 from "@/assets/documents/doc-1.jpg";
import royalInvitation from "@/assets/documents/royal-invitation.jpg";
import historicalDoc from "@/assets/documents/historical-doc.jpg";
import docWithSeals from "@/assets/documents/doc-with-seals.jpg";
import alwaqaea1 from "@/assets/documents/alwaqaea-1.jpg";
import alwaqaea2 from "@/assets/documents/alwaqaea-2.jpg";
import historicalTable from "@/assets/documents/historical-table.jpg";
import bookPage from "@/assets/documents/book-page.jpg";
import handwrittenList from "@/assets/documents/handwritten-list.jpg";
import bookPageabdaha from "@/assets/gallery/abdahah.jpg";
import badady from "@/assets/gallery/bdadyajpg-artguru.png";
import nishan from "@/assets/gallery/10601210.jpg";
import bdadybook from "@/assets/gallery/shafee11.jpg";
import invit from "@/assets/gallery/invint.jpeg";
import mahgoub from "@/assets/gallery/magghoub.jpeg";
import rateb from "@/assets/gallery/rateb.jpeg";
const Documents = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const documents = [
    {
      id: 1,
      image: doc1,
      title: "وثيقة رسمية مع أختام ملكية",
      category: "أختام ووثائق",
      icon: Stamp,
    },
    {
      id: 2,
      image: royalInvitation,
      title: "دعوة ملكية رسمية",
      category: "دعوات ملكية",
      icon: Crown,
    },
    {
      id: 3,
      image: historicalDoc,
      title: "وثيقة تاريخية قديمة",
      category: "وثائق تاريخية",
      icon: ScrollText,
    },
    {
      id: 4,
      image: docWithSeals,
      title: "مستند مختوم",
      category: "أختام ووثائق",
      icon: Stamp,
    },
    {
      id: 5,
      image: alwaqaea1,
      title: "الوقائع المصرية - العدد الأول",
      category: "الجريدة الرسمية",
      icon: FileText,
    },
    {
      id: 6,
      image: alwaqaea2,
      title: "الوقائع المصرية - العدد الثاني",
      category: "الجريدة الرسمية",
      icon: FileText,
    },
    {
      id: 7,
      image: historicalTable,
      title: "جدول تاريخ العائلات العربية",
      category: "سجلات تاريخية",
      icon: Scroll,
    },
    {
      id: 8,
      image: bookPage,
      title: "صفحة من كتاب تاريخي",
      category: "كتب تاريخية",
      icon: ScrollText,
    },
      {
      id: 9,
      image: bdadybook,
      title: " غلاف كتاب الأسرة البدادية ",
      category: "كتب تاريخية",
      icon: ScrollText,
    },
    {
      id: 10,
      image: handwrittenList,
      title: "قائمة مكتوبة بخط اليد",
      category: "سجلات",
      icon: Scroll,
    },

{
      id: 11,
      image: bookPageabdaha,
      title: "اعيان القطر المصرى",
      category: "كتب تاريخية",
      icon: ScrollText,
    },

    {
      id: 12,
      image: badady,
      title: "   نسب الأسرة البدادية الى بني سليم",
      category: "سجلات",
      icon: Scroll,
    },


{
      id: 13,
      image: nishan,
      title: "أحد نايشين عبد الله بك عبد السميع الحاصل عليها من الدولة العثمانية",
      category: "وثائق تاريخية",
      icon: ScrollText,
    },
{
      id: 14,
      image: invit,
      title: "      دعوة ملكية رسمية من الملك فاروق لحضرة شيخ العرب حسين بك عبد السميع لتناول الشاى فى سراى عابدين يوم الجمعة 30 يوليو 1937 م ",
    category: "دعوات ملكية",
      icon: Crown,
    },
{
      id: 15,
      image: mahgoub,
      title: "       كناب تاريخى يوضح أشهر العزب وهما عزبة محجوب عبد السميع وعزبة موسى الطحاوى عبد السميع   ",
    category: "كتب تاريخية",
    icon: ScrollText,
    },
{
      id: 16,
      image: rateb,
      title: "       كناب تاريخى يوضح الأعضاء المنتخبون عن مديرية الشرقية من بينهم حضرة شيخ العرب راتب حسين السيد عبد السميع   ",
    category: "كتب تاريخية",
    icon: ScrollText,
    },
  ];

  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Decorative Swords */}
        <div className="absolute top-24 left-8 opacity-10 animate-pulse">
          {/* <Swords size={80} className="text-primary" /> */}
        </div>
        <div className="absolute top-32 right-8 opacity-10 animate-pulse" style={{ animationDelay: '0.5s' }}>
          {/* <Shield size={80} className="text-primary" /> */}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Ornamental Top Border */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-primary to-primary" />
            <Crown className="text-primary" size={32} />
            <div className="h-[2px] w-24 bg-gradient-to-l from-transparent via-primary to-primary" />
          </div>

          <h1 className="family-title text-4xl md:text-5xl lg:text-6xl mb-6 text-foreground drop-shadow-lg">
            الوثائق والمستندات التاريخية
          </h1>
          
          <div className="flex items-center justify-center gap-3 mb-8">
            {/* <Swords className="text-primary animate-pulse" size={24} /> */}
            <p className="family-body text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              مجموعة نادرة من الوثائق والأختام والدعوات الملكية التي تروي تاريخ عائلة عرب عبد السميع العريقة
            </p>
            {/* <Swords className="text-primary animate-pulse" size={24} /> */}
          </div>

          {/* Ornamental Bottom Border */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-primary to-primary" />
            <Stamp className="text-primary" size={24} />
            <div className="h-[2px] w-32 bg-gradient-to-l from-transparent via-primary to-primary" />
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="py-16 relative">
        {/* Decorative Elements */}
        <div className="absolute top-40 left-4 opacity-5">
          <Shield size={120} className="text-primary animate-pulse" />
        </div>
        <div className="absolute bottom-40 right-4 opacity-5">
          <Crown size={120} className="text-primary animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {documents.map((doc, index) => {
              const Icon = doc.icon;
              return (
                <Card 
                  key={doc.id} 
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-primary/10 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    animation: 'fade-in-up 0.6s ease-out forwards',
                  }}
                >
                  <div className="relative overflow-hidden">
                    {/* Decorative Corner Icons */}
                    <div className="absolute top-2 right-2 z-10 bg-primary/90 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon size={20} className="text-primary-foreground" />
                    </div>
                    
                    {/* Image */}
                    <div 
                      className="relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                      onClick={() => setSelectedImage(doc.image)}
                    >
                      <img
                        src={doc.image}
                        alt={doc.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <CardContent className="p-6 relative">
                    {/* Decorative Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                    
                    {/* Category Badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <Stamp size={16} className="text-primary" />
                      <span className="family-body text-sm text-primary font-medium">
                        {doc.category}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="family-title text-xl mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                      {doc.title}
                    </h3>

                    {/* Decorative Bottom Element */}
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-border/50">
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-primary/50 to-transparent" />
                      <Scroll size={16} className="text-primary/50" />
                      <div className="flex-1 h-[1px] bg-gradient-to-l from-primary/50 to-transparent" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Decorative Footer Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Swords className="text-primary animate-pulse" size={32} />
            <Shield className="text-primary animate-pulse" size={40} style={{ animationDelay: '0.3s' }} />
            <Swords className="text-primary animate-pulse" size={32} style={{ animationDelay: '0.6s' }} />
          </div>
          
          <p className="family-body text-lg text-muted-foreground leading-relaxed">
            هذه الوثائق الأصلية تمثل جزءاً من تراث عائلة عرب عبد السميع العريقة، 
            وتشهد على الدور البارز والمكانة الرفيعة التي تمتعت بها العائلة عبر التاريخ
          </p>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-[2px] w-20 bg-gradient-to-r from-transparent to-primary" />
            <Crown className="text-primary" size={24} />
            <div className="h-[2px] w-20 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </section>

      {/* Full Screen Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-0 bg-black/95">
          <DialogTitle className="DialogTitle"><div className="relative w-full h-full flex items-center justify-center">
            <img
              src={selectedImage || ""}
              alt="عرض كامل"
              className="max-w-full max-h-[95vh] object-contain"
            />
          </div></DialogTitle>
        </DialogContent>
      </Dialog>

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

export default Documents;
