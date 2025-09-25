import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-light via-background to-accent-light overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23f97316" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-primary-light rounded-full border border-primary/20">
                <CheckCircle className="h-4 w-4 text-primary mr-2" />
                <span className="body-sm text-primary font-medium">全球超过10,000家民宿的选择</span>
              </div>
              
              <h1 className="heading-xl text-foreground max-w-3xl">
                智能化民宿管理
                <span className="text-primary block">让经营更简单</span>
              </h1>
              
              <p className="body-lg text-muted-foreground max-w-2xl">
                集预订管理、房源展示、客户服务于一体的专业SaaS平台。
                帮助您轻松管理多个房源，提升入住率，优化运营效率。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                立即免费试用
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="glass" size="xl" className="group">
                <Play className="mr-2 h-5 w-5" />
                观看演示
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="heading-md text-foreground">99%</div>
                <div className="body-sm text-muted-foreground">客户满意度</div>
              </div>
              <div className="text-center">
                <div className="heading-md text-foreground">24/7</div>
                <div className="body-sm text-muted-foreground">技术支持</div>
              </div>
              <div className="text-center">
                <div className="heading-md text-foreground">30天</div>
                <div className="body-sm text-muted-foreground">免费试用</div>
              </div>
            </div>
          </div>

          {/* Right content - Dashboard Preview */}
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-background/90 backdrop-blur-sm rounded-2xl border border-border/50 p-6 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-success rounded-full"></div>
                </div>
                <div className="text-sm text-muted-foreground">StayManager Dashboard</div>
              </div>
              
              {/* Dashboard mockup */}
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-primary-light p-4 rounded-lg">
                    <div className="text-2xl font-bold text-primary">124</div>
                    <div className="text-sm text-muted-foreground">本月预订</div>
                  </div>
                  <div className="bg-success-light p-4 rounded-lg">
                    <div className="text-2xl font-bold text-success">98%</div>
                    <div className="text-sm text-muted-foreground">入住率</div>
                  </div>
                  <div className="bg-accent-light p-4 rounded-lg">
                    <div className="text-2xl font-bold text-accent">4.9</div>
                    <div className="text-sm text-muted-foreground">评分</div>
                  </div>
                </div>
                
                <div className="bg-muted/50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-sm font-medium">近期预订</div>
                    <div className="text-xs text-muted-foreground">实时更新</div>
                  </div>
                  <div className="space-y-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center justify-between p-2 bg-background rounded">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
                          <div>
                            <div className="text-sm font-medium">客房 {i}0{i}</div>
                            <div className="text-xs text-muted-foreground">2024-01-{10 + i} - 2024-01-{12 + i}</div>
                          </div>
                        </div>
                        <div className="text-sm text-success font-medium">已确认</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;