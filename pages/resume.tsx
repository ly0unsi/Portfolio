import Bar from "../components/Bar";
import { languages, tools } from "../data";
import Head from 'next/head'
import { motion } from "framer-motion";
import { fadeUp } from "../animations";

const Resume = () => {

  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className="px-6 py-2">
        {/* //! Education & Experience */}
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeUp} initial="initial" animate="animate" >
            <h5 className="my-3 text-2xl font-bold border-b-2 border-red-500 dark:border-gray-700">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Informatique Industrielle
              </h5>
              <p className="font-semibold">Est Kenitra (2019-2021)</p>
              <p className="my-3 text-justify	">
                Je suis actuellement en "Licence specialisé" en développement web/app de l'Université Ibn Tofail
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold border-b-2 border-red-500 dark:border-gray-700">Experience</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">Développeur de logiciels Jr.</h5>
              <p className="font-semibold">Une année de freelance</p>
              <p className="my-3">e ne sais pas pourquoi je fais ce travail</p>
            </div>
          </motion.div>
        </div>

        {/*Languages & Tools */}
        <div className="grid gap-9 md:grid-cols-2">
          <div >
            <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold">Outils et logiciels</h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div >
     
    </>
  );
};

export default Resume;
