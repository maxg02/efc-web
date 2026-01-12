import CustomButton from "@/components/CustomButton";

function Inicio() {
    return (
        <section className="bg-custom-blue text-white flex flex-col items-center px-3">
            <h1>
                Bienvenido a <span className="font-bold">EFC</span>
            </h1>
            <p className="text-center">
                Un espacio donde el amor de Dios transforma vidas. Nos alegra que estés aqui
            </p>
            <CustomButton>Conócenos</CustomButton>
        </section>
    );
}

export default Inicio;
