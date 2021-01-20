import React, { useState, useEffect } from "react";
import axios from "axios"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PostScore = (props) => {
    const {user_id,course_id} = props.data

    const [courses, setCourses] = useState([]);
    const [date, setDate] = useState("");
    const [teebox, setTeebox] = useState("");
    const [full18score, setFull18Score] = useState("");
    const [selectedCourse, setSelectedCourse] = useState(null)
    //   const [numberofholes, setNumberOfHoles] = useState("");
    //   const [front9score, setFront9Score] = useState("");
    //   const [back9score, setBack9Score] = useState("");

    useEffect(() => {
        axios.get('/api/postscore').then((res) => {
            setCourses(res.data)
        })
    }, []);

    function validateForm() {
        return courses.length > 0 && date.length > 0 && teebox.length > 0 && full18score.length > 0;
    }

    function handleSubmit(event) {
        const body = {course_name:inputText, date:date, teebox:inputText, full18score:inputText}
        axios.put(`/api/postscore/${props.user_id}/${round_id}`,body).then((res)=> {

        })
        event.preventDefault();

    }

    return (
        <div className="PostScore">
            <h1>POST A SCORE</h1>
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="coursename" class="col-3" placeholder="Select Course" >
                    <Form.Label><h4>Course</h4></Form.Label>
                    <Form.Control
                        as="select"
                        autoFocus
                        type="course"
                        onChange={(e) => setSelectedCourse(e.target.value)}>
                        {courses.map((course) => (
                            <option value={course.course_id}>{course.course_name}</option>))
                        }
                        >
                    </Form.Control>
                </Form.Group>


                <Form.Group size="lg" controlId="date" class="col-3">
                    <Form.Label><h4>Date</h4></Form.Label>
                    <Form.Control
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="teebox" class="col-2">
                    <Form.Label><h4>TeeBox</h4></Form.Label>
                    <Form.Control
                        as="select"
                        type="teebox"
                        value={teebox}
                        onChange={(e) => setTeebox(e.target.value)}>
                        <option>Red</option>
                        <option>White</option>
                        <option>Blue</option>
                        <option>Black</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group size="lg" controlId="full18score" class="col-2">
                    <Form.Label><h4>Full 18 Score</h4></Form.Label>
                    <Form.Control
                        type="full18score"
                        value={full18score}
                        onChange={(e) => setFull18Score(e.target.value)}
                    />
                </Form.Group>

                <Button class="col-2 btn-primary" block size="lg" type="submit" disabled={!validateForm()}>
                    Post Score
        </Button>

            </Form>
        </div>
    );
}
export default PostScore
// NOT SURE If this copied version of the login in form is actually checking to validate data. So I am not sure if changing everything will work. Will it try to validate a course and fail?

// Need to Learn how to make a form for submission to the DB with out any Validation. 

// Need to learn how to have fields in the form use DROP Down selections or a Date picker

// Need to learn how to toggle values in a form based on what values are set before it. ie. select 9 or 18 hole will cause the input fields for scores to toggle to show 9 hole field or 18 hole field. 