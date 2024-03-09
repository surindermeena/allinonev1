      // Function to fetch user data
      let userId = 1;

      async function fetchUserData(userId) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const data = await response.json();
        return data;
      }

      // Function to fetch user's posts
      async function fetchUserPosts(userId) {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const data = await response.json();
        return data;
      }
      
      // Function to update user info on the page
      function updateUserInfo(user) {
        document.getElementById("name").textContent = user.name;
        document.getElementById("email").textContent = user.email;
        document.getElementById("phone").textContent = user.phone;
      }
    
      // Function to display user's posts on the page
      function displayUserPosts(posts) {
        const postContainer = document.getElementById("posts");
        // postContainer.style.border ="6px solid red";
        postContainer.style.borderRadius ="10px";
        postContainer.style.backgroundColor="white";
        postContainer.innerHTML = "";

        posts.forEach((post) => {
          // const listItem = document.createElement("li");
          const boxForTitle = document.createElement("div");
          boxForTitle.style.color="yellowgreen";
          boxForTitle.style.backgroundColor="black";
          boxForTitle.setAttribute("class", "postBox");
          boxForTitle.setAttribute("class", "grid-item");
          boxForTitle.innerHTML = post.title;


          boxForTitle.addEventListener("click",()=>{
          document.getElementById('menu').style.display='block';
          document.getElementById('menu').style.backgroundColor='rgba(255,255,255,0.9)';


          let postBody = document.getElementById("postBody");
          postBody.innerHTML="";
          postBody.innerHTML=post.body;


          let imagePlace = document.getElementById("postImage");
          let randNum = Math.floor(Math.random()*10)+1;

          
          imagePlace.style.width = "75%";
          imagePlace.style.height = "auto";
          imagePlace.style.padding ="0px auto";
          imagePlace.setAttribute("src",`./image/${randNum}.jpg`);
          
          });


          postContainer.appendChild(boxForTitle);
        });

      }


      // Main function to fetch and display data
      async function loadData() {
        const user = await fetchUserData(userId);
        const posts = await fetchUserPosts(userId);

        updateUserInfo(user);
        displayUserPosts(posts);
      }


      let next = document.getElementById("increment");
      next.addEventListener("click", () => {
        userId += 1;
        console.log("check ", userId);
        loadData();
      });

      let prev = document.getElementById("decrement");
      prev.addEventListener("click", () => {
        if (userId > 1) {
          userId -= 1;
          console.log("check ", userId);
          loadData();
        }
      });


      // Call the main function to load data when the page is loaded
      window.onload = loadData;






























