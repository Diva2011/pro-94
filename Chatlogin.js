function adduser()
{
    get_name = document.getElementById("user_name").value;
    localStorage.setItem("User_Name" , get_name);
    window.location = "Chatter_room.html";
}