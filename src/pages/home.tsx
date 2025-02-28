import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Banner from "../components/componentsHome/banner";
import CardEskul from "../components/componentsHome/cardEskul";
import { EskulData } from "../types/types";
import Img1 from "../assets/image/futsal.jpeg";
import Marawis from "../assets/image/rebana.jpeg";
import Pmr from "../assets/image/pmr.jpeg";
import Pramuk from "../assets/image/Pramuka.jpeg";
import takewnd from "../assets/image/tkdn.jpeg";
import paskib from "../assets/image/paskibra.jpeg";
import AboutUs from "../components/componentsHome/AboutUs";
import Galeri from "../components/componentsHome/galeri";

const Home: React.FC = () => {
  const eskulData: EskulData[] = [
    {
      id: 1,
      name: "Futsal",
      description: "Raih kemenangan dan kesehatan dengan bermain futsal bersama kami!",
      image: Img1,
    },
    {
      id: 2,
      name: "Marawis",
      description: "Latihan dan pertunjukan Marawis untuk melestarikan seni musik tradisional dan meningkatkan keterampilan musikal.",
      image: Marawis,
    },
    {
      id: 3,
      name: "PMR",
      description: "Pelatihan dan kegiatan Palang Merah Remaja (PMR) untuk meningkatkan keterampilan pertolongan pertama dan kepedulian sosial.",
      image: Pmr,
    },
    {
      id: 4,
      name: "Pramuka",
      description: "Aktivitas dan pelatihan Pramuka untuk membangun karakter, kepemimpinan, dan keterampilan outdoor.",
      image: Pramuk,
    },
    {
      id: 5,
      name: "Paskibra",
      description: "Latihan dan persiapan Paskibra untuk meningkatkan keterampilan baris-berbaris dan disiplin.",
      image: paskib,
    },
    {
      id: 6,
      name: "Taekwondo",
      description: "Pelatihan Taekwondo untuk meningkatkan keterampilan bela diri, kekuatan fisik, dan disiplin diri.",
      image: takewnd,
    },
  ];


  const aboutUsControls = useAnimation();
  const galeriControls = useAnimation();
  const eskulControls = useAnimation();
  const visiMisiControls = useAnimation();


  const { ref: aboutUsRef, inView: aboutUsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: galeriRef, inView: galeriInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: eskulRef, inView: eskulInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: visiMisiRef, inView: visiMisiInView } = useInView({ triggerOnce: true, threshold: 0.2 });


  React.useEffect(() => {
    if (aboutUsInView) aboutUsControls.start("visible");
  }, [aboutUsControls, aboutUsInView]);

  React.useEffect(() => {
    if (galeriInView) galeriControls.start("visible");
  }, [galeriControls, galeriInView]);

  React.useEffect(() => {
    if (eskulInView) eskulControls.start("visible");
  }, [eskulControls, eskulInView]);

  React.useEffect(() => {
    if (visiMisiInView) visiMisiControls.start("visible");
  }, [visiMisiControls, visiMisiInView]);

  return (
    <div className="faded mt-[15%] md:mt-[10%] lg:mt-[4%]">
      <Banner />

      <motion.div
        ref={aboutUsRef}
        initial="hidden"
        animate={aboutUsControls}
        variants={{
          hidden: { opacity: 0, x: -100 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 1.5 }}
      >
        <AboutUs />
      </motion.div>

      <motion.div
        ref={galeriRef}
        initial="hidden"
        animate={galeriControls}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Galeri />
      </motion.div>

      <motion.div
        ref={eskulRef}
        className="flex justify-center items-center my-5"
        initial="hidden"
        animate={eskulControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <p className="font-bold text-[30px]">Ekstrakurikuler</p>
      </motion.div>

      <motion.div
        ref={eskulRef}
        className="flex gap-5 flex-wrap w-full justify-center items-center px-[7%]"
        initial="hidden"
        animate={eskulControls}
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        {eskulData.map((item) => (
          <CardEskul key={item.id} eskul={item} />
        ))}
      </motion.div>

      <motion.div
        ref={visiMisiRef}
        className="flex flex-wrap my-10 gap-3 mx-5 justify-center"
        initial="hidden"
        animate={visiMisiControls}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <div className="w-[100%] md:w-[47%] text-center bg-white p-6 rounded-lg shadow-lg">
          <p className="font-bold text-[30px] text-green-600">Visi</p>
          <div className="mt-4">
            <p className="text-lg text-start" style={{ fontFamily: "work sans", fontSize: "14px" }}>
              Menjadi lembaga pendidikan yang unggul dan berkelanjutan dalam menghasilkan lulusan yang tidak hanya cerdas secara intelektual, tetapi juga memiliki karakter yang tangguh, berintegritas tinggi, serta mampu bersaing di tingkat global. Kami berkomitmen untuk menciptakan lingkungan belajar yang inovatif, inklusif, dan berlandaskan nilai-nilai moral serta keagamaan, sehingga mampu menginspirasi setiap individu untuk mencapai potensi maksimal mereka dalam berbagai bidang kehidupan.
            </p>
          </div>
        </div>


        <div className="w-[100%] md:w-[47%] text-center bg-white p-6 rounded-lg shadow-lg">
          <p className="font-bold text-[30px] text-green-600">Misi</p>
          <div className="mt-4">
            <ol className="list-decimal text-lg text-start space-y-2 pl-5" style={{ fontFamily: "work sans", fontSize: "14px" }}>
              <li>Mewujudkan lulusan yang unggul dan berkarakter di bidang akademik dan nonakademi.</li>
              <li>Mengikutsertakan peserta didik untuk kegiatan lomba tingkat kecamatan, kabupaten/kota, provinsi, nasional dan internasional.</li>
              <li>Mewujudkan pendidikan yang mengedepankan pembentukan komunitas belajar sepanjang hayat yaitu guru, peserta didik dan orang tua saling belajar sepanjang hidupnya.</li>
              <li>Mewujudkan pendidikan yang mengedepankan pembentukan profil pelajar Pancasila.</li>
              <li>Mewujudkan pendidikan yang menjamin hak belajar bagi setiap peserta didik.</li>
              <li>Mewujudkan pendidikan menggunakan pendekatan atau model yang beragam.</li>
              <li>Mewujudkan pendidikan mengembangkan keterampilan abad 21.</li>
            </ol>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
