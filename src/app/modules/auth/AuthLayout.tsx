import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { toAbsoluteUrl } from "../../../_metronic/helpers";

const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      root.style.height = "100%";
    }
    return () => {
      if (root) {
        root.style.height = "auto";
      }
    };
  }, []);

  return (
    <div
      className="d-flex flex-column flex-lg-row flex-column-fluid h-100"
      style={{
        backgroundImage: `url(${toAbsoluteUrl("media/auth/bg9.jpg")})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
      }}
    >
      {/* begin::Body */}
      <div className="d-flex flex-column justify-content-center flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
        {/* begin::Form */}
        <div className="d-flex  justify-content-center flex-center flex-column flex-lg-row-fluid">
          {/* begin::Wrapper */}
          <div className="w-lg-500px border p-10 m-4 bg-white shadow rounded">
            <Outlet />
          </div>
          {/* end::Wrapper */}
        </div>
        {/* end::Form */}

        
      </div>
      {/* end::Body */}

      {/* begin::Aside */}
      {/* You can add an aside content here if needed */}
      {/* end::Aside */}
    </div>
  );
};

export { AuthLayout };
