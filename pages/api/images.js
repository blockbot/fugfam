// server.get('/images', (req, res) => {
//   let images = {};

//   cloudinary.search
//             .expression('resource_type:image AND tags=paintings')
//             .sort_by('public_id','desc')
//             .max_results(30)
//             .execute()
//             .then(result=>console.log(result));
//   return images;
// })
// let cloudinary = require('cloudinary');

// export default (req, res) => {
//   cloudinary.search
//             .expression('resource_type:image AND tags=paintings')
//             .sort_by('public_id','desc')
//             .max_results(30)
//             .execute()
//             .then(result=>console.log(result));
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   res.end(JSON.stringify({ name: 'Nextjs' }))
// }
