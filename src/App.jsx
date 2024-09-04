import { Suspense, lazy } from "react";
const LandingPage = lazy(() => import("@/pages/home"));
// const NotFound = lazy(() => import("@/pages/404"));
import Loading from "@/components/Loader/Loading";
import { Navigate, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          // <Suspense element={<Loading />}>
            <LandingPage />
        }
      />
          {/* </Suspense> */}

      {/* <Route path="/*">
        <Route
          path="online-course"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourse />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseAbout />
            </Suspense>
          }
        />
        <Route
          path="courses"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseCourses />
            </Suspense>
          }
        />
        <Route
          path="course-detail"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseDetail />
            </Suspense>
          }
        />
        <Route
          path="course-filter"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseFilter />
            </Suspense>
          }
        />
        <Route
          path="instructors"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseInstructors />
            </Suspense>
          }
        />
        <Route
          path="instructor-detail"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseInstructorDetail />
            </Suspense>
          }
        />
        <Route
          path="blogs"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogs />
            </Suspense>
          }
        />
        <Route
          path="blog-detail"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogDetail />
            </Suspense>
          }
        />
        <Route
          path="blog-detail-left-sidebar"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogDetailLeftSidebar />
            </Suspense>
          }
        />
        <Route
          path="blog-detail-right-sidebar"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogDetailRightSidebar />
            </Suspense>
          }
        />
        <Route
          path="blog-left-sidebar"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogLeftSidebar />
            </Suspense>
          }
        />
        <Route
          path="blog-column-one"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogColumnOne />
            </Suspense>
          }
        />
        <Route
          path="blog-column-two"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogColumnTwo />
            </Suspense>
          }
        />
        <Route
          path="blog-column-three"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogColumnThree />
            </Suspense>
          }
        />
        <Route
          path="blog-column-four"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseBlogColumnFour />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense element={<Loading />}>
              <OnlineCourseContact />
            </Suspense>
          }
        />

        <Route
          path="children-education"
          element={
            <Suspense element={<Loading />}>
              <ChildrenEducation />
            </Suspense>
          }
        />
        <Route
          path="health-coach"
          element={
            <Suspense element={<Loading />}>
              <HealthCoach />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate to="/404" />} />
      </Route> */}

      {/* <Route
        path="/404"
        element={
          <Suspense element={<Loading />}>
            <NotFound />
          </Suspense>
        }
      ></Route> */}
    </Routes>
  );
}

export default App;
