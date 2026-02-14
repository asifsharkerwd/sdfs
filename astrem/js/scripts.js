(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});

// owl-csel1

		$("#owl-csel1").owlCarousel({
					items: 3,
					autoplay: true,
					autoplayTimeout: 3000,
					startPosition: 0,
					rtl: false,
					loop: true,
					margin: 15,
					dots: true,
					nav: true,
					// center:true,
					// stagePadding: 2,
					navText: [
								'<i class="fa-solid fa-arrow-left"></i>',
								'<i class="fa-solid fa-arrow-right"></i>'
							],
					navContainer: '.main-content .custom-nav',
					responsive:{
						0: {
							items: 1.2,						
						},
						767: {
							items: 2.2,	
							center:true,					
						},
						
						1200: {
							items: 3,						
						}
					}

				});
		
				// owl-csel2

				$("#owl-csel2").owlCarousel({
					items:2,
					autoplay: true,
					autoplayTimeout: 3000,
					startPosition: 0,
					rtl: false,
					loop: true,
					margin: 15,
					dots: true,
					nav: true,
					navText: [
								'<i class="fa-solid fa-arrow-left"></i>',
								'<i class="fa-solid fa-arrow-right"></i>'
							],
					navContainer: '.main-content2 .custom-nav',
					responsive:{
						0: {
							items: 1.2,						
						},
						767: {
							items: 2,						
						},
						1200: {
							items: 1.3,						
						}
					}

				});


				
				// owl-csel2

				$("#owl-csel3").owlCarousel({
  items: 5,
  loop: true,
  margin: 15,
  center: true,
  rtl: false,

  autoplay: true,
  autoplayTimeout: 0,          // KEY: no stop
  autoplaySpeed: 6000,         // Controls smoothness (bigger = slower)
  smartSpeed: 6000,
  autoplayHoverPause: false,   // keeps flowing

  dots: false,
  nav: false,

  navText: [
    '<i class="fa-solid fa-arrow-left"></i>',
    '<i class="fa-solid fa-arrow-right"></i>'
  ],
  navContainer: '.main-content3 .custom-nav',

  responsive: {
    0: {
      items: 1.2
    },
    767: {
      items: 2
    },
    
    1200: {
      items: 5
    }
  }
});




				
		
		
		
		
		
		
		
		
	});
})(jQuery);




