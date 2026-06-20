import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/layouts/RootLayout";
import StudentLayout from "../components/layouts/StudentLayout";
import {
  Home,
  Login,
  Register,
  Courses,
  CourseDetail,
  Teachers,
  TeacherDetail,
  Pricing,
  About,
  Contact,
  FAQ,
  Groups,
  GroupDetail,
  AddGroup,
  Students,
  StudentProfile,
  Blog,
  BlogDetail,
  NotFound,
  Enrollment,
  Dashboard,
  MyCourses,
  StudentResults,
  StudentPayments,
  StudentCertificates,
  StudentProfilePage,
  StudentSettings,
  LessonPage,
  CourseCatalog,
  CoursePayment,
  StudentCourseDetail,

} from "../pages";
import ProtectedRoute from "./protected.route.tsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:id",
        element: <CourseDetail />,
      },
      {
        path: "/teachers",
        element: <Teachers />,
      },
      {
        path: "/teachers/:id",
        element: <TeacherDetail />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/faq",
        element: <FAQ />,
      },
      { path: "/enroll", 
        element: <Enrollment /> ,
      },
      {
        path: "/groups",
        element: <Groups />,
      },
      {
        path: "/groups/:id",
        element: <GroupDetail />,
      },
      {
        path: "/groups/add",
        element: <AddGroup />,
      },
      {
        path: "/students",
        element: <Students />,
      },
      {
        path: "/students/:id",
        element: <StudentProfile />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetail />,
      },
    ],
  },
  {
  element: <StudentLayout />,
  children: [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    { path: "/dashboard/courses",
       element: <MyCourses /> 
      },
    { path: "/dashboard/results",
       element: <StudentResults /> 
      },
    { path: "/dashboard/payments",
       element: <StudentPayments /> 
      },
    { path: "/dashboard/certificates",
       element: <StudentCertificates /> 
    },
    { path: "/dashboard/profile",
       element: <StudentProfilePage /> 
      },
    { path: "/dashboard/settings",
      element: <StudentSettings /> 
      },
    { path: "/dashboard/catalog",
      element: <CourseCatalog /> 
      },
  ],
},
{
  path: "/dashboard/catalog/:courseId",
  element: <StudentCourseDetail />,
},
{
  path: "/checkout/:courseId",
  element: <CoursePayment />,
},
{
  path: "/dashboard/courses/:courseId/lesson/:lessonId",
  element: <LessonPage />,
},
  {
    path: "/login",
    element: (
      <ProtectedRoute>
        <Login />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/register",
    element: (
      <ProtectedRoute>
        <Register />,
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
export default router;
