import CustomButton from "@/components/CustomButton";
import { CustomCard } from "@/components/CustomCard";
import bgBlack from "@/assets/bg-black.png";

function Doctrine() {
    return (
        <section className="flex flex-col items-center p-8 z-10 bg-white gap-y-7">
            <div className="flex flex-col items-center px-5">
                <h1 className="font-bold">¡Puedes Consultar Nuestras Predicas!</h1>
                <p className="text-center">Encuentra aquí las notas de nuestras ultimas predicas y consulta cualquier duda</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative px-5 w-full">
                <CustomCard />
                <CustomCard />
                <CustomCard />
                <img
                    src={bgBlack}
                    alt="bg"
                    className="absolute left-0 -top-8 z-0 h-full object-cover"
                />
            </div>            
            <CustomButton>Ver Mas</CustomButton>
        </section>
    );
}

export default Doctrine;
