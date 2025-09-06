import { RouterProvider } from "react-router-dom";
import { myRoutes } from "./routes/MyRoutes";

const App = () => {
  return (
    <div>
      <RouterProvider router={myRoutes} />
    </div>
  );
};

export default App;

// nodejs download ==>
// nodejs downlaod >> select LTS version >> download msi installer
// nodejs installtion  ==>
// all next and then install

// open cmd and type node -v

// mongodb compass download --> https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-8.0.11-signed.msi

// steps to install mongodb
// next >> next >> accept agreement >> complete/total >> next >> install

// https://downloads.mongodb.com/compass/mongodb-compass-1.46.5-win32-x64.exe
// downalod this only when pop does not show
