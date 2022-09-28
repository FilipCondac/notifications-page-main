function messageRead(post)
{
    var element = document.getElementById(post);
  element.classList.remove("unread-notification");
}

function onClickRemover(post){
    document.getElementById(post).removeAttribute("onclick")
}

var data = 3;

        //printing default value of data that is 0 in h2 tag
        document.getElementById("counting").innerText = data;

        //creation of decrement function
        function decrement() {
          data = data - 1;
          document.getElementById("counting").innerText = data;
        }
    
        function decrementAll() {
            data = 0;
            onClickRemover("post1");
            onClickRemover("post2");
            onClickRemover("post3");
            document.getElementById("counting").innerText = data;
          }