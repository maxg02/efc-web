import CustomButton from "@/components/CustomButton";
import CustomCarousel from "@/components/CustomCarousel";
import bgIMG from "@/assets/BGSec2.png";

function Actividades() {
    return (
        <section
            className="flex flex-col items-center p-5 z-500 bg-[#d9d9d9] relative gap-y-7 bg-size-[auto_110%] bg-no-repeat"
            style={{ backgroundImage: `url(${bgIMG})` }}
        >
            <div>
                <h1 className="font-bold mb-2">
                    Próximas <span className="bg-custom-orange text-white px-0.5">Actividades</span>
                </h1>
                <p className="text-center">
                    Siempre estamos en movimiento, compartiendo, sirviendo y celebrando juntos. Consulta
                    nuestro calendario de actividades y únete a lo que Dios está haciendo.
                </p>
            </div>
            <div className="w-60">
                <CustomCarousel />
            </div>
            <CustomButton>Ver Calendario</CustomButton>
        </section>
    );
}

export default Actividades;
