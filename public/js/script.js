const dataContainer = document.getElementById('dataContainer');

document.getElementById('showSpells').addEventListener('click', () => {
    fetch('/spells')
        .then(response => response.json())
        .then(data => {
            dataContainer.innerHTML = '';
            data.spells.forEach(spell => {
                const spellCard = `
                    <div class="spell-card">
                        <h3>${spell.name}</h3>
                        <p>Index: ${spell.index}</p>
                        <a href="/spell/${spell.index}">View Details</a> <!-- Link to spell details -->
                    </div>
                `;
                dataContainer.innerHTML += spellCard;
            });
        })
        .catch(err => {
            console.error('Error fetching spells:', err);
        });
});

document.getElementById('showFeats').addEventListener('click', () => {
    fetch('/feats')
        .then(response => response.json())
        .then(data => {
            dataContainer.innerHTML = '';
            data.feats.forEach(feat => {
                const featCard = `
                    <div class="feat-card">
                        <h3>${feat.name}</h3>
                        <p>Index: ${feat.index}</p>
                        <a href="/feat/${feat.index}">View Details</a> <!-- Link to feat details -->
                    </div>
                `;
                dataContainer.innerHTML += featCard;
            });
        })
        .catch(err => {
            console.error('Error fetching feats:', err);
        });
});

document.getElementById('showItems').addEventListener('click', () => {
    fetch('/items')
        .then(response => response.json())
        .then(data => {
            dataContainer.innerHTML = '';
            data.items.forEach(item => {
                const itemCard = `
                    <div class="item-card">
                        <h3>${item.name}</h3>
                        <p>Index: ${item.index}</p>
                        <a href="/item/${item.index}">View Details</a> <!-- Link to item details -->
                    </div>
                `;
                dataContainer.innerHTML += itemCard;
            });
        })
        .catch(err => {
            console.error('Error fetching items:', err);
        });
});


