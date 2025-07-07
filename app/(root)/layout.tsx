import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }:{children: React.ReactNode}) {
  return (
  
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
        <Navbar/>
        {children}
        <Footer/>
    </div>
  );

}