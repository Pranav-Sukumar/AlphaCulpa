import './App.css';
import './writereview.css'
import { Link , useNavigate } from 'react-router-dom';
import { useState } from 'react';


function WriteReview({kp, setKP, addReview, getAvailableClasses}) {
    const navigate = useNavigate();

    const [completedQuestions, setCompletedQuestions] = useState({});

    const pointsMapping = {
        class: 5,
        recommendation: 5,
        pace: 5,
        difficulty: 5,
        usefulness: 5,
        delivery: 5,
        professor: 5,
        liked: 10,
        disliked: 10,
        recording: 5,
        prerequisites: 5,
        grade: 30,
        syllabus: 10,
    };

    const handleAnswerChange = (questionKey, value, type = 'input') => {
        setCompletedQuestions((prev) => ({
            ...prev,
            [questionKey]: type === 'checkbox' ? value : value // Store actual value
        }));
    };

    const calculateTotalPoints = () => {
        return Object.entries(completedQuestions).reduce((total, [key, val]) => {
            // val is truthy if filled, falsy otherwise
            return val ? total + (pointsMapping[key] || 0) : total;
        }, 0);
    };

    const SubmitButtonPressed = (event) => {
        event.preventDefault();
        const totalPoints = calculateTotalPoints();
        setKP(kp + totalPoints);

        const classId = completedQuestions.class;
        const professorName = completedQuestions.professor;
        
        const newReview = {
            id: Date.now(),
            recommendation: completedQuestions.recommendation || "",
            pace: completedQuestions.pace || "",
            difficulty: completedQuestions.difficulty || "",
            usefulness: completedQuestions.usefulness || "",
            delivery: completedQuestions.delivery || "",
            liked: completedQuestions.liked || "",
            disliked: completedQuestions.disliked || "",
            grade: completedQuestions.grade || "",
        };

        // Add the new review to the data structure
        addReview(classId, professorName, newReview);

        navigate('/'); 
    };

    const questions = [
        { key: 'class', label: 'Class (5 pts)' },
        { key: 'recommendation', label: 'Overall Recommendation (5 pts)' },
        { key: 'pace', label: 'Pace (5 pts)' },
        { key: 'difficulty', label: 'Difficulty (5 pts)' },
        { key: 'usefulness', label: 'Usefulness (5 pts)' },
        { key: 'delivery', label: 'Classroom Delivery (5 pts)' },
        { key: 'professor', label: 'Professor (5 pts)' },
        { key: 'liked', label: 'Things You Liked (10 pts)' },
        { key: 'disliked', label: 'Things You Disliked (10 pts)' },
        { key: 'recording', label: 'Lecture Recording (5 pts)' },
        { key: 'prerequisites', label: 'Prerequisites (5 pts)' },
        { key: 'grade', label: 'Grade (30 pts)' },
        { key: 'syllabus', label: 'Syllabus (10 pts)' },
    ];

    const classOptions = getAvailableClasses();

    return (
        <div className="container_reviewpage">
            <div className="sidebar_reviewpage">
                <Link to ="/">
                    <img src={require(`./images/logo.png`)} alt="Logo" className="logo"/>
                </Link>
                <h2>List of Questions</h2>
                <ul>
                    {questions.map((question) => (
                        <li
                            key={question.key}
                            style={{
                                color: completedQuestions[question.key] ? 'green' : 'inherit',
                                fontWeight: completedQuestions[question.key] ? 'bold' : 'normal',
                            }}
                        >
                            {question.label} {completedQuestions[question.key] ? '✔' : ''}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="form-section_reviewpage">
                <div className="empty-space_reviewpage">
                    <div className="karma-indicator_reviewpage">Karma Points: {kp}</div>
                </div>
                <div className="form-container_reviewpage">
                    <form action = "/" method="get" className="form_reviewpage" onSubmit={SubmitButtonPressed}>
                        <label for="class-select">Select the class you want to provide information for:</label>
                        <select 
                            id="class-select" 
                            name="class" 
                            onChange={(e) => handleAnswerChange('class', e.target.value)}
                        >
                            <option value="">Select</option>
                            {classOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.id} - {option.name}
                                </option>
                            ))}
                        </select>

                        <label>Would you recommend this class?</label>
                        <select onChange={(e) => handleAnswerChange('recommendation', e.target.value) }>
                            <option value="">Select</option>
                            <option value="Definitely will">Definitely will</option>
                            <option value="Probably will">Probably will</option>
                            <option value="Might or might not">Might or might not</option>
                            <option value="Probably won't">Probably won't</option>
                            <option value="Definitely won't">Definitely won't</option>
                        </select>

                        <label>How would you rate the pace of the class?</label>
                        <select onChange={(e) => handleAnswerChange('pace', e.target.value) }>
                            <option value="">Select</option>
                            <option value="Much too fast">Much too fast</option>
                            <option value="Slightly too fast">Slightly too fast</option>
                            <option value="Just right">Just right</option>
                            <option value="Slightly too slow">Slightly too slow</option>
                            <option value="Much too slow">Much too slow</option>
                        </select>

                        <label>How challenging did you find this class?</label>
                        <select onChange={(e) => handleAnswerChange('difficulty', e.target.value) }>
                            <option value="">Select</option>
                            <option value="Extremely challenging">Extremely challenging</option>
                            <option value="Very challenging">Very challenging</option>
                            <option value="Moderately challenging">Moderately challenging</option>
                            <option value="Slightly challenging">Slightly challenging</option>
                            <option value="Not challenging at all">Not challenging at all</option>
                        </select>

                        <label>How would you rate the usefulness of this class?</label>
                        <select onChange={(e) => handleAnswerChange('usefulness', e.target.value) }>
                            <option value="">Select</option>
                            <option value="Extremely useful">Extremely useful</option>
                            <option value="Very useful">Very useful</option>
                            <option value="Moderately useful">Moderately useful</option>
                            <option value="Slightly useful">Slightly useful</option>
                            <option value="Not useful at all">Not useful at all</option>
                        </select>

                        <label>How would you rate the professor's classroom delivery?</label>
                        <select onChange={(e) => handleAnswerChange('delivery', e.target.value) }>
                            <option value="">Select</option>
                            <option value="Excellent">Excellent</option>
                            <option value="Good">Good</option>
                            <option value="Fair">Fair</option>
                            <option value="Poor">Poor</option>
                            <option value="Very Poor">Very Poor</option>
                        </select>

                        <label>Which professor did you take the class with?</label>
                        <select onChange={(e) => handleAnswerChange('professor', e.target.value) }>
                            <option value="">Select</option>
                            <option value="Aarushi Sharma">Aarushi Sharma</option>
                            <option value="Brian Borowski">Brian Borowski</option>
                            <option value="Daniel Bauer">Daniel Bauer</option>
                            <option value="Berkan Ottlik">Berkan Ottlik</option>
                            <option value="Daniel Hsu">Daniel Hsu</option>
                            <option value="Nakul Verma">Nakul Verma</option>
                            <option value="Alexandr Andoni">Alexandr Andoni</option>
                            <option value="Christos Papadimitriou">Christos Papadimitriou</option>
                            <option value="Eleni Drinea">Eleni Drinea</option>
                            <option value="Shree Nayar">Shree Nayar</option>
                        </select>

                        <label>What aspects of the class did you like the most? (1-3 sentences)</label>
                        <textarea rows="3" onChange={(e) => handleAnswerChange('liked', e.target.value.trim()) }></textarea>

                        <label>What aspects of the class did you find least enjoyable? (1-3 sentences)</label>
                        <textarea rows="3" onChange={(e) => handleAnswerChange('disliked', e.target.value.trim()) }></textarea>

                        <div className="checkbox-group_reviewpage">
                            <label for="lectures-recorded">Are the lectures recorded?</label>
                            <input type="checkbox" id="lectures-recorded" name="lectures-recorded" onChange={(e) => handleAnswerChange('recording', e.target.checked, 'checkbox') }/>
                        </div>

                        <label>What prerequisites would you recommend? (Enter "none" if not applicable)</label>
                        <textarea rows="2" onChange={(e) => handleAnswerChange('prerequisites', e.target.value.trim()) }></textarea>

                        <label>What grade did you receive in this class? (This form is strictly anonymous and does not collect personal information)</label>
                        <select onChange={(e) => handleAnswerChange('grade', e.target.value) }>
                            <option value="">Select</option>
                            <option value="A+">A+</option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="C+">C+</option>
                            <option value="C">C</option>
                            <option value="C-">C-</option>
                            <option value="D">D</option>
                        </select>

                        <label>Please upload the class syllabus:</label>
                        <input type="file" onChange={(e) => handleAnswerChange('syllabus', e.target.value) }/>

                        <button type="submit" className="button_reviewpage">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    
    );
}

export default WriteReview;
