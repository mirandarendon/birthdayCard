// candle image pairs
const candles = [
    { on: "c1-on", off: "c1-off" },
    { on: "c2-on", off: "c2-off" },
    { on: "c3-on", off: "c3-off" }
];

const note = document.getElementById("note");
let blownOutCount = 0;

candles.forEach(({ on, off }) => {
    const onImg = document.getElementById(on);
    const offImg = document.getElementById(off);

    if (!onImg || !offImg) return;

    onImg.addEventListener("click", () => {
        //already blown out - nothing
        if (onImg.classList.contains("hidden")) return;

        //swap to off image
        onImg.classList.add("hidden");
        offImg.classList.remove("hidden");

        blownOutCount += 1;

        //when all candles out show note
        if (blownOutCount === candles.length && note) {
            note.classList.remove("hidden")
        }
    })
})