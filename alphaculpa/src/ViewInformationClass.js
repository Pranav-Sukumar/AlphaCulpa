import './App.css';
import './view_information.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';


function ViewInformationClass({kp, setKP, data,unlockLectureStyle, unlockGrade, unlockReviews}) {
  const { class_id, class_name, prof_name } = useParams();
  console.log(prof_name)
  const [isExpanded, setIsExpanded] = useState(false);


  const [isSyllabusLocked, setIsSyllabusLocked] = useState(true);
  const [isLectureStyleLocked, setIsLectureStyleLocked] = useState(true);
  const [isGradeDataLocked, setIsGradeDataLocked] = useState(true);
  const [isReviewsDataLocked, setIsReviewsDataLocked] = useState(true);
  
  const [isSyllabusExpanded, setSyllabusExpanded] = useState(false);
  const [isLectureStyleExpanded, setLectureStyleExpanded] = useState(false);
  const [isGradeDataExpanded, setGradeDataExpanded] = useState(false);
  const [isReviewsExpanded, setReviewsExpanded] = useState(false);
  const toggleSyllabus = () => setSyllabusExpanded(!isSyllabusExpanded);
  const toggleLectureStyle = () => setLectureStyleExpanded(!isLectureStyleExpanded);
  const toggleGradeData = () => setGradeDataExpanded(!isGradeDataExpanded);
  const toggleReviews = () => setReviewsExpanded(!isReviewsExpanded);

  const [syllabus_topic, setSyllabusTopic] = useState("");
  const [syllabus_grading, setSyllabusGrading] = useState("");
  const [syllabus_exam_dates, setSyllabusExam] = useState("");
  const [syllabus_lecture_schedule, setSyllabusLecture] = useState("");
  const [syllabus_prereq, setSyllabusPrereq] = useState("");

  const [lecture_style, setLectureStyle] = useState("");
  const [lecture_recording, setLectureRecording] = useState("");

  const [pdfLink, setPdfLink] = useState(null);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const classData = data.find(
      (item) => item.classId === class_id && item.className === class_name
    );

    if (classData) {
      const professor = classData.professors.find((prof) => prof.name === prof_name);

      if (professor && professor.syllabus) {
        setIsSyllabusLocked(professor.syllabus.unlocked);
        let syllabus_string = ""
        syllabus_string += professor.syllabus.content.Topic
        setSyllabusTopic(syllabus_string)

        syllabus_string = ""
        syllabus_string += professor.syllabus.content.Grading
        setSyllabusGrading(syllabus_string)

        syllabus_string = ""
        syllabus_string += professor.syllabus.content.ExamDates
        setSyllabusExam(syllabus_string)

        syllabus_string = ""
        syllabus_string += professor.syllabus.content.LectureSchedule
        setSyllabusLecture(syllabus_string)

        syllabus_string = ""
        syllabus_string += professor.syllabus.content.prerequisites
        setSyllabusPrereq(syllabus_string)
      }
      if (professor && professor.lectureStyle) {
        setIsLectureStyleLocked(professor.lectureStyle.unlocked);
        let lecture_string = ""
        lecture_string += professor.lectureStyle.content.style
        setLectureStyle(lecture_string)

        lecture_string = ""
        lecture_string += professor.lectureStyle.content.recording
        setLectureRecording(lecture_string)
      }
      if (professor && professor.gradeData) {
        setIsGradeDataLocked(professor.gradeData.unlocked);

        if (professor.gradeData.content) {
          const loadedPdf = require(`${professor.gradeData.content}`);
          setPdfLink(loadedPdf);
        }
      }
      if (professor && professor.reviews) {
        setIsReviewsDataLocked(professor.reviews.unlocked);
        if (professor.reviews.content && Array.isArray(professor.reviews.content)) {
          setReviews(professor.reviews.content);
        }
      }

    }
  }, [class_id, class_name, prof_name, data]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const unlock = (cost, unlocking) => {
    if (cost <= kp) {
        if (unlocking == 0 && isLectureStyleLocked == true) {
            return
        }
        if (unlocking == 1 && isGradeDataLocked == true) {
            return
        }
        if (unlocking == 2 && isReviewsDataLocked == true) {
            return
        }
        setKP(kp - cost)

        if (unlocking == 0) {
            unlockLectureStyle(class_id, class_name, prof_name)
        }

        if (unlocking == 1) {
            unlockGrade(class_id, class_name, prof_name)

        }

        if (unlocking == 2) {
            unlockReviews(class_id, class_name, prof_name)
        }


    }
  };

  return (
    <div class="container-vi">

      <div class="header-vi">
        <Link to="/">
          <img src={require(`./images/logo.png`)} alt="Logo" class="logo" />
        </Link>
        <div class="karma-points-vi">Karma Points: {kp}</div>
      </div>

      <div class="info-vi">
        <div class="coursename-vi">
          {class_id} {class_name}
        </div>
        <hr />
        <div class="subinfo-vi">
          <div class="profname-vi">Professor: {prof_name}</div>
          <div class="departmentname-vi">Engineering / Computer Science</div>
        </div>
        <hr />
      </div>

      <div class="section-all-vi">

        {/* Syllabus Section */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">
              Syllabus
            </div>
            <div class="right-vi">
              <button 
                class={`view-btn-vi ${isExpanded ? 'active' : ''}`}
                onClick={toggleExpand}
              >
                {isExpanded ? 'CLOSE' : 'VIEW'}
              </button>
              <img 
                class="lockimage-vi" 
                src={require(`./images/${isSyllabusLocked ? 'unlock.png' : 'lock.png'}`)} 
                alt={isSyllabusLocked ? "Unlock Image" : "Lock Image"} 
                />
            </div>
          </div>
          <div class={`section-info-vi ${isExpanded ? 'expanded' : ''}`}>
            <div class="description-vi">
                <b>Topic:</b>
                <br/>
                {syllabus_topic}
                <br/><br/>
                <b>Grading:</b>
                <br/>
                {syllabus_grading}
                <br/><br/>
                <b>Exam Dates:</b>
                <br/>
                {syllabus_exam_dates}
                <br/><br/>
                <b>Lecture Schedule:</b>
                <br/>
                {syllabus_lecture_schedule}
                <br/><br/>
                <b>Prerequisites:</b>
                <br/>
                {syllabus_prereq}
                
            </div>
          </div>
        </div>
        
        {/* Lecture Style Section - Always Collapsed */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Lecture Style</div>
            <div class="right-vi">
              {isLectureStyleLocked ? (
                <button 
                  class={`view-btn-vi ${isLectureStyleExpanded ? 'active' : ''}`}
                  onClick={toggleLectureStyle}
                >
                  {isLectureStyleExpanded ? 'CLOSE' : 'VIEW'}
                </button>
              ) : (
                <button class="purchase-btn-vi" onClick={() => unlock(10, 0)}>
                  PURCHASE FOR 10 POINTS
                </button>
              )}
              <img 
                class="lockimage-vi" 
                src={require(`./images/${isLectureStyleLocked ? 'unlock.png' : 'lock.png'}`)} 
                alt={isLectureStyleLocked ? "Unlock Image" : "Lock Image"} 
              />
            </div>
          </div>
          <div class={`section-info-vi ${isLectureStyleExpanded ? 'expanded' : ''}`}>
            <div class="description-vi">
                <b>Style:</b>
                <br/>
                {lecture_style}
                <br/><br/>
                <b>Recording Available:</b>
                <br/>
                {lecture_recording}
            </div>
          </div>
        </div>

        {/* Grade Data Section */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Grade Data</div>
            <div class="right-vi">
              {isGradeDataLocked ? (
                <button 
                  class={`view-btn-vi ${isGradeDataExpanded ? 'active' : ''}`}
                  onClick={toggleGradeData}
                >
                  {isGradeDataExpanded ? 'CLOSE' : 'VIEW'}
                </button>
              ) : (
                <button class="purchase-btn-vi" onClick={() => unlock(50, 1)}>
                  PURCHASE FOR 50 POINTS
                </button>
              )}
              <img 
                class="lockimage-vi" 
                src={require(`./images/${isGradeDataLocked ? 'unlock.png' : 'lock.png'}`)} 
                alt={isGradeDataLocked ? "Unlock Image" : "Lock Image"} 
              />
            </div>
          </div>
          <div class={`section-info-vi ${isGradeDataExpanded ? 'expanded' : ''}`}>
            <div className="description-vi">
              <br/>
              {/* We have just kicked started the platform and are yet to have statistically significant grade data.
              Instead we have some faculty data for now... */}
              Please check out the grade report: 
              {pdfLink && (
                <a
                  href={pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: '5px', textDecoration: 'underline' }}
                >
                  View PDF
                </a>
              )}
              {/* Hardcoded grade distribution data histogram (in the future)*/}
              
              <div class="histogram">
                <div class="yearterm">
                  {/* <br/> */}
                </div>
                <div class="placeholder-rectangle">
                  Grading Plot Coming Soon!
                </div>
                {/* <div class="yearterm"> */}
                  {/* Fall 2023
                </div>
                <div class="placeholder-rectangle">
                  Coming Soon!
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div class="section-container-vi">
          <div class="section-vi">
            <div class="sectionname-vi">Reviews</div>
            <div class="right-vi">
              {isReviewsDataLocked ? (
                <button 
                  class={`view-btn-vi ${isReviewsExpanded ? 'active' : ''}`}
                  onClick={toggleReviews}
                >
                  {isReviewsExpanded ? 'CLOSE' : 'VIEW'}
                </button>
              ) : (
                <button class="purchase-btn-vi" onClick={() => unlock(30, 2)}>
                  PURCHASE FOR 30 POINTS
                </button>
              )}
              <img 
                class="lockimage-vi" 
                src={require(`./images/${isReviewsDataLocked ? 'unlock.png' : 'lock.png'}`)} 
                alt={isReviewsDataLocked ? "Unlock Image" : "Lock Image"} 
              />
            </div>
          </div>
          <div class={`section-info-vi ${isReviewsExpanded ? 'expanded' : ''}`}>
            <div className="description-vi">
              {/* Only show reviews if expanded and unlocked */}
              {isReviewsExpanded && isReviewsDataLocked && (
                reviews && reviews.length > 0 ? (
                  reviews.map((review, index) => (
                    <div className="review-box" key={review.id || index}>
                      <div className="review-line"><strong>ID:</strong> {review.id}</div>
                      <div className="review-line"><strong>Recommendation:</strong> {review.recommendation}</div>
                      <div className="review-line"><strong>Pace:</strong> {review.pace}</div>
                      <div className="review-line"><strong>Difficulty:</strong> {review.difficulty}</div>
                      <div className="review-line"><strong>Usefulness:</strong> {review.usefulness}</div>
                      <div className="review-line"><strong>Delivery:</strong> {review.delivery}</div>
                      <div className="review-line"><strong>Liked:</strong> {review.liked}</div>
                      <div className="review-line"><strong>Disliked:</strong> {review.disliked}</div>
                      <div className="review-line"><strong>Grade:</strong> {review.grade}</div>
                    </div>
                  ))
                ) : (
                  <div className="review-box">
                    <div className="review-line">No reviews</div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        
      </div>

    </div>
  );
}
export default ViewInformationClass;