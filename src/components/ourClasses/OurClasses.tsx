import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import { ClassComponents } from "./ClassComponents";

const classes: Array<ClassType> = [
  {
    name: "Fitness Classes",
    description:
      "Discover a diverse range of fitness classes tailored to every need, from high-intensity workouts to mind-body practices, fostering holistic well-being and achieving individual fitness goals effectively",
    image: image5,
  },
  {
    name: "Weight Training Classes",
    description:
      "Experience our intensive weight training classes, expertly led by seasoned instructors, focused on sculpting and strengthening, guiding you toward your fitness aspirations effectively and efficiently.",
    image: image1,
  },

  {
    name: "General Training Classes",
    description:
      "Explore our comprehensive training program offering customized group and private sessions tailored to your fitness goals, led by expert trainers, ensuring personalized guidance and progress in a motivating environment.",
    image: image6,
  },
  {
    name: "Ab Core Classes",
    description:
      "Join our targeted Ab Core classes, meticulously crafted to strengthen and tone your core muscles, led by expert instructors for effective and transformative results.",
    image: image3,
  },
  {
    name: "Yoga Classes",
    description:
      "Indulge in our rejuvenating yoga classes, blending mindfulness and movement, guided by experienced instructors, fostering balance, flexibility, and inner peace for holistic wellness.",
    image: image2,
  },

  {
    name: "Adventure Classes",
    description:
      "Experience the thrill of our adventure classes, blending fitness and excitement with challenging activities, fostering growth, camaraderie, and unforgettable memories for all participants",
    image: image4,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

export const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Dive into a world of fitness tailored just for you! From intensive
              cardio to calming yoga, our expert-led classes ensure personalized
              workouts for your unique fitness journey and remarkable progress.
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <ClassComponents
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};
