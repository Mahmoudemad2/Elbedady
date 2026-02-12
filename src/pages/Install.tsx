import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, Smartphone, Wifi, WifiOff, CheckCircle, Share, MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if iOS
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(ios);

    // Check if already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Listen for install prompt
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    // Listen for successful install
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setDeferredPrompt(null);
    };

    // Listen for online/offline
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === "accepted") {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-20" dir="rtl">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-amiri">
              تثبيت التطبيق
            </h1>
            <p className="text-muted-foreground text-lg">
              قم بتثبيت موقع البدادى كتطبيق على جهازك للوصول السريع والعمل بدون إنترنت
            </p>
          </div>

          {/* Status Card */}
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {isOnline ? (
                    <Wifi className="h-5 w-5 text-green-500" />
                  ) : (
                    <WifiOff className="h-5 w-5 text-destructive" />
                  )}
                  <span className="text-foreground">
                    {isOnline ? "متصل بالإنترنت" : "غير متصل بالإنترنت"}
                  </span>
                </div>
                {isInstalled && (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="h-5 w-5" />
                    <span>التطبيق مثبت</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Install Card */}
          {isInstalled ? (
            <Card className="border-green-200 bg-green-50/50 dark:bg-green-950/20">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-700 dark:text-green-400">التطبيق مثبت بنجاح!</CardTitle>
                <CardDescription>
                  يمكنك الآن الوصول للموقع من الشاشة الرئيسية والتصفح بدون إنترنت
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Link to="/">
                  <Button variant="default" size="lg">
                    العودة للصفحة الرئيسية
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : isIOS ? (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>تثبيت على iPhone / iPad</CardTitle>
                <CardDescription>
                  اتبع الخطوات التالية لتثبيت التطبيق
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium">اضغط على زر المشاركة</p>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <Share className="h-5 w-5" />
                        <span>في أسفل المتصفح (Safari)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium">اختر "إضافة إلى الشاشة الرئيسية"</p>
                      <p className="text-muted-foreground mt-1">
                        Add to Home Screen
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium">اضغط "إضافة"</p>
                      <p className="text-muted-foreground mt-1">
                        سيظهر التطبيق على شاشتك الرئيسية
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : deferredPrompt ? (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Download className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>تثبيت التطبيق</CardTitle>
                <CardDescription>
                  اضغط على الزر أدناه لتثبيت التطبيق على جهازك
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button onClick={handleInstall} size="lg" className="gap-2">
                  <Download className="h-5 w-5" />
                  تثبيت الآن
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Smartphone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>تثبيت على Android</CardTitle>
                <CardDescription>
                  اتبع الخطوات التالية لتثبيت التطبيق
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                      1
                    </div>
                    <div>
                      <p className="font-medium">اضغط على قائمة المتصفح</p>
                      <div className="flex items-center gap-2 mt-1 text-muted-foreground">
                        <MoreVertical className="h-5 w-5" />
                        <span>النقاط الثلاث في أعلى المتصفح</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                      2
                    </div>
                    <div>
                      <p className="font-medium">اختر "تثبيت التطبيق" أو "إضافة إلى الشاشة الرئيسية"</p>
                      <p className="text-muted-foreground mt-1">
                        Install app / Add to Home Screen
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold shrink-0">
                      3
                    </div>
                    <div>
                      <p className="font-medium">اضغط "تثبيت"</p>
                      <p className="text-muted-foreground mt-1">
                        سيظهر التطبيق على شاشتك الرئيسية
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Features */}
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Card className="text-center p-4">
              <Smartphone className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">وصول سريع</h3>
              <p className="text-sm text-muted-foreground">افتح التطبيق مباشرة من شاشتك الرئيسية</p>
            </Card>
            
            <Card className="text-center p-4">
              <WifiOff className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">بدون إنترنت</h3>
              <p className="text-sm text-muted-foreground">تصفح المحتوى حتى بدون اتصال</p>
            </Card>
            
            <Card className="text-center p-4">
              <Download className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="font-semibold mb-1">تحديث تلقائي</h3>
              <p className="text-sm text-muted-foreground">يتم تحديث المحتوى تلقائياً</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Install;
