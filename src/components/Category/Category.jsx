import React from "react";
// import "./Category.css";
import firstimg from "../../img/category-1.jpg";
import secimg from "../../img/category-2.jpg";
import thirdimg from "../../img/category-3.jpg";
import fourthimg from "../../img/category-4.jpg";

const Category = () => {
  return (
    <>
      <div class="category">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-4">
              <div class="category-img">
                <img src={firstimg} alt="" />
                <a class="category-name" href="">
                  <h2>Category Name</h2>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="category-img">
                <img src={secimg} alt="" />
                <a class="category-name" href="">
                  <h2>Category Name</h2>
                </a>
              </div>
              <div class="category-img">
                <img src={thirdimg} alt="" />
                <a class="category-name" href="">
                  <h2>Category Name</h2>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="category-img">
                <img src={fourthimg} alt="" />
                <a class="category-name" href="">
                  <h2>Category Name</h2>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
