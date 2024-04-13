import { Route, Routes } from "react-router-dom";
import { appConfig } from "../../../../Utils/AppConfig";
import { Navbar } from "../Navbar/Navbar";
import { RememberNavbar } from "../RememberNavbar/RememberNavbar";
import "./NavRouter.scss";

export function NavRouter(): JSX.Element {
    return (
        <div className="NavRouter">
            <Routes>
                <Route path={"*"} element={<Navbar />}></Route>
                <Route path={appConfig.rememberRoute + ":_id/*"} element={<RememberNavbar />}></Route>
            </Routes>
        </div>
    );
}
