const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <img src="/images/utensils.jpg" alt="Utensils" />
                <div>
                    Photo by <a href="https://unsplash.com/@hudsoncrafted?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Debby Hudson</a> on <a href="https://unsplash.com/photos/gray-fork-spoon-and-butter-knife-on-plate-with-black-table-napkin-pomybSOZsts?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404