$(document).ready(function()
{
    $("#band-wrapper img[title]").tooltip({effect: 'fade',
	           // make fadeOutSpeed similar to the browser's default
		       //fadeOutSpeed: 100,
			   // tweak the position
		       position: "top center",
			   opacity: 0.7});
	var items = $('#stage li'),itemsByTags = {};
	
	var itemsByTags2 = {};
	
	// Looping though all the li items:
	
	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');
		
		// Adding a data-id attribute. Required by the Quicksand plugin:
		elem.attr('data-id',i);
		
		$.each(tags,function(key,value){
			
		  // edited by Hieu (12/12/2011)
		  // hard coded stages in
		  if(value != 'Main Stage' && value != 'New Music Stage' && value != 'Alfred Square Stage' && value != 'ODonnell Gardens Stage' && value != 'The Push Stage' && value != 'Live N Local Stage' && value != 'New Music Stage' && value !='KIDZONE')
		  {
		  
			// Removing extra whitespace:
			value = $.trim(value);
			
			if(!(value in itemsByTags)){
				// Create an empty array to hold this item:
				itemsByTags[value] = [];
			}
			
			// Each item is added to one array per tag:
			// this is for the menu of all the dates
			itemsByTags[value].push(elem);
		  }
		  else
		  {
		  
			// Removing extra whitespace:
			value = $.trim(value);
			
			if(!(value in itemsByTags2)){
				// Create an empty array to hold this item:
				itemsByTags2[value] = [];
			}
			
			// Each item is added to one array per tag:
			// this is for the menu of all the locations
			// edited by Hieu (12/12/2011)
			itemsByTags2[value].push(elem);
		  }
		 
		});
		
	});
	
  
	// Creating the "Everything" option in the menu:
	// this is for the menu of everything -> Reset - show all music
	createList3('Reset - show all music',items);

	// Looping though the arrays in itemsByTags:
	$.each(itemsByTags,function(k,v){
		createList(k,v);
	});
	
	// Looping though the arrays in itemsByTags2:
	$.each(itemsByTags2,function(k,v){
		createList2(k,v);
	});
	
	// this is action control for the menu of all the dates
	$('#filter a').live('click',function(e){
		var link = $(this);
		
		link.addClass('active').siblings().removeClass('active');
		$('#filter2 a').removeClass('active');
		$('#filterAll a').removeClass('active');
		// Using the Quicksand plugin to animate the li items.
		// It uses data('list') defined by our createList function:
		
		$('#stage').quicksand(link.data('list').find('li'),
		   function()
		   {
              
			  // for the tooltip
	           $("#band-wrapper img[title]").tooltip({effect: 'fade',
	           // make fadeOutSpeed similar to the browser's default
		       //fadeOutSpeed: 100,
		       // tweak the position
		       position: "top center",
			   opacity: 0.7});
               $('#band-wrapper img').mouseleave(function() { 
                $('.tooltip').hide();
               });
			 //  $("#band-wrapper img").removeAttr("title");
             
		   }
		);
		e.preventDefault();
	});
	
	// this is action control for the menu of all the locations
	$('#filter2 a').live('click',function(e){
		var link = $(this);
		
		link.addClass('active').siblings().removeClass('active');
		
		$('#filterAll a').removeClass('active');
		// Using the Quicksand plugin to animate the li items.
		// It uses data('list') defined by our createList function:
		
		$('#stage').quicksand(link.data('list').find('li'),
		   function()
		   {
			  // for the tooltip
	           $("#band-wrapper img[title]").tooltip({effect: 'fade',
	           // make fadeOutSpeed similar to the browser's default
		       //fadeOutSpeed: 100,
		       // tweak the position
		       position: "top center",
			   opacity: 0.7});
			   //$("#band-wrapper img").removeAttr("title");
			   $('#band-wrapper img').mouseleave(function() {
		        
                $('.tooltip').hide();
               });
			   
		   }
		);
		e.preventDefault();
	});
	
	// this is action control for the menu of everything -> Reset - show all music
	$('#filterAll a').live('click',function(e){
		var link = $(this);
		
		link.addClass('active').siblings().removeClass('active');
		$('#filter a').removeClass('active');
		$('#filter2 a').removeClass('active');
		// Using the Quicksand plugin to animate the li items.
		// It uses data('list') defined by our createList function:
		
		$('#stage').quicksand(link.data('list').find('li'),
		   function()
		   {
			  // for the tooltip
	           $("#band-wrapper img[title]").tooltip({effect: 'fade',
	           // make fadeOutSpeed similar to the browser's default
		       //fadeOutSpeed: 100,
		       // tweak the position
		       position: "top center",
			   opacity: 0.7});
			   //$("#band-wrapper img").removeAttr("title");
			   $('#band-wrapper img').mouseleave(function() {
                $('.tooltip').hide();
               });
               
		   }
		);
		e.preventDefault();
	});
	
    
	// this is hardcoded click actions to show/hide when clicking on the date
	// note if Sun12Feb is clicked will show the location menu otherwise the location menu is hidden and the Reset - show all music menu is show
	$('#Sun12Feb').click(function() 
	{
		//$('#filterAll').hide();
		$('#filter2').show();
		
    });
	$('#Sat11Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Fri10Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Thu09Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Wed08Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Tue07Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Mon06Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Sun05Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#Sat04Feb').click(function() 
	{
		
		$('#filter2').hide();
		//$('#filterAll').show();
		
    });
	$('#filterAll').click(function() 
	{
		
		$('#filter2').hide();
		
    });
    $('#band-wrapper img').mouseleave(function() {
       $('.tooltip').hide();
    });
	//$('#filter a:first').click();
	//this is for the menu of all the dates
	function createList(text,items){
		
		// This is a helper function that takes the
		// text of a menu button and array of li items
		
		// Creating an empty unordered list:
		var ul = $('<ul>',{'class':'hidden'});
		
		$.each(items,function(){
			// Creating a copy of each li item
			// and adding it to the list:
			
			$(this).clone().appendTo(ul);
			
		});

		ul.appendTo('#band-wrapper');

		// Creating a menu item. The unordered list is added
		// as a data parameter (available via .data('list'):
		// use the date as the id and remove white space otherwise it is not working
		var newText = text.replace(/\s/g, "")
		
		
		var a = $('<a>',{
			html: text,
			id: newText,// use the date as the id added by Hieu (12/12/2011)
			href:'#',
			data: {list:ul}
		}).appendTo('#filter');
	}
	function createList2(text,items){
		
		// This is a helper function that takes the
		// text of a menu button and array of li items
		
		// Creating an empty unordered list:
		var ul = $('<ul>',{'class':'hidden'});
		
		$.each(items,function(){
			// Creating a copy of each li item
			// and adding it to the list:
			
			$(this).clone().appendTo(ul);
			
		});

		ul.appendTo('#band-wrapper');

		// Creating a menu item. The unordered list is added
		// as a data parameter (available via .data('list'):
		
		var a = $('<a>',{
			html: text,		
			href:'#',
			data: {list:ul}
		}).appendTo('#filter2');
	}
	function createList3(text,items){
		
		// This is a helper function that takes the
		// text of a menu button and array of li items
		
		// Creating an empty unordered list:
		var ul = $('<ul>',{'class':'hidden'});
		
		$.each(items,function(){
			// Creating a copy of each li item
			// and adding it to the list:
			
			$(this).clone().appendTo(ul);
			
		});

		ul.appendTo('#band-wrapper');
		// use the Reset - show all music as the id and remove white space otherwise it is not working
        var newText = text.replace(/\s/g, "")
		// Creating a menu item. The unordered list is added
		// as a data parameter (available via .data('list'):
		
		var a = $('<a>',{
			html: text,
			id: newText, // use the Reset - show all music as the id added by Hieu (12/12/2011)
			href:'#',
			data: {list:ul}
		}).appendTo('#filterAll');
	}
});