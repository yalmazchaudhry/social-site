
async function fetchUsersData(){
    url ='https://dummyapi.io/data/v1/user?limit=10';
    params = {
        method : 'get',
        headers: {
            'app-id': '637b5fad1a3891260eb5e37b'
        },
        
    }
    await fetch(url, params).then(response=> response.json())
    .then((data) =>{ 
      // console.log(data)
    let obj=data;
obj.data.map((values)=>{
    // console.log(values.firstName + values.lastName);
const user_list =`<div class="d-flex align-items-center  p-2">
<img
  class="user-list img-fluid w-25 rounded-circle"
  src="${values.picture}"
  alt=""
/>
<p class="m-0 px-3"><b>${values.firstName}  ${values.lastName}</b></p>
</div>`
document.getElementById("listID").innerHTML+=user_list;
   
}
)
})
    
}

fetchUsersData();




var pageNo=0;

 async function  fetchPost(){
  var postURL=`https://dummyapi.io/data/v1/post?page=${pageNo}&limit=10`;
  console.log(postURL);
    url = postURL;
    params = {
        method : 'get',
        headers: {
            'app-id': '637b5fad1a3891260eb5e37b'
        },
        
    }
   await  fetch(url, params)
     .then(response=> response.json())
    .then((data) =>{ 
      // console.log(data)
    let obj=data;
obj.data.map((values)=>{
    //console.log(data);
    // console.log(values.tags);
    // getTags(values.tags);
 const user_post =`<div class="post  d-flex flex-column m-2">
 <div class="d-flex justify-content-between align-items-center px-2">
   <div class="d-flex align-items-center ps-2">
     <div>
       <img
         style="width: 35px; height: 35px"
         class="rounded-circle"
         src="${values.owner.picture}"
         alt=""
       />
     </div>
     
       <p class="m-0 ps-2"><b>${values.owner.firstName} ${values.owner.lastName}</b></p>
     
   </div>
   <div class="menu-icon">
     <svg
       style="width: 20px; height: 20px"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 448 512"
     >
       <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
       <path
         d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
       />
     </svg>
   </div>
 </div>
 <img src="${values.image}" class="img-fluid p-3 rounded" alt="" />

 <div class="comment-box d-flex justify-content-between px-4">
   <div class="d-flex">
     <i class="icons fa-regular fa-heart px-1"></i
     ><i class="icons fa-regular fa-comment px-1"></i>
     <i class="icons fa-solid fa-share-nodes px-1"></i>
   </div>
   <i class="icons fa-regular fa-bookmark"></i>
 </div>
 <div class="d-flex justify-content-between">
   <div class="ps-4 py-2">
     <img
       style="width: 5%"
       class="img-fluid rounded-circle"
       src="/social-site/assets/images/bg.jpg"
       alt=""
     /><img
       style="width: 5%"
       class="img-fluid rounded-circle"
       src="/social-site/assets/images/bg.jpg"
       alt=""
     /><img
       style="width: 5%"
       class="img-fluid rounded-circle"
       src="/social-site/assets/images/bg.jpg"
       alt=""
     />
     <span>Liked By</span>
     <span><b>ahmed</b></span>
     <span>and</span>
     <span><b>${values.likes} others</b></span>
   </div>
   <div class="tags d-inline px-2  py-2">
   ${tags(values)}
   </div>
 </div>
 <div id="comments" class="comments ps-4">${fetchComments(values.id)}</div>
</div>`
 document.getElementById("main").innerHTML+=user_post;
    
}
)
})
   pageNo++;
}

fetchPost();


async function fetchTags(){
    url ='https://dummyapi.io/data/v1/tag?limit=10';
    params = {
        method : 'get',
        headers: {
            'app-id': '637b5fad1a3891260eb5e37b'
        },
        
    }
  await  fetch(url, params).then(response=> response.json())
    .then((data) =>{ 
      // console.log(data)
    let obj=data;
obj.data.slice(5,35).map(values => {
    // console.log(values);
 const user_tags =`
<div class=" p-1"><p id="tags" class="m-0 bg-primary p-2 rounded " onclick="fetchPostByTag(event)">${values}</p></div>`
document.getElementById("tags").innerHTML+=user_tags;
    
}
)
})
    
}

fetchTags();

function tags(v){
  let dTags=``;
  v.tags.map((tags)=>{
    let html=`<a class="text-decoration-none rounded  mx-1   bg-info " href="dogs"
    >#${tags}</a
  >`
  dTags = dTags+html
  
  // document.getElementsByClassName("tags").innerHTML+=dTags;
  })
  // console.log(dTags);
  return dTags;
  
}

