import { Navigate, Route, Routes } from "react-router-dom";
import { appConfig } from "../../../../Utils/AppConfig";
import { Main as Remember } from "../../../Memorials/HomeArea/Main/Main";
import { Main } from "../../HomeArea/Main/Main";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import "./Router.scss";

export function Router(): JSX.Element {
    return (
        <div className="Router">
            <Routes>
                <Route path={appConfig.HomeRoute} element={<Main />}></Route>
                {/* <Route path={appConfig.RememberRoute} element={<Remember />}></Route> */}

                <Route path={appConfig.RememberRoute + ":_id"} element={<Remember />}></Route>

                {/* Default Routes */}
                <Route path="/" element={<Navigate to={appConfig.HomeRoute} />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}
