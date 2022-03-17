// import React, { useState, useEffect, useRef } from 'react'
// import axios from 'axios'
// import '../screens/styles/Feedback.css'

// const Feedback = () => {
//   const [sujets, setSujets] = useState([])
//   const mySelect = useRef()
//   useEffect(() => {
//     axios
//       .get('http://localhost:4242/select/subject')
//       .then((res) => console.log(res) || setSujets(res.data))
//   }, [])

//   const [newFeedback, setNewFeedback] = useState({
//     description: '',
//   })

//   const createFeedback = () => {
//     axios.post('http://localhost:4242/select/feedback',{
//   }

//   return (
//     <div className='feedbackContainer'>
//       <div className='titleContainer'>
//         <h2>Feedback</h2>
//       </div>
//       <div className='startTextPresentation'>
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
//           purus sit amet luctus venenatis, lectus magna fringilla urna,
//           porttitor rhoncus dolor purus non enim praesent elementum facilisis
//           leo, vel
//         </p>
//       </div>
//       <div className='selectContainer'>
//         <select className='select' name='sujet' ref={mySelect}>
//           <option value=''>Choisissez votre sujet</option>
//           {sujets !== [] &&
//             sujets.map((sujet) => (
//               <option key={sujet.id} value={sujet.sujet_name}>
//                 {sujet.sujet_name}
//               </option>
//             ))}
//         </select>
//       </div>
//       <div className='descriptionContainer'>
//         <textarea
//           className='description'
//           type='text'
//           onChange={(e) => {
//             const { value } = e.target
//             setNewFeedback({ ...newFeedback, name: value })
//           }}
//         ></textarea>
//       </div>
//       <div className='buttonContainer'>
//         <div className='button'>Envoyer </div>
//       </div>
//     </div>
//   )
// }

// export default Feedback
