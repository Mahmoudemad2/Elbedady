import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import FamilyHistory from "@/components/FamilyHistory";
import FamilyStages from "@/components/FamilyStages";
import BadadiaOrigins from "@/components/BadadiaOrigins";
import BeniSuefHistory from "@/components/BeniSuefHistory";
import GreatAncestor from "@/components/GreatAncestor";
import IbrahimHero from "@/components/IbrahimHero";
import AlSayedHero from "@/components/AlSayedHero";
import MahgoubHero from "@/components/MahgoubHero";
import AbdallahHero from "@/components/AbdallahHero";
import JabilHero from "@/components/JabilHero";
import HusseinHero from "@/components/HusseinHero";
import SahawyHero from "@/components/SahawyHero";
import FamilyGallery from "@/components/FamilyGallery";
import FamilyTree from "@/components/FamilyTree";
import FamilyEvents from "@/components/FamilyEvents";
import FamilyElders from "@/components/FamilyElders";
import FamilyWisdom from "@/components/FamilyWisdom";
import FamilyLocations from "@/components/FamilyLocations";
import FamilyHeroes from "@/components/FamilyHeroes";
import HanadiTribe from "@/components/HanadiTribe";
import { Swords, Sword, Shield, Crown, Star } from "lucide-react";
import { Link} from "react-router-dom";
import logo from "../assets/gallery/logo1-bedady.png";
const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Navigation />
      <HeroSection />
      {/* <FamilyHistory />          قد يتم استخدامها في المستقبل */}
      <FamilyStages />
      <BadadiaOrigins />
      <HanadiTribe />
      <BeniSuefHistory />
      <GreatAncestor />
      <IbrahimHero />
      <AlSayedHero />
      <MahgoubHero />
      <AbdallahHero />
      <JabilHero />
      <HusseinHero />
      <SahawyHero />
      <FamilyHeroes />
      <FamilyLocations />
      {/* <FamilyElders قد يتم استخدامها في المستقبل  /> */}
      {/* <FamilyTree /> قد يتم استخدامها في المستقبل    */}
      <FamilyGallery />
      <FamilyWisdom />

      {/* <FamilyEvents /> قد يتم استخدامها في المستقبل  */}

      {/* Footer */}
      <footer className="relative overflow-hidden py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    

          {/* Closing Statement */}
          <div
            className="text-center mb-12 animate-fade-in-up bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-6 rounded-lg"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="">
              
              <p
                className="family-title text-2xl md:text-3xl leading-relaxed mb-6 drop-shadow-lg family-title text-foreground"
                style={{ textShadow: "0 0 15px rgba(0,0,0,0.3)" }}
              >
                تاريخٌ عريق، وماضٍ مجيد، ومستقبلٌ مشرق
              </p>

              <p className="family-body text-xl md:text-2xl  leading-relaxed mb-6 drop-shadow-md   family-title  text-foreground ">
                نحفظ التراث ، ونصون المجد ، ونرفع راية الشرف والكرامة
              </p>

              <div className="flex items-center justify-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <div className="w-12 h-px bg-primary"></div>
                <Star className="w-4 h-4 text-primary" />
                <div className="w-12 h-px bg-primary"></div>
                <Shield className="w-5 h-5 text-primary" />
              </div>

              <p
                className="family-title text-2xl text-foreground mb-2"
                style={{ textShadow: "0 0 10px rgba(0,0,0,0.3)" }}
              >
                للأبد نبقى... البدادية
              </p>
            </div>
          </div>


  <div className="mt-12 text-center">
          
        </div>








          {/* Developer Credit with elegant design */}
          <div
            className="text-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "1s" }}
          >
            <div className="inline-block bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-8 py-6 rounded-lg">
              <p className="family-body  text-lg mb-3 tracking-wide  family-title text-foreground ">
                برمجة وإعداد
              </p>
              <div className="flex items-center justify-center gap-3 mb-2">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary-foreground/60"></div>
                <Star className="w-5 h-5 text-primary" />
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary-foreground/60"></div>
              </div>
              <p
                className="family-title text-2xl md:text-3xl text-foreground drop-shadow-lg"
                style={{ textShadow: "0 0 15px rgba(0,0,0,0.3)" }}
              >
                محمود عماد محمود مرعي البدادي
              </p>

            </div>
          </div>

          {/* Copyright Notice */}
          <div
            className="text-center mb-10 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary-foreground/40"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary-foreground/40"></div>
            </div>

            <p className="family-body text-foreground text-lg md:text-xl tracking-wide">
              جميع الحقوق محفوظة © {new Date().getFullYear()}
            </p>
            <p
              className="family-title text-xl md:text-2xl text-foreground mt-2 drop-shadow-md"
              style={{ textShadow: "0 0 10px rgba(0,0,0,0.2)" }}
            >
              موقع الأسرة البدادية
            </p>
          </div>

          {/* Bottom decorative elements with swords */}
          <div
            className="flex flex-col items-center gap-6 animate-fade-in-up"
            style={{ animationDelay: "1.4s" }}
          >
            {/* Crossed swords */}
            <div className="relative w-16 h-16">
              {/* <Sword className="absolute inset-0 w-16 h-16 text-primary rotate-90" />
              <Sword className="absolute inset-0 w-16 h-16 text-primary rotate-60" /> */}
              <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="البدادي"
              className="h-10 w-auto sm:h-12 md:h-14 transition-all duration-200 hover:scale-105"
            />
          </Link>
            </div>

            {/* Ornamental dots */}
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-4 h-4 bg-primary rounded-full border-2 border-primary-foreground/40"></div>
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
