export default {
    props: ['pages','getProducts'],
    template: `<nav aria-label="Page navigation example">
    <ul class="pagination">

      <li class="page-item" :class="{disabled: !pages.has_pre}">
        <a class="page-link" href="#" aria-label="Previous" @click.prevent="getProducts(pages.current_page-1)">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" :class="{active: page===pages.current_page}" v-for="page in pages.total_pages" :key="page+123">
        <a class="page-link" href="#" @click.prevent="getProducts(page)">{{page}}</a>
      </li>

      <li class="page-item" :class="{disabled: !pages.has_next}">
        <a class="page-link" href="#" aria-label="Next" @click.prevent="getProducts(pages.current_page+1)">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>`,
};

// 註解：當前為props寫法
// template中三個<li>代表上一頁、頁數、下一頁

// 1.頁數 <li class="page-item" :class="{active: page===pages.current_page}" v-for="page in pages.total_pages" :key="page+123">
// v-for="page in pages.total_pages" 取得頁數有幾頁的數字，就去跑幾次迴圈
// :class="{active: page===pages.current_page}" 當page===pages.current_page時class就加上active屬性，當前頁面顯示藍色底