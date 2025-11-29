import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Heart, Crown, User } from 'lucide-react';

interface FamilyMember {
  id: string;
  name: string;
  title?: string;
  birthYear?: number;
  deathYear?: number;
  spouse?: string;
  children?: FamilyMember[];
  image?: string;
  branch?: 'bani_saleem' | 'saadi' | 'hanadi';
  role?: string;
  location?: string;
}

const familyData: FamilyMember = {
  id: "sheikh",
  name: "شيخ عرب البدادية",
  title: "الجد الأعظم",
  role: "شيخ القبيلة",
  location: "مصر",
  children: [
    {
      id: "bani_saleem",
      name: "بني سليم",
      title: "القبيلة الأولى",
      branch: 'bani_saleem',
      children: [
        {
          id: "abd_alsamee",
          name: "عبد السميع البدادي",
          title: "الملتزم",
          role: "جابي أموال الدولة",
          location: "البحيرة - بني سويف",
          spouse: "حليمه من عائلة بياضه (الفيوم)",
          children: [
            {
              id: "ibrahim",
              name: "إبراهيم بن عبد السميع",
              title: "شيخ العرب",
              role: "شهيد معركة التل الكبير - الحرب العرابية",
              location: "شمال الدلتا",
              children: [
                {
                  id: "alsayed",
                  name: "السيد بن إبراهيم (شيخ العرب)",
                  title: "كرم وتقى - حاتم الطائي زمانه",
                  role: "زعامة الأسرة وشياخة القبيلة",
                  location: "توفي يناير 1913",
                  spouse: "متزوج من عدة زوجات"
                },
                {
                  id: "mahgoub", 
                  name: "محجوب بن إبراهيم",
                  title: "من الأربعة الكبار",
                  role: "العصر الذهبي للأسرة"
                },
                {
                  id: "abdullah",
                  name: "عبدالله بن إبراهيم", 
                  title: "من الأربعة الكبار",
                  role: "العصر الذهبي للأسرة"
                },
                {
                  id: "gebeil",
                  name: "جبيل بن إبراهيم",
                  title: "من الأربعة الكبار", 
                  role: "العصر الذهبي للأسرة"
                }
              ]
            },
            {
              id: "tahawi",
              name: "الطحاوي بن عبد السميع",
              children: [
                {
                  id: "tahawi_sons",
                  name: "أبناء الطحاوي",
                  title: "الجيل الثالث"
                }
              ]
            },
            {
              id: "ali_alwani",
              name: "علي وعلواني",
              title: "من توما الحبشية",
              role: "جبارين قوة وبأسا",
              children: [
                {
                  id: "ali_alwani_sons",
                  name: "أبناء علي وعلواني",
                  title: "الجيل الثالث"
                }
              ]
            },
            {
              id: "mohammed_religious",
              name: "محمد",
              title: "من بحر النيل الحبشية",
              role: "رجل متدين طيب",
              children: [
                {
                  id: "mohammed_sons",
                  name: "أبناء محمد",
                  title: "الجيل الثالث"
                }
              ]
            }
          ]
        },
        {
          id: "taha_brother",
          name: "طاها",
          title: "شقيق عبد السميع",
          role: "حادي عسكر - حرب الحبشة",
          children: [
            {
              id: "taha_sons",
              name: "أبناء طاها",
              title: "الجيل الثالث"
            }
          ]
        }
      ]
    },
    {
      id: "saadi",
      name: "السعادي",
      title: "القبيلة الثانية", 
      branch: 'saadi',
      children: [
        {
          id: "saeed",
          name: "سعيد",
          title: "والد عبد السميع",
          children: [
            {
              id: "saeed_other_sons",
              name: "أبناء سعيد الآخرون",
              title: "إخوة عبد السميع"
            }
          ]
        },
        {
          id: "abu_haif",
          name: "أبو هيف", 
          title: "شقيق سعيد - رحمه الله",
          role: "قُتل في الصراعات"
        }
      ]
    },
    {
      id: "hanadi",
      name: "الهنادي",
      title: "القبيلة الثالثة",
      branch: 'hanadi',
      location: "البحيرة",
      role: "تتنازع مناطق النفوذ مع أولاد علي",
      children: [
        {
          id: "hanadi_sheikhs",
          name: "شيوخ الهنادي",
          title: "زعماء القبيلة",
          children: [
            {
              id: "hanadi_branches",
              name: "فروع الهنادي",
              title: "العشائر المختلفة"
            }
          ]
        }
      ]
    }
  ]
};

