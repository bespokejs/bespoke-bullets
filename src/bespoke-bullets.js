(function(bespoke) {

	bespoke.plugins.bullets = function(deck) {
		var activeSlideIndex,
			activeBulletIndex,

			bullets = deck.slides.map(function(slide) {
				return [].slice.call(slide.querySelectorAll('[data-bespoke-bullet]'));
			}),

			activateBullet = function(slideIndex, bulletIndex) {
				activeSlideIndex = slideIndex;
				activeBulletIndex = bulletIndex;
				
				bullets.forEach(function(slide, s) {
					slide.forEach(function(bullet, b) {
						bullet.classList.add('bespoke-bullet');

						if (s < slideIndex || s === slideIndex && b <= bulletIndex) {
							bullet.classList.add('bespoke-bullet-active');
							bullet.classList.remove('bespoke-bullet-inactive');
						} else {
							bullet.classList.add('bespoke-bullet-inactive');
							bullet.classList.remove('bespoke-bullet-active');
						}
					});
				});
			},

			canGoForwardsInSlide = function() {
				return bullets[activeSlideIndex][activeBulletIndex + 1] !== undefined;
			},

			canGoBackwardsInSlide = function() {
				return bullets[activeSlideIndex][activeBulletIndex - 1] !== undefined;
			},

			next = function() {
				var nextSlideIndex = activeSlideIndex + 1;

				if (canGoForwardsInSlide()) {
					activateBullet(activeSlideIndex, activeBulletIndex + 1);
					return false;
				} else if (bullets[nextSlideIndex]) {
					activateBullet(activeSlideIndex + 1, 0);
				}
			},

			prev = function() {
				var prevSlideIndex = activeSlideIndex - 1;

				if (canGoBackwardsInSlide()) {
					activateBullet(activeSlideIndex, activeBulletIndex - 1);
					return false;
				} else if (bullets[prevSlideIndex]) {
					activateBullet(prevSlideIndex, bullets[prevSlideIndex].length - 1);
				}
			};

		activateBullet(0, 0);

		deck.on('next', function() {
			return next();
		});

		deck.on('prev', function() {
			return prev();
		});

		deck.on('slide', function(e) {
			activateBullet(e.index, 0);
		});
	};

}(bespoke));