function add_user()
{
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("Username", user_name);
    window.location="Phoenix_room.html";
}