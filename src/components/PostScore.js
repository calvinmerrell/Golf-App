// import React, { useState } from "react";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";


// export default function Login() {
//   const [course, setCourse] = useState("");
//   const [date, setDate] = useState("");
//   const [teebox, setTeebox] = useState("");
// //   const [numberofholes, setNumberOfHoles] = useState("");
// //   const [front9score, setFront9Score] = useState("");
// //   const [back9score, setBack9Score] = useState("");
//   const [full18score, setFull18Score] = useState("");

//   function validateForm() {
//     return course.length > 0 && date.length > 0 && teebox.length > 0 && full18score.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   return (
//     <div className="PostScore">
//         <Form onSubmit={handleSubmit}>
        
//         <Form.Group size="lg" controlId="coursename">
//           <Form.Label>course</Form.Label>
//           <Form.Control
//             autoFocus
//             type="course"
//             value={course}
//             onChange={(e) => setCourse(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group size="lg" controlId="date">
//           <Form.Label>Date</Form.Label>
//           <Form.Control
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group size="lg" controlId="teebox">
//           <Form.Label>Date</Form.Label>
//           <Form.Control
//             type="teebox"
//             value={teebox}
//             onChange={(e) => setTeebox(e.target.value)}
//           />
//         </Form.Group>

//         <Form.Group size="lg" controlId="full18score">
//           <Form.Label>Full 18 Score</Form.Label>
//           <Form.Control
//             type="full18score"
//             value={full18score}
//             onChange={(e) => setFull18score(e.target.value)}
//           />
//         </Form.Group>

//         <Button block size="lg" type="submit" disabled={!validateForm()}>
//           Post Score
//         </Button>

//       </Form>
//     </div>
//   );
// }

// // NOT SURE If this copied version of the login in form is actually checking to validate data. So I am not sure if changing everything will work. Will it try to validate a course and fail? 

// // Need to Learn how to make a form for submission to the DB with out any Validation. 

// // Need to learn how to have fields in the form use DROP Down selections or a Date picker

// // Need to learn how to toggle values in a form based on what values are set before it. ie. select 9 or 18 hole will cause the input fields for scores to toggle to show 9 hole field or 18 hole field. 