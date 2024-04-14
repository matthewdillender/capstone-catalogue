/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";

import { CapstonesIndex } from "./CapstonesIndex";
const students = [
  {
    first_name: "John",
    last_name: "Doe",
    capstone_project_name: "Online Marketplace",
    screenshot: "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149680701.jpg",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    capstone_project_name: "E-Learning Platform",
    screenshot: "https://cdn.elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    capstone_project_name: "Fitness Tracking App",
    screenshot:
      "https://static.vecteezy.com/system/resources/previews/000/435/420/original/healthy-lifestyle-iconset-for-fitness-app-vector.jpg",
  },
  {
    first_name: "Bob",
    last_name: "Williams",
    capstone_project_name: "Recipe Sharing App",
    screenshot:
      "https://cdn.shopify.com/app-store/listing_images/158e4af652886027cc4d8339204f6af9/icon/COXlpr_Ug_ICEAE=.jpeg",
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    capstone_project_name: "Travel Planner",
    screenshot: "https://i.pinimg.com/originals/2a/54/ac/2a54ac497f9984435890f9b672763839.jpg",
  },
  {
    first_name: "Michael",
    last_name: "Jones",
    capstone_project_name: "Language Learning Platform",
    screenshot: "https://static-00.iconduck.com/assets.00/language-icon-2048x2048-ys7d03zv.png",
  },
  {
    first_name: "Samantha",
    last_name: "Taylor",
    capstone_project_name: "Virtual Interior Designer",
    screenshot:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/06/e8/a1/06e8a1e3-354f-9c9d-5c82-885e96be499f/Homestyler-1x_U007emarketing-0-7-0-0-sRGB-85-220-0.png/1200x600wa.png",
  },
  {
    first_name: "David",
    last_name: "Martinez",
    capstone_project_name: "Budget Management App",
    screenshot:
      "https://s1.mzstatic.com/us/r30/Purple5/v4/51/17/a3/5117a35b-8133-4d54-e7a2-96d93f842b3e/pr_source.png?downloadKey=1412984390_66f150135a73f0424a11cc40f6d4113d",
  },
  {
    first_name: "Sophia",
    last_name: "Garcia",
    capstone_project_name: "Music Recommendation System",
    screenshot: "https://cdn3.iconfinder.com/data/icons/mii-ui-vol-1/133/music-512.png",
  },
  {
    first_name: "Matthew",
    last_name: "Rodriguez",
    capstone_project_name: "Task Management Tool",
    screenshot:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjJuGLWI7M9V3LVKMQDQYR7jVxaJY-QAH1JNfXqFiFbelfibTTdG5lFvsrtENTfH-EP28&usqp=CAU",
  },
  {
    first_name: "Olivia",
    last_name: "Hernandez",
    capstone_project_name: "Recipe Organizer",
    screenshot: "https://cdn-icons-png.flaticon.com/512/1869/1869042.png",
  },
  {
    first_name: "William",
    last_name: "Lopez",
    capstone_project_name: "Fitness Challenge App",
    screenshot:
      "https://static.vecteezy.com/system/resources/previews/020/195/404/original/fitness-icon-for-your-website-design-logo-app-ui-free-vector.jpg",
  },
];

export function Content() {
  return (
    <div>
      <CapstonesIndex students={students} />
    </div>
  );
}

// Use the following for Backend request:

// const [students, setStudents] = useState([]);

// const handleIndexStudents = () => {
//   console.log("handleIndexStudents");
//   axios.get("http://localhost:3000/students.json").then((response) => {
//     console.log(response.data);
//     setStudents(response.data);
//   });
// };

// useEffect(handleIndexStudents, []);

// return (
//   <div>
//     <StudentsIndex students={students} />
//   </div>
// );
