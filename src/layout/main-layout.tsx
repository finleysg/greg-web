import "react-toastify/dist/ReactToastify.css"

import { useRoutes } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import { HomePage } from "../pages/home"
import { ProjectPhotoPage } from "../pages/project-photo"
import { ProjectPhotosPage } from "../pages/project-photos"
import { SignInPage } from "../pages/signin"
import { UploadPhotoPage } from "../pages/upload-photo"
import { Footer } from "./footer"
import { Header } from "./header"

const routes = () => {
  return [
    { path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
    { path: "/signin", element: <SignInPage /> },
    { path: "/projects/:category", element: <ProjectPhotosPage /> },
    { path: "/projects/:category/:id", element: <ProjectPhotoPage /> },
    { path: "/upload", element: <UploadPhotoPage /> },
  ]
}

export function MainLayout() {
  const routing = useRoutes(routes())
  return (
    <div className="dark:bg-black min-h-screen relative">
      <Header />
      {routing}
      <Footer />
      <ToastContainer autoClose={3000} hideProgressBar={true} newestOnTop={true} />
    </div>
  )
}
