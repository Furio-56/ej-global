ej.addCulture( "quz-EC", {
	name: "quz-EC",
	englishName: "Quichua (Ecuador)",
	nativeName: "runa shimi (Ecuador Suyu)",
	language: "quz",
	numberFormat: {
		",": ".",
		".": ",",
		negativeInfinity: "-ifedh",
		positiveInfinity: "+ifedh",
		percent: {
			pattern: ["-n%","n%"],
			",": ".",
			".": ","
		},
		currency: {
			pattern: ["$ -n","$ n"],
			",": ".",
			".": ","
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["inti","awaki","wanra","chillay","kullka","chaska","wakma"],
				namesAbbr: ["int","awk","wan","chy","kuk","cha","wak"],
				namesShort: ["in","aw","wn","cy","ku","ck","wk"]
			},
			months: {
				names: ["kulla","panchi","pawkar","ayriwa","aymuray","raymi","sitwa","karwa","kuski","wayru","sasi","kapak",""],
				namesAbbr: ["kull","pan","paw","ayr","aym","ray","sit","kar","kus","way","sas","kap",""]
			},
			AM: null,
			PM: null,
			patterns: {
				d: "dd/MM/yyyy",
				D: "dddd, dd' de 'MMMM' de 'yyyy",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, dd' de 'MMMM' de 'yyyy H:mm",
				F: "dddd, dd' de 'MMMM' de 'yyyy H:mm:ss",
				M: "d' de 'MMMM",
				Y: "MMMM' de 'yyyy"
			}
		}
	}
});
