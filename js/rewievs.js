const reviews = [
	{
		userName: "Eugene Andrusevich",
		longReview: "Пользовался услугами Александра несколько раз. Бурили сваи под фундамент, копали траншеи под фундамент. \
		Теплотрассу закопали, воду от скважины провели.Электрокабель закопали.Есть гидромолот, и его тоже успешно использовали  \
		для раскалывания бетонных блинчиков.Все понравилось.Качественно и оперативно",
	},
	{
		userName: "Argegat32",
		longReview: "Нужно было закрутить 6 винтовых свай. Связался с Александром в 20: 00 вечером в среду, в четверг  \
		в 10: 00 он уже был с экскаватором у меня на участке.Все закрутили, не смотря на то что работу усложняли  \
		крупные булыжники 50-80 см в диаметре.Помимо свай прокопали траншеи под канализацию, воду и электричество. \
		Уложили кабель и закопали.Работа выполнена очень качественно и профессионально.Сильно был впечатлен аккуратностью \
		Александра, ни одно деревце не пострадало, то что было на пути он аккуратно перенёс вместе с комом земли для дальнейшей \
		пересадки.Засыпано аккуратно. Человек знает своё дело.В дальнейшем буду обращаться только к Александру.Рекомендую.",
	},
	{
		userName: "Дмитрий Бобрович",
		longReview: "С Александром работаем достаточно давно. Всегда быстрое реагирование на заявки, качественная работа  \
		и адекватные цены. Экскаваторы с системой горизонтального выравнивания очень выручают на участках со сложным \
		рельефом.У нас только положительные эмоции от работы с Александром и его людьми.Спасибо!",
	},
	{
		userName: "Denis Voskibovich",
		longReview: "Прикладывали сети, делали фундаменты под рекламные конструкции, \
		установку кессона для скважины, бурили скважины под \
		буронабивные сваи.Подкупает точность выполнения работ, скорость и универсальность - \
		минимум ручного труда и затрат на \
		приведение в порядок места раскопок.Безналичный расчет.Вовремя предоставленные \
		документы.Очень довольны. Рекомендуем.",
	},
	{
		userName: "Дмитрий Безыма",
		longReview: "Обращался для помощи в подготовке участка к монтажу свайной ленты для \
	забора, копании траншей под коммуникации, устрайства дренажа и мелкого благоустройства  \
	на участке.По всем пунктам 5 +, все без лишних слов и вопросов, с добрым советом и быстрым \
	делом, без обедов и перекуров(хотя лично я бы рекомендовал)), я за пол дня вымотался как \
	передовик производства за 3 смены, вечером рук поднять не мог).Траншея под канализацию оказалась сразу под нужным \
	углом, даже лопату не пришлось брать в руки, а это 18(!) метров. За пол дня сделали то, \
	на что отводил 2 дня + в тот же день вкопал соседу на участке кольца канализации и ввел в \
	дом воду.Продуктивность и профессионализм поражает, огромное спасибо за проделанную работу!",
	},
	{
		userName: "Mikhail Butsko",
		longReview: "Пользовался услугами данной компании. Заказывал мини-экскаватор с \
	гидромолотом.Всем более чем доволен! Цель была ликвидировать монолитную комнату с участка. \
	(до этого приезжал кран 25т и поднять не смог) Решено ликвидировать комнату, обзвонил пару компаний и выбрал эту. \
	1. Лучшая цена из предложенных. 2. Оперативность приезда и работы. (Комнату разбили всю за 2 часа, хотя владельцы более \
	мощной техники обещали минимум 4 часа крушить)  3. Т.к.было свободное время сделал и траншею, \
	и выровняли фбс блоки.И засыпали песок в ленту фундамента. Буду обращаться ещё и рекомендовать знакомым.",
	},
	{
		userName: "Vladimir Holopuk",
		longReview: "Заказывали миниэкскаватор с ямобуром. Александр приехал вовремя, как \
	договаривались.Знает свое дело очень хорошо. Выполнил все работы по бурению отверстий  \
	под сваи на глубину 2 м быстро и качественно, за что большое ему спасибо. \
	Работой мы остались довольны.",
	},
	{
		userName: "Юра Дикусар",
		longReview: "Часто обращаюсь к Александру по вопросу проведения земляных работ. \
	Всегда работы выполняются качественно, оперативно. Цена адекватная.Спасибо за работу.Рекомендую",
	},
	{
		userName: "Наталья Котова",
		longReview: "Работала с этой организацией не один раз. Хочу отметить качество \
	выполняемой работы, быстроту выполнения.Специалисты внимательны к своей работе, четко понимающие свое дело. \
	Порадовали цены! Достаточно низкие!",
	},
	{
		userName: "Наталья Ващилина",
		longReview: "Обратились через интернет и остались очень довольны работой \
	Александра.Профессионально подошёл к выполнению работы, все \
	было сделано в срок, правильно с учетом всех наших пожеланий.Спасибо Вам!",
	},
	{
		userName: "Алексей Шумский",
		longReview: "Рекомендую! Не смотря на тот что в земле было много железа, и мусора.\
	Отверстия под сваи, сделали быстро и качественно! Спасибо!",
	},
	{
		userName: "Нестеренко Павел",
		longReview: "Сами монолитчики, работаем с этой командой регулярно, качественное \
	обслуживание, адекватные цены, пунктуальность. Рекомендуем.",
	},
	{
		userName: "Michail Bak",
		longReview: "Спасибо за оперативность. Все пробурили очень быстро, а самое главное \
	недорого!!! Рекомендую!!!!",
	},
	{
		userName: "Александр Сергеев",
		longReview: "Отличные операторы. Пользуюсь давно. Много навесного",
	},
]

export default reviews;