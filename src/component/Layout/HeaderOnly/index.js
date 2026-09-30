import Header from "./Header";

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <main>
                <div className="container">
                    <div className="content">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    )
}
export default HeaderOnly;
