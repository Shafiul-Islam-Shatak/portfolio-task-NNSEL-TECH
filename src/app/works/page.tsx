import PageHeader from "../components/PageHeader/PageHeader";
import Works from "../components/Works/Works";

const works = () => {
    return (
        <div>
            {/* common for all page */}
            <PageHeader
            title="My Works"
            desciption="Showcase About Works"
            
            />

            <Works/>
        </div>
    );
};

export default works;