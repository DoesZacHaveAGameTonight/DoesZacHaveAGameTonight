function hasGame() {

    let date = new Date();
    let day = date.getDay();

    let ans = "";

    if (day >= 5) {

        ans = "Zac has a game tonight!";

    } else {

        ans = "Zac doesn't have a game tonight"

    }

    document.getElementById("answer").innerHTML = ans;

}