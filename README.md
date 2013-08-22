cbFamily
========

Checkbox group (parent/children) functionality. Makes a checkbox parent of other checkboxes.

 - If the parent is clicked the children are checked/unchecked based on the parent.
 - If all the children are checked, parent gets checked too.
 - If there is an unchecked item in the children and if the parent is checked, it gets unchecked.
 - `children` can be a function. In this case, that function is run agaist the parent in order to find the children.
   This is useful for groups of checkboxes.
 - Checks/unchecks parent based on the initial status of its children at start.

Example group usage:
```jquery
    $(".titles input:checkbox").cbFamily(function (){
        return $(this).parents("div:first").next().find("input:checkbox");
    });
```

[Try a Demo](http://halilim.github.io/cbFamily/)

Based and improved on http://tech.tiffanyandjeremy.com/Articles/Two-level-JQuery-check-and-uncheck-all-child-checkboxes-of-a-parent-checkbox