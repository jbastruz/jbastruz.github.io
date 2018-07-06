$( function () {
     
    var charts = $( ".chart" );
     
    /* FUNCTIONS */
     
    // Return boolean when an element is visible on screen
    function isVisible ( element ) {
        var
            viewPortHeight = $( window ).height(), // Viewport Height
            scrollTop = $( window ).scrollTop(), // Scroll Top
            currElementPosY = $( element ).offset().top,
            elementHeight = $( element ).height();
         
        return ( currElementPosY + elementHeight > scrollTop && currElementPosY < ( viewPortHeight + scrollTop ) )
    }
     
    // Animate chart only when you see it
    function animateChartWhenVisible ( chart ) {
        for ( var i = 0, count = chart.length; i < count; i++ ) {
            if ( isVisible( chart[ i ] )  ) {
                /*$( chart[ i ] ).addClass("skillbar");*/
				jQuery(document).ready(function(){
					jQuery('.skillbar').each(function(){
						jQuery(this).find('.skillbar-bar').animate({
							width:jQuery(this).attr('data-percent')
						},3000);
					});
				});
            }
        }
    }
     
    /* FUNCTIONS END */
     
    // On scroll
    $( window ).scroll( function () { 
        animateChartWhenVisible( charts );
    } );
     
    /* On load */   
    animateChartWhenVisible( charts );
     
} );