function search() {
  var username = document.getElementById("username").value;

  console.log("https://api.github.com/users/" + username);

  var table = new XMLHttpRequest();
  var DATA = "https://api.github.com/users/" + username;

  table.open("GET", DATA, true);
  var objSerch;
  table.onload = function () {
    if (this.status == 200) {
      jsonTable = JSON.parse(this.responseText);
      objSerch = {
        login: jsonTable.login,
        avatar: jsonTable.avatar_url,
        repos: jsonTable.public_repos,
        followers: jsonTable.followers,
      };

      document.getElementById("imgProfil").src = objSerch.avatar;
      document.getElementById("nameProfil").innerHTML = objSerch.login;
      document.getElementById("followers").innerHTML = objSerch.followers;
      document.getElementById("repos").innerHTML = objSerch.repos;
      document.getElementById("link").target = "_blank";
      document.getElementById("link").href =
        "https://github.com/" + objSerch.login;
    } else {
      document.getElementById("imgProfil").src = "404.jpg";
      document.getElementById("nameProfil").innerHTML = "Profile not found ! ";
      document.getElementById("followers").innerHTML = "00";
      document.getElementById("repos").innerHTML = "00";
      document.getElementById("link").href = "#";
      document.getElementById("link").target = "";
    }
  };
  table.send();
}

function load() {
  var arrr = [];
  var obj;
  fetch("https://api.github.com/users")
    .then((res) => res.json()) //response type
    .then((data) => {
      for (var i = 0; i < 4; i++) {
        obj = {
          login: data[i].login,
          avatar: data[i].avatar_url,
        };
        arrr.push(obj);
        var name = "name" + i;
        var image = "src" + i;
        document.getElementById(name).innerHTML = arrr[i].login;
        document.getElementById(image).src = arrr[i].avatar;
      }
    });
}
