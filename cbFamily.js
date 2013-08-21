/**
 * Make a checkbox parent of other checkboxes. Functionality:
 *   - If the parent is clicked the children are checked/unchecked based on the parent.
 *   - If all the children are checked, parent gets checked too.
 *   - If there is an unchecked item in the children and if the parent is checked, it gets unchecked.
 *   - children can be a function. In this case, that function is run agaist the parent in order to find the children.
 *     This is useful for groups of checkboxes.
 *
 * Example group usage:
 * $(".titles input:checkbox").cbFamily(function (){
 *     return $(this).parents("div:first").next().find("input:checkbox");
 * });
 * 
 * Based and improved on http://tech.tiffanyandjeremy.com/Articles/Two-level-JQuery-check-and-uncheck-all-child-checkboxes-of-a-parent-checkbox
 */
;(function($){
    $.fn.cbFamily = function(children) {        
        return this.each(function() {
            var $this = $(this);
            var els;
            if ($.isFunction(children)) {
                els = children.call($this);
            } else {
                els = $(children);
            }
            $this.bind("click.cbFamily", function() {
                els.attr('checked', this.checked).change();
            });
            els.bind("click.cbFamily", function() {
                if ($this.attr('checked') == true && this.checked == false) {
                    $this.attr('checked', false).change();
                }
                if (this.checked == true) {
                    $this.attr('checked',  els.length == els.filter("input:checked").length).change();
                }
            });
        });
    };
})(jQuery);