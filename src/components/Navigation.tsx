import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary p-2 rounded-lg">
              <Home className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="heading-sm text-foreground">StayManager</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="body-sm text-muted-foreground hover:text-foreground transition-colors">
              功能特性
            </a>
            <a href="#pricing" className="body-sm text-muted-foreground hover:text-foreground transition-colors">
              定价方案
            </a>
            <a href="#testimonials" className="body-sm text-muted-foreground hover:text-foreground transition-colors">
              客户评价
            </a>
            <a href="#contact" className="body-sm text-muted-foreground hover:text-foreground transition-colors">
              联系我们
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">登录</Button>
            <Button variant="hero">免费试用</Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <a href="#features" className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground">
              功能特性
            </a>
            <a href="#pricing" className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground">
              定价方案
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground">
              客户评价
            </a>
            <a href="#contact" className="block px-3 py-2 text-base text-muted-foreground hover:text-foreground">
              联系我们
            </a>
            <div className="pt-4 border-t border-border">
              <Button variant="ghost" className="w-full mb-2">登录</Button>
              <Button variant="hero" className="w-full">免费试用</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;