// import React, { useState } from 'react';

// function Task() {
//     const [categories, setCategories] = useState([]);

//     const handleAddCategory = () => {
//         const categoryName = prompt('Enter category name:');
//         setCategories([...categories, { name: categoryName, subcategories: [] }]);
//     };

//     const handleAddSubcategory = (category) => {
//         const subcategoryName = prompt('Enter subcategory name:');
//         category.subcategories.push({ name: subcategoryName });
//         setCategories([...categories]);
//     };

//     return (
//         <div>
//             <button onClick={handleAddCategory}>Add Category</button>
//             <ul>
//                 {categories.map((category) => (
//                     <li key={category.name}>
//                         {category.name}
//                         <button onClick={() => handleAddSubcategory(category)}>Add Subcategory</button>
//                         <ul>
//                             {category.subcategories.map((subcategory) => (
//                                 <li key={subcategory.name}>{subcategory.name}</li>
//                             ))}
//                         </ul>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Task;
// import React, { useState } from "react";

// const Modal = ({ handleClose, prompt }) => {
//   const [categoryName, setCategoryName] = useState("");

//   const handleSave = () => {
//     handleClose(categoryName);
//   }

//   return (
//     <div className="modal">
//       <p>{prompt}</p>
//       <input
//         type="text"
//         value={categoryName}
//         onChange={e => setCategoryName(e.target.value)}
//       />
//       <button onClick={handleSave}>Save</button>
//       <button onClick={handleClose}>Cancel</button>
//     </div>
//   );
// }

// export default Modal;



