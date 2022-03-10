window.allcards = [

	{
		'name': 'Robert Lewandowski (21.08.1988)',
		'desc': 'Robert Lewandowski (Lewandowski) is a famous polish football player. He is the author of a rare, even incredible phenomenon in football called the penta-trick. He was not a pioneer in this movement, before him Dimitar Berbatov, Cristiano Ronaldo and Lionel Messi had achieved similar successes. Another thing is that Robert scored five goals in nine minutes, thereby setting a time record.',
		'photo': 'robert_l'
	},
	{
		'name': 'Jan Pawel II (May 18, 1920 - April 2, 2005)',
		'desc': 'John Paul II was the first Slav on the Holy See. His pontificate - one of the longest in the history of the papacy - helped to spread the ideals of tolerance, a return to universal values and the destruction of the "evil empire".',
		'photo': 'jan_pawel'
	},
	{
		'name': 'Maria Skłodowska-Curie',
		'desc': 'Marie Curie - French scientist of Polish descent, known for his work in the field of radioactivity. To this day, she has been one of the most important women in science. She was the first woman to receive the Nobel Prize, an honor she and her husband, Pierre Curie, received. Recognition was awarded to the couple in the category of "Physics" for research on the phenomenon of radiation, discovered by Henri Becquerel.',
		'photo': 'marie_curie'
	},
	{
		'name': 'Fryderyk Franciszek Szopen',
		'desc': 'He was a major representative of Polish music. He reinterpreted many genres: he revived the romantic prelude, created a piano ballad, poetized and dramatized dances - mazurka, polonaise, waltz. He turned the scherzo into an independent work. He enriched the harmony and the piano texture, and combined the classicism of form with melodic richness and imagination.',
		'photo': 'fredrich_shopen'
	},
	// біографія
	{
		'name': 'Mikolai Kopernik',
		'desc': 'He is primarily known as the creator of the heliocentric picture of the world (basically he stated that our planetary system looks the way it is). He mathematically substantiated the idea of ​​the motion of the Earth and other planets around the Sun, determined the sequence of planets, calculated their relative distance from the Sun, and so on.',
		'photo': 'kopernik'
	},
	{
		'name': 'Adam Malysz',
		'desc': 'Since 1996, Adam Malysz has won 38 World Cup victories, making his name at the world’s greatest ski jumping competitions: the World Championships four times, the World Cup four times and the Four Hills tournament in 2001.',
		'photo': 'adam_mal'
	},
	{
		'name': 'Andrzej Wajda',
		'desc': 'He was a Polish theatre and film director, a classic of European auteur cinema. Wajda won wide acclaim for his film "Canal" (1957), which won several awards, including a special prize at the Cannes Film Festival in 1957.',
		'photo': 'andrei_wajda'
	},
	{
		'name': 'Czesław Miłosz',
		'desc': 'Czeslaw Milosz is a Polish-American poet, novelist, translator and diplomat. Considered one of the greatest poets of the twentieth century, he received the Nobel Prize for Literature in 1980.',
		'photo': 'milosh'
	},
	{
		'name': 'Zbigeniew Preisner',
		'desc': 'Zbigniew Praisner is best known as the author of music for the films of the famous Polish director Krzysztof Kieslowski. In some of them Praisner\'s music is assigned to the fictional Dutch composer Van den Budenmaer.',
		'photo': 'preisner'
	},
	{
		'name': 'Robert Mak Lowicz',
		'desc': 'Robert is a Polish journalist and historian, who is well-known for promoting polish TV culture and food, the descriptions he made became so popular that he was moved to the all-national weekly magazine published by Gazeta Wyborcza.',
		'photo': 'robert'
	},
	{
		'name': 'Olga Tokarczuk',
		'desc': 'Olga is a writer and poetess, winner of some international awards and a Nobel Prize. Tokarczuk is one of the most critically acclaimed and most translated Polish writers',
		'photo': 'olga'
	},
	{
		'name': 'Agnieszka Holland',
		'desc': 'Olga is a writer and poetess, winner of some international awards and a Nobel Prize. Tokarczuk is one of the most critically acclaimed and most translated Polish writers',
		'photo': 'agnieszka'
	},
	{
		'name': 'Joanna Jędrzejczyk',
		'desc': 'She is a Polish mixed martial arts fighter, five-time world champion and four-time European amateur Thai boxing champion. Jędrzejczyk has competed in Thai boxing and kickboxing for more than 10 years, winning more than 60 fights',
		'photo': 'Joanna'
	},	
	{
		'name': 'Andrzej Sapkowski',
		'desc': 'Andrzej Sapkowski is a famous Polish writer and publicist. Best known as the author of the books about the adventures of the witch Heralt of Rivia.',
		'photo': 'sapkowski'
	},
	{
		'name': 'Jan Jaromir Aleksium',
		'desc': 'Jan Jaromir was a renowned pedagogue of several generations of graduates of the Academy of Fine Arts in Wroclaw and in Warsaw. He was also a graphic artist, painter, illustrator, and a renowned author of posters.',
		'photo': 'jan_jaromir'
	},
	// {
	// 	'name': 'Jerzy Wozniak',
	// 	'desc': 'He served a military and helf the rank of Colonel, a doctor, social activist, representative of the Generation of Columbuses. He later became a pulmonologist.',
	// 	'photo': 'wozniak'
	// },
	{
		'name': 'Ewa Szumanska',
		'desc': 'She was an actress, writer, traveler, co-creator of the satirical show "Studio 202" on the Polish radio, famous in particular for her cabaret role of the Young Doctor in cabaret sketches "From Young Doctor\'s Diary". After the war, she settled in Wroclaw, where she got involved in shaping the city\'s culture.',
		'photo': 'ewa'
	},
	{
		'name': 'Marek petrusewicz',
		'desc': 'He was a double world record breaker for 100 meters in breaststroke, vice champion of Europe for 200 meters, the representative of Poland in swimming during XV Summer Olympic Games in Helsinki. He was one of the brightest stars of Polish sport',
		'photo': 'marek'
	},
	{
		'name': 'Zdzisław Beksiński',
		'desc': 'Zdzisław Beksiński was one of the most popular Polish artists of the 20th century, Zdzislaw Beksinski, almost never gave any titles to his works. Because of this, his post-apocalyptic canvases are perceived as a kind of world of horror, despair, or whatever else you can see in his paintings.',
		'photo': 'polish_giger'
	}
]


