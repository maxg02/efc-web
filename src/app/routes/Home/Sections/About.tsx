import CustomButton from "@/components/CustomButton";
import pastoresIMG from "@/assets/pastores.png";
import bgAzul from "@/assets/bg-azul.png";
import bgBlanco from "@/assets/bg-blanco.png";

function About() {
    return (
        <section className="flex flex-col items-center relative">
            <img src={bgAzul} className="absolute -top-7 -z-10 min-w-400" />
            <div className="bg-custom-blue text-white flex flex-col items-center px-5 pt-4">
                <h1>
                    Bienvenido a <span className="font-bold">EFC</span>
                </h1>
                <p className="text-center mb-6">
                    Un espacio donde el amor de Dios transforma vidas. Nos alegra que estés aqui
                </p>
                <CustomButton>Conócenos</CustomButton>
                <img src={pastoresIMG} alt="pastores" className="mt-3.5" />
            </div>
            <div className="py-6 px-5 bg-white relative flex justify-center">
                <img src={bgBlanco} className="absolute -top-7 min-w-400" />
                <p className="mb-0! text-black text-justify z-10">
                    En nuestra iglesia, cada persona importa, cada corazón es valorado y cada vida es una
                    oportunidad para experimentar el poder del Evangelio. Explora nuestra página y conoce
                    más sobre quiénes somos, qué creemos y cómo puedes formar parte de nuestra comunidad.
                </p>
            </div>
        </section>
    );
}

export default About;
