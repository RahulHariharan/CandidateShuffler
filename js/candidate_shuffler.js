var namelist = [// iOS
				"Benny",
				"Muttiah",
				"Ramkumar",
                // Android
				"Rahul",
				"Mohan Raja",
				"Kannan",
				"Natraj",
				// Web
				"Vasanth",
				"Mohan",
				"Suchitra",
				// admin ui
				"Sri",
				"Saikat",
				// Service
				"Sathya",
				"Sreenivas",
				// QA
				"Ramya",
				"Brindha",
				"Sharath",
				"Dinesh",
				"Magdalene",
				"Kevin",
				// Moodle
				"Selva",
				"Makita",
				];


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

function getShuffledList(){

	shuffle(namelist);
	return namelist;
}

