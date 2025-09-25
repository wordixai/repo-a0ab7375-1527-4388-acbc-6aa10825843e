import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Zap,
  Users,
  CreditCard,
  Globe
} from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: '智能预订管理',
    description: '统一管理多平台预订，自动同步房态，防止超售，提升预订转化率。',
    color: 'primary'
  },
  {
    icon: MessageSquare,
    title: '自动客户沟通',
    description: '智能客服系统，自动回复常见问题，多语言支持，提升客户满意度。',
    color: 'accent'
  },
  {
    icon: BarChart3,
    title: '数据分析洞察',
    description: '实时收益分析，入住率统计，客户行为分析，助您制定最优定价策略。',
    color: 'success'
  },
  {
    icon: Shield,
    title: '安全可靠保障',
    description: '银行级数据加密，多重安全防护，确保您的数据和客户信息安全。',
    color: 'primary'
  },
  {
    icon: Smartphone,
    title: '移动端管理',
    description: '随时随地管理房源，处理预订，与客户沟通，业务管理不受时间地点限制。',
    color: 'accent'
  },
  {
    icon: Zap,
    title: '一键快速部署',
    description: '5分钟快速上手，无需复杂设置，即刻开始使用，立即提升运营效率。',
    color: 'success'
  },
  {
    icon: Users,
    title: '团队协作管理',
    description: '多用户权限管理，团队协作功能，让您的员工高效配合，提升服务质量。',
    color: 'primary'
  },
  {
    icon: CreditCard,
    title: '在线支付集成',
    description: '支持多种支付方式，自动收款对账，简化财务管理，提升资金流转效率。',
    color: 'accent'
  },
  {
    icon: Globe,
    title: '多语言多货币',
    description: '支持全球化运营，多语言界面，多货币结算，轻松拓展国际市场。',
    color: 'success'
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary mr-2" />
            <span className="body-sm text-primary font-medium">功能特性</span>
          </div>
          
          <h2 className="heading-lg text-foreground mb-4">
            全方位民宿管理解决方案
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            从预订管理到客户服务，从数据分析到团队协作，StayManager 提供您所需的所有功能，
            让民宿经营变得简单高效。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                  feature.color === 'primary' 
                    ? 'bg-primary-light text-primary' 
                    : feature.color === 'accent' 
                    ? 'bg-accent-light text-accent'
                    : 'bg-success-light text-success'
                }`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="heading-sm">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="body-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;