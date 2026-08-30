'use client';

import { motion } from "framer-motion";
import { useState } from "react";
import CertificationModal from "./CertificationModal";

export interface Certification {
  title: string;
  issuer: string;
  issuerLogo: string;
  description: string;
  image: string;
  link: string;
}

const certificationsData: Certification[] = [
  {
    title: "Computer Programming",
    issuer: "NEO COLAB",
    issuerLogo: "N",
    description: "Demonstrated strong commitment, consistency, and excellence throughout the 150-hour computer programming course.",
    image: "/cert-neocolab.png",
    link: "https://drive.google.com/file/d/13qIVzOuaAJmNKw6LdLakpiXFZIPrHpLa/view?usp=sharing"
  },
  {
    title: "C++ Programming",
    issuer: "Saylor Academy awards",
    issuerLogo: "S",
    description: "Certificate of achievement for CS107: C++ Programming covering data structures, OOP, and algorithms with an 85.00% grade.",
    image: "/cert-cpp.png",
    link: "https://drive.google.com/file/d/1HP6Vsk-zMn09qSg0F4KVjYXxWEnUFlhH/view?usp=sharing"
  },
  {
    title: "Fundamentals of Information Security",
    issuer: "Infosys Springboard",
    issuerLogo: "I",
    description: "Successfully completed the course on Fundamentals of Information Security covering core security principles and defenses.",
    image: "/cert-infosec.png",
    link: "https://drive.google.com/file/d/1uJfZimhhnNqT-shGh18eO33Ky7N8yFQ2/view?usp=sharing"
  },
  {
    title: "Introduction to Cyber Security",
    issuer: "Infosys Springboard",
    issuerLogo: "I",
    description: "Completed foundation training in cyber security principles, network defenses, and threat analysis.",
    image: "/cert-cybersecurity.png",
    link: "https://drive.google.com/file/d/15U5opaieypAkRAj4m5KatsNAa1O0lF5s/view?usp=sharing"
  }
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <>
      <section id="certifications" className="section-padding bg-background z-20 relative">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
              <span className="glow-text">Certifications</span>
            </h2>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10 max-w-4xl mx-auto">
              {certificationsData.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  className="glass-card p-6 flex flex-col justify-between group cursor-pointer hover:border-primary/40 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setSelectedCert(cert)}
                  whileHover={{ y: -5 }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white ${
                        cert.issuer.toLowerCase().includes('neo colab') ? 'bg-amber-600' :
                        cert.issuer.toLowerCase().includes('saylor') ? 'bg-blue-600' :
                        cert.issuer.toLowerCase().includes('edutech') ? 'bg-emerald-600' :
                        cert.issuer.toLowerCase().includes('infosys') ? 'bg-indigo-600' : 'bg-primary'
                      }`}>
                        {cert.issuerLogo}
                      </div>
                      <span className="text-xs text-muted-foreground">{cert.issuer}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-6 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1 group-hover:text-primary/80 transition-colors">
                    Click to preview &rarr;
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CertificationModal
        cert={selectedCert}
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </>
  );
};

export default Certifications;
