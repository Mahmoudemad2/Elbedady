import { useEffect, useState } from 'react';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import { Button } from '@/components/ui/button';
import { X, Download, Smartphone } from 'lucide-react';

const INSTALL_PROMPT_KEY = 'install_prompt_dismissed';
const INSTALL_PROMPT_DELAY = 30000; // 30 seconds delay

const InstallPrompt = () => {
  const { isInstallable, isInstalled, promptInstall } = usePWAInstall();
  const [showPrompt, setShowPrompt] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const dismissed = localStorage.getItem(INSTALL_PROMPT_KEY);
    if (dismissed) return;

    // Check if already installed
    if (isInstalled) return;

    // Show prompt after delay
    const timer = setTimeout(() => {
      if (isInstallable || !isInstalled) {
        setShowPrompt(true);
        // Animate in
        setTimeout(() => setIsVisible(true), 50);
      }
    }, INSTALL_PROMPT_DELAY);

    return () => clearTimeout(timer);
  }, [isInstallable, isInstalled]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowPrompt(false);
      localStorage.setItem(INSTALL_PROMPT_KEY, 'true');
    }, 300);
  };

  const handleInstall = async () => {
    await promptInstall();
    handleDismiss();
  };

  if (!showPrompt) return null;

  return (
    <div 
      className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="max-w-md mx-auto bg-card border-2 border-primary/20 rounded-2xl shadow-2xl overflow-hidden" dir='rtl'>
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4 text-primary-foreground">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-primary-foreground/20 p-2 rounded-full">
                <Smartphone size={20} />
              </div>
              <h3 className="family-title text-lg">ثبّت التطبيق</h3>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
              onClick={handleDismiss}
            >
              <X size={18} />
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          <p className="family-body text-muted-foreground text-sm leading-relaxed">
            أضف تطبيق "البدادى" إلى شاشتك الرئيسية للوصول السريع والتصفح بدون إنترنت!
          </p>

          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>وصول سريع</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>يعمل بدون إنترنت</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>مساحة صغيرة</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              onClick={handleInstall}
              className="flex-1 gap-2 bg-primary hover:bg-primary/90"
            >
              <Download size={16} />
              تثبيت الآن
            </Button>
            <Button
              variant="outline"
              onClick={handleDismiss}
              className="flex-1"
            >
              لاحقاً
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;