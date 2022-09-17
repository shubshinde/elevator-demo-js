// On page load
$(document).ready(function () {
	// Set floor key controls
	$(".floor-keys .key").on("click", function () {
		// Set active key
		$(".floor-keys .key").removeClass("pressed");
		$(this).addClass("pressed");

		var pressedKey = +$(this).data("key");
		var bottomSpace = 0;
		var sectionHeight = 20;

		// Update floor number in display.
		$(".display span").text(pressedKey);

		// Calculate Lift bottom space
		bottomSpace = pressedKey * sectionHeight;

		var currentWidth = $(".doors").css("width");

		if (currentWidth != "10px") {
			$(".passenger-box").css("bottom", bottomSpace + "%");
		} else {
			const closeDoorAudio = new Audio("assets/please-close-door.mp3");
			closeDoorAudio.play();
		}
	});
	// Set function key controls
	$(".function-keys .func").on("click", function () {
		// Set active key
		$(".function-keys .func").removeClass("pressed");
		$(this).addClass("pressed");

		var pressedFunc = $(this).data("func");

		// Open Lift - Function
		if (pressedFunc == "open") {
			var currentWidth = $(".doors").css("width");

			if (currentWidth == "10px") {
				$(".doors").css("width", "50%");
				// Play Closing door audio
				let closeDoorAudio = new Audio("assets/door-close.mp3");
				closeDoorAudio.play();
			} else {
				$(".doors").css("width", "10px");
				// Play Opening door audio
				let openDoorAudio = new Audio("assets/door-open.mp3");
				openDoorAudio.play();
			}
		}
		// Alert Warning - Function
		if (pressedFunc == "alert") {
			setTimeout(() => {
				setInterval(() => {
					$("body").toggleClass("alert");
				}, 500);
				// Play alert music
				const alertAudio = new Audio("assets/alert.mp3");
				alertAudio.play();
			}, 500);
		}
	});
});
