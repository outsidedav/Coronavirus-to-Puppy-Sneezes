//credit goes to Steven Frank of Cloud to Butt (https://github.com/panicsteve/cloud-to-butt/)
// Credit also goes to lauren orsini  https://readwrite.com/2014/08/29/chrome-extension-build-your-own-caaaaarbs/
// and Tom Maxwell @tomaxwell on twitter
// below is a combination of all of their code.

walk(document.body);

function walk(node)  
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1: 
		case 9:  
		case 11: 
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling; 
				walk(child);
				child = next;
			}
			break;

		case 3: 
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bCoronavirus\b/g, "Puppy");
	v = v.replace(/\bCovid-19\b/g, "Dogs");
	v = v.replace(/\bCorona Virus\b/g, "Puppies");
	v = v.replace(/\bCOVID\b/g, "Kittens");
	v = v.replace(/\bCOVID-19\b/g, "pet");
	v = v.replace(/\bDeath\b/g, "snuggle");
	v = v.replace(/\bDeaths\b/g, "hugs");
    v = v.replace(/\bTrump\b/g, "Cats");
	v = v.replace(/\bvirus\b/g, "Cat disease");
	v = v.replace(/\bdisease\b/g, "Sneezes");
	
	textNode.nodeValue = v;
}
