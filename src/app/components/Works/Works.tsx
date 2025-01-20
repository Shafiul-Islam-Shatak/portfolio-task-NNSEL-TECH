import WorkCard from "./WorkCard";
import work1 from "../../../../public/assets/works/work1.png";
import work2 from "../../../../public/assets/works/work2.png";
import work3 from "../../../../public/assets/works/work3.png";
import work4 from "../../../../public/assets/works/work4.png";
import work5 from "../../../../public/assets/works/work5.png";
import work6 from "../../../../public/assets/works/work6.png";
import work7 from "../../../../public/assets/works/work7.png";
import work8 from "../../../../public/assets/works/work8.png";

const Works = () => {
    return (
        <div>
            {/* 1st row */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* 1st work */}
                <WorkCard
                    title="Orvillebury"
                    img={work1}
                    color="red"
                />
                {/* 2nd work */}
                <WorkCard
                    title="West Lavada"
                    img={work2}
                    color="green"
                />
                {/* 3rd work */}
                <WorkCard
                    title="Rempelshire"
                    img={work3}
                    color="aqua"
                />

            </div>

            {/* 2nd row */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* 4th work */}
                <WorkCard
                    title="Delfinaland"
                    img={work4}
                    color="lime"
                />
                {/* 5th work */}
                <WorkCard
                    title="Buckridgeburgh"
                    img={work5}
                    color="fuchsia"
                />
            </div>

            {/* 3rd row */}
            <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* 6 work */}
                <WorkCard
                    title="Pfefferstad"
                    img={work6}
                    color="black"
                />
                {/* 7 work */}
                <WorkCard
                    title="South Adrienne"
                    img={work7}
                    color="purple"
                />
                {/* 8 work */}
                <WorkCard
                    title="Lake Trevor"
                    img={work8}
                    color="maroon"
                />

            </div>

            <button className='bg-transparent border border-[#FF9142] text-[#FF9142] py-4 px-10 rounded-[30px] mx-auto flex justify-center mt-[80px] mb-10'>
                <h1>Load more works</h1>
            </button>
        </div>
    );
};

export default Works;