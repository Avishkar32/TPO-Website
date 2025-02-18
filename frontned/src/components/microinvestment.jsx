import React, { useState } from 'react';
import { ArrowUpRight, Wallet, Users, TrendingUp, Building, Landmark, 
         Tractor, PiggyBank, Smartphone, Store, Coins } from 'lucide-react';

const MicroinvestmentPlatform = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const investmentOptions = [
    {
      title: "आवर्ती जमा (Recurring Deposit)",
      description: "नियमित मासिक बचत के साथ सुरक्षित रिटर्न। बैंक और पोस्ट ऑफिस RD उपलब्ध।",
      minAmount: "₹100/month",
      returns: "5.5-6.5%",
      icon: <PiggyBank className="w-6 h-6" />,
      category: "banking"
    },
    {
      title: "स्वयं सहायता समूह (Self-Help Groups)",
      description: "समुदाय-आधारित बचत और उधार। सामूहिक विकास के लिए।",
      minAmount: "₹50/month",
      returns: "Variable",
      icon: <Users className="w-6 h-6" />,
      category: "community"
    },
    {
      title: "माइक्रोफाइनेंस (Microfinance)",
      description: "छोटे व्यवसाय और स्वरोजगार के लिए वित्तीय सहायता।",
      minAmount: "₹1000",
      returns: "10-15%",
      icon: <Building className="w-6 h-6" />,
      category: "business"
    },
    {
      title: "स्वर्ण योजना (Gold Scheme)",
      description: "डिजिटल और फिजिकल गोल्ड में निवेश। सुरक्षित भविष्य।",
      minAmount: "₹100",
      returns: "Market Linked",
      icon: <Coins className="w-6 h-6" />,
      category: "gold"
    },
    {
      title: "कृषि और पशुपालन (Agriculture & Livestock)",
      description: "कृषि और पशुपालन में निवेश। सतत आय का स्रोत।",
      minAmount: "₹5000",
      returns: "15-25%",
      icon: <Tractor className="w-6 h-6" />,
      category: "agriculture"
    },
    {
      title: "म्यूचुअल फंड SIP",
      description: "नियमित SIP के माध्यम से इक्विटी में निवेश।",
      minAmount: "₹500/month",
      returns: "10-12%",
      icon: <TrendingUp className="w-6 h-6" />,
      category: "market"
    },
    {
      title: "डिजिटल निवेश ऐप्स",
      description: "स्मार्टफोन के माध्यम से आसान डिजिटल निवेश।",
      minAmount: "₹10",
      returns: "Variable",
      icon: <Smartphone className="w-6 h-6" />,
      category: "digital"
    },
    {
      title: "लघु व्यवसाय",
      description: "छोटे व्यवसाय में निवेश और विकास।",
      minAmount: "₹10000",
      returns: "20-30%",
      icon: <Store className="w-6 h-6" />,
      category: "business"
    },
    {
      title: "सरकारी योजनाएं",
      description: "PM-KISAN, अटल पेंशन योजना और अन्य सरकारी निवेश योजनाएं।",
      minAmount: "Varies",
      returns: "8-9%",
      icon: <Landmark className="w-6 h-6" />,
      category: "government"
    }
  ];

  return (
    <div >
      {/* Hero Section with Geometric Patterns */}
      <div className="relative overflow-hidden bg-gradient-to-br from-green-50 to-white">
        <div className="absolute inset-0 opacity-10">
          {/* Geometric patterns */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute transform rotate-45 bg-green-200"
              style={{
                width: '50px',
                height: '50px',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: 0.1
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              ग्रामीण निवेश मित्र
              <span className="block text-2xl font-normal text-gray-600 mt-2">
                Rural Investment Friend
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Empowering rural India through accessible and secure investment options
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Investment Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {investmentOptions.map((option, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-green-50 rounded-lg group-hover:bg-green-100 transition-colors duration-300">
                    {React.cloneElement(option.icon, { className: 'w-6 h-6 text-green-600' })}
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{option.title}</h3>
                <p className="text-gray-600 mb-4 h-20">{option.description}</p>
                <div className="flex justify-between items-center text-sm pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-gray-500">Minimum</span>
                    <span className="font-semibold text-gray-900">{option.minAmount}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-gray-500">Expected Returns</span>
                    <span className="font-semibold text-green-600">{option.returns}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-green-50 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            शुरू करें अपनी निवेश यात्रा
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our financial experts are here to guide you through your investment journey
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h4>
              <p className="text-gray-600">1800-XXX-XXXX</p>
              <p className="text-gray-600">support@grameennivesh.in</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Security</h4>
              <p className="text-gray-600">RBI Regulated</p>
              <p className="text-gray-600">256-bit Encryption</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Download App</h4>
              <p className="text-gray-600">Available on</p>
              <p className="text-gray-600">Google Play & App Store</p>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">© 2025 ग्रामीण निवेश मित्र. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MicroinvestmentPlatform;