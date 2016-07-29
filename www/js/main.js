var app = new Framework7();

function evolusi(nama) {
	var folder = '../img/evolusi' + nama + '/';
	var dulu = folder + 'dulu.jpg';
	var sekarang = folder + 'sekarang.jpg';

	var myPhotoBrowser = app.photoBrowser({
	    zoom: 400,
	    photos: [dulu, sekarang]
	}); 
}

function register() {
	app.alert("Succesfully register your account.")
}