async function fetchPostByTag(e){

  let tag = e.target.innerText;
  url =`https://dummyapi.io/data/v1/tag/${tag}/post?limit=10`;
  params = {
      method : 'get',
      headers: {
          'app-id': '637b5fad1a3891260eb5e37b'
      },
      
  }
await  fetch(url, params).then(response=> response.json())
  .then((data) =>{ 
    // console.log(data)
  let obj=data;
  document.getElementById("main").innerHTML=``;
obj.data.map(values => {
  console.log(values);
  const post_by_tag =`<div class="post  d-flex flex-column m-2">
 <div class="d-flex justify-content-between align-items-center px-2">
   <div class="d-flex align-items-center ps-2">
     <div>
       <img
         style="width: 35px; height: 35px"
         class="rounded-circle"
         src="${values.owner.picture}"
         alt=""
       />
     </div>
     
       <p class="m-0 ps-2"><b>${values.owner.firstName} ${values.owner.lastName}</b></p>
     
   </div>
   <div class="menu-icon">
     <svg
       style="width: 20px; height: 20px"
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 448 512"
     >
       <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
       <path
         d="M120 256c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm160 0c0 30.9-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56zm104 56c-30.9 0-56-25.1-56-56s25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56z"
       />
     </svg>
   </div>
 </div>
 <img src="${values.image}" class="img-fluid p-3 rounded" alt="" />

 <div class="comment-box d-flex justify-content-between px-4">
   <div class="d-flex">
     <i class="icons fa-regular fa-heart px-1"></i
     ><i class="icons fa-regular fa-comment px-1"></i>
     <i class="icons fa-solid fa-share-nodes px-1"></i>
   </div>
   <i class="icons fa-regular fa-bookmark"></i>
 </div>
 <div class="d-flex justify-content-between">
   <div class="ps-4 py-2">
     <img
       style="width: 5%"
       class="img-fluid rounded-circle"
       src="/social-site/assets/images/bg.jpg"
       alt=""
     /><img
       style="width: 5%"
       class="img-fluid rounded-circle"
       src="/social-site/assets/images/bg.jpg"
       alt=""
     /><img
       style="width: 5%"
       class="img-fluid rounded-circle"
       src="/social-site/assets/images/bg.jpg"
       alt=""
     />
     <span>Liked By</span>
     <span><b>ahmed</b></span>
     <span>and</span>
     <span><b>${values.likes} others</b></span>
   </div>
   <div class="tags d-flex px-2  py-2">
    ${tags(values)}
   </div>
 </div>
 <div id="comments" class="comments ps-4"><span><b>${values.owner.firstName} ${values.owner.lastName}</b></span>
<span
  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum voluptas expedita harum atque molestias earum facilis iusto labore, necessitatibus delectus ipsa veritatis alias soluta. Optio pariatur magni quam numquam necessitatibus!</span
></div>
</div>`
 document.getElementById("main").innerHTML+=post_by_tag;
// const user_tags =`
// <div class=" p-1"><p id="tags" class="m-0 bg-primary p-2 rounded onclick="fetchPostByTag(event)">${values}</p></div>`
// document.getElementById("tags").innerHTML+=user_tags;
  
}
)
})
  
}

// comments function

async function fetchComments(id){
  url =`https://dummyapi.io/data/v1/post/${id}/comment?limit=10`;
  params = {
      method : 'get',
      headers: {
          'app-id': '637b5fad1a3891260eb5e37b'
      },
      
  }
await  fetch(url, params).then(response=> response.json())
  .then((data) =>{ 
    // console.log(data)
  let obj=data;
  let user_comments =``;
obj.data.map(values => {
  console.log("commmmmmmmmmm");
  console.log(values);
  let html=`<p><span><b>${values.owner.firstName} ${values.owner.lastName}</b></span>
  <span
    >${values.message}</span
  ></p>` 
  user_comments=user_comments+html;
document.getElementById("comments").innerHTML+=html;
  
})

console.log(user_comments);
// return user_comments;
})
  
}

fetchComments();




//bottom scroll

const showMorePosts=()=>{
  setTimeout(()=>{

fetchPost();
  },300)
}
window.addEventListener('scroll', ()=>{
  
  const {scrollHeight, scrollTop, clientHeight} = document.documentElement;
  if(scrollTop+clientHeight >= scrollHeight ){
showMorePosts();
  }
})
