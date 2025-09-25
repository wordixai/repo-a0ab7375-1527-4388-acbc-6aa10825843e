import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Home, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <Home className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="heading-sm text-background">StayManager</span>
            </div>
            
            <p className="body-sm text-background/80 mb-6 max-w-md">
              专业的民宿管理SaaS平台，为全球民宿经营者提供智能化的管理解决方案，
              让民宿经营更简单、更高效、更profitable。
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="body-sm text-background/80">contact@staymanager.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="body-sm text-background/80">400-888-8888</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="body-sm text-background/80">北京市朝阳区建国门外大街1号</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="heading-sm text-background mb-6">产品功能</h3>
            <ul className="space-y-3">
              {[
                '预订管理',
                '房源管理',
                '客户服务',
                '数据分析',
                '移动应用',
                'API接口'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="body-sm text-background/80 hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="heading-sm text-background mb-6">支持与服务</h3>
            <ul className="space-y-3">
              {[
                '帮助中心',
                '使用教程',
                '技术支持',
                '服务状态',
                '合作伙伴',
                '开发者'
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="body-sm text-background/80 hover:text-background transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-background/20 pt-12 mt-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="heading-sm text-background mb-2">订阅我们的资讯</h3>
              <p className="body-sm text-background/80">
                获取最新的产品更新、行业洞察和经营技巧
              </p>
            </div>
            
            <div className="flex space-x-2">
              <Input 
                placeholder="请输入您的邮箱地址"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
              />
              <Button variant="default" className="bg-primary hover:bg-primary-dark">
                订阅
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a href="#" className="body-sm text-background/80 hover:text-background">
                隐私政策
              </a>
              <a href="#" className="body-sm text-background/80 hover:text-background">
                服务条款
              </a>
              <a href="#" className="body-sm text-background/80 hover:text-background">
                Cookie政策
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="body-sm text-background/80">关注我们：</span>
              <div className="flex space-x-3">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Facebook, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-2 bg-background/10 rounded-lg hover:bg-background/20 transition-colors"
                  >
                    <social.icon className="h-4 w-4 text-background" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="body-sm text-background/60">
              © 2024 StayManager. 保留所有权利。
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;