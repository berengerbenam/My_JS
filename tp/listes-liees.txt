const ouvrages = {
	mariama: ['Une si longue lettre', 'Chant écarlate'],
	bodian: ["Sous l'orage", 'Le sang des masques', 'Noces sacrées'],
	sembene: ['Les bouts de bois de Dieu', 'Xala', 'Voltaiques', "L'harmattan"]
}

function chargerLivres() 
{
	// const livres = (auteurs.value != 'aucun') ? ouvrages[auteurs.value] : [];

	let books;

	if (auteurs.value == 'aucun') 
	{
		books = ['Choisissez un ouvrage'];
	}
	else 
	{
		books = ouvrages[auteurs.value];
	}

	let codeHTML = '';

	for (let i = 0; i < books.length; i++) 
	{
		codeHTML += '<option>' + books[i] + '</option>';
	}

	livres.innerHTML = codeHTML;
}