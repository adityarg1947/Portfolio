var arr = [
    { dp: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWwlMjBwcm9maW5sZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D", story: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9kZWwlMjBwcm9maW5sZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { dp: "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", story: "https://images.unsplash.com/photo-1469460340997-2f854421e72f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWwlMjBwcm9maW5sZSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D" },
    { dp: "https://media.istockphoto.com/id/1498172360/photo/perfect-art-woman-in-black-turtleneck-on-a-dark-background-brunette-long-hair-is-pulled-into.webp?b=1&s=170667a&w=0&k=20&c=-1a1J9yxLLKqTyQ4f4DuwcM-tN_10uVE36-lEqzVRGM=", story: "https://images.unsplash.com/photo-1550928431-ee0ec6db30d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1vZGVsJTIwcHJvZmlubGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D" },
    { dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fG1vZGVsJTIwcHJvZmlubGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D", story: "https://images.unsplash.com/photo-1503104834685-7205e8607eb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vZGVsJTIwcHJvZmlubGUlMjBwaG90b3N8ZW58MHx8MHx8fDA%3D" }
];

var storyian = document.querySelector("#storyian");
var clutter = "";

arr.forEach(function(elem, idx) {
    clutter += `<div class="story">
        <img id="${idx}" src="${elem.dp}" alt="">
    </div>`;
});

storyian.innerHTML = clutter;

storyian.addEventListener("click", function(dets) {
    document.querySelector("#full").style.display = "block";
    document.querySelector("#full").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    setTimeout(function(){
        document.querySelector("#full").style.display = "none";
    }, 2000);
});
