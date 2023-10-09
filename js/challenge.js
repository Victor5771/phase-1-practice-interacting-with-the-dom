document.addEventListener("DOMContentLoaded", function () {
    let count = 0;
    let intervalId = setInterval(() => {
      document.getElementById("counter").textContent = count++;
    }, 1000);
  
    document.getElementById("plus").addEventListener("click", () => {
      document.getElementById("counter").textContent = count++;
    });
  
    document.getElementById("minus").addEventListener("click", () => {
      document.getElementById("counter").textContent = count--;
    });
  
    document.getElementById("heart").addEventListener("click", () => {
      const likesList = document.querySelector(".likes");
      const listItem = document.createElement("li");
      listItem.textContent = `Number ${count} has been liked.`;
      likesList.appendChild(listItem);
    });
  
    let isPaused = false;
  
    document.getElementById("pause").addEventListener("click", () => {
      isPaused = !isPaused;
      document.querySelectorAll("button:not(#pause)").forEach((button) => {
        button.disabled = isPaused;
      });
      document.getElementById("pause").textContent = isPaused ? "resume" : "pause";
      if (!isPaused) intervalId = setInterval(() => {
        document.getElementById("counter").textContent = count++;
      }, 1000);
      else clearInterval(intervalId);
    });
  
    document.getElementById("restart").addEventListener("click", () => {
      count = 0;
      document.getElementById("counter").textContent = count;
    });
  
    document.getElementById("comment-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const commentInput = document.getElementById("comment-input").value;
      const commentList = document.getElementById("list");
      const commentItem = document.createElement("p");
      commentItem.textContent = commentInput;
      commentList.appendChild(commentItem);
      document.getElementById("comment-input").value = "";
    });
  });
  