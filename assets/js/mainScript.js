
const generatedContent = document.getElementById('containerForGeneratedContent')

generatedContent.innerHTML = mainPageContent()

function mainPageContent() {
    const renderMainPageContent =
        `<section id="mainSection">
            <a href="https://github.com/Hacking-NASSA-with-HTML/animated_rotate_sphere"
                target="_blank"><img width="149" height="149"
                src="./assets/img/fork_me_left_red.png"
                style="position: fixed; top:0; left:0" alt="Fork me on GitHub">
            </a>
            <h1 class="titleH1">They Make The World Better</h1>
        </section>
        `
    return renderMainPageContent
}
