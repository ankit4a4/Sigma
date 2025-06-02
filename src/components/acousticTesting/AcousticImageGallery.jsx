import React from "react";
import img1 from "../../assets/Images/AcousticOutput1.jpg";
import img2 from "../../assets/Images/AcousticOutput2.jpg";
import img3 from "../../assets/Images/AcousticOutput3.jpg";
import img4 from "../../assets/Images/AcousticOutput4.webp";
import img5 from "../../assets/Images/AcousticOutput5.jpg";
import img6 from "../../assets/Images/AcousticOutput6.jpg";
import img7 from "../../assets/Images/AcousticOutput7.webp";
import img8 from "../../assets/Images/AcousticOutput8.jpeg";

const AcousticImageGallery = () => {
    const images = [
        { src: img1 },
        { src: img2 },
        { src: img3 },
        { src: img4 },
        { src: img5 },
        { src: img6 },
        { src: img7 },
        { src: img8 },
    ];

    return (
        <div className="px-[5vw] py-[6vh] bg-white">
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                    Acoustic Output Test
                </h2>
                <p className="text-gray-600 text-sm md:text-base">
                    Sigma Scientific Services - FDA-Accredited Testing for Medical Devices &gt; Acoustic Output Test
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-xl shadow-lg"
                    >
                        <img
                            src={img.src}
                            alt={`Acoustic ${index + 1}`}
                            className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AcousticImageGallery;
