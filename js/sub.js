const header = document.querySelector(".web-header");
const headerHeight = header.getBoundingClientRect().height;
const headerGnb = document.querySelector(".web-gnb");
const webLogo = document.querySelector(".web-logo");
 
window.addEventListener("scroll", () => {
      if (window.scrollY > headerHeight) {
      header.setAttribute("style", "background: white; border-bottom: 1px solid #ddd; transition: .2s all;");
      headerGnb.setAttribute("style", "color: #000;");
      webLogo.setAttribute("style", "color: #000;");
   } else {
      header.setAttribute("style", "background: transparent; color: #000;");
      headerGnb.setAttribute("style", "color: #fff;");
      webLogo.setAttribute("style", "color: #fff;");
   }
});

(function () {
	$('.mobile-menu-wrapper').on('click', function() {
		$('.mobile-menu').toggleClass('animate');
		$('.mobile-menu-overlay').toggleClass('visible');
	})
	$('.mobile-menu-overlay > ul > li > a').on('click', function () {
		$('.mobile-menu').removeClass('animate');
		$('.mobile-menu-overlay').removeClass('visible');
	})
})();

// var productBtn = $('.btn').click(function () {
//     if (this.id == 'all') {
//         $('#items > li').fadeIn(450);
//     } else {
//         var el = $('.' + this.id).fadeIn(450);
//         $('#items > li').not(el).hide();
//     }
//     productBtn.removeClass('active');
//     $(this).addClass('active');
// })


// list layout
function layout(items) {
    items.forEach(item => {
        let template = `
        <li class="filterme ${item.filter1} ${item.filter2} ${item.filter3}">
            <a href="${item.link}"><img src="${item.thumb}" class="thumb-img">
            <p class="brand">[${item.brand}]</p>
            <h5 class="title">${item.title}</h5>
            <p class="list-filter"><span class="list-category">${item.storage}</span> <span class="list-category">${item.marble}</span> <span class="list-category">${item.usage}</span></p>
            <p class="price"><span>kg당</span>${item.price}</p></a>
        </li>
        `
        $('#items').append(template);
    });
}
layout(products);


//Pagination
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("items");
const listItems = paginatedList.querySelectorAll("li")
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 12;
const pageCount = Math.ceil(listItems.length / 12);
let currentPage = 1;

const disableButton = (button) => {
    button.classList.add("disabled");
    button.setAttribute("disabled", true);
};

const enableButton = (button) => {
    button.classList.remove("disabled");
    button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
    if (currentPage === 1) {
        disableButton(prevButton);
    } else {
        enableButton(prevButton);
    }

    if (pageCount === currentPage) {
        disableButton(nextButton);
    } else {
        enableButton(nextButton);
    }
};

const handleActivePageNumber = () => {
    document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
            button.classList.add("active");
        }
    });
};

const appendPageNumber = (index) => {
    const pageNumber = document.createElement("button");
    pageNumber.className = "pagination-number";
    pageNumber.innerHTML = index;
    pageNumber.setAttribute("page-index", index);
    pageNumber.setAttribute("aria-label", "Page " + index);

    paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
    for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
    }
};

const setCurrentPage = (pageNum) => {
    currentPage = pageNum;

    handleActivePageNumber();
    handlePageButtonsStatus();

    const prevRange = (pageNum - 1) * paginationLimit;
    const currRange = pageNum * paginationLimit;

    listItems.forEach((item, index) => {
        item.classList.add("hidden");
        if (index >= prevRange && index < currRange) {
            item.classList.remove("hidden");
        }
    });
};

window.addEventListener("load", () => {
    getPaginationNumbers();
    setCurrentPage(1);

    prevButton.addEventListener("click", () => {
        setCurrentPage(currentPage - 1);
    });

    nextButton.addEventListener("click", () => {
        setCurrentPage(currentPage + 1);
    });

    document.querySelectorAll(".pagination-number").forEach((button) => {
        const pageIndex = Number(button.getAttribute("page-index"));

        if (pageIndex) {
            button.addEventListener("click", () => {
                setCurrentPage(pageIndex);
            });
        }
    });
});
