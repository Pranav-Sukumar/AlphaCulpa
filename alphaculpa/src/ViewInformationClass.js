import './App.css';
import './view_information.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function ViewInformationClass({kp, setKP}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div class="container-vi">
      <div class="header-vi">
        <Link to="/">
          <img src={require(`./images/logo.png`)} alt="Logo" class="logo" />
        </Link>
        <div class="karma-points-vi">{kp} Karma points</div>
      </div>
      <div class="info-vi">
        <div class="coursename-vi">COMS 4731 Computer Vision Ⅱ</div>
        <hr />
        <div class="subinfo-vi">
          <div class="profname-vi">Professor: Carl Vondrik</div>
          <div class="departmentname-vi">Engineering / Computer Science</div>
        </div>
        <hr />
      </div>

      <div class="section-all-vi">
        {/* Syllabus Section */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Syllabus</div>
            <div class="right-vi">
              <button 
                class={`view-btn-vi ${isExpanded ? 'active' : ''}`}
                onClick={toggleExpand}
              >
                {isExpanded ? 'CLOSE' : 'VIEW'}
              </button>
              <img class="lockimage-vi" src={require(`./images/unlock.png`)} alt="Unlock Image" />
            </div>
          </div>
          <div class={`section-info-vi ${isExpanded ? 'expanded' : ''}`}>
            <div class="description-vi">
              syllabus info
            </div>
          </div>
        </div>

        {/* Lecture Style Section - Always Collapsed */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Lecture Style</div>
            <div class="right-vi">
              <button class="purchase-btn-vi">PURCHASE FOR 10 POINTS</button>
              <img class="lockimage-vi" src={require(`./images/lock.png`)} alt="Lock Image" />
            </div>
          </div>
          <div class="section-info-vi">
            <div class="description-vi" style={{ display: 'none' }}>
              syllabus info
            </div>
          </div>
        </div>

        {/* Grade Data Section - Always Collapsed */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Grade Data</div>
            <div class="right-vi">
              <button class="purchase-btn-vi">PURCHASE FOR 50 POINTS</button>
              <img class="lockimage-vi" src={require(`./images/lock.png`)} alt="Lock Image" />
            </div>
          </div>
          <div class="section-info-vi">
            <div class="description-vi" style={{ display: 'none' }}>
              syllabus info
            </div>
          </div>
        </div>

        {/* Reviews Section - Always Collapsed */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Reviews</div>
            <div class="right-vi">
              <button class="purchase-btn-vi">PURCHASE FOR 30 POINTS</button>
              <img class="lockimage-vi" src={require(`./images/lock.png`)} alt="Lock Image" />
            </div>
          </div>
          <div class="section-info-vi">
            <div class="description-vi" style={{ display: 'none' }}>
              syllabus info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInformationClass;