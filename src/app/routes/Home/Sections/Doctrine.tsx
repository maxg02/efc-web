import CustomButton from "@/components/CustomButton";
import jesusIMG from "@/assets/jesus.png";
import crossBG from "@/assets/bg-cross.svg";

function Doctrine() {
    return (
        <section className="flex flex-col items-center p-5 z-10 bg-white gap-y-7">
            <div className="flex flex-col items-center">
                <h1 className="font-bold">Lo Que Creemos</h1>
                <ul className="list-disc">
                    <li>La biblia como única autoridad</li>
                    <li>La salvación por gracia mediante la fe</li>
                    <li>El poder del Espíritu Santo</li>
                    <li>La segunda venida de Cristo</li>
                </ul>
            </div>
            <div className="w-70 relative">
                <img src={jesusIMG} alt="Jesus" className="z-10 relative" />
                <img
                    src={crossBG}
                    alt="bg"
                    className="absolute -left-20 -bottom-2 z-0 h-[55%] opacity-40"
                />
            </div>
            <CustomButton>Doctrinas Completas</CustomButton>
        </section>
    );
}

export default Doctrine;
