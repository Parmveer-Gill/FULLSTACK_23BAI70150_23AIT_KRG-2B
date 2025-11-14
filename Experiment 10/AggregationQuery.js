const result = await Product.aggregate([
  { $match: { _id: productId } },
  { $unwind: "$reviews" },
  { $group: { 
      _id: null, 
      avgRating: { $avg: "$reviews.rating" } 
  }}
]);
