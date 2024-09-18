import { CourseCard } from "../../components/CourseDetail/CourseCard";
import { Hero } from "../../components/CourseDetail/Hero";
import { Preview } from "../../components/CourseDetail/Preview";
import { Subnav } from "../../components/CourseDetail/Subnav.jsx";
export default function CoursePreview() {
  return (
    <>
      <Hero />
      <Subnav />
      <Preview />
      <CourseCard />
    </>
  );
}
