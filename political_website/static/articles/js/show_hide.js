function show_hide($element)
{
    console.log($element.parent().next());
    
    if($element.parent().next().css('display') == 'none' || $element.parent().next().css("visibility") == "hidden")
    {
        $element.parent().next().slideDown();
        $element.children().removeClass('icon-down-circled');
        $element.children().addClass('icon-up-circled');
    }
    else
    {
        $element.parent().next().slideUp();
        $element.children().removeClass('icon-up-circled');
        $element.children().addClass('icon-down-circled');
    }
}