import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-warm" dir="rtl">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="family-title mb-4 text-6xl font-bold text-primary">404</h1>
        <h2 className="family-title mb-4 text-2xl text-foreground">عذراً، الصفحة غير موجودة</h2>
        <p className="family-body mb-6 text-lg text-muted-foreground">
          لم نتمكن من العثور على الصفحة التي تبحث عنها
        </p>
        <a 
          href="/" 
          className="inline-flex items-center justify-center px-6 py-3 text-primary-foreground bg-primary hover:opacity-90 rounded-lg font-cairo font-semibold transition-all duration-300 shadow-family"
        >
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
};

export default NotFound;
