console.log(module);
function getDate() {
    const date = new Date();
    const today = date.getDay();
    // const days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    var day = date.toLocaleDateString("en-US", options);
    return day;
}
module.exports = getDate;