$(document).ready(function(){
	var gw = $('.starting_page_card').width();
	var gh = $('.starting_page_card').height();

	var nw = gw * 0.85
	var nh = gh * 0.85

	$('body').append(`
		<style>
			.starting_page_card::before
			{
				content: "";
				width: ` + nw + `px;
				height: ` + nh + `px;
				background: rgba(213, 226, 233, 1);
				/* z-index: 100; */
				position: absolute;
				margin-top: ` + (gh - nh) / 2 + `px;
				/* margin-left: ` + (gw - nw) / 2 + `px; */
				filter: blur(200px);
				z-index: -1;
			}
		</style>
	`);
	docards()

});


document.addEventListener('click', event => {
    console.log('click_registered');

    // start game
    const gamestart = event.target.closest('#game_start .bpress');
    if (gamestart) { docards() }
    
    // pool
    const pool = event.target.closest('#show_full_pool .bpress');
    if (pool) { showpool() }

});



function docards()
{
	$('#game_table').empty();
	var madecards = []

    while (madecards.length < parseInt($('#game_players input').val()))
    {
    	var rnd_item = window.allcards[Math.floor(Math.random()*window.allcards.length)];
    	if (!madecards.includes(rnd_item['name'])){

			$('#game_table').append(
				`
					<div class="table_card">
						<div class="table_card_pic"><img draggable="false" src="assets/` + rnd_item['photo'] + `.png"></div>
						<div class="table_card_name">` + rnd_item['name'] + `</div>
						<div class="table_card_desc">` + rnd_item['desc'] + `</div>
					</div>
				`)
			madecards.push(rnd_item['name']);
    	}
    }
}



function showpool()
{
	$('#game_table').empty();

    for (var cr of window.allcards)
    {
		$('#game_table').append(
			`
				<div class="table_card">
					<div class="table_card_pic"><img draggable="false" src="assets/` + cr['photo'] + `.png"></div>
					<div class="table_card_name">` + cr['name'] + `</div>
					<div class="table_card_desc">` + cr['desc'] + `</div>
				</div>
			`)
    }

}