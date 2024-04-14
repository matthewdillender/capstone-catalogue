import { CapstonesIndex } from "./CapstonesIndex";
const students = [
  {
    first_name: "John",
    last_name: "Doe",
    capstone_project_name: "Online Marketplace",
    screenshot: "https://example.com/John_Doe_screenshot.png",
  },
  {
    first_name: "Jane",
    last_name: "Smith",
    capstone_project_name: "E-Learning Platform",
    screenshot: "https://example.com/Jane_Smith_screenshot.png",
  },
  {
    first_name: "Alice",
    last_name: "Johnson",
    capstone_project_name: "Fitness Tracking App",
    screenshot: "https://example.com/Alice_Johnson_screenshot.png",
  },
  {
    first_name: "Bob",
    last_name: "Williams",
    capstone_project_name: "Recipe Sharing App",
    screenshot: "https://example.com/Bob_Williams_screenshot.png",
  },
  {
    first_name: "Emily",
    last_name: "Brown",
    capstone_project_name: "Travel Planner",
    screenshot: "https://example.com/Emily_Brown_screenshot.png",
  },
  {
    first_name: "Michael",
    last_name: "Jones",
    capstone_project_name: "Language Learning Platform",
    screenshot: "https://example.com/Michael_Jones_screenshot.png",
  },
  {
    first_name: "Samantha",
    last_name: "Taylor",
    capstone_project_name: "Virtual Interior Designer",
    screenshot: "https://example.com/Samantha_Taylor_screenshot.png",
  },
  {
    first_name: "David",
    last_name: "Martinez",
    capstone_project_name: "Budget Management App",
    screenshot: "https://example.com/David_Martinez_screenshot.png",
  },
  {
    first_name: "Sophia",
    last_name: "Garcia",
    capstone_project_name: "Music Recommendation System",
    screenshot: "https://example.com/Sophia_Garcia_screenshot.png",
  },
  {
    first_name: "Matthew",
    last_name: "Rodriguez",
    capstone_project_name: "Task Management Tool",
    screenshot: "https://example.com/Matthew_Rodriguez_screenshot.png",
  },
  {
    first_name: "Olivia",
    last_name: "Hernandez",
    capstone_project_name: "Recipe Organizer",
    screenshot: "https://example.com/Olivia_Hernandez_screenshot.png",
  },
  {
    first_name: "William",
    last_name: "Lopez",
    capstone_project_name: "Fitness Challenge App",
    screenshot: "https://example.com/William_Lopez_screenshot.png",
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
