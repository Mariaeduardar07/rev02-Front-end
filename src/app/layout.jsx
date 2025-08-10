import localFont from "next/font/local";
import "./globals.css";
import Header from "../components/Header/Header"
import { productsData } from "../../public/data/Products";

// Configurar fonte local baixada
const cormorantGaramond = localFont({
    src: [
        {
            path: "../../public/fonts/NataSans-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/NataSans-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-cormorant",
    display: "swap",
});

export const metadata = { 
  title: 'Loja de Eletrônicos',
  description: 'Revisão de Front-end, transformando HTML para Next.js 15.'
  }

  
export default function RootLayout({ children }) {
    return (
        <html lang="pt-BR" className={cormorantGaramond.variable}>
            <body className={cormorantGaramond.className}>
                <Header
                title={ "Loja de Eletrônicos"}
                subtitle={"Os melhores produtos com os melhores preços!"}
                totalProdutos={productsData.length} />
                <main>{children}</main>
            </body>
        </html>
    );
}