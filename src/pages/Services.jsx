// import { Globe, Search, Video, BellRing, Newspaper, Sliders } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Services() {
//   return (
//     <div className="bg-gray-900 min-h-screen text-white py-12">
//       <div className="container mx-auto px-6">
        
//         {/* Header Section */}
//         <motion.div 
//           className="text-center mb-12"
//           initial={{ opacity: 0, y: -30 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="text-5xl font-bold">
//             <span className="text-blue-400">NewsScope</span> Services
//           </h1>
//           <p className="text-gray-400 mt-3 text-lg">
//             Bringing you trusted news, real-time updates, and in-depth insights.
//           </p>
//         </motion.div>

//         {/* Services Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
//           {/* Left Column */}
//           <div className="space-y-6">
//             {servicesData.slice(0, 3).map((service, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-6 hover:bg-gray-700 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <service.icon className={`w-14 h-14 ${service.color}`} />
//                 <div>
//                   <h3 className="text-xl font-semibold">{service.title}</h3>
//                   <p className="text-gray-400">{service.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Column */}
//           <div className="space-y-6">
//             {servicesData.slice(3, 6).map((service, index) => (
//               <motion.div 
//                 key={index}
//                 className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-6 hover:bg-gray-700 transition duration-300"
//                 whileHover={{ scale: 1.05 }}
//               >
//                 <service.icon className={`w-14 h-14 ${service.color}`} />
//                 <div>
//                   <h3 className="text-xl font-semibold">{service.title}</h3>
//                   <p className="text-gray-400">{service.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//         </div>

//         {/* Subscription Section (Now in Blue) */}
//         <motion.section 
//           className="bg-blue-600 p-10 mt-16 rounded-lg shadow-md text-center"
//           initial={{ opacity: 0, y: 50 }} 
//           animate={{ opacity: 1, y: 0 }} 
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl font-bold mb-4">Stay Updated with Tailored News</h2>
//           <p className="text-white mb-4">Select your preferred category and subscribe for updates.</p>
          
//           <div className="flex flex-wrap justify-center gap-4 mb-4">
//             {["Politics", "Tech", "Sports", "Finance", "Entertainment"].map((category, i) => (
//               <button key={i} className="bg-gray-800 px-4 py-2 rounded-full text-white hover:bg-gray-700">
//                 {category}
//               </button>
//             ))}
//           </div>

//           <div className="flex justify-center">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className="px-4 py-3 w-72 border rounded-l-lg focus:outline-none"
//             />
//             <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-black transition">
//               Subscribe
//             </button>
//           </div>
//         </motion.section>

//       </div>
//     </div>
//   );
// }

// // Services Data
// const servicesData = [
//   { title: "Global News", description: "Comprehensive global coverage across various topics.", icon: Globe, color: "text-blue-400" },
//   { title: "Investigative Journalism", description: "Deep-dive reports exposing the truth.", icon: Search, color: "text-green-400" },
//   { title: "Live Coverage", description: "Watch breaking news unfold in real-time.", icon: Video, color: "text-purple-400" },
//   { title: "Real-time Alerts", description: "Get notified about the latest news instantly.", icon: BellRing, color: "text-yellow-400" },
//   { title: "Editorial Analysis", description: "Expert opinions on trending global issues.", icon: Newspaper, color: "text-indigo-400" },
//   { title: "Custom News Feed", description: "Personalized updates based on your interests.", icon: Sliders, color: "text-orange-400" },
// ];


import { Globe, Search, Video, BellRing, Newspaper, TrendingUp, ShieldCheck, Users, Activity, BarChart } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="bg-blue-100 min-h-screen">
      
      {/* Hero Section */}
      <motion.section 
  className="relative w-full py-20 text-center bg-blue-100 text-white"
  initial={{ opacity: 0 }} 
  animate={{ opacity: 1 }} 
  transition={{ duration: 1 }}
>
  <h1 className="text-5xl font-extrabold text-gray-800">
    Our <span className="text-red-500">Services</span>
  </h1>
  <p className="text-lg text-gray-700 mt-3">
    Stay informed with the latest updates, real-time reports, and exclusive insights.
  </p>
</motion.section>


      {/* News Statistics Section */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <Users className="w-14 h-14 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">500K+</h3>
            <p className="text-gray-300">Active Readers</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <Activity className="w-14 h-14 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">10,000+</h3>
            <p className="text-gray-300">Daily Articles Published</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
            <BarChart className="w-14 h-14 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold">200+</h3>
            <p className="text-gray-300">Reporters & Journalists</p>
          </div>

        </div>
      </div>

      {/* Category Filters */}
      <div className="container mx-auto px-6 py-8 text-center">
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Breaking News", "Investigations", "Live Coverage", "Analysis", "Finance"].map((category) => (
            <button 
              key={category} 
              className={`px-4 py-2 rounded-full text-lg transition ${selectedCategory === category ? "bg-red-600 text-white" : "bg-gray-700 text-gray-300 hover:bg-gray-600"}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData
          .filter((service) => selectedCategory === "All" || service.category === selectedCategory)
          .map((service, index) => (
            <motion.div 
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-6 hover:shadow-xl transition text-white"
              whileHover={{ scale: 1.05 }}
            >
              <service.icon className={`w-14 h-14 ${service.color}`} />
              <div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            </motion.div>
          ))
        }
      </div>

      {/* Subscription & Notification Settings */}
      <div className="container mx-auto px-6 py-12">
  <div className="bg-blue-200  rounded-lg shadow-lg text-center">
    {/* <h2 className="text-3xl font-bold mb-4 text-gray-900">📩 Stay Updated</h2> */}
    {/* <p className="text-gray-600 mb-4">
      Subscribe to get personalized news alerts directly to your inbox.
    </p> */}

    {/* Subscription Type Buttons */}
    {/* <div className="flex justify-center gap-4 mb-6">
      {["Daily", "Weekly", "Breaking Alerts"].map((type) => (
        <button
          key={type}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {type}
        </button>
      ))}
    </div> */}

    {/* Email Subscription Box */}
    {/* <div className="flex justify-center">
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-3 w-72 border border-gray-500 rounded-l-lg focus:outline-none bg-white text-gray-900"
      />
      <button className="bg-red-600 text-white px-6 py-3 rounded-r-lg hover:bg-red-700 transition">
        Subscribe
      </button>
    </div> */}
  </div>

</div>


    </div>
  );
}

// Services Data
const servicesData = [
  { title: "Breaking News", description: "Stay informed with up-to-the-minute updates.", category: "Breaking News", icon: BellRing, color: "text-red-500" },
  { title: "Investigative Reports", description: "Uncover hidden truths with deep analysis.", category: "Investigations", icon: Search, color: "text-blue-500" },
  { title: "Live Video Coverage", description: "Watch events unfold in real-time.", category: "Live Coverage", icon: Video, color: "text-green-500" },
  { title: "Editorial Analysis", description: "Expert opinions on global matters.", category: "Analysis", icon: Newspaper, color: "text-yellow-500" },
  { title: "Financial Insights", description: "Track the stock market and financial trends.", category: "Finance", icon: TrendingUp, color: "text-orange-500" },
  { title: "Fact-Checked News", description: "Verified and reliable journalism.", category: "Investigations", icon: ShieldCheck, color: "text-purple-500" },
];


