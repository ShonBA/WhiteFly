import { Footer } from "../Footer/Footer";
import { NavRouter } from "../NavRouter/NavRouter";
import { Router } from "../Router/Router";
import "./Layout.scss";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header>
                <NavRouter />
            </header>
            <main>
                <Router />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}
