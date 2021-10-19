

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

				let storyContent = document.getElementById("storyContent");
				storyContent.innerHTML = storyMP3_tag;

				if(AllBooks[i].songMP3 !=""){

					// Add audio for song
					let songMP3_tag =    '<span>Song: &nbsp;</span>'
									   + '<audio controls>'
									   + '<source src="'+AllBooks[i].songMP3+'" type="audio/mpeg"> Your browser does not support the audio tag.'
									   + '</audio>';

					let songContent = document.getElementById("songContent");
					songContent.innerHTML = songMP3_tag;
				}

                isFound = true;
				break;
			}
		}
	}

	if(isFound == false)
		alert("The book is NOT FOUND!!!");

})