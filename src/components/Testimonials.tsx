import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '张明',
    role: '丽江古城民宿老板',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'StayManager 让我的民宿管理变得轻松了很多。自动化的预订管理和客户沟通功能为我节省了大量时间，入住率也提升了30%。',
    rating: 5,
    stats: '入住率提升30%'
  },
  {
    name: '李小雅',
    role: '厦门海景民宿经营者',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b1d1?w=150&h=150&fit=crop&crop=face',
    content: '使用 StayManager 半年来，不仅预订量增加了，客户满意度也大幅提升。数据分析功能帮助我制定了更合理的定价策略。',
    rating: 5,
    stats: '客户满意度95%'
  },
  {
    name: '王建国',
    role: '北京胡同民宿连锁',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
    content: '管理8家民宿从未如此简单。团队协作功能让我的员工能够高效配合，移动端管理让我随时掌握经营状况。',
    rating: 5,
    stats: '管理8家店铺'
  },
  {
    name: '陈美华',
    role: '成都宽窄巷子民宿',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    content: '智能客服功能太棒了！24小时自动回复客户咨询，多语言支持帮助我接待了很多外国游客，收入增长了40%。',
    rating: 5,
    stats: '收入增长40%'
  },
  {
    name: '刘伟',
    role: '杭州西湖民宿',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: '从传统管理方式转到 StayManager，工作效率提升了一倍。数据分析帮我优化了房间配置，平均房价提升了20%。',
    rating: 5,
    stats: '房价提升20%'
  },
  {
    name: '赵丽娜',
    role: '青岛海边度假民宿',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    content: '技术支持团队非常专业，响应速度很快。系统稳定可靠，从未出现过宕机，让我能够安心经营。',
    rating: 5,
    stats: '99.9%稳定性'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent-light rounded-full border border-accent/20 mb-6">
            <Quote className="h-4 w-4 text-accent mr-2" />
            <span className="body-sm text-accent font-medium">客户评价</span>
          </div>
          
          <h2 className="heading-lg text-foreground mb-4">
            客户的成功就是我们的成功
          </h2>
          <p className="body-lg text-muted-foreground max-w-3xl mx-auto">
            全国超过10,000家民宿选择 StayManager，平均提升入住率35%，客户满意度高达98%。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-border/50 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="body-sm text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-foreground text-sm">{testimonial.name}</div>
                      <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm font-semibold text-primary">{testimonial.stats}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-8 p-6 bg-background rounded-lg border border-border/50">
            <div className="text-center">
              <div className="heading-md text-foreground">10,000+</div>
              <div className="body-sm text-muted-foreground">活跃用户</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="heading-md text-foreground">98%</div>
              <div className="body-sm text-muted-foreground">客户满意度</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="heading-md text-foreground">35%</div>
              <div className="body-sm text-muted-foreground">平均入住率提升</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;