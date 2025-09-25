import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Zap } from 'lucide-react';

const plans = [
  {
    name: '基础版',
    price: '99',
    period: '月',
    description: '适合小型民宿或初创业主',
    features: [
      '管理最多5个房源',
      '基础预订管理',
      '客户沟通工具',
      '基础数据报表',
      '邮件技术支持',
      '移动端App'
    ],
    popular: false,
    cta: '开始免费试用'
  },
  {
    name: '专业版',
    price: '299',
    period: '月',
    description: '适合中型民宿或连锁经营',
    features: [
      '管理最多20个房源',
      '高级预订管理',
      '智能客服机器人',
      '详细数据分析',
      '多渠道分销',
      '团队协作功能',
      '7x24小时技术支持',
      '自定义品牌'
    ],
    popular: true,
    cta: '选择专业版'
  },
  {
    name: '企业版',
    price: '699',
    period: '月',
    description: '适合大型连锁或企业客户',
    features: [
      '无限房源管理',
      '企业级预订系统',
      'AI智能助手',
      '高级数据洞察',
      '全渠道集成',
      '高级团队管理',
      '专属客户经理',
      'API接口定制',
      '私有化部署'
    ],
    popular: false,
    cta: '联系销售'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success-light rounded-full border border-success/20 mb-6">
            <Star className="h-4 w-4 text-success mr-2" />
            <span className="body-sm text-success font-medium">定价方案</span>
          </div>
          
          <h2 className="heading-lg text-foreground mb-4">
            选择适合您的方案
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            透明的定价，无隐藏费用。30天免费试用，随时可以升级或取消。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative group transition-all duration-300 ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105 bg-primary-light/20' 
                  : 'border-border/50 hover:shadow-lg'
              }`}
            >
              {plan.popular && (
                <Badge 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
                >
                  <Zap className="h-3 w-3 mr-1" />
                  最受欢迎
                </Badge>
              )}
              
              <CardHeader className="text-center pb-8">
                <CardTitle className="heading-md mb-2">{plan.name}</CardTitle>
                <CardDescription className="body-sm mb-4">
                  {plan.description}
                </CardDescription>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-foreground">¥{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-success mr-3 flex-shrink-0" />
                      <span className="body-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full" 
                  variant={plan.popular ? "hero" : "outline"}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="body-sm text-muted-foreground mb-4">
            需要定制方案？我们为企业客户提供专属解决方案
          </p>
          <Button variant="ghost">
            联系我们的销售团队
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;