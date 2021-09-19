import { motion } from "framer-motion";
import Head from 'next/head'
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage,
} from "next";
import ReactWhatsapp from 'react-whatsapp';
import 'react-whatsapp-widget/dist/index.css'
import { fade, fadeUp, stagger } from "../animations";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
import { Service } from "../types";
const About: NextPage = () => {
  // console.log(services);

  return (
    <>
      <Head>
        <title>Abdellah Lyounsi</title>
      </Head>
      <motion.div
        variants={fade}
        animate="animate"
        initial="initial"
        exit="exit"
        className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="my-3 text-base font-medium text-justify">
        Je poursuis actuellement une licence professionnelle en développement Web/application de l'université Ibn Tofail. J'ai plus de 3 ans d'expérience dans le développement Web.
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-gray-200 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
          Qu'est-ce que je peux faire
          </h4>

          <motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} initial='initial' animate='animate' >
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <motion.div
                className="col-span-2 p-2 bg-white rounded-lg dark:bg-dark-200 md:col-span-1 "
                key={service.title}
                variants={fadeUp}

              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
      {/*  <MessengerCustomerChat
          pageId="103921305383739"
          appId="1216242045469709"
      /> */}
  
     <ReactWhatsapp number="2126748457290" message="Bonjour! 👋🏼 Que pouvons-nous faire pour vous ?" />
    </>
  );
};

//!called every time  the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//!called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default About;
