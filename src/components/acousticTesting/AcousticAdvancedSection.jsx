import React from 'react';
import AcousticImage1 from '../../assets/Images/ultrasoundtest1.png';
import AcousticImage2 from '../../assets/Images/ultrasoundtest2.webp';
import AcousticImage3 from '../../assets/Images/ultrasoundtest3.jpg';

const AcousticAdvancedSection = () => {
  return (
    <div className="w-full px-[5vw] py-12 bg-white space-y-16">

      {/* What You Gain by Partnering with Sigma Scientific */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img src={AcousticImage1} alt="Gain Benefits" className="w-full rounded-2xl shadow-md" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">What You Gain by Partnering with Sigma Scientific</h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li><strong>Effortless compliance:</strong> Leave the complex paperwork to us. We provide detailed reports approved by the FDA and international standards.</li>
            <li><strong>Fast and accurate results:</strong> Accelerate your product launch with precise acoustic intensity and power measurement using advanced technology.</li>
            <li><strong>Streamlined processes:</strong> Our reports are ready for global submission, including the FDA 510(k) clearance.</li>
          </ul>
        </div>
      </div>

      {/* Take Your Devices to the Next Level! */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Take Your Devices to the Next Level!</h2>
          <p className="text-gray-700 text-lg">
            Imagine the peace of mind knowing your device meets and exceeds all FDA safety standards. At Sigma Scientific, we help you take your product from the lab to the market quickly and smoothly.
          </p>
        </div>
        <img src={AcousticImage2} alt="Device Upgrade" className="w-full rounded-2xl shadow-md" />
      </div>

      {/* Our Guarantee */}
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-700 mb-4">Our Guarantee</h2>
        <p className="text-gray-700 text-lg">
          We’re so confident in the quality of our services that we offer a full satisfaction guarantee. If you don’t get the results you expect, we’ll refund your money!
        </p>
      </div>

      {/* Ready to Take Your Devices to the Next Level? */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img src={AcousticImage3} alt="Contact Us" className="w-full rounded-2xl shadow-md" />
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">Ready to Take Your Devices to the Next Level?</h2>
          <p className="text-gray-700 text-lg mb-4">
            At Sigma Scientific, we help you meet the toughest regulations with our acoustic output measurement services. Trust our FDA-accredited team to guarantee your product’s success.
          </p>
          <div className="text-gray-700 text-md space-y-2">
            <p><strong>Address:</strong> 490 Sawgrass Corporate Parkway, Suite 130 Sunrise, FL 33325</p>
            <p><strong>Phone:</strong> (305) 239-4441</p>
            <p><strong>Email:</strong> sigmabiomedical@gmail.com</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AcousticAdvancedSection;
