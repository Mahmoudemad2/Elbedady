import { Button } from '@/components/ui/button';
import { Link } from "react-router-dom";
import { Heart, Users, TreePine } from 'lucide-react';
import familyMainPhoto from '@/assets/family-main-photo.jpg';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img src={familyMainPhoto} alt="الصورة الرئيسية لعائلة عرب عبد السميع" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-background/80 to-background/50 dark:from-background/90 dark:via-background/70 dark:to-background/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto" style={{top:"4rem"}}>
        <div className="animate-fade-in-up">
          <h1 className="family-title text-5xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-tight drop-shadow-lg">
            أهلاً وسهلاً 
            <span style={{ textShadow: "0 0 15px rgba(0,0,0,0.3)" }} className="block text-primary text-4xl md:text-5xl lg:text-6xl mt-5">
في منصة الأسرة البدادية   </span>
          </h1>
          
          <p className="family-body text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            أكبر بطون قبيلة الهنادي ، ولنا في قمة العز رايات ، أصولنا جبال راسيات , نحن تراث وتاريخ عريق يمتد عبر الأجيال ، وروابط محبة تجمعنا تحت لواء واحد حيث عرين البدادية           </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {/* <Button size="lg" className="btn-family-primary text-lg px-8 py-3 rounded-full font-cairo font-semibold shadow-family">
              تعرف على تاريخنا
              <Heart size={20} className="ml-2" />
            </Button> */}

  <Link to="/history" className="flex-shrink-0">
            <Button size="lg" className="btn-family-primary text-lg px-8 py-3 rounded-full font-cairo font-semibold shadow-family">
              تعرف على تاريخنا
              <Heart size={20} className="ml-2" />
            </Button>
          </Link>

  <Link to="/family-tree" className="flex-shrink-0">
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 rounded-full font-cairo font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-primary/10">
              شجرة العائلة
              <Users size={20} className="ml-2" />
            </Button>
          </Link>
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {/* <div className="animate-gentle-float text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <TreePine size={28} className="text-primary" />
              </div>
              <h3 className="family-title text-2xl text-foreground mb-2 drop-shadow-lg">٥ أجيال</h3>
              <p className="family-body text-muted-foreground drop-shadow-md">من التراث العريق</p>
            </div> */}
            
            {/* <div className="animate-gentle-float text-center" style={{
            animationDelay: '0.5s'
          }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Users size={28} className="text-primary" />
              </div>
              <h3 className="family-title text-2xl text-foreground mb-2 drop-shadow-lg">٨٠+ فرد</h3>
              <p className="family-body text-muted-foreground drop-shadow-md">في عائلتنا الكبيرة</p>
            </div> */}
            
            {/* <div className="animate-gentle-float text-center" style={{
            animationDelay: '1s'
          }}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-4">
                <Heart size={28} className="text-primary" />
              </div>
              <h3 className="family-title text-2xl text-foreground mb-2 drop-shadow-lg">١٠٠ عام</h3>
              <p className="family-body text-muted-foreground drop-shadow-md">من المحبة والترابط</p>
            </div> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div> */}
    </section>;
};
export default HeroSection;