$(document).ready(function() {
            const $folderWrapper = $('.folder-wrapper');
            const $projectCards = $('.project-card');

            $folderWrapper.on('mouseenter', function() {
                $projectCards.each(function() {
                    const index = $(this).data('index');
                    const baseRotation = (index - 1.5) * 8;
                    const hoverRotation = (index - 1.5) * 25;
                    const hoverY = -120 - (index * 40);
                    const hoverX = (index - 1.5) * 80;

                    $(this).css({
                        'transform': `translateY(${hoverY}px) translateX(${hoverX}px) rotate(${hoverRotation}deg)`,
                        'z-index': index
                    });
                });

                $folderWrapper.css('transform', 'scale(1.02)');
            });

            $folderWrapper.on('mouseleave', function() {
                $projectCards.each(function() {
                    const index = $(this).data('index');
                    const baseRotation = (index - 1.5) * 8;
                    const baseY = index * -8;
                    const baseX = index * 3;

                    $(this).css({
                        'transform': `translateY(${baseY}px) translateX(${baseX}px) rotate(${baseRotation}deg)`,
                        'z-index': index
                    });
                });

                $folderWrapper.css('transform', 'scale(1)');
            });

            // Initial positioning
            $projectCards.each(function() {
                const index = $(this).data('index');
                const baseRotation = (index - 1.5) * 8;
                const baseY = index * -8;
                const baseX = index * 3;

                $(this).css({
                    'transform': `translateY(${baseY}px) translateX(${baseX}px) rotate(${baseRotation}deg)`,
                    'z-index': index
                });
            });
        });




		// =================end to end scroll Animation for the projects section========

		$(window).on("scroll", function () {

			$(".web-end-to-end-item").each(function () {
				const itemTop = $(this).offset().top;
				const itemHeight = $(this).outerHeight();
				const scrollTop = $(window).scrollTop();
				const windowHeight = $(window).height();

				if (scrollTop + windowHeight / 2 > itemTop &&
					scrollTop + windowHeight / 2 < itemTop + itemHeight) {

					$(".web-end-to-left span").removeClass("active");
					$(this).find(".web-end-to-left span").addClass("active");
				}
			});

		});


		// ==========circle mouse movement==============



		const circle = document.getElementById("we_circle-inner");
		const labels = circle.querySelectorAll(".how_we-label");

		circle.addEventListener("mousemove", (e) => {
		const rect = circle.getBoundingClientRect();
		const x = e.clientX - rect.left - rect.width / 2;
		const y = e.clientY - rect.top - rect.height / 2;

		labels.forEach((label, i) => {
			const strength = 0.03 + i * 0.01; // movement depth
			label.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
		});
		});

		circle.addEventListener("mouseleave", () => {
		labels.forEach(label => {
			label.style.transform = "translate(0,0)";
		});
		});


	///==================== Faq  accordion js =============

	 document.addEventListener('DOMContentLoaded', () => {
            const headers = document.querySelectorAll('.accordion-header');

            // 1. Set initial height for the item hardcoded as 'active' in HTML
            const activeItem = document.querySelector('.accordion-item.active');
            if (activeItem) {
                const content = activeItem.querySelector('.accordion-content');
                content.style.maxHeight = content.scrollHeight + "px";
            }

            headers.forEach(header => {
                header.addEventListener('click', () => {
                    const currentItem = header.parentElement;
                    const isAlreadyOpen = currentItem.classList.contains('active');

                    // 2. Close ALL items first
                    document.querySelectorAll('.accordion-item').forEach(item => {
                        item.classList.remove('active');
                        item.querySelector('.accordion-content').style.maxHeight = null;
                    });

                    // 3. If the clicked item wasn't open, open it now
                    if (!isAlreadyOpen) {
                        currentItem.classList.add('active');
                        const content = currentItem.querySelector('.accordion-content');
                        content.style.maxHeight = content.scrollHeight + "px";
                    }
                });
            });

            // 4. Handle Window Resize
            // (If the user resizes the window, the text wraps differently, 
            // so we need to update the height of the open item)
            window.addEventListener('resize', () => {
                const activeItem = document.querySelector('.accordion-item.active');
                if (activeItem) {
                    const content = activeItem.querySelector('.accordion-content');
                    // Reset max-height to 'none' momentarily to get the real new height
                    content.style.maxHeight = 'none'; 
                    // Then set it back to the specific pixel value
                    const newHeight = content.scrollHeight;
                    content.style.maxHeight = newHeight + "px";
                }
            });
        });



		// //// side menu js 

		const menuBtn = document.getElementById("menuBtn");
		const slideMenu = document.getElementById("slideMenu");

		menuBtn.addEventListener("click", () => {
		slideMenu.classList.toggle("active");
		});

		menuBtn.addEventListener("click", () => {
		menuBtn.classList.toggle("active");
		});

	///============Images_slider==================

	  document.addEventListener("DOMContentLoaded", () => {
            const slider = document.querySelector(".Images_slider");
            const originalImages = Array.from(slider.children);

            // We duplicate the list to ensure the infinite loop works
            originalImages.forEach(img => {
                const clone = img.cloneNode(true);
                clone.setAttribute('aria-hidden', 'true'); 
                slider.appendChild(clone);
            });
        });

		//======= aos animate=======

		AOS.init({
			duration: 1900,
		})

		// ========mySwiper==========

		const swiper = new Swiper(".mySwiper", {
            // Smart Play Settings
            loop: true,
            speed: 7000, // Adjust this (ms) for overall speed (higher is slower)
            allowTouchMove: true,
            freeMode: true,
            
            autoplay: {
                delay: 0,
                disableOnInteraction: false, // Keeps playing after user swipe
                pauseOnMouseEnter: true,      // Pause when user hovers to read
            },

            // Layout Settings
            spaceBetween: 10,
            grabCursor: true,
            
            // Responsive Breakpoints
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                765: {
                    slidesPerView: 2.5,
                },
                1000: {
                    slidesPerView: 3.5,
                },
                1200: {
                    slidesPerView: 5.5,
                }
            }
        });