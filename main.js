var aboutContent = "about";
var hollywoodIsBurningContent = "Hollywood is Burning";
var bearContent = "Trans Mountain Pipeline Bear";
var deathBookContent = "Death Book";
var standingAtThePrecipiceContent = "Standing at the Precipice";
var lossContent = "Loss: A Future Meme Culture";
var intimacyExploreContent = "Intimacy Explore";
var otherWorkContent = "Other Work";


var aboutDescription = "Cole Wielgosz is a mixed media artist and designer from Winnipeg Canada. His speculative critical design work offers witty and uncomfortable cultural criticism through a variety of mediums, weaving surreal fictions that prod at the ribs of what it means to be human. Creating colloquial objects, print, video, generative media, installation, sculpture and performance, his work aims to bring laughter, discomfort, and reflection on the overwhelming sadness of our present age. His emphasis on craft, material exploration, and process lead to an ever-growing range of designed outcomes, putting equal emphasis on ideation and exploration of the built object as on the final output of the design. Cole is currently based out of Toronto Ontario.</br></br></br></br></br>contact: cdwielgosz@gmail.com";

var hollywoodIsBurningDescription = "Created for an ongoing speculative body of work which positions the future impacts of climate change within the past, 'Hollywood is Burning' is a playable boardgame set in an alternate 1970's where the climate change affects of 2070 are playing out. Players take ownership of mansions in the Hollywood hills, hiring prison fire crews and private fire crews to protect their assets. The key game mechanic allows fire to spread organically and unpredictably, using die rolls to determine if tiles adjacent to already burning tiles will catch. Players use their fire crews to manage this mechanic, hoping to survive the summer with the most property assets left.";

var bearDescription = "Framed as an object produced and given out by the Government of Canada, this speculative critical design piece intends to highlight the hypocrisy, irresponsibility and neglect the Government of Canada has employed in its purchase and expansion of the Trans Mountain Pipeline. The bear contains five soft switches which when pressed, trigger audio recordings from a speaker within the object. The five phrases are pulled directly from Government of Canada statements, and discuss how economic/ environmental growth should be weighed equally, and boast the immunity the federal Government has towards the BC Governments opposition of the pipeline. Reframing these statements in a patronizing object intends to highlight the neglect and disrespect the Government of Canada has shown towards those who oppose the pipeline as well as larger fossil fuel operations as a whole.";
var deathDescription = "Fabricated in response to the prompt 'create a noisy book' this piece intends to address the ever present noise of human mortality. The books pages contain descriptions of the stages of decay a cadaver passes through after death. Each stage is screen printed onto a sheet of sugar glass, supported by a wooden spine. Within days the book would begin to decay, turning opaque and crystallizing  rendering the text unreadable. After months the book would disintegrate completely, leaving only its wooden skeleton in place to eventually rot. The work explores the role of the designer in creating work that evokes the physical, emotive, and functional characteristics of its subject matter.";

var standingAtThePrecipiceDescription = "A DAT:// website with a poem reading 'Standing at the Precipice Engulfed in a Cacophony of Silence, the Oldest Computer Halts.' is seeded to peers as it sits below a melting block of ice. As peers access the website, the initial files succumb to the drowning along with the computer it was hosted on, leaving the only remnants of the site to exist within the connection of the remaining peers. After the final computer disconnects from the site, the digital space ceases to exist entirely.";

var lossDescription = "This installation intends to explore the roles that generative media and code could play in a hypothetical future visual culture. Through analyzing google search trends, we formed the hypothesis that the 'lifespan' of memes and trends within our visual culture has been decreasing since the early 2000's (illustrated in the poster below). In response to this trend we created a series of pieces which demonstrated how generative media and code could play a role in the inflation of memes.</br></br>brochure: the brochure created for this body of work was created through generative code, the design varies throughout each individual  print.</br></br>loss: a meme generator which pulls directly from the twitter api, turning corporate tweets into four different popular styles of meme. All four memes together form an additional meta meme: Loss. The piece intends to explore the concept of artificial memes, and the ability for code to replicate popular visual culture.</br></br>flashlight: this piece uses rudimentary motion tracking in order to create an 'interactive meme', the user shines their mobile device's flashlight in order to reveal a hidden joke within the image.</br></br>grape: when the user cuts into the grape with the scalpel, a layer of the 'they did surgery on a grape' meme appears on the screen, re-contextualizing the popular meme within a physical and interactive space using generative code.</br></br>vine visualization: using sound visualization code, the piece intends to bring the ephemeral and digital nature of popular Vines into a physical and art centred context.</br></br>pretty boy: a sculptural element added to the exhibition, outfitted with a speaker in order to play the Vines to provide context to their visual counterparts. </br></br>All pieces were created in collaboration with Christine Xia.";

var intimacyDescription = "The goal of this piece is to explore the impact of digital space on the experience of commensality. The built object intends to facilitate a feeling of intimacy through the elements of its physical form. The ovular construction and narrow width allow for participants to be seated in close proximity, while retaining the surface area necessary to remain a functional table. Two reliefs the approximate size of mobile devices are cut into the tables surface, which allow for the participants plates to cover them entirely. The physical act of partitioning a user from their mobile device intends to draw reflection upon the users personal relationships between digital space, personal interaction, and commensality.";

var otherWorkDescription = "placeholder for other work description";

var other1Description = "A critical commentary on the growing trend of business naming schemes containing two loosely connected nouns separated by '&' or '+', this code is written to combine two nouns from a list of over 4000, allowing it to generate one brand per second for an immeasurable amount of time, and placing the combinations in front of an aesthetically pleasing image with a 'shop' button.";

