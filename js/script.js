// KEY_API = "AIzaSyDp1v9Zp7RU5dbk2nLf65GU_yfrjUa6gKs"

let container = document.getElementById('videos_gallery')
let lecteur = document.getElementById('player')
let title;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '92afb3d11emsh84a14b583311946p124c6bjsn28b722ba3bf9',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

fetch('https://youtube-v31.p.rapidapi.com/search?q=Fally ipupa&part=snippet%2Cid&regionCode=US&maxResults=50&order=date', options)
.then(response => response.json())
.then(response => { 
	console.log(response.items)  
	response.items.forEach(element => {

		let div1 = document.createElement('a')
				div1.setAttribute('class',"videos_gallery_item")
				div1.setAttribute('href',`./pages/watch.html?id=${element.id.videoId}`)

				let div11 = document.createElement('div')
					div11.setAttribute('class',"video_placeholder")
					let img1 = document.createElement('img')
						img1.setAttribute('src',element.snippet.thumbnails.high.url)
						img1.setAttribute('alt',"")
					let div111 = document.createElement('div')
						div111.setAttribute('class',"video_duration") 
						div111.innerText = "2:13"
				div11.appendChild(img1)
				div11.appendChild(div111)

				let div12 = document.createElement('div')
					div12.setAttribute('class',"videos_details")
									
					let div121 = document.createElement('div')
						div121.setAttribute('class',"chaine_picture")
						let img2 = document.createElement('img')
							img2.setAttribute('src',element.snippet.thumbnails.medium.url)
							img2.setAttribute('alt',"")
					div121.appendChild(img2)
					
					let div122 = document.createElement('div')
						let div1221 = document.createElement('div')
							div1221.setAttribute('class',"videos_title")
							div1221.innerText = element.snippet.title
						let div1222 = document.createElement('div')
							div1222.setAttribute('class',"chaine_name")
							div1222.innerText = element.snippet.channelTitle
						let div1223 = document.createElement('div')
							div1223.setAttribute('class',"views_times")
							div1223.innerText = "4M vues · il y a 4 mois"
					div122.appendChild(div1221)
					div122.appendChild(div1222)
					div122.appendChild(div1223)
				div12.appendChild(div121)
				div12.appendChild(div122)
			div1.appendChild(div11)
			div1.appendChild(div12)

			container.appendChild(div1)
	}); 
})
.catch(err => console.error(err));


document.getElementById('search_btn').addEventListener('click',()=>{
	// container
	fetch(`https://youtube-v31.p.rapidapi.com/search?q=${title}&part=snippet%2Cid&regionCode=US&maxResults=50&order=date`, options)
	.then(response => response.json())
	.then(response => {   
		response.items.forEach(element => {

			let div1 = document.createElement('div')
				div1.setAttribute('class',"videos_gallery_item")
				div1.setAttribute('onClick',"window.location.pathname='/pages/watch.html'")

				let div11 = document.createElement('div')
					div11.setAttribute('class',"video_placeholder")
					let img1 = document.createElement('img')
						img1.setAttribute('src',"./images/vid_placeholder.webp")
						img1.setAttribute('alt',"")
					let div111 = document.createElement('div')
						div111.setAttribute('class',"video_duration") 
						div111.innerText = "2:13"
				div11.appendChild(img1)
				div11.appendChild(div111)

				let div12 = document.createElement('div')
					div12.setAttribute('class',"videos_details")
					
					let div121 = document.createElement('div')
						div121.setAttribute('class',"chaine_picture")
						let img2 = document.createElement('img')
							img2.setAttribute('src',"./images/avatar.png")
							img2.setAttribute('alt',"")
					div121.appendChild(img2)
					
					let div122 = document.createElement('div')
						let div1221 = document.createElement('div')
							div1221.setAttribute('class',"videos_title")
							div1221.innerText = "C'est pourquoi Ronaldinho a été traité de sorcier"
						let div1222 = document.createElement('div')
							div1222.setAttribute('class',"chaine_name")
							div1222.innerText = "Joga Bonito"
						let div1223 = document.createElement('div')
							div1223.setAttribute('class',"views_times")
							div1223.innerText = "4M vues · il y a 4 mois"
					div122.appendChild(div1221)
					div122.appendChild(div1222)
					div122.appendChild(div1223)
				div12.appendChild(div121)
				div12.appendChild(div122)
			div1.appendChild(div11)
			div1.appendChild(div12)

			container.appendChild(div1)
		});  
	})
	.catch(err => console.error(err));
})