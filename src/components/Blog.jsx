import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./blog.css";

//Blog Img
//Day 1
import day1Img1 from "../assets/blog/Day1/Day1-1.jpg";
import day1Img2 from "../assets/blog/Day1/Day1-2.jpg";
import day1Img3 from "../assets/blog/Day1/Day1-3.jpg";
import day1Img4 from "../assets/blog/Day1/Day1-4.jpg";
import day1Img5 from "../assets/blog/Day1/Day1-5.jpg";
import day1Img6 from "../assets/blog/Day1/Day1-6.jpg";
import day1Img7 from "../assets/blog/Day1/Day1-7.jpg";
import day1Img8 from "../assets/blog/Day1/Day1-8.jpg";
import day1Img9 from "../assets/blog/Day1/Day1-9.jpg";
import day1Img10 from "../assets/blog/Day1/Day1-10.jpg";
import day1Img11 from "../assets/blog/Day1/Day1-11.jpg";
//Day 2
import day2Img1 from "../assets/blog/Day2/Day2-1.jpeg";
import day2Img2 from "../assets/blog/Day2/Day2-2.jpg";
import day2Img3 from "../assets/blog/Day2/Day2-3.jpg";
import day2Img4 from "../assets/blog/Day2/Day2-4.jpg";
import day2Img5 from "../assets/blog/Day2/Day2-5.jpg";
import day2Img6 from "../assets/blog/Day2/Day2-6.jpg";
import day2Img7 from "../assets/blog/Day2/Day2-7.jpg";
import day2Img8 from "../assets/blog/Day2/Day2-8.jpg";
import day2Img9 from "../assets/blog/Day2/Day2-9.jpg";
import day2Img10 from "../assets/blog/Day2/Day2-10.jpeg";
import day2Img11 from "../assets/blog/Day2/Day2-11.jpg";
//Day 3
import day3Img1 from "../assets/blog/Day3/Day3-1.jpeg";
import day3Img2 from "../assets/blog/Day3/Day3-2.jpg";
import day3Img3 from "../assets/blog/Day3/Day3-3.jpg";
import day3Img4 from "../assets/blog/Day3/Day3-4.jpg";
import day3Img5 from "../assets/blog/Day3/Day3-5.jpg";
import day3Img6 from "../assets/blog/Day3/Day3-6.jpg";
import day3Img7 from "../assets/blog/Day3/Day3-7.jpg";
import day3Img8 from "../assets/blog/Day3/Day3-8.jpg";
import day3Img9 from "../assets/blog/Day3/Day3-9.jpg";
import day3Img10 from "../assets/blog/Day3/Day3-10.jpg";
import day3Img11 from "../assets/blog/Day3/Day3-11.jpg";
import day3Img12 from "../assets/blog/Day3/Day3-12.jpg";
import day3Img13 from "../assets/blog/Day3/Day3-13.jpg";
import day3Img14 from "../assets/blog/Day3/Day3-14.jpg";
//Day 4
import day4Img1 from "../assets/blog/Day4/Day4-1.jpeg";
import day4Img2 from "../assets/blog/Day4/Day4-2.jpg";
import day4Img3 from "../assets/blog/Day4/Day4-3.jpg";
import day4Img4 from "../assets/blog/Day4/Day4-4.jpg";
import day4Img5 from "../assets/blog/Day4/Day4-5.jpg";
import day4Img6 from "../assets/blog/Day4/Day4-6.jpg";
import day4Img7 from "../assets/blog/Day4/Day4-7.jpg";
import day4Img8 from "../assets/blog/Day4/Day4-8.jpg";
import day4Img9 from "../assets/blog/Day4/Day4-9.jpg";
//Day 5
import day5Img1 from "../assets/blog/Day5/Day5-1.jpg";
import day5Img2 from "../assets/blog/Day5/Day5-2.jpg";
import day5Img3 from "../assets/blog/Day5/Day5-3.jpg";
import day5Img4 from "../assets/blog/Day5/Day5-4.jpg";
import day5Img5 from "../assets/blog/Day5/Day5-5.jpg";
import day5Img6 from "../assets/blog/Day5/Day5-6.jpg";
import day5Img7 from "../assets/blog/Day5/Day5-7.jpg";
import day5Img8 from "../assets/blog/Day5/Day5-8.jpg";
//Day 6
import day6Img1 from "../assets/blog/Day6/Day6-1.jpg";
import day6Img2 from "../assets/blog/Day6/Day6-2.jpg";
import day6Img3 from "../assets/blog/Day6/Day6-3.jpg";
import day6Img4 from "../assets/blog/Day6/Day6-4.jpg";
import day6Img5 from "../assets/blog/Day6/Day6-5.jpg";
import day6Img7 from "../assets/blog/Day6/Day6-7.jpg";
import day6Img8 from "../assets/blog/Day6/Day6-8.jpg";
import day6Img9 from "../assets/blog/Day6/Day6-9.jpg";
import day6Img10 from "../assets/blog/Day6/Day6-10.jpeg";
//Day 7
import day7Img1 from "../assets/blog/Day7/Day7-1.jpg";
import day7Img2 from "../assets/blog/Day7/Day7-2.jpg";
import day7Img3 from "../assets/blog/Day7/Day7-3.jpg";
import day7Img4 from "../assets/blog/Day7/Day7-4.jpg";
import day7Img5 from "../assets/blog/Day7/Day7-5.jpg";
import day7Img6 from "../assets/blog/Day7/Day7-6.jpg";
import day7Img7 from "../assets/blog/Day7/Day7-7.jpg";

