import './App.css';
import './view_information.css'
import { Link } from 'react-router-dom';


function ViewInformationClass({kp, setKP}) {
  return (
    <div class="container-vi">
        <div class="header-vi">
        <Link to ="/">
                <img src={require(`./images/logo.png`)} alt="Logo" class="logo"/>
            </Link>
            <div class="karma-points-vi">{kp} Karma points</div>
        </div>
        <div class="info-vi">
            <div class="coursename-vi">COMS 4731 Computer Vision Ⅱ</div>
            <hr/>
            <div class="subinfo-vi">
                <div class="profname-vi">Professor: Carl Vondrik</div>
                <div class="departmentname-vi">Engineering / Computer Science</div>
            </div>
            <hr/>
        </div>

        <div class="section-all-vi">
            <div class="section-vi">
                <div class="sectionname-vi">Syllabus</div>
                <div class="right-vi">
                    <button class="view-btn-vi">VIEW</button>
                    <img class="lockimage-vi" src={require(`./images/unlock.png`)} alt="Unlock Image" />
                </div>
            </div>
        </div>

        <div class="section-vi">
            <div class="sectionname-vi">Lecture Style</div>
            <div class="right-vi">
                <button class="purchase-btn-vi">PURCHASE FOR 10 POINTS</button>
                <img class="lockimage-vi" src={require(`./images/lock.png`)} alt="Lock Image" />
            </div>
        </div>
        <div class="section-vi">
            <div class="sectionname-vi">Grade Data</div>
            <div class="right-vi">
                <button class="purchase-btn-vi">PURCHASE FOR 50 POINTS</button>
                <img class="lockimage-vi" src={require(`./images/lock.png`)} alt="Lock Image" />
            </div>
        </div>
        <div class="section-vi">
            <div class="sectionname-vi">Reviews</div>
            <div class="right-vi">
                <button class="purchase-btn-vi">PURCHASE FOR 30 POINTS</button>
                <img class="lockimage-vi" src={require(`./images/lock.png`)} alt="Lock Image" />
            </div>
        </div>
    </div>      
  
  );
}

export default ViewInformationClass;
