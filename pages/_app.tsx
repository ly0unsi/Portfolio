import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import MessengerCustomerChat from 'react-messenger-customer-chat';
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
       <MessengerCustomerChat
          pageId="103921305383739"
          appId="1216242045469709"
          htmlRef="<REF_STRING>"
      />
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
    </ThemeProvider>
  );
}

export default MyApp;
