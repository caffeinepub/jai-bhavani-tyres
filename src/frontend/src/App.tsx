import { SiWhatsapp } from 'react-icons/si';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

function App() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'jai-bhavani-tyres'
  );

  const products = [
    {
      title: 'Bike Tyres',
      description: 'Quality tyres for all bikes',
      price: '₹1,200',
      whatsappLink: 'https://wa.me/91XXXXXXXXXX',
    },
    {
      title: 'Car Tyres',
      description: 'Durable tyres for cars',
      price: '₹3,000',
      whatsappLink: 'https://wa.me/919242253234',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 dark:bg-neutral-950">
      {/* Header */}
      <header className="bg-brand-yellow shadow-sm">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2">
            Jai Bhavani Tyres
          </h1>
          <p className="text-base md:text-lg text-neutral-800">
            Yadgiri – Chittapur Road
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl">{product.title}</CardTitle>
                <CardDescription className="text-base">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                  Price starts {product.price}
                </p>
              </CardContent>
              <CardFooter>
                <a
                  href={product.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className="w-full bg-whatsapp hover:bg-whatsapp-hover text-white font-medium"
                    size="lg"
                  >
                    <SiWhatsapp className="w-5 h-5" />
                    Order on WhatsApp
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-neutral-600 dark:text-neutral-400 flex items-center justify-center gap-1 flex-wrap">
            <span>© {currentYear} Jai Bhavani Tyres. Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 inline-block" />
            <span>using</span>
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-100 hover:underline font-medium"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
