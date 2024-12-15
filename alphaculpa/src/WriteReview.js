import './App.css';
import './writereview.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';


function WriteReview({kp, setKP}) {
    function SubmitButtonPressed(event) {
        event.preventDefault();
        setKP(kp + 10)
    }

    const [completedQuestions, setCompletedQuestions] = useState({});

    const handleAnswerChange = (questionKey, value, type = 'input') => {
        setCompletedQuestions((prev) => ({
            ...prev,
            [questionKey]:
                type === 'checkbox' ? value : (value && value !== '') || false,
        }));
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
                    <div className="karma-indicator_reviewpage">{kp} Karma points</div>
                </div>
                <div className="form-container_reviewpage">
                    <form action = "/" method="get" className="form_reviewpage" onSubmit={SubmitButtonPressed}>
                        <label for="class-select">Select the class you want to provide information for:</label>
                        <select id="class-select" name="class" onChange={(e) => handleAnswerChange('class', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Data Structures COMS W3134</option>
                            <option value="selected">Machine Learning COMS W4771</option>
                            <option value="selected">Analysis of Algorithms CSOR 4231</option>
                            <option value="selected">Computer Vision I COMS W4731</option>
                        </select>

                        <label>Would you recommend this class?</label>
                        <select onChange={(e) => handleAnswerChange('recommendation', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Definitely will</option>
                            <option value="selected">Probably will</option>
                            <option value="selected">Might or might not</option>
                            <option value="selected">Probably won't</option>
                            <option value="selected">Definitely won't</option>
                        </select>

                        <label>How would you rate the pace of the class?</label>
                        <select onChange={(e) => handleAnswerChange('pace', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Much too fast</option>
                            <option value="selected">Slightly too fast</option>
                            <option value="selected">Just right</option>
                            <option value="selected">Slightly too slow</option>
                            <option value="selected">Much too slow</option>
                        </select>

                        <label>How challenging did you find this class?</label>
                        <select onChange={(e) => handleAnswerChange('difficulty', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Extremely challenging</option>
                            <option value="selected">Very challenging</option>
                            <option value="selected">Moderately challenging</option>
                            <option value="selected">Slightly challenging</option>
                            <option value="selected">Not challenging at all</option>
                        </select>

                        <label>How would you rate the usefulness of this class?</label>
                        <select onChange={(e) => handleAnswerChange('usefulness', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Extremely useful</option>
                            <option value="selected">Very useful</option>
                            <option value="selected">Moderately useful</option>
                            <option value="selected">Slightly useful</option>
                            <option value="selected">Not useful at all</option>
                        </select>

                        <label>How would you rate the professor's classroom delivery?</label>
                        <select onChange={(e) => handleAnswerChange('delivery', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Excellent</option>
                            <option value="selected">Good</option>
                            <option value="selected">Fair</option>
                            <option value="selected">Poor</option>
                            <option value="selected">Very Poor</option>
                        </select>

                        <label>Which professor did you take the class with?</label>
                        <select onChange={(e) => handleAnswerChange('professor', e.target.value) }>
                            <option value="">Select</option>
                            <option value="selected">Aarushi Sharma</option>
                            <option value="selected">Brian Borowski</option>
                            <option value="selected">Daniel Bauer</option>
                            <option value="selected">Berkan Ottlik</option>
                            <option value="selected">Daniel Hsu</option>
                            <option value="selected">Nakul Verma</option>
                            <option value="selected">Alexandr Andoni</option>
                            <option value="selected">Christos Papadimitriou</option>
                            <option value="selected">Eleni Drinea</option>
                            <option value="selected">Shree Nayar</option>
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
                            <option value="selected">A+</option>
                            <option value="selected">A</option>
                            <option value="selected">A-</option>
                            <option value="selected">B+</option>
                            <option value="selected">B</option>
                            <option value="selected">B-</option>
                            <option value="selected">C+</option>
                            <option value="selected">C</option>
                            <option value="selected">C-</option>
                            <option value="selected">D</option>
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