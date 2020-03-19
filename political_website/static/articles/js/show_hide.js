function show_hide($element,id)
{
    
    
    if($element.parent().next().css('display') == 'none' || $element.parent().next().css("visibility") == "hidden")
    {
        $element.parent().next().slideDown();
        $element.children().removeClass('icon-down-circled');
        $element.children().addClass('icon-up-circled');
        $(document.getElementById(id)).slideDown();
        // var article = document.getElementById(id);
        // article.style.display = 'block';
    }
    else
    {
        $element.parent().next().slideUp();
        $element.children().removeClass('icon-up-circled');
        $element.children().addClass('icon-down-circled');
        $(document.getElementById(id)).slideUp();
        // var article = document.getElementById(id);
        // article.style.display = 'none';
    }
}