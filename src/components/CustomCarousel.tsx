import * as React from "react";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import ex1 from "@/assets/ex1.jpeg";
import ex2 from "@/assets/ex2.jpeg";
import ex3 from "@/assets/ex3.jpeg";

function CustomCarousel() {
    return (
        <Carousel
            className="w-full max-w-xs"
            opts={{
                loop: true,
            }}
        >
            <CarouselContent className="-ml-5">
                {[ex1, ex2, ex3].map((_, index) => (
                    <CarouselItem key={index} className="pl-5">
                        <div className="p-1 overflow-hidden aspect-[1/1.5] flex justify-center bg-custom-orange/40">
                            <img src={_} className="object-fill w-auto h-full" />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}

export default CustomCarousel;
