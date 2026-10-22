class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = '.title';
    this.items = '.inventory_item';
    this.sortDropdown = '[data-test="product-sort-container"]';
    this.cartBadge = '.shopping_cart_badge';
    this.cartLink = '.shopping_cart_link';
  }

  async addToCart(productSlug) {
    await this.page.click(`[data-test="add-to-cart-${productSlug}"]`);
  }

  async sortBy(value) {
    await this.page.selectOption(this.sortDropdown, value);
  }

  async openCart() {
    await this.page.click(this.cartLink);
  }

  itemNames() {
    return this.page.locator('.inventory_item_name');
  }

  itemPrices() {
    return this.page.locator('.inventory_item_price');
  }
}

module.exports = { InventoryPage };