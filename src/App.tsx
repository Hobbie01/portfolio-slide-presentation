import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFacebook, FaRegFileAlt } from "react-icons/fa";
import { FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { SiTypescript, SiPostgresql, SiPrisma, SiDocker as SiDockerIcon, SiSupabase, SiTailwindcss, SiGmail, SiLinkedin, SiPython, SiJavascript } from "react-icons/si";
import { BiTestTube } from "react-icons/bi";
import { Smartphone } from "lucide-react";
import PortfolioHeader from "./components/PortfolioHeader";
import SkillBadge from "./components/SkillBadge";
import SlideSection from "./components/SlideSection";
import SlideNavigation from "./components/SlideNavigation";
import Timeline, { TimelineItem } from "./components/Timeline";
import StarBackground from "./components/StarBackground";
import ParticleBackground from "./components/ParticleBackground";
import JSGraderProject from "./components/JSGraderProject";
import CreditOCRProject from "./components/CreditOCRProject";
import FacebookBotProject from "./components/FacebookBotProject";
import businessSecurityIcon from '../public/assets/business-security.png';
import digitalIdentityIcon from '../public/assets/digital-identity-key.png';
import metropoliceguardLogo from '../public/assets/metropoliceguard-logo.png';
import ndidLogo from '../public/assets/ndid-logo.png';

const workTimeline: TimelineItem[] = [
  {
    icon: <FaLaptopCode className="text-2xl icon-bounce-hover" />, org: "Freelance", period: "2022-ปัจจุบัน", title: "Full Stack/Automation", desc: "พัฒนาเว็บ, API, งานโปรเจกต์สั้น & ปรึกษา", effect: "animate-pulse scale-110"
  },
  {
    icon: <FaNodeJs className="text-2xl icon-bounce-hover" />, org: "Truewave", period: "2022-ปัจจุบัน", title: "Backend ด้วย TypeScript/PostgreSQL", desc: "ระบบ PDF, อีเมล, Automation", effect: "float-anim"
  },
  {
    icon: <FaBriefcase className="text-2xl icon-bounce-hover" />, org: "NMB-Minebea (Intern)", period: "2021", title: "Windows app, Flutter web/mobile", desc: "", effect: "pulse-anim"
  }
];

const skillBadges = [
  { icon: <SiTypescript className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'TypeScript', colorClass: 'bg-violet-300/10 text-violet-300', effect: 'badge-pulse' },
  { icon: <SiPython className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Python', colorClass: 'bg-yellow-200/10 text-yellow-400', effect: 'badge-pulse' },
  { icon: <SiJavascript className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'JavaScript', colorClass: 'bg-yellow-100/10 text-yellow-500', effect: 'badge-pulse' },
  { icon: <FaNodeJs className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Node.js', colorClass: 'bg-blue-300/10 text-blue-400', effect: 'badge-float badge-pulse' },
  { icon: <SiPostgresql className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'PostgreSQL', colorClass: 'bg-green-300/10 text-green-400', effect: 'badge-pulse' },
  { icon: <SiPrisma className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Prisma', colorClass: 'bg-gray-300/10 text-gray-400', effect: 'badge-pulse' },
  { icon: <SiDockerIcon className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Docker', colorClass: 'bg-orange-200/10 text-orange-400', effect: 'badge-pulse' },
  { icon: <FaGitAlt className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Git', colorClass: 'bg-orange-100/10 text-orange-500', effect: 'badge-pulse' },
  { icon: <BiTestTube className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Playwright', colorClass: 'bg-pink-100/10 text-pink-400', effect: 'badge-pulse' },
  { icon: <SiSupabase className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Supabase', colorClass: 'bg-green-100/10 text-green-500', effect: 'badge-pulse' },
  { icon: <SiTailwindcss className="w-4 h-4 mr-1 icon-bounce-hover" />, label: 'Tailwind CSS', colorClass: 'bg-cyan-200/10 text-cyan-600', effect: 'badge-pulse' },
];

const slides = [
  {
    label: "Intro",
    content: (
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <SiTailwindcss className="w-6 h-6 icon-bounce-hover" /> Slide 1: Intro
        </h2>
        <p className="mt-2 italic text-base text-center max-w-md">
          นักพัฒนา Backend 
        </p>
        <div className="flex gap-10 justify-center items-center">
          <SiTypescript className="text-blue-500 text-6xl animate-bounce icon-bounce-hover" />
          <SiPython className="text-yellow-400 text-6xl animate-bounce icon-bounce-hover" />
          <SiJavascript className="text-yellow-500 text-6xl animate-bounce icon-bounce-hover" />
        </div>
        <div className="font-bold text-lg">
          พงษ์ศิริ คนหมั่น | Backend Software Engineer
        </div>
      </motion.div>
    ),
  },
  {
    label: "Work",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-8 flex items-center">
          <FaNodeJs className="w-6 h-6 mr-2 pulse-anim icon-bounce-hover" /> ประสบการณ์การทำงาน
        </h2>
        <Timeline items={workTimeline} />
      </motion.div>
    ),
  },
  {
    label: "Tech Stack",
    content: (
      <motion.div
        className="flex flex-wrap gap-6 justify-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {skillBadges.map((item, i) => (
          <SkillBadge
            key={item.label}
            icon={item.icon}
            label={item.label}
            colorClass={item.colorClass}
            effect={item.effect}
          />
        ))}
      </motion.div>
    ),
  },
  {
    label: "ระบบเติมเครดิต + OCR",
    content: <CreditOCRProject />,
  },
  {
    label: "Facebook Bot Automation",
    content: <FacebookBotProject />,
  },
  {
    label: "JS Grader",
    content: <JSGraderProject />,
  },
  {
    label: "Summary",
    content: (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-2">สรุป / เหมาะกับตำแหน่งนี้</h2>
        <ul className="text-base mb-2 list-disc list-inside">
          <li>มีประสบการณ์ พัฒนา ระบบ Back End</li>
          <li>เข้าใจระบบจากฝั่ง developer จริง</li>
          <li>มีความรู้ด้านการพัฒนา API</li>
          <li>มีความรู้ด้านการพัฒนา Web Application</li>
          <li>มีความรู้ด้านการพัฒนา Automation</li>
          <li>มีความรู้ด้านการพัฒนา Web Scraping</li>
          <li>สามารถ พัฒนาระบบที่ช่วยลด cost และเพิ่มประสิทธิภาพให้กับบริษัทได้</li>
          <li>พร้อมเรียนรู้สิ่งใหม่และทำงานกับทีม</li>
        </ul>
      </motion.div>
    ),
  },
  {
    label: "Contact",
    content: (
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
          <SiGmail className="text-red-500 w-6 h-6 icon-bounce-hover" /> Contact
        </h2>
        <div className="flex gap-6 slide-contact">
          <motion.a
            href="mailto:phongsiri.4work@gmail.com"
            whileHover={{ scale: 1.2 }}
            className="text-red-500"
            aria-label="Email"
          >
            <SiGmail className="text-4xl icon-bounce-hover" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/phongsiri-khonman-618809359/"
            whileHover={{ scale: 1.2 }}
            className="text-blue-700"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="text-4xl icon-bounce-hover" />
          </motion.a>
          <motion.a
            href="https://github.com/Hobbie01"
            whileHover={{ scale: 1.2 }}
            className="text-gray-800"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGitAlt className="text-4xl icon-bounce-hover" />
          </motion.a>
        </div>
        <div className="text-base mt-4 text-center">
          พงษ์ศิริ คนหมั่น | phongsiri.4work@gmail.com <br />
          github.com/Hobbie01 <br />
          <Smartphone className="inline w-5 h-5 -mt-1 mr-1 icon-bounce-hover" /> 093-049-4883
        </div>

      </motion.div>
    ),
  },
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    document.documentElement.classList.add("dark");
    return () => {
      document.documentElement.classList.remove("dark");
    };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setCurrent((prev) => (prev + 1) % total);
      if (e.key === 'ArrowLeft') setCurrent((prev) => (prev - 1 + total) % total);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [total]);

  return (
    <>
      <div className="animated-gradient-bg z-0" aria-hidden="true"></div>
      <ParticleBackground />
      <StarBackground />
      <div className="min-h-screen w-full text-gray-900 dark:text-white font-sans transition-colors duration-300 relative z-20 bg-zinc-900/60">
        <PortfolioHeader
          name="พงษ์ศิริ คนหมั่น"
          title="Backend Software Engineer"
          description={
            "นักพัฒนา Backend เชี่ยวชาญ TypeScript, Python, JavaScript, Node.js, PostgreSQL\nสนุกกับการสร้างระบบที่แก้ปัญหาจริงและ scale ได้"
          }
          ProfileIcon={
            <img
              src="/assets/my-photo.png"
              alt="My profile"
              className="object-cover w-28 h-28 rounded-full shadow-md"
            />
          }
          badges={skillBadges.map((item, i) => (
            <SkillBadge
              key={item.label}
              icon={item.icon}
              label={item.label}
              colorClass={item.colorClass}
              effect={item.effect}
            />
          ))}
        />
        <SlideSection title="โปรเจคที่เคยร่วมพัฒนา">
          <div className="flex gap-4 items-start bg-zinc-900/80 rounded-xl p-5 shadow-lg mb-6 border border-zinc-700/50">
            <img src={metropoliceguardLogo} alt="MetropoliceGuard Logo" className="w-16 h-16 object-contain bg-white rounded-full p-1" />
            <div>
              <div className="font-semibold text-lg text-white">ระบบ MetropoliceGuard</div>
              <div className="text-zinc-200 text-base mt-2">
                MetropoliceGuard เป็นระบบบริการข้อมูลธุรกิจรักษาความปลอดภัย พัฒนาขึ้นเพื่อสนับสนุนงานของกองบัญชาการตำรวจนครบาล โดยมีวัตถุประสงค์หลักเพื่ออำนวยความสะดวกในการดำเนินการด้านใบอนุญาตสำหรับผู้ประกอบการในธุรกิจรักษาความปลอดภัย ครอบคลุมถึง<br/><br/>
                - การยื่นขอใบอนุญาตเป็นเจ้าหน้าที่รักษาความปลอดภัย (รปภ.)<br/>
                - การขออนุญาตจัดตั้งสถานฝึกอบรม<br/>
                - การจดทะเบียนบริษัทที่ประกอบกิจการรักษาความปลอดภัย<br/><br/>
                ระบบนี้ช่วยเพิ่มประสิทธิภาพในการบริหารจัดการข้อมูล และลดขั้นตอนการดำเนินงานด้านเอกสารของหน่วยงานภาครัฐและภาคเอกชน
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-start bg-zinc-900/80 rounded-xl p-5 shadow-lg border border-zinc-700/50">
            <img src={ndidLogo} alt="NDID Logo" className="w-16 h-16 object-contain bg-white rounded-full p-1" />
            <div>
              <div className="font-semibold text-lg text-white">ระบบ Membership (NDID Contract)</div>
              <div className="text-zinc-200 text-base mt-2">
                Membership System เป็นระบบที่พัฒนาขึ้นภายใต้สัญญาว่าจ้างกับบริษัท NDID (National Digital ID) โดยมีเป้าหมายเพื่อบริหารจัดการสมาชิก (membership management) และการให้บริการอื่น ๆ ที่เกี่ยวข้องกับการยืนยันตัวตนดิจิทัล (Digital ID)<br/><br/>
                ระบบนี้มีการเชื่อมต่อกับฐานข้อมูลของ <span className="font-semibold">กรมพัฒนาธุรกิจการค้า (DBD)</span> เพื่อดึงข้อมูลนิติบุคคลมาใช้งานในกระบวนการตรวจสอบและยืนยันตัวตนอย่างปลอดภัยและถูกต้องตามกฎหมาย
              </div>
            </div>
          </div>
        </SlideSection>
        <div className="w-full bg-zinc-900/60 py-10 px-4 flex flex-col items-center border-t border-gray-800">
          <h2 className="text-2xl font-bold mb-4 text-violet-200 dark:text-violet-400 flex items-center gap-2">
            <SiTypescript className="w-7 h-7 float-anim icon-bounce-hover" /> Presentation Slides (สัมภาษณ์งาน)
          </h2>
          <div className="relative w-full max-w-4xl mx-auto">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="transition-all border-4 border-zinc-700 rounded-3xl shadow-2xl bg-zinc-900/60 p-20 md:p-24 min-h-[540px] md:min-h-[660px] flex flex-col items-center justify-center text-white overflow-hidden drop-shadow-2xl max-w-5xl w-full mx-auto scale-105"
            >
              <div className={`slide-content slide-${current} w-full h-full`}>
                {slides[current].content}
              </div>
            </motion.div>
            <SlideNavigation
              current={current}
              total={total}
              onPrev={() => setCurrent((prev) => (prev - 1 + total) % total)}
              onNext={() => setCurrent((prev) => (prev + 1) % total)}
              onSelect={setCurrent}
            />
          </div>
        </div>
      </div>
    </>
  );
}
