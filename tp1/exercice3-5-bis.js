const images = ['blackness.jpg', '10.jpg', 'deux.jpg', 'trois.jpg', 'un.jpeg'];
let curseur = 0;

function next() 
{
	if (curseur < images.length - 1) 
	{
		curseur++;
		previousButton.disabled = false;
	}
	if (curseur == images.length - 1) 
	{
		nextButton.disabled = true;
	}
	monImage.src = '../images/' + images[curseur];
}

function previous() {
	if (curseur > 0) 
	{
		curseur--;
		nextButton.disabled = false;
	}
	if (curseur == 0) 
	{
		previousButton.disabled = true;
	}
	monImage.src = '../images/' + images[curseur];
}