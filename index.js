//Run script on page load
function handleSubmit(e) {
    e.preventDefault();
    console.log($("input").val());
    this.reset();
}
function toggleCheck (){

}

function deleteItem (){

}

$(()=>{
$("form").submit(handleSubmit)
})