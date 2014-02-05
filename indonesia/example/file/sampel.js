$(function(){

	// Example #1
	$(".maparea1").mapael({
		map : {
			name : "indonesia",
			zoom: {
				enabled: true
			}			
		},
		plots: {
			'kalteng' : {
				latitude: -2.239267,
				longitude: 113.937607,
				tooltip: {content : "palangkaraya"}
			},
			'sumsel' : {
				latitude: -3.014356,
				longitude: 104.747543,
				tooltip: {content : "palembang"}
			},
			'kalsel' : {
				latitude: -3.283114,
				longitude: 114.602966,
				tooltip: {content : "banjarmasin"}
			},
			'jateng' : {
				latitude: -6.982318,
				longitude: 110.431595,
				tooltip: {content : "semarang"}
			}
		}
	});
	
	

	
	
	// Example #2
	$(".maparea2").mapael({
		map : {
			name : "indonesia",
			defaultPlot: {
			attrs : {
					opacity : 0.8
					, stroke: "#000"
					, "stroke-width": 1
					, "stroke-linejoin": "round"
				}
			
		},
			defaultArea : {
				attrsHover: {
					fill: "#fff"
					, stroke: "#5d5d5d"
					, "stroke-width": 1
					, "stroke-linejoin": "round"
				}
			}
		},
		legend : {
		plot :{
				display : false,
				title: "Kota dengan penduduk diatas 100ribu"
				, slices : [
					{
						max :110000, 
						attrs : {
							fill : "#47527b"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"dibawah 110ribu", 
						size : 1
					},
					{
						min :110000, 
						max :120000, 
						attrs : {
							fill : "#484d75"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"110-120ribu", 
						size : 1
					},
										{
						min :120000, 
						max :140000, 
						attrs : {
							fill : "#4a476e"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"120-140ribu", 
						size : 2
					},
					{
						min :140000, 
						max :170000, 
						attrs : {
							fill : "#4e4066"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"140-170ribu", 
						size : 3
					},
										{
						min :170000, 
						max :200000,  
						attrs : {
							fill : "#52395c"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"170-200ribu", 
						size : 4
					},
					{
						min :200000, 
						max :350000, 
						attrs : {
							fill : "#553153"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"200-350ribu", 
						size : 5
					},
										{
						min :350000, 
						max :500000, 
						attrs : {
							fill : "#5a294a"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"350-500ribu", 
						size : 6
					},
					{
						min :500000, 
						max :700000,  
						attrs : {
							fill : "#5e2240"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"500-700ribu", 
						size : 7
					},
										{
						min :700000, 
						max :1000000, 
						attrs : {
							fill : "#621b38"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"700ribu-1juta", 
						size : 8
					},
					{
						min :1000000, 
						max :1200000, 
						attrs : {
							fill : "#651530"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"1 - 1,2juta", 
						size : 9
					},
										{
						min :1200000, 
						max :2500000,  
						attrs : {
							fill : "#680d26"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"1,2juta- 2,5juta", 
						size : 10
					},
					{
						min :2500000, 
						max :5000000, 
						attrs : {
							fill : "#5d0513"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"2,5juta- 5juta", 
						size : 12
					},
					{
						min :5000000, 
						attrs : {
							fill : "#490000"
						},
						attrsHover :{
							transform : "s1.5",
							"stroke-width" : 1
						}, 
						label :"diatas 5juta", 
						size : 15
					}
				]
			},

		
			area : {
				display : false,
				title :"Kepadatan Penduduk", 
				slices : [
					{
						max :10, 
						attrs : {
							fill : "#41cf98"
						},
						label :"dibawah 10"
					},
					{
						min :10, 
						max :25, 
						attrs : {
							fill : "#5cc383"
						},
						label :"10-25"
					},
					{
						min :25, 
						max :50, 
						attrs : {
							fill : "#8aaf61"
						},
						label :"25-50"
					},
					{
						min :50, 
						max :75, 
						attrs : {
							fill : "#99a955"
						},
						label :"50-75"
					},
					{
						min :75, 
						max :100, 
						attrs : {
							fill : "#b79c3f"
						},
						label :"75-100"
					},
					{
						min :100, 
						max :150, 
						attrs : {
							fill : "#de8b21"
						},
						label :"100-150"
					},
					{
						min :150, 
						max :200, 
						attrs : {
							fill : "#e9861a"
						},
						label :"150-200"
					},
					{
						min :200, 
						max :300, 
						attrs : {
							fill : "#f48111"
						},
						label :"200-300"
					},
					{
						min :300, 
						max :400, 
						attrs : {
							fill : "#ef7d12"
						},
						label :"300-400"
					},
					{
						min :400, 
						max :500, 
						attrs : {
							fill : "#e37313"
						},
						label :"400-500"
					},
					{
						min :500, 
						max :600, 
						attrs : {
							fill : "#d46615"
						},
						label :"500-600"
					},
					{
						min :600, 
						max :800, 
						attrs : {
							fill : "#c45816"
						},
						label :"600-800"
					},
					{
						min :800, 
						max :1000, 
						attrs : {
							fill : "#b24818"
						},
						label :"800-1000"
					},
					{
						min :1000, 
						max :1250, 
						attrs : {
							fill : "#9f391a"
						},
						label :"1000-1250"
					},
					{
						min :1250, 
						max :1500, 
						attrs : {
							fill : "#8e2a1c"
						},
						label :"1250-1500"
					},
					{
						min :1500, 
						max :3000, 
						attrs : {
							fill : "#7e1c1e"
						},
						label :"1500-3000"
					},
					{
						min :3000, 
						max :7500, 
						attrs : {
							fill : "#70111f"
						},
						label :"3ribu-7500"
					},
					{
						min :7500, 
						max :10000, 
						attrs : {
							fill : "#660923"
						},
						label :"7500-10ribu"
					},
					{
						min :10000, 
						attrs : {
							fill : "#570318"
						},
						label :"diatas 10ribu"
					}
				]
			},
			
		},
		
		plots : {
			'Jakarta' : {
				latitude : -6.194976,
				longitude : 106.822931, 
				value : 9586705, 
				tooltip: {content : "Jakarta<br />Population: 9.586.705"}
			},
			'Banda Aceh' : {
				latitude :5.551747,
				longitude :95.317111, 
				value : 223466, 
				tooltip: {content : "Banda Aceh<br />Populasi: 223.466"}
			},
			'Lhoksumawe' : {
				latitude : 5.188462,
				longitude : 97.141024, 
				value : 129251, 
				tooltip: {content : "Lhoksumawe<br />Populasi: 129.251"}
			},
			'Langsa' : {
				latitude : 4.480252,
				longitude : 97.963582, 
				value : 124270, 
				tooltip: {content : "Langsa<br />Populasi: 124.270"}
			},
			'Denpasar' : {
				latitude : -8.656442,
				longitude : 115.222095, 
				value : 788589, 
				tooltip: {content : "Denpasar<br />Populasi: 788.589"}
			},
			'Pangkalpinang' : {
				latitude : -2.129634,
				longitude : 106.109646, 
				value : 162930, 
				tooltip: {content : "Pangkal Pinang<br />Populasi: 162.930"}
			},
			'Tangerang' : {
				latitude : -6.178038,
				longitude :106.63213, 
				value : 1789601, 
				tooltip: {content : "Tangerang<br />Populasi 1.789.601"}
			},
			'Tangsel' : {
				latitude : -6.288958,
				longitude : 106.718398, 
				value : 1290322, 
				tooltip: {content : "Tangerang Selatan<br />Populasi: 1.290.322"}
			},
			'Serang' : {
				latitude : -6.120068,
				longitude : 106.150202, 
				value : 428484, 
				tooltip: {content : "Serang<br />Population: 428.484"}
			},
			'Cilegon' : {
				latitude : -6.016923,
				longitude :106.040468, 
				value : 360125, 
				tooltip: {content : "Cilegon<br />Population: 360.125"}
			},
			'Bengkulu' : {
				latitude : -3.576514,
				longitude : 102.345842, 
				value : 296378, 
				tooltip: {content : "Bengkulu<br />Population: 296.378"}
			},
			'Gorontalo' : {
				latitude : 0.70373,
				longitude : 122.445168, 
				value : 173951, 
				tooltip: {content : "Gorontalo<br />Population: 173.951"}
			},
			'Jambi' : {
				latitude : -1.59648,
				longitude : 103.615429, 
				value : 515901, 
				tooltip: {content : "Jambi<br />Population: 515.901"}
			},
			'Bandung' : {
				latitude : -6.909766,
				longitude : 107.610518, 
				value : 2394873, 
				tooltip: {content : "Bandung<br />Population: 2.394.873"}
			},
			'Bekasi' : {
				latitude : -6.248766,
				longitude : 106.996828, 
				value : 2334871, 
				tooltip: {content : "Bekasi<br />Population: 2.334.871"}
			},
			'Depok' : {
				latitude : -6.388862,
				longitude : 106.829991, 
				value : 1738570, 
				tooltip: {content : "Depok<br />Population: 1.738.570"}
			},
			'Bogor' : {
				latitude : -6.600101,
				longitude : 106.800143, 
				value : 950334, 
				tooltip: {content : "Bogor<br />Population: 950.334"}
			},
			'Tasik' : {
				latitude : -7.328001,
				longitude : 108.214214, 
				value : 578046, 
				tooltip: {content : "Tasikmalaya<br />Populasi: 578.046"}
			},
			'Cimahi' : {
				latitude : -6.899587,
				longitude : 107.533556, 
				value : 541177, 
				tooltip: {content : "Cimahi<br />Populasi: 541.177"}
			},
			'Sukabumi' : {
				latitude : -6.924052,
				longitude : 106.922359, 
				value : 298681, 
				tooltip: {content : "Sukabumi<br />Population: 298.681"}
			},
			'Cirebon' : {
				latitude : -6.717034,
				longitude : 108.56427, 
				value : 296389, 
				tooltip: {content : "Cirebon<br />Populasi: 296.389"}
			},
			'Banjar' : {
				latitude : -7.366776,
				longitude : 108.533033, 
				value : 123341, 
				tooltip: {content : "Banjar<br />Populasi: 123.341"}
			},
			'Semarang' : {
				latitude : -6.966514,
				longitude : 110.416481, 
				value : 1520481, 
				tooltip: {content : "Semarang<br />Populasi: 1.520.481"}
			},
			'Surakarta' : {
				latitude : -7.566731,
				longitude : 110.816659, 
				value : 499337, 
				tooltip: {content : "Bandung<br />Populasi: 499.337"}
			},
			'Pekalongan' : {
				latitude : -6.883003,
				longitude : 109.67, 
				value : 274839, 
				tooltip: {content : "Pekalongan<br />Populasi: 274.839"}
			},
			'Tegal' : {
				latitude : -6.866887,
				longitude : 109.133358, 
				value : 239599, 
				tooltip: {content : "Tegal<br />Populasi: 239.599"}
			},
			'Salatiga' : {
				latitude : -7.301621,
				longitude : 110.472656, 
				value : 170332, 
				tooltip: {content : "Salatiga<br />Populasi: 170.332"}
			},
			'Magelang' : {
				latitude : -7.480937,
				longitude :110.21392, 
				value : 118227, 
				tooltip: {content : "Magelang<br />Populasi: 118.227"}
			},
			'Surabaya' : {
				latitude : -7.264501,
				longitude : 112.745635, 
				value : 2765487, 
				tooltip: {content : "Surabaya<br />Populasi: 2.765.487"}
			},
			'Malang' : {
				latitude : -7.982345,
				longitude : 112.626835, 
				value : 820243, 
				tooltip: {content : "Malang<br />Populasi: 820.243"}
			},
			'Kediri' : {
				latitude : -7.816513,
				longitude : 112.011733, 
				value : 268507, 
				tooltip: {content : "Kediri<br />Populasi: 268.507"}
			},
			'Probolinggo' : {
				latitude : -7.753581,
				longitude : 113.215073, 
				value : 196957, 
				tooltip: {content : "Probolinggo<br />Populasi: 196.957"}
			},
			'Pasuruan' : {
				latitude : -7.639564,
				longitude : 112.906955, 
				value : 186262, 
				tooltip: {content : "Pasuruan<br />Populasi: 186.262"}
			},
			'Madiun' : {
				latitude : -7.630055,
				longitude : 111.516894, 
				value : 170964, 
				tooltip: {content : "Madiun<br />Populasi: 170.964"}
			},
			'Batu' : {
				latitude : -7.867824,
				longitude : 112.524995, 
				value : 223466, 
				tooltip: {content : "Batu<br />Populasi: 223.466"}
			},
			'Blitar' : {
				latitude : -8.10089,
				longitude : 112.14982, 
				value : 131968, 
				tooltip: {content : "Blitar<br />Populasi: 131.968"}
			},
			'Mojokerto' : {
				latitude : -7.468251,
				longitude : 112.437084, 
				value : 120196, 
				tooltip: {content : "Mojokerto<br />Populasi: 120.196"}
			},
			'Pontianak' : {
				latitude : -0.024333,
				longitude : 109.330248, 
				value : 554764, 
				tooltip: {content : "Pontianak<br />Populasi: 554.764"}
			},
			'Banjarmasin' : {
				latitude : -3.327393,
				longitude : 114.588429, 
				value : 612849, 
				tooltip: {content : "Banjarmasin<br />Populasi: 612.849"}
			},
			'Banjarbaru' : {
				latitude : -3.465734,
				longitude : 114.748109, 
				value : 192309, 
				tooltip: {content : "Banjarbaru<br />Populasi: 192.309"}
			},
			'Palangkaraya' : {
				latitude : -2.207427,
				longitude : 113.916525, 
				value : 200608, 
				tooltip: {content : "Palangka Raya<br />Populasi: 200.608"}
			},
			'Samarinda' : {
				latitude : -0.501856,
				longitude : 117.154403, 
				value : 685859, 
				tooltip: {content : "Samarinda<br />Populasi: 685.859"}
			},
			'Balikpapan' : {
				latitude : -1.269171,
				longitude : 116.837216, 
				value : 526508, 
				tooltip: {content : "Balikpapan<br />Populasi: 526.508"}
			},
			'Tarakan' : {
				latitude : 3.303005,
				longitude : 117.623496, 
				value : 178854, 
				tooltip: {content : "Tarakan<br />Populasi: 178.854"}
			},
			'Bontang' : {
				latitude : 0.117416,
				longitude : 117.443047, 
				value : 140238, 
				tooltip: {content : "Bontang<br />Populasi: 140.238"}
			},
			'Batam' : {
				latitude : 1.049758,
				longitude : 104.044012, 
				value : 917998, 
				tooltip: {content : "Batam<br />Populasi: 917.998"}
			},
			'Tanjungpinang' : {
				latitude : 0.918156,
				longitude : 104.446726, 
				value : 177396, 
				tooltip: {content : "Tanjung Pinang<br />Populasi: 177.396"}
			},
			'Bandarlampung' : {
				latitude : -5.448766,
				longitude : 105.266628,
				value : 881801, 
				tooltip: {content : "Bandar Lampung<br />Populasi: 881.801"}
			},
			'Metro' : {
				latitude : -5.115394,
				longitude : 105.299184, 
				value : 142733, 
				tooltip: {content : "Metro<br />Populasi: 142.733"}
			},
			'Ternate' : {
				latitude : 0.792407,
				longitude : 127.366709, 
				value : 158418, 
				tooltip: {content : "Ternate<br />Populasi: 158.418"}
			},
			'Mataram' : {
				latitude : -8.586442,
				longitude : 116.118105, 
				value : 402843, 
				tooltip: {content : "Mataram<br />Populasi: 402.843"}
			},
			'Bima' : {
				latitude : -8.459489,
				longitude : 118.726541, 
				value : 112130, 
				tooltip: {content : "Bima<br />Populasi: 112.130"}
			},
			'Kupang' : {
				latitude : -10.183368,
				longitude :123.58329, 
				value : 315768, 
				tooltip: {content : "Kupang<br />Populasi: 315.768"}
			},
			'Jayapura' : {
				latitude : -2.531525,
				longitude : 140.715762, 
				value : 233859, 
				tooltip: {content : "Jayapura<br />Populasi: 233.859"}
			},
			'Sorong' : {
				latitude : -0.86664,
				longitude :131.249789, 
				value : 118017, 
				tooltip: {content : "Sorong<br />Populasi: 118.017"}
			},
			'Pekanbaru' : {
				latitude :0.526671,
				longitude :101.451441, 
				value : 882045, 
				tooltip: {content : "Pekanbaru<br />Populasi: 882.045"}
			},
			'Dumai' : {
				latitude : 1.665632,
				longitude : 101.447286, 
				value : 173866, 
				tooltip: {content : "Dumai<br />Populasi: 173.866"}
			},
			'Makassar' : {
				latitude : -5.131092,
				longitude : 119.419127, 
				value : 1331391, 
				tooltip: {content : "Makassar<br />Populasi: 1.331.391"}
			},
			'Parepare' : {
				latitude : -4.016292,
				longitude :119.623753,
				value : 125207, 
				tooltip: {content : "Parepare<br />Populasi: 125.207"}
			},
			'Palopo' : {
				latitude : -3.000074,
				longitude : 120.197901, 
				value : 116.152, 
				tooltip: {content : "Palopo<br />Populasi: 116.152"}
			},
			'Palu' : {
				latitude : -0.89787,
				longitude : 119.851708, 
				value : 310168, 
				tooltip: {content : "Palu<br />Populasi: 310.168"}
			},
			'Kendari' : {
				latitude : -3.976291,
				longitude : 122.518532, 
				value : 264673, 
				tooltip: {content : "Kendari<br />Populasi: 264.673"}
			},
			'Bau-bau' : {
				latitude : -5.468332,
				longitude : 122.633438, 
				value : 106638, 
				tooltip: {content : "Bau-bau<br />Populasi: 106.638"}
			},
			'Manado' : {
				latitude : 1.491564,
				longitude : 124.843037, 
				value : 394683, 
				tooltip: {content : "Manado<br />Populasi: 394.683"}
			},
			'Bitung' : {
				latitude :1.453237,
				longitude : 125.204054, 
				value : 155385, 
				tooltip: {content : "Bitung<br />Populasi: 155.385"}
			},
			'Padang' : {
				latitude : -0.951475,
				longitude : 100.360315, 
				value : 799750, 
				tooltip: {content : "Padang<br />Populasi: 799.750"}
			},
			'Bukittinggi' : {
				latitude : -0.305491,
				longitude : 100.368368, 
				value : 111312, 
				tooltip: {content : "Bukit Tinggi<br />Populasi: 111.312"}
			},
			'Palembang' : {
				latitude : -2.987806,
				longitude : 104.760236, 
				value : 1440678, 
				tooltip: {content : "Palembang<br />Populasi: 1.440.678"}
			},
			'Lubuklinggau' : {
				latitude : -3.297103,
				longitude : 102.862455, 
				value : 158824, 
				tooltip: {content : "Lubuk Linggau<br />Populasi: 158.824"}
			},
			'Prabumulih' : {
				latitude : -3.440899,
				longitude : 104.228232, 
				value : 121137, 
				tooltip: {content : "Prabumulih<br />Populasi: 121.137"}
			},
			'Medan' : {
				latitude : 3.590606,
				longitude : 98.666918, 
				value : 2097610, 
				tooltip: {content : "Medan<br />Populasi: 2.097.610"}
			},
			'Binjai' : {
				latitude : 3.593417,
				longitude : 98.479765, 
				value : 235450, 
				tooltip: {content : "Binjai<br />Populasi: 235.450"}
			},
			'Pematangsiantar' : {
				latitude : 2.959413,
				longitude : 99.069629, 
				value : 235698, 
				tooltip: {content : "Pematang Siantar<br />Populasi: 234.698"}
			},
			'Tanjungbalai' : {
				latitude : 2.964952,
				longitude : 99.800442, 
				value : 154455, 
				tooltip: {content : "Tanjung Balai<br />Populasi: 154.445"}
			},
			'Tebingtinggi' : {
				latitude : 3.384394,
				longitude : 99.204111, 
				value : 145248, 
				tooltip: {content : "Tebing Tinggi<br />Populasi: 145.248"}
			},
			'Padangsidempuan' : {
				latitude : 1.381333,
				longitude :99.273251, 
				value : 136275, 
				tooltip: {content : "Padang Sidempuan<br />Populasi: 136.275"}
			},
			'Yogyakarta' : {
				latitude : -7.798079,
				longitude : 110.367576,
				value : 388627, 
				tooltip: {content : "Yogyakarta<br />Populasi: 388.627"}
			},
		},
		areas: {
			"aceh": {
				"value": "78",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Provinsi Aceh<\/span><br \/>Populasi : 4,48 juta" 
				}
			},
			"sumut": {
				"value": "178",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sumatra Utara<\/span><br \/>Populasi : 12,98 juta"
				}
			},
			"sumbar": {
				"value": "115",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sumatera Barat<\/span><br \/>Populasi : 4,84 juta"
				}
			},
			"riau": {
				"value": "64",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Riau<\/span><br \/>Populasi : 5,54 juta"
				}
			},
			"kepri": {
				"value": "205",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kep. Riau<\/span><br \/>Populasi : 1,69 juta"
				}
			},
			"jambi": {
				"value": "62",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jambi<\/span><br \/>Populasi : 3,09 juta"
				}
			},
			"sumsel": {
				"value": "81",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sumatra Selatan<\/span><br \/>Populasi : 7,44 juta"
				}
			},
			"babel": {
				"value": "74",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kep. Bangka Belitung<\/span><br \/>Populasi : 1,22 juta"
				}
			},
			"bengkulu": {
				"value": "86",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bengkulu<\/span><br \/>Populasi : 1,71 juta"
				}
			},
			"lampung": {
				"value": "220",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Lampung<\/span><br \/>Populasi : 7,59 juta"
				}
			},
			"banten": {
				"value": "1100",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Banten<\/span><br \/>Populasi : 10,54 juta"
				}
			},
			"jakarta": {
				"value": "14469",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">DKI Jakarta<\/span><br \/>Populasi : 9,59 juta"
				}
			},
			"jabar": {
				"value": "1217",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jawa Barat<\/span><br \/>Populasi : 43,02 juta"
				}
			},
			"jateng": {
				"value": "987",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jawa Tengah<\/span><br \/>Populasi : 32,38 juta"
				}
			},
			"yogya": {
				"value": "1104",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">DI Yogyakarta<\/span><br \/>Populasi : 3,45 juta"
				}
			},
			"jatim": {
				"value": "784",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Jawa Timur<\/span><br \/>Populasi : 37,47"
				}
			},
			"bali": {
				"value": "673",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Bali<\/span><br \/>Populasi : 3,89 juta"
				}
			},
			"ntb": {
				"value": "242",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">NTB<\/span><br \/>Populasi : 4,49 juta"
				}
			},
			"ntt": {
				"value": "96",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">NTT<\/span><br \/>Populasi : 4,68 juta"
				}
			},
			"kalbar": {
				"value": "30",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kalimantan Barat<\/span><br \/>Populasi : 4,39 juta"
				}
			},
			"kalteng": {
				"value": "14",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kalimantan Tengah<\/span><br \/>Populasi : 2,2 juta"
				}
			},
			"kalsel": {
				"value": "94",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kalimantan Selatan<\/span><br \/>Populasi : 3,63 juta"
				}
			},
			"kaltim": {
				"value": "14",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kalimantan Timur<\/span><br \/>Populasi : 3,043,689"
				}
			},
			"kaltara": {
				"value": "10",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Kalimantan Utara<\/span><br \/>Populasi : 738.163"
				}
			},
			"sulut": {
				"value": "164",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sulawesi Utara<\/span><br \/>Populasi : 2,27 juta"
				}
			},
			"gorontalo": {
				"value": "92",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Gorontalo<\/span><br \/>Populasi : 1,04 juta"
				}
			},
			"sulteng": {
				"value": "43",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sulawesi Tengah<\/span><br \/>Populasi : 2,63 juta"
				}
			},
			"sulbar": {
				"value": "69",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sulawesi Barat<\/span><br \/>Populasi : 1,16 juta"
				}
			},
			"sulsel": {
				"value": "172",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sulawesi Selatan<\/span><br \/>Populasi : 8,03 juta"
				}
			},
			"sultra": {
				"value": "59",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Sulawesi Tenggara<\/span><br \/>Populasi : 2,23 juta"
				}
			},
			"maluku": {
				"value": "33",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Maluku<\/span><br \/>Populasi : 1,53 juta"
				}
			},
			"malut": {
				"value": "32",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Maluku Utara<\/span><br \/>Populasi : 1,03 juta"
				}
			},
			"papua-barat": {
				"value": "8",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Papua Barat<\/span><br \/>Populasi : 0,76 juta"
				}
			},
			"papua": {
				"value": "10",
				"attrs": {
					"href": "#"
				},
				"tooltip": {
					"content": "<span style=\"font-weight:bold;\">Papua<\/span><br \/>Populasi : 2,85 juta"
				}
			}
		}
	});
	

});