const FamilyMemberCard = ({ member, level = 0 }: { member: FamilyMember; level?: number }) => {
  const [isExpanded, setIsExpanded] = useState(level < 2);

  const getBranchColor = (branch?: string) => {
    switch (branch) {
      case 'bani_saleem': return 'primary';
      case 'saadi': return 'secondary'; 
      case 'hanadi': return 'accent';
      default: return 'primary';
    }
  };

  const getCardStyle = (level: number, branch?: string) => {
    const branchColor = getBranchColor(branch);
    if (level === 0) return "border-primary bg-gradient-to-br from-primary/20 to-secondary/20 shadow-lg";
    if (level === 1) {
      if (branch === 'bani_saleem') return "border-primary bg-gradient-to-br from-primary/15 to-primary/5";
      if (branch === 'saadi') return "border-secondary bg-gradient-to-br from-secondary/15 to-secondary/5";
      if (branch === 'hanadi') return "border-accent bg-gradient-to-br from-accent/15 to-accent/5";
    }
    if (level === 2) return `border-${branchColor} bg-gradient-to-br from-${branchColor}/10 to-card`;
    return "border-muted bg-card";
  };

  const getIconForLevel = (level: number, branch?: string) => {
    const branchColor = getBranchColor(branch);
    if (level === 0) return <Crown className="h-6 w-6 text-primary" />;
    if (level === 1) return <Users className="h-5 w-5 text-primary" />;
    return <User className={`h-4 w-4 text-${branchColor}`} />;
  };

  return (
    <div className="flex flex-col items-center">
      <Card className={`w-80 mb-6 transition-all duration-300 hover:shadow-xl hover:scale-105 ${getCardStyle(level, member.branch)}`}>
        <CardContent className="p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            {getIconForLevel(level, member.branch)}
            <h3 className="family-title text-xl font-bold text-foreground leading-tight">
              {member.name}
            </h3>
          </div>
          
          {member.title && (
            <Badge variant="secondary" className="mb-3 bg-primary/10 text-primary border-primary/20">
              {member.title}
            </Badge>
          )}

          {member.role && (
            <div className="mb-2 px-3 py-1 bg-secondary/10 rounded-full">
              <p className="family-body text-sm font-medium text-secondary">
                {member.role}
              </p>
            </div>
          )}

          {member.location && (
            <div className="mb-2 px-3 py-1 bg-accent/10 rounded-full">
              <p className="family-body text-sm text-accent">
                📍 {member.location}
              </p>
            </div>
          )}
          
          <div className="family-body text-sm text-muted-foreground space-y-2">
            {member.birthYear && (
              <p className="bg-muted/30 px-2 py-1 rounded">
                {member.deathYear 
                  ? `${member.birthYear} - ${member.deathYear}` 
                  : `مولود في ${member.birthYear}`
                }
              </p>
            )}
            
            {member.spouse && (
              <div className="flex items-center justify-center gap-2 text-primary bg-primary/10 px-3 py-1 rounded-full">
                <Heart className="h-3 w-3" />
                <span className="font-medium">{member.spouse}</span>
              </div>
            )}
          </div>
          
          {member.children && member.children.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 hover:bg-primary/10"
            >
              {isExpanded ? "إخفاء الفروع" : `عرض الفروع (${member.children.length})`}
            </Button>
          )}
        </CardContent>
      </Card>
      
      {member.children && member.children.length > 0 && isExpanded && (
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 left-1/2 w-px h-12 bg-primary/40 transform -translate-x-1/2 -translate-y-6"></div>
          
          <div className="flex flex-wrap justify-center gap-12 relative">
            {member.children.length > 1 && (
              <div className="absolute top-12 left-0 right-0 h-px bg-primary/40"></div>
            )}
            
            {member.children.map((child, index) => (
              <div key={child.id} className="relative">
                {/* Vertical connection to horizontal line */}
                <div className="absolute top-0 left-1/2 w-px h-12 bg-primary/40 transform -translate-x-1/2"></div>
                
                <div className="pt-12">
                  <FamilyMemberCard member={child} level={level + 1} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const FamilyTree = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Users className="h-10 w-10 text-primary" />
            <h2 className="family-title text-5xl font-bold text-foreground">
              شجرة عرب البدادية
            </h2>
          </div>
          <p className="family-body text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            تراث وأصالة قبائل البدادية عبر التاريخ - من شيخ عرب البدادية إلى الأجيال المعاصرة
            <br />
            <span className="text-primary font-semibold">بني سليم • السعادي • الهنادي</span>
          </p>
          <div className="w-32 h-1 bg-gradient-primary mx-auto mt-8 rounded-full"></div>
          
          {/* Reference */}
          <div className="mt-8 bg-primary/5 border border-primary/20 rounded-lg p-4 max-w-md mx-auto">
            <p className="family-body text-sm text-primary font-medium">
              📚 مرجع: فرسان العرب - الأسرة البدادية
            </p>
          </div>
        </div>

        {/* Family Tree */}
        <div className="overflow-x-auto">
          <div className="min-w-max px-8">
            <FamilyMemberCard member={familyData} level={0} />
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="bg-gradient-to-br from-primary/15 to-primary/5 border-primary/20 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="family-title text-3xl font-bold text-foreground mb-2">
                3
              </h3>
              <p className="family-body text-muted-foreground font-medium">
                القبائل الرئيسية
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/15 to-secondary/5 border-secondary/20 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Crown className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="family-title text-3xl font-bold text-foreground mb-2">
                7
              </h3>
              <p className="family-body text-muted-foreground font-medium">
                الأراضي المحكومة
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/15 to-accent/5 border-accent/20 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <Heart className="h-10 w-10 text-accent mx-auto mb-4" />
              <h3 className="family-title text-3xl font-bold text-foreground mb-2">
                100+
              </h3>
              <p className="family-body text-muted-foreground font-medium">
                سنة من الحكم
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 hover:shadow-lg transition-all">
            <CardContent className="p-6 text-center">
              <User className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="family-title text-3xl font-bold text-foreground mb-2">
                4+
              </h3>
              <p className="family-body text-muted-foreground font-medium">
                أجيال متتالية
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FamilyTree;