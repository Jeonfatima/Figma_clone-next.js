import React from 'react'
import Image from 'next/image';

interface Work {
    image: string;
    title: string;
    category: string;
    description: string;
  }
  

const FeaturedWorks = () => {

    const works: Work[] = [
        { image: "/work1.jpg", title: "Designing Dashboards", category: "Dashboard", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor." },
        { image: "/work2.jpg", title: "Designing Dashboards", category: "Dashboard", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor." },
        { image: "/work3.jpg", title: "Designing Dashboards", category: "Dashboard", description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor." },
      ];
    
  return (
<div>
  <section className="p-[8%] bg-[#faf5f5]">
    <h2 className="text-2xl font-bold mb-6 text-black">Featured Works</h2>
    <div className="space-y-6">
      {works.map((work, index) => (
        <div key={index} className="flex items-start space-x-6">
          <Image
            src={work.image}
            alt={work.title}
            width={350}
            height={350}
            className="object-cover rounded"
          />
          <div>
            <h3 className="text-xl font-extrabold text-black">{work.title}</h3>
            <div className="flex items-center space-x-3 mt-1">
              <span className="px-2 py-1 text-xs font-bold text-white bg-[#f98585] rounded-xl">
                2020
              </span>
              <p className="text-sm text-gray-500">{work.category}</p>
            </div>
            <p className="text-gray-600 mt-2">{work.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
</div>
)}


export default FeaturedWorks
