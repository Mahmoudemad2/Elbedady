import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import Navigation from "@/components/Navigation";
const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({
        title: "خطأ",
        description: "يرجى ملء الحقول المطلوبة",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "تم الإرسال بنجاح",
      description: "شكراً لتواصلك معنا، سنرد عليك قريباً"
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "الهاتف",
      value: "+20 XXX XXX XXXX",
      description: "متاح على مدار الساعة"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "info@albadady.com",
      description: "نرد خلال 24 ساعة"
    },
    {
      icon: MapPin,
      title: "الموقع",
      value: "جمهورية مصر العربية",
      description: "بني سويف - الشرقية - القليوبية"
    }
  ];

  return (
    <>
      <Navigation />
      
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30" dir="rtl">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            نحن هنا لخدمتكم
          </Badge>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <MessageSquare className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            تواصل معنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نرحب بتواصلكم واستفساراتكم حول تاريخ العائلة والنسب
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-primary" />
                أرسل رسالة
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    الاسم الكامل *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    className="h-12"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                      البريد الإلكتروني
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground flex items-center gap-2">
                      <Phone className="w-4 h-4 text-muted-foreground" />
                      رقم الهاتف
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+20 XXX XXX XXXX"
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-muted-foreground" />
                    الرسالة *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    rows={5}
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>جاري الإرسال...</>
                  ) : (
                    <>
                      <Send className="w-5 h-5 ml-2" />
                      إرسال الرسالة
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  معلومات التواصل
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{info.title}</h4>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h4 className="font-bold text-foreground mb-3">
                  هل لديك معلومات عن النسب؟
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  نرحب بأي معلومات أو وثائق تتعلق بتاريخ العائلة البدادية. 
                  تواصل معنا لإضافة معلومات جديدة أو تصحيح أي بيانات.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
    
    
    </>
  );
};

export default ContactSection;
