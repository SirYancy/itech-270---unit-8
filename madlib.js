function madLib() {
    event.preventDefault(); // Deprecated
    var name, color, animal, activity, adjective;
    name = document.getElementById("nameBox").value;
    color = document.getElementById("colorBox").value;
    animal = document.getElementById("animalBox").value;
    activity = document.getElementById("activityBox").value;
    adjective = document.getElementById("adjectiveBox").value;


    var story = "<p>Here is a story about " + name;
    story += ", a silly man with a " + animal;


    document.getElementById("story").innerHTML = story;

}