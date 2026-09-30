import Header from "./Header";
import Sidebar from "./Sidebar";

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <Sidebar />
                    <div className="content">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default DefaultLayout;
