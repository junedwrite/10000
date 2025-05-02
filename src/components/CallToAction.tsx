import React from 'react';
import { Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

export const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-radial from-dark-100 to-dark relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,200,81,0.03),transparent_70%)]" />
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Spread the <span className="text-primary-400 bg-primary-500/10 px-3 py-1 rounded">Good News</span>!
        </h2>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
          We couldn't have reached this milestone without our amazing community. 
          Help us celebrate by sharing our success story!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <ShareButton 
            icon={<Twitter className="w-5 h-5" />}
            label="Twitter"
            color="bg-[#1DA1F2]"
            onClick={() => shareOnSocial('twitter')}
          />
          
          <ShareButton 
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
            color="bg-[#0A66C2]"
            onClick={() => shareOnSocial('linkedin')}
          />
          
          <ShareButton 
            icon={<Facebook className="w-5 h-5" />}
            label="Facebook"
            color="bg-[#1877F2]"
            onClick={() => shareOnSocial('facebook')}
          />
          
          <ShareButton 
            icon={<Share2 className="w-5 h-5" />}
            label="Copy Link"
            color="bg-dark-200"
            onClick={() => copyToClipboard()}
          />
        </div>
        
        <div className="relative max-w-lg mx-auto">
          <div className="bg-gradient-card from-dark-50 to-dark-100 p-8 rounded-lg border border-primary-700/20 shadow-card">
            <div className="absolute -top-3 -right-3">
              <span className="inline-block px-4 py-2 bg-primary-400 text-black text-sm font-semibold rounded-full shadow-glow-green animate-pulse">
                What's Next?
              </span>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Join Us on the Road to 100K</h3>
            <p className="text-gray-300 mb-6">
              We're just getting started! Subscribe to our newsletter to follow our journey 
              and learn how we're scaling our organic growth strategy.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 bg-dark border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent transition-all duration-200"
              />
              <button 
                type="button"
                className="px-6 py-3 bg-primary-400 hover:bg-primary-500 text-black font-semibold rounded-lg transition-colors duration-200 shadow-glow-green"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ShareButtonProps {
  icon: React.ReactNode;
  label: string;
  color: string;
  onClick: () => void;
}

const ShareButton: React.FC<ShareButtonProps> = ({ icon, label, color, onClick }) => {
  return (
    <button
      className={`${color} hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const shareOnSocial = (platform: 'twitter' | 'linkedin' | 'facebook') => {
  const text = "Zimtra just reached 10,000 organic clicks with $0 ad spend! Check out how we did it:";
  const url = window.location.href;
  
  let shareUrl = '';
  
  switch(platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
      break;
    case 'facebook':
      shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      break;
  }
  
  window.open(shareUrl, '_blank');
};

const copyToClipboard = () => {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      alert('Link copied to clipboard!');
    })
    .catch(err => {
      console.error('Failed to copy link: ', err);
    });
};