const placeholder = "https://via.placeholder.com/600x400?text=Day";

const blogDays = [
    {
    day: "Day 1",
    images: [
        day1Img1, day1Img2, day1Img3, day1Img4, day1Img5,
        day1Img6, day1Img7, day1Img8, day1Img9, day1Img10, day1Img11],
        summary: "We started our journey at Luneta Park, where we saw the iconic statue of Dr. Jose Rizal, a symbol of Philippine independence and patriotism. As we walked around, we spotted a historic church facing the Palacio del Gobernador and even witnessed a traditional kalesa passing by. Our next stop was Fort Santiago, a significant historical site where Dr. Rizal was imprisoned before his execution — it was a humbling and educational experience."
    },  
    {
    day: "Day 2",
        images: [ 
        day2Img1, day2Img2, day2Img3, day2Img4, day2Img5,
        day2Img6, day2Img7, day2Img8, day2Img9, day2Img10, day2Img11],
        summary: "Our second day took us to the Subic Bay Exhibition and Convention Center, where we explored an impressive art gallery filled with vibrant paintings depicting Filipino culture, heritage, and daily life — from abstract impressions to realistic portraits and landscapes. Next, we visited the Subic Law Enforcement Office, where officers gave us a briefing on how they manage security, traffic, and maritime operations in the area. We even got to see the monitoring office that oversees all the ships entering and leaving Subic. The day ended with a relaxing lunch by the ocean, offering a stunning view and fresh sea breeze."
    },
    {
    day: "Day 3",
        images: [
        day3Img1, day3Img2, day3Img3, day3Img4, day3Img5,
        day3Img6, day3Img7, day3Img8, day3Img9, day3Img10, day3Img11, day3Img12, day3Img13, day3Img14],
        summary: "We visited the National Museum of Natural History, a beautifully designed building featuring a striking DNA Tree of Life structure at its center. Inside, we explored exhibits showcasing various corals, fossils, preserved animals, and miniature ecosystems, giving us insight into the Philippines’ rich biodiversity. We then toured the Museo ni Manuel L. Quezon, where we viewed the late president's personal belongings, historic documents, and portraits. Our final stop was the Presidential Car Museum, which featured the vintage vehicles used by past Philippine presidents."
    },
    {
    day: "Day 4",
        images: [
        day4Img1, day4Img2, day4Img3, day4Img4, day4Img5,
        day4Img6, day4Img7, day4Img8, day4Img9],
        summary: "We toured Hytec Power Inc., a tech company specializing in innovative IoT solutions. They demonstrated smart devices designed for homes, transportation, and healthcare. We saw cutting-edge technology in action, from automated sensors to smart robots — a glimpse into the future of digital living and a reminder of how far innovation can go."
    },
    {
    day: "Day 5",
        images: [
        day5Img1, day5Img2, day5Img3, day5Img4, day5Img5,
        day5Img6, day5Img7, day5Img8],
        summary: "We began the day with a visit to the MMDA headquarters, where we learned how they monitor and manage traffic across the city using a sophisticated network of CCTV feeds and data systems. It was fascinating to see how technology and coordination play a major role in maintaining order on the busy streets of Metro Manila. Afterwards, we headed to the LRT Line 2, where we got to ride the train — an eye-opening experience that gave us a glimpse into the daily commute of thousands of Filipinos. It helped us appreciate the challenges and efficiency of urban public transportation."
    },
    {
    day: "Day 6",
        images: [
        day6Img1, day6Img2, day6Img3, day6Img4, day6Img5,
        day6Img7, day6Img8, day6Img9, day6Img10],
        summary: "We journeyed to the cool highlands of Baguio, starting our day in La Trinidad at the serene Chinese Bell Church, where intricate architecture and peaceful surroundings offered both cultural appreciation and scenic views. Later, we visited the prestigious Philippine Military Academy (PMA). Surrounded by mountains, we explored the academy grounds, saw various military aircraft, and learned about the lives of the country’s future defenders."
    },
  {
    day: "Day 7",
        images: [
        day7Img1, day7Img2, day7Img3, day7Img4, day7Img5,
        day7Img6, day7Img7],
        summary: "Our final day was all about fun and reflection. We enjoyed a variety of leisure activities in Baguio, taking in the mountain air and trying local treats. Before heading home, we bought souvenirs to remember the trip and to share with our loved ones — a perfect end to an unforgettable tour."
  }
];

const Blog = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgUrl) => {
    setModalImage(imgUrl);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000
  };

  return (
    <div className="blog">
      <h1 className="blog-title">Educational Tour Blog</h1>
      {blogDays.map((day, index) => (
        <div className="blog-day fade-in" key={index}>
          <h2>{day.day}</h2>
          <Slider {...settings} className="slider">
            {day.images.map((img, i) => (
              <div key={i} className="slide-wrapper">
                <img
                  src={img}
                  alt={`${day.day} ${i + 1}`}
                  className="slide-image"
                  loading="lazy"
                  onClick={() => openModal(img)}
                />
              </div>
            ))}
          </Slider>
          <p className="day-summary">{day.summary}</p>
        </div>
      ))}

      {/* Modal */}
      {modalImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={modalImage} alt="Preview" />
            <button className="close-button" onClick={closeModal}>×</button>
          </div>
        </div>
      )}

      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>↑</button>
    </div>
  );
};

export default Blog;
