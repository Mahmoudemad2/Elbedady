import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SuccessMessage = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div dir="rtl" className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-lg w-full">
        <div className="card-family p-8 md:p-12 text-center space-y-6 animate-fade-in-up">
          {/* Success Icon */}
          <div className="flex justify-center">
            <div className="w-24 h-24 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center animate-gentle-float">
              <CheckCircle className="w-14 h-14 text-green-600 dark:text-green-400" />
            </div>
          </div>

          {/* Success Message */}
          <div className="space-y-4">
            <h1 className="family-title text-2xl md:text-3xl text-primary">
              تم الإرسال بنجاح
            </h1>
            <p className="family-body text-lg md:text-xl text-foreground leading-relaxed">
              تم إرسال رسالتكم بنجاح إلى منصة الأسرة البدادية وسيتم الرد عليكم في أسرع وقت
            </p>
          </div>

          {/* Countdown */}
          <div className="space-y-2">
            <p className="family-body text-muted-foreground text-sm">
              سيتم تحويلكم للصفحة الرئيسية خلال
            </p>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-2 border-primary">
              <span className="family-title text-2xl text-primary font-bold">
                {countdown}
              </span>
            </div>
            <p className="family-body text-muted-foreground text-sm">ثوانٍ</p>
          </div>

          {/* Manual Navigation Button */}
          <Button
            onClick={() => navigate('/')}
            className="btn-family-primary mt-4"
          >
            <Home className="w-5 h-5 ml-2" />
            العودة للصفحة الرئيسية
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SuccessMessage;
