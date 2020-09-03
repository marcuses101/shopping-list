// event handlers

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

function handleCheck() {
    $(this).parents("li").children(".shopping-item").toggleClass("shopping-item__checked");
}

function handleDelete() {
    $(this).parents('li').remove();
}

//Run script on page load

$(() => {
    $("form").submit(handleSubmit);
    $(".shopping-list").on("click", ".shopping-item-delete", handleDelete) ;
    $(".shopping-list").on("click", ".shopping-item-toggle", handleCheck);
})