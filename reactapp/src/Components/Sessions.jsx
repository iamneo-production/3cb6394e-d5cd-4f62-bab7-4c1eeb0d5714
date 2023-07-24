// import React from 'react';
// import Avatar from '@mui/material/Avatar';
// import "./sessions.css";
// import { Button, IconButton } from '@mui/material';
// import { useState, useEffect } from 'react';
// import { getProduct, deleteProduct } from '../service/api';
// import { useNavigate } from 'react-router-dom';

// const Products = () => {
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const fetchProducts = async () => {
//     try {
//       const response = await getProduct()
//       setProducts(response.data);
//       console.log(response.data);
//     }

//     catch (error) {
//       console.log(error);
//     }
//   }
//   useEffect(() => {
//     fetchProducts();
//   }, [])

//   const handleEdit = (id) => {
//     navigate(`/edit/${id}`);
//   }
//   const handleDelete = async (id) => {
//     try {
//       await deleteProduct(id);
//       fetchProducts();
//     }
//     catch (error) {
//       console.log(error);
//     }
//   }
//   const routeAdd = ()=>{
//     navigate('/addadm')
//   }
// return (
// 	<div>
//   <ul>
//   <li><a class="active" href="/profile">profile</a></li>
//   <li><a href="/sessions">Sessions</a></li>
//   <li><a href="/materials">Materials</a></li>
//   <li><a href="/blogs">About</a></li>
//   <li><a href="/certification">Certification</a></li>
//   <li><a href="/course">Courses</a></li>
//   <li><a href="/logout">Logout</a></li>
//   <div className="doubt">
//   <li>
//     <IconButton>
//   <Avatar
//         alt="Remy Sharp"
//         src="/static/images/avatar/1.jpg"
//         sx={{ width: 47, height: 47 }}
//       />
//       </IconButton>
//   </li>
//   </div>
// </ul>
// 	<div>
//   <div className='main'>
//       <div className='shadow bg-white'>
//         <table className='data-table'>
//           <thead>

//             <tr>
//               <th>
//                 Start time
//               </th>
//               <th>
//                   End Time
//               </th>
//               <th>
//                 Course Title
//               </th>
//               <th>
//                 Tutor
//               </th>
//               <th>
//                 Actions
//               </th>

//             </tr>
//           </thead>
//           <tbody>
//             {products.map((product) => (
//               <tr key={product.pid}>
//                 <td>{product.pid}</td>
//                 <td>{product.productname}</td>
//                 <td>{product.productprice}</td>
//                 <td>{product.productquantity}</td>
//                 {console.log(product.quantity)}
//                 <td>
//                   <button className='data-btn-mini bg-yellow white' onClick={() => handleEdit(product.pid)}>edit</button>
//                   <button className='data-btn-mini bg-red white' onClick={() => handleDelete(product.pid)}>delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       <button onClick={routeAdd} className='route-btn-1 bg-primary white'>Add</button>
//     </div>
//     </div>
// 	</div>
// );
// };
// export default Products;
