import React from 'react'
import OwnerImg from '../assets/owner-removebg-preview.png'

const Owner = () => {
    return (
        <section className="bg-white py-10 px-4 flex flex-col items-center" id='about'>
            <div className="max-w-2xl w-full flex flex-col md:flex-row items-center gap-8 shadow-lg rounded-xl p-6 bg-gray-50">
                <img
                    src={OwnerImg}
                    alt="Owner"
                    className="w-40 h-40 rounded-full object-cover border-4 border-orange-400 shadow-md mb-4 md:mb-0"
                />
                <div className="flex-1 text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Mr. Ajay pal</h2>
                    <h3 className="text-lg text-orange-600 font-semibold mb-2">Owner & Founder</h3>
                    <p className="text-gray-700 mb-3">
                        Mr. Ajay Pal, the founder and owner of Shree Vinayak Fabrication, brings over 25 years of hands-on experience in welding and metal fabrication. Known for his skilled craftsmanship and unwavering commitment to quality, he has built a trusted name in the industry. His leadership, vision, and dedication to customer satisfaction are the driving forces behind the success and reputation of our business.
                    </p>
                    <p className="text-gray-600 text-sm">
                        "Every project shows our hard work and our promise to give the best to our customers. We believe in quality, trust, and making sure our customers are happy with our work." - Mr. Ajay Pal
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Owner;