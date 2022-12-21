import dashboad from "../assets/pics/works-page/Rectangle.png";
import vibrant from "../assets/pics/works-page/vibrant.png";
import days from "../assets/pics/works-page/36days.png";
import materials1 from "../assets/pics/works-page/materials1.png";
import materials2 from "../assets/pics/works-page/materials2.png";
import materials3 from "../assets/pics/works-page/materials3.png";

const works = [
  {
    title: "Designing Dashboards",
    id: 1,
    year: 2020,
    pic: dashboad,
    materials: { pic1: materials1, pic2: materials2, pic3: materials3 },
    type: "Dashboard",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Vibrant Portraits of 2020",
    id: 2,
    year: 2018,
    pic: vibrant,
    materials: { pic1: materials1, pic2: materials2, pic3: materials3 },
    type: "Illustration",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "36 Days of Malayalam type",
    id: 3,
    year: 2018,
    pic: days,
    materials: { pic1: materials1, pic2: materials2, pic3: materials3 },
    type: "Typography",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
  {
    title: "Components",
    id: 4,
    pic: days,
    materials: { pic1: materials1, pic2: materials2, pic3: materials3 },
    year: 2018,
    type: "Components, Design",
    body: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
  },
];

export default works;
