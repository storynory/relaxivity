
const srcset = (title, text, url, src, alt) => {


     return `<div class="card flex-md-row mb-4 box-shadow h-md-250">
            <div class="card-body d-flex flex-column align-items-start">
              <strong class="d-inline-block mb-2 text-success">Design</strong>
              <h3 class="mb-0">
                <a class="text-dark" href="${url}">${title}</a>
              </h3>
              <div class="mb-1 text-muted">Nov 11</div>
              <p class="card-text mb-auto">${text}</a>
              <image src="https://relaxivity.app/images/300/${src}" alt="${alt}" />
            </div>
      </div>`


}



module.exports = srcset