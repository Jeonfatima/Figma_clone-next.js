import React from 'react'


interface Post {
    title: string;
    date: string;
    category: string;
    description: string;
  }
  

const RecentPosts = () => {
const posts : Post[] = [
    {
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        category: "Design, Pattern",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.."
      },
      {
        title: "Making a design system from scratch",
        date: "12 Feb 2020",
        category: "Design, Pattern",
        description: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.."
      },
]

  return (
    <div className="bg-[#f4e2e2] py-12">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-black">Recent Post</h2>
      <a href="#" className="text-[#f98b8b] font-bold text-xl hover:underline mr-12">View all</a>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {posts.map((post, index) => (
        <div
          key={index}
          className="h-[300px] w-[90%]  p-6 border rounded-lg shadow-md bg-white flex flex-col justify-between">
          <h3 className="text-2xl font-bold text-black">{post.title}</h3>
          <p className="text-lg font-semibold text-gray-500">{post.date}  |  {post.category}</p>
          <p className="text-gray-600 mt-2">{post.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>
  )
}

export default RecentPosts
