//Run script on page load
function handleSubmit(e) {
    e.preventDefault();
    const listItem = `<li>
                        <span class="shopping-item">${$("input").val()}</span>
                        <div class="shopping-item-controls">
                            <button class="shopping-item-toggle">
                                 <span class="button-label">check</span>
                             </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                        </div>
                     </li>`
    $("ul").append(listItem)
    this.reset();
}

function toggleCheck() {
    $(this).parents("li").children(".shopping-item").toggleClass("shopping-item__checked");
}

function deleteItem() {
    $(this).parents('li').remove();
}

$(() => {
    $("form").submit(handleSubmit);
    $(".shopping-list").on("click", ".shopping-item-delete", deleteItem);
    $(".shopping-list").on("click", ".shopping-item-toggle", toggleCheck);
})