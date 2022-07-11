const generateHTMLPage = require("./generate_HTML")

function generateFinalHTML (){
    return `
</div>
    </main>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
    <script src="index.js"></script>
  </body>
</html>
`
}

module.exports = generateFinalHTML