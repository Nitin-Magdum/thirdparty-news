const axios =require('axios').default;

 async function GetnewsByCategory(category) {
  const cat=category

    const a=await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=ff40fff89fd44f32a0802c1accc9cd2f`
      )
      const aa=a.data.articles
    return aa;
};
//6d33d9cc2b8b47aea1c2a8fbf9e2ec62
async function SearchByTitle (search) {
    const a=await axios
      .get(
        ` https://newsapi.org/v2/everything?q=${search}&apiKey=ff40fff89fd44f32a0802c1accc9cd2f`
      )
      const aa=a.data.articles
      return aa;
     
    }
module.exports = { SearchByTitle, GetnewsByCategory };
