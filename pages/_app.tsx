import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import '../App.css';
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import WhatsAppWidget from 'react-whatsapp-widget'
import 'react-whatsapp-widget/dist/index.css'
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
       
      <div className="grid grid-cols-12 gap-6 px-1 my-5 lg:mb-0 md:mb-16 sm:px-20 md:px-5 lg:px-5 xl:px-5 ">
        {/* // do this div style later (after putting the content) */}
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
          {/* //!sidebar */}
          <Sidebar />
        </div>
        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
          {/* //!navbar */}
          <Navbar />
          {/* //!compo */}
            <Component {...pageProps}  />
        </div>
        
      </div>
      <div className='text-dark'>
        <WhatsAppWidget phoneNumber='212674845729' 
          textReplyTime="En ligne" 
          message="Bonjour! 👋🏼 Que pouvons-nous faire pour vous ?"
          companyName="Abdellah Lyounsi"
          sendButton='Envoyer'
          />
          </div>
    </ThemeProvider>
  );
}

export default MyApp;