var other2Description = "A three dimensional form that houses a 35mm lens, seeking to evoke the emotive and physical characteristics of the mechanical iris within. The package employs a functioning mechanical iris build from cardstock as well as a three dimensional translation of its form as its primary structure.";

var other3Description = "This 7'' vinyl cover and sleeve explore musician Frank Ocean's 2017 single 'Chanel'. The single chronicles Ocean's duality within the hip-hop industry as an openly bisexual male. The unapologetic and unrestrained lyrics inspire the core motif of the design, letting the consumer physically 'unpack the layers' of Ocean's experience. In order to maintain the physical universe created through the design, the typography is incorporated directly into the image as a physical element rather than an overlay. The title appears subtly in faux leather, the lyrics in silk screen print on the garment printed in doubles to invoke further interpretation of Ocean's complex lyricism. These elements emphasize the inherent physicality of the object as an experience, rewarding the consumers exploration and interaction.";

var other4Description = "Photography series exploring the visual similarities of a selection of organic objects, connecting the observable environment with microscopic stills. The series aims to demonstrate the coextensive nature of organic matter beyond the observation of the human eye.  Shot in collaboration  with the Michener Institute Toronto.";

var other5Description = "This work aims to create a visual identity for Say Anything's 2004 album 'Is a Real Boy'. Using unifying elements it intends to provide cohesion within its visual style, while remaining true to the eclectic and often comedic nature of the albums content.";


function aboutAppear() { 
         $('<div class ="aboutPage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "aboutDescription">' + aboutDescription + '</div></div>').appendTo($('.mainContainer'));    
        } 
function hollywoodIsBurningAppear() { 
         $('<div class ="hollywoodIsBurningPage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + hollywoodIsBurningContent + '</div><div class = "hibImage1"></div><div class = "hibImage2"></div><div class = "hibImage3"></div><div class = "hibImage4"></div><div class = "hibDescription">' + hollywoodIsBurningDescription + '</div></div>').appendTo($('.mainContainer'));    
        } 
function bearAppear() { 
         $('<div class ="bearPage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + bearContent + '</div><div class = "bearImage1"></div><div class = "bearImage2"></div><div class = "bearImage3"></div><div class = "bearDescription">' + bearDescription + '</div></div>').appendTo($('.mainContainer'));    
        }
function deathBookAppear() { 
         $('<div class ="deathBookPage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + deathBookContent + '</div><div class = "deathImage1"></div><div class = "deathImage2"></div><div class = "deathImage3"></div><div class = "deathDescription">' + deathDescription + '</div></div>').appendTo($('.mainContainer'));    
        }
function standingAtThePrecipiceAppear() { 
         $('<div class ="standingAtThePrecipicePage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + standingAtThePrecipiceContent + '</div><div style="padding:44.19% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/379661529?autoplay=1&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script><div class = "standingAtThePrecipiceDescription">' + standingAtThePrecipiceDescription + '</div></div>').appendTo($('.mainContainer'));    
        }
function lossAppear() { 
         $('<div class ="lossPage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + lossContent + '</div><div class = "lossImage1"><div class = "lossImage2"></div><div class = "lossImage3"></div><div class = "lossImage4"></div><div class = "lossImage5"></div><div class = "lossDescription">' + lossDescription + '</div></div>').appendTo($('.mainContainer'));    
        }
function intimacyExploreAppear() { 
         $('<div class ="intimacyExplorePage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + intimacyExploreContent + '</div><div class = "intimacyImage1"></div><div class = "intimacyImage2"></div><div class = "intimacyImage3"></div><div class = "intimacyImage4"></div><div class = "intimacyDescription">' + intimacyDescription + '</div></div>').appendTo($('.mainContainer'));    
        }
function otherWorkAppear() { 
         $('<div class ="otherWorkPage" style = "top:' + (0 + (Math.random()*20)) + 'vh;left:' + (0 + (Math.random()*45)) +'vw;"><div class = "pieceTitle">' + otherWorkContent + '</div><div class = "otherImage1"></div><div class = "other1Description">' + other1Description + '</div><div class = "otherImage2"></div><div class = "otherImage3"></div><div class = "other2Description">' + other2Description + '</div><div class = "otherImage4"></div><div class = "other3Description">' + other3Description + '</div><div class = "otherImage5_1"></div><div class = "otherImage5_2"></div><div class = "otherImage5_3"></div><div class = "otherImage5_4"></div><div class = "otherImage5_5"></div><div class = "otherImage5_6"></div><div class = "otherImage5_7"></div><div class = "otherImage5_8"></div><div class = "otherImage5_9"></div><div class = "otherImage5_10"></div><div class = "other4Description">' + other4Description + '</div><div class = "otherImage6_1"></div><div class = "otherImage6_2"></div><div class = "otherImage6_3"></div><div class = "otherImage6_4"></div><div class = "other5Description">' + other5Description + '</div></div>').appendTo($('.mainContainer'));    
        }



$(document).ready(function() {
    $('.aboutLinks').click(function(){
    	aboutAppear();
    });
    $('.hollywoodIsBurningLink').click(function(){
    	hollywoodIsBurningAppear();
    });
    $('.bearLink').click(function(){
    	bearAppear();
    });
    $('.deathBookLink').click(function(){
    	deathBookAppear();
    });
    $('.standingAtThePrecipiceLink').click(function(){
    	standingAtThePrecipiceAppear();
    });
    $('.lossLink').click(function(){
    	lossAppear();
    });
    $('.intimacyExploreLink').click(function(){
    	intimacyExploreAppear();
    });
    $('.otherWorkLink').click(function(){
    	otherWorkAppear();
    });
});


	$( function() {
		$( ".drag" ).draggable({
			 containment: ".mainContainer",
			 scroll: false
		});
	} );






















