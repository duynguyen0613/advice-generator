window.onload = () => {
    // https://api.adviceslip.com/advice

    async function getAdvice() {
        const data = await fetch("https://api.adviceslip.com/advice", {method: "GET"});
        return await data.json();
    }

    getAdvice().then(advice => {
        const adviceid = advice.slip.id;
        const adviceText = advice.slip.advice;

        document.getElementById("root").innerHTML = `
            <div class='card'>
                <p class='card__advice--text'>ADVICE  #  ${adviceid}</>
                <figure>
                    <blockquote cite="">
                        <p>"${adviceText}"</p>
                    </blockquote>
                </figure>
                <div>
                    <img class='card__divider--img' src='./images/pattern-divider-mobile.svg'/>
                </di>
                <div>
                    <img class='card__icon--img' src='./images/icon-dice.svg'/>
                </div>
            </div>
        
        `
    });
}