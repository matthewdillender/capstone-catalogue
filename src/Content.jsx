/* eslint-disable no-unused-vars */
import React from "react";
import "./Card.css";
import { Modal } from "./Modal";

import { CapstonesIndex } from "./CapstonesIndex";
const students = [
  {
    name: "John Doe",
    capstone_project_name: "Online Marketplace",
    screenshot: "https://img.freepik.com/free-vector/gradient-instagram-shop-logo-template_23-2149680701.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis justo sed elit sagittis tempor eu et felis. Sed ornare massa ut aliquam consequat. Sed sed ipsum lectus. Fusce vulputate, ipsum eu dictum ultricies, nunc ligula condimentum velit, nec lacinia mi sapien vel est. Duis nec sem non nisi semper vulputate sit amet non nisi.",
  },
  {
    name: "Jane Smith",
    capstone_project_name: "E-Learning Platform",
    screenshot: "https://cdn.elearningindustry.com/wp-content/uploads/2022/01/shutterstock_1060195475.jpg",
    description:
      "Ut vehicula sem id diam vestibulum, id varius neque fermentum. In ullamcorper, nulla nec fermentum aliquet, arcu arcu egestas risus, eget vulputate libero lacus a velit. Vivamus sed mi sit amet augue tempor placerat sed nec mauris. Cras id enim non urna malesuada lacinia. Curabitur non arcu at nibh tristique blandit sit amet at felis. Vivamus consectetur ante vel justo malesuada, a aliquet nulla vulputate.",
  },
  {
    name: "Alice Johnson",
    capstone_project_name: "Fitness Tracking App",
    screenshot:
      "https://static.vecteezy.com/system/resources/previews/000/435/420/original/healthy-lifestyle-iconset-for-fitness-app-vector.jpg",
    description:
      "Proin sed est vitae nisi viverra auctor. Phasellus consectetur nisi non tortor luctus ultricies. Curabitur vestibulum ligula id risus sagittis, nec convallis ligula lacinia. Donec sed mi velit. Nullam vehicula ligula sed ante dapibus, vitae posuere nulla vehicula. Duis hendrerit orci id magna ultrices, vel commodo purus dapibus. Suspendisse potenti. Vivamus blandit tellus ac lorem rutrum, vitae faucibus libero gravida.",
  },
  {
    name: "Bob Williams",
    capstone_project_name: "Recipe Sharing App",
    screenshot:
      "https://cdn.shopify.com/app-store/listing_images/158e4af652886027cc4d8339204f6af9/icon/COXlpr_Ug_ICEAE=.jpeg",
    description:
      "Integer nec libero ut turpis consequat venenatis. Curabitur congue vehicula libero, a lacinia sapien dapibus eget. Vivamus nec semper est. Phasellus id mi sed ligula iaculis luctus. Nam ut justo et felis dignissim molestie id a ex. Fusce vehicula dolor non metus dignissim, eget ultricies sem scelerisque. Maecenas non lorem sit amet justo tristique aliquam. Sed fringilla orci vel libero feugiat, at hendrerit nisi malesuada.",
  },
  {
    name: "Emily Brown",
    capstone_project_name: "Travel Planner",
    screenshot: "https://i.pinimg.com/originals/2a/54/ac/2a54ac497f9984435890f9b672763839.jpg",
    description:
      "Vestibulum fermentum purus at urna suscipit vehicula. Phasellus feugiat auctor mauris, ut feugiat magna vehicula eu. Quisque sed justo quis orci malesuada auctor. Sed vulputate eros sed ipsum pharetra, eget venenatis justo molestie. Integer eu dolor id urna lacinia interdum. Aliquam ac eros et ante lacinia auctor non ut turpis.",
  },
  {
    name: "Michael Jones",
    capstone_project_name: "Language Learning Platform",
    screenshot: "https://static-00.iconduck.com/assets.00/language-icon-2048x2048-ys7d03zv.png",
    description:
      "Nulla facilisi. Phasellus ac lorem a ligula tincidunt sagittis. Vivamus ac fringilla velit. Suspendisse potenti. Nullam eleifend arcu nec libero consequat, a fermentum libero posuere. Suspendisse potenti. Integer eget lorem ac ligula mattis suscipit vel eget justo. Cras luctus leo nec sapien ullamcorper aliquet.",
  },
  {
    name: "Samantha Taylor",
    capstone_project_name: "Virtual Interior Designer",
    screenshot:
      "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/06/e8/a1/06e8a1e3-354f-9c9d-5c82-885e96be499f/Homestyler-1x_U007emarketing-0-7-0-0-sRGB-85-220-0.png/1200x600wa.png",
    description:
      "Nam ut ultricies libero, eget luctus odio. Maecenas id gravida ex. Nam nec vehicula lacus. Nam non volutpat dolor. Morbi nec arcu nec justo cursus auctor. Mauris sed elit dapibus, vehicula mi eget, convallis nunc. Morbi ac ex nunc.",
  },
  {
    name: "David Martinez",
    capstone_project_name: "Budget Management App",
    screenshot:
      "https://s1.mzstatic.com/us/r30/Purple5/v4/51/17/a3/5117a35b-8133-4d54-e7a2-96d93f842b3e/pr_source.png?downloadKey=1412984390_66f150135a73f0424a11cc40f6d4113d",
    description:
      "Fusce nec ligula nec nulla eleifend sollicitudin. Nam sagittis, felis vel bibendum aliquam, nulla sem fermentum justo, vitae tempor quam nulla id risus. Fusce feugiat orci sit amet arcu ultrices, in malesuada justo posuere. Integer consequat est vel arcu efficitur, at facilisis elit convallis. Integer nec dui dignissim, suscipit nisl vitae, consequat neque.",
  },
  {
    name: "Sophia Garcia",
    capstone_project_name: "Music Recommendation System",
    screenshot: "https://cdn3.iconfinder.com/data/icons/mii-ui-vol-1/133/music-512.png",
    description:
      "Fusce nec ligula nec nulla eleifend sollicitudin. Nam sagittis, felis vel bibendum aliquam, nulla sem fermentum justo, vitae tempor quam nulla id risus. Fusce feugiat orci sit amet arcu ultrices, in malesuada justo posuere. Integer consequat est vel arcu efficitur, at facilisis elit convallis. Integer nec dui dignissim, suscipit nisl vitae, consequat neque.",
  },
  {
    name: "Rob Williams",
    capstone_project_name: "Recipe Sharing App",
    screenshot:
      "https://cdn.shopify.com/app-store/listing_images/158e4af652886027cc4d8339204f6af9/icon/COXlpr_Ug_ICEAE=.jpeg",
    description:
      "Integer nec libero ut turpis consequat venenatis. Curabitur congue vehicula libero, a lacinia sapien dapibus eget. Vivamus nec semper est. Phasellus id mi sed ligula iaculis luctus. Nam ut justo et felis dignissim molestie id a ex. Fusce vehicula dolor non metus dignissim, eget ultricies sem scelerisque. Maecenas non lorem sit amet justo tristique aliquam. Sed fringilla orci vel libero feugiat, at hendrerit nisi malesuada.",
  },
  {
    name: "Jenny Brown",
    capstone_project_name: "Travel Planner",
    screenshot: "https://i.pinimg.com/originals/2a/54/ac/2a54ac497f9984435890f9b672763839.jpg",
    description:
      "Vestibulum fermentum purus at urna suscipit vehicula. Phasellus feugiat auctor mauris, ut feugiat magna vehicula eu. Quisque sed justo quis orci malesuada auctor. Sed vulputate eros sed ipsum pharetra, eget venenatis justo molestie. Integer eu dolor id urna lacinia interdum. Aliquam ac eros et ante lacinia auctor non ut turpis.",
  },
  {
    name: "Maximus Jones",
    capstone_project_name: "Language Learning Platform",
    screenshot: "https://static-00.iconduck.com/assets.00/language-icon-2048x2048-ys7d03zv.png",
    description:
      "Nulla facilisi. Phasellus ac lorem a ligula tincidunt sagittis. Vivamus ac fringilla velit. Suspendisse potenti. Nullam eleifend arcu nec libero consequat, a fermentum libero posuere. Suspendisse potenti. Integer eget lorem ac ligula mattis suscipit vel eget justo. Cras luctus leo nec sapien ullamcorper aliquet.",
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
