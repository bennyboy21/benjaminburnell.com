var controller = new ScrollMagic.Controller();

// Hole Page JavaScript:
document.getElementById("read-More-Holder").addEventListener("click", function() {
	console.log("Read More");
})

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0})
					.setClassToggle(".one", "hideSectionOne")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger", triggerHook:0})
					.setClassToggle(".two", "hideSectionTwo")
					.addTo(controller)


// Skills Page JavaScript:
var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skills", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-One", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Two", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Three", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Four", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Five", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Six", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Seven", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#skill-Eight", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#CSS-Holder", "showSkills")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1", triggerHook:0, reverse: false})
					.setClassToggle("#CSS", "showSkills")
					.addTo(controller)




// About Page JavaScript
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook:0, reverse: false})
					.setClassToggle("#about", "showAbout")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook:0, reverse: false})
					.setClassToggle("#JS-Holder", "showAbout")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook:0, reverse: false})
					.setClassToggle("#about-Text", "showAbout")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook:0, reverse: false})
					.setClassToggle("#JS", "showAbout")
					.addTo(controller)

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", triggerHook:0, reverse: false})
					.setClassToggle("#read-More-Holder", "showAbout")
					.addTo(controller)
					// .addIndicators() 

		