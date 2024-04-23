import React from 'react'
import './courses.scss'
import {Text} from "../../components/Text"
import {Button} from "../../components/button"
import Card from "../../components/card"
import Footer from "../../components/footer"
import { Link } from 'react-router-dom'


function Courses() {
  return (
    <>
     <div className="course_hero">
        <div className="courses_text">
          <div>
          <Text as={"p"} content={"Cooking Lesson"} classnames={"course_first"}/>
          <Text as={"p"} content={"Discover the pleasure of cooking with our experienced and passionate Chefs."} classnames={"course_second"}/>
          </div>
          <Button text={"Discover our Chefs"} classname={"course_btn_hero"}/>
          </div>
      </div>
      <div className='main_course'>
        <div className='side_course'>
          <div className="course_side_title">
          <Button text={"Diary"} classname={"diary"}/>
            <img src="src/img/line.png" alt="" />
          </div>
          <Text as={"p"} content={"Filter Courses"}classnames={"filter_course"}/>
          <Text as={"p"} content={"View all Cours"} classnames={"title_course_side"}/>
          <Text as={"p"} content={"Asiatique"}/>
          <Text as={"p"} content={"BBQ"}/>
          <Text as={"p"} content={"Bakeries"}/>
          <Text as={"p"} content={"Super delicious"}/>
          <Text as={"p"} content={"Sweat food"}/>
          <Text as={"p"} content={"Culinary camp"}/>
          <Text as={"p"} content={"International cuisine"}/>
          <Text as={"p"} content={"Demonstration"}/>
          <Text as={"p"} content={"Cocktail"}/>
          <Text as={"p"} content={"Pastry"}/>
          <Text as={"p"} content={"Basic technique"}/>
          <Text as={"p"} content={"Themes"}/>
          <Text as={"p"} content={"Vegetarian"}/>
          <Text as={"p"} content={"Wines"}/>
        </div>{/* side_course */}
        <div className='main_content_course'>
            <div className="main_course_title">
              <Link to={"/editCourse"} className='course_creation_btn_link'>
              <Button text={"Course creation"} classname={"course_creation_btn"}/>
              </Link>
              <Button text={"Sort by : Featured"} classname={"sorting_course"}/>
            </div>{/* main_course_title */}
            <div className="cards_course">
              <Card url={"src/img/course_img/Rectangle 16 (1).png"} content={"Apricot Danish"} catego={"public"}/>
              <Card url={"src/img/course_img/Rectangle 16.png"} content={"Kalbi Korean"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (2).png"} content={"Chow mein"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (3).png"} content={"BBQ"} catego={"public"}/>
              <Card url={"src/img/course_img/Rectangle 16 (4).png"} content={"Steak"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (5).png"} content={"Barbecue sea food"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (3).png"} content={"BBQ"} catego={"public"}/>
              <Card url={"src/img/course_img/Rectangle 16 (4).png"} content={"Steak"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (5).png"} content={"Barbecue sea food"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (7).png"} content={"Manatthan"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (8).png"} content={"Daiquiri"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (9).png"} content={"Espresso Martini"} catego={"private"}/>
              <Card url={"src/img/course_img/Rectangle 16 (10).png"} content={"Grilling"} catego={"public"}/>
              <Card url={"src/img/course_img/Rectangle 16 (11).png"} content={"Mac & Cheese"} catego={"public"}/>
              <Card url={"src/img/course_img/Rectangle 16 (12).png"} content={"Salad caesar with chicken"} catego={"public"}/>
            <div className='more_btn'>
            <Button text={"See more course"} classname={"more_course"}/>
            </div>
            </div>{/* cards_course */}
        </div>{/* main_content_course */}
      </div>
      <Footer/>
    </>
  )
}

export default Courses