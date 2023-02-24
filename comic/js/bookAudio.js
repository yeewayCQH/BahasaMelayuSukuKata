
const video_box = document.querySelector(".result_box");
const close_btn = video_box.querySelector(".buttons .myButton");

function openVideo(){

    //show video box
    video_box.classList.add("activeResult");

    var elem = document.getElementById("myvideo");
    if (elem.requestFullscreen) {
	    elem.requestFullscreen();
	  } else if (elem.webkitRequestFullscreen) { /* Safari */
	    elem.webkitRequestFullscreen();
	  } else if (elem.msRequestFullscreen) { /* IE11 */
	    elem.msRequestFullscreen();
  	}

  	elem.autoplay = true;
    elem.load();
}

close_btn.onclick = ()=>{

	//hide video box
    video_box.classList.remove("activeResult");

    var elem = document.getElementById("myvideo");
    elem.pause();
}

window.addEventListener('load',() => {

	let fullURL = window.location.href;
	let strIndex = fullURL.indexOf("BookAudio.html?id=");
	let bookId = fullURL.substring(strIndex + 18);
    let isFound = false;

    if(bookId != null && bookId != "")
    {
		for (i = AllBooks.length; i--;){

			if(bookId == AllBooks[i].id) {

				// Set FlipHTML5 URL
				let myIframe = document.getElementById("flipBookFrame");
					myIframe.src = AllBooks[i].flipBookURL;

				// Add audio for story
				let storyMP3_tag =   '<span>Story: &nbsp;</span>'
								   + '<audio controls>'
								   + '<source src="'+AllBooks[i].storyMP3+'" type="audio/mpeg"> Your browser does not support the audio tag.'
								   + '</audio>';

				let content1 = document.getElementById("content1");
				content1.innerHTML = storyMP3_tag;

				if(AllBooks[i].songMP3 !=""){

					// Add audio for song
					let songMP3_tag =    '<span>Song: &nbsp;</span>'
									   + '<audio controls>'
									   + '<source src="'+AllBooks[i].songMP3+'" type="audio/mpeg"> Your browser does not support the audio tag.'
									   + '</audio>';

					let content2 = document.getElementById("content2");
					content2.innerHTML = songMP3_tag;
				}

				if(AllBooks[i].videoMP4 !=""){

					var videoObj = document.getElementById("myvideo");
					videoObj.src = AllBooks[i].videoMP4;

					// Add video
					let videoMP4_tag = '<button class="myButton" onclick="openVideo();">Open video in full screen</button>';

					let content2 = document.getElementById("content2");
					content2.innerHTML = videoMP4_tag;
				}

                isFound = true;
				break;
			}
		}
	}

	if(isFound == false)
		alert("The book is NOT FOUND!!!");

})

