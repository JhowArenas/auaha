function nextItem(root) {
    var count = $("#" + root + " div").length;
    var firstElement = $("#" + root + " div").get(0);

    $("#" + root + " div").get(0).remove;
    $("#" + root).last().append(firstElement)
}

function prevItem(root) {
    var count = $("#" + root + " div").length;
    var firstElement = $("#" + root + " div").get(count - 1);

    $("#" + root + " div").get(count - 1).remove;
    $("#" + root).prepend(firstElement)
}