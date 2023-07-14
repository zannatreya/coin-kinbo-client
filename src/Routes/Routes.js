import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
// import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <DisplayError></DisplayError>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //     {
      //       path: "/blogs",
      //       element: <Blogs></Blogs>,
      //     },
      //     {
      //       path: "/allparts",
      //       element: <AllParts></AllParts>,
      //     },
      //     {
      //       path: "/login",
      //       element: <Login></Login>,
      //     },
      //     {
      //       path: "/signup",
      //       element: <SignUp></SignUp>,
      //     },
      //     {
      //       path: "/portfolio",
      //       element: <MyPortfolio></MyPortfolio>,
      //     },
      //     {
      //       path: "/purchase/:id",
      //       element: <Purchase></Purchase>,
      //     },
      //   ],
      // },
      // {
      //   path: "/dashboard",
      //   element: (
      //     <PrivateRoute>
      //       <DashboardLayout></DashboardLayout>
      //     </PrivateRoute>
      //   ),
      //   errorElement: <DisplayError></DisplayError>,
      //   children: [
      //     {
      //       path: "/dashboard",
      //       element: <MyProfile></MyProfile>,
      //     },
      //     {
      //       path: "/dashboard/addparts",
      //       element: (
      //         <AdminRoute>
      //           <AddParts></AddParts>
      //         </AdminRoute>
      //       ),
      //     },
      //     {
      //       path: "/dashboard/myorders",
      //       element: <MyOrders></MyOrders>,
      //     },
      //     {
      //       path: "/dashboard/manageorders",
      //       element: (
      //         <AdminRoute>
      //           {" "}
      //           <ManageOrders></ManageOrders>
      //         </AdminRoute>
      //       ),
      //     },
      //     {
      //       path: "/dashboard/addreview",
      //       element: <AddReview></AddReview>,
      //     },
      //     {
      //       path: "/dashboard/managetools",
      //       element: (
      //         <AdminRoute>
      //           {" "}
      //           <ManageTools></ManageTools>
      //         </AdminRoute>
      //       ),
      //     },
      //     {
      //       path: "/dashboard/payment/:id",
      //       element: <Payment></Payment>,
      //     },
      //     // {
      //     //   path: "/dashboard/allusers",
      //     //   element: <AdminsAndUsers></AdminsAndUsers>,
      //     // },
      //     {
      //       path: "/dashboard/allusers",
      //       element: (
      //         <AdminRoute>
      //           <AllUsers></AllUsers>
      //         </AdminRoute>
      //       ),
      //     },
    ],
  },
]);

export default router;
