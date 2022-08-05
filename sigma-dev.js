// add event listener to the class "product-tabs_tab-link w--current"
document.querySelector('.product-tabs_tab-link.w--current').addEventListener('click', function() {
    // set the class ".product-tabs_tab-link" to display:none
    document.querySelector('.product-tabs_tab-link').style.display = 'none';
    // set the class ".product-tabs_tab-link w--current" to display:block
    document.querySelector('.product-tabs_tab-link.w--current').style.display = 'block';
}
);