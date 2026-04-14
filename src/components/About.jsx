import { AccordionItem } from "@radix-ui/react-accordion";
import Captions from "./Captions";
import CaptionSplit from "./CaptionSplit";
 import axios from "axios";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { stack } from "@/lib/misc";
import { motion } from "framer-motion";
import { PixelatedCanvas } from "@/components/ui/pixelated-canvas";



const About = () => {

const [repos, setRepos] = useState(0);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchGithub = async () => {
    try {
      const res = await axios.get(
        "https://api.github.com/users/Shobhit108"
      );

      setRepos(res.data.public_repos);
    } catch (err) {
      console.log("GitHub fetch error", err);
    } finally {
      setLoading(false);
    }
  };

  fetchGithub();
}, []);

  return (
    <div
      data-index={1}
      className="page layout px-0 xl:py-12 min-h-screen flex-col overflow-x-hidden"
      id="about"
    >
      <div className="grid gap-12 xl:grid-cols-3 layout-padding items-start">
        {/* LEFT - ABOUT */}
        <div className="self-start max-w-xl">
          <CaptionSplit txt1="About" txt2={"Me"} className={"justify-start"} />
          <AboutAccordion />
        </div>

        {/* MIDDLE - EDUCATION */}
        <div className="self-start">
          <Captions txt="Education" />
          <Education />
        </div>

        {/* RIGHT - IMAGE */}
        <div className="flex items-center justify-start xl:justify-end h-full">
          <motion.div
    initial={{ opacity: 0, y: 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.3 }}
  >
          <PixelatedCanvas
            src="/meri4.png"
            width={420}
            height={420}
            cellSize={3}
            dotScale={0.9}
            shape="circle"
            grayscale="true"
            dropoutStrength={0.4}
            
            interactive
            distortionStrength={3}
            distortionRadius={40}
            distortionMode="swirl"
            followSpeed={0.2}
            jitterStrength={4}
            jitterSpeed={4}
            sampleAverage
            tintColor="black"
            tintStrength={0.2}
            className="translate-y-[-20px] xl:translate-x-[50px] xl:translate-y-[-70px]"
          />
          </motion.div>
        </div>
      </div>
      <div className="relative fade-edges mt-auto -skew-4 border-t border-b py-8 px-4 border-muted overflow-auto flex gap-12 xl:gap-20 justify-start ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent>
            {stack.map((it) => (
              <CarouselItem
                key={it.title}
                className="flex gap-2 items-center justify-center basis-auto px-4 md:px-12"
              >
                <motion.img
                  className="h-10 md:h-14 xl:h-16 scale-[1.4]"
                  src={it.logo}
                  initial={{
                    opacity: 0,
                    translateX: -10,
                  }}
                  animate={{
                    opacity: 1,
                    translateX: 0,
                    transition: {
                      duration: 1,
                      delay: 1.3,
                    },
                  }}
                />
                <Captions txt={it.title} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

   <div className="backdrop-blur-2xl border-t border-b border-muted grid grid-cols-2 md:grid-cols-4 xl:gap-0 layout-padding skew-4">
  <Card>
    <Captions
      txt={loading ? "..." : `${repos}+`}
      classname={"text-6xl"}
    />
    <p>GitHub Repositories</p>
  </Card>

  <Card>
    <Captions txt={"6+"} classname={"text-6xl"} />
    <p>Projects Built</p>
  </Card>

<Card>
  <Captions txt={"8+"} classname={"text-6xl"} />
  <p>Frontend & Tools</p>
</Card>
  <Card>
    <Captions txt={"20+"} classname={"text-6xl"} />
    <p>UI Components</p>
  </Card>
</div>
    </div>
  );
};

export default About;

function AboutAccordion() {
  return (
    <div className="relative z-10 flex flex-col flex-1 ">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Who I Am</AccordionTrigger>
          <AccordionContent>
            I’m a frontend-focused developer with hands-on experience building
            real-world UIs using React and Tailwind CSS. I’ve worked on
            production-level features during my internship and consistently
            build projects to improve performance and user experience.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What I’ve Built</AccordionTrigger>
          <AccordionContent>
            Built multiple projects including an AI-based drone platform UI
            during my internship and a hybrid e-commerce + bidding app
            (BidFlare). I focus on reusable components, smooth animations
            (Framer Motion, GSAP), and clean layout structure.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>How I Work</AccordionTrigger>
          <AccordionContent>
            I break down UI problems into small components, prioritize clean
            structure, and optimize interactions. Comfortable working with APIs,
            debugging issues, and shipping responsive interfaces that actually
            feel smooth.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Education() {
  return (
    <div className="flex flex-col flex-1">
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>B.Tech (Information Technology)</AccordionTrigger>
          <AccordionContent>
            Dr. RML Avadh University (IET), 2025 — 65%. Focused more on
            practical development, projects, and frontend engineering rather
            than theory-heavy approach.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Frontend Development</AccordionTrigger>
          <AccordionContent>
            Strong hands-on experience with React.js, Tailwind CSS, and modern
            UI practices. Built multiple responsive projects with animations and
            performance-focused design.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>Core Skills</AccordionTrigger>
          <AccordionContent>
            JavaScript, REST APIs, Git, Node.js basics, MongoDB, and
            component-based architecture. Also practiced DSA fundamentals
            alongside real project building.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

function Card({ children }) {
  return <div className="flex flex-col flex-1"> {children}</div>;
}
