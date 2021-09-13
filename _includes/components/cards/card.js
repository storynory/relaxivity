const card = (title, img, text) => {
    return `<div class="card">
              <header>
                <h3>${title}</h3> 
              </header>
            
                <figure>
                  <img src="${img}" alt="${title}/>
                <figure>
                ${text}
           
            </div>`;
}

module.